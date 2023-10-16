"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var gdjs;
(function (gdjs2) {
  var BBTextRuntimeObject = function (_gdjs2$RuntimeObject) {
    _inherits(BBTextRuntimeObject, _gdjs2$RuntimeObject);

    function BBTextRuntimeObject(runtimeScene, objectData) {
      _classCallCheck(this, BBTextRuntimeObject);

      var _this = _possibleConstructorReturn(this, (BBTextRuntimeObject.__proto__ || Object.getPrototypeOf(BBTextRuntimeObject)).call(this, runtimeScene, objectData));

      _this._wrappingWidth = 250;
      _this._opacity = parseFloat(objectData.content.opacity);
      _this._text = objectData.content.text;
      _this._color = gdjs2.hexToRGBColor(objectData.content.color);
      _this._fontFamily = objectData.content.fontFamily;
      _this._fontSize = parseFloat(objectData.content.fontSize);
      _this._wordWrap = objectData.content.wordWrap;
      _this._align = objectData.content.align;
      _this._renderer = new gdjs2.BBTextRuntimeObjectRenderer(_this, runtimeScene);
      _this.hidden = !objectData.content.visible;
      _this.onCreated();
      return _this;
    }

    _createClass(BBTextRuntimeObject, [{
      key: "getRendererObject",
      value: function getRendererObject() {
        return this._renderer.getRendererObject();
      }
    }, {
      key: "updateFromObjectData",
      value: function updateFromObjectData(oldObjectData, newObjectData) {
        if (oldObjectData.content.opacity !== newObjectData.content.opacity) {
          this.setOpacity(newObjectData.content.opacity);
        }
        if (oldObjectData.content.visible !== newObjectData.content.visible) {
          this.hide(!newObjectData.content.visible);
        }
        if (oldObjectData.content.text !== newObjectData.content.text) {
          this.setBBText(newObjectData.content.text);
        }
        if (oldObjectData.content.color !== newObjectData.content.color) {
          this._color = gdjs2.hexToRGBColor(newObjectData.content.color);
          this._renderer.updateColor();
        }
        if (oldObjectData.content.fontFamily !== newObjectData.content.fontFamily) {
          this.setFontFamily(newObjectData.content.fontFamily);
        }
        if (oldObjectData.content.fontSize !== newObjectData.content.fontSize) {
          this.setFontSize(newObjectData.content.fontSize);
        }
        if (oldObjectData.content.wordWrap !== newObjectData.content.wordWrap) {
          this.setWordWrap(newObjectData.content.wordWrap);
        }
        if (oldObjectData.content.align !== newObjectData.content.align) {
          this.setAlignment(newObjectData.content.align);
        }
        return true;
      }
    }, {
      key: "extraInitializationFromInitialInstance",
      value: function extraInitializationFromInitialInstance(initialInstanceData) {
        if (initialInstanceData.customSize) {
          this.setWrappingWidth(initialInstanceData.width);
        } else {
          this.setWrappingWidth(250);
        }
      }
    }, {
      key: "onDestroyFromScene",
      value: function onDestroyFromScene(runtimeScene) {
        _get(BBTextRuntimeObject.prototype.__proto__ || Object.getPrototypeOf(BBTextRuntimeObject.prototype), "onDestroyFromScene", this).call(this, runtimeScene);
      }
    }, {
      key: "setBBText",
      value: function setBBText(text) {
        this._text = text;
        this._renderer.updateText();
      }
    }, {
      key: "getBBText",
      value: function getBBText() {
        return this._text;
      }
    }, {
      key: "setColor",
      value: function setColor(rgbColorString) {
        var splitValue = rgbColorString.split(";");
        if (splitValue.length !== 3) {
          return;
        }
        this._color[0] = parseInt(splitValue[0], 10);
        this._color[1] = parseInt(splitValue[1], 10);
        this._color[2] = parseInt(splitValue[2], 10);
        this._renderer.updateColor();
      }
    }, {
      key: "getColor",
      value: function getColor() {
        return this._color[0] + ";" + this._color[1] + ";" + this._color[2];
      }
    }, {
      key: "setFontSize",
      value: function setFontSize(fontSize) {
        this._fontSize = fontSize;
        this._renderer.updateFontSize();
      }
    }, {
      key: "getFontSize",
      value: function getFontSize() {
        return this._fontSize;
      }
    }, {
      key: "setFontFamily",
      value: function setFontFamily(fontFamily) {
        this._fontFamily = fontFamily;
        this._renderer.updateFontFamily();
      }
    }, {
      key: "getFontFamily",
      value: function getFontFamily() {
        return this._fontFamily;
      }
    }, {
      key: "setAlignment",
      value: function setAlignment(align) {
        this._align = align;
        this._renderer.updateAlignment();
      }
    }, {
      key: "getAlignment",
      value: function getAlignment() {
        return this._align;
      }
    }, {
      key: "setX",
      value: function setX(x) {
        _get(BBTextRuntimeObject.prototype.__proto__ || Object.getPrototypeOf(BBTextRuntimeObject.prototype), "setX", this).call(this, x);
        this._renderer.updatePosition();
      }
    }, {
      key: "setY",
      value: function setY(y) {
        _get(BBTextRuntimeObject.prototype.__proto__ || Object.getPrototypeOf(BBTextRuntimeObject.prototype), "setY", this).call(this, y);
        this._renderer.updatePosition();
      }
    }, {
      key: "setAngle",
      value: function setAngle(angle) {
        _get(BBTextRuntimeObject.prototype.__proto__ || Object.getPrototypeOf(BBTextRuntimeObject.prototype), "setAngle", this).call(this, angle);
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
        this._opacity = opacity;
        this._renderer.updateOpacity();
      }
    }, {
      key: "getOpacity",
      value: function getOpacity() {
        return this._opacity;
      }
    }, {
      key: "setWrappingWidth",
      value: function setWrappingWidth(width) {
        if (this._wrappingWidth === width) return;
        this._wrappingWidth = width;
        this._renderer.updateWrappingWidth();
        this.hitBoxesDirty = true;
      }
    }, {
      key: "getWrappingWidth",
      value: function getWrappingWidth() {
        return this._wrappingWidth;
      }
    }, {
      key: "setWordWrap",
      value: function setWordWrap(wordWrap) {
        if (this._wordWrap === wordWrap) return;
        this._wordWrap = wordWrap;
        this._renderer.updateWordWrap();
        this.hitBoxesDirty = true;
      }
    }, {
      key: "getWordWrap",
      value: function getWordWrap() {
        return this._wordWrap;
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
    }]);

    return BBTextRuntimeObject;
  }(gdjs2.RuntimeObject);

  gdjs2.BBTextRuntimeObject = BBTextRuntimeObject;
  gdjs2.registerObject("BBText::BBText", gdjs2.BBTextRuntimeObject);
})(gdjs || (gdjs = {}));
//# sourceMappingURL=bbtextruntimeobject.js.map