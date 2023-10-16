"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gdjs;
(function (gdjs2) {
  var TimeManager = function () {
    function TimeManager() {
      _classCallCheck(this, TimeManager);

      this._elapsedTime = 0;
      this._timeScale = 1;
      this._timeFromStart = 0;
      this._firstFrame = true;
      this._timers = new Hashtable();
      this._firstUpdateDone = false;
      this.reset();
    }

    _createClass(TimeManager, [{
      key: "reset",
      value: function reset() {
        this._elapsedTime = 0;
        this._timeScale = 1;
        this._timeFromStart = 0;
        this._firstFrame = true;
        this._timers = new Hashtable();
      }
    }, {
      key: "update",
      value: function update(elapsedTime, minimumFPS) {
        if (this._firstUpdateDone) {
          this._firstFrame = false;
        }
        this._firstUpdateDone = true;
        this._elapsedTime = Math.min(elapsedTime, 1e3 / minimumFPS);
        this._elapsedTime *= this._timeScale;
        for (var name in this._timers.items) {
          if (this._timers.items.hasOwnProperty(name)) {
            this._timers.items[name].updateTime(this._elapsedTime);
          }
        }
        this._timeFromStart += this._elapsedTime;
      }
    }, {
      key: "setTimeScale",
      value: function setTimeScale(timeScale) {
        if (timeScale >= 0) {
          this._timeScale = timeScale;
        }
      }
    }, {
      key: "getTimeScale",
      value: function getTimeScale() {
        return this._timeScale;
      }
    }, {
      key: "getTimeFromStart",
      value: function getTimeFromStart() {
        return this._timeFromStart;
      }
    }, {
      key: "isFirstFrame",
      value: function isFirstFrame() {
        return this._firstFrame;
      }
    }, {
      key: "getElapsedTime",
      value: function getElapsedTime() {
        return this._elapsedTime;
      }
    }, {
      key: "addTimer",
      value: function addTimer(name) {
        this._timers.put(name, new gdjs2.Timer(name));
      }
    }, {
      key: "hasTimer",
      value: function hasTimer(name) {
        return this._timers.containsKey(name);
      }
    }, {
      key: "getTimer",
      value: function getTimer(name) {
        return this._timers.get(name);
      }
    }, {
      key: "removeTimer",
      value: function removeTimer(name) {
        if (this._timers.containsKey(name)) {
          this._timers.remove(name);
        }
      }
    }]);

    return TimeManager;
  }();

  gdjs2.TimeManager = TimeManager;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=timemanager.js.map