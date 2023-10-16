"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gdjs;
(function (gdjs2) {
  var JsonManager = function () {
    function JsonManager(resources) {
      _classCallCheck(this, JsonManager);

      this._loadedJsons = {};
      this._resources = resources;
    }

    _createClass(JsonManager, [{
      key: "setResources",
      value: function setResources(resources) {
        this._resources = resources;
      }
    }, {
      key: "preloadJsons",
      value: function preloadJsons(onProgress, onComplete) {
        var resources = this._resources;
        var jsonResources = resources.filter(function (resource) {
          return resource.kind === "json" && !resource.disablePreload;
        });
        if (jsonResources.length === 0) {
          return onComplete(jsonResources.length);
        }
        var loaded = 0;
        var onLoad = function onLoad(error) {
          if (error) {
            console.error("Error while preloading a json resource:" + error);
          }
          loaded++;
          if (loaded === jsonResources.length) {
            onComplete(jsonResources.length);
          } else {
            onProgress(loaded, jsonResources.length);
          }
        };
        for (var i = 0; i < jsonResources.length; ++i) {
          this.loadJson(jsonResources[i].name, onLoad);
        }
      }
    }, {
      key: "loadJson",
      value: function loadJson(resourceName, callback) {
        var resource = this._resources.find(function (resource2) {
          return resource2.kind === "json" && resource2.name === resourceName;
        });
        if (!resource) {
          callback(new Error("Can't find resource with name: \"" + resourceName + '" (or is not a json resource).'), null);
          return;
        }
        if (this._loadedJsons[resourceName]) {
          callback(null, this._loadedJsons[resourceName]);
          return;
        }
        var that = this;
        var xhr = new XMLHttpRequest();
        xhr.responseType = "json";
        xhr.open("GET", resource.file);
        xhr.onload = function () {
          if (xhr.status !== 200) {
            callback(new Error("HTTP error: " + xhr.status + "(" + xhr.statusText + ")"), null);
            return;
          }
          that._loadedJsons[resourceName] = xhr.response;
          callback(null, xhr.response);
        };
        xhr.onerror = function () {
          callback(new Error("Network error"), null);
        };
        xhr.onabort = function () {
          callback(new Error("Request aborted"), null);
        };
        xhr.send();
      }
    }, {
      key: "isJsonLoaded",
      value: function isJsonLoaded(resourceName) {
        return !!this._loadedJsons[resourceName];
      }
    }, {
      key: "getLoadedJson",
      value: function getLoadedJson(resourceName) {
        return this._loadedJsons[resourceName] || null;
      }
    }]);

    return JsonManager;
  }();

  gdjs2.JsonManager = JsonManager;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=jsonmanager.js.map