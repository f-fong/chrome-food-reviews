alert('testing');

var s = document.createElement('script');
s.src = chrome.extension.getURL('script.js');
s.onload = function() {
}

// (document.head || document.documentElement).appendChild(s);
document.head.appendChild(s);
