"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gdjs;
(function (gdjs2) {
  var Layer = function () {
    function Layer(layerData, runtimeScene) {
      _classCallCheck(this, Layer);

      this._cameraRotation = 0;
      this._zoomFactor = 1;
      this._timeScale = 1;
      this._defaultZOrder = 0;
      this._name = layerData.name;
      this._hidden = !layerData.visibility;
      this._initialEffectsData = layerData.effects || [];
      this._cameraX = runtimeScene.getGame().getGameResolutionWidth() / 2;
      this._cameraY = runtimeScene.getGame().getGameResolutionHeight() / 2;
      this._cachedGameResolutionWidth = runtimeScene.getGame().getGameResolutionWidth();
      this._cachedGameResolutionHeight = runtimeScene.getGame().getGameResolutionHeight();
      this._runtimeScene = runtimeScene;
      this._isLightingLayer = layerData.isLightingLayer;
      this._followBaseLayerCamera = layerData.followBaseLayerCamera;
      this._clearColor = [layerData.ambientLightColorR / 255, layerData.ambientLightColorG / 255, layerData.ambientLightColorB / 255, 1];
      this._renderer = new gdjs2.LayerRenderer(this, runtimeScene.getRenderer());
      this.show(!this._hidden);
      for (var i = 0; i < layerData.effects.length; ++i) {
        this.addEffect(layerData.effects[i]);
      }
    }

    _createClass(Layer, [{
      key: "getRenderer",
      value: function getRenderer() {
        return this._renderer;
      }
    }, {
      key: "getDefaultZOrder",
      value: function getDefaultZOrder() {
        return this._defaultZOrder;
      }
    }, {
      key: "setDefaultZOrder",
      value: function setDefaultZOrder(defaultZOrder) {
        this._defaultZOrder = defaultZOrder;
      }
    }, {
      key: "onGameResolutionResized",
      value: function onGameResolutionResized() {
        var oldGameResolutionWidth = this._cachedGameResolutionWidth;
        var oldGameResolutionHeight = this._cachedGameResolutionHeight;
        this._cachedGameResolutionWidth = this._runtimeScene.getGame().getGameResolutionWidth();
        this._cachedGameResolutionHeight = this._runtimeScene.getGame().getGameResolutionHeight();
        this._cameraX += (this._cachedGameResolutionWidth - oldGameResolutionWidth) / 2;
        this._cameraY += (this._cachedGameResolutionHeight - oldGameResolutionHeight) / 2;
        this._renderer.updatePosition();
      }
    }, {
      key: "getRuntimeScene",
      value: function getRuntimeScene() {
        return this._runtimeScene;
      }
    }, {
      key: "update",
      value: function update(runtimeScene) {
        if (this._followBaseLayerCamera) {
          this.followBaseLayer();
        }
        return this._renderer.update();
      }
    }, {
      key: "getName",
      value: function getName() {
        return this._name;
      }
    }, {
      key: "getCameraX",
      value: function getCameraX(cameraId) {
        return this._cameraX;
      }
    }, {
      key: "getCameraY",
      value: function getCameraY(cameraId) {
        return this._cameraY;
      }
    }, {
      key: "setCameraX",
      value: function setCameraX(x, cameraId) {
        this._cameraX = x;
        this._renderer.updatePosition();
      }
    }, {
      key: "setCameraY",
      value: function setCameraY(y, cameraId) {
        this._cameraY = y;
        this._renderer.updatePosition();
      }
    }, {
      key: "getCameraWidth",
      value: function getCameraWidth(cameraId) {
        return +this._cachedGameResolutionWidth * 1 / this._zoomFactor;
      }
    }, {
      key: "getCameraHeight",
      value: function getCameraHeight(cameraId) {
        return +this._cachedGameResolutionHeight * 1 / this._zoomFactor;
      }
    }, {
      key: "show",
      value: function show(enable) {
        this._hidden = !enable;
        this._renderer.updateVisibility(enable);
      }
    }, {
      key: "isVisible",
      value: function isVisible() {
        return !this._hidden;
      }
    }, {
      key: "setCameraZoom",
      value: function setCameraZoom(newZoom, cameraId) {
        this._zoomFactor = newZoom;
        this._renderer.updatePosition();
      }
    }, {
      key: "getCameraZoom",
      value: function getCameraZoom(cameraId) {
        return this._zoomFactor;
      }
    }, {
      key: "getCameraRotation",
      value: function getCameraRotation(cameraId) {
        return this._cameraRotation;
      }
    }, {
      key: "setCameraRotation",
      value: function setCameraRotation(rotation, cameraId) {
        this._cameraRotation = rotation;
        this._renderer.updatePosition();
      }
    }, {
      key: "convertCoords",
      value: function convertCoords(x, y, cameraId) {
        x -= this._cachedGameResolutionWidth / 2;
        y -= this._cachedGameResolutionHeight / 2;
        x /= Math.abs(this._zoomFactor);
        y /= Math.abs(this._zoomFactor);
        var angleInRadians = this._cameraRotation / 180 * Math.PI;
        var tmp = x;
        var cosValue = Math.cos(angleInRadians);
        var sinValue = Math.sin(angleInRadians);
        x = cosValue * x - sinValue * y;
        y = sinValue * tmp + cosValue * y;
        return [x + this.getCameraX(cameraId), y + this.getCameraY(cameraId)];
      }
    }, {
      key: "convertInverseCoords",
      value: function convertInverseCoords(x, y, cameraId) {
        x -= this.getCameraX(cameraId);
        y -= this.getCameraY(cameraId);
        var angleInRadians = this._cameraRotation / 180 * Math.PI;
        var tmp = x;
        var cosValue = Math.cos(-angleInRadians);
        var sinValue = Math.sin(-angleInRadians);
        x = cosValue * x - sinValue * y;
        y = sinValue * tmp + cosValue * y;
        x *= Math.abs(this._zoomFactor);
        y *= Math.abs(this._zoomFactor);
        return [x + this._cachedGameResolutionWidth / 2, y + this._cachedGameResolutionHeight / 2];
      }
    }, {
      key: "getWidth",
      value: function getWidth() {
        return this._cachedGameResolutionWidth;
      }
    }, {
      key: "getHeight",
      value: function getHeight() {
        return this._cachedGameResolutionHeight;
      }
    }, {
      key: "getInitialEffectsData",
      value: function getInitialEffectsData() {
        return this._initialEffectsData;
      }
    }, {
      key: "addEffect",
      value: function addEffect(effectData) {
        this._renderer.addEffect(effectData);
        for (var name in effectData.doubleParameters) {
          this.setEffectDoubleParameter(effectData.name, name, effectData.doubleParameters[name]);
        }
        for (var _name in effectData.stringParameters) {
          this.setEffectStringParameter(effectData.name, _name, effectData.stringParameters[_name]);
        }
        for (var _name2 in effectData.booleanParameters) {
          this.setEffectBooleanParameter(effectData.name, _name2, effectData.booleanParameters[_name2]);
        }
      }
    }, {
      key: "removeEffect",
      value: function removeEffect(effectName) {
        this._renderer.removeEffect(effectName);
      }
    }, {
      key: "setEffectDoubleParameter",
      value: function setEffectDoubleParameter(name, parameterName, value) {
        return this._renderer.setEffectDoubleParameter(name, parameterName, value);
      }
    }, {
      key: "setEffectStringParameter",
      value: function setEffectStringParameter(name, parameterName, value) {
        return this._renderer.setEffectStringParameter(name, parameterName, value);
      }
    }, {
      key: "setEffectBooleanParameter",
      value: function setEffectBooleanParameter(name, parameterName, value) {
        return this._renderer.setEffectBooleanParameter(name, parameterName, value);
      }
    }, {
      key: "enableEffect",
      value: function enableEffect(name, enable) {
        this._renderer.enableEffect(name, enable);
      }
    }, {
      key: "isEffectEnabled",
      value: function isEffectEnabled(name) {
        return this._renderer.isEffectEnabled(name);
      }
    }, {
      key: "hasEffect",
      value: function hasEffect(name) {
        return this._renderer.hasEffect(name);
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
      key: "getElapsedTime",
      value: function getElapsedTime() {
        return this._runtimeScene.getTimeManager().getElapsedTime() * this._timeScale;
      }
    }, {
      key: "followBaseLayer",
      value: function followBaseLayer() {
        var baseLayer = this._runtimeScene.getLayer("");
        this.setCameraX(baseLayer.getCameraX());
        this.setCameraY(baseLayer.getCameraY());
        this.setCameraRotation(baseLayer.getCameraRotation());
        this.setCameraZoom(baseLayer.getCameraZoom());
      }
    }, {
      key: "getClearColor",
      value: function getClearColor() {
        return this._clearColor;
      }
    }, {
      key: "setClearColor",
      value: function setClearColor(r, g, b) {
        this._clearColor[0] = r / 255;
        this._clearColor[1] = g / 255;
        this._clearColor[2] = b / 255;
        this._renderer.updateClearColor();
      }
    }, {
      key: "setFollowBaseLayerCamera",
      value: function setFollowBaseLayerCamera(follow) {
        this._followBaseLayerCamera = follow;
      }
    }, {
      key: "isLightingLayer",
      value: function isLightingLayer() {
        return this._isLightingLayer;
      }
    }]);

    return Layer;
  }();

  gdjs2.Layer = Layer;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=layer.js.map