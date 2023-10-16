"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gdjs;
(function (gdjs2) {
  var computeSqBoundingRadius = function computeSqBoundingRadius(width, height, centerX, centerY) {
    var radiusX = Math.max(centerX, width - centerX);
    var radiusY = Math.max(centerY, height - centerY);
    return Math.pow(radiusX, 2) + Math.pow(radiusY, 2);
  };
  var RuntimeObject2 = function () {
    function RuntimeObject2(runtimeScene, objectData) {
      _classCallCheck(this, RuntimeObject2);

      this.x = 0;
      this.y = 0;
      this.angle = 0;
      this.zOrder = 0;
      this.hidden = false;
      this.layer = "";
      this._livingOnScene = true;
      this.persistentUuid = null;
      this.pick = false;
      this._defaultHitBoxes = [];
      this.hitBoxesDirty = true;
      this.aabb = { min: [0, 0], max: [0, 0] };
      this._forces = [];
      this._behaviors = [];
      this.getVariableNumber = RuntimeObject2.getVariableNumber;
      this.returnVariable = RuntimeObject2.returnVariable;
      this.getVariableString = RuntimeObject2.getVariableString;
      this.setVariableNumber = RuntimeObject2.setVariableNumber;
      this.setVariableString = RuntimeObject2.setVariableString;
      this.getVariableBoolean = RuntimeObject2.getVariableBoolean;
      this.setVariableBoolean = RuntimeObject2.setVariableBoolean;
      this.toggleVariableBoolean = RuntimeObject2.toggleVariableBoolean;
      this.variableChildExists = RuntimeObject2.variableChildExists;
      this.variableRemoveChild = RuntimeObject2.variableRemoveChild;
      this.variableClearChildren = RuntimeObject2.variableClearChildren;
      this.variablePushCopy = RuntimeObject2.variablePushCopy;
      this.valuePush = RuntimeObject2.valuePush;
      this.variableRemoveAt = RuntimeObject2.variableRemoveAt;
      this.getSqDistanceTo = RuntimeObject2.prototype.getSqDistanceToPosition;
      this.name = objectData.name || "";
      this.type = objectData.type || "";
      this._nameId = RuntimeObject2.getNameIdentifier(this.name);
      this.id = runtimeScene.createNewUniqueId();
      this._runtimeScene = runtimeScene;
      this._defaultHitBoxes.push(gdjs2.Polygon.createRectangle(0, 0));
      this.hitBoxes = this._defaultHitBoxes;
      this._variables = new gdjs2.VariablesContainer(objectData ? objectData.variables : void 0);
      this._averageForce = new gdjs2.Force(0, 0, 0);
      this._behaviorsTable = new Hashtable();
      for (var i = 0, len = objectData.behaviors.length; i < len; ++i) {
        var autoData = objectData.behaviors[i];
        var Ctor = gdjs2.getBehaviorConstructor(autoData.type);
        this._behaviors.push(new Ctor(runtimeScene, autoData, this));
        this._behaviorsTable.put(autoData.name, this._behaviors[i]);
      }
      this._timers = new Hashtable();
    }

    _createClass(RuntimeObject2, [{
      key: "onCreated",
      value: function onCreated() {
        for (var i = 0; i < this._behaviors.length; ++i) {
          this._behaviors[i].onCreated();
        }
      }
    }, {
      key: "reinitialize",
      value: function reinitialize(objectData) {
        var runtimeScene = this._runtimeScene;
        this.x = 0;
        this.y = 0;
        this.angle = 0;
        this.zOrder = 0;
        this.hidden = false;
        this.layer = "";
        this._livingOnScene = true;
        this.id = runtimeScene.createNewUniqueId();
        this.persistentUuid = null;
        this.pick = false;
        this.hitBoxesDirty = true;
        this.aabb.min[0] = 0;
        this.aabb.min[1] = 0;
        this.aabb.max[0] = 0;
        this.aabb.max[1] = 0;
        this._variables = new gdjs2.VariablesContainer(objectData.variables);
        this.clearForces();
        this._behaviorsTable.clear();
        var i = 0;
        for (var len = objectData.behaviors.length; i < len; ++i) {
          var behaviorData = objectData.behaviors[i];
          var Ctor = gdjs2.getBehaviorConstructor(behaviorData.type);
          if (i < this._behaviors.length) {
            this._behaviors[i] = new Ctor(runtimeScene, behaviorData, this);
          } else {
            this._behaviors.push(new Ctor(runtimeScene, behaviorData, this));
          }
          this._behaviorsTable.put(behaviorData.name, this._behaviors[i]);
        }
        this._behaviors.length = i;
        this._timers.clear();
      }
    }, {
      key: "getElapsedTime",
      value: function getElapsedTime(runtimeScene) {
        var theLayer = runtimeScene.getLayer(this.layer);
        return theLayer.getElapsedTime();
      }
    }, {
      key: "update",
      value: function update(runtimeScene) {}
    }, {
      key: "updatePreRender",
      value: function updatePreRender(runtimeScene) {}
    }, {
      key: "extraInitializationFromInitialInstance",
      value: function extraInitializationFromInitialInstance(initialInstanceData) {}
    }, {
      key: "updateFromObjectData",
      value: function updateFromObjectData(oldObjectData, newObjectData) {
        return false;
      }
    }, {
      key: "deleteFromScene",
      value: function deleteFromScene(runtimeScene) {
        if (this._livingOnScene) {
          runtimeScene.markObjectForDeletion(this);
          this._livingOnScene = false;
        }
      }
    }, {
      key: "onDestroyFromScene",
      value: function onDestroyFromScene(runtimeScene) {
        var theLayer = runtimeScene.getLayer(this.layer);
        var rendererObject = this.getRendererObject();
        if (rendererObject) {
          theLayer.getRenderer().removeRendererObject(rendererObject);
        }
        for (var j = 0, lenj = this._behaviors.length; j < lenj; ++j) {
          this._behaviors[j].onDestroy();
        }
      }
    }, {
      key: "getRendererObject",
      value: function getRendererObject() {
        return void 0;
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
      key: "getUniqueId",
      value: function getUniqueId() {
        return this.id;
      }
    }, {
      key: "setPosition",
      value: function setPosition(x, y) {
        this.setX(x);
        this.setY(y);
      }
    }, {
      key: "setX",
      value: function setX(x) {
        if (x === this.x) {
          return;
        }
        this.x = x;
        this.hitBoxesDirty = true;
      }
    }, {
      key: "getX",
      value: function getX() {
        return this.x;
      }
    }, {
      key: "setY",
      value: function setY(y) {
        if (y === this.y) {
          return;
        }
        this.y = y;
        this.hitBoxesDirty = true;
      }
    }, {
      key: "getY",
      value: function getY() {
        return this.y;
      }
    }, {
      key: "getDrawableX",
      value: function getDrawableX() {
        return this.getX();
      }
    }, {
      key: "getDrawableY",
      value: function getDrawableY() {
        return this.getY();
      }
    }, {
      key: "rotateTowardPosition",
      value: function rotateTowardPosition(x, y, speed, scene) {
        this.rotateTowardAngle(gdjs2.toDegrees(Math.atan2(y - (this.getDrawableY() + this.getCenterY()), x - (this.getDrawableX() + this.getCenterX()))), speed, scene);
      }
    }, {
      key: "rotateTowardAngle",
      value: function rotateTowardAngle(angle, speed, runtimeScene) {
        if (speed === 0) {
          this.setAngle(angle);
          return;
        }
        var angularDiff = gdjs2.evtTools.common.angleDifference(this.getAngle(), angle);
        var diffWasPositive = angularDiff >= 0;
        var newAngle = this.getAngle() + (diffWasPositive ? -1 : 1) * speed * this.getElapsedTime(runtimeScene) / 1e3;
        if (gdjs2.evtTools.common.angleDifference(newAngle, angle) > 0 ^ diffWasPositive) {
          newAngle = angle;
        }
        this.setAngle(newAngle);
        if (this.getAngle() !== newAngle) {
          this.setAngle(angle);
        }
      }
    }, {
      key: "rotate",
      value: function rotate(speed, runtimeScene) {
        this.setAngle(this.getAngle() + speed * this.getElapsedTime(runtimeScene) / 1e3);
      }
    }, {
      key: "setAngle",
      value: function setAngle(angle) {
        if (this.angle === angle) {
          return;
        }
        this.angle = angle;
        this.hitBoxesDirty = true;
      }
    }, {
      key: "getAngle",
      value: function getAngle() {
        return this.angle;
      }
    }, {
      key: "setLayer",
      value: function setLayer(layer) {
        if (layer === this.layer) {
          return;
        }
        var oldLayer = this._runtimeScene.getLayer(this.layer);
        this.layer = layer;
        var newLayer = this._runtimeScene.getLayer(this.layer);
        var rendererObject = this.getRendererObject();
        if (rendererObject) {
          oldLayer.getRenderer().removeRendererObject(rendererObject);
          newLayer.getRenderer().addRendererObject(rendererObject, this.zOrder);
        }
      }
    }, {
      key: "getLayer",
      value: function getLayer() {
        return this.layer;
      }
    }, {
      key: "isOnLayer",
      value: function isOnLayer(layer) {
        return this.layer === layer;
      }
    }, {
      key: "setZOrder",
      value: function setZOrder(z) {
        if (z === this.zOrder) {
          return;
        }
        this.zOrder = z;
        if (this.getRendererObject()) {
          var theLayer = this._runtimeScene.getLayer(this.layer);
          theLayer.getRenderer().changeRendererObjectZOrder(this.getRendererObject(), z);
        }
      }
    }, {
      key: "getZOrder",
      value: function getZOrder() {
        return this.zOrder;
      }
    }, {
      key: "getVariables",
      value: function getVariables() {
        return this._variables;
      }
    }, {
      key: "hasVariable",
      value: function hasVariable(name) {
        return this._variables.has(name);
      }
    }, {
      key: "hide",
      value: function hide(enable) {
        if (enable === void 0) {
          enable = true;
        }
        this.hidden = enable;
      }
    }, {
      key: "isVisible",
      value: function isVisible() {
        return !this.hidden;
      }
    }, {
      key: "isHidden",
      value: function isHidden() {
        return this.hidden;
      }
    }, {
      key: "setWidth",
      value: function setWidth(width) {}
    }, {
      key: "setHeight",
      value: function setHeight(height) {}
    }, {
      key: "getWidth",
      value: function getWidth() {
        return 0;
      }
    }, {
      key: "getHeight",
      value: function getHeight() {
        return 0;
      }
    }, {
      key: "getCenterX",
      value: function getCenterX() {
        return this.getWidth() / 2;
      }
    }, {
      key: "getCenterY",
      value: function getCenterY() {
        return this.getHeight() / 2;
      }
    }, {
      key: "getCenterXInScene",
      value: function getCenterXInScene() {
        return this.getDrawableX() + this.getCenterX();
      }
    }, {
      key: "getCenterYInScene",
      value: function getCenterYInScene() {
        return this.getDrawableY() + this.getCenterY();
      }
    }, {
      key: "setCenterPositionInScene",
      value: function setCenterPositionInScene(x, y) {
        this.setX(x + this.x - (this.getDrawableX() + this.getCenterX()));
        this.setY(y + this.y - (this.getDrawableY() + this.getCenterY()));
      }
    }, {
      key: "setCenterXInScene",
      value: function setCenterXInScene(x) {
        this.setX(x + this.x - (this.getDrawableX() + this.getCenterX()));
      }
    }, {
      key: "setCenterYInScene",
      value: function setCenterYInScene(y) {
        this.setY(y + this.y - (this.getDrawableY() + this.getCenterY()));
      }
    }, {
      key: "_getRecycledForce",
      value: function _getRecycledForce(x, y, multiplier) {
        if (RuntimeObject2.forcesGarbage.length === 0) {
          return new gdjs2.Force(x, y, multiplier);
        } else {
          var recycledForce = RuntimeObject2.forcesGarbage.pop();
          recycledForce.setX(x);
          recycledForce.setY(y);
          recycledForce.setMultiplier(multiplier);
          return recycledForce;
        }
      }
    }, {
      key: "addForce",
      value: function addForce(x, y, multiplier) {
        this._forces.push(this._getRecycledForce(x, y, multiplier));
      }
    }, {
      key: "addPolarForce",
      value: function addPolarForce(angle, len, multiplier) {
        var angleInRadians = gdjs2.toRad(angle);
        var forceX = Math.cos(angleInRadians) * len;
        var forceY = Math.sin(angleInRadians) * len;
        this._forces.push(this._getRecycledForce(forceX, forceY, multiplier));
      }
    }, {
      key: "addForceTowardPosition",
      value: function addForceTowardPosition(x, y, len, multiplier) {
        var angleInRadians = Math.atan2(y - (this.getDrawableY() + this.getCenterY()), x - (this.getDrawableX() + this.getCenterX()));
        var forceX = Math.cos(angleInRadians) * len;
        var forceY = Math.sin(angleInRadians) * len;
        this._forces.push(this._getRecycledForce(forceX, forceY, multiplier));
      }
    }, {
      key: "addForceTowardObject",
      value: function addForceTowardObject(object, len, multiplier) {
        if (object == null) {
          return;
        }
        this.addForceTowardPosition(object.getDrawableX() + object.getCenterX(), object.getDrawableY() + object.getCenterY(), len, multiplier);
      }
    }, {
      key: "clearForces",
      value: function clearForces() {
        RuntimeObject2.forcesGarbage.push.apply(RuntimeObject2.forcesGarbage, this._forces);
        this._forces.length = 0;
      }
    }, {
      key: "hasNoForces",
      value: function hasNoForces() {
        return this._forces.length === 0;
      }
    }, {
      key: "updateForces",
      value: function updateForces(elapsedTime) {
        for (var i = 0; i < this._forces.length;) {
          var force = this._forces[i];
          var multiplier = force.getMultiplier();
          if (multiplier === 1) {
            ++i;
          } else {
            if (multiplier === 0 || force.getLength() <= 1e-3) {
              RuntimeObject2.forcesGarbage.push(force);
              this._forces.splice(i, 1);
            } else {
              force.setLength(force.getLength() - force.getLength() * (1 - multiplier) * elapsedTime);
              ++i;
            }
          }
        }
      }
    }, {
      key: "getAverageForce",
      value: function getAverageForce() {
        var averageX = 0;
        var averageY = 0;
        for (var i = 0, len = this._forces.length; i < len; ++i) {
          averageX += this._forces[i].getX();
          averageY += this._forces[i].getY();
        }
        this._averageForce.setX(averageX);
        this._averageForce.setY(averageY);
        return this._averageForce;
      }
    }, {
      key: "averageForceAngleIs",
      value: function averageForceAngleIs(angle, toleranceInDegrees) {
        var averageAngle = this.getAverageForce().getAngle();
        if (averageAngle < 0) {
          averageAngle += 360;
        }
        return Math.abs(angle - averageAngle) < toleranceInDegrees / 2;
      }
    }, {
      key: "getHitBoxes",
      value: function getHitBoxes() {
        if (this.hitBoxesDirty) {
          this.updateHitBoxes();
          this.updateAABB();
          this.hitBoxesDirty = false;
        }
        return this.hitBoxes;
      }
    }, {
      key: "updateHitBoxes",
      value: function updateHitBoxes() {
        this.hitBoxes = this._defaultHitBoxes;
        var width = this.getWidth();
        var height = this.getHeight();
        var centerX = this.getCenterX();
        var centerY = this.getCenterY();
        if (centerX === width / 2 && centerY === height / 2) {
          this.hitBoxes[0].vertices[0][0] = -centerX;
          this.hitBoxes[0].vertices[0][1] = -centerY;
          this.hitBoxes[0].vertices[1][0] = +centerX;
          this.hitBoxes[0].vertices[1][1] = -centerY;
          this.hitBoxes[0].vertices[2][0] = +centerX;
          this.hitBoxes[0].vertices[2][1] = +centerY;
          this.hitBoxes[0].vertices[3][0] = -centerX;
          this.hitBoxes[0].vertices[3][1] = +centerY;
        } else {
          this.hitBoxes[0].vertices[0][0] = 0 - centerX;
          this.hitBoxes[0].vertices[0][1] = 0 - centerY;
          this.hitBoxes[0].vertices[1][0] = width - centerX;
          this.hitBoxes[0].vertices[1][1] = 0 - centerY;
          this.hitBoxes[0].vertices[2][0] = width - centerX;
          this.hitBoxes[0].vertices[2][1] = height - centerY;
          this.hitBoxes[0].vertices[3][0] = 0 - centerX;
          this.hitBoxes[0].vertices[3][1] = height - centerY;
        }
        this.hitBoxes[0].rotate(gdjs2.toRad(this.getAngle()));
        this.hitBoxes[0].move(this.getDrawableX() + centerX, this.getDrawableY() + centerY);
      }
    }, {
      key: "getAABB",
      value: function getAABB() {
        if (this.hitBoxesDirty) {
          this.updateHitBoxes();
          this.updateAABB();
          this.hitBoxesDirty = false;
        }
        return this.aabb;
      }
    }, {
      key: "getVisibilityAABB",
      value: function getVisibilityAABB() {
        return this.getAABB();
      }
    }, {
      key: "updateAABB",
      value: function updateAABB() {
        if (this.getAngle() === 0) {
          this.aabb.min[0] = this.getDrawableX();
          this.aabb.min[1] = this.getDrawableY();
          this.aabb.max[0] = this.aabb.min[0] + this.getWidth();
          this.aabb.max[1] = this.aabb.min[1] + this.getHeight();
        } else {
          var first = true;
          for (var i = 0; i < this.hitBoxes.length; i++) {
            for (var j = 0; j < this.hitBoxes[i].vertices.length; j++) {
              var vertex = this.hitBoxes[i].vertices[j];
              if (first) {
                this.aabb.min[0] = vertex[0];
                this.aabb.max[0] = vertex[0];
                this.aabb.min[1] = vertex[1];
                this.aabb.max[1] = vertex[1];
                first = false;
              } else {
                this.aabb.min[0] = Math.min(this.aabb.min[0], vertex[0]);
                this.aabb.max[0] = Math.max(this.aabb.max[0], vertex[0]);
                this.aabb.min[1] = Math.min(this.aabb.min[1], vertex[1]);
                this.aabb.max[1] = Math.max(this.aabb.max[1], vertex[1]);
              }
            }
          }
        }
      }
    }, {
      key: "stepBehaviorsPreEvents",
      value: function stepBehaviorsPreEvents(runtimeScene) {
        for (var i = 0, len = this._behaviors.length; i < len; ++i) {
          this._behaviors[i].stepPreEvents(runtimeScene);
        }
      }
    }, {
      key: "stepBehaviorsPostEvents",
      value: function stepBehaviorsPostEvents(runtimeScene) {
        for (var i = 0, len = this._behaviors.length; i < len; ++i) {
          this._behaviors[i].stepPostEvents(runtimeScene);
        }
      }
    }, {
      key: "notifyBehaviorsObjectHotReloaded",
      value: function notifyBehaviorsObjectHotReloaded() {
        for (var i = 0, len = this._behaviors.length; i < len; ++i) {
          this._behaviors[i].onObjectHotReloaded();
        }
      }
    }, {
      key: "getBehavior",
      value: function getBehavior(name) {
        return this._behaviorsTable.get(name);
      }
    }, {
      key: "hasBehavior",
      value: function hasBehavior(name) {
        return this._behaviorsTable.containsKey(name);
      }
    }, {
      key: "activateBehavior",
      value: function activateBehavior(name, enable) {
        if (this._behaviorsTable.containsKey(name)) {
          this._behaviorsTable.get(name).activate(enable);
        }
      }
    }, {
      key: "behaviorActivated",
      value: function behaviorActivated(name) {
        if (this._behaviorsTable.containsKey(name)) {
          return this._behaviorsTable.get(name).activated();
        }
        return false;
      }
    }, {
      key: "removeBehavior",
      value: function removeBehavior(name) {
        var behavior = this._behaviorsTable.get(name);
        if (!behavior) {
          return false;
        }
        behavior.onDestroy();
        var behaviorIndex = this._behaviors.indexOf(behavior);
        if (behaviorIndex !== -1) {
          this._behaviors.splice(behaviorIndex, 1);
        }
        this._behaviorsTable.remove(name);
        return true;
      }
    }, {
      key: "addNewBehavior",
      value: function addNewBehavior(behaviorData) {
        var Ctor = gdjs2.getBehaviorConstructor(behaviorData.type);
        if (!Ctor) {
          return false;
        }
        var newRuntimeBehavior = new Ctor(this._runtimeScene, behaviorData, this);
        this._behaviors.push(newRuntimeBehavior);
        this._behaviorsTable.put(behaviorData.name, newRuntimeBehavior);
        return true;
      }
    }, {
      key: "updateTimers",
      value: function updateTimers(elapsedTime) {
        for (var name in this._timers.items) {
          if (this._timers.items.hasOwnProperty(name)) {
            this._timers.items[name].updateTime(elapsedTime);
          }
        }
      }
    }, {
      key: "timerElapsedTime",
      value: function timerElapsedTime(timerName, timeInSeconds) {
        if (!this._timers.containsKey(timerName)) {
          this._timers.put(timerName, new gdjs2.Timer(timerName));
          return false;
        }
        return this.getTimerElapsedTimeInSeconds(timerName) >= timeInSeconds;
      }
    }, {
      key: "timerPaused",
      value: function timerPaused(timerName) {
        if (!this._timers.containsKey(timerName)) {
          return false;
        }
        return this._timers.get(timerName).isPaused();
      }
    }, {
      key: "resetTimer",
      value: function resetTimer(timerName) {
        if (!this._timers.containsKey(timerName)) {
          this._timers.put(timerName, new gdjs2.Timer(timerName));
        }
        this._timers.get(timerName).reset();
      }
    }, {
      key: "pauseTimer",
      value: function pauseTimer(timerName) {
        if (!this._timers.containsKey(timerName)) {
          this._timers.put(timerName, new gdjs2.Timer(timerName));
        }
        this._timers.get(timerName).setPaused(true);
      }
    }, {
      key: "unpauseTimer",
      value: function unpauseTimer(timerName) {
        if (!this._timers.containsKey(timerName)) {
          this._timers.put(timerName, new gdjs2.Timer(timerName));
        }
        this._timers.get(timerName).setPaused(false);
      }
    }, {
      key: "removeTimer",
      value: function removeTimer(timerName) {
        if (this._timers.containsKey(timerName)) {
          this._timers.remove(timerName);
        }
      }
    }, {
      key: "getTimerElapsedTimeInSeconds",
      value: function getTimerElapsedTimeInSeconds(timerName) {
        if (!this._timers.containsKey(timerName)) {
          return 0;
        }
        return this._timers.get(timerName).getTime() / 1e3;
      }
    }, {
      key: "separateFromObjects",
      value: function separateFromObjects(objects, ignoreTouchingEdges) {
        var moved = false;
        var xMove = 0;
        var yMove = 0;
        var hitBoxes = this.getHitBoxes();
        for (var i = 0, len = objects.length; i < len; ++i) {
          if (objects[i].id != this.id) {
            var otherHitBoxes = objects[i].getHitBoxes();
            for (var k = 0, lenk = hitBoxes.length; k < lenk; ++k) {
              for (var l = 0, lenl = otherHitBoxes.length; l < lenl; ++l) {
                var result = gdjs2.Polygon.collisionTest(hitBoxes[k], otherHitBoxes[l], ignoreTouchingEdges);
                if (result.collision) {
                  xMove += result.move_axis[0];
                  yMove += result.move_axis[1];
                  moved = true;
                }
              }
            }
          }
        }
        this.setPosition(this.getX() + xMove, this.getY() + yMove);
        return moved;
      }
    }, {
      key: "separateFromObjectsList",
      value: function separateFromObjectsList(objectsLists, ignoreTouchingEdges) {
        var moved = false;
        var xMove = 0;
        var yMove = 0;
        var hitBoxes = this.getHitBoxes();
        for (var name in objectsLists.items) {
          if (objectsLists.items.hasOwnProperty(name)) {
            var objects = objectsLists.items[name];
            for (var i = 0, len = objects.length; i < len; ++i) {
              if (objects[i].id != this.id) {
                var otherHitBoxes = objects[i].getHitBoxes();
                for (var k = 0, lenk = hitBoxes.length; k < lenk; ++k) {
                  for (var l = 0, lenl = otherHitBoxes.length; l < lenl; ++l) {
                    var result = gdjs2.Polygon.collisionTest(hitBoxes[k], otherHitBoxes[l], ignoreTouchingEdges);
                    if (result.collision) {
                      xMove += result.move_axis[0];
                      yMove += result.move_axis[1];
                      moved = true;
                    }
                  }
                }
              }
            }
          }
        }
        this.setPosition(this.getX() + xMove, this.getY() + yMove);
        return moved;
      }
    }, {
      key: "getDistanceToObject",
      value: function getDistanceToObject(otherObject) {
        return Math.sqrt(this.getSqDistanceToObject(otherObject));
      }
    }, {
      key: "getSqDistanceToObject",
      value: function getSqDistanceToObject(otherObject) {
        if (otherObject === null) {
          return 0;
        }
        var x = this.getDrawableX() + this.getCenterX() - (otherObject.getDrawableX() + otherObject.getCenterX());
        var y = this.getDrawableY() + this.getCenterY() - (otherObject.getDrawableY() + otherObject.getCenterY());
        return x * x + y * y;
      }
    }, {
      key: "getDistanceToPosition",
      value: function getDistanceToPosition(targetX, targetY) {
        return Math.sqrt(this.getSqDistanceToPosition(targetX, targetY));
      }
    }, {
      key: "getSqDistanceToPosition",
      value: function getSqDistanceToPosition(targetX, targetY) {
        var x = this.getDrawableX() + this.getCenterX() - targetX;
        var y = this.getDrawableY() + this.getCenterY() - targetY;
        return x * x + y * y;
      }
    }, {
      key: "getAngleToObject",
      value: function getAngleToObject(otherObject) {
        if (otherObject === null) {
          return 0;
        }
        var x = this.getDrawableX() + this.getCenterX() - (otherObject.getDrawableX() + otherObject.getCenterX());
        var y = this.getDrawableY() + this.getCenterY() - (otherObject.getDrawableY() + otherObject.getCenterY());
        return gdjs2.toDegrees(Math.atan2(-y, -x));
      }
    }, {
      key: "getXFromAngleAndDistance",
      value: function getXFromAngleAndDistance(angle, distance) {
        return this.getDrawableX() + this.getCenterX() + distance * Math.cos(gdjs2.toRad(angle));
      }
    }, {
      key: "getYFromAngleAndDistance",
      value: function getYFromAngleAndDistance(angle, distance) {
        return this.getDrawableY() + this.getCenterY() + distance * Math.sin(gdjs2.toRad(angle));
      }
    }, {
      key: "getAngleToPosition",
      value: function getAngleToPosition(targetX, targetY) {
        var x = this.getDrawableX() + this.getCenterX() - targetX;
        var y = this.getDrawableY() + this.getCenterY() - targetY;
        return gdjs2.toDegrees(Math.atan2(-y, -x));
      }
    }, {
      key: "putAround",
      value: function putAround(x, y, distance, angleInDegrees) {
        var angleInRadians = gdjs2.toRad(angleInDegrees);
        this.setCenterXInScene(x + Math.cos(angleInRadians) * distance);
        this.setCenterYInScene(y + Math.sin(angleInRadians) * distance);
      }
    }, {
      key: "putAroundObject",
      value: function putAroundObject(obj, distance, angleInDegrees) {
        this.putAround(obj.getDrawableX() + obj.getCenterX(), obj.getDrawableY() + obj.getCenterY(), distance, angleInDegrees);
      }
    }, {
      key: "separateObjectsWithoutForces",
      value: function separateObjectsWithoutForces(objectsLists) {
        var objects = gdjs2.staticArray(RuntimeObject2.prototype.separateObjectsWithoutForces);
        objects.length = 0;
        var lists = gdjs2.staticArray2(RuntimeObject2.prototype.separateObjectsWithoutForces);
        objectsLists.values(lists);
        for (var i = 0, len = lists.length; i < len; ++i) {
          objects.push.apply(objects, lists[i]);
        }
        for (var _i = 0, _len = objects.length; _i < _len; ++_i) {
          if (objects[_i].id != this.id) {
            if (this.getDrawableX() < objects[_i].getDrawableX()) {
              this.setX(objects[_i].getDrawableX() - this.getWidth());
            } else {
              if (this.getDrawableX() + this.getWidth() > objects[_i].getDrawableX() + objects[_i].getWidth()) {
                this.setX(objects[_i].getDrawableX() + objects[_i].getWidth());
              }
            }
            if (this.getDrawableY() < objects[_i].getDrawableY()) {
              this.setY(objects[_i].getDrawableY() - this.getHeight());
            } else {
              if (this.getDrawableY() + this.getHeight() > objects[_i].getDrawableY() + objects[_i].getHeight()) {
                this.setY(objects[_i].getDrawableY() + objects[_i].getHeight());
              }
            }
          }
        }
      }
    }, {
      key: "separateObjectsWithForces",
      value: function separateObjectsWithForces(objectsLists) {
        var objects = gdjs2.staticArray(RuntimeObject2.prototype.separateObjectsWithForces);
        objects.length = 0;
        var lists = gdjs2.staticArray2(RuntimeObject2.prototype.separateObjectsWithForces);
        objectsLists.values(lists);
        for (var i = 0, len = lists.length; i < len; ++i) {
          objects.push.apply(objects, lists[i]);
        }
        for (var _i2 = 0, _len2 = objects.length; _i2 < _len2; ++_i2) {
          if (objects[_i2].id != this.id) {
            if (this.getDrawableX() + this.getCenterX() < objects[_i2].getDrawableX() + objects[_i2].getCenterX()) {
              var av = this.hasNoForces() ? 0 : this.getAverageForce().getX();
              this.addForce(-av - 10, 0, 0);
            } else {
              var _av = this.hasNoForces() ? 0 : this.getAverageForce().getX();
              this.addForce(-_av + 10, 0, 0);
            }
            if (this.getDrawableY() + this.getCenterY() < objects[_i2].getDrawableY() + objects[_i2].getCenterY()) {
              var _av2 = this.hasNoForces() ? 0 : this.getAverageForce().getY();
              this.addForce(0, -_av2 - 10, 0);
            } else {
              var _av3 = this.hasNoForces() ? 0 : this.getAverageForce().getY();
              this.addForce(0, -_av3 + 10, 0);
            }
          }
        }
      }
    }, {
      key: "raycastTest",
      value: function raycastTest(x, y, endX, endY, closest) {
        var objCenterX = this.getCenterX();
        var objCenterY = this.getCenterY();
        var objSqBoundingRadius = computeSqBoundingRadius(this.getWidth(), this.getHeight(), objCenterX, objCenterY);
        var rayCenterWorldX = (x + endX) / 2;
        var rayCenterWorldY = (y + endY) / 2;
        var raySqBoundingRadius = (endX - x) * (endX - x) + (endY - y) * (endY - y);
        var diffX = this.getDrawableX() + objCenterX - rayCenterWorldX;
        var diffY = this.getDrawableY() + objCenterY - rayCenterWorldY;
        var result = gdjs2.Polygon.raycastTestStatics.result;
        result.collision = false;
        if (diffX * diffX + diffY * diffY > objSqBoundingRadius + raySqBoundingRadius + 2 * Math.sqrt(raySqBoundingRadius * objSqBoundingRadius)) {
          return result;
        }
        var testSqDist = closest ? raySqBoundingRadius : 0;
        var hitBoxes = this.getHitBoxes();
        for (var i = 0; i < hitBoxes.length; i++) {
          var res = gdjs2.Polygon.raycastTest(hitBoxes[i], x, y, endX, endY);
          if (res.collision) {
            if (closest && res.closeSqDist < testSqDist) {
              testSqDist = res.closeSqDist;
              result = res;
            } else {
              if (!closest && res.farSqDist > testSqDist && res.farSqDist <= raySqBoundingRadius) {
                testSqDist = res.farSqDist;
                result = res;
              }
            }
          }
        }
        return result;
      }
    }, {
      key: "insideObject",
      value: function insideObject(x, y) {
        if (this.hitBoxesDirty) {
          this.updateHitBoxes();
          this.updateAABB();
          this.hitBoxesDirty = false;
        }
        return this.aabb.min[0] <= x && this.aabb.max[0] >= x && this.aabb.min[1] <= y && this.aabb.max[1] >= y;
      }
    }, {
      key: "cursorOnObject",
      value: function cursorOnObject(runtimeScene) {
        var inputManager = runtimeScene.getGame().getInputManager();
        var layer = runtimeScene.getLayer(this.layer);
        var mousePos = layer.convertCoords(inputManager.getMouseX(), inputManager.getMouseY());
        if (this.insideObject(mousePos[0], mousePos[1])) {
          return true;
        }
        var touchIds = inputManager.getAllTouchIdentifiers();
        for (var i = 0; i < touchIds.length; ++i) {
          var touchPos = layer.convertCoords(inputManager.getTouchX(touchIds[i]), inputManager.getTouchY(touchIds[i]));
          if (this.insideObject(touchPos[0], touchPos[1])) {
            return true;
          }
        }
        return false;
      }
    }, {
      key: "isCollidingWithPoint",
      value: function isCollidingWithPoint(pointX, pointY) {
        var hitBoxes = this.getHitBoxes();
        for (var i = 0; i < this.hitBoxes.length; ++i) {
          if (gdjs2.Polygon.isPointInside(hitBoxes[i], pointX, pointY)) {
            return true;
          }
        }
        return false;
      }
    }], [{
      key: "getVariableNumber",
      value: function getVariableNumber(variable) {
        return variable.getAsNumber();
      }
    }, {
      key: "returnVariable",
      value: function returnVariable(variable) {
        return variable;
      }
    }, {
      key: "getVariableString",
      value: function getVariableString(variable) {
        return variable.getAsString();
      }
    }, {
      key: "getVariableChildCount",
      value: function getVariableChildCount(variable) {
        return variable.getChildrenCount();
      }
    }, {
      key: "setVariableNumber",
      value: function setVariableNumber(variable, newValue) {
        variable.setNumber(newValue);
      }
    }, {
      key: "setVariableString",
      value: function setVariableString(variable, newValue) {
        variable.setString(newValue);
      }
    }, {
      key: "variableChildExists",
      value: function variableChildExists(variable, childName) {
        return variable.hasChild(childName);
      }
    }, {
      key: "variableRemoveChild",
      value: function variableRemoveChild(variable, childName) {
        variable.removeChild(childName);
      }
    }, {
      key: "variableClearChildren",
      value: function variableClearChildren(variable) {
        variable.clearChildren();
      }
    }, {
      key: "collisionTest",
      value: function collisionTest(obj1, obj2, ignoreTouchingEdges) {
        var o1centerX = obj1.getCenterX();
        var o1centerY = obj1.getCenterY();
        var obj1BoundingRadius = Math.sqrt(computeSqBoundingRadius(obj1.getWidth(), obj1.getHeight(), o1centerX, o1centerY));
        var o2centerX = obj2.getCenterX();
        var o2centerY = obj2.getCenterY();
        var obj2BoundingRadius = Math.sqrt(computeSqBoundingRadius(obj2.getWidth(), obj2.getHeight(), o2centerX, o2centerY));
        var diffX = obj1.getDrawableX() + o1centerX - (obj2.getDrawableX() + o2centerX);
        var diffY = obj1.getDrawableY() + o1centerY - (obj2.getDrawableY() + o2centerY);
        if (Math.sqrt(diffX * diffX + diffY * diffY) > obj1BoundingRadius + obj2BoundingRadius) {
          return false;
        }
        var hitBoxes1 = obj1.getHitBoxes();
        var hitBoxes2 = obj2.getHitBoxes();
        for (var k = 0, lenBoxes1 = hitBoxes1.length; k < lenBoxes1; ++k) {
          for (var l = 0, lenBoxes2 = hitBoxes2.length; l < lenBoxes2; ++l) {
            if (gdjs2.Polygon.collisionTest(hitBoxes1[k], hitBoxes2[l], ignoreTouchingEdges).collision) {
              return true;
            }
          }
        }
        return false;
      }
    }, {
      key: "distanceTest",
      value: function distanceTest(obj1, obj2, distance) {
        return obj1.getSqDistanceToObject(obj2) <= distance;
      }
    }, {
      key: "getNameIdentifier",
      value: function getNameIdentifier(name) {
        if (RuntimeObject2._identifiers.containsKey(name)) {
          return RuntimeObject2._identifiers.get(name);
        }
        RuntimeObject2._newId = (RuntimeObject2._newId || 0) + 1;
        var newIdentifier = RuntimeObject2._newId;
        RuntimeObject2._identifiers.put(name, newIdentifier);
        return newIdentifier;
      }
    }]);

    return RuntimeObject2;
  }();
  var RuntimeObject = RuntimeObject2;
  RuntimeObject.supportsReinitialization = false;
  RuntimeObject.setVariableBoolean = function (variable, newValue) {
    variable.setBoolean(newValue);
  };
  RuntimeObject.getVariableBoolean = function (variable, compareWith) {
    return gdjs2.evtTools.common.getVariableBoolean(variable, compareWith);
  };
  RuntimeObject.toggleVariableBoolean = function (variable) {
    gdjs2.evtTools.common.toggleVariableBoolean(variable);
  };
  RuntimeObject.variablePushCopy = function (array, variable) {
    array.pushVariableCopy(variable);
  };
  RuntimeObject.valuePush = function (array, value) {
    array.pushValue(value);
  };
  RuntimeObject.variableRemoveAt = function (array, index) {
    array.removeAtIndex(index);
  };
  RuntimeObject._identifiers = new Hashtable();
  RuntimeObject._newId = 0;
  RuntimeObject.forcesGarbage = [];
  gdjs2.RuntimeObject = RuntimeObject;
  gdjs2.registerObject("", gdjs2.RuntimeObject);
})(gdjs || (gdjs = {}));
//# sourceMappingURL=runtimeobject.js.map