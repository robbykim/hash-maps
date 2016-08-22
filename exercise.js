class HashMap {
  constructor (initialCapacity) {
    this.length = 0
    this._slots = []
    this._capacity = initialCapacity || 8
    this.MAX_LOAD_RATIO = 0.9
    this.SIZE_RATIO = 3
    this._deleted = 0
  }

  get (key) {
    let index = this._findSlot(key)
    if (this._slots[index] === undefined) {
      throw new Error('key error')
    }
    return this._slots[index].value
  }

  _hashString (string) {
    let hash = 5381
    for (let i = 0; i < string.length; i++) {
      hash = (hash << 5) + hash + string.charCodeAt(i)
      hash = hash & hash
    }
    return hash >>> 0
  }

  set (key, value) {
    let loadRatio = (this.length + this._deleted + 1) / this.capacity
    if (loadRatio > this.MAX_LOAD_RATIO) {
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

  remove (key) {
    let index = this._findSlot(key)
    let slot = this.slots[index]
    if (slot === undefined) {
      throw new Error('key error')
    }
    slot.deleted = true
    this.length--
    this._deleted++
  }

  _findSlot (key) {
    let hash = HashMap._hashString(key)
    let start = hash % this._capacity

    for (let i = start; i < start + this._capacity; i++) {
      let index = i % this._capacity
      let slot = this._slots[index]
      if (slot === undefined || (slot.key == key && !slot.deleted)) {
        return index
      }
    }
    // unreachable
  }

  _resize (size) {
    let oldSlots = this._slots
    this._capacity = size
    this.length = 0
    this._slots = []
    for (let i = 0; i < oldSlots.length; i++) {
      let slot = oldSlots[i]
      if (slot !== undefined && !slot.deleted) {
        this.set(slot.key, slot.value)
      }
    }
  }
}
