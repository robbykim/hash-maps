class HashMap {
  constructor(initialCapacity) {
    this.length = 0
    this._deleted = 0
    this._capacity = initialCapacity || 10
    this._slots = []
    this.MAX_LOAD_RATIO = 0.9
    this.SIZE_RATIO = 3
  }

  get(key) {
    let index = this._findSlot(key)
    if (this._slots[index] == undefined) {
      throw new Error('Error')
    }
    return this._slots[index].value
  }

  remove(key) {
    let index = this._findSlot(key)
    if (this._slots[index] == undefined) {
      throw new Error('Error')
    }
    this._slots[index].deleted = true
    this.length--
    this._deleted++
  }

  _findSlot(key) {
    let hash = hashString(key)
    let start = hash % this._capacity

    for (let i = start; i < start + this._capacity; i++) {
      let index = i % this._capacity
      let slot = this._slots[index]
      if (slot === undefined || (slot.key == key && !slot.deleted)) {
        return index
      }
    }
  }

  set(key, value) {
    let currentRatio = (this.length + this._deleted + 1) / this._capacity
    if (currentRatio > this.MAX_LOAD_RATIO) {
      this._resize(this._capacity * this.SIZE_RATIO)
    }
    let index = this._findSlot(key)
    this._slots[index] = {
      key,
      value,
      deleted: false
    }
    this.length++
  }

  _resize(size) {
    let oldSlots = this._slots
    this._capacity = size
    this._slots = []
    this.length = 0
    this._deleted = 0
    for (let i = 0; i < oldSlots.length; i++) {
      let newSlot  = oldSlots[i]
      if (!newSlot.deleted) {
        this.set(newSlot.key, newSlot.value)
      }
    }
  }
}
