"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gdjs;
(function (gdjs2) {
  var Timer = function () {
    function Timer(name) {
      _classCallCheck(this, Timer);

      this._time = 0;
      this._paused = false;
      this._name = name;
    }

    _createClass(Timer, [{
      key: "getName",
      value: function getName() {
        return this._name;
      }
    }, {
      key: "getTime",
      value: function getTime() {
        return this._time;
      }
    }, {
      key: "updateTime",
      value: function updateTime(time) {
        if (!this._paused) {
          this._time += time;
        }
      }
    }, {
      key: "setTime",
      value: function setTime(time) {
        this._time = time;
      }
    }, {
      key: "reset",
      value: function reset() {
        this.setTime(0);
      }
    }, {
      key: "setPaused",
      value: function setPaused(enable) {
        this._paused = enable;
      }
    }, {
      key: "isPaused",
      value: function isPaused() {
        return this._paused;
      }
    }]);

    return Timer;
  }();

  gdjs2.Timer = Timer;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=timer.js.map