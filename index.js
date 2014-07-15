var uiContainer = document.querySelector(".ui_container");

levelSelector = new LevelSelector([
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
    imageUrl: "/images/beginner_ballroom.png",
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
    imageUrl: "/images/ballroom.png"
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
    imageUrl: "/images/balcony.png"
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
    imageUrl: "/images/veranda.png"
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
    imageUrl: "/images/courtyard.png"
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
    imageUrl: "/images/courtyard2.png"
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
    imageUrl: "/images/panopticon.png"
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
    imageUrl: "/images/gallery.png"
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
    imageUrl: "/images/highrise.png"
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
    imageUrl: "/images/modern.png"
  },
], uiContainer.offsetWidth, function(level) {
  console.log(level.name + " selected");
});

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
      break;
  }
});
