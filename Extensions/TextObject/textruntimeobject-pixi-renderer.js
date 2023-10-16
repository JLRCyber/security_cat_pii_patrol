"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gdjs;
(function (gdjs2) {
  var TextRuntimeObjectPixiRenderer = function () {
    function TextRuntimeObjectPixiRenderer(runtimeObject, runtimeScene) {
      _classCallCheck(this, TextRuntimeObjectPixiRenderer);

      this._justCreated = true;
      this._object = runtimeObject;
      this._fontManager = runtimeScene.getGame().getFontManager();
      this._text = new PIXI.Text(" ", { align: "left" });
      this._text.anchor.x = 0.5;
      this._text.anchor.y = 0.5;
      runtimeScene.getLayer("").getRenderer().addRendererObject(this._text, runtimeObject.getZOrder());
      this._text.text = runtimeObject._str.length === 0 ? " " : runtimeObject._str;
      this.updateStyle();
      this.updatePosition();
    }

    _createClass(TextRuntimeObjectPixiRenderer, [{
      key: "getRendererObject",
      value: function getRendererObject() {
        return this._text;
      }
    }, {
      key: "ensureUpToDate",
      value: function ensureUpToDate() {
        if (this._justCreated) {
          this._text.updateText(false);
          this.updatePosition();
          this._justCreated = false;
        }
      }
    }, {
      key: "updateStyle",
      value: function updateStyle() {
        var fontName = '"' + this._fontManager.getFontFamily(this._object._fontName) + '"';
        var style = this._text.style;
        style.fontStyle = this._object._italic ? "italic" : "normal";
        style.fontWeight = this._object._bold ? "bold" : "normal";
        style.fontSize = this._object._characterSize;
        style.fontFamily = fontName;
        if (this._object._useGradient) {
          style.fill = this._getGradientHex();
        } else {
          style.fill = this._getColorHex();
        }
        if (this._object._gradientType === "LINEAR_VERTICAL") {
          style.fillGradientType = PIXI.TEXT_GRADIENT.LINEAR_VERTICAL;
        } else {
          style.fillGradientType = PIXI.TEXT_GRADIENT.LINEAR_HORIZONTAL;
        }
        style.align = this._object._textAlign;
        style.wordWrap = this._object._wrapping;
        style.wordWrapWidth = this._object._wrappingWidth;
        style.breakWords = true;
        style.stroke = gdjs2.rgbToHexNumber(this._object._outlineColor[0], this._object._outlineColor[1], this._object._outlineColor[2]);
        style.strokeThickness = this._object._outlineThickness;
        style.dropShadow = this._object._shadow;
        style.dropShadowColor = gdjs2.rgbToHexNumber(this._object._shadowColor[0], this._object._shadowColor[1], this._object._shadowColor[2]);
        style.dropShadowBlur = this._object._shadowBlur;
        style.dropShadowAngle = this._object._shadowAngle;
        style.dropShadowDistance = this._object._shadowDistance;
        style.padding = this._object._padding;
        style.miterLimit = 3;
        this.updatePosition();
        this._text.dirty = true;
      }
    }, {
      key: "updatePosition",
      value: function updatePosition() {
        this._text.position.x = this._object.x + this._text.width / 2;
        this._text.position.y = this._object.y + this._text.height / 2;
      }
    }, {
      key: "updateAngle",
      value: function updateAngle() {
        this._text.rotation = gdjs2.toRad(this._object.angle);
      }
    }, {
      key: "updateOpacity",
      value: function updateOpacity() {
        this._text.alpha = this._object.opacity / 255;
      }
    }, {
      key: "updateString",
      value: function updateString() {
        this._text.text = this._object._str.length === 0 ? " " : this._object._str;
        this._text.updateText(false);
      }
    }, {
      key: "getWidth",
      value: function getWidth() {
        return this._text.width;
      }
    }, {
      key: "getHeight",
      value: function getHeight() {
        return this._text.height;
      }
    }, {
      key: "_getColorHex",
      value: function _getColorHex() {
        return gdjs2.rgbToHexNumber(this._object._color[0], this._object._color[1], this._object._color[2]);
      }
    }, {
      key: "_getGradientHex",
      value: function _getGradientHex() {
        var gradient = [];
        for (var colorIndex = 0; colorIndex < this._object._gradient.length; colorIndex++) {
          gradient.push("#" + gdjs2.rgbToHex(this._object._gradient[colorIndex][0], this._object._gradient[colorIndex][1], this._object._gradient[colorIndex][2]));
        }
        return gradient;
      }
    }, {
      key: "getScaleX",
      value: function getScaleX() {
        return this._text.scale.x;
      }
    }, {
      key: "getScaleY",
      value: function getScaleY() {
        return this._text.scale.y;
      }
    }, {
      key: "setScale",
      value: function setScale(newScale) {
        this._text.scale.x = newScale;
        this._text.scale.y = newScale;
      }
    }, {
      key: "setScaleX",
      value: function setScaleX(newScale) {
        this._text.scale.x = newScale;
      }
    }, {
      key: "setScaleY",
      value: function setScaleY(newScale) {
        this._text.scale.y = newScale;
      }
    }]);

    return TextRuntimeObjectPixiRenderer;
  }();

  gdjs2.TextRuntimeObjectRenderer = TextRuntimeObjectPixiRenderer;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=textruntimeobject-pixi-renderer.js.map