var uiContainer = document.querySelector(".ui_container");

levelSelector = new LevelSelector([
  { imageUrl: "http://dummyimage.com/740x360/000/fff&text=level1" },
  { imageUrl: "http://dummyimage.com/740x360/000/fff&text=level2" },
  { imageUrl: "http://dummyimage.com/740x360/000/fff&text=level3" },
  { imageUrl: "http://dummyimage.com/740x360/000/fff&text=level4" },
  { imageUrl: "http://dummyimage.com/740x360/000/fff&text=level5" },
  { imageUrl: "http://dummyimage.com/740x360/000/fff&text=level6" },
  { imageUrl: "http://dummyimage.com/740x360/000/fff&text=level7" },
  { imageUrl: "http://dummyimage.com/740x360/000/fff&text=level8" },
  { imageUrl: "http://dummyimage.com/740x360/000/fff&text=level9" },
  { imageUrl: "http://dummyimage.com/740x360/000/fff&text=level10" },
], uiContainer.offsetWidth);

uiContainer.appendChild(levelSelector.getElement());

inputHandler = new Input(function(input) {
  switch (input) {
    case "left":
    case "up":
      levelSelector.scrollPrev();
      break;
    case "right":
    case "down":
      levelSelector.scrollNext();
      break;
    case "select":
      console.log(levelSelector.getSelectedLevel());
      break;
  }
});
