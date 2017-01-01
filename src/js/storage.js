let access_token = '';

chrome.storage.sync.get('access_token', data => {
  access_token = data.access_token;
});


export default class Store {
  set access_token(token) {
    access_token = token;
    chrome.storage.sync.set({ 'access_token': token });
  }

  get access_token() {
    return access_token;
  }
}
