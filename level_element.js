function createLevelElement(level, withMissions, withDescription) {
  var levelElement = document.createElement("div");
  levelElement.classList.add("level");

  var image = document.createElement("img");
  image.src = level.imageUrl;
  levelElement.appendChild(image);

  var textContainer = document.createElement("div");
  textContainer.classList.add("level_text_container");

  var name = document.createElement("div");
  name.classList.add("level_name");
  name.innerHTML = level.name;
  textContainer.appendChild(name);

  if (withMissions) {
    var missionsContainer = document.createElement("div");
    missionsContainer.classList.add("missions_container");
    for (var i = 0; i < level.missions.length; ++i) {
      var mission = document.createElement("div");
      mission.classList.add("mission");
      mission.classList.add(MISSIONS_REVERSE[level.missions[i]]);
      missionsContainer.appendChild(mission);
    }
    textContainer.appendChild(missionsContainer);
  }

  if (withDescription) {
    var description = document.createElement("div");
    description.classList.add("level_description");
    description.innerHTML = level.description;
    textContainer.appendChild(description);
  }

  var details = document.createElement("div");
  details.classList.add("level_details");
  details.innerHTML = level.numGuests + " Guests, " + level.missions.length + " Missions, " + level.time;
  textContainer.appendChild(details);

  levelElement.appendChild(textContainer);

  return levelElement;

}
