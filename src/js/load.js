/* global chrome */
import Store from './storage';

const s = document.createElement('script');
s.src = chrome.extension.getURL('build/main.js');
s.onload = () => {};

// eslint-disable-next-line no-unused-vars
const store = new Store(() => {
  // The access token is loaded from memory now.
});

// (document.head || document.documentElement).appendChild(s);
document.head.appendChild(s);
