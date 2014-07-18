function CharacterSelectScreen(allCharacters) {
  this.allCharacters = allCharacters;

  this.element = document.createElement("div");
  this.element.classList.add("character_selector_screen");

  spySelector = new CharacterSelector(this.allCharacters, "Spy", ["You"], uiContainer.offsetWidth);
  doubleAgentSelector = new CharacterSelector(this.allCharacters, "Double Agent", ["Contact Him"], uiContainer.offsetWidth);
  seductionTargetSelector = new CharacterSelector(this.allCharacters, "Seduction Target", ["Seduce Him"], uiContainer.offsetWidth);
  ambassadorSelector = new CharacterSelector(this.allCharacters, "Ambassador", ["Bug Him"], uiContainer.offsetWidth);

  this.selectors = [
    spySelector,
    doubleAgentSelector,
    seductionTargetSelector,
    ambassadorSelector
  ];

  for (var i = 0; i < this.selectors.length; ++i) {
    this.element.appendChild(this.selectors[i].getElement());
  }

  this.setActiveSelector(0);
}

CharacterSelectScreen.prototype.getElement = function() {
  return this.element;
};

CharacterSelectScreen.prototype.getSelectedCharacters = function() {
  return {
    spy: spySelector.getSelectedCharacter(),
    doubleAgent: doubleAgentSelector.getSelectedCharacter(),
    seductionTarget: seductionTargetSelector.getSelectedCharacter(),
    ambassador: ambassadorSelector.getSelectedCharacter()
  }
}

CharacterSelectScreen.prototype.nextSelector = function() {
  if (this.activeSelectorIndex < this.selectors.length-1) {
    this.setActiveSelector(this.activeSelectorIndex+1);
  }
};

CharacterSelectScreen.prototype.prevSelector = function() {
  if (this.activeSelectorIndex > 0) {
    this.setActiveSelector(this.activeSelectorIndex-1);
  }
};

CharacterSelectScreen.prototype.nextCharacter = function() {
  this.selectors[this.activeSelectorIndex].next();
}

CharacterSelectScreen.prototype.prevCharacter = function() {
  this.selectors[this.activeSelectorIndex].prev();
}

CharacterSelectScreen.prototype.setActiveSelector = function(index) {
  this.activeSelectorIndex = index;
  for (var i = 0; i < this.selectors.length; ++i) {
    if (this.activeSelectorIndex == i) {
      this.selectors[i].activate();
    } else {
      this.selectors[i].deactivate();
    }
  }
}

CharacterSelectScreen.prototype.handleInput = function(input) {
  switch (input) {
    case "left":
      this.prevCharacter();
      break;
    case "up":
      this.prevSelector();
      break;
    case "right":
      this.nextCharacter();
      break;
    case "down":
      this.nextSelector();
      break;
    case "select":
      if (this.activeSelectorIndex < this.selectors.length-1) {
        this.nextSelector();
        return true;
      }
      break;
    case "back":
      if (this.activeSelectorIndex > 0) {
        this.prevSelector();
        return true;
      }
      break;
  }
}
