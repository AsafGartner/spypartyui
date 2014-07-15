// levels is an array of { imageUrl: "url", name: "name", numGuests: 10, time: "3 Minutes", missions: ["mission1", "mission2"] }
window.LevelSelector = function(levels, width, clickCallback) {
  this.clickCallback = clickCallback;
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
  var levelElement = document.createElement("div");
  levelElement.classList.add("level");

  var image = document.createElement("img");
  image.src = level.imageUrl;
  levelElement.appendChild(image);

  var textContainer = document.createElement("div");
  textContainer.classList.add("level_text_container");

  var name = document.createElement("div");
  name.classList.add("level_name");
  name.innerHTML = level.name;
  textContainer.appendChild(name);

  var missionsContainer = document.createElement("div");
  missionsContainer.classList.add("missions_container");
  for (var i = 0; i < level.missions.length; ++i) {
    var mission = document.createElement("div");
    mission.classList.add("mission");
    mission.classList.add(MISSIONS_REVERSE[level.missions[i]]);
    missionsContainer.appendChild(mission);
  }
  textContainer.appendChild(missionsContainer);

  var description = document.createElement("div");
  description.classList.add("level_description");
  description.innerHTML = level.description;
  textContainer.appendChild(description);

  var details = document.createElement("div");
  details.classList.add("level_details");
  details.innerHTML = level.numGuests + " Guests, " + level.missions.length + " Missions, " + level.time;
  textContainer.appendChild(details);

  levelElement.appendChild(textContainer);

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
  this.render();
  if (Math.abs(targetPosition - this.currentPosition) > 1) {
    this.animationId = window.requestAnimationFrame(this.updateScrollPosition.bind(this));
  } else {
    this.animationId = undefined;
  }
};

LevelSelector.prototype.render = function() {
  var that = this;
  this.element.innerHTML = ""; // clear previous frame
  var centerIdx = this.indexForScrollPosition(this.currentPosition);
  var numLevels = Math.ceil(this.width / this.levelWidth) + 2;
  if (numLevels % 2 == 0) numLevels--;
  for (var i = -Math.floor(numLevels/2); i <= Math.floor(numLevels/2); ++i) {
    var currentLevel = this.levels[this.getLevelIndex(centerIdx + i)];
    levelElement = this.createLevelElement(currentLevel);
    var leftPosition = -this.currentPosition + (centerIdx + i)*this.levelWidth + (this.width/2 - this.levelWidth/2);
    levelElement.style.left = leftPosition;
    levelElement.style.boxShadow = this.getBoxShadow(leftPosition);
    levelElement.addEventListener("click", (function(level) {
      return function() { that.clickCallback(level); }
    })(currentLevel));
    this.element.appendChild(levelElement);
  }
};

LevelSelector.prototype.getBoxShadow = function(position) {
  var centerPos = this.width/2 - this.levelWidth/2;
  var value = ((this.levelWidth - Math.abs(centerPos - position)) / this.levelWidth) * 35;
  return "#f3fd8f 0px 0px " + value + "px -5px";
};
