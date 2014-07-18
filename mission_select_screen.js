function MissionSelectScreen() {
  this.element = document.createElement("div");
  this.element.classList.add("mission_select_screen");

  var missionSelectContainer = document.createElement("div");
  missionSelectContainer.classList.add("mission_select_container");
  this.element.appendChild(missionSelectContainer);

  var gameTypeContainer = document.createElement("div");
  gameTypeContainer.classList.add("game_type_container");
  missionSelectContainer.appendChild(gameTypeContainer);

  var gameType = document.createElement("div");
  gameType.classList.add("game_type");
  gameType.innerHTML = "Game Type: Any 3 of 5";
  gameTypeContainer.appendChild(gameType);

  var gameTypeDescription = document.createElement("div");
  gameTypeDescription.classList.add("game_type_description");
  gameTypeDescription.innerHTML = "The Spy must complete any 3 missions out of a total of 5 avaiable missions. Missions can be completed in any order.";
  gameTypeContainer.appendChild(gameTypeDescription);

  this.levelContainer = document.createElement("div");
  this.levelContainer.classList.add("level_container");
  missionSelectContainer.appendChild(this.levelContainer);
}

MissionSelectScreen.prototype.getElement = function() {
  return this.element;
};

MissionSelectScreen.prototype.setLevel = function(level) {
  this.level = level;
  this.levelContainer.innerHTML = "";
  this.levelContainer.appendChild(createLevelElement(this.level, false, false));
};

MissionSelectScreen.prototype.setAvailableMissions = function(availableMissions) {
  this.availableMissions = availableMissions;
};
