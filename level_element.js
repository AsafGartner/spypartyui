function createLevelElement(level, withMissions, withDescription) {
  var levelElement = DOMHelper.createDiv("level");

  var image = document.createElement("img");
  image.src = level.imageUrl;
  levelElement.appendChild(image);

  var textContainer = DOMHelper.createDiv("level_text_container");
  levelElement.appendChild(textContainer);

  var name = DOMHelper.createDiv("level_name");
  name.innerHTML = level.name;
  textContainer.appendChild(name);

  if (withMissions) {
    var missionsContainer = DOMHelper.createDiv("missions_container");
    textContainer.appendChild(missionsContainer);

    for (var i = 0; i < level.missions.length; ++i) {
      var mission = DOMHelper.createDiv("mission");
      mission.classList.add(MISSIONS_REVERSE[level.missions[i]]);
      missionsContainer.appendChild(mission);
    }
  }

  if (withDescription) {
    var description = DOMHelper.createDiv("level_description");
    description.innerHTML = level.description;
    textContainer.appendChild(description);
  }

  var details = DOMHelper.createDiv("level_details");
  details.innerHTML = level.numGuests + " Guests, " + level.missions.length + " Missions, " + level.time;
  textContainer.appendChild(details);

  return levelElement;
}
