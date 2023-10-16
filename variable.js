"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gdjs;
(function (gdjs2) {
  var Variable = function () {
    function Variable(varData) {
      _classCallCheck(this, Variable);

      this._type = "number";
      this._value = 0;
      this._str = "0";
      this._bool = false;
      this._children = {};
      this._childrenArray = [];
      this._undefinedInContainer = false;
      this.reinitialize(varData);
    }

    _createClass(Variable, [{
      key: "reinitialize",
      value: function reinitialize(varData) {
        this._type = "number";
        this._value = 0;
        this._str = "0";
        this._bool = false;
        this._children = {};
        this._childrenArray = [];
        this._undefinedInContainer = false;
        if (varData !== void 0) {
          this._type = varData.type || "number";
          if (this._type === "number") {
            this._value = parseFloat(varData.value || "0");
            if (this._value !== this._value) this._value = 0;
          } else if (this._type === "string") {
            this._str = "" + varData.value || "0";
          } else if (this._type === "boolean") {
            this._bool = !!varData.value;
          } else if (this._type === "structure") {
            if (varData.children !== void 0) {
              for (var i = 0, len = varData.children.length; i < len; ++i) {
                var childData = varData.children[i];
                if (childData.name === void 0) continue;
                this._children[childData.name] = new gdjs2.Variable(childData);
              }
            }
          } else if (this._type === "array" && varData.children) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = varData.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var childData2 = _step.value;

                this._childrenArray.push(new gdjs2.Variable(childData2));
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          }
        }
      }
    }, {
      key: "fromJSObject",
      value: function fromJSObject(obj) {
        if (obj === null) {
          this.setString("null");
        } else if (typeof obj === "number") {
          if (Number.isNaN(obj)) {
            console.warn("Variables cannot be set to NaN, setting it to 0.");
            this.setNumber(0);
          } else {
            this.setNumber(obj);
          }
        } else if (typeof obj === "string") {
          this.setString(obj);
        } else if (typeof obj === "undefined") {} else if (typeof obj === "boolean") {
          this.setBoolean(obj);
        } else if (Array.isArray(obj)) {
          this.castTo("array");
          this.clearChildren();
          for (var i in obj) {
            this.getChild(i).fromJSObject(obj[i]);
          }
        } else if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object") {
          this.castTo("structure");
          this.clearChildren();
          for (var p in obj) {
            if (obj.hasOwnProperty(p)) this.getChild(p).fromJSObject(obj[p]);
          }
        } else if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "symbol") {
          this.setString(obj.toString());
        } else if (typeof obj === "bigint") {
          if (obj > Number.MAX_SAFE_INTEGER) console.warn("Integers bigger than " + Number.MAX_SAFE_INTEGER + " aren't supported by GDevelop variables, it will be reduced to that size.");
          variable.setNumber(parseInt(obj, 10));
        } else if (typeof obj === "function") {
          console.error("Error: Impossible to set variable value to a function.");
        } else {
          console.error("Cannot identify type of object:", obj);
        }
        return this;
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(json) {
        try {
          var obj = JSON.parse(json);
        } catch (e) {
          console.error("Unable to parse JSON: ", json, e);
          return this;
        }
        this.fromJSObject(obj);
        return this;
      }
    }, {
      key: "toJSObject",
      value: function toJSObject() {
        switch (this._type) {
          case "string":
            return this.getAsString();
          case "number":
            return this.getAsNumber();
          case "boolean":
            return this.getAsBoolean();
          case "structure":
            var obj = {};
            for (var name in this._children) {
              obj[name] = this._children[name].toJSObject();
            }return obj;
          case "array":
            var arr = [];
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = this._childrenArray[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var item = _step2.value;

                arr.push(item.toJSObject());
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            return arr;
        }
      }
    }, {
      key: "isPrimitive",
      value: function isPrimitive() {
        return gdjs2.Variable.isPrimitive(this._type);
      }
    }, {
      key: "clone",
      value: function clone() {
        return gdjs2.Variable.copy(this, new gdjs2.Variable());
      }
    }, {
      key: "setUndefinedInContainer",
      value: function setUndefinedInContainer() {
        this._undefinedInContainer = true;
      }
    }, {
      key: "isUndefinedInContainer",
      value: function isUndefinedInContainer() {
        return this._undefinedInContainer;
      }
    }, {
      key: "castTo",
      value: function castTo(newType) {
        if (newType === "string") this.setString(this.getAsString());else if (newType === "number") this.setNumber(this.getAsNumber());else if (newType === "boolean") this.setBoolean(this.getAsBoolean());else if (newType === "structure") {
          if (this._type === "structure") return;
          this._children = this.getAllChildren();
          this._type = "structure";
        } else if (newType === "array") {
          if (this._type === "array") return;
          this._childrenArray = this.getAllChildrenArray();
          this._type = "array";
        }
      }
    }, {
      key: "getChild",
      value: function getChild(childName) {
        if (this.isPrimitive()) this.castTo("structure");
        if (this._type === "array") return this.getChildAt(parseInt(childName, 10) || 0);
        if (this._children[childName] === void 0 || this._children[childName] === null) this._children[childName] = new gdjs2.Variable();
        return this._children[childName];
      }
    }, {
      key: "addChild",
      value: function addChild(childName, childVariable) {
        this.castTo("structure");
        this._children[childName] = childVariable;
        return this;
      }
    }, {
      key: "hasChild",
      value: function hasChild(childName) {
        return this._type === "structure" && this._children.hasOwnProperty(childName);
      }
    }, {
      key: "removeChild",
      value: function removeChild(childName) {
        if (this._type !== "structure") return;
        delete this._children[childName];
      }
    }, {
      key: "clearChildren",
      value: function clearChildren() {
        this._children = {};
        this._childrenArray = [];
      }
    }, {
      key: "replaceChildren",
      value: function replaceChildren(newChildren) {
        this._type = "structure";
        this._children = newChildren;
      }
    }, {
      key: "replaceChildrenArray",
      value: function replaceChildrenArray(newChildren) {
        this._type = "array";
        this._childrenArray = newChildren;
      }
    }, {
      key: "getAsNumber",
      value: function getAsNumber() {
        if (this._type !== "number") {
          var number = 0;
          if (this._type === "string") number = parseFloat(this._str);else if (this._type === "boolean") number = this._bool ? 1 : 0;
          return number === number ? number : 0;
        }
        return this._value;
      }
    }, {
      key: "setNumber",
      value: function setNumber(newValue) {
        this._type = "number";
        newValue = parseFloat(newValue);
        this._value = newValue === newValue ? newValue : 0;
      }
    }, {
      key: "getAsString",
      value: function getAsString() {
        if (this._type !== "string") {
          if (this._type === "number") return this._value.toString();else if (this._type === "boolean") return this._bool ? "true" : "false";else if (this._type === "structure") return "[Structure]";else if (this._type === "array") return "[Array]";else return "";
        }
        return this._str;
      }
    }, {
      key: "setString",
      value: function setString(newValue) {
        this._type = "string";
        this._str = "" + newValue;
      }
    }, {
      key: "getAsBoolean",
      value: function getAsBoolean() {
        if (this._type !== "boolean") {
          if (this._type === "number") return this._value !== 0;else if (this._type === "string") return this._str !== "0" && this._str !== "" && this._str !== "false";else return true;
        }
        return this._bool;
      }
    }, {
      key: "setBoolean",
      value: function setBoolean(newValue) {
        this._type = "boolean";
        this._bool = !!newValue;
      }
    }, {
      key: "setValue",
      value: function setValue(newValue) {
        if (this._type === "string") this.setString(newValue);else if (this._type === "number") this.setNumber(newValue);else if (this._type === "boolean") this.setBoolean(newValue);
      }
    }, {
      key: "getValue",
      value: function getValue() {
        return this._type === "number" ? this.getAsNumber() : this._type === "boolean" ? this.getAsBoolean() : this.getAsString();
      }
    }, {
      key: "isStructure",
      value: function isStructure() {
        return this._type === "structure";
      }
    }, {
      key: "isNumber",
      value: function isNumber() {
        return this._type === "number";
      }
    }, {
      key: "getType",
      value: function getType() {
        return this._type;
      }
    }, {
      key: "getAllChildren",
      value: function getAllChildren() {
        return this._type === "structure" ? this._children : this._type === "array" ? Object.assign({}, this._childrenArray) : {};
      }
    }, {
      key: "getAllChildrenArray",
      value: function getAllChildrenArray() {
        return this._type === "structure" ? Object.values(this._children) : this._type === "array" ? this._childrenArray : [];
      }
    }, {
      key: "getChildrenCount",
      value: function getChildrenCount() {
        return this._type === "structure" ? Object.keys(this._children).length : this._type === "array" ? this._childrenArray.length : 0;
      }
    }, {
      key: "add",
      value: function add(val) {
        this.setNumber(this.getAsNumber() + val);
      }
    }, {
      key: "sub",
      value: function sub(val) {
        this.setNumber(this.getAsNumber() - val);
      }
    }, {
      key: "mul",
      value: function mul(val) {
        this.setNumber(this.getAsNumber() * val);
      }
    }, {
      key: "div",
      value: function div(val) {
        this.setNumber(this.getAsNumber() / val);
      }
    }, {
      key: "concatenateString",
      value: function concatenateString(str) {
        this.setString(this.getAsString() + str);
      }
    }, {
      key: "concatenate",
      value: function concatenate(str) {
        this.setString(this.getAsString() + str);
      }
    }, {
      key: "getChildAt",
      value: function getChildAt(index) {
        this.castTo("array");
        if (this._childrenArray[index] === void 0 || this._childrenArray[index] === null) this._childrenArray[index] = new gdjs2.Variable();
        return this._childrenArray[index];
      }
    }, {
      key: "removeAtIndex",
      value: function removeAtIndex(index) {
        if (this._type === "array") this._childrenArray.splice(index, 1);
      }
    }, {
      key: "pushVariableCopy",
      value: function pushVariableCopy(variable2) {
        this.castTo("array");
        this._childrenArray.push(variable2.clone());
      }
    }, {
      key: "pushValue",
      value: function pushValue(value) {
        this.castTo("array");
        this._childrenArray.push(new gdjs2.Variable({
          type: typeof value === "undefined" ? "undefined" : _typeof(value),
          value: value
        }));
      }
    }], [{
      key: "isPrimitive",
      value: function isPrimitive(type) {
        return type === "string" || type === "number" || type === "boolean";
      }
    }, {
      key: "copy",
      value: function copy(source, target, merge) {
        if (!merge) target.clearChildren();
        target.castTo(source.getType());
        if (source.isPrimitive()) {
          target.setValue(source.getValue());
        } else if (source.getType() === "structure") {
          var children = source.getAllChildren();
          for (var p in children) {
            if (children.hasOwnProperty(p)) target.addChild(p, children[p].clone());
          }
        } else if (source.getType() === "array") {
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = source.getAllChildrenArray()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var _p = _step3.value;

              target.pushVariableCopy(_p);
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        }
        return target;
      }
    }]);

    return Variable;
  }();

  gdjs2.Variable = Variable;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=variable.js.map