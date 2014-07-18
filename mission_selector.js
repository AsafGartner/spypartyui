function MissionSelector() {
  this.element = document.createElement("div");
  this.element.classList.add("mission_selector");
  this.setAvailableMissions([]);
}

MissionSelector.prototype.getElement = function() {
  return this.element;
};

MissionSelector.prototype.setAvailableMissions = function(availableMissions) {
  this.availableMissions = availableMissions;
  this.indexedList = new IndexedList(this.availableMissions.length, this.onIndexChanged.bind(this));
  this.reset();
};

MissionSelector.prototype.prev = function() {
  return this.indexedList.prev();
};

MissionSelector.prototype.next = function() {
  return this.indexedList.next();
};

MissionSelector.prototype.setMissionIndex = function(index) {
  this.indexedList.setCurrentIndex(index);
};

MissionSelector.prototype.handleInput = function(input) {
  switch (input) {
    case "up":
      return this.prev();
      break;
    case "down":
      return this.next();
      break;
    case "left":
      var activeMissionToggle = this.missionToggles[this.indexedList.getCurrentIndex()];
      if (activeMissionToggle) {
        return activeMissionToggle.prev();
      }
      break;
    case "right":
      var activeMissionToggle = this.missionToggles[this.indexedList.getCurrentIndex()];
      if (activeMissionToggle) {
        return activeMissionToggle.next();
      }
      break;
    case "select":
      var activeMissionToggle = this.missionToggles[this.indexedList.getCurrentIndex()];
      if (activeMissionToggle) {
        return activeMissionToggle.next();
      }
      break;
  }
};

MissionSelector.prototype.reset = function() {
  this.element.innerHTML = "";
  this.missionToggles = [];

  for (var i = 0; i < this.availableMissions.length; ++i) {
    var missionToggle = new MissionToggle(this.availableMissions[i]);
    this.element.appendChild(missionToggle.getElement());
    this.missionToggles.push(missionToggle);
  }

  this.setMissionIndex(0);
};

MissionSelector.prototype.onIndexChanged = function(index) {

};
