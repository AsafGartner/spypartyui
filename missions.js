window.MISSIONS = {
  BUG: "Bug Ambassador",
  CONTACT: "Contact Double Agent",
  TRANSFER: "Transfer Microfilm",
  SWAP: "Swap Statue",
  INSPECT: "Inspect 3 Statues",
  SEDUCE: "Seduce Target",
  PURLOIN: "Purloin Guest List",
  FINGERPRINT: "Fingerprint Ambassador"
};

window.MISSIONS_REVERSE = {};
for (key in MISSIONS) {
  MISSIONS_REVERSE[MISSIONS[key]] = key;
}
