"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var gdjs;
(function (gdjs2) {
  var TopDownMovementRuntimeBehavior = function (_gdjs2$RuntimeBehavio) {
    _inherits(TopDownMovementRuntimeBehavior, _gdjs2$RuntimeBehavio);

    function TopDownMovementRuntimeBehavior(runtimeScene, behaviorData, owner) {
      _classCallCheck(this, TopDownMovementRuntimeBehavior);

      var _this = _possibleConstructorReturn(this, (TopDownMovementRuntimeBehavior.__proto__ || Object.getPrototypeOf(TopDownMovementRuntimeBehavior)).call(this, runtimeScene, behaviorData, owner));

      _this._angle = 0;
      _this._x = 0;
      _this._y = 0;
      _this._xVelocity = 0;
      _this._yVelocity = 0;
      _this._angularSpeed = 0;
      _this._leftKey = false;
      _this._rightKey = false;
      _this._upKey = false;
      _this._downKey = false;
      _this._leftKeyPressedDuration = -1;
      _this._rightKeyPressedDuration = -1;
      _this._upKeyPressedDuration = -1;
      _this._downKeyPressedDuration = -1;
      _this._stickAngle = 0;
      _this._stickForce = 0;
      _this._temporaryPointForTransformations = [0, 0];
      _this._allowDiagonals = behaviorData.allowDiagonals;
      _this._acceleration = behaviorData.acceleration;
      _this._deceleration = behaviorData.deceleration;
      _this._maxSpeed = behaviorData.maxSpeed;
      _this._angularMaxSpeed = behaviorData.angularMaxSpeed;
      _this._rotateObject = behaviorData.rotateObject;
      _this._angleOffset = behaviorData.angleOffset;
      _this._ignoreDefaultControls = behaviorData.ignoreDefaultControls;
      _this.setViewpoint(behaviorData.viewpoint, behaviorData.customIsometryAngle);
      _this._movementAngleOffset = behaviorData.movementAngleOffset || 0;
      return _this;
    }

    _createClass(TopDownMovementRuntimeBehavior, [{
      key: "updateFromBehaviorData",
      value: function updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
        if (oldBehaviorData.allowDiagonals !== newBehaviorData.allowDiagonals) {
          this._allowDiagonals = newBehaviorData.allowDiagonals;
        }
        if (oldBehaviorData.acceleration !== newBehaviorData.acceleration) {
          this._acceleration = newBehaviorData.acceleration;
        }
        if (oldBehaviorData.deceleration !== newBehaviorData.deceleration) {
          this._deceleration = newBehaviorData.deceleration;
        }
        if (oldBehaviorData.maxSpeed !== newBehaviorData.maxSpeed) {
          this._maxSpeed = newBehaviorData.maxSpeed;
        }
        if (oldBehaviorData.angularMaxSpeed !== newBehaviorData.angularMaxSpeed) {
          this._angularMaxSpeed = newBehaviorData.angularMaxSpeed;
        }
        if (oldBehaviorData.rotateObject !== newBehaviorData.rotateObject) {
          this._rotateObject = newBehaviorData.rotateObject;
        }
        if (oldBehaviorData.angleOffset !== newBehaviorData.angleOffset) {
          this._angleOffset = newBehaviorData.angleOffset;
        }
        if (oldBehaviorData.ignoreDefaultControls !== newBehaviorData.ignoreDefaultControls) {
          this._ignoreDefaultControls = newBehaviorData.ignoreDefaultControls;
        }
        if (oldBehaviorData.platformType !== newBehaviorData.platformType || oldBehaviorData.customIsometryAngle !== newBehaviorData.customIsometryAngle) {
          this.setViewpoint(newBehaviorData.platformType, newBehaviorData.customIsometryAngle);
        }
        if (oldBehaviorData.movementAngleOffset !== newBehaviorData.movementAngleOffset) {
          this._movementAngleOffset = newBehaviorData.movementAngleOffset;
        }
        return true;
      }
    }, {
      key: "setViewpoint",
      value: function setViewpoint(viewpoint, customIsometryAngle) {
        if (viewpoint === "PixelIsometry") {
          this._basisTransformation = new gdjs2.TopDownMovementRuntimeBehavior.IsometryTransformation(Math.atan(0.5));
        } else if (viewpoint === "TrueIsometry") {
          this._basisTransformation = new gdjs2.TopDownMovementRuntimeBehavior.IsometryTransformation(Math.PI / 6);
        } else if (viewpoint === "CustomIsometry") {
          this._basisTransformation = new gdjs2.TopDownMovementRuntimeBehavior.IsometryTransformation(customIsometryAngle * Math.PI / 180);
        } else {
          this._basisTransformation = null;
        }
      }
    }, {
      key: "setAcceleration",
      value: function setAcceleration(acceleration) {
        this._acceleration = acceleration;
      }
    }, {
      key: "getAcceleration",
      value: function getAcceleration() {
        return this._acceleration;
      }
    }, {
      key: "setDeceleration",
      value: function setDeceleration(deceleration) {
        this._deceleration = deceleration;
      }
    }, {
      key: "getDeceleration",
      value: function getDeceleration() {
        return this._deceleration;
      }
    }, {
      key: "setMaxSpeed",
      value: function setMaxSpeed(maxSpeed) {
        this._maxSpeed = maxSpeed;
      }
    }, {
      key: "getMaxSpeed",
      value: function getMaxSpeed() {
        return this._maxSpeed;
      }
    }, {
      key: "setAngularMaxSpeed",
      value: function setAngularMaxSpeed(angularMaxSpeed) {
        this._angularMaxSpeed = angularMaxSpeed;
      }
    }, {
      key: "getAngularMaxSpeed",
      value: function getAngularMaxSpeed() {
        return this._angularMaxSpeed;
      }
    }, {
      key: "setAngleOffset",
      value: function setAngleOffset(angleOffset) {
        this._angleOffset = angleOffset;
      }
    }, {
      key: "getAngleOffset",
      value: function getAngleOffset() {
        return this._angleOffset;
      }
    }, {
      key: "allowDiagonals",
      value: function allowDiagonals(allow) {
        this._allowDiagonals = allow;
      }
    }, {
      key: "diagonalsAllowed",
      value: function diagonalsAllowed() {
        return this._allowDiagonals;
      }
    }, {
      key: "setRotateObject",
      value: function setRotateObject(allow) {
        this._rotateObject = allow;
      }
    }, {
      key: "isObjectRotated",
      value: function isObjectRotated() {
        return this._rotateObject;
      }
    }, {
      key: "isMoving",
      value: function isMoving() {
        return this._xVelocity !== 0 || this._yVelocity !== 0;
      }
    }, {
      key: "getSpeed",
      value: function getSpeed() {
        return Math.sqrt(this._xVelocity * this._xVelocity + this._yVelocity * this._yVelocity);
      }
    }, {
      key: "getXVelocity",
      value: function getXVelocity() {
        return this._xVelocity;
      }
    }, {
      key: "getYVelocity",
      value: function getYVelocity() {
        return this._yVelocity;
      }
    }, {
      key: "getAngle",
      value: function getAngle() {
        return this._angle;
      }
    }, {
      key: "setMovementAngleOffset",
      value: function setMovementAngleOffset(movementAngleOffset) {
        this._movementAngleOffset = movementAngleOffset;
      }
    }, {
      key: "getMovementAngleOffset",
      value: function getMovementAngleOffset() {
        return this._movementAngleOffset;
      }
    }, {
      key: "doStepPreEvents",
      value: function doStepPreEvents(runtimeScene) {
        var LEFTKEY = 37;
        var UPKEY = 38;
        var RIGHTKEY = 39;
        var DOWNKEY = 40;
        this._leftKey |= !this._ignoreDefaultControls && runtimeScene.getGame().getInputManager().isKeyPressed(LEFTKEY);
        this._rightKey |= !this._ignoreDefaultControls && runtimeScene.getGame().getInputManager().isKeyPressed(RIGHTKEY);
        this._downKey |= !this._ignoreDefaultControls && runtimeScene.getGame().getInputManager().isKeyPressed(DOWNKEY);
        this._upKey |= !this._ignoreDefaultControls && runtimeScene.getGame().getInputManager().isKeyPressed(UPKEY);
        var direction = -1;
        if (!this._allowDiagonals) {
          var elapsedTime = this.owner.getElapsedTime(runtimeScene);
          if (!this._leftKey) {
            this._leftKeyPressedDuration = 0;
          } else {
            this._leftKeyPressedDuration += elapsedTime;
          }
          if (!this._rightKey) {
            this._rightKeyPressedDuration = 0;
          } else {
            this._rightKeyPressedDuration += elapsedTime;
          }
          if (!this._downKey) {
            this._downKeyPressedDuration = 0;
          } else {
            this._downKeyPressedDuration += elapsedTime;
          }
          if (!this._upKey) {
            this._upKeyPressedDuration = 0;
          } else {
            this._upKeyPressedDuration += elapsedTime;
          }
          if (this._upKey && !this._downKey) {
            direction = 6;
          } else if (!this._upKey && this._downKey) {
            direction = 2;
          }
          if (this._leftKey && !this._rightKey && (this._upKey === this._downKey || this._upKey && this._leftKeyPressedDuration < this._upKeyPressedDuration || this._downKey && this._leftKeyPressedDuration < this._downKeyPressedDuration)) {
            direction = 4;
          } else if (this._rightKey && !this._leftKey && (this._upKey === this._downKey || this._upKey && this._rightKeyPressedDuration < this._upKeyPressedDuration || this._downKey && this._rightKeyPressedDuration < this._downKeyPressedDuration)) {
            direction = 0;
          }
        } else {
          if (this._upKey && !this._downKey) {
            if (this._leftKey && !this._rightKey) {
              direction = 5;
            } else if (!this._leftKey && this._rightKey) {
              direction = 7;
            } else {
              direction = 6;
            }
          } else if (!this._upKey && this._downKey) {
            if (this._leftKey && !this._rightKey) {
              direction = 3;
            } else if (!this._leftKey && this._rightKey) {
              direction = 1;
            } else {
              direction = 2;
            }
          } else {
            if (this._leftKey && !this._rightKey) {
              direction = 4;
            } else if (!this._leftKey && this._rightKey) {
              direction = 0;
            }
          }
        }
        var object = this.owner;
        var timeDelta = this.owner.getElapsedTime(runtimeScene) / 1e3;
        var directionInRad = 0;
        var directionInDeg = 0;
        if (direction !== -1) {
          directionInRad = (direction + this._movementAngleOffset / 45) * Math.PI / 4;
          directionInDeg = direction * 45 + this._movementAngleOffset;
          this._xVelocity += this._acceleration * timeDelta * Math.cos(directionInRad);
          this._yVelocity += this._acceleration * timeDelta * Math.sin(directionInRad);
        } else if (this._stickForce !== 0) {
          if (!this._allowDiagonals) {
            this._stickAngle = 90 * Math.floor((this._stickAngle + 45) / 90);
          }
          directionInDeg = this._stickAngle + this._movementAngleOffset;
          directionInRad = directionInDeg * Math.PI / 180;
          var norm = this._acceleration * timeDelta * this._stickForce;
          this._xVelocity += norm * Math.cos(directionInRad);
          this._yVelocity += norm * Math.sin(directionInRad);
          this._stickForce = 0;
        } else {
          directionInRad = Math.atan2(this._yVelocity, this._xVelocity);
          directionInDeg = Math.atan2(this._yVelocity, this._xVelocity) * 180 / Math.PI;
          var xVelocityWasPositive = this._xVelocity >= 0;
          var yVelocityWasPositive = this._yVelocity >= 0;
          this._xVelocity -= this._deceleration * timeDelta * Math.cos(directionInRad);
          this._yVelocity -= this._deceleration * timeDelta * Math.sin(directionInRad);
          if (this._xVelocity > 0 ^ xVelocityWasPositive) {
            this._xVelocity = 0;
          }
          if (this._yVelocity > 0 ^ yVelocityWasPositive) {
            this._yVelocity = 0;
          }
        }
        var speed = Math.sqrt(this._xVelocity * this._xVelocity + this._yVelocity * this._yVelocity);
        if (speed > this._maxSpeed) {
          this._xVelocity = this._maxSpeed * Math.cos(directionInRad);
          this._yVelocity = this._maxSpeed * Math.sin(directionInRad);
        }
        this._angularSpeed = this._angularMaxSpeed;
        if (this._basisTransformation === null) {
          object.setX(object.getX() + this._xVelocity * timeDelta);
          object.setY(object.getY() + this._yVelocity * timeDelta);
        } else {
          var point = this._temporaryPointForTransformations;
          point[0] = this._xVelocity * timeDelta;
          point[1] = this._yVelocity * timeDelta;
          this._basisTransformation.toScreen(point, point);
          object.setX(object.getX() + point[0]);
          object.setY(object.getY() + point[1]);
        }
        if (this._xVelocity !== 0 || this._yVelocity !== 0) {
          this._angle = directionInDeg;
          if (this._rotateObject) {
            object.rotateTowardAngle(directionInDeg + this._angleOffset, this._angularSpeed, runtimeScene);
          }
        }
        this._leftKey = false;
        this._rightKey = false;
        this._upKey = false;
        this._downKey = false;
      }
    }, {
      key: "simulateControl",
      value: function simulateControl(input) {
        if (input === "Left") {
          this._leftKey = true;
        } else if (input === "Right") {
          this._rightKey = true;
        } else if (input === "Up") {
          this._upKey = true;
        } else if (input === "Down") {
          this._downKey = true;
        }
      }
    }, {
      key: "ignoreDefaultControls",
      value: function ignoreDefaultControls(ignore) {
        this._ignoreDefaultControls = ignore;
      }
    }, {
      key: "simulateLeftKey",
      value: function simulateLeftKey() {
        this._leftKey = true;
      }
    }, {
      key: "simulateRightKey",
      value: function simulateRightKey() {
        this._rightKey = true;
      }
    }, {
      key: "simulateUpKey",
      value: function simulateUpKey() {
        this._upKey = true;
      }
    }, {
      key: "simulateDownKey",
      value: function simulateDownKey() {
        this._downKey = true;
      }
    }, {
      key: "simulateStick",
      value: function simulateStick(stickAngle, stickForce) {
        this._stickAngle = stickAngle % 360;
        this._stickForce = Math.max(0, Math.min(1, stickForce));
      }
    }]);

    return TopDownMovementRuntimeBehavior;
  }(gdjs2.RuntimeBehavior);

  gdjs2.TopDownMovementRuntimeBehavior = TopDownMovementRuntimeBehavior;
  (function (TopDownMovementRuntimeBehavior2) {
    var IsometryTransformation = function () {
      function IsometryTransformation(angle) {
        _classCallCheck(this, IsometryTransformation);

        if (angle <= 0 || angle >= Math.PI / 4) throw new RangeError("An isometry angle must be in ]0; pi/4] but was: " + angle);
        var alpha = Math.asin(Math.tan(angle));
        var sinA = Math.sin(alpha);
        var cosB = Math.cos(Math.PI / 4);
        var sinB = cosB;
        this._screen = [[cosB, -sinB], [sinA * sinB, sinA * cosB]];
      }

      _createClass(IsometryTransformation, [{
        key: "toScreen",
        value: function toScreen(worldPoint, screenPoint) {
          var x = this._screen[0][0] * worldPoint[0] + this._screen[0][1] * worldPoint[1];
          var y = this._screen[1][0] * worldPoint[0] + this._screen[1][1] * worldPoint[1];
          screenPoint[0] = x;
          screenPoint[1] = y;
        }
      }]);

      return IsometryTransformation;
    }();

    TopDownMovementRuntimeBehavior2.IsometryTransformation = IsometryTransformation;
  })(TopDownMovementRuntimeBehavior = gdjs2.TopDownMovementRuntimeBehavior || (gdjs2.TopDownMovementRuntimeBehavior = {}));
  gdjs2.registerBehavior("TopDownMovementBehavior::TopDownMovementBehavior", gdjs2.TopDownMovementRuntimeBehavior);
})(gdjs || (gdjs = {}));
//# sourceMappingURL=topdownmovementruntimebehavior.js.map