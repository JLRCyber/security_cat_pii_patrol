"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gdjs;
(function (gdjs2) {
  var SpriteAnimationFrame = function () {
    function SpriteAnimationFrame(imageManager, frameData) {
      _classCallCheck(this, SpriteAnimationFrame);

      this.center = { x: 0, y: 0 };
      this.origin = { x: 0, y: 0 };
      this.hasCustomHitBoxes = false;
      this.customHitBoxes = [];
      this.image = frameData ? frameData.image : "";
      this.texture = gdjs2.SpriteRuntimeObjectRenderer.getAnimationFrame(imageManager, this.image);
      this.points = new Hashtable();
      this.reinitialize(imageManager, frameData);
    }

    _createClass(SpriteAnimationFrame, [{
      key: "reinitialize",
      value: function reinitialize(imageManager, frameData) {
        this.points.clear();
        for (var i = 0, len = frameData.points.length; i < len; ++i) {
          var ptData = frameData.points[i];
          var point = { x: ptData.x, y: ptData.y };
          this.points.put(ptData.name, point);
        }
        var origin = frameData.originPoint;
        this.origin.x = origin.x;
        this.origin.y = origin.y;
        var center = frameData.centerPoint;
        if (center.automatic !== true) {
          this.center.x = center.x;
          this.center.y = center.y;
        } else {
          this.center.x = gdjs2.SpriteRuntimeObjectRenderer.getAnimationFrameWidth(this.texture) / 2;
          this.center.y = gdjs2.SpriteRuntimeObjectRenderer.getAnimationFrameHeight(this.texture) / 2;
        }
        if (frameData.hasCustomCollisionMask) {
          this.hasCustomHitBoxes = true;
          var _i = 0;
          for (var _len = frameData.customCollisionMask.length; _i < _len; ++_i) {
            var polygonData = frameData.customCollisionMask[_i];
            if (_i >= this.customHitBoxes.length) {
              this.customHitBoxes.push(new gdjs2.Polygon());
            }
            var j = 0;
            for (var len2 = polygonData.length; j < len2; ++j) {
              var pointData = polygonData[j];
              if (j >= this.customHitBoxes[_i].vertices.length) {
                this.customHitBoxes[_i].vertices.push([0, 0]);
              }
              this.customHitBoxes[_i].vertices[j][0] = pointData.x;
              this.customHitBoxes[_i].vertices[j][1] = pointData.y;
            }
            this.customHitBoxes[_i].vertices.length = j;
          }
          this.customHitBoxes.length = _i;
        } else {
          this.customHitBoxes.length = 0;
        }
      }
    }, {
      key: "getPoint",
      value: function getPoint(name) {
        if (name === "Centre" || name === "Center") {
          return this.center;
        } else {
          if (name === "Origin") {
            return this.origin;
          }
        }
        return this.points.containsKey(name) ? this.points.get(name) : this.origin;
      }
    }]);

    return SpriteAnimationFrame;
  }();

  gdjs2.SpriteAnimationFrame = SpriteAnimationFrame;

  var SpriteAnimationDirection = function () {
    function SpriteAnimationDirection(imageManager, directionData) {
      _classCallCheck(this, SpriteAnimationDirection);

      this.frames = [];
      this.timeBetweenFrames = directionData ? directionData.timeBetweenFrames : 1;
      this.loop = !!directionData.looping;
      this.reinitialize(imageManager, directionData);
    }

    _createClass(SpriteAnimationDirection, [{
      key: "reinitialize",
      value: function reinitialize(imageManager, directionData) {
        this.timeBetweenFrames = directionData ? directionData.timeBetweenFrames : 1;
        this.loop = !!directionData.looping;
        var i = 0;
        for (var len = directionData.sprites.length; i < len; ++i) {
          var frameData = directionData.sprites[i];
          if (i < this.frames.length) {
            this.frames[i].reinitialize(imageManager, frameData);
          } else {
            this.frames.push(new gdjs2.SpriteAnimationFrame(imageManager, frameData));
          }
        }
        this.frames.length = i;
      }
    }]);

    return SpriteAnimationDirection;
  }();

  gdjs2.SpriteAnimationDirection = SpriteAnimationDirection;

  var SpriteAnimation = function () {
    function SpriteAnimation(imageManager, animData) {
      _classCallCheck(this, SpriteAnimation);

      this.directions = [];
      this.hasMultipleDirections = !!animData.useMultipleDirections;
      this.name = animData.name || "";
      this.reinitialize(imageManager, animData);
    }

    _createClass(SpriteAnimation, [{
      key: "reinitialize",
      value: function reinitialize(imageManager, animData) {
        this.hasMultipleDirections = !!animData.useMultipleDirections;
        this.name = animData.name || "";
        var i = 0;
        for (var len = animData.directions.length; i < len; ++i) {
          var directionData = animData.directions[i];
          if (i < this.directions.length) {
            this.directions[i].reinitialize(imageManager, directionData);
          } else {
            this.directions.push(new gdjs2.SpriteAnimationDirection(imageManager, directionData));
          }
        }
        this.directions.length = i;
      }
    }]);

    return SpriteAnimation;
  }();

  gdjs2.SpriteAnimation = SpriteAnimation;

  var SpriteRuntimeObject = function (_gdjs2$RuntimeObject) {
    _inherits(SpriteRuntimeObject, _gdjs2$RuntimeObject);

    function SpriteRuntimeObject(runtimeScene, spriteObjectData) {
      _classCallCheck(this, SpriteRuntimeObject);

      var _this = _possibleConstructorReturn(this, (SpriteRuntimeObject.__proto__ || Object.getPrototypeOf(SpriteRuntimeObject)).call(this, runtimeScene, spriteObjectData));

      _this._currentAnimation = 0;
      _this._currentDirection = 0;
      _this._currentFrame = 0;
      _this._frameElapsedTime = 0;
      _this._animationSpeedScale = 1;
      _this._animationPaused = false;
      _this._scaleX = 1;
      _this._scaleY = 1;
      _this._blendMode = 0;
      _this._flippedX = false;
      _this._flippedY = false;
      _this.opacity = 255;
      _this._animations = [];
      _this._animationFrame = null;
      _this._updateIfNotVisible = !!spriteObjectData.updateIfNotVisible;
      for (var i = 0, len = spriteObjectData.animations.length; i < len; ++i) {
        _this._animations.push(new gdjs2.SpriteAnimation(runtimeScene.getGame().getImageManager(), spriteObjectData.animations[i]));
      }
      _this._renderer = new gdjs2.SpriteRuntimeObjectRenderer(_this, runtimeScene);
      _this._updateAnimationFrame();
      _this.onCreated();
      return _this;
    }

    _createClass(SpriteRuntimeObject, [{
      key: "reinitialize",
      value: function reinitialize(spriteObjectData) {
        _get(SpriteRuntimeObject.prototype.__proto__ || Object.getPrototypeOf(SpriteRuntimeObject.prototype), "reinitialize", this).call(this, spriteObjectData);
        var runtimeScene = this._runtimeScene;
        this._currentAnimation = 0;
        this._currentDirection = 0;
        this._currentFrame = 0;
        this._frameElapsedTime = 0;
        this._animationSpeedScale = 1;
        this._animationPaused = false;
        this._scaleX = 1;
        this._scaleY = 1;
        this._blendMode = 0;
        this._flippedX = false;
        this._flippedY = false;
        this.opacity = 255;
        this._updateIfNotVisible = !!spriteObjectData.updateIfNotVisible;
        var i = 0;
        for (var len = spriteObjectData.animations.length; i < len; ++i) {
          var animData = spriteObjectData.animations[i];
          if (i < this._animations.length) {
            this._animations[i].reinitialize(runtimeScene.getGame().getImageManager(), animData);
          } else {
            this._animations.push(new gdjs2.SpriteAnimation(runtimeScene.getGame().getImageManager(), animData));
          }
        }
        this._animations.length = i;
        this._animationFrame = null;
        this._renderer.reinitialize(this, runtimeScene);
        this._updateAnimationFrame();
        this.onCreated();
      }
    }, {
      key: "updateFromObjectData",
      value: function updateFromObjectData(oldObjectData, newObjectData) {
        var runtimeScene = this._runtimeScene;
        var i = 0;
        for (var len = newObjectData.animations.length; i < len; ++i) {
          var animData = newObjectData.animations[i];
          if (i < this._animations.length) {
            this._animations[i].reinitialize(runtimeScene.getGame().getImageManager(), animData);
          } else {
            this._animations.push(new gdjs2.SpriteAnimation(runtimeScene.getGame().getImageManager(), animData));
          }
        }
        this._animations.length = i;
        this._updateAnimationFrame();
        if (!this._animationFrame) {
          this.setAnimation(0);
        }
        this.hitBoxesDirty = true;
        return true;
      }
    }, {
      key: "extraInitializationFromInitialInstance",
      value: function extraInitializationFromInitialInstance(initialInstanceData) {
        if (initialInstanceData.numberProperties) {
          for (var i = 0, len = initialInstanceData.numberProperties.length; i < len; ++i) {
            var extraData = initialInstanceData.numberProperties[i];
            if (extraData.name === "animation") {
              this.setAnimation(extraData.value);
            }
          }
        }
        if (initialInstanceData.customSize) {
          this.setWidth(initialInstanceData.width);
          this.setHeight(initialInstanceData.height);
        }
      }
    }, {
      key: "update",
      value: function update(runtimeScene) {
        if (!this._updateIfNotVisible && !this._renderer.getRendererObject().visible) {
          return;
        }
        if (this._currentAnimation >= this._animations.length || this._currentDirection >= this._animations[this._currentAnimation].directions.length) {
          return;
        }
        var direction = this._animations[this._currentAnimation].directions[this._currentDirection];
        var oldFrame = this._currentFrame;
        if (!direction.loop && this._currentFrame >= direction.frames.length) {} else {
          var elapsedTime = this.getElapsedTime(runtimeScene) / 1e3;
          this._frameElapsedTime += this._animationPaused ? 0 : elapsedTime * this._animationSpeedScale;
          if (this._frameElapsedTime > direction.timeBetweenFrames) {
            var count = Math.floor(this._frameElapsedTime / direction.timeBetweenFrames);
            this._currentFrame += count;
            this._frameElapsedTime = this._frameElapsedTime - count * direction.timeBetweenFrames;
            if (this._frameElapsedTime < 0) {
              this._frameElapsedTime = 0;
            }
          }
          if (this._currentFrame >= direction.frames.length) {
            this._currentFrame = direction.loop ? this._currentFrame % direction.frames.length : direction.frames.length - 1;
          }
          if (this._currentFrame < 0) {
            this._currentFrame = 0;
          }
        }
        if (oldFrame !== this._currentFrame || this._animationFrameDirty) {
          this._updateAnimationFrame();
        }
        if (oldFrame !== this._currentFrame) {
          this.hitBoxesDirty = true;
        }
        this._renderer.ensureUpToDate();
      }
    }, {
      key: "updatePreRender",
      value: function updatePreRender(runtimeScene) {
        if (this._animationFrameDirty) {
          this._updateAnimationFrame();
        }
        this._renderer.ensureUpToDate();
      }
    }, {
      key: "_updateAnimationFrame",
      value: function _updateAnimationFrame() {
        this._animationFrameDirty = false;
        if (this._currentAnimation < this._animations.length && this._currentDirection < this._animations[this._currentAnimation].directions.length) {
          var direction = this._animations[this._currentAnimation].directions[this._currentDirection];
          if (this._currentFrame < direction.frames.length) {
            this._animationFrame = direction.frames[this._currentFrame];
            if (this._animationFrame !== null) {
              this._renderer.updateFrame(this._animationFrame);
            }
            return;
          }
        }
        this._animationFrame = null;
      }
    }, {
      key: "getRendererObject",
      value: function getRendererObject() {
        return this._renderer.getRendererObject();
      }
    }, {
      key: "updateHitBoxes",
      value: function updateHitBoxes() {
        if (this._animationFrameDirty) {
          this._updateAnimationFrame();
        }
        if (this._animationFrame === null) {
          return;
        }
        if (!this._animationFrame.hasCustomHitBoxes) {
          return _get(SpriteRuntimeObject.prototype.__proto__ || Object.getPrototypeOf(SpriteRuntimeObject.prototype), "updateHitBoxes", this).call(this);
        }
        for (var i = 0; i < this._animationFrame.customHitBoxes.length; ++i) {
          if (i >= this.hitBoxes.length) {
            this.hitBoxes.push(new gdjs2.Polygon());
          }
          for (var j = 0; j < this._animationFrame.customHitBoxes[i].vertices.length; ++j) {
            if (j >= this.hitBoxes[i].vertices.length) {
              this.hitBoxes[i].vertices.push([0, 0]);
            }
            this._transformToGlobal(this._animationFrame.customHitBoxes[i].vertices[j][0], this._animationFrame.customHitBoxes[i].vertices[j][1], this.hitBoxes[i].vertices[j]);
          }
          this.hitBoxes[i].vertices.length = this._animationFrame.customHitBoxes[i].vertices.length;
        }
        this.hitBoxes.length = this._animationFrame.customHitBoxes.length;
      }
    }, {
      key: "setAnimation",
      value: function setAnimation(newAnimation) {
        newAnimation = newAnimation | 0;
        if (newAnimation < this._animations.length && this._currentAnimation !== newAnimation && newAnimation >= 0) {
          this._currentAnimation = newAnimation;
          this._currentFrame = 0;
          this._frameElapsedTime = 0;
          this._renderer.update();
          this._animationFrameDirty = true;
          this.hitBoxesDirty = true;
        }
      }
    }, {
      key: "setAnimationName",
      value: function setAnimationName(newAnimationName) {
        if (!newAnimationName) {
          return;
        }
        for (var i = 0; i < this._animations.length; ++i) {
          if (this._animations[i].name === newAnimationName) {
            return this.setAnimation(i);
          }
        }
      }
    }, {
      key: "getAnimation",
      value: function getAnimation() {
        return this._currentAnimation;
      }
    }, {
      key: "getAnimationName",
      value: function getAnimationName() {
        if (this._currentAnimation >= this._animations.length) {
          return "";
        }
        return this._animations[this._currentAnimation].name;
      }
    }, {
      key: "isCurrentAnimationName",
      value: function isCurrentAnimationName(name) {
        return this.getAnimationName() === name;
      }
    }, {
      key: "setDirectionOrAngle",
      value: function setDirectionOrAngle(newValue) {
        if (this._currentAnimation >= this._animations.length) {
          return;
        }
        var anim = this._animations[this._currentAnimation];
        if (!anim.hasMultipleDirections) {
          if (this.angle === newValue) {
            return;
          }
          this.angle = newValue;
          this.hitBoxesDirty = true;
          this._renderer.updateAngle();
        } else {
          newValue = newValue | 0;
          if (newValue === this._currentDirection || newValue >= anim.directions.length || anim.directions[newValue].frames.length === 0) {
            return;
          }
          this._currentDirection = newValue;
          this._currentFrame = 0;
          this._frameElapsedTime = 0;
          this.angle = 0;
          this._renderer.update();
          this._animationFrameDirty = true;
          this.hitBoxesDirty = true;
        }
      }
    }, {
      key: "getDirectionOrAngle",
      value: function getDirectionOrAngle() {
        if (this._currentAnimation >= this._animations.length) {
          return 0;
        }
        if (!this._animations[this._currentAnimation].hasMultipleDirections) {
          return this.angle;
        } else {
          return this._currentDirection;
        }
      }
    }, {
      key: "setAnimationFrame",
      value: function setAnimationFrame(newFrame) {
        if (this._currentAnimation >= this._animations.length || this._currentDirection >= this._animations[this._currentAnimation].directions.length) {
          return;
        }
        var direction = this._animations[this._currentAnimation].directions[this._currentDirection];
        if (newFrame >= 0 && newFrame < direction.frames.length && newFrame !== this._currentFrame) {
          this._currentFrame = newFrame;
          this._animationFrameDirty = true;
          this.hitBoxesDirty = true;
        }
      }
    }, {
      key: "getAnimationFrame",
      value: function getAnimationFrame() {
        return this._currentFrame;
      }
    }, {
      key: "hasAnimationEnded",
      value: function hasAnimationEnded() {
        if (this._currentAnimation >= this._animations.length || this._currentDirection >= this._animations[this._currentAnimation].directions.length) {
          return true;
        }
        var direction = this._animations[this._currentAnimation].directions[this._currentDirection];
        if (direction.loop) {
          return false;
        }
        return this._currentFrame === direction.frames.length - 1;
      }
    }, {
      key: "animationPaused",
      value: function animationPaused() {
        return this._animationPaused;
      }
    }, {
      key: "pauseAnimation",
      value: function pauseAnimation() {
        this._animationPaused = true;
      }
    }, {
      key: "playAnimation",
      value: function playAnimation() {
        this._animationPaused = false;
      }
    }, {
      key: "getAnimationSpeedScale",
      value: function getAnimationSpeedScale() {
        return this._animationSpeedScale;
      }
    }, {
      key: "setAnimationSpeedScale",
      value: function setAnimationSpeedScale(ratio) {
        this._animationSpeedScale = ratio;
      }
    }, {
      key: "getPointX",
      value: function getPointX(name) {
        if (this._animationFrameDirty) {
          this._updateAnimationFrame();
        }
        if (name.length === 0 || this._animationFrame === null) {
          return this.getX();
        }
        var pt = this._animationFrame.getPoint(name);
        var pos = gdjs2.staticArray(SpriteRuntimeObject.prototype.getPointX);
        this._transformToGlobal(pt.x, pt.y, pos);
        return pos[0];
      }
    }, {
      key: "getPointY",
      value: function getPointY(name) {
        if (this._animationFrameDirty) {
          this._updateAnimationFrame();
        }
        if (name.length === 0 || this._animationFrame === null) {
          return this.getY();
        }
        var pt = this._animationFrame.getPoint(name);
        var pos = gdjs2.staticArray(SpriteRuntimeObject.prototype.getPointY);
        this._transformToGlobal(pt.x, pt.y, pos);
        return pos[1];
      }
    }, {
      key: "getPointPosition",
      value: function getPointPosition(name) {
        if (this._animationFrameDirty) {
          this._updateAnimationFrame();
        }
        if (name.length === 0 || this._animationFrame === null) {
          return [this.getX(), this.getY()];
        }
        var pt = this._animationFrame.getPoint(name);
        var pos = gdjs2.staticArray(SpriteRuntimeObject.prototype.getPointX);
        this._transformToGlobal(pt.x, pt.y, pos);
        return [pos[0], pos[1]];
      }
    }, {
      key: "_transformToGlobal",
      value: function _transformToGlobal(x, y, result) {
        var animationFrame = this._animationFrame;
        var cx = animationFrame.center.x;
        var cy = animationFrame.center.y;
        if (this._flippedX) {
          x = x + (cx - x) * 2;
        }
        if (this._flippedY) {
          y = y + (cy - y) * 2;
        }
        var absScaleX = Math.abs(this._scaleX);
        var absScaleY = Math.abs(this._scaleY);
        x *= absScaleX;
        y *= absScaleY;
        cx *= absScaleX;
        cy *= absScaleY;
        var oldX = x;
        var angleInRadians = this.angle / 180 * Math.PI;
        var cosValue = Math.cos(angleInRadians);
        var sinValue = Math.sin(angleInRadians);
        var xToCenterXDelta = x - cx;
        var yToCenterYDelta = y - cy;
        x = cx + cosValue * xToCenterXDelta - sinValue * yToCenterYDelta;
        y = cy + sinValue * xToCenterXDelta + cosValue * yToCenterYDelta;
        result.length = 2;
        result[0] = x + (this.x - animationFrame.origin.x * absScaleX);
        result[1] = y + (this.y - animationFrame.origin.y * absScaleY);
      }
    }, {
      key: "getDrawableX",
      value: function getDrawableX() {
        if (this._animationFrame === null) {
          return this.x;
        }
        var absScaleX = Math.abs(this._scaleX);
        if (!this._flippedX) {
          return this.x - this._animationFrame.origin.x * absScaleX;
        } else {
          return this.x + (-this._animationFrame.origin.x - this._renderer.getUnscaledWidth() + 2 * this._animationFrame.center.x) * absScaleX;
        }
      }
    }, {
      key: "getDrawableY",
      value: function getDrawableY() {
        if (this._animationFrame === null) {
          return this.y;
        }
        var absScaleY = Math.abs(this._scaleY);
        if (!this._flippedY) {
          return this.y - this._animationFrame.origin.y * absScaleY;
        } else {
          return this.y + (-this._animationFrame.origin.y - this._renderer.getUnscaledHeight() + 2 * this._animationFrame.center.y) * absScaleY;
        }
      }
    }, {
      key: "getCenterX",
      value: function getCenterX() {
        if (this._animationFrameDirty) {
          this._updateAnimationFrame();
        }
        if (this._animationFrame === null) {
          return 0;
        }
        if (!this._flippedX) {
          return this._animationFrame.center.x * Math.abs(this._scaleX);
        } else {
          return (this._renderer.getUnscaledWidth() - this._animationFrame.center.x) * Math.abs(this._scaleX);
        }
      }
    }, {
      key: "getCenterY",
      value: function getCenterY() {
        if (this._animationFrameDirty) {
          this._updateAnimationFrame();
        }
        if (this._animationFrame === null) {
          return 0;
        }
        if (!this._flippedY) {
          return this._animationFrame.center.y * Math.abs(this._scaleY);
        } else {
          return (this._renderer.getUnscaledHeight() - this._animationFrame.center.y) * Math.abs(this._scaleY);
        }
      }
    }, {
      key: "setX",
      value: function setX(x) {
        if (x === this.x) {
          return;
        }
        this.x = x;
        if (this._animationFrame !== null) {
          this.hitBoxesDirty = true;
          this._renderer.updateX();
        }
      }
    }, {
      key: "setY",
      value: function setY(y) {
        if (y === this.y) {
          return;
        }
        this.y = y;
        if (this._animationFrame !== null) {
          this.hitBoxesDirty = true;
          this._renderer.updateY();
        }
      }
    }, {
      key: "setAngle",
      value: function setAngle(angle) {
        if (this._currentAnimation >= this._animations.length) {
          return;
        }
        if (!this._animations[this._currentAnimation].hasMultipleDirections) {
          if (this.angle === angle) {
            return;
          }
          this.angle = angle;
          this._renderer.updateAngle();
          this.hitBoxesDirty = true;
        } else {
          angle = angle % 360;
          if (angle < 0) {
            angle += 360;
          }
          this.setDirectionOrAngle(Math.round(angle / 45) % 8);
        }
      }
    }, {
      key: "getAngle",
      value: function getAngle() {
        if (this._currentAnimation >= this._animations.length) {
          return 0;
        }
        if (!this._animations[this._currentAnimation].hasMultipleDirections) {
          return this.angle;
        } else {
          return this._currentDirection * 45;
        }
      }
    }, {
      key: "setBlendMode",
      value: function setBlendMode(newMode) {
        if (this._blendMode === newMode) {
          return;
        }
        this._blendMode = newMode;
        this._renderer.update();
      }
    }, {
      key: "getBlendMode",
      value: function getBlendMode() {
        return this._blendMode;
      }
    }, {
      key: "setOpacity",
      value: function setOpacity(opacity) {
        if (opacity < 0) {
          opacity = 0;
        }
        if (opacity > 255) {
          opacity = 255;
        }
        this.opacity = opacity;
        this._renderer.updateOpacity();
      }
    }, {
      key: "getOpacity",
      value: function getOpacity() {
        return this.opacity;
      }
    }, {
      key: "hide",
      value: function hide(enable) {
        if (enable === void 0) {
          enable = true;
        }
        this.hidden = enable;
        this._renderer.updateVisibility();
      }
    }, {
      key: "setColor",
      value: function setColor(rgbColor) {
        this._renderer.setColor(rgbColor);
      }
    }, {
      key: "getColor",
      value: function getColor() {
        return this._renderer.getColor();
      }
    }, {
      key: "flipX",
      value: function flipX(enable) {
        if (enable !== this._flippedX) {
          this._scaleX *= -1;
          this._flippedX = enable;
          this.hitBoxesDirty = true;
          this._renderer.update();
        }
      }
    }, {
      key: "flipY",
      value: function flipY(enable) {
        if (enable !== this._flippedY) {
          this._scaleY *= -1;
          this._flippedY = enable;
          this.hitBoxesDirty = true;
          this._renderer.update();
        }
      }
    }, {
      key: "isFlippedX",
      value: function isFlippedX() {
        return this._flippedX;
      }
    }, {
      key: "isFlippedY",
      value: function isFlippedY() {
        return this._flippedY;
      }
    }, {
      key: "getWidth",
      value: function getWidth() {
        if (this._animationFrameDirty) {
          this._updateAnimationFrame();
        }
        return this._renderer.getWidth();
      }
    }, {
      key: "getHeight",
      value: function getHeight() {
        if (this._animationFrameDirty) {
          this._updateAnimationFrame();
        }
        return this._renderer.getHeight();
      }
    }, {
      key: "setWidth",
      value: function setWidth(newWidth) {
        if (this._animationFrameDirty) {
          this._updateAnimationFrame();
        }
        var unscaledWidth = this._renderer.getUnscaledWidth();
        if (unscaledWidth !== 0) {
          this.setScaleX(newWidth / unscaledWidth);
        }
      }
    }, {
      key: "setHeight",
      value: function setHeight(newHeight) {
        if (this._animationFrameDirty) {
          this._updateAnimationFrame();
        }
        var unscaledHeight = this._renderer.getUnscaledHeight();
        if (unscaledHeight !== 0) {
          this.setScaleY(newHeight / unscaledHeight);
        }
      }
    }, {
      key: "setScale",
      value: function setScale(newScale) {
        if (newScale < 0) {
          newScale = 0;
        }
        if (newScale === Math.abs(this._scaleX) && newScale === Math.abs(this._scaleY)) {
          return;
        }
        this._scaleX = newScale * (this._flippedX ? -1 : 1);
        this._scaleY = newScale * (this._flippedY ? -1 : 1);
        this._renderer.update();
        this.hitBoxesDirty = true;
      }
    }, {
      key: "setScaleX",
      value: function setScaleX(newScale) {
        if (newScale < 0) {
          newScale = 0;
        }
        if (newScale === Math.abs(this._scaleX)) {
          return;
        }
        this._scaleX = newScale * (this._flippedX ? -1 : 1);
        this._renderer.update();
        this.hitBoxesDirty = true;
      }
    }, {
      key: "setScaleY",
      value: function setScaleY(newScale) {
        if (newScale < 0) {
          newScale = 0;
        }
        if (newScale === Math.abs(this._scaleY)) {
          return;
        }
        this._scaleY = newScale * (this._flippedY ? -1 : 1);
        this._renderer.update();
        this.hitBoxesDirty = true;
      }
    }, {
      key: "getScale",
      value: function getScale() {
        return (Math.abs(this._scaleX) + Math.abs(this._scaleY)) / 2;
      }
    }, {
      key: "getScaleY",
      value: function getScaleY() {
        return Math.abs(this._scaleY);
      }
    }, {
      key: "getScaleX",
      value: function getScaleX() {
        return Math.abs(this._scaleX);
      }
    }, {
      key: "turnTowardObject",
      value: function turnTowardObject(obj, scene) {
        if (obj === null) {
          return;
        }
        this.rotateTowardPosition(obj.getDrawableX() + obj.getCenterX(), obj.getDrawableY() + obj.getCenterY(), 0, scene);
      }
    }]);

    return SpriteRuntimeObject;
  }(gdjs2.RuntimeObject);

  gdjs2.SpriteRuntimeObject = SpriteRuntimeObject;
  gdjs2.registerObject("Sprite", gdjs2.SpriteRuntimeObject);
  SpriteRuntimeObject.supportsReinitialization = true;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=spriteruntimeobject.js.map