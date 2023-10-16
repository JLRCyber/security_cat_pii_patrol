"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gdjs;
(function (gdjs2) {
  var VariablesContainer2 = function () {
    function VariablesContainer2(initialVariablesData) {
      _classCallCheck(this, VariablesContainer2);

      this._variablesArray = [];
      this._variables = new Hashtable();
      if (initialVariablesData !== void 0) {
        this.initFrom(initialVariablesData);
      }
    }

    _createClass(VariablesContainer2, [{
      key: "initFrom",
      value: function initFrom(data, keepOldVariables) {
        if (keepOldVariables === void 0) {
          keepOldVariables = false;
        }
        if (!keepOldVariables) {
          VariablesContainer2._deletedVars = VariablesContainer2._deletedVars || [];
          this._variables.keys(VariablesContainer2._deletedVars);
        }
        var that = this;
        var i = 0;
        for (var j = 0; j < data.length; ++j) {
          var varData = data[j];
          if (!varData.name) continue;
          var variable = that.get(varData.name);
          variable.reinitialize(varData);
          if (!keepOldVariables) {
            if (i < that._variablesArray.length) {
              that._variablesArray[i] = variable;
            } else {
              that._variablesArray.push(variable);
            }
            ++i;
            var idx = VariablesContainer2._deletedVars.indexOf(varData.name);
            if (idx !== -1) {
              VariablesContainer2._deletedVars[idx] = void 0;
            }
          }
        }
        if (!keepOldVariables) {
          this._variablesArray.length = i;
          for (var i2 = 0, len = VariablesContainer2._deletedVars.length; i2 < len; ++i2) {
            var variableName = VariablesContainer2._deletedVars[i2];
            if (variableName !== void 0) {
              this._variables.get(variableName).setUndefinedInContainer();
            }
          }
        }
      }
    }, {
      key: "add",
      value: function add(name, newVariable) {
        var oldVariable = this._variables.get(name);
        this._variables.put(name, newVariable);
        if (oldVariable) {
          var variableIndex = this._variablesArray.indexOf(oldVariable);
          if (variableIndex !== -1) {
            this._variablesArray[variableIndex] = newVariable;
          }
        }
      }
    }, {
      key: "remove",
      value: function remove(name) {
        var variable = this._variables.get(name);
        if (variable) {
          variable.setUndefinedInContainer();
        }
      }
    }, {
      key: "get",
      value: function get(name) {
        var variable = this._variables.get(name);
        if (!variable) {
          variable = new gdjs2.Variable();
          this._variables.put(name, variable);
        } else {
          if (variable.isUndefinedInContainer()) {
            variable.reinitialize();
          }
        }
        return variable;
      }
    }, {
      key: "getFromIndex",
      value: function getFromIndex(id) {
        if (id >= this._variablesArray.length) {
          var variable = new gdjs2.Variable();
          this._variables.put("", variable);
          return variable;
        } else {
          var _variable = this._variablesArray[id];
          if (_variable.isUndefinedInContainer()) {
            _variable.reinitialize();
          }
          return _variable;
        }
      }
    }, {
      key: "has",
      value: function has(name) {
        var variable = this._variables.get(name);
        return variable && !variable.isUndefinedInContainer();
      }
    }]);

    return VariablesContainer2;
  }();
  var VariablesContainer = VariablesContainer2;
  VariablesContainer._deletedVars = [];
  VariablesContainer.badVariablesContainer = {
    _variables: new Hashtable(),
    _variablesArray: [],
    has: function has() {
      return false;
    },
    getFromIndex: function getFromIndex() {
      return VariablesContainer2.badVariable;
    },
    get: function get() {
      return VariablesContainer2.badVariable;
    },
    remove: function remove() {
      return;
    },
    add: function add() {
      return;
    },
    initFrom: function initFrom() {
      return;
    }
  };
  VariablesContainer.badVariable = {
    _type: "number",
    _bool: false,
    _children: {},
    _childrenArray: [],
    _str: "",
    _undefinedInContainer: true,
    _value: 0,
    fromJSON: function fromJSON() {
      return gdjs2.VariablesContainer.badVariable;
    },
    toJSObject: function toJSObject() {
      return 0;
    },
    fromJSObject: function fromJSObject() {
      return gdjs2.VariablesContainer.badVariable;
    },
    reinitialize: function reinitialize() {},
    addChild: function addChild() {
      return gdjs2.VariablesContainer.badVariable;
    },
    castTo: function castTo() {},
    clearChildren: function clearChildren() {},
    clone: function clone() {
      return gdjs2.VariablesContainer.badVariable;
    },
    getChildrenCount: function getChildrenCount() {
      return 0;
    },
    replaceChildren: function replaceChildren() {},
    replaceChildrenArray: function replaceChildrenArray() {},
    getType: function getType() {
      return "number";
    },
    isPrimitive: function isPrimitive() {
      return true;
    },
    setValue: function setValue() {},
    getValue: function getValue() {
      return 0;
    },
    getChild: function getChild() {
      return gdjs2.VariablesContainer.badVariable;
    },
    getChildAt: function getChildAt() {
      return gdjs2.VariablesContainer.badVariable;
    },
    hasChild: function hasChild() {
      return false;
    },
    isStructure: function isStructure() {
      return false;
    },
    isNumber: function isNumber() {
      return true;
    },
    removeChild: function removeChild() {
      return;
    },
    setNumber: function setNumber() {
      return;
    },
    setString: function setString() {
      return;
    },
    setBoolean: function setBoolean() {
      return;
    },
    getAsString: function getAsString() {
      return "0";
    },
    getAsNumber: function getAsNumber() {
      return 0;
    },
    getAsBoolean: function getAsBoolean() {
      return false;
    },
    getAllChildren: function getAllChildren() {
      return {};
    },
    getAllChildrenArray: function getAllChildrenArray() {
      return [];
    },
    pushVariableCopy: function pushVariableCopy() {},
    pushValue: function pushValue() {},
    removeAtIndex: function removeAtIndex() {
      return;
    },
    add: function add() {
      return;
    },
    sub: function sub() {
      return;
    },
    mul: function mul() {
      return;
    },
    div: function div() {
      return;
    },
    concatenate: function concatenate() {
      return;
    },
    concatenateString: function concatenateString() {
      return;
    },
    setUndefinedInContainer: function setUndefinedInContainer() {
      return;
    },
    isUndefinedInContainer: function isUndefinedInContainer() {
      return true;
    }
  };
  gdjs2.VariablesContainer = VariablesContainer;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=variablescontainer.js.map