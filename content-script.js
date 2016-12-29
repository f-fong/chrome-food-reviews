alert('testing');

var s = document.createElement('script');
s.src = chrome.extension.getURL('build/main.bundle.js');
s.onload = function() {
}

// (document.head || document.documentElement).appendChild(s);
document.head.appendChild(s);
