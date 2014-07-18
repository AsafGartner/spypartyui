function IndexedList(length, loop) {
  this.length = length;
  this.loop = loop;
  this.currentIndex = 0;
}

IndexedList.prototype.prev = function() {
  return this.setCurrentIndex(this.currentIndex - 1);
};

IndexedList.prototype.next = function() {
  return this.setCurrentIndex(this.currentIndex + 1);
};

IndexedList.prototype.setCurrentIndex = function(index) {
  if (loop) {
    index = (this.length + (index % this.length)) % this.length;
  } else {
    index = Math.min(Math.max(0, index), this.length - 1);
  }

  if (index != this.currentIndex) {
    this.currentIndex = index;
    return true;
  }
  return false;
};

IndexedList.prototype.getCurrentIndex = function() {
  return this.currentIndex;
};
