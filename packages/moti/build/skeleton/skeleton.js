import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, createContext, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { View as MotiView } from '../components';
import { AnimatePresence } from '../core';
const DEFAULT_SIZE = 32;
const baseColors = {
    dark: { primary: 'rgb(17, 17, 17)', secondary: 'rgb(51, 51, 51)' },
    light: {
        primary: 'rgb(250, 250, 250)',
        secondary: 'rgb(205, 205, 205)',
    },
};
const makeColors = (mode) => [
    baseColors[mode].primary,
    baseColors[mode].secondary,
    baseColors[mode].secondary,
    baseColors[mode].primary,
    baseColors[mode].secondary,
    baseColors[mode].primary,
];
let defaultDarkColors = makeColors('dark');
let defaultLightColors = makeColors('light');
for (let i = 0; i++; i < 3) {
    defaultDarkColors = [...defaultDarkColors, ...defaultDarkColors];
    defaultLightColors = [...defaultLightColors, ...defaultLightColors];
}
export default function Skeleton(props) {
    const skeletonGroupContext = useContext(SkeletonGroupContext);
    const { radius = 8, children, show = skeletonGroupContext ?? !children, width, height = children ? undefined : DEFAULT_SIZE, boxHeight, colorMode = 'dark', colors = colorMode === 'dark' ? defaultDarkColors : defaultLightColors, backgroundColor = colors[0] ??
        colors[1] ??
        baseColors[colorMode]?.secondary, backgroundSize = 6, disableExitAnimation, transition, } = props;
    const [measuredWidth, setMeasuredWidth] = useState(0);
    const getBorderRadius = () => {
        if (radius === 'square') {
            return 0;
        }
        if (radius === 'round') {
            return 99999;
        }
        return radius;
    };
    const borderRadius = getBorderRadius();
    const getOuterHeight = () => {
        if (boxHeight != null)
            return boxHeight;
        if (show && !children) {
            return height;
        }
        return undefined;
    };
    const outerHeight = getOuterHeight();
    const style = {
        ...props?.style,
        minHeight: height ?? props?.style?.height,
        minWidth: width ?? (props?.style?.width ?? (children ? undefined : DEFAULT_SIZE))
    };
    return !show ? (children) : (React.createElement(View, { style: style },
        children,
        React.createElement(AnimatePresence, null,
            React.createElement(MotiView, { style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    borderRadius,
                    width: width ?? (children ? '100%' : DEFAULT_SIZE),
                    height: height ?? '100%',
                    overflow: 'hidden',
                }, animate: {
                    backgroundColor,
                    opacity: 1,
                }, transition: {
                    type: 'timing',
                }, exit: !disableExitAnimation && {
                    opacity: 0,
                }, onLayout: ({ nativeEvent }) => {
                    if (measuredWidth === nativeEvent.layout.width)
                        return;
                    setMeasuredWidth(nativeEvent.layout.width);
                }, pointerEvents: "none" },
                React.createElement(AnimatedGradient
                // force a key change to make the loop animation re-mount
                , { 
                    // force a key change to make the loop animation re-mount
                    key: `${JSON.stringify(colors)}-${measuredWidth}-${JSON.stringify(transition || null)}`, colors: colors, backgroundSize: backgroundSize, measuredWidth: measuredWidth, transition: transition })))));
}
const AnimatedGradient = React.memo(function AnimatedGradient({ measuredWidth, colors, backgroundSize, transition = {}, }) {
    return (React.createElement(MotiView, { style: StyleSheet.absoluteFillObject, from: { opacity: 0 }, transition: {
            type: 'timing',
            duration: 200,
        }, animate: measuredWidth
            ? {
                opacity: 1,
            }
            : undefined },
        React.createElement(MotiView, { style: [
                StyleSheet.absoluteFillObject,
                {
                    width: measuredWidth * backgroundSize,
                },
            ], from: {
                translateX: 0,
            }, animate: measuredWidth
                ? {
                    translateX: -measuredWidth * (backgroundSize - 1),
                }
                : undefined, transition: {
                loop: true,
                delay: 200,
                type: 'timing',
                duration: 3000,
                ...transition,
            } },
            React.createElement(LinearGradient, { colors: colors, start: [0.1, 1], end: [1, 1], style: StyleSheet.absoluteFillObject }))));
}, function propsAreEqual(prev, next) {
    if (prev.measuredWidth !== next.measuredWidth)
        return false;
    if (prev.backgroundSize !== next.backgroundSize)
        return false;
    const didColorsChange = prev.colors.some((color, index) => {
        return color !== next.colors[index];
    });
    if (didColorsChange)
        return false;
    // transition changes will not be respected, but it'll be in the key
    return true;
});
const SkeletonGroupContext = createContext(undefined);
function SkeletonGroup({ children, show, }) {
    return (React.createElement(SkeletonGroupContext.Provider, { value: show }, children));
}
Skeleton.Group = SkeletonGroup;
//# sourceMappingURL=skeleton.js.map