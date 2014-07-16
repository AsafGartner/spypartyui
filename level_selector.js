// levels is an array of { imageUrl: "url", name: "name", numGuests: 10, time: "3 Minutes", missions: ["mission1", "mission2"] }
window.LevelSelector = function(levels, width, levelSelectedCallback) {
  this.levelSelectedCallback = levelSelectedCallback;

  this.levels = levels;
  this.length = this.levels.length;

  this.element = document.createElement("div");
  this.element.classList.add("level_selector");

  this.infiniteScroller = new InfiniteScroller(this.onItemSelected.bind(this), this, width, 760);
  this.element.appendChild(this.infiniteScroller.getElement());
};

LevelSelector.prototype.next = function() {
  this.infiniteScroller.next();
};

LevelSelector.prototype.prev = function() {
  this.infiniteScroller.prev();
};

LevelSelector.prototype.getItemElement = function(index, distanceFromCenter) {
  var level = this.levels[index];

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

  levelElement.style.boxShadow = "#f3fd8f 0px 0px " + (35 * distanceFromCenter) + "px -5px";

  return levelElement;
};

LevelSelector.prototype.getElement = function() {
  return this.element;
};

LevelSelector.prototype.onItemSelected = function(index) {
  this.levelSelectedCallback(this.levels[index]);
};
