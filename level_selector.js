// levels is an array of { imageUrl: "url", name: "name", numGuests: 10, time: "3 Minutes", missions: ["mission1", "mission2"] }
window.LevelSelector = function(levels, width, levelSelectedCallback) {
  this.levelSelectedCallback = levelSelectedCallback;

  this.levels = levels;
  this.length = this.levels.length;

  this.element = document.createElement("div");
  this.element.classList.add("level_selector");

  this.infiniteScroller = new InfiniteScroller(this.onItemSelected.bind(this), this, width, 760);
  this.element.appendChild(this.infiniteScroller.getElement());

  this.currentLevelIndex = 0;
};

LevelSelector.prototype.next = function() {
  this.infiniteScroller.next();
};

LevelSelector.prototype.prev = function() {
  this.infiniteScroller.prev();
};

LevelSelector.prototype.getCurrentLevel = function() {
  return this.levels[this.currentLevelIndex];
};

LevelSelector.prototype.handleInput = function(input, event) {
  switch (input) {
    case "left":
    case "up":
      this.prev();
      break;
    case "right":
    case "down":
      this.next();
      break;
    case "keyboard":
      var char = String.fromCharCode(event.keyCode);
      var index = parseInt(char);
      if (!isNaN(index) && index >= 0 && index <= this.levels.length) {
        if (index == 0) index = 10;
        this.infiniteScroller.setSelectedItemIndex(index-1);
      }
      break;
  }
}

LevelSelector.prototype.getItemElement = function(index, distanceFromCenter, existingElement) {
  var levelElement = existingElement;
  if (!levelElement) {
    var level = this.levels[index];

    levelElement = createLevelElement(level, true, true);
  }
  levelElement.style.boxShadow = "#f3fd8f 0px 0px " + (35 * (1-distanceFromCenter)) + "px -5px";

  return levelElement;
};

LevelSelector.prototype.getElement = function() {
  return this.element;
};

LevelSelector.prototype.onItemSelected = function(index) {
  this.currentLevelIndex = index;
  this.levelSelectedCallback(this.getCurrentLevel());
};
