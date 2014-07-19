var uiContainer = document.querySelector(".ui_container");

levelSelector = new LevelSelector(levels, uiContainer.offsetWidth);
missionSelectScreen = new MissionSelectScreen(levels, uiContainer.offsetWidth);
characterSelectScreen = new CharacterSelectScreen(characters);
waitingForSniperScreen = new WaitingForSniperScreen();

uiContainer.appendChild(levelSelector.getElement());
uiContainer.appendChild(missionSelectScreen.getElement());
uiContainer.appendChild(characterSelectScreen.getElement());
uiContainer.appendChild(waitingForSniperScreen.getElement());

onLevelSelectorFinished = function() {
  missionSelectScreen.setLevel(levelSelector.getCurrentLevel());
  missionSelectScreen.setAvailableMissions(levelSelector.getCurrentLevel().missions);
  // update waiting for sniper screen?
};
onMissionSelectorFinished = function() {
  // update character screen
  // update waiting for sniper screen?
};
onCharacterSelectorFinished = function() {
  // update waiting for sniper screen?
};

screens = [
  levelSelector,
  missionSelectScreen,
  characterSelectScreen,
  waitingForSniperScreen
]

onScreenFinishedCallbacks = [
  onLevelSelectorFinished,
  onMissionSelectorFinished,
  onCharacterSelectorFinished
]

currentScreen = null;

missionSelectScreen.setLevel(levels[9]);
missionSelectScreen.setAvailableMissions(levels[1].missions);
setCurrentScreen(1);

document.querySelector(".previous_screen").addEventListener("click", function() {
  prevScreen();
});

document.querySelector(".next_screen").addEventListener("click", function() {
  nextScreen();
});

inputHandler = new Input(function(input, event) {
  var preventDefault = false;
  if (currentScreen.handleInput) {
    preventDefault = currentScreen.handleInput(input, event);
  }
  if (!preventDefault) {
    switch (input) {
      case "select":
        nextScreen();
        break;
      case "back":
        prevScreen();
        break;
    }
  }
});

function setCurrentScreen(index) {
  currentScreenIndex = index;

  if (currentScreen) {
    currentScreen.getElement().classList.remove("show");
  }
  currentScreen = screens[currentScreenIndex];
  currentScreen.getElement().classList.add("show");

  if (currentScreenIndex < screens.length - 1) {
    document.querySelector(".next_screen").style.display = "block";
  } else {
    document.querySelector(".next_screen").style.display = "none";
  }

  if (currentScreenIndex > 0) {
    document.querySelector(".previous_screen").style.display = "block";
  } else {
    document.querySelector(".previous_screen").style.display = "none";
  }
}

function nextScreen() {
  var valid = true;
  if (currentScreen.validate) {
    valid = currentScreen.validate();
  }

  if (valid && currentScreenIndex < screens.length - 1) {
    onScreenFinishedCallbacks[currentScreenIndex]();
    setCurrentScreen(currentScreenIndex + 1);
  }
}

function prevScreen() {
  if (currentScreenIndex > 0) {
    setCurrentScreen(currentScreenIndex - 1);
  }
}
