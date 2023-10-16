"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var gdjs;
(function (gdjs2) {
  function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    var v = Math.max(r, g, b),
        c = v - Math.min(r, g, b),
        f = 1 - Math.abs(v + v - c - 1);
    var h = c && (v === r ? (g - b) / c : v === g ? 2 + (b - r) / c : 4 + (r - g) / c);
    return [Math.round(60 * (h < 0 ? h + 6 : h)), Math.round((f ? c / f : 0) * 100), Math.round((v + v - c) / 2 * 100)];
  }
  function hslToRgb(h, s, l) {
    h = h %= 360;
    if (h < 0) {
      h += 360;
    }
    s = s / 100;
    l = l / 100;
    var a = s * Math.min(l, 1 - l);
    var f = function f() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (n + h / 30) % 12;
      return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    };
    return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
  }
  var TweenRuntimeBehavior2 = function (_gdjs2$RuntimeBehavio) {
    _inherits(TweenRuntimeBehavior2, _gdjs2$RuntimeBehavio);

    function TweenRuntimeBehavior2(runtimeScene, behaviorData, owner) {
      _classCallCheck(this, TweenRuntimeBehavior2);

      var _this = _possibleConstructorReturn(this, (TweenRuntimeBehavior2.__proto__ || Object.getPrototypeOf(TweenRuntimeBehavior2)).call(this, runtimeScene, behaviorData, owner));

      _this._tweens = {};
      _this._isActive = true;
      _this._runtimeScene = runtimeScene;
      return _this;
    }

    _createClass(TweenRuntimeBehavior2, [{
      key: "updateFromBehaviorData",
      value: function updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
        return true;
      }
    }, {
      key: "_addTween",
      value: function _addTween(identifier, instance, startTime, totalDuration) {
        this._tweens[identifier] = new TweenRuntimeBehavior2.TweenInstance(instance, false, startTime, totalDuration);
      }
    }, {
      key: "_getTween",
      value: function _getTween(identifier) {
        return this._tweens[identifier];
      }
    }, {
      key: "_tweenExists",
      value: function _tweenExists(identifier) {
        return !!this._tweens[identifier];
      }
    }, {
      key: "_tweenIsPlaying",
      value: function _tweenIsPlaying(identifier) {
        return this._tweens[identifier].instance.isPlaying();
      }
    }, {
      key: "_pauseTween",
      value: function _pauseTween(identifier) {
        var tween = this._tweens[identifier];
        tween.instance.pause();
        var shiftyJsScene = this._runtimeScene.shiftyJsScene;
        if (shiftyJsScene) {
          shiftyJsScene.remove(tween.instance);
        }
      }
    }, {
      key: "_resumeTween",
      value: function _resumeTween(identifier) {
        var tween = this._tweens[identifier];
        tween.instance.resume();
        var shiftyJsScene = this._runtimeScene.shiftyJsScene;
        if (shiftyJsScene) {
          shiftyJsScene.add(tween.instance);
        }
      }
    }, {
      key: "_stopTween",
      value: function _stopTween(identifier, jumpToDest) {
        return this._tweens[identifier].instance.stop(jumpToDest);
      }
    }, {
      key: "_setTweenFinished",
      value: function _setTweenFinished(identifier, hasFinished) {
        this._tweens[identifier].hasFinished = hasFinished;
      }
    }, {
      key: "_tweenHasFinished",
      value: function _tweenHasFinished(identifier) {
        return this._tweens[identifier].hasFinished;
      }
    }, {
      key: "_removeObjectFromScene",
      value: function _removeObjectFromScene(identifier) {
        this._removeTween(identifier);
        return this.owner.deleteFromScene(this._runtimeScene);
      }
    }, {
      key: "_removeTween",
      value: function _removeTween(identifier) {
        if (!this._tweens[identifier]) {
          return;
        }
        this._tweens[identifier].instance.stop();
        TweenRuntimeBehavior2.removeFromScene(this._runtimeScene, this._tweens[identifier].instance);
        delete this._tweens[identifier];
      }
    }, {
      key: "_setupTweenEnding",
      value: function _setupTweenEnding(identifier, destroyObjectWhenFinished) {
        var that = this;
        if (destroyObjectWhenFinished) {
          this._tweens[identifier].instance.tween().then(function () {
            that._removeObjectFromScene(identifier);
          }).catch(function () {});
        } else {
          this._tweens[identifier].instance.tween().then(function () {
            if (that._tweens[identifier]) {
              that._tweens[identifier].hasFinished = true;
            }
          }).catch(function () {});
        }
      }
    }, {
      key: "addVariableTween",
      value: function addVariableTween(identifier, variable, fromValue, toValue, easingValue, durationValue, destroyObjectWhenFinished) {
        if (!this._isActive) {
          return;
        }
        if (!!TweenRuntimeBehavior2.easings[easingValue]) {
          return;
        }
        if (this._tweenExists(identifier)) {
          this.removeTween(identifier);
        }
        var newTweenable = TweenRuntimeBehavior2.makeNewTweenable(this._runtimeScene);
        newTweenable.setConfig({
          from: { value: fromValue },
          to: { value: toValue },
          duration: durationValue,
          easing: easingValue,
          step: function step(state) {
            variable.setNumber(state.value);
          }
        });
        this._addTween(identifier, newTweenable, this._runtimeScene.getTimeManager().getTimeFromStart(), durationValue);
        this._setupTweenEnding(identifier, destroyObjectWhenFinished);
      }
    }, {
      key: "addObjectPositionTween",
      value: function addObjectPositionTween(identifier, toX, toY, easingValue, durationValue, destroyObjectWhenFinished) {
        var that = this;
        if (!this._isActive) {
          return;
        }
        if (!!TweenRuntimeBehavior2.easings[easingValue]) {
          return;
        }
        if (this._tweenExists(identifier)) {
          this.removeTween(identifier);
        }
        var newTweenable = TweenRuntimeBehavior2.makeNewTweenable(this._runtimeScene);
        newTweenable.setConfig({
          from: { x: this.owner.getX(), y: this.owner.getY() },
          to: { x: toX, y: toY },
          duration: durationValue,
          easing: easingValue,
          step: function step(state) {
            that.owner.setX(state.x);
            that.owner.setY(state.y);
          }
        });
        this._addTween(identifier, newTweenable, this._runtimeScene.getTimeManager().getTimeFromStart(), durationValue);
        this._setupTweenEnding(identifier, destroyObjectWhenFinished);
      }
    }, {
      key: "addObjectPositionXTween",
      value: function addObjectPositionXTween(identifier, toX, easingValue, durationValue, destroyObjectWhenFinished) {
        var that = this;
        if (!this._isActive) {
          return;
        }
        if (!!TweenRuntimeBehavior2.easings[easingValue]) {
          return;
        }
        if (this._tweenExists(identifier)) {
          this.removeTween(identifier);
        }
        var newTweenable = TweenRuntimeBehavior2.makeNewTweenable(this._runtimeScene);
        newTweenable.setConfig({
          from: { x: this.owner.getX() },
          to: { x: toX },
          duration: durationValue,
          easing: easingValue,
          step: function step(state) {
            that.owner.setX(state.x);
          }
        });
        this._addTween(identifier, newTweenable, this._runtimeScene.getTimeManager().getTimeFromStart(), durationValue);
        this._setupTweenEnding(identifier, destroyObjectWhenFinished);
      }
    }, {
      key: "addObjectPositionYTween",
      value: function addObjectPositionYTween(identifier, toY, easingValue, durationValue, destroyObjectWhenFinished) {
        var that = this;
        if (!this._isActive) {
          return;
        }
        if (!!TweenRuntimeBehavior2.easings[easingValue]) {
          return;
        }
        if (this._tweenExists(identifier)) {
          this.removeTween(identifier);
        }
        var newTweenable = TweenRuntimeBehavior2.makeNewTweenable(this._runtimeScene);
        newTweenable.setConfig({
          from: { y: this.owner.getY() },
          to: { y: toY },
          duration: durationValue,
          easing: easingValue,
          step: function step(state) {
            that.owner.setY(state.y);
          }
        });
        this._addTween(identifier, newTweenable, this._runtimeScene.getTimeManager().getTimeFromStart(), durationValue);
        this._setupTweenEnding(identifier, destroyObjectWhenFinished);
      }
    }, {
      key: "addObjectAngleTween",
      value: function addObjectAngleTween(identifier, toAngle, easingValue, durationValue, destroyObjectWhenFinished) {
        var that = this;
        if (!this._isActive) {
          return;
        }
        if (!!TweenRuntimeBehavior2.easings[easingValue]) {
          return;
        }
        if (this._tweenExists(identifier)) {
          this.removeTween(identifier);
        }
        var newTweenable = TweenRuntimeBehavior2.makeNewTweenable(this._runtimeScene);
        newTweenable.setConfig({
          from: { angle: this.owner.getAngle() },
          to: { angle: toAngle },
          duration: durationValue,
          easing: easingValue,
          step: function step(state) {
            that.owner.setAngle(state.angle);
          }
        });
        this._addTween(identifier, newTweenable, this._runtimeScene.getTimeManager().getTimeFromStart(), durationValue);
        this._setupTweenEnding(identifier, destroyObjectWhenFinished);
      }
    }, {
      key: "addObjectScaleTween",
      value: function addObjectScaleTween(identifier, toScaleX, toScaleY, easingValue, durationValue, destroyObjectWhenFinished, scaleFromCenterOfObject) {
        var that = this;
        if (!this._isActive) {
          return;
        }
        if (!this.owner.setScaleX || !this.owner.setScaleY) {
          return;
        }
        if (!!TweenRuntimeBehavior2.easings[easingValue]) {
          return;
        }
        if (this._tweenExists(identifier)) {
          this.removeTween(identifier);
        }
        if (toScaleX < 0) {
          toScaleX = 0;
        }
        if (toScaleY < 0) {
          toScaleY = 0;
        }
        var newTweenable = TweenRuntimeBehavior2.makeNewTweenable(this._runtimeScene);
        var stepFunction = void 0;
        if (scaleFromCenterOfObject) {
          stepFunction = function step(state) {
            var oldX = that.owner.getCenterXInScene();
            var oldY = that.owner.getCenterYInScene();
            that.owner.setScaleX(state.scaleX);
            that.owner.setScaleY(state.scaleY);
            that.owner.setCenterPositionInScene(oldX, oldY);
          };
        } else {
          stepFunction = function step(state) {
            that.owner.setScaleX(state.scaleX);
            that.owner.setScaleY(state.scaleY);
          };
        }
        newTweenable.setConfig({
          from: {
            scaleX: this.owner.getScaleX(),
            scaleY: this.owner.getScaleY()
          },
          to: { scaleX: toScaleX, scaleY: toScaleY },
          duration: durationValue,
          easing: easingValue,
          step: stepFunction
        });
        this._addTween(identifier, newTweenable, this._runtimeScene.getTimeManager().getTimeFromStart(), durationValue);
        this._setupTweenEnding(identifier, destroyObjectWhenFinished);
      }
    }, {
      key: "addObjectScaleXTween",
      value: function addObjectScaleXTween(identifier, toScaleX, easingValue, durationValue, destroyObjectWhenFinished, scaleFromCenterOfObject) {
        var that = this;
        if (!this._isActive) {
          return;
        }
        if (!this.owner.setScaleX) {
          return;
        }
        if (!!TweenRuntimeBehavior2.easings[easingValue]) {
          return;
        }
        if (this._tweenExists(identifier)) {
          this.removeTween(identifier);
        }
        var newTweenable = TweenRuntimeBehavior2.makeNewTweenable(this._runtimeScene);
        var stepFunction = void 0;
        if (scaleFromCenterOfObject) {
          stepFunction = function step(state) {
            var oldX = that.owner.getCenterXInScene();
            that.owner.setScaleX(state.scaleX);
            that.owner.setCenterXInScene(oldX);
          };
        } else {
          stepFunction = function step(state) {
            that.owner.setScaleX(state.scaleX);
          };
        }
        newTweenable.setConfig({
          from: { scaleX: this.owner.getScaleX() },
          to: { scaleX: toScaleX },
          duration: durationValue,
          easing: easingValue,
          step: stepFunction
        });
        this._addTween(identifier, newTweenable, this._runtimeScene.getTimeManager().getTimeFromStart(), durationValue);
        this._setupTweenEnding(identifier, destroyObjectWhenFinished);
      }
    }, {
      key: "addObjectScaleYTween",
      value: function addObjectScaleYTween(identifier, toScaleY, easingValue, durationValue, destroyObjectWhenFinished, scaleFromCenterOfObject) {
        var that = this;
        if (!this._isActive) {
          return;
        }
        if (!this.owner.setScaleY) {
          return;
        }
        if (!!TweenRuntimeBehavior2.easings[easingValue]) {
          return;
        }
        if (this._tweenExists(identifier)) {
          this.removeTween(identifier);
        }
        var newTweenable = TweenRuntimeBehavior2.makeNewTweenable(this._runtimeScene);
        var stepFunction = void 0;
        if (scaleFromCenterOfObject) {
          stepFunction = function step(state) {
            var oldY = that.owner.getCenterYInScene();
            that.owner.setScaleY(state.scaleY);
            that.owner.setCenterYInScene(oldY);
          };
        } else {
          stepFunction = function step(state) {
            that.owner.setScaleY(state.scaleY);
          };
        }
        newTweenable.setConfig({
          from: { scaleY: this.owner.getScaleY() },
          to: { scaleY: toScaleY },
          duration: durationValue,
          easing: easingValue,
          step: stepFunction
        });
        this._addTween(identifier, newTweenable, this._runtimeScene.getTimeManager().getTimeFromStart(), durationValue);
        this._setupTweenEnding(identifier, destroyObjectWhenFinished);
      }
    }, {
      key: "addObjectOpacityTween",
      value: function addObjectOpacityTween(identifier, toOpacity, easingValue, durationValue, destroyObjectWhenFinished) {
        var that = this;
        if (!this._isActive) {
          return;
        }
        if (!this.owner.getOpacity || !this.owner.setOpacity) {
          return;
        }
        if (!!TweenRuntimeBehavior2.easings[easingValue]) {
          return;
        }
        if (this._tweenExists(identifier)) {
          this.removeTween(identifier);
        }
        var newTweenable = TweenRuntimeBehavior2.makeNewTweenable(this._runtimeScene);
        newTweenable.setConfig({
          from: { opacity: this.owner.getOpacity() },
          to: { opacity: toOpacity },
          duration: durationValue,
          easing: easingValue,
          step: function step(state) {
            that.owner.setOpacity(state.opacity);
          }
        });
        this._addTween(identifier, newTweenable, this._runtimeScene.getTimeManager().getTimeFromStart(), durationValue);
        this._setupTweenEnding(identifier, destroyObjectWhenFinished);
      }
    }, {
      key: "addObjectColorTween",
      value: function addObjectColorTween(identifier, toColorStr, easingValue, durationValue, destroyObjectWhenFinished, useHSLColorTransition) {
        var that = this;
        if (!this._isActive) {
          return;
        }
        if (!this.owner.getColor || !this.owner.setColor) {
          return;
        }
        if (!toColorStr.match("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]);){2}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")) {
          return;
        }
        if (!!TweenRuntimeBehavior2.easings[easingValue]) {
          return;
        }
        if (this._tweenExists(identifier)) {
          this.removeTween(identifier);
        }
        var fromColor = this.owner.getColor().split(";");
        var toColor = toColorStr.split(";");
        if (toColor.length !== 3) {
          return;
        }
        var newTweenable = TweenRuntimeBehavior2.makeNewTweenable(this._runtimeScene);
        if (useHSLColorTransition) {
          var fromColorAsHSL = rgbToHsl(parseFloat(fromColor[0]), parseFloat(fromColor[1]), parseFloat(fromColor[2]));
          var toColorAsHSL = rgbToHsl(parseFloat(toColor[0]), parseFloat(toColor[1]), parseFloat(toColor[2]));
          newTweenable.setConfig({
            from: {
              hue: fromColorAsHSL[0],
              saturation: fromColorAsHSL[1],
              lightness: fromColorAsHSL[2]
            },
            to: {
              hue: toColorAsHSL[0],
              saturation: toColorAsHSL[1],
              lightness: toColorAsHSL[2]
            },
            duration: durationValue,
            easing: easingValue,
            step: function step(state) {
              var rgbFromHslColor = hslToRgb(state.hue, state.saturation, state.lightness);
              that.owner.setColor(Math.floor(rgbFromHslColor[0]) + ";" + Math.floor(rgbFromHslColor[1]) + ";" + Math.floor(rgbFromHslColor[2]));
            }
          });
        } else {
          newTweenable.setConfig({
            from: { red: fromColor[0], green: fromColor[1], blue: fromColor[2] },
            to: { red: toColor[0], green: toColor[1], blue: toColor[2] },
            duration: durationValue,
            easing: easingValue,
            step: function step(state) {
              that.owner.setColor(Math.floor(state.red) + ";" + Math.floor(state.green) + ";" + Math.floor(state.blue));
            }
          });
        }
        this._addTween(identifier, newTweenable, this._runtimeScene.getTimeManager().getTimeFromStart(), durationValue);
        this._setupTweenEnding(identifier, destroyObjectWhenFinished);
      }
    }, {
      key: "addObjectColorHSLTween",
      value: function addObjectColorHSLTween(identifier, toHue, animateHue, toSaturation, toLightness, easingValue, durationValue, destroyObjectWhenFinished) {
        var that = this;
        if (!this._isActive) {
          return;
        }
        if (!this.owner.getColor || !this.owner.setColor) {
          return;
        }
        if (!!TweenRuntimeBehavior2.easings[easingValue]) {
          return;
        }
        if (this._tweenExists(identifier)) {
          this.removeTween(identifier);
        }
        var fromColor = this.owner.getColor().split(";");
        if (fromColor.length < 3) return;
        var fromColorAsHSL = rgbToHsl(parseFloat(fromColor[0]), parseFloat(fromColor[1]), parseFloat(fromColor[2]));
        var toH = animateHue ? toHue : fromColorAsHSL[0];
        var toS = toSaturation === -1 ? fromColorAsHSL[1] : Math.min(Math.max(toSaturation, 0), 100);
        var toL = toLightness === -1 ? fromColorAsHSL[2] : Math.min(Math.max(toLightness, 0), 100);
        var newTweenable = TweenRuntimeBehavior2.makeNewTweenable(this._runtimeScene);
        newTweenable.setConfig({
          from: {
            hue: fromColorAsHSL[0],
            saturation: fromColorAsHSL[1],
            lightness: fromColorAsHSL[2]
          },
          to: {
            hue: toH,
            saturation: toS,
            lightness: toL
          },
          duration: durationValue,
          easing: easingValue,
          step: function step(state) {
            var rgbFromHslColor = hslToRgb(state.hue, state.saturation, state.lightness);
            that.owner.setColor(Math.floor(rgbFromHslColor[0]) + ";" + Math.floor(rgbFromHslColor[1]) + ";" + Math.floor(rgbFromHslColor[2]));
          }
        });
        this._addTween(identifier, newTweenable, this._runtimeScene.getTimeManager().getTimeFromStart(), durationValue);
        this._setupTweenEnding(identifier, destroyObjectWhenFinished);
      }
    }, {
      key: "addTextObjectCharacterSizeTween",
      value: function addTextObjectCharacterSizeTween(identifier, toSize, easingValue, durationValue, destroyObjectWhenFinished) {
        var that = this;
        if (!this._isActive) {
          return;
        }
        if (!this.owner.setCharacterSize) {
          return;
        }
        if (!!TweenRuntimeBehavior2.easings[easingValue]) {
          return;
        }
        if (this._tweenExists(identifier)) {
          this.removeTween(identifier);
        }
        var newTweenable = TweenRuntimeBehavior2.makeNewTweenable(this._runtimeScene);
        newTweenable.setConfig({
          from: { size: this.owner.getCharacterSize() },
          to: { size: toSize },
          duration: durationValue,
          easing: easingValue,
          step: function step(state) {
            that.owner.setCharacterSize(state.size);
          }
        });
        this._addTween(identifier, newTweenable, this._runtimeScene.getTimeManager().getTimeFromStart(), durationValue);
        this._setupTweenEnding(identifier, destroyObjectWhenFinished);
      }
    }, {
      key: "addObjectWidthTween",
      value: function addObjectWidthTween(identifier, toWidth, easingValue, durationValue, destroyObjectWhenFinished) {
        var that = this;
        if (!this._isActive) {
          return;
        }
        if (!!TweenRuntimeBehavior2.easings[easingValue]) {
          return;
        }
        if (this._tweenExists(identifier)) {
          this.removeTween(identifier);
        }
        var newTweenable = TweenRuntimeBehavior2.makeNewTweenable(this._runtimeScene);
        newTweenable.setConfig({
          from: { width: this.owner.getWidth() },
          to: { width: toWidth },
          duration: durationValue,
          easing: easingValue,
          step: function step(state) {
            that.owner.setWidth(state.width);
          }
        });
        this._addTween(identifier, newTweenable, this._runtimeScene.getTimeManager().getTimeFromStart(), durationValue);
        this._setupTweenEnding(identifier, destroyObjectWhenFinished);
      }
    }, {
      key: "addObjectHeightTween",
      value: function addObjectHeightTween(identifier, toHeight, easingValue, durationValue, destroyObjectWhenFinished) {
        var that = this;
        if (!this._isActive) {
          return;
        }
        if (!!TweenRuntimeBehavior2.easings[easingValue]) {
          return;
        }
        if (this._tweenExists(identifier)) {
          this.removeTween(identifier);
        }
        var newTweenable = TweenRuntimeBehavior2.makeNewTweenable(this._runtimeScene);
        newTweenable.setConfig({
          from: { height: this.owner.getHeight() },
          to: { height: toHeight },
          duration: durationValue,
          easing: easingValue,
          step: function step(state) {
            that.owner.setHeight(state.height);
          }
        });
        this._addTween(identifier, newTweenable, this._runtimeScene.getTimeManager().getTimeFromStart(), durationValue);
        this._setupTweenEnding(identifier, destroyObjectWhenFinished);
      }
    }, {
      key: "isPlaying",
      value: function isPlaying(identifier) {
        if (this._tweenExists(identifier) && this._tweenIsPlaying(identifier)) {
          return true;
        } else {
          return false;
        }
      }
    }, {
      key: "exists",
      value: function exists(identifier) {
        return this._tweenExists(identifier);
      }
    }, {
      key: "hasFinished",
      value: function hasFinished(identifier) {
        if (this._tweenExists(identifier)) {
          return this._tweenHasFinished(identifier);
        } else {
          return false;
        }
      }
    }, {
      key: "pauseTween",
      value: function pauseTween(identifier) {
        if (!this._isActive) {
          return;
        }
        if (this._tweenExists(identifier) && this._tweenIsPlaying(identifier)) {
          this._pauseTween(identifier);
        }
      }
    }, {
      key: "stopTween",
      value: function stopTween(identifier, jumpToDest) {
        if (!this._isActive) {
          return;
        }
        if (this._tweenExists(identifier) && this._tweenIsPlaying(identifier)) {
          this._stopTween(identifier, jumpToDest);
        }
      }
    }, {
      key: "resumeTween",
      value: function resumeTween(identifier) {
        if (!this._isActive) {
          return;
        }
        if (this._tweenExists(identifier) && !this._tweenIsPlaying(identifier)) {
          this._resumeTween(identifier);
        }
      }
    }, {
      key: "removeTween",
      value: function removeTween(identifier) {
        this._removeTween(identifier);
      }
    }, {
      key: "getProgress",
      value: function getProgress(identifier) {
        var tween = this._getTween(identifier);
        if (tween) {
          var currentTime = this._runtimeScene.getTimeManager().getTimeFromStart();
          if (currentTime >= tween.startTime + tween.totalDuration) {
            return 1;
          }
          return (currentTime - tween.startTime) / tween.totalDuration;
        } else {
          return 0;
        }
      }
    }, {
      key: "onDeActivate",
      value: function onDeActivate() {
        if (!this._isActive) {
          return;
        }
        for (var key in this._tweens) {
          if (this._tweens.hasOwnProperty(key)) {
            var tween = this._tweens[key];
            if (tween.instance.isPlaying()) {
              tween.resumeOnActivate = true;
              this._pauseTween(key);
            }
          }
        }
        this._isActive = false;
      }
    }, {
      key: "onActivate",
      value: function onActivate() {
        if (this._isActive) {
          return;
        }
        for (var key in this._tweens) {
          if (this._tweens.hasOwnProperty(key)) {
            var tween = this._tweens[key];
            if (tween.resumeOnActivate) {
              tween.resumeOnActivate = false;
              this._resumeTween(key);
            }
          }
        }
        this._isActive = true;
      }
    }], [{
      key: "makeNewTweenable",
      value: function makeNewTweenable(runtimeScene) {
        if (!runtimeScene.shiftyJsScene) {
          runtimeScene.shiftyJsScene = new shifty.Scene();
        }
        var tweenable = new shifty.Tweenable();
        runtimeScene.shiftyJsScene.add(tweenable);
        return tweenable;
      }
    }, {
      key: "removeFromScene",
      value: function removeFromScene(runtimeScene, tweenable) {
        if (!runtimeScene.shiftyJsScene) {
          return;
        }
        runtimeScene.shiftyJsScene.remove(tweenable);
      }
    }]);

    return TweenRuntimeBehavior2;
  }(gdjs2.RuntimeBehavior);
  var TweenRuntimeBehavior = TweenRuntimeBehavior2;
  TweenRuntimeBehavior.easings = ["linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInSine", "easeOutSine", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo"];
  TweenRuntimeBehavior._tweensProcessed = false;
  TweenRuntimeBehavior._currentTweenTime = 0;
  gdjs2.TweenRuntimeBehavior = TweenRuntimeBehavior;
  gdjs2.registerBehavior("Tween::TweenBehavior", gdjs2.TweenRuntimeBehavior);
  (function (TweenRuntimeBehavior3) {
    var TweenInstance = function TweenInstance(instance, hasFinished, startTime, totalDuration) {
      _classCallCheck(this, TweenInstance);

      this.resumeOnActivate = false;
      this.instance = instance;
      this.hasFinished = hasFinished;
      this.startTime = startTime;
      this.totalDuration = totalDuration;
    };

    TweenRuntimeBehavior3.TweenInstance = TweenInstance;
  })(TweenRuntimeBehavior = gdjs2.TweenRuntimeBehavior || (gdjs2.TweenRuntimeBehavior = {}));
  gdjs2.registerRuntimeSceneUnloadedCallback(function (runtimeScene) {
    var shiftyJsScene = runtimeScene.shiftyJsScene;
    if (!shiftyJsScene) {
      return;
    }
    shiftyJsScene.stop(false);
    shiftyJsScene.tweenables.forEach(shiftyJsScene.remove.bind(shiftyJsScene));
  });
  gdjs2.registerRuntimeScenePausedCallback(function (runtimeScene) {
    var shiftyJsScene = runtimeScene.shiftyJsScene;
    if (!shiftyJsScene) {
      return;
    }
    shiftyJsScene.pause();
  });
  gdjs2.registerRuntimeSceneResumedCallback(function (runtimeScene) {
    var shiftyJsScene = runtimeScene.shiftyJsScene;
    if (!shiftyJsScene) {
      return;
    }
    TweenRuntimeBehavior._currentTweenTime = runtimeScene.getTimeManager().getTimeFromStart();
    shiftyJsScene.resume();
  });
  gdjs2.registerRuntimeScenePreEventsCallback(function (runtimeScene) {
    TweenRuntimeBehavior._currentTweenTime = runtimeScene.getTimeManager().getTimeFromStart();
    shifty.processTweens();
  });
  shifty.Tweenable.setScheduleFunction(function () {});
  shifty.Tweenable.now = function () {
    return TweenRuntimeBehavior._currentTweenTime;
  };
})(gdjs || (gdjs = {}));
//# sourceMappingURL=tweenruntimebehavior.js.map