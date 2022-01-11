# Module 8

## Flexbox

> _Example content creating two box container_

- flex-grow used to make one container bigger then other

## Grid

> _Example content creating a calender_

- `grid-template-columns`

## Media Query

- Media query is used to apply a set of styles based on the browser's width height, or screen

- `flex-wrap:wrap` do the container flexible and responsive without using media query.

- `flex-wrap:wrap` causes flex items to be laid out on multiple lines rather than just one when display size shrinks

```
@media (max-width){
*css code snippets*
}
@media (min-width){
*css code snippets*
}
```

- `max-width` define when screen width is in between (0 to max width value) then the given CSS properties works.

- `min-width` define when screen width is in between (min width value to upper) then the given CSS properties works.

## Relative Position and Flexbox

> _Example content creating a image gallery_

- Percent depends on the parent elements.

- `Absolute Positioned` element goes out of flow and sets it's position in a parents container where `position relative` is define

- Lastly used Flex wrap to fill up the images properly inside desktop window.

## Transition and Transform in photo Album

- In `transform: skew` (+) degree skew the content anti-clockwise and (-) degree skew the content clockwise
- Transition allow you to change property values smoothly over a given duration.

## Some Common CSS Property We use Most

- `align-content` not used till now
- `align-items` used in flex to fix alignment vertically
- `animation`
- `background-color`, `background-position`, `background-repeat`
- `border`
- `border collapse`
- `border-image`
- `box-shadow`
- `caption-side` to use table caption below.
- `column-count` to make a paragraph looks like a newspaper column type content
- `content` is used in `after & before` element
- `cursor`
- `display`
- `direction` fix the direction of writing
- `flex` → `flex-basis`(not used), `flex-grow`, `flex-direction`, `flex-flow`(not used), `flex-shrink`(not used), `flex-wrap`
- `font-style`
- `font-weight`
- `height`
- `justify-content` used in flex to fix alignment horizontally.
- `letter-spacing` to control space between text.
- `line-height` to control space between text line.
- `list-style`
- `list-style-image`
- `margin`
- `max-height`
- `max-width`
- `opacity` (not used)
- `order` used in flex to fix up the order of the flex elements.
- `overflow`
- `padding`
- `position`
- `text-align`
- `text-decoration`
- `text-overflow` to ellipses to make a text fit a short container and use a tooltip attribute to show the full content.
- `text-shadow` (not used)
- `transform`
- `transition`
- `vertical-align`
- `visibility`
- `white-space`
- `width`
- `z-index`
- `word-wrap`
