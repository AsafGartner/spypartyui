var uiContainer = document.querySelector(".ui_container");

levels = [
  {
    name: "Beginner vs. Beginner Ballroom",
    description: "A level with some stuff and some people in it.",
    numGuests: 13,
    missions: [
      MISSIONS.BUG,
      MISSIONS.CONTACT,
      MISSIONS.TRANSFER,
      MISSIONS.SWAP,
    ],
    time: "3:30 Minutes",
    imageUrl: IMAGE_DATA.beginner_ballroom
  },
  {
    name: "Ballroom",
    description: "A level with some stuff and some people in it.",
    numGuests: 13,
    missions: [
      MISSIONS.BUG,
      MISSIONS.CONTACT,
      MISSIONS.TRANSFER,
      MISSIONS.SWAP,
      MISSIONS.INSPECT,
      MISSIONS.SEDUCE,
      MISSIONS.PURLOIN,
      MISSIONS.FINGERPRINT
    ],
    time: "3:30 Minutes",
    imageUrl: IMAGE_DATA.ballroom
  },
  {
    name: "Balcony",
    description: "A level with some stuff and some people in it.",
    numGuests: 7,
    missions: [
      MISSIONS.BUG,
      MISSIONS.CONTACT,
      MISSIONS.SEDUCE,
      MISSIONS.PURLOIN,
      MISSIONS.FINGERPRINT
    ],
    time: "2:00 Minutes",
    imageUrl: IMAGE_DATA.balcony
  },
  {
    name: "Veranda",
    description: "A level with some stuff and some people in it.",
    numGuests: 17,
    missions: [
      MISSIONS.BUG,
      MISSIONS.CONTACT,
      MISSIONS.TRANSFER,
      MISSIONS.SWAP,
      MISSIONS.INSPECT,
      MISSIONS.SEDUCE,
      MISSIONS.PURLOIN,
      MISSIONS.FINGERPRINT
    ],
    time: "4:00 Minutes",
    imageUrl: IMAGE_DATA.veranda
  },
  {
    name: "Courtyard",
    description: "A level with some stuff and some people in it.",
    numGuests: 16,
    missions: [
      MISSIONS.BUG,
      MISSIONS.CONTACT,
      MISSIONS.SWAP,
      MISSIONS.INSPECT,
      MISSIONS.SEDUCE,
      MISSIONS.PURLOIN,
      MISSIONS.FINGERPRINT
    ],
    time: "3:00 Minutes",
    imageUrl: IMAGE_DATA.courtyard
  },
  {
    name: "Courtyard2",
    description: "A level with some stuff and some people in it.",
    numGuests: 15,
    missions: [
      MISSIONS.BUG,
      MISSIONS.CONTACT,
      MISSIONS.SWAP,
      MISSIONS.INSPECT,
      MISSIONS.SEDUCE,
      MISSIONS.PURLOIN,
      MISSIONS.FINGERPRINT
    ],
    time: "3:00 Minutes",
    imageUrl: IMAGE_DATA.courtyard2
  },
  {
    name: "Panopticon",
    description: "A level with some stuff and some people in it.",
    numGuests: 20,
    missions: [
      MISSIONS.BUG,
      MISSIONS.CONTACT,
      MISSIONS.TRANSFER,
      MISSIONS.SWAP,
      MISSIONS.INSPECT,
      MISSIONS.SEDUCE,
      MISSIONS.PURLOIN,
      MISSIONS.FINGERPRINT
    ],
    time: "4:00 Minutes",
    imageUrl: IMAGE_DATA.panopticon
  },
  {
    name: "Gallery",
    description: "A level with some stuff and some people in it.",
    numGuests: 20,
    missions: [
      MISSIONS.BUG,
      MISSIONS.CONTACT,
      MISSIONS.TRANSFER,
      MISSIONS.SWAP,
      MISSIONS.INSPECT,
      MISSIONS.SEDUCE,
      MISSIONS.PURLOIN,
      MISSIONS.FINGERPRINT
    ],
    time: "3:30 Minutes",
    imageUrl: IMAGE_DATA.gallery
  },
  {
    name: "High-rise",
    description: "A level with some stuff and some people in it.",
    numGuests: 10,
    missions: [
      MISSIONS.BUG,
      MISSIONS.CONTACT,
      MISSIONS.TRANSFER,
      MISSIONS.SWAP,
      MISSIONS.INSPECT,
      MISSIONS.SEDUCE,
      MISSIONS.PURLOIN,
      MISSIONS.FINGERPRINT
    ],
    time: "3:30 Minutes",
    imageUrl: IMAGE_DATA.highrise
  },
  {
    name: "Modern",
    description: "A level with some stuff and some people in it.",
    numGuests: 5,
    missions: [
      MISSIONS.BUG,
      MISSIONS.CONTACT,
      MISSIONS.SEDUCE,
    ],
    time: "3:00 Minutes",
    imageUrl: IMAGE_DATA.modern
  },
];

characters = [
  {
    name: "Mr. A",
    gender: "male",
    imageUrl: IMAGE_DATA.mr_a
  },
  {
    name: "Ms. B",
    gender: "female",
    imageUrl: IMAGE_DATA.ms_b
  },
  {
    name: "Mr. C",
    gender: "male",
    imageUrl: IMAGE_DATA.mr_c
  },
  {
    name: "Mr. D",
    gender: "male",
    imageUrl: IMAGE_DATA.mr_d
  },
  {
    name: "Ms. E",
    gender: "female",
    imageUrl: IMAGE_DATA.ms_e
  },
  {
    name: "Mr. F",
    gender: "male",
    imageUrl: IMAGE_DATA.mr_f
  },
  {
    name: "Ms. G",
    gender: "female",
    imageUrl: IMAGE_DATA.ms_g
  },
  {
    name: "Ms. H",
    gender: "female",
    imageUrl: IMAGE_DATA.ms_h
  },
  {
    name: "Mr. I",
    gender: "male",
    imageUrl: IMAGE_DATA.mr_i
  },
  {
    name: "Ms. J",
    gender: "female",
    imageUrl: IMAGE_DATA.ms_j
  }
];

levelSelector = new LevelSelector(levels, uiContainer.offsetWidth, function(level) {
  console.log(level.name + " selected");
});

//uiContainer.appendChild(levelSelector.getElement());

spySelector = new CharacterSelector(characters, "Spy", ["You"], uiContainer.offsetWidth, function(character) {
  console.log(character.name + " selected");
});

doubleAgentSelector = new CharacterSelector(characters, "Double Agent", ["Contact Him"], uiContainer.offsetWidth, function(character) {
  console.log(character.name + " selected");
});

seductionTargetSelector = new CharacterSelector(characters, "Seduction Target", ["Seduce Him"], uiContainer.offsetWidth, function(character) {
  console.log(character.name + " selected");
});

ambassadorSelector = new CharacterSelector(characters, "Ambassador", ["Bug Him", "Fingerprint His Briefcase"], uiContainer.offsetWidth, function(character) {
  console.log(character.name + " selected");
});

uiContainer.appendChild(spySelector.getElement());
uiContainer.appendChild(doubleAgentSelector.getElement());
uiContainer.appendChild(seductionTargetSelector.getElement());
uiContainer.appendChild(ambassadorSelector.getElement());
//spySelector.activate();
//spySelector.activate();
//spySelector.activate();
//spySelector.activate();


inputHandler = new Input(function(input) {
  switch (input) {
    case "left":
    case "up":
      //levelSelector.prev();
      spySelector.prev();
      doubleAgentSelector.prev();
      seductionTargetSelector.prev();
      ambassadorSelector.prev();
      break;
    case "right":
    case "down":
      //levelSelector.next();
      spySelector.next();
      doubleAgentSelector.next();
      seductionTargetSelector.next();
      ambassadorSelector.next();
      break;
    case "select":
      break;
  }
});
