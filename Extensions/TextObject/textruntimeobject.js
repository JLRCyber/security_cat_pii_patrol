"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var gdjs;
(function (gdjs2) {
  var TextRuntimeObject = function (_gdjs2$RuntimeObject) {
    _inherits(TextRuntimeObject, _gdjs2$RuntimeObject);

    function TextRuntimeObject(runtimeScene, textObjectData) {
      _classCallCheck(this, TextRuntimeObject);

      var _this = _possibleConstructorReturn(this, (TextRuntimeObject.__proto__ || Object.getPrototypeOf(TextRuntimeObject)).call(this, runtimeScene, textObjectData));

      _this._useGradient = false;
      _this._gradient = [];
      _this._gradientType = "";
      _this.opacity = 255;
      _this._textAlign = "left";
      _this._wrapping = false;
      _this._wrappingWidth = 1;
      _this._outlineThickness = 0;
      _this._outlineColor = [255, 255, 255];
      _this._shadow = false;
      _this._shadowColor = [0, 0, 0];
      _this._shadowDistance = 1;
      _this._shadowBlur = 1;
      _this._shadowAngle = 0;
      _this._padding = 5;
      _this._scaleX = 1;
      _this._scaleY = 1;
      _this._characterSize = Math.max(1, textObjectData.characterSize);
      _this._fontName = textObjectData.font;
      _this._bold = textObjectData.bold;
      _this._italic = textObjectData.italic;
      _this._underlined = textObjectData.underlined;
      _this._color = [textObjectData.color.r, textObjectData.color.g, textObjectData.color.b];
      _this._str = textObjectData.string;
      _this._renderer = new gdjs2.TextRuntimeObjectRenderer(_this, runtimeScene);
      _this.onCreated();
      return _this;
    }

    _createClass(TextRuntimeObject, [{
      key: "updateFromObjectData",
      value: function updateFromObjectData(oldObjectData, newObjectData) {
        if (oldObjectData.characterSize !== newObjectData.characterSize) {
          this.setCharacterSize(newObjectData.characterSize);
        }
        if (oldObjectData.font !== newObjectData.font) {
          this.setFontName(newObjectData.font);
        }
        if (oldObjectData.bold !== newObjectData.bold) {
          this.setBold(newObjectData.bold);
        }
        if (oldObjectData.italic !== newObjectData.italic) {
          this.setItalic(newObjectData.italic);
        }
        if (oldObjectData.color.r !== newObjectData.color.r || oldObjectData.color.g !== newObjectData.color.g || oldObjectData.color.b !== newObjectData.color.b) {
          this.setColor("" + newObjectData.color.r + ";" + newObjectData.color.g + ";" + newObjectData.color.b);
        }
        if (oldObjectData.string !== newObjectData.string) {
          this.setString(newObjectData.string);
        }
        if (oldObjectData.underlined !== newObjectData.underlined) {
          return false;
        }
        return true;
      }
    }, {
      key: "getRendererObject",
      value: function getRendererObject() {
        return this._renderer.getRendererObject();
      }
    }, {
      key: "update",
      value: function update() {
        this._renderer.ensureUpToDate();
      }
    }, {
      key: "extraInitializationFromInitialInstance",
      value: function extraInitializationFromInitialInstance(initialInstanceData) {
        if (initialInstanceData.customSize) {
          this.setWrapping(true);
          this.setWrappingWidth(initialInstanceData.width);
        } else {
          this.setWrapping(false);
        }
      }
    }, {
      key: "_updateTextPosition",
      value: function _updateTextPosition() {
        this.hitBoxesDirty = true;
        this._renderer.updatePosition();
      }
    }, {
      key: "setX",
      value: function setX(x) {
        _get(TextRuntimeObject.prototype.__proto__ || Object.getPrototypeOf(TextRuntimeObject.prototype), "setX", this).call(this, x);
        this._updateTextPosition();
      }
    }, {
      key: "setY",
      value: function setY(y) {
        _get(TextRuntimeObject.prototype.__proto__ || Object.getPrototypeOf(TextRuntimeObject.prototype), "setY", this).call(this, y);
        this._updateTextPosition();
      }
    }, {
      key: "setAngle",
      value: function setAngle(angle) {
        _get(TextRuntimeObject.prototype.__proto__ || Object.getPrototypeOf(TextRuntimeObject.prototype), "setAngle", this).call(this, angle);
        this._renderer.updateAngle();
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
      key: "getString",
      value: function getString() {
        return this._str;
      }
    }, {
      key: "setString",
      value: function setString(str) {
        if (str === this._str) {
          return;
        }
        this._str = str;
        this._renderer.updateString();
        this._updateTextPosition();
      }
    }, {
      key: "getCharacterSize",
      value: function getCharacterSize() {
        return this._characterSize;
      }
    }, {
      key: "setCharacterSize",
      value: function setCharacterSize(newSize) {
        if (newSize <= 1) {
          newSize = 1;
        }
        this._characterSize = newSize;
        this._renderer.updateStyle();
      }
    }, {
      key: "setFontName",
      value: function setFontName(fontResourceName) {
        this._fontName = fontResourceName;
        this._renderer.updateStyle();
      }
    }, {
      key: "isBold",
      value: function isBold() {
        return this._bold;
      }
    }, {
      key: "setBold",
      value: function setBold(enable) {
        this._bold = enable;
        this._renderer.updateStyle();
      }
    }, {
      key: "isItalic",
      value: function isItalic() {
        return this._italic;
      }
    }, {
      key: "setItalic",
      value: function setItalic(enable) {
        this._italic = enable;
        this._renderer.updateStyle();
      }
    }, {
      key: "getWidth",
      value: function getWidth() {
        return this._renderer.getWidth();
      }
    }, {
      key: "getHeight",
      value: function getHeight() {
        return this._renderer.getHeight();
      }
    }, {
      key: "getScale",
      value: function getScale() {
        return (Math.abs(this._scaleX) + Math.abs(this._scaleY)) / 2;
      }
    }, {
      key: "getScaleX",
      value: function getScaleX() {
        return this._scaleX;
      }
    }, {
      key: "getScaleY",
      value: function getScaleY() {
        return this._scaleY;
      }
    }, {
      key: "setScale",
      value: function setScale(newScale) {
        if (this._scaleX === newScale && this._scaleY === newScale) return;
        this._scaleX = newScale;
        this._scaleY = newScale;
        this._renderer.setScale(newScale);
        this.hitBoxesDirty = true;
      }
    }, {
      key: "setScaleX",
      value: function setScaleX(newScale) {
        if (this._scaleX === newScale) return;
        this._scaleX = newScale;
        this._renderer.setScaleX(newScale);
        this.hitBoxesDirty = true;
      }
    }, {
      key: "setScaleY",
      value: function setScaleY(newScale) {
        if (this._scaleY === newScale) return;
        this._scaleY = newScale;
        this._renderer.setScaleY(newScale);
        this.hitBoxesDirty = true;
      }
    }, {
      key: "setColor",
      value: function setColor(str) {
        var color = str.split(";");
        if (color.length < 3) {
          return;
        }
        this._color[0] = parseInt(color[0], 10);
        this._color[1] = parseInt(color[1], 10);
        this._color[2] = parseInt(color[2], 10);
        this._useGradient = false;
        this._renderer.updateStyle();
      }
    }, {
      key: "getColor",
      value: function getColor() {
        return this._color[0] + ";" + this._color[1] + ";" + this._color[2];
      }
    }, {
      key: "setTextAlignment",
      value: function setTextAlignment(alignment) {
        this._textAlign = alignment;
        this._renderer.updateStyle();
      }
    }, {
      key: "getTextAlignment",
      value: function getTextAlignment() {
        return this._textAlign;
      }
    }, {
      key: "isWrapping",
      value: function isWrapping() {
        return this._wrapping;
      }
    }, {
      key: "setWrapping",
      value: function setWrapping(enable) {
        if (this._wrapping === enable) return;
        this._wrapping = enable;
        this._renderer.updateStyle();
        this.hitBoxesDirty = true;
      }
    }, {
      key: "getWrappingWidth",
      value: function getWrappingWidth() {
        return this._wrappingWidth;
      }
    }, {
      key: "setWrappingWidth",
      value: function setWrappingWidth(width) {
        if (width <= 1) {
          width = 1;
        }
        if (this._wrappingWidth === width) return;
        this._wrappingWidth = width;
        this._renderer.updateStyle();
        this.hitBoxesDirty = true;
      }
    }, {
      key: "setOutline",
      value: function setOutline(str, thickness) {
        var color = str.split(";");
        if (color.length < 3) {
          return;
        }
        this._outlineColor[0] = parseInt(color[0], 10);
        this._outlineColor[1] = parseInt(color[1], 10);
        this._outlineColor[2] = parseInt(color[2], 10);
        this._outlineThickness = thickness;
        this._renderer.updateStyle();
      }
    }, {
      key: "setShadow",
      value: function setShadow(str, distance, blur, angle) {
        var color = str.split(";");
        if (color.length < 3) {
          return;
        }
        this._shadowColor[0] = parseInt(color[0], 10);
        this._shadowColor[1] = parseInt(color[1], 10);
        this._shadowColor[2] = parseInt(color[2], 10);
        this._shadowDistance = distance;
        this._shadowBlur = blur;
        this._shadowAngle = angle;
        this._shadow = true;
        this._renderer.updateStyle();
      }
    }, {
      key: "setGradient",
      value: function setGradient(strGradientType, strFirstColor, strSecondColor, strThirdColor, strFourthColor) {
        var colorFirst = strFirstColor.split(";");
        var colorSecond = strSecondColor.split(";");
        var colorThird = strThirdColor.split(";");
        var colorFourth = strFourthColor.split(";");
        this._gradient = [];
        if (colorFirst.length == 3) {
          this._gradient.push([parseInt(colorFirst[0], 10), parseInt(colorFirst[1], 10), parseInt(colorFirst[2], 10)]);
        }
        if (colorSecond.length == 3) {
          this._gradient.push([parseInt(colorSecond[0], 10), parseInt(colorSecond[1], 10), parseInt(colorSecond[2], 10)]);
        }
        if (colorThird.length == 3) {
          this._gradient.push([parseInt(colorThird[0], 10), parseInt(colorThird[1], 10), parseInt(colorThird[2], 10)]);
        }
        if (colorFourth.length == 3) {
          this._gradient.push([parseInt(colorFourth[0], 10), parseInt(colorFourth[1], 10), parseInt(colorFourth[2], 10)]);
        }
        this._gradientType = strGradientType;
        this._useGradient = this._gradient.length > 1 ? true : false;
        this._renderer.updateStyle();
      }
    }, {
      key: "showShadow",
      value: function showShadow(enable) {
        this._shadow = enable;
        this._renderer.updateStyle();
      }
    }, {
      key: "getPadding",
      value: function getPadding() {
        return this._padding;
      }
    }, {
      key: "setPadding",
      value: function setPadding(value) {
        this._padding = value;
        this._renderer.updateStyle();
      }
    }]);

    return TextRuntimeObject;
  }(gdjs2.RuntimeObject);

  gdjs2.TextRuntimeObject = TextRuntimeObject;
  gdjs2.registerObject("TextObject::Text", gdjs2.TextRuntimeObject);
})(gdjs || (gdjs = {}));
//# sourceMappingURL=textruntimeobject.js.map