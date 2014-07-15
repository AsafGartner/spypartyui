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
    imageUrl: "/images/beginner_ballroom.jpg",
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
    imageUrl: "/images/ballroom.jpg"
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
    imageUrl: "/images/balcony.jpg"
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
    imageUrl: "/images/veranda.jpg"
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
    imageUrl: "/images/courtyard.jpg"
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
    imageUrl: "/images/courtyard2.jpg"
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
    imageUrl: "/images/panopticon.jpg"
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
    imageUrl: "/images/gallery.jpg"
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
    imageUrl: "/images/highrise.jpg"
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
    imageUrl: "/images/modern.jpg"
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
