jss
===

JavaScript Smart Style Sheets - CSS pain relief library

This library is a work in progress.
It parses jss files linked to you document and applies CSS properties dynamically.

You can link a jss file like this:
```html
<link type="text/jss" rel="smartsheet" href="style.jss">
```

JSS syntax is extremely strict at the moment. It doesn't support comments, multiple pointers, etc.
Here is an example of a dynamic CSS property defined in jss file:

```css
#frame3 {
  position: fixed;
  padding:20px;
  top:140px;
  left:180px;
  height: [$height-180]px;
  width: [$width-220]px;
  overflow-y: scroll;
}
```
Angle brackets indicate that the block within the brackets should be evaluated as JavaScript

Variables $width and $height stand for document width and height.