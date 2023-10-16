"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gdjs;
(function (gdjs2) {
  var Force = function () {
    function Force(x, y, multiplier) {
      _classCallCheck(this, Force);

      this._dirty = false;
      this._x = x || 0;
      this._y = y || 0;
      this._angle = Math.atan2(y, x) * 180 / Math.PI;
      this._length = Math.sqrt(x * x + y * y);
      this._multiplier = multiplier;
    }

    _createClass(Force, [{
      key: "getX",
      value: function getX() {
        return this._x;
      }
    }, {
      key: "getY",
      value: function getY() {
        return this._y;
      }
    }, {
      key: "setX",
      value: function setX(x) {
        this._x = x;
        this._dirty = true;
      }
    }, {
      key: "setY",
      value: function setY(y) {
        this._y = y;
        this._dirty = true;
      }
    }, {
      key: "setAngle",
      value: function setAngle(angle) {
        if (this._dirty) {
          this._length = Math.sqrt(this._x * this._x + this._y * this._y);
          this._dirty = false;
        }
        this._angle = angle;
        var angleInRadians = angle / 180 * Math.PI;
        this._x = Math.cos(angleInRadians) * this._length;
        this._y = Math.sin(angleInRadians) * this._length;
      }
    }, {
      key: "setLength",
      value: function setLength(len) {
        if (this._dirty) {
          this._angle = Math.atan2(this._y, this._x) * 180 / Math.PI;
          this._dirty = false;
        }
        this._length = len;
        var angleInRadians = this._angle / 180 * Math.PI;
        this._x = Math.cos(angleInRadians) * this._length;
        this._y = Math.sin(angleInRadians) * this._length;
      }
    }, {
      key: "getAngle",
      value: function getAngle() {
        if (this._dirty) {
          this._angle = Math.atan2(this._y, this._x) * 180 / Math.PI;
          this._length = Math.sqrt(this._x * this._x + this._y * this._y);
          this._dirty = false;
        }
        return this._angle;
      }
    }, {
      key: "getLength",
      value: function getLength() {
        if (this._dirty) {
          this._angle = Math.atan2(this._y, this._x) * 180 / Math.PI;
          this._length = Math.sqrt(this._x * this._x + this._y * this._y);
          this._dirty = false;
        }
        return this._length;
      }
    }, {
      key: "getMultiplier",
      value: function getMultiplier() {
        return this._multiplier;
      }
    }, {
      key: "setMultiplier",
      value: function setMultiplier(multiplier) {
        this._multiplier = multiplier;
      }
    }]);

    return Force;
  }();

  gdjs2.Force = Force;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=force.js.map