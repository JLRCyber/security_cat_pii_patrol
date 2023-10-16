"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gdjs;
(function (gdjs2) {
  var FontFaceObserverFontManager = function () {
    function FontFaceObserverFontManager(resources) {
      _classCallCheck(this, FontFaceObserverFontManager);

      this._loadedFontFamily = {};
      this._loadedFonts = {};
      this._filenameToFontFamily = {};
      this._resources = resources;
    }

    _createClass(FontFaceObserverFontManager, [{
      key: "setResources",
      value: function setResources(resources) {
        this._resources = resources;
      }
    }, {
      key: "getFontFamily",
      value: function getFontFamily(resourceName) {
        if (this._loadedFontFamily[resourceName]) {
          return this._loadedFontFamily[resourceName];
        }
        return "Arial";
      }
    }, {
      key: "getFontFile",
      value: function getFontFile(resourceName) {
        if (this._loadedFonts[resourceName]) {
          return this._loadedFonts[resourceName].file || "";
        }
        return resourceName;
      }
    }, {
      key: "_getFontFamilyFromFilename",
      value: function _getFontFamilyFromFilename(filename) {
        if (this._filenameToFontFamily[filename]) {
          return this._filenameToFontFamily[filename];
        }
        var baseSlugifiedName = "gdjs_font_" + filename.toLowerCase().replace(/[^\w]/gi, "-");
        var slugifiedName = baseSlugifiedName;
        var uniqueSuffix = 2;
        while (!!this._filenameToFontFamily[baseSlugifiedName]) {
          baseSlugifiedName = baseSlugifiedName + "-" + uniqueSuffix;
          uniqueSuffix++;
        }
        return this._filenameToFontFamily[filename] = slugifiedName;
      }
    }, {
      key: "loadFonts",
      value: function loadFonts(onProgress, onComplete) {
        var resources = this._resources;
        var filesResources = {};
        for (var i = 0, len = resources.length; i < len; ++i) {
          var res = resources[i];
          if (res.file && res.kind === "font") {
            if (!!this._loadedFonts[res.name]) {
              continue;
            }
            filesResources[res.file] = filesResources[res.file] ? filesResources[res.file].concat(res) : [res];
          }
        }
        var totalCount = Object.keys(filesResources).length;
        if (totalCount === 0) {
          return onComplete(totalCount);
        }
        var loadingCount = 0;
        var that = this;
        function onFontLoaded(fontFamily, fontResources) {
          fontResources.forEach(function (resource) {
            that._loadedFontFamily[resource.name] = fontFamily;
            that._loadedFonts[resource.name] = resource;
          });
          loadingCount++;
          onProgress(loadingCount, totalCount);
          if (loadingCount === totalCount) {
            onComplete(totalCount);
          }
        }
        Object.keys(filesResources).forEach(function (file) {
          var fontFamily = that._getFontFamilyFromFilename(file);
          var fontResources = filesResources[file];
          FontFaceObserverFontManager._loadFont(fontFamily, file).then(function () {
            onFontLoaded(fontFamily, fontResources);
          }, function (error) {
            console.error('Error loading font resource "' + fontResources[0].name + '" (file: ' + file + "): " + (error.message || "Unknown error"));
            onFontLoaded(fontFamily, fontResources);
          });
        });
      }
    }], [{
      key: "_loadFont",
      value: function _loadFont(fontFamily, src) {
        var descriptors = {};
        var srcWithUrl = "url(" + encodeURI(src) + ")";
        if (typeof FontFace !== "undefined") {
          var fontFace = new FontFace(fontFamily, srcWithUrl, descriptors);
          document.fonts.add(fontFace);
          return fontFace.load();
        } else {
          var newStyle = document.createElement("style");
          newStyle.appendChild(document.createTextNode("@font-face { font-family: '" + fontFamily + "'; src: " + srcWithUrl + "; }"));
          document.head.appendChild(newStyle);
          return new FontFaceObserver(fontFamily, descriptors).load();
        }
      }
    }]);

    return FontFaceObserverFontManager;
  }();

  gdjs2.FontFaceObserverFontManager = FontFaceObserverFontManager;
  gdjs2.FontManager = FontFaceObserverFontManager;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=fontfaceobserver-font-manager.js.map