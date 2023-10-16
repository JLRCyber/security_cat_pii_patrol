'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gdjs;
(function (gdjs2) {
  var LayerPixiRenderer = function () {
    function LayerPixiRenderer(layer, runtimeSceneRenderer) {
      _classCallCheck(this, LayerPixiRenderer);

      this._filters = {};
      this._renderTexture = null;
      this._lightingSprite = null;
      this._oldWidth = null;
      this._oldHeight = null;
      this._pixiContainer = new PIXI.Container();
      this._layer = layer;
      this._runtimeSceneRenderer = runtimeSceneRenderer;
      this._pixiRenderer = runtimeSceneRenderer.getPIXIRenderer();
      this._isLightingLayer = layer.isLightingLayer();
      this._clearColor = layer.getClearColor();
      runtimeSceneRenderer.getPIXIContainer().addChild(this._pixiContainer);
      this._pixiContainer.filters = [];
      if (this._isLightingLayer) {
        this._replaceContainerWithSprite();
      }
    }

    _createClass(LayerPixiRenderer, [{
      key: 'getRendererObject',
      value: function getRendererObject() {
        return this._pixiContainer;
      }
    }, {
      key: 'getLightingSprite',
      value: function getLightingSprite() {
        return this._lightingSprite;
      }
    }, {
      key: 'updatePosition',
      value: function updatePosition() {
        var angle = -gdjs2.toRad(this._layer.getCameraRotation());
        var zoomFactor = this._layer.getCameraZoom();
        this._pixiContainer.rotation = angle;
        this._pixiContainer.scale.x = zoomFactor;
        this._pixiContainer.scale.y = zoomFactor;
        var cosValue = Math.cos(angle);
        var sinValue = Math.sin(angle);
        var centerX = this._layer.getCameraX() * zoomFactor * cosValue - this._layer.getCameraY() * zoomFactor * sinValue;
        var centerY = this._layer.getCameraX() * zoomFactor * sinValue + this._layer.getCameraY() * zoomFactor * cosValue;
        this._pixiContainer.position.x = -centerX;
        this._pixiContainer.position.y = -centerY;
        this._pixiContainer.position.x += this._layer.getWidth() / 2;
        this._pixiContainer.position.y += this._layer.getHeight() / 2;
      }
    }, {
      key: 'updateVisibility',
      value: function updateVisibility(visible) {
        this._pixiContainer.visible = !!visible;
      }
    }, {
      key: 'update',
      value: function update() {
        if (this._renderTexture) {
          this._updateRenderTexture();
        }
        for (var filterName in this._filters) {
          var filter = this._filters[filterName];
          filter.update(filter.pixiFilter, this._layer);
        }
      }
    }, {
      key: 'addEffect',
      value: function addEffect(effectData) {
        var filterCreator = gdjs2.PixiFiltersTools.getFilterCreator(effectData.effectType);
        if (!filterCreator) {
          console.log('Filter "' + effectData.name + '" has an unknown effect type: "' + effectData.effectType + '". Was it registered properly? Is the effect type correct?');
          return;
        }
        var filter = {
          pixiFilter: filterCreator.makePIXIFilter(this._layer, effectData),
          updateDoubleParameter: filterCreator.updateDoubleParameter,
          updateStringParameter: filterCreator.updateStringParameter,
          updateBooleanParameter: filterCreator.updateBooleanParameter,
          update: filterCreator.update
        };
        if (this._isLightingLayer) {
          filter.pixiFilter.blendMode = PIXI.BLEND_MODES.ADD;
        }
        this._pixiContainer.filters = (this._pixiContainer.filters || []).concat(filter.pixiFilter);
        this._filters[effectData.name] = filter;
      }
    }, {
      key: 'removeEffect',
      value: function removeEffect(effectName) {
        var filter = this._filters[effectName];
        if (!filter) {
          return;
        }
        this._pixiContainer.filters = (this._pixiContainer.filters || []).filter(function (pixiFilter) {
          return pixiFilter !== filter.pixiFilter;
        });
        delete this._filters[effectName];
      }
    }, {
      key: 'addRendererObject',
      value: function addRendererObject(child, zOrder) {
        child.zOrder = zOrder;
        for (var i = 0, len = this._pixiContainer.children.length; i < len; ++i) {
          if (this._pixiContainer.children[i].zOrder >= zOrder) {
            this._pixiContainer.addChildAt(child, i);
            return;
          }
        }
        this._pixiContainer.addChild(child);
      }
    }, {
      key: 'changeRendererObjectZOrder',
      value: function changeRendererObjectZOrder(child, newZOrder) {
        this._pixiContainer.removeChild(child);
        this.addRendererObject(child, newZOrder);
      }
    }, {
      key: 'removeRendererObject',
      value: function removeRendererObject(child) {
        this._pixiContainer.removeChild(child);
      }
    }, {
      key: 'setEffectDoubleParameter',
      value: function setEffectDoubleParameter(name, parameterName, value) {
        var filter = this._filters[name];
        if (!filter) {
          return;
        }
        filter.updateDoubleParameter(filter.pixiFilter, parameterName, value);
      }
    }, {
      key: 'setEffectStringParameter',
      value: function setEffectStringParameter(name, parameterName, value) {
        var filter = this._filters[name];
        if (!filter) {
          return;
        }
        filter.updateStringParameter(filter.pixiFilter, parameterName, value);
      }
    }, {
      key: 'setEffectBooleanParameter',
      value: function setEffectBooleanParameter(name, parameterName, value) {
        var filter = this._filters[name];
        if (!filter) {
          return;
        }
        filter.updateBooleanParameter(filter.pixiFilter, parameterName, value);
      }
    }, {
      key: 'hasEffect',
      value: function hasEffect(name) {
        return !!this._filters[name];
      }
    }, {
      key: 'enableEffect',
      value: function enableEffect(name, value) {
        var filter = this._filters[name];
        if (!filter) {
          return;
        }
        gdjs2.PixiFiltersTools.enableEffect(filter, value);
      }
    }, {
      key: 'isEffectEnabled',
      value: function isEffectEnabled(name) {
        var filter = this._filters[name];
        if (!filter) {
          return false;
        }
        return gdjs2.PixiFiltersTools.isEffectEnabled(filter);
      }
    }, {
      key: 'updateClearColor',
      value: function updateClearColor() {
        this._clearColor = this._layer.getClearColor();
        this._updateRenderTexture();
      }
    }, {
      key: '_updateRenderTexture',
      value: function _updateRenderTexture() {
        if (!this._pixiRenderer || this._pixiRenderer.type !== PIXI.RENDERER_TYPE.WEBGL) {
          return;
        }
        if (!this._renderTexture) {
          this._oldWidth = this._pixiRenderer.screen.width;
          this._oldHeight = this._pixiRenderer.screen.height;
          var width = this._oldWidth;
          var height = this._oldHeight;
          var resolution = this._pixiRenderer.resolution;
          this._renderTexture = PIXI.RenderTexture.create({
            width: width,
            height: height,
            resolution: resolution
          });
          this._renderTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
        }
        if (this._oldWidth !== this._pixiRenderer.screen.width || this._oldHeight !== this._pixiRenderer.screen.height) {
          this._renderTexture.resize(this._pixiRenderer.screen.width, this._pixiRenderer.screen.height);
          this._oldWidth = this._pixiRenderer.screen.width;
          this._oldHeight = this._pixiRenderer.screen.height;
        }
        var oldRenderTexture = this._pixiRenderer.renderTexture.current;
        var oldSourceFrame = this._pixiRenderer.renderTexture.sourceFrame;
        this._pixiRenderer.renderTexture.bind(this._renderTexture);
        this._pixiRenderer.renderTexture.clear(this._clearColor);
        this._pixiRenderer.render(this._pixiContainer, this._renderTexture, false);
        this._pixiRenderer.renderTexture.bind(oldRenderTexture, oldSourceFrame, void 0);
      }
    }, {
      key: '_replaceContainerWithSprite',
      value: function _replaceContainerWithSprite() {
        if (!this._pixiRenderer || this._pixiRenderer.type !== PIXI.RENDERER_TYPE.WEBGL) {
          return;
        }
        this._updateRenderTexture();
        if (!this._renderTexture) {
          return;
        }
        this._lightingSprite = new PIXI.Sprite(this._renderTexture);
        this._lightingSprite.blendMode = PIXI.BLEND_MODES.MULTIPLY;
        var sceneContainer = this._runtimeSceneRenderer.getPIXIContainer();
        var index = sceneContainer.getChildIndex(this._pixiContainer);
        sceneContainer.addChildAt(this._lightingSprite, index);
        sceneContainer.removeChild(this._pixiContainer);
      }
    }]);

    return LayerPixiRenderer;
  }();

  gdjs2.LayerPixiRenderer = LayerPixiRenderer;
  gdjs2.LayerRenderer = gdjs2.LayerPixiRenderer;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=layer-pixi-renderer.js.map