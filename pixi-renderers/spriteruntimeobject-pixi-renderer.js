"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gdjs;
(function (gdjs2) {
  var SpriteRuntimeObjectPixiRenderer = function () {
    function SpriteRuntimeObjectPixiRenderer(runtimeObject, runtimeScene) {
      _classCallCheck(this, SpriteRuntimeObjectPixiRenderer);

      this._spriteDirty = true;
      this._textureDirty = true;
      this._cachedWidth = 0;
      this._cachedHeight = 0;
      this._object = runtimeObject;
      if (this._sprite === void 0) {
        this._sprite = new PIXI.Sprite(runtimeScene.getGame().getImageManager().getInvalidPIXITexture());
      }
      var layer = runtimeScene.getLayer("");
      if (layer) {
        layer.getRenderer().addRendererObject(this._sprite, runtimeObject.getZOrder());
      }
    }

    _createClass(SpriteRuntimeObjectPixiRenderer, [{
      key: "reinitialize",
      value: function reinitialize(runtimeObject, runtimeScene) {
        this._object = runtimeObject;
        this._spriteDirty = true;
        this._textureDirty = true;
        var layer = runtimeScene.getLayer("");
        if (layer) {
          layer.getRenderer().addRendererObject(this._sprite, runtimeObject.getZOrder());
        }
      }
    }, {
      key: "getRendererObject",
      value: function getRendererObject() {
        return this._sprite;
      }
    }, {
      key: "_updatePIXISprite",
      value: function _updatePIXISprite() {
        if (this._object._animationFrame !== null) {
          this._sprite.anchor.x = this._object._animationFrame.center.x / this._sprite.texture.frame.width;
          this._sprite.anchor.y = this._object._animationFrame.center.y / this._sprite.texture.frame.height;
          this._sprite.position.x = this._object.x + (this._object._animationFrame.center.x - this._object._animationFrame.origin.x) * Math.abs(this._object._scaleX);
          this._sprite.position.y = this._object.y + (this._object._animationFrame.center.y - this._object._animationFrame.origin.y) * Math.abs(this._object._scaleY);
          this._sprite.rotation = gdjs2.toRad(this._object.angle);
          this._sprite.visible = !this._object.hidden;
          this._sprite.blendMode = this._object._blendMode;
          this._sprite.alpha = this._object.opacity / 255;
          this._sprite.scale.x = this._object._scaleX;
          this._sprite.scale.y = this._object._scaleY;
          this._cachedWidth = Math.abs(this._sprite.width);
          this._cachedHeight = Math.abs(this._sprite.height);
        } else {
          this._sprite.visible = false;
          this._sprite.alpha = 0;
          this._cachedWidth = 0;
          this._cachedHeight = 0;
        }
        this._spriteDirty = false;
      }
    }, {
      key: "ensureUpToDate",
      value: function ensureUpToDate() {
        if (this._spriteDirty) {
          this._updatePIXISprite();
        }
      }
    }, {
      key: "updateFrame",
      value: function updateFrame(animationFrame) {
        this._spriteDirty = true;
        this._sprite.texture = animationFrame.texture;
      }
    }, {
      key: "update",
      value: function update() {
        this._spriteDirty = true;
      }
    }, {
      key: "updateX",
      value: function updateX() {
        var animationFrame = this._object._animationFrame;
        this._sprite.position.x = this._object.x + (animationFrame.center.x - animationFrame.origin.x) * Math.abs(this._object._scaleX);
      }
    }, {
      key: "updateY",
      value: function updateY() {
        var animationFrame = this._object._animationFrame;
        this._sprite.position.y = this._object.y + (animationFrame.center.y - animationFrame.origin.y) * Math.abs(this._object._scaleY);
      }
    }, {
      key: "updateAngle",
      value: function updateAngle() {
        this._sprite.rotation = gdjs2.toRad(this._object.angle);
      }
    }, {
      key: "updateOpacity",
      value: function updateOpacity() {
        this._sprite.alpha = this._object.opacity / 255;
      }
    }, {
      key: "updateVisibility",
      value: function updateVisibility() {
        this._sprite.visible = !this._object.hidden;
      }
    }, {
      key: "setColor",
      value: function setColor(rgbColor) {
        var colors = rgbColor.split(";");
        if (colors.length < 3) {
          return;
        }
        this._sprite.tint = "0x" + gdjs2.rgbToHex(parseInt(colors[0], 10), parseInt(colors[1], 10), parseInt(colors[2], 10));
      }
    }, {
      key: "getColor",
      value: function getColor() {
        var rgb = PIXI.utils.hex2rgb(this._sprite.tint);
        return Math.floor(rgb[0] * 255) + ";" + Math.floor(rgb[1] * 255) + ";" + Math.floor(rgb[2] * 255);
      }
    }, {
      key: "getWidth",
      value: function getWidth() {
        if (this._spriteDirty) {
          this._updatePIXISprite();
        }
        return this._cachedWidth;
      }
    }, {
      key: "getHeight",
      value: function getHeight() {
        if (this._spriteDirty) {
          this._updatePIXISprite();
        }
        return this._cachedHeight;
      }
    }, {
      key: "getUnscaledWidth",
      value: function getUnscaledWidth() {
        return this._sprite.texture.frame.width;
      }
    }, {
      key: "getUnscaledHeight",
      value: function getUnscaledHeight() {
        return this._sprite.texture.frame.height;
      }
    }], [{
      key: "getAnimationFrame",
      value: function getAnimationFrame(imageManager, imageName) {
        return imageManager.getPIXITexture(imageName);
      }
    }, {
      key: "getAnimationFrameWidth",
      value: function getAnimationFrameWidth(pixiTexture) {
        return pixiTexture.width;
      }
    }, {
      key: "getAnimationFrameHeight",
      value: function getAnimationFrameHeight(pixiTexture) {
        return pixiTexture.height;
      }
    }]);

    return SpriteRuntimeObjectPixiRenderer;
  }();

  gdjs2.SpriteRuntimeObjectPixiRenderer = SpriteRuntimeObjectPixiRenderer;
  gdjs2.SpriteRuntimeObjectRenderer = SpriteRuntimeObjectPixiRenderer;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=spriteruntimeobject-pixi-renderer.js.map