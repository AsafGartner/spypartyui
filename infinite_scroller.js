/*
 * selectionChangedCallback: will be called every time there's a new item in the center of the scroller
 *                           will receive 1 argument - the index of the item between [0...dataSource.length)
 * dataSource: {
 *   length: integer - number of different items in the dataSource
 *   getItemElement: function(index, distanceFromCenter) - must return an html element that represents the item at index [0...dataSource.length)
 *                                                         distanceFromCenter is between [0..1] and represents how close the item is to the center
 * }
 */
function InfiniteScroller(selectionChangedCallback, dataSource, scrollerWidth, itemWidth) {
  this.selectionChangedCallback = selectionChangedCallback;
  this.dataSource = dataSource;
  this.scrollerWidth = scrollerWidth;
  this.itemWidth = itemWidth;

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
  this.element.innerHTML = ""; // clear previous frame
  var centerIdx = this.indexForPosition(this.currentPosition);
  var numItems = Math.ceil(this.scrollerWidth / this.itemWidth) + 2;
  if (numItems % 2 == 0) numItems--;
  for (var i = -Math.floor(numItems/2); i <= Math.floor(numItems/2); ++i) {
    var currentIndex = centerIdx+i;
    var leftPosition = -this.currentPosition + currentIndex*this.itemWidth + (this.scrollerWidth/2 - this.itemWidth/2);
    var itemElement = this.dataSource.getItemElement(this.getItemIndex(currentIndex), this.distanceFromCenter(leftPosition));
    itemElement.classList.add("infinite_scroller_item");
    if (i == 0) {
      itemElement.classList.add("current_item");
    }
    itemElement.style.left = leftPosition + "px";
    itemElement.addEventListener("click", this.setSelectionIndex.bind(this, currentIndex));
    this.element.appendChild(itemElement);
  }
};

InfiniteScroller.prototype.distanceFromCenter = function(position) {
  var centerPos = this.scrollerWidth/2 - this.itemWidth/2;
  return ((this.itemWidth - Math.abs(centerPos - position)) / this.itemWidth);
}
