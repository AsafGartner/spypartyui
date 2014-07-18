function WaitingForSniperScreen() {
  this.element = document.createElement("div");
  this.element.classList.add("waiting_for_sniper_screen");
  var text = document.createElement("div");
  text.innerHTML = "Waiting for Sniper...";
  this.element.appendChild(text);
}

WaitingForSniperScreen.prototype.getElement = function() {
  return this.element;
};
