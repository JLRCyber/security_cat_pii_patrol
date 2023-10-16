"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

gdjs.evtsExt__PII__falling = gdjs.evtsExt__PII__falling || {};

/**
 * Behavior generated from falling
 */
gdjs.evtsExt__PII__falling.falling = function (_gdjs$RuntimeBehavior) {
  _inherits(falling, _gdjs$RuntimeBehavior);

  function falling(runtimeScene, behaviorData, owner) {
    _classCallCheck(this, falling);

    var _this = _possibleConstructorReturn(this, (falling.__proto__ || Object.getPrototypeOf(falling)).call(this, runtimeScene, behaviorData, owner));

    _this._runtimeScene = runtimeScene;

    _this._onceTriggers = new gdjs.OnceTriggers();
    _this._behaviorData = {};

    _this._behaviorData.min_speed = behaviorData.min_speed !== undefined ? behaviorData.min_speed : Number("200") || 0;
    _this._behaviorData.max_speed = behaviorData.max_speed !== undefined ? behaviorData.max_speed : Number("600") || 0;
    return _this;
  }

  // Hot-reload:


  _createClass(falling, [{
    key: "updateFromBehaviorData",
    value: function updateFromBehaviorData(oldBehaviorData, newBehaviorData) {

      if (oldBehaviorData.min_speed !== newBehaviorData.min_speed) this._behaviorData.min_speed = newBehaviorData.min_speed;
      if (oldBehaviorData.max_speed !== newBehaviorData.max_speed) this._behaviorData.max_speed = newBehaviorData.max_speed;

      return true;
    }

    // Properties:

  }, {
    key: "_getmin_speed",
    value: function _getmin_speed() {
      return this._behaviorData.min_speed !== undefined ? this._behaviorData.min_speed : Number("200") || 0;
    }
  }, {
    key: "_setmin_speed",
    value: function _setmin_speed(newValue) {
      this._behaviorData.min_speed = newValue;
    }
  }, {
    key: "_getmax_speed",
    value: function _getmax_speed() {
      return this._behaviorData.max_speed !== undefined ? this._behaviorData.max_speed : Number("600") || 0;
    }
  }, {
    key: "_setmax_speed",
    value: function _setmax_speed(newValue) {
      this._behaviorData.max_speed = newValue;
    }
  }]);

  return falling;
}(gdjs.RuntimeBehavior);

// Methods:
gdjs.evtsExt__PII__falling.falling.prototype.onCreatedContext = {};
gdjs.evtsExt__PII__falling.falling.prototype.onCreatedContext.GDObjectObjects1 = [];
gdjs.evtsExt__PII__falling.falling.prototype.onCreatedContext.GDObjectObjects2 = [];

gdjs.evtsExt__PII__falling.falling.prototype.onCreatedContext.conditionTrue_0 = { val: false };
gdjs.evtsExt__PII__falling.falling.prototype.onCreatedContext.condition0IsTrue_0 = { val: false };

gdjs.evtsExt__PII__falling.falling.prototype.onCreatedContext.eventsList0 = function (runtimeScene, eventsFunctionContext) {

  {

    {
      gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PII__falling.falling.prototype.onCreatedContext.GDObjectObjects1);
      {
        for (var i = 0, len = gdjs.evtsExt__PII__falling.falling.prototype.onCreatedContext.GDObjectObjects1.length; i < len; ++i) {
          gdjs.evtsExt__PII__falling.falling.prototype.onCreatedContext.GDObjectObjects1[i].setAnimation(gdjs.randomInRange(0, 9));
        }
      }{
        for (var i = 0, len = gdjs.evtsExt__PII__falling.falling.prototype.onCreatedContext.GDObjectObjects1.length; i < len; ++i) {
          gdjs.evtsExt__PII__falling.falling.prototype.onCreatedContext.GDObjectObjects1[i].addForce(0, gdjs.randomFloatInRange(gdjs.evtsExt__PII__falling.falling.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getmin_speed(), gdjs.evtsExt__PII__falling.falling.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getmax_speed()), 1);
        }
      }{
        for (var i = 0, len = gdjs.evtsExt__PII__falling.falling.prototype.onCreatedContext.GDObjectObjects1.length; i < len; ++i) {
          gdjs.evtsExt__PII__falling.falling.prototype.onCreatedContext.GDObjectObjects1[i].setScale(0.6);
        }
      }
    }
  }
};

gdjs.evtsExt__PII__falling.falling.prototype.onCreated = function (parentEventsFunctionContext) {

  var that = this;
  var runtimeScene = this._runtimeScene;
  var thisObjectList = [this.owner];
  var Object = Hashtable.newFrom({ Object: thisObjectList });
  var Behavior = this.name;
  var eventsFunctionContext = {
    _objectsMap: {
      "Object": Object
    },
    _objectArraysMap: {
      "Object": thisObjectList
    },
    _behaviorNamesMap: {
      "Behavior": Behavior
    },
    getObjects: function getObjects(objectName) {
      return eventsFunctionContext._objectArraysMap[objectName] || [];
    },
    getObjectsLists: function getObjectsLists(objectName) {
      return eventsFunctionContext._objectsMap[objectName] || null;
    },
    getBehaviorName: function getBehaviorName(behaviorName) {
      return eventsFunctionContext._behaviorNamesMap[behaviorName];
    },
    createObject: function createObject(objectName) {
      var objectsList = eventsFunctionContext._objectsMap[objectName];
      if (objectsList) {
        var object = parentEventsFunctionContext ? parentEventsFunctionContext.createObject(objectsList.firstKey()) : runtimeScene.createObject(objectsList.firstKey());
        if (object) {
          objectsList.get(objectsList.firstKey()).push(object);
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
        return object;
      }
      return null;
    },
    getLayer: function getLayer(layerName) {
      return runtimeScene.getLayer(layerName);
    },
    getArgument: function getArgument(argName) {
      return "";
    },
    getOnceTriggers: function getOnceTriggers() {
      return that._onceTriggers;
    }
  };

  gdjs.evtsExt__PII__falling.falling.prototype.onCreatedContext.GDObjectObjects1.length = 0;
  gdjs.evtsExt__PII__falling.falling.prototype.onCreatedContext.GDObjectObjects2.length = 0;

  gdjs.evtsExt__PII__falling.falling.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
  return;
};
gdjs.evtsExt__PII__falling.falling.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__PII__falling.falling.prototype.doStepPreEventsContext.GDObjectObjects1 = [];
gdjs.evtsExt__PII__falling.falling.prototype.doStepPreEventsContext.GDObjectObjects2 = [];

gdjs.evtsExt__PII__falling.falling.prototype.doStepPreEventsContext.conditionTrue_0 = { val: false };
gdjs.evtsExt__PII__falling.falling.prototype.doStepPreEventsContext.condition0IsTrue_0 = { val: false };
gdjs.evtsExt__PII__falling.falling.prototype.doStepPreEventsContext.condition1IsTrue_0 = { val: false };

gdjs.evtsExt__PII__falling.falling.prototype.doStepPreEventsContext.eventsList0 = function (runtimeScene, eventsFunctionContext) {

  {

    gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PII__falling.falling.prototype.doStepPreEventsContext.GDObjectObjects1);

    gdjs.evtsExt__PII__falling.falling.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
    {
      for (var i = 0, k = 0, l = gdjs.evtsExt__PII__falling.falling.prototype.doStepPreEventsContext.GDObjectObjects1.length; i < l; ++i) {
        if (gdjs.evtsExt__PII__falling.falling.prototype.doStepPreEventsContext.GDObjectObjects1[i].getY() > 1200) {
          gdjs.evtsExt__PII__falling.falling.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
          gdjs.evtsExt__PII__falling.falling.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PII__falling.falling.prototype.doStepPreEventsContext.GDObjectObjects1[i];
          ++k;
        }
      }
      gdjs.evtsExt__PII__falling.falling.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
    }if (gdjs.evtsExt__PII__falling.falling.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
      /* Reuse gdjs.evtsExt__PII__falling.falling.prototype.doStepPreEventsContext.GDObjectObjects1 */
      {
        for (var i = 0, len = gdjs.evtsExt__PII__falling.falling.prototype.doStepPreEventsContext.GDObjectObjects1.length; i < len; ++i) {
          gdjs.evtsExt__PII__falling.falling.prototype.doStepPreEventsContext.GDObjectObjects1[i].deleteFromScene(runtimeScene);
        }
      }
    }
  }
};

gdjs.evtsExt__PII__falling.falling.prototype.doStepPreEvents = function (parentEventsFunctionContext) {
  this._onceTriggers.startNewFrame();
  var that = this;
  var runtimeScene = this._runtimeScene;
  var thisObjectList = [this.owner];
  var Object = Hashtable.newFrom({ Object: thisObjectList });
  var Behavior = this.name;
  var eventsFunctionContext = {
    _objectsMap: {
      "Object": Object
    },
    _objectArraysMap: {
      "Object": thisObjectList
    },
    _behaviorNamesMap: {
      "Behavior": Behavior
    },
    getObjects: function getObjects(objectName) {
      return eventsFunctionContext._objectArraysMap[objectName] || [];
    },
    getObjectsLists: function getObjectsLists(objectName) {
      return eventsFunctionContext._objectsMap[objectName] || null;
    },
    getBehaviorName: function getBehaviorName(behaviorName) {
      return eventsFunctionContext._behaviorNamesMap[behaviorName];
    },
    createObject: function createObject(objectName) {
      var objectsList = eventsFunctionContext._objectsMap[objectName];
      if (objectsList) {
        var object = parentEventsFunctionContext ? parentEventsFunctionContext.createObject(objectsList.firstKey()) : runtimeScene.createObject(objectsList.firstKey());
        if (object) {
          objectsList.get(objectsList.firstKey()).push(object);
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
        return object;
      }
      return null;
    },
    getLayer: function getLayer(layerName) {
      return runtimeScene.getLayer(layerName);
    },
    getArgument: function getArgument(argName) {
      return "";
    },
    getOnceTriggers: function getOnceTriggers() {
      return that._onceTriggers;
    }
  };

  gdjs.evtsExt__PII__falling.falling.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
  gdjs.evtsExt__PII__falling.falling.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

  gdjs.evtsExt__PII__falling.falling.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
  return;
};

gdjs.registerBehavior("PII::falling", gdjs.evtsExt__PII__falling.falling);