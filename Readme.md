# Extension to hotkey CSS refresh in Chrome
I've used [Paul Irish's CSS Refresh Bookmarklet](https://paulirish.com/2008/how-to-iterate-quickly-when-debugging-css/) forever when working in CSS to save time, but Chrome doesn't allow hotkeying of bookmarks, so in order to hotkey the css refresh I made this quick user extension.

## How to install
1. Save [refresh-css.user.js](https://github.com/jakelear/refresh-css-chrome-hotkey/blob/master/refresh-css.user.js) somewhere on your computer.
2. Open chrome://extensions/
3. Drag refresh-css.user.js onto the extensions list

## How to use
1. After installing, refresh any tabs you want to use this on
2. Press <kbd>alt</kbd>+<kbd>shift</kbd>+<kbd>c</kbd> to refresh CSS

## How to modify the hotkey
1. Edit the keycode in [line 7](https://github.com/jakelear/refresh-css-chrome-hotkey/blob/master/refresh-css.user.js#L7) to update the key. YOu can use [this](https://css-tricks.com/snippets/javascript/javascript-keycodes/) to find the keycode for the key you want.
2. Edit the modifier keys in [line 9](https://github.com/jakelear/refresh-css-chrome-hotkey/blob/master/refresh-css.user.js#L9) to update the modifier keys (alt, ctrl, shift)
3. After updating the hotkey, remove the extension from chrome://extensions/ and re-drag the modified file in.


