import React, { useEffect, useMemo, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDynamicAnimation, motify } from '../../core';
const MotiView = motify(View)();
export function MotiProgressBar({ height = 12, progress = 0, borderRadius = height / 2, style, colorMode = 'dark', containerColor = colorMode === 'dark' ? '#333' : '#eee', containerStyle, color = '#00C806', transition = {
    type: 'timing',
    duration: 200,
}, silenceRenderWarnings = false, }) {
    const barState = useDynamicAnimation(() => ({
        translateX: '-100%',
    }));
    // TODO this won't be necessary once Moti memoizes props for you.
    if (!transition) {
        console.error(`[moti] <ProgressBar /> "transition" prop must be undefined or a Moti transition object, but it got this type instead: ${typeof transition}.`, transition);
    }
    const transitionString = JSON.stringify(transition);
    const _transition = useMemo(() => JSON.parse(transitionString), [transitionString]);
    const outerStyle = useMemo(() => [
        styles.container,
        containerStyle,
        { height, borderRadius, backgroundColor: containerColor },
    ], [borderRadius, containerColor, containerStyle, height]);
    const progressStyle = useMemo(() => [style, styles.bar, { borderRadius, backgroundColor: color }], [borderRadius, color, style]);
    useEffect(function animateOnProgressChange() {
        const percent = Math.round(progress * 100);
        const translateX = `${percent - 100}%`;
        if (barState.current?.translateX !== translateX) {
            barState.animateTo((current) => ({ ...current, translateX }));
        }
    }, [barState, progress]);
    const unnecessaryRerenders = useRef({
        containerStyle: {
            previousValue: containerStyle,
            changes: 0,
        },
        style: {
            previousValue: style,
            changes: 0,
        },
    });
    useEffect(function checkUnnecessaryRerenders() {
        const isDev = typeof __DEV__ === 'undefined' || __DEV__;
        if (silenceRenderWarnings || !isDev) {
            return;
        }
        if (containerStyle !==
            unnecessaryRerenders.current.containerStyle.previousValue) {
            unnecessaryRerenders.current.containerStyle.changes += 1;
        }
        if (style !== unnecessaryRerenders.current.style.previousValue) {
            unnecessaryRerenders.current.style.changes += 1;
        }
        const warningProps = [];
        Object.entries(unnecessaryRerenders.current).forEach(([prop, { changes }]) => {
            if (changes > 5) {
                warningProps.push({ prop, changes });
            }
        });
        if (warningProps.length) {
            console.warn(`[moti] <MotiProgress /> is re-rendering often due to these props: ${warningProps
                .map((warning) => `"${warning.prop}: ${warning.changes} re-renders"`)
                .join(', ')}. This can reduce animation performance. Please memoize these props with useMemo, or create them outside of render code.`, `If you are intentionally re-rendering this often, for some reason, pass silenceRenderWarnings={true} on this component.`);
        }
    }, [containerStyle, silenceRenderWarnings, style]);
    return useMemo(() => (React.createElement(View, { style: outerStyle },
        React.createElement(MotiView, { transition: _transition, state: barState, style: progressStyle }))), [_transition, barState, outerStyle, progressStyle]);
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        overflow: 'hidden',
    },
    bar: {
        width: '100%',
        height: '100%',
    },
});
//# sourceMappingURL=index.js.map