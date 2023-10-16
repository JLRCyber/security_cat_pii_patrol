"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gdjs;
(function (gdjs2) {
  var PixiImageManager = function () {
    function PixiImageManager(resources) {
      _classCallCheck(this, PixiImageManager);

      this._resources = resources;
      this._invalidTexture = PIXI.Texture.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAFElEQVQoU2P8z/D/PwMewDgyFAAApMMX8Zi0uXAAAAAASUVORK5CYIIA");
      this._loadedTextures = new Hashtable();
    }

    _createClass(PixiImageManager, [{
      key: "setResources",
      value: function setResources(resources) {
        this._resources = resources;
      }
    }, {
      key: "getPIXITexture",
      value: function getPIXITexture(resourceName) {
        if (this._loadedTextures.containsKey(resourceName)) {
          return this._loadedTextures.get(resourceName);
        }
        if (resourceName === "") {
          return this._invalidTexture;
        }
        if (this._resources) {
          var texture = null;
          for (var i = 0, len = this._resources.length; i < len; ++i) {
            var res = this._resources[i];
            if (res.name === resourceName && res.kind === "image") {
              texture = PIXI.Texture.from(res.file);
              break;
            }
          }
          if (texture !== null) {
            console.log('Loaded texture for resource "' + resourceName + '".');
            this._loadedTextures.put(resourceName, texture);
            return texture;
          }
        }
        console.warn('Unable to find texture for resource "' + resourceName + '".');
        return this._invalidTexture;
      }
    }, {
      key: "getPIXIVideoTexture",
      value: function getPIXIVideoTexture(resourceName) {
        if (this._loadedTextures.containsKey(resourceName)) {
          return this._loadedTextures.get(resourceName);
        }
        if (resourceName === "") {
          return this._invalidTexture;
        }
        if (this._resources) {
          var texture = null;
          for (var i = 0, len = this._resources.length; i < len; ++i) {
            var res = this._resources[i];
            if (res.name === resourceName && res.kind === "video") {
              texture = PIXI.Texture.from(res.file);
              break;
            }
          }
          if (texture !== null) {
            console.log('Loaded video texture for resource "' + resourceName + '".');
            this._loadedTextures.put(resourceName, texture);
            return texture;
          }
        }
        console.warn('Unable to find video texture for resource "' + resourceName + '".');
        return this._invalidTexture;
      }
    }, {
      key: "getInvalidPIXITexture",
      value: function getInvalidPIXITexture() {
        return this._invalidTexture;
      }
    }, {
      key: "loadTextures",
      value: function loadTextures(onProgress, onComplete) {
        var resources = this._resources;
        var files = {};
        for (var i = 0, len = resources.length; i < len; ++i) {
          var res = resources[i];
          if (res.file && res.kind === "image") {
            if (this._loadedTextures.containsKey(res.name)) {
              continue;
            }
            files[res.file] = files[res.file] ? files[res.file].concat(res) : [res];
          }
        }
        var totalCount = Object.keys(files).length;
        if (totalCount === 0) {
          return onComplete(totalCount);
        }
        var loader = PIXI.Loader.shared;
        var that = this;
        var loadingCount = 0;
        var progressCallbackId = loader.onProgress.add(function () {
          loadingCount++;
          onProgress(loadingCount, totalCount);
        });
        for (var file in files) {
          if (files.hasOwnProperty(file)) {
            loader.add(file, file);
          }
        }
        loader.load(function (loader2, loadedFiles) {
          loader2.onProgress.detach(progressCallbackId);

          var _loop = function _loop(_file) {
            if (loadedFiles.hasOwnProperty(_file)) {
              if (!files.hasOwnProperty(_file)) {
                return "continue";
              }
              files[_file].forEach(function (res) {
                that._loadedTextures.put(res.name, loadedFiles[_file].texture);
                if (!res.smoothed) {
                  loadedFiles[_file].texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
                }
              });
            }
          };

          for (var _file in loadedFiles) {
            var _ret = _loop(_file);

            if (_ret === "continue") continue;
          }
          onComplete(totalCount);
        });
      }
    }]);

    return PixiImageManager;
  }();

  gdjs2.PixiImageManager = PixiImageManager;
  gdjs2.ImageManager = gdjs2.PixiImageManager;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=pixi-image-manager.js.map