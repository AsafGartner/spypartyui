var uiContainer = document.querySelector(".ui_container");

levelSelector = new LevelSelector(levels, uiContainer.offsetWidth, function() {});
characterSelectScreen = new CharacterSelectScreen(characters, function() {});

uiContainer.appendChild(levelSelector.getElement());
uiContainer.appendChild(characterSelectScreen.getElement());

screens = [
  levelSelector,
  characterSelectScreen
]

currentScreen = null;

setCurrentScreen(0);

inputHandler = new Input(function(input) {
  if (input == "select") {
    if (currentScreenIndex < screens.length - 1) {
      setCurrentScreen(currentScreenIndex + 1);
    }
  } else if (input == "back") {
    if (currentScreenIndex > 0) {
      setCurrentScreen(currentScreenIndex - 1);
    }
  } else {
    currentScreen.handleInput(input);
  }
});

function setCurrentScreen(index) {
  currentScreenIndex = index;
  if (currentScreen) {
    currentScreen.getElement().classList.remove("show");
  }
  currentScreen = screens[currentScreenIndex];
  currentScreen.getElement().classList.add("show");
}
