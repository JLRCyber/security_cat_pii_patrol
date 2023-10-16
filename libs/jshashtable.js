"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hashtable = function () {
  function Hashtable() {
    _classCallCheck(this, Hashtable);

    this.items = {};
  }

  _createClass(Hashtable, [{
    key: "put",
    value: function put(key, value) {
      this.items[key] = value;
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.items[key];
    }
  }, {
    key: "containsKey",
    value: function containsKey(key) {
      return this.items.hasOwnProperty(key);
    }
  }, {
    key: "remove",
    value: function remove(key) {
      delete this.items[key];
    }
  }, {
    key: "firstKey",
    value: function firstKey() {
      for (var k in this.items) {
        if (this.items.hasOwnProperty(k)) {
          return k;
        }
      }
      return null;
    }
  }, {
    key: "keys",
    value: function keys(result) {
      result.length = 0;
      for (var k in this.items) {
        if (this.items.hasOwnProperty(k)) {
          result.push(k);
        }
      }
    }
  }, {
    key: "values",
    value: function values(result) {
      result.length = 0;
      for (var k in this.items) {
        if (this.items.hasOwnProperty(k)) {
          result.push(this.items[k]);
        }
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      for (var k in this.items) {
        if (this.items.hasOwnProperty(k)) {
          delete this.items[k];
        }
      }
    }
  }], [{
    key: "newFrom",
    value: function newFrom(items) {
      var hashtable = new Hashtable();
      hashtable.items = items;
      return hashtable;
    }
  }]);

  return Hashtable;
}();
//# sourceMappingURL=jshashtable.js.map