function MissionToggle(mission) {
  this.numStates = 3;
  this.mission = mission;

  this.indexedList = new IndexedList(this.numStates, true, this.onStateChanged.bind(this));

  this.element = DOMHelper.createTree({
    "mission_toggle": {
      "state_container": {
        "state_indicator": {}
      },
      "mission_name": {}
    }
  })[0];
  this.element.querySelector(".mission_name").innerHTML = this.mission;
  this.element.addEventListener("click", this.toggle.bind(this));
  this.updateStateClass();
}

MissionToggle.prototype.getElement = function() {
  return this.element;
};

MissionToggle.prototype.getMission = function() {
  return this.mission;
};

MissionToggle.prototype.toggle = function() {
  return this.indexedList.next();
};

MissionToggle.prototype.next = function() {
  return this.indexedList.next();
};

MissionToggle.prototype.prev = function() {
  return this.indexedList.prev();
};

MissionToggle.prototype.focus = function() {
  this.element.classList.add("focus");
};

MissionToggle.prototype.blur = function() {
  this.element.classList.remove("focus");
};

MissionToggle.prototype.getState = function() {
  return this.indexedList.getCurrentIndex();
};

MissionToggle.prototype.updateStateClass = function() {
  for (var i = 0; i < this.numStates; ++i) {
    if (i == this.getState()) {
      this.element.classList.add("state_" + i);
    } else {
      this.element.classList.remove("state_" + i);
    }
  }
};

MissionToggle.prototype.onStateChanged = function() {
  this.updateStateClass();
};
