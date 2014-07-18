function CharacterSelector(characters, role, missionText, width) {
  this.characters = characters;
  this.length = this.characters.length;

  this.role = role;
  this.missionText = missionText;

  this.infiniteScroller = new InfiniteScroller(this, width, 120);

  this.element = DOMHelper.createTree({
    "character_selector": {
      "text_container": {
        "character_role": {},
        "mission_text_container": {
          "mission_text": {}
        }
      },
      "characters_container": {
        "reticle": {}
      }
    }
  })[0];

  this.element.querySelector(".character_role").innerHTML = this.role;
  this.element.querySelector(".mission_text").innerHTML = this.missionText;
  this.element.querySelector(".characters_container").appendChild(this.infiniteScroller.getElement());

  this.setMissionGender(this.characters[0].gender);
}

CharacterSelector.prototype.getElement = function() {
  return this.element;
};

CharacterSelector.prototype.next = function() {
  this.infiniteScroller.next();
  this.setMissionGender(this.characters[this.infiniteScroller.getSelectedItemIndex()].gender);
};

CharacterSelector.prototype.prev = function() {
  this.infiniteScroller.prev();
  this.setMissionGender(this.characters[this.infiniteScroller.getSelectedItemIndex()].gender);
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

CharacterSelector.prototype.getItemElement = function(index, distanceFromCenter, existingElement) {
  var element = existingElement;
  if (!element) {
    var character = this.characters[index];

    var element = DOMHelper.createDiv("character_item");

    var image = document.createElement("img");
    image.src = character.imageUrl;
    element.appendChild(image);
  }

  element.style.opacity = -(distanceFromCenter/5)+1;
  return element;
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
