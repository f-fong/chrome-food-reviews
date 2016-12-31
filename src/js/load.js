/* global chrome */

const s = document.createElement('script');
s.src = chrome.extension.getURL('build/main.js');
s.onload = () => {};

// (document.head || document.documentElement).appendChild(s);
document.head.appendChild(s);
