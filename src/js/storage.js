export default class Store {
  constructor(onReady) {
    this._access_token = '';

    this.onChanged = this.onChanged.bind(this);

    // Fetch the access token from chromes storage as soon as the file is loaded. There might be a
    // race condition here if you try and access the token before it's been loaded but it seems
    // unlikely.
    chrome.storage.sync.get('access_token', data => {
      this._access_token = data.access_token;

      if (typeof onReady === 'function') {
        onReady();
      }
    });

    // Register the event listener.
    chrome.storage.onChanged.addListener(this.onChanged);
  }

  // Event handler for when a change in the chrome storage happens.
  onChanged(keys, namespace) {
    // TODO: update this._access_token
  }

  // Setter, where you might normally use `Store.access_token('mytoken')` with a setter you can
  // instead write `Store.access_token = 'mytoken'`. The two are functionally the same it's just
  // semantically nicer because the two functions to read and update the access token are used in
  // the same way a property on an object is.
  set access_token(token) {
    this._access_token = token;
    chrome.storage.sync.set({ 'access_token': token });
  }

  // Getter, this would be used with `Store.access_token() -> 'mytoken'`. But instead you can use
  // `Store.access_token -> 'mytoken'`. Note the lack of parenthesis.
  get access_token() {
    return this._access_token;
  }
}
