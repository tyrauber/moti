import { MotiPressableContext } from './context';
import type { MotiPressableInteractionProp } from './types';
declare type Factory = (containers: MotiPressableContext['containers']) => ReturnType<MotiPressableInteractionProp>;
/**
 * `useMotiPressables` lets you access the interaction state of *all* parent `MotiPressable` components.
 *
 * This offers more complex use-cases over `useMotiPressable`, which only lets you access the interaction state of a single parent `MotiPressable` at a time.
 *
 * Say you have a parent pressable, with a list of items:
 *
 * ```tsx
 * <MotiPressable id="list">
 *   {items.map(({ id }) => (
 *     <MotiPressable id={'item-' + id} key={id}>
 *       <Item id={id}  />
 *     </MotiPressable>
 *   )}
 * </MotiPressable>
 * ```
 *
 * Then, in your component, you can access each unique `MotiPressable`'s interaction state:
 *
 * ```tsx
 * const Item = ({ id }) => {
 *  const state = useMotiPressables((containers) => {
 *    'worklet'
 *
 *    const list = containers.list.value
 *    const item = containers.['item-' + id].value
 *
 *    // when hovering a list,
 *    // fade out all items except the one actually hovered
 *
 *    let opacity = 1
 *    if (item.hovered || item.pressed) {
 *      opacity = 1
 *    } else if (list.hovered) {
 *      opacity = 0.7
 *    }
 *
 *    return {
 *      opacity,
 *    }
 *  })
 *
 *  return <MotiView state={state} />
 * }
 * ```
 *
 * Example shown [here](https://twitter.com/FernandoTheRojo/status/1430717474778066944)
 *
 * <img height={300} width={400} src="https://pbs.twimg.com/media/E9rqA35XIAQmbuk?format=jpg&name=4096x4096" />
 */
export declare function useMotiPressables(
/**
 * Function that receives the interaction state from all parent containers and returns a style object/
 * @worklet
 */
factory: Factory, deps?: readonly any[]): {
    __state: Readonly<{
        value: Partial<import("../..").StyleValueWithSequenceArraysWithoutTransform<import("../..").StyleValueWithReplacedTransforms<import("react-native").ViewStyle>, "transform" | "backfaceVisibility" | "backgroundColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderBottomWidth" | "borderColor" | "borderEndColor" | "borderLeftColor" | "borderLeftWidth" | "borderRadius" | "borderRightColor" | "borderRightWidth" | "borderStartColor" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "borderTopWidth" | "borderWidth" | "opacity" | "testID" | "elevation" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderEndWidth" | "borderStartWidth" | "bottom" | "display" | "end" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "zIndex" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "perspective" | "rotate" | "rotateX" | "rotateY" | "rotateZ" | "scale" | "skewX" | "skewY", "backfaceVisibility" | "backgroundColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderBottomWidth" | "borderColor" | "borderEndColor" | "borderLeftColor" | "borderLeftWidth" | "borderRadius" | "borderRightColor" | "borderRightWidth" | "borderStartColor" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "borderTopWidth" | "borderWidth" | "opacity" | "testID" | "elevation" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderEndWidth" | "borderStartWidth" | "bottom" | "display" | "end" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "zIndex" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "perspective" | "rotate" | "rotateX" | "rotateY" | "rotateZ" | "scale" | "skewX" | "skewY"> & import("../..").StyleValueWithSequenceArraysWithTransform> | {
            value: Partial<import("../..").StyleValueWithSequenceArraysWithoutTransform<import("../..").StyleValueWithReplacedTransforms<import("react-native").ViewStyle>, "transform" | "backfaceVisibility" | "backgroundColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderBottomWidth" | "borderColor" | "borderEndColor" | "borderLeftColor" | "borderLeftWidth" | "borderRadius" | "borderRightColor" | "borderRightWidth" | "borderStartColor" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "borderTopWidth" | "borderWidth" | "opacity" | "testID" | "elevation" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderEndWidth" | "borderStartWidth" | "bottom" | "display" | "end" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "zIndex" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "perspective" | "rotate" | "rotateX" | "rotateY" | "rotateZ" | "scale" | "skewX" | "skewY", "backfaceVisibility" | "backgroundColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderBottomWidth" | "borderColor" | "borderEndColor" | "borderLeftColor" | "borderLeftWidth" | "borderRadius" | "borderRightColor" | "borderRightWidth" | "borderStartColor" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "borderTopWidth" | "borderWidth" | "opacity" | "testID" | "elevation" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderEndWidth" | "borderStartWidth" | "bottom" | "display" | "end" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "zIndex" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "perspective" | "rotate" | "rotateX" | "rotateY" | "rotateZ" | "scale" | "skewX" | "skewY"> & import("../..").StyleValueWithSequenceArraysWithTransform>;
        } | (() => Partial<import("../..").StyleValueWithSequenceArraysWithoutTransform<import("../..").StyleValueWithReplacedTransforms<import("react-native").ViewStyle>, "transform" | "backfaceVisibility" | "backgroundColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderBottomWidth" | "borderColor" | "borderEndColor" | "borderLeftColor" | "borderLeftWidth" | "borderRadius" | "borderRightColor" | "borderRightWidth" | "borderStartColor" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "borderTopWidth" | "borderWidth" | "opacity" | "testID" | "elevation" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderEndWidth" | "borderStartWidth" | "bottom" | "display" | "end" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "zIndex" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "perspective" | "rotate" | "rotateX" | "rotateY" | "rotateZ" | "scale" | "skewX" | "skewY", "backfaceVisibility" | "backgroundColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderBottomWidth" | "borderColor" | "borderEndColor" | "borderLeftColor" | "borderLeftWidth" | "borderRadius" | "borderRightColor" | "borderRightWidth" | "borderStartColor" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "borderTopWidth" | "borderWidth" | "opacity" | "testID" | "elevation" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderEndWidth" | "borderStartWidth" | "bottom" | "display" | "end" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "zIndex" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "perspective" | "rotate" | "rotateX" | "rotateY" | "rotateZ" | "scale" | "skewX" | "skewY"> & import("../..").StyleValueWithSequenceArraysWithTransform>);
    }>;
};
export {};
