import React, { ComponentType } from 'react';
import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { BaseAnimationBuilder, EntryExitAnimationFunction, LayoutAnimationFunction } from 'react-native-reanimated';
import type { MotiProps } from './types';
declare type AnimatedProps<Props> = {
    animatedProps?: Partial<Props>;
    layout?: BaseAnimationBuilder | LayoutAnimationFunction | typeof BaseAnimationBuilder;
    entering?: BaseAnimationBuilder | typeof BaseAnimationBuilder | EntryExitAnimationFunction | Keyframe;
    exiting?: BaseAnimationBuilder | typeof BaseAnimationBuilder | EntryExitAnimationFunction | Keyframe;
};
export default function motify<Style, Props extends {
    style?: Style;
}, Ref, ExtraProps, Animate = ViewStyle | ImageStyle | TextStyle>(ComponentWithoutAnimation: ComponentType<Props>): () => React.ForwardRefExoticComponent<React.PropsWithoutRef<Props & AnimatedProps<Props> & MotiProps<Animate, import("./types").StyleValueWithReplacedTransforms<Animate>, Partial<import("./types").StyleValueWithSequenceArraysWithoutTransform<import("./types").StyleValueWithReplacedTransforms<Animate>, "transform" | "scaleX" | "scaleY" | "translateX" | "translateY" | "perspective" | "rotate" | "rotateX" | "rotateY" | "rotateZ" | "scale" | "skewX" | "skewY" | Exclude<keyof Animate, "scaleX" | "scaleY" | "translateX" | "translateY" | "perspective" | "rotate" | "rotateX" | "rotateY" | "rotateZ" | "scale" | "skewX" | "skewY">, "scaleX" | "scaleY" | "translateX" | "translateY" | "perspective" | "rotate" | "rotateX" | "rotateY" | "rotateZ" | "scale" | "skewX" | "skewY" | Exclude<Exclude<keyof Animate, "scaleX" | "scaleY" | "translateX" | "translateY" | "perspective" | "rotate" | "rotateX" | "rotateY" | "rotateZ" | "scale" | "skewX" | "skewY">, "transform">> & import("./types").StyleValueWithSequenceArraysWithTransform>> & ExtraProps & {
    children?: React.ReactNode;
}> & React.RefAttributes<Ref>>;
export {};
