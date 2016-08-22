class HashMap {
  constructor(initialCapacity) {
    this.length = 0
    this._deleted = 0
    this._capacity = initialCapacity || 10
    this._slots = []
    this.MAX_LOAD_RATIO = 0.9
    this.SIZE_RATIO = 3
  }

  findSlot(key) {
    let hash = hashString(key)
    let index = hash % capacity  
  }

}
