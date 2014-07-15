window.LevelSelector = function(levels, width) {
  this.width = width;
  this.levels = levels;
  this.element = document.createElement("div");
  this.element.classList.add("level_selector");
  this.currentSelectionIndex = 0;
  this.levelWidth = 760;
  this.currentPosition = this.scrollPositionForIndex(0);

  this.updateScrollPosition();
};

LevelSelector.prototype.createLevelElement = function(level) {
  levelElement = document.createElement("div");
  levelElement.classList.add("level");
  image = document.createElement("img");
  image.src = level.imageUrl;
  levelElement.appendChild(image);
  return levelElement;
};

LevelSelector.prototype.getElement = function() {
  return this.element;
};

LevelSelector.prototype.scrollNext = function() {
  this.currentSelectionIndex++;
  if (this.animationId === undefined) {
    this.updateScrollPosition();
  }
};

LevelSelector.prototype.scrollPrev = function() {
  this.currentSelectionIndex--;
  if (this.animationId === undefined) {
    this.updateScrollPosition();
  }
};

LevelSelector.prototype.scrollPositionForIndex = function(index) {
  return this.levelWidth * index
};

LevelSelector.prototype.indexForScrollPosition = function(scrollPosition) {
  return Math.floor((this.levelWidth/2 + Math.ceil(scrollPosition)) / this.levelWidth);
};

LevelSelector.prototype.getSelectedLevel = function() {
  var idx = this.getLevelIndex(this.currentSelectionIndex);
  return this.levels[idx];
};

LevelSelector.prototype.getLevelIndex = function(index) {
  return (this.levels.length + (index % this.levels.length)) % this.levels.length;
};

LevelSelector.prototype.updateScrollPosition = function() {
  var targetPosition = this.scrollPositionForIndex(this.currentSelectionIndex);
  this.currentPosition += (targetPosition - this.currentPosition) / 10;
  this.element.innerHTML = "";
  var centerIdx = this.indexForScrollPosition(this.currentPosition);
  for (var i = -1; i <= 1; ++i) {
    levelElement = this.createLevelElement(this.levels[this.getLevelIndex(centerIdx + i)]);
    levelElement.style.left = -this.currentPosition + (centerIdx + i)*this.levelWidth + (this.width/2 - this.levelWidth/2);
    this.element.appendChild(levelElement);
  }
  if (Math.abs(targetPosition - this.currentPosition) > 1) {
    this.animationId = window.requestAnimationFrame(this.updateScrollPosition.bind(this));
  } else {
    this.animationId = undefined;
  }
};
