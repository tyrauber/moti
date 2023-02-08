/// <reference types="react" />
import { ViewStyle } from 'react-native';
import { MotiTransitionProp } from '../../core';
export declare type MotiProgressBarProps = {
    /**
     * Number between 0-1
     *
     * @requires
     */
    progress: number;
    /**
     * Height of the bar in pixels.
     *
     * @default `12`
     */
    height?: number;
    color?: string;
    containerColor?: string;
    /**
     * Container border radius
     */
    borderRadius?: number;
    containerStyle?: ViewStyle;
    style?: ViewStyle;
    /**
     * Transition for the animation. See the `transition` docs from Moti's `<MotiView />` to see how to use it.
     *
     * @default
     * ```jsx
     * {
     *  type: 'timing',
     *  duration: 300,
     * }
     * ```
     */
    transition?: MotiTransitionProp<ViewStyle>;
    /**
     * @default `dark`
     */
    colorMode?: 'dark' | 'light';
    /**
     * @default false
     *
     * When `false`, Moti will warn you if you're re-rendering this component too often.
     */
    silenceRenderWarnings?: boolean;
};
export declare function MotiProgressBar({ height, progress, borderRadius, style, colorMode, containerColor, containerStyle, color, transition, silenceRenderWarnings, }: MotiProgressBarProps): JSX.Element;
