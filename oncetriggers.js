"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gdjs;
(function (gdjs2) {
  var OnceTriggers = function () {
    function OnceTriggers() {
      _classCallCheck(this, OnceTriggers);

      this._onceTriggers = {};
      this._lastFrameOnceTrigger = {};
    }

    _createClass(OnceTriggers, [{
      key: "startNewFrame",
      value: function startNewFrame() {
        for (var k in this._lastFrameOnceTrigger) {
          if (this._lastFrameOnceTrigger.hasOwnProperty(k)) delete this._lastFrameOnceTrigger[k];
        }for (var _k in this._onceTriggers) {
          if (this._onceTriggers.hasOwnProperty(_k)) {
            this._lastFrameOnceTrigger[_k] = this._onceTriggers[_k];
            delete this._onceTriggers[_k];
          }
        }
      }
    }, {
      key: "triggerOnce",
      value: function triggerOnce(triggerId) {
        this._onceTriggers[triggerId] = true;
        return !this._lastFrameOnceTrigger.hasOwnProperty(triggerId);
      }
    }]);

    return OnceTriggers;
  }();

  gdjs2.OnceTriggers = OnceTriggers;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=oncetriggers.js.map