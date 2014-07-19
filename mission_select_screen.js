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
  this.missionSelector = new MissionSelector();
  this.element.querySelector(".mission_container").appendChild(this.missionSelector.getElement());
  this.missionSelectorFocus = true;
}

MissionSelectScreen.prototype.getElement = function() {
  return this.element;
};

MissionSelectScreen.prototype.getSelectedMissions = function() {
  return this.missionSelector.getSelectedMissions();
};

MissionSelectScreen.prototype.setLevel = function(level) {
  this.level = level;
  this.levelContainer.innerHTML = "";
  this.levelContainer.appendChild(createLevelElement(this.level, false, false));
};

MissionSelectScreen.prototype.setAvailableMissions = function(availableMissions) {
  this.missionSelector.setAvailableMissions(availableMissions);
  if (this.missionSelectorFocus) {
    this.missionSelector.focus();
  }
};

MissionSelectScreen.prototype.handleInput = function(input, event) {
  if (input == "back") {
    return false;
  }

  if (this.missionSelectorFocus) {
    var handled = this.missionSelector.handleInput(input, event);
    if (!handled && input == "down") {
      this.missionSelectorFocus = false;
      this.missionSelector.blur();
    }
    return true;
  } else {
    if (input == "up") {
      this.missionSelectorFocus = true;
      this.missionSelector.focus();
      return true;
    }
  }
};
