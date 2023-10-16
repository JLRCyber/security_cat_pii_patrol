"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gdjs;
(function (gdjs2) {
  var RuntimeBehavior = function () {
    function RuntimeBehavior(runtimeScene, behaviorData, owner) {
      _classCallCheck(this, RuntimeBehavior);

      this.owner = owner;
      this._activated = true;
      this.name = behaviorData.name || "";
      this.type = behaviorData.type || "";
      this._nameId = gdjs2.RuntimeObject.getNameIdentifier(this.name);
    }

    _createClass(RuntimeBehavior, [{
      key: "updateFromBehaviorData",
      value: function updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
        return false;
      }
    }, {
      key: "getName",
      value: function getName() {
        return this.name;
      }
    }, {
      key: "getNameId",
      value: function getNameId() {
        return this._nameId;
      }
    }, {
      key: "stepPreEvents",
      value: function stepPreEvents(runtimeScene) {
        if (this._activated) {
          var profiler = runtimeScene.getProfiler();
          if (profiler) {
            profiler.begin(this.name);
          }
          this.doStepPreEvents(runtimeScene);
          if (profiler) {
            profiler.end(this.name);
          }
        }
      }
    }, {
      key: "stepPostEvents",
      value: function stepPostEvents(runtimeScene) {
        if (this._activated) {
          var profiler = runtimeScene.getProfiler();
          if (profiler) {
            profiler.begin(this.name);
          }
          this.doStepPostEvents(runtimeScene);
          if (profiler) {
            profiler.end(this.name);
          }
        }
      }
    }, {
      key: "activate",
      value: function activate(enable) {
        if (enable === void 0) {
          enable = true;
        }
        if (!this._activated && enable) {
          this._activated = true;
          this.onActivate();
        } else {
          if (this._activated && !enable) {
            this._activated = false;
            this.onDeActivate();
          }
        }
      }
    }, {
      key: "onCreated",
      value: function onCreated() {}
    }, {
      key: "activated",
      value: function activated() {
        return this._activated;
      }
    }, {
      key: "onActivate",
      value: function onActivate() {}
    }, {
      key: "onDeActivate",
      value: function onDeActivate() {}
    }, {
      key: "doStepPreEvents",
      value: function doStepPreEvents(runtimeScene) {}
    }, {
      key: "doStepPostEvents",
      value: function doStepPostEvents(runtimeScene) {}
    }, {
      key: "onDestroy",
      value: function onDestroy() {}
    }, {
      key: "onObjectHotReloaded",
      value: function onObjectHotReloaded() {}
    }]);

    return RuntimeBehavior;
  }();

  gdjs2.RuntimeBehavior = RuntimeBehavior;
  gdjs2.registerBehavior("", gdjs2.RuntimeBehavior);
})(gdjs || (gdjs = {}));
//# sourceMappingURL=runtimebehavior.js.map