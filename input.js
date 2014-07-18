window.Input = function(inputEventCallback) {
  this.callback = inputEventCallback;

  window.addEventListener("keydown", this.onKeyPressed.bind(this));
  window.addEventListener("mousewheel", this.onMouseWheel.bind(this));
};

Input.prototype.onKeyPressed = function(event) {
  switch (event.keyCode) {
    case 38:
      this.callback("up");
      break;
    case 40:
      this.callback("down");
      break;
    case 37:
      this.callback("left");
      break;
    case 39:
      this.callback("right");
      break;
    case 13:
      this.callback("select");
      break;
    case 8:
    case 27:
      this.callback("back");
      break;
  }
};

Input.prototype.onMouseWheel = function(event) {
  if (event.wheelDeltaY > 0) {
    this.callback("up");
  } else if (event.wheelDeltaY < 0) {
    this.callback("down");
  }
};
