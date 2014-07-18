function MissionSelectScreen() {
  this.element = DOMHelper.createTree({
    "mission_select_screen": {
      "mission_select_container": {
        "game_type_container": {
          "game_type": {},
          "game_type_description": {}
        },
        "level_container": {},
        "mission_container": {}
      }
    }
  })[0];

  this.element.querySelector(".game_type").innerHTML = "Game Type: Any 3 of 5";
  this.element.querySelector(".game_type_description").innerHTML =  "The Spy must complete any 3 missions out of a total of 5 avaiable missions. Missions can be completed in any order.";
  this.levelContainer = this.element.querySelector(".level_container");
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
