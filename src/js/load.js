/* global chrome */
import Store from './storage';

const s = document.createElement('script');
s.src = chrome.extension.getURL('build/main.js');
s.onload = () => {};

const store = new Store(() => {
  console.log('the access_token: ' + store.access_token);
  // The access token is loaded from memory now.
});

// (document.head || document.documentElement).appendChild(s);
document.head.appendChild(s);
