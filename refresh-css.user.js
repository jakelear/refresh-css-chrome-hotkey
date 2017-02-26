// ==UserScript==
// @name          CSS Refresh Hotkey
// @description   Refresh CSS with Keyboard Shortcut
// ==/UserScript==

var refreshCssSetup = (function() {
    key = 67; //c
    window.addEventListener('keydown', function() {
      if(!event.ctrlKey && !event.altKey && event.shiftKey){
        if(event.keyCode == key){
          // Thanks to Paul Irish for bookmarklet refresh code: https://www.paulirish.com/2008/how-to-iterate-quickly-when-debugging-css/
          (function(){var h,a,f;a=document.getElementsByTagName('link');for(h=0;h<a.length;h++){f=a[h];if(f.rel.toLowerCase().match(/stylesheet/)&&f.href){var g=f.href.replace(/(&|\?)forceReload=\d+/,'');f.href=g+(g.match(/\?/)?'&':'?')+'forceReload='+(new Date().valueOf())}}})()
        }
      }
    });
}());
