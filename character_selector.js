function CharacterSelector(characters, role, missionTextLines, width, characterSelectedCallback) {
  this.characters = characters;
  this.length = this.characters.length;

  this.role = role;
  this.missionTextLines = missionTextLines;
  this.characterSelectedCallback = characterSelectedCallback;

  this.infiniteScroller = new InfiniteScroller(this.onCharacterSelected.bind(this), this, width, 120);

  this.element = document.createElement("div");
  this.element.classList.add("character_selector");
  this.renderElement();
  this.setMissionGender(this.characters[0].gender);
}

CharacterSelector.prototype.getElement = function() {
  return this.element;
};

CharacterSelector.prototype.next = function() {
  this.infiniteScroller.next();
};

CharacterSelector.prototype.prev = function() {
  this.infiniteScroller.prev();
};

CharacterSelector.prototype.activate = function() {
  this.element.classList.add("active");
};

CharacterSelector.prototype.deactivate = function() {
  this.element.classList.remove("active");
};

CharacterSelector.prototype.getSelectedCharacter = function() {
  return this.characters[this.infiniteScroller.getSelectedItemIndex()];
};

CharacterSelector.prototype.getItemElement = function(index, distanceFromCenter) {
  var character = this.characters[index];

  var element = document.createElement("div");
  element.classList.add("character_item");

  var image = document.createElement("img");
  image.src = character.imageUrl;
  element.appendChild(image);

  element.style.opacity = -(distanceFromCenter/5)+1;
  return element;
};

CharacterSelector.prototype.onCharacterSelected = function(index) {
  this.setMissionGender(this.characters[index].gender);
  this.characterSelectedCallback(this.characters[index]);
};

CharacterSelector.prototype.renderElement = function() {
  var textContainer = document.createElement("div");
  textContainer.classList.add("text_container");

  var roleElement = document.createElement("div");
  roleElement.classList.add("character_role");
  roleElement.innerHTML = this.role;
  textContainer.appendChild(roleElement);

  var missionTextContainer = document.createElement("div");
  missionTextContainer.classList.add("mission_text_container");

  for (var i = 0; i < this.missionTextLines.length; ++i) {
    var missionText = document.createElement("div");
    missionText.classList.add("mission_text");
    missionText.innerHTML = this.missionTextLines[i];
    missionTextContainer.appendChild(missionText);
  }

  textContainer.appendChild(missionTextContainer);

  this.element.appendChild(textContainer);

  var charactersContainer = document.createElement("div");
  charactersContainer.classList.add("characters_container");

  var reticle = document.createElement("div");
  reticle.classList.add("reticle");
  charactersContainer.appendChild(reticle);

  charactersContainer.appendChild(this.infiniteScroller.getElement());

  this.element.appendChild(charactersContainer);
};

CharacterSelector.prototype.setMissionGender = function(gender) {
  var text = "";
  if (gender == "male") {
    text = "Him";
  } else if (gender == "female") {
    text = "Her";
  }

  missionTextElements = this.element.querySelectorAll(".mission_text");
  for (var i = 0; i < missionTextElements.length; ++i) {
    var el = missionTextElements[i];
    el.innerHTML = el.innerHTML.replace(/Him|Her/, text);
  }
}
