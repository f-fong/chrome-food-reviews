/* global chrome */
import Store from './storage';

const s = document.createElement('script');
s.src = chrome.extension.getURL('build/main.js');
s.onload = () => {};

// eslint-disable-next-line no-unused-vars
const store = new Store(() => {
  s.setAttribute('access-token', store.access_token);
  document.head.appendChild(s);
});
