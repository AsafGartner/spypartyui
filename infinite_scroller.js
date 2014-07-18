/*
 * selectionChangedCallback: will be called every time there's a new item in the center of the scroller
 *                           will receive 1 argument - the index of the item between [0...dataSource.length)
 * dataSource: {
 *   length: integer - number of different items in the dataSource
 *   getItemElement: function(index, distanceFromCenter, existingElement) -
 *                   must return an html element that represents the item at index [0...dataSource.length)
 *                   distanceFromCenter represents how far the item is from the center in itemWidth units
 *                   existingElement is a previously generated element for the same index. You can return
 *                   a new element or modify the existing one.
 * }
 */
function InfiniteScroller(selectionChangedCallback, dataSource, scrollerWidth, itemWidth) {
  this.selectionChangedCallback = selectionChangedCallback;
  this.dataSource = dataSource;
  this.scrollerWidth = scrollerWidth;
  this.itemWidth = itemWidth;
  this.itemElements = [];

  this.element = document.createElement("div");
  this.element.classList.add("infinite_scroller");

  this.currentSelectionIndex = 0;
  this.currentPosition = this.positionForIndex(this.currentSelectionIndex);
  this.render();
}

InfiniteScroller.prototype.getElement = function() {
  return this.element;
};

InfiniteScroller.prototype.next = function() {
  this.setSelectionIndex(this.currentSelectionIndex+1);
};

InfiniteScroller.prototype.prev = function() {
  this.setSelectionIndex(this.currentSelectionIndex-1);
};

InfiniteScroller.prototype.setSelectionIndex = function(selectionIndex) {
  if (this.currentSelectionIndex != selectionIndex) {
    this.currentSelectionIndex = selectionIndex;
    this.selectionChangedCallback(this.getSelectedItemIndex(this.currentSelectionIndex));
    if (this.animationId === undefined) {
      this.render();
    }
  }
};

InfiniteScroller.prototype.positionForIndex = function(index) {
  return this.itemWidth * index
};

InfiniteScroller.prototype.indexForPosition = function(position) {
  return Math.floor((this.itemWidth/2 + Math.ceil(position)) / this.itemWidth);
};

InfiniteScroller.prototype.getSelectedItemIndex = function() {
  return this.getItemIndex(this.currentSelectionIndex);
};

InfiniteScroller.prototype.setSelectedItemIndex = function(targetIndex) {
  var currentIndex = this.getSelectedItemIndex();
  if (targetIndex <= currentIndex - (this.dataSource.length/2)) {
    targetIndex += this.dataSource.length;
  } else if (targetIndex >= currentIndex + (this.dataSource.length /2)) {
    targetIndex -= this.dataSource.length;
  }

  var distance = targetIndex - currentIndex;
  this.setSelectionIndex(this.currentSelectionIndex + distance);
};

InfiniteScroller.prototype.getItemIndex = function(index) {
  return (this.dataSource.length + (index % this.dataSource.length)) % this.dataSource.length;
};

InfiniteScroller.prototype.render = function() {
  var targetPosition = this.positionForIndex(this.currentSelectionIndex);
  this.currentPosition += (targetPosition - this.currentPosition) / 10;
  this.renderItems();
  if (Math.abs(targetPosition - this.currentPosition) > 1) {
    this.animationId = window.requestAnimationFrame(this.render.bind(this));
  } else {
    this.animationId = undefined;
  }
};

InfiniteScroller.prototype.renderItems = function() {
  var existingElements = this.element.querySelectorAll(".infinite_scroller_item");
  for (var i = 0; i < existingElements.length; ++i) {
    existingElements[i].style.display = "none";

  }

  var centerIdx = this.indexForPosition(this.currentPosition);
  var centerItemIdx = this.getItemIndex(centerIdx);
  var numItems = Math.ceil(this.scrollerWidth / this.itemWidth) + 2;
  if (numItems % 2 == 0) numItems--;
  for (var i = -Math.floor(numItems/2); i <= Math.floor(numItems/2); ++i) {
    var leftPosition = -this.currentPosition + (centerIdx+i)*this.itemWidth + (this.scrollerWidth/2 - this.itemWidth/2);
    var itemElement = this.getItemElement(centerItemIdx+i, this.distanceFromCenter(leftPosition));
    itemElement.style.display = "block";
    if (i == 0) {
      itemElement.classList.add("current_item");
    } else {
      itemElement.classList.remove("current_item");
    }
    itemElement.style.left = leftPosition + "px";
  }
};

InfiniteScroller.prototype.getItemElement = function(index, distanceFromCenter) {
  var element = this.dataSource.getItemElement(this.getItemIndex(index), distanceFromCenter, this.itemElements[index]);
  if (element != this.itemElements[index]) {
    if (this.itemElements[index]) {
      this.element.removeChild(this.itemElements[index]);
    }
    element.classList.add("infinite_scroller_item");
    element.addEventListener("click", this.setSelectedItemIndex.bind(this, this.getItemIndex(index)));
    this.itemElements[index] = element;
    this.element.appendChild(element);
  }
  return element;
};

InfiniteScroller.prototype.distanceFromCenter = function(position) {
  var centerPos = this.scrollerWidth/2 - this.itemWidth/2;
  return (Math.abs(centerPos - position) / this.itemWidth);
}
