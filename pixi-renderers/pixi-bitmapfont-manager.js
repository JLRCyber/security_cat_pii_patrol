"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gdjs;
(function (gdjs2) {
  //var PIXI = GlobalPIXIModule.PIXI;
  var defaultBitmapFontKey = "GDJS-DEFAULT-BITMAP-FONT";
  var uninstallCacheSize = 5;
  var patchInstalledBitmapFont = function patchInstalledBitmapFont(bitmapFont, bitmapFontInstallKey) {
    var defaultName = bitmapFont.font;
    bitmapFont.font = bitmapFontInstallKey;
    PIXI.BitmapFont.available[bitmapFontInstallKey] = bitmapFont;
    delete PIXI.BitmapFont.available[defaultName];
    return PIXI.BitmapFont.available[bitmapFontInstallKey];
  };

  var PixiBitmapFontManager = function () {
    function PixiBitmapFontManager(resources, imageManager) {
      _classCallCheck(this, PixiBitmapFontManager);

      this._pixiBitmapFontsInUse = {};
      this._pixiBitmapFontsToUninstall = [];
      this._loadedFontsData = {};
      this._defaultSlugFontName = null;
      this._resources = resources;
      this._imageManager = imageManager;
    }

    _createClass(PixiBitmapFontManager, [{
      key: "getDefaultBitmapFont",
      value: function getDefaultBitmapFont() {
        if (this._defaultSlugFontName !== null) {
          return PIXI.BitmapFont.available[this._defaultSlugFontName];
        }
        var fontFamily = "Arial";
        var bitmapFontStyle = new PIXI.TextStyle({
          fontFamily: fontFamily,
          fontSize: 20,
          padding: 5,
          align: "left",
          fill: "#ffffff",
          wordWrap: true,
          lineHeight: 20
        });
        var defaultBitmapFont = patchInstalledBitmapFont(PIXI.BitmapFont.from(fontFamily, bitmapFontStyle, {
          chars: [[" ", "~"]]
        }), defaultBitmapFontKey);
        this._defaultSlugFontName = defaultBitmapFont.font;
        return defaultBitmapFont;
      }
    }, {
      key: "setResources",
      value: function setResources(resources) {
        this._resources = resources;
      }
    }, {
      key: "_markBitmapFontAsUsed",
      value: function _markBitmapFontAsUsed(bitmapFontInstallKey) {
        this._pixiBitmapFontsInUse[bitmapFontInstallKey] = this._pixiBitmapFontsInUse[bitmapFontInstallKey] || {
          objectsUsingTheFont: 0
        };
        this._pixiBitmapFontsInUse[bitmapFontInstallKey].objectsUsingTheFont++;
        for (var i = 0; i < this._pixiBitmapFontsToUninstall.length;) {
          if (this._pixiBitmapFontsToUninstall[i] === bitmapFontInstallKey) {
            this._pixiBitmapFontsToUninstall.splice(i, 1);
          } else {
            i++;
          }
        }
      }
    }, {
      key: "releaseBitmapFont",
      value: function releaseBitmapFont(bitmapFontInstallKey) {
        if (bitmapFontInstallKey === defaultBitmapFontKey) {
          return;
        }
        if (!this._pixiBitmapFontsInUse[bitmapFontInstallKey]) {
          console.error("BitmapFont with name " + bitmapFontInstallKey + " was tried to be released but was never marked as used.");
          return;
        }
        this._pixiBitmapFontsInUse[bitmapFontInstallKey].objectsUsingTheFont--;
        if (this._pixiBitmapFontsInUse[bitmapFontInstallKey].objectsUsingTheFont === 0) {
          delete this._pixiBitmapFontsInUse[bitmapFontInstallKey];
          if (!this._pixiBitmapFontsToUninstall.includes(bitmapFontInstallKey)) {
            this._pixiBitmapFontsToUninstall.push(bitmapFontInstallKey);
          }
          if (this._pixiBitmapFontsToUninstall.length > uninstallCacheSize) {
            var oldestUnloadedPixiBitmapFontName = this._pixiBitmapFontsToUninstall.shift();
            PIXI.BitmapFont.uninstall(oldestUnloadedPixiBitmapFontName);
            console.log('Uninstalled BitmapFont "' + oldestUnloadedPixiBitmapFontName + '" from memory.');
          }
        }
      }
    }, {
      key: "obtainBitmapFont",
      value: function obtainBitmapFont(bitmapFontResourceName, textureAtlasResourceName) {
        var bitmapFontInstallKey = bitmapFontResourceName + "@" + textureAtlasResourceName;
        if (PIXI.BitmapFont.available[bitmapFontInstallKey]) {
          this._markBitmapFontAsUsed(bitmapFontInstallKey);
          return PIXI.BitmapFont.available[bitmapFontInstallKey];
        }
        var fontData = this._loadedFontsData[bitmapFontResourceName];
        if (!fontData) {
          console.warn('Could not find Bitmap Font for resource named "' + bitmapFontResourceName + '". The default font will be used.');
          return this.getDefaultBitmapFont();
        }
        var texture = this._imageManager.getPIXITexture(textureAtlasResourceName);
        try {
          var bitmapFont = patchInstalledBitmapFont(PIXI.BitmapFont.install(fontData, texture), bitmapFontInstallKey);
          this._markBitmapFontAsUsed(bitmapFontInstallKey);
          return bitmapFont;
        } catch (error) {
          console.warn('Could not load the Bitmap Font for resource named "' + bitmapFontResourceName + '". The default font will be used. Error is: ' + error);
          return this.getDefaultBitmapFont();
        }
      }
    }, {
      key: "loadBitmapFontData",
      value: function loadBitmapFontData(onProgress) {
        var _this = this;

        var bitmapFontResources = this._resources.filter(function (resource) {
          return resource.kind === "bitmapFont" && !resource.disablePreload;
        });
        if (bitmapFontResources.length === 0) {
          return Promise.resolve([]);
        }
        var loadedCount = 0;
        return Promise.all(bitmapFontResources.map(function (bitmapFontResource) {
          return fetch(bitmapFontResource.file).then(function (response) {
            return response.text();
          }).then(function (fontData) {
            _this._loadedFontsData[bitmapFontResource.name] = fontData;
          }).catch(function (error) {
            console.error("Can't fetch the bitmap font file " + bitmapFontResource.file + ", error: " + error);
          }).then(function () {
            loadedCount++;
            onProgress(loadedCount, bitmapFontResources.length);
          });
        }));
      }
    }]);

    return PixiBitmapFontManager;
  }();

  gdjs2.PixiBitmapFontManager = PixiBitmapFontManager;
  gdjs2.BitmapFontManager = gdjs2.PixiBitmapFontManager;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=pixi-bitmapfont-manager.js.map