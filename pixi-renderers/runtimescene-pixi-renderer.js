"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gdjs;
(function (gdjs2) {
  var RuntimeScenePixiRenderer = function () {
    function RuntimeScenePixiRenderer(runtimeScene, runtimeGameRenderer) {
      _classCallCheck(this, RuntimeScenePixiRenderer);

      this._debugDraw = null;
      this._profilerText = null;
      this._pixiRenderer = runtimeGameRenderer ? runtimeGameRenderer.getPIXIRenderer() : null;
      this._runtimeScene = runtimeScene;
      this._pixiContainer = new PIXI.Container();
      this._pixiContainer.sortableChildren = true;
    }

    _createClass(RuntimeScenePixiRenderer, [{
      key: "onGameResolutionResized",
      value: function onGameResolutionResized() {
        if (!this._pixiRenderer) {
          return;
        }
        var runtimeGame = this._runtimeScene.getGame();
        this._pixiContainer.scale.x = this._pixiRenderer.width / runtimeGame.getGameResolutionWidth();
        this._pixiContainer.scale.y = this._pixiRenderer.height / runtimeGame.getGameResolutionHeight();
      }
    }, {
      key: "onSceneUnloaded",
      value: function onSceneUnloaded() {}
    }, {
      key: "render",
      value: function render() {
        if (!this._pixiRenderer) {
          return;
        }
        this._pixiRenderer.backgroundColor = this._runtimeScene.getBackgroundColor();
        this._pixiRenderer.render(this._pixiContainer);
      }
    }, {
      key: "_renderProfileText",
      value: function _renderProfileText() {
        var profiler = this._runtimeScene.getProfiler();
        if (!profiler) {
          return;
        }
        if (!this._profilerText) {
          this._profilerText = new PIXI.Text(" ", {
            align: "left",
            stroke: "#FFF",
            strokeThickness: 1
          });
          this._pixiContainer.addChild(this._profilerText);
        }
        var average = profiler.getFramesAverageMeasures();
        var outputs = [];
        gdjs2.Profiler.getProfilerSectionTexts("All", average, outputs);
        this._profilerText.text = outputs.join("\n");
      }
    }, {
      key: "renderDebugDraw",
      value: function renderDebugDraw(instances, layersCameraCoordinates) {
        if (!this._debugDraw) {
          this._debugDraw = new PIXI.Graphics();
          this._pixiContainer.addChild(this._debugDraw);
        }
        var displayAABB = true;
        var displayHitboxesAndSomePoints = true;
        var debugDraw = this._debugDraw;
        debugDraw.clear();
        debugDraw.beginFill();
        debugDraw.alpha = 0.8;
        debugDraw.lineStyle(2, 255, 1);
        if (displayAABB) {
          for (var i = 0; i < instances.length; i++) {
            var object = instances[i];
            var cameraCoords = layersCameraCoordinates[object.getLayer()];
            var rendererObject = object.getRendererObject();
            if (!cameraCoords || !rendererObject) {
              continue;
            }
            var aabb = object.getAABB();
            debugDraw.fill.alpha = 0.2;
            debugDraw.line.color = 7835368;
            debugDraw.fill.color = 7835368;
            debugDraw.drawRect(aabb.min[0], aabb.min[1], aabb.max[0] - aabb.min[0], aabb.max[1] - aabb.min[1]);
          }
        }
        if (displayHitboxesAndSomePoints) {
          for (var _i = 0; _i < instances.length; _i++) {
            var _object = instances[_i];
            var _cameraCoords = layersCameraCoordinates[_object.getLayer()];
            var _rendererObject = _object.getRendererObject();
            if (!_cameraCoords || !_rendererObject) {
              continue;
            }
            var hitboxes = _object.getHitBoxes();

            var _loop = function _loop(j) {
              var polygon = [];
              hitboxes[j].vertices.forEach(function (point) {
                polygon.push(point[0]);
                polygon.push(point[1]);
              });
              debugDraw.fill.alpha = 0;
              debugDraw.line.color = 15231080;
              debugDraw.drawPolygon(polygon);
            };

            for (var j = 0; j < hitboxes.length; j++) {
              _loop(j);
            }
            debugDraw.fill.alpha = 0.8;
            debugDraw.line.color = 6875240;
            debugDraw.fill.color = 6875240;
            debugDraw.drawCircle(_object.getDrawableX(), _object.getDrawableY(), 3);
            debugDraw.fill.alpha = 0.8;
            debugDraw.line.color = 15263848;
            debugDraw.fill.color = 15263848;
            debugDraw.drawCircle(_object.getDrawableX() + _object.getCenterX(), _object.getDrawableY() + _object.getCenterY(), 3);
          }
        }
        debugDraw.endFill();
      }
    }, {
      key: "hideCursor",
      value: function hideCursor() {
        if (!this._pixiRenderer) {
          return;
        }
        this._pixiRenderer.view.style.cursor = "none";
      }
    }, {
      key: "showCursor",
      value: function showCursor() {
        if (!this._pixiRenderer) {
          return;
        }
        this._pixiRenderer.view.style.cursor = "";
      }
    }, {
      key: "getPIXIContainer",
      value: function getPIXIContainer() {
        return this._pixiContainer;
      }
    }, {
      key: "getPIXIRenderer",
      value: function getPIXIRenderer() {
        return this._pixiRenderer;
      }
    }, {
      key: "setLayerIndex",
      value: function setLayerIndex(layer, index) {
        var layerPixiRenderer = layer.getRenderer();
        var layerPixiObject = layerPixiRenderer.getRendererObject();
        if (layer.isLightingLayer()) {
          layerPixiObject = layerPixiRenderer.getLightingSprite();
        }
        if (!layerPixiObject) {
          return;
        }
        if (this._pixiContainer.children.indexOf(layerPixiObject) === index) {
          return;
        }
        this._pixiContainer.removeChild(layerPixiObject);
        this._pixiContainer.addChildAt(layerPixiObject, index);
      }
    }]);

    return RuntimeScenePixiRenderer;
  }();

  gdjs2.RuntimeScenePixiRenderer = RuntimeScenePixiRenderer;
  gdjs2.RuntimeSceneRenderer = gdjs2.RuntimeScenePixiRenderer;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=runtimescene-pixi-renderer.js.map