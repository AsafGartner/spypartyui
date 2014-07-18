function IndexedList(length, loop, indexChangedCallback) {
  this.length = length;
  this.loop = loop;
  this.indexChangedCallback = indexChangedCallback;
  this.currentIndex = 0;
}

IndexedList.prototype.prev = function() {
  if (this.loop || this.currentIndex > 0) {
    this.setCurrentIndex(this.currentIndex - 1);
    return true;
  }
  return false;
};

IndexedList.prototype.next = function() {
  if (this.loop || this.currentIndex < this.length - 1) {
    this.setCurrentIndex(this.currentIndex + 1);
    return true;
  }
  return false;
};

IndexedList.prototype.setCurrentIndex = function(index) {
  if (loop) {
    index = (this.length + index) % this.length;
  } else {
    index = Math.min(Math.max(0, index), this.length - 1);
  }

  if (index != this.currentIndex) {
    this.currentIndex = index;
    if (this.indexChangedCallback) {
      this.indexChangedCallback(this.currentIndex);
    }
  }
};

IndexedList.prototype.getCurrentIndex = function() {
  return this.currentIndex;
};
