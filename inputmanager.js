"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gdjs;
(function (gdjs2) {
  var InputManager2 = function () {
    function InputManager2() {
      _classCallCheck(this, InputManager2);

      this._lastPressedKey = 0;
      this._mouseX = 0;
      this._mouseY = 0;
      this._mouseWheelDelta = 0;
      this._startedTouches = [];
      this._endedTouches = [];
      this._touchSimulateMouse = true;
      this._pressedKeys = new Hashtable();
      this._releasedKeys = new Hashtable();
      this._pressedMouseButtons = new Array(5);
      this._releasedMouseButtons = new Array(5);
      this._touches = new Hashtable();
    }

    _createClass(InputManager2, [{
      key: "_getLocationAwareKeyCode",
      value: function _getLocationAwareKeyCode(keyCode, location) {
        if (location) {
          if (96 <= keyCode && keyCode <= 105) {
            return keyCode;
          }
          return keyCode + 1e3 * location;
        }
        if (InputManager2._DEFAULT_LEFT_VARIANT_KEYS.indexOf(keyCode) !== -1) {
          return keyCode + 1e3;
        }
        return keyCode;
      }
    }, {
      key: "onKeyPressed",
      value: function onKeyPressed(keyCode, location) {
        var locationAwareKeyCode = this._getLocationAwareKeyCode(keyCode, location);
        this._pressedKeys.put(locationAwareKeyCode, true);
        this._lastPressedKey = locationAwareKeyCode;
      }
    }, {
      key: "onKeyReleased",
      value: function onKeyReleased(keyCode, location) {
        var locationAwareKeyCode = this._getLocationAwareKeyCode(keyCode, location);
        this._pressedKeys.put(locationAwareKeyCode, false);
        this._releasedKeys.put(locationAwareKeyCode, true);
      }
    }, {
      key: "getLastPressedKey",
      value: function getLastPressedKey() {
        return this._lastPressedKey;
      }
    }, {
      key: "isKeyPressed",
      value: function isKeyPressed(locationAwareKeyCode) {
        return this._pressedKeys.containsKey(locationAwareKeyCode) && this._pressedKeys.get(locationAwareKeyCode);
      }
    }, {
      key: "wasKeyReleased",
      value: function wasKeyReleased(locationAwareKeyCode) {
        return this._releasedKeys.containsKey(locationAwareKeyCode) && this._releasedKeys.get(locationAwareKeyCode);
      }
    }, {
      key: "anyKeyPressed",
      value: function anyKeyPressed() {
        for (var keyCode in this._pressedKeys.items) {
          if (this._pressedKeys.items.hasOwnProperty(keyCode)) {
            if (this._pressedKeys.items[keyCode]) {
              return true;
            }
          }
        }
        return false;
      }
    }, {
      key: "anyKeyReleased",
      value: function anyKeyReleased() {
        for (var keyCode in this._releasedKeys.items) {
          if (this._releasedKeys.items.hasOwnProperty(keyCode)) {
            if (this._releasedKeys.items[keyCode]) {
              return true;
            }
          }
        }
        return false;
      }
    }, {
      key: "onMouseMove",
      value: function onMouseMove(x, y) {
        this._mouseX = x;
        this._mouseY = y;
      }
    }, {
      key: "getMouseX",
      value: function getMouseX() {
        return this._mouseX;
      }
    }, {
      key: "getMouseY",
      value: function getMouseY() {
        return this._mouseY;
      }
    }, {
      key: "onMouseButtonPressed",
      value: function onMouseButtonPressed(buttonCode) {
        this._pressedMouseButtons[buttonCode] = true;
        this._releasedMouseButtons[buttonCode] = false;
      }
    }, {
      key: "onMouseButtonReleased",
      value: function onMouseButtonReleased(buttonCode) {
        this._pressedMouseButtons[buttonCode] = false;
        this._releasedMouseButtons[buttonCode] = true;
      }
    }, {
      key: "isMouseButtonPressed",
      value: function isMouseButtonPressed(buttonCode) {
        return this._pressedMouseButtons[buttonCode] !== void 0 && this._pressedMouseButtons[buttonCode];
      }
    }, {
      key: "isMouseButtonReleased",
      value: function isMouseButtonReleased(buttonCode) {
        return this._releasedMouseButtons[buttonCode] !== void 0 && this._releasedMouseButtons[buttonCode];
      }
    }, {
      key: "onMouseWheel",
      value: function onMouseWheel(wheelDelta) {
        this._mouseWheelDelta = wheelDelta;
      }
    }, {
      key: "getMouseWheelDelta",
      value: function getMouseWheelDelta() {
        return this._mouseWheelDelta;
      }
    }, {
      key: "getTouchX",
      value: function getTouchX(identifier) {
        if (!this._touches.containsKey(identifier)) {
          return 0;
        }
        return this._touches.get(identifier).x;
      }
    }, {
      key: "getTouchY",
      value: function getTouchY(identifier) {
        if (!this._touches.containsKey(identifier)) {
          return 0;
        }
        return this._touches.get(identifier).y;
      }
    }, {
      key: "getAllTouchIdentifiers",
      value: function getAllTouchIdentifiers() {
        InputManager2._allTouchIds.length = 0;
        for (var id in this._touches.items) {
          if (this._touches.items.hasOwnProperty(id)) {
            InputManager2._allTouchIds.push(parseInt(id, 10));
          }
        }
        return InputManager2._allTouchIds;
      }
    }, {
      key: "onTouchStart",
      value: function onTouchStart(identifier, x, y) {
        this._startedTouches.push(identifier);
        this._touches.put(identifier, { x: x, y: y, justEnded: false });
        if (this._touchSimulateMouse) {
          this.onMouseMove(x, y);
          this.onMouseButtonPressed(InputManager2.MOUSE_LEFT_BUTTON);
        }
      }
    }, {
      key: "onTouchMove",
      value: function onTouchMove(identifier, x, y) {
        var touch = this._touches.get(identifier);
        if (!touch) {
          return;
        }
        touch.x = x;
        touch.y = y;
        if (this._touchSimulateMouse) {
          this.onMouseMove(x, y);
        }
      }
    }, {
      key: "onTouchEnd",
      value: function onTouchEnd(identifier) {
        this._endedTouches.push(identifier);
        if (this._touches.containsKey(identifier)) {
          this._touches.get(identifier).justEnded = true;
        }
        if (this._touchSimulateMouse) {
          this.onMouseButtonReleased(InputManager2.MOUSE_LEFT_BUTTON);
        }
      }
    }, {
      key: "getStartedTouchIdentifiers",
      value: function getStartedTouchIdentifiers() {
        return this._startedTouches;
      }
    }, {
      key: "popStartedTouch",
      value: function popStartedTouch() {
        return this._startedTouches.shift();
      }
    }, {
      key: "popEndedTouch",
      value: function popEndedTouch() {
        return this._endedTouches.shift();
      }
    }, {
      key: "touchSimulateMouse",
      value: function touchSimulateMouse(enable) {
        if (enable === void 0) {
          enable = true;
        }
        this._touchSimulateMouse = enable;
      }
    }, {
      key: "onFrameEnded",
      value: function onFrameEnded() {
        for (var id in this._touches.items) {
          if (this._touches.items.hasOwnProperty(id)) {
            var touch = this._touches.items[id];
            if (touch.justEnded) {
              this._touches.remove(id);
            }
          }
        }
        this._startedTouches.length = 0;
        this._endedTouches.length = 0;
        this._releasedKeys.clear();
        this._releasedMouseButtons.length = 0;
        this._mouseWheelDelta = 0;
      }
    }, {
      key: "isScrollingUp",
      value: function isScrollingUp() {
        return this.getMouseWheelDelta() > 0;
      }
    }, {
      key: "isScrollingDown",
      value: function isScrollingDown() {
        return this.getMouseWheelDelta() < 0;
      }
    }]);

    return InputManager2;
  }();
  var InputManager = InputManager2;
  InputManager.MOUSE_LEFT_BUTTON = 0;
  InputManager.MOUSE_RIGHT_BUTTON = 1;
  InputManager.MOUSE_MIDDLE_BUTTON = 2;
  InputManager._DEFAULT_LEFT_VARIANT_KEYS = [16, 17, 18, 91];
  InputManager._allTouchIds = [];
  gdjs2.InputManager = InputManager;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=inputmanager.js.map