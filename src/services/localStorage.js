export class LocalStorageHandler {
  #key = '';

  constructor(key) {
    this.#key = key;
  }

  set value(value) {
    localStorage.setItem(this.#key, JSON.stringify(value));
  }

  get value() {
    return this.exists() ? JSON.parse(localStorage.getItem(this.#key)) : null;
  }

  remove() {
    localStorage.removeItem(this.#key);
  }

  exists() {
    return localStorage.getItem(this.#key) !== null;
  }
}

export const lastUpdateLS = new LocalStorageHandler("lastFetched");
