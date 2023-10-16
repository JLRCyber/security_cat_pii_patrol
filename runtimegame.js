"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gdjs;
(function (gdjs2) {
  var RuntimeGame = function () {
    function RuntimeGame(data, options) {
      _classCallCheck(this, RuntimeGame);

      this._notifyScenesForGameResolutionResize = false;
      this._paused = false;
      this._sessionMetricsInitialized = false;
      this._disableMetrics = false;
      this._options = options || {};
      this._variables = new gdjs2.VariablesContainer(data.variables);
      this._data = data;
      this._imageManager = new gdjs2.ImageManager(this._data.resources.resources);
      this._soundManager = new gdjs2.SoundManager(this._data.resources.resources);
      this._fontManager = new gdjs2.FontManager(this._data.resources.resources);
      this._jsonManager = new gdjs2.JsonManager(this._data.resources.resources);
      this._bitmapFontManager = new gdjs2.BitmapFontManager(this._data.resources.resources, this._imageManager);
      this._maxFPS = this._data ? this._data.properties.maxFPS : 60;
      this._minFPS = this._data ? this._data.properties.minFPS : 15;
      this._gameResolutionWidth = this._data.properties.windowWidth;
      this._gameResolutionHeight = this._data.properties.windowHeight;
      this._originalWidth = this._gameResolutionWidth;
      this._originalHeight = this._gameResolutionHeight;
      this._resizeMode = this._data.properties.sizeOnStartupMode;
      this._adaptGameResolutionAtRuntime = this._data.properties.adaptGameResolutionAtRuntime;
      this._scaleMode = data.properties.scaleMode || "linear";
      this._renderer = new gdjs2.RuntimeGameRenderer(this, this._options.forceFullscreen || false);
      this._sceneStack = new gdjs2.SceneStack(this);
      this._inputManager = new gdjs2.InputManager();
      this._injectExternalLayout = this._options.injectExternalLayout || "";
      this._debuggerClient = gdjs2.DebuggerClient ? new gdjs2.DebuggerClient(this) : null;
      this._isPreview = this._options.isPreview || false;
    }

    _createClass(RuntimeGame, [{
      key: "setProjectData",
      value: function setProjectData(projectData) {
        this._data = projectData;
        this._imageManager.setResources(this._data.resources.resources);
        this._soundManager.setResources(this._data.resources.resources);
        this._fontManager.setResources(this._data.resources.resources);
        this._jsonManager.setResources(this._data.resources.resources);
        this._bitmapFontManager.setResources(this._data.resources.resources);
      }
    }, {
      key: "getAdditionalOptions",
      value: function getAdditionalOptions() {
        return this._options;
      }
    }, {
      key: "getRenderer",
      value: function getRenderer() {
        return this._renderer;
      }
    }, {
      key: "getVariables",
      value: function getVariables() {
        return this._variables;
      }
    }, {
      key: "getSoundManager",
      value: function getSoundManager() {
        return this._soundManager;
      }
    }, {
      key: "getImageManager",
      value: function getImageManager() {
        return this._imageManager;
      }
    }, {
      key: "getFontManager",
      value: function getFontManager() {
        return this._fontManager;
      }
    }, {
      key: "getBitmapFontManager",
      value: function getBitmapFontManager() {
        return this._bitmapFontManager;
      }
    }, {
      key: "getInputManager",
      value: function getInputManager() {
        return this._inputManager;
      }
    }, {
      key: "getJsonManager",
      value: function getJsonManager() {
        return this._jsonManager;
      }
    }, {
      key: "getGameData",
      value: function getGameData() {
        return this._data;
      }
    }, {
      key: "getSceneData",
      value: function getSceneData(sceneName) {
        var scene = null;
        for (var i = 0, len = this._data.layouts.length; i < len; ++i) {
          var sceneData = this._data.layouts[i];
          if (sceneName === void 0 || sceneData.name === sceneName) {
            scene = sceneData;
            break;
          }
        }
        if (scene === null) {
          console.warn('The game has no scene called "' + sceneName + '"');
        }
        return scene;
      }
    }, {
      key: "hasScene",
      value: function hasScene(sceneName) {
        var isTrue = false;
        for (var i = 0, len = this._data.layouts.length; i < len; ++i) {
          var sceneData = this._data.layouts[i];
          if (sceneName === void 0 || sceneData.name == sceneName) {
            isTrue = true;
            break;
          }
        }
        return isTrue;
      }
    }, {
      key: "getExternalLayoutData",
      value: function getExternalLayoutData(name) {
        var externalLayout = null;
        for (var i = 0, len = this._data.externalLayouts.length; i < len; ++i) {
          var layoutData = this._data.externalLayouts[i];
          if (layoutData.name === name) {
            externalLayout = layoutData;
            break;
          }
        }
        return externalLayout;
      }
    }, {
      key: "getInitialObjectsData",
      value: function getInitialObjectsData() {
        return this._data.objects || [];
      }
    }, {
      key: "getOriginalWidth",
      value: function getOriginalWidth() {
        return this._originalWidth;
      }
    }, {
      key: "getOriginalHeight",
      value: function getOriginalHeight() {
        return this._originalHeight;
      }
    }, {
      key: "getGameResolutionWidth",
      value: function getGameResolutionWidth() {
        return this._gameResolutionWidth;
      }
    }, {
      key: "getGameResolutionHeight",
      value: function getGameResolutionHeight() {
        return this._gameResolutionHeight;
      }
    }, {
      key: "setGameResolutionSize",
      value: function setGameResolutionSize(width, height) {
        this._gameResolutionWidth = width;
        this._gameResolutionHeight = height;
        if (this._adaptGameResolutionAtRuntime) {
          if (gdjs2.RuntimeGameRenderer && gdjs2.RuntimeGameRenderer.getWindowInnerWidth && gdjs2.RuntimeGameRenderer.getWindowInnerHeight) {
            var windowInnerWidth = gdjs2.RuntimeGameRenderer.getWindowInnerWidth();
            var windowInnerHeight = gdjs2.RuntimeGameRenderer.getWindowInnerHeight();
            var width2 = this._gameResolutionWidth;
            var height2 = this._gameResolutionHeight;
            if (this._resizeMode === "adaptWidth") {
              this._gameResolutionWidth = this._gameResolutionHeight * windowInnerWidth / windowInnerHeight;
            } else {
              if (this._resizeMode === "adaptHeight") {
                this._gameResolutionHeight = this._gameResolutionWidth * windowInnerHeight / windowInnerWidth;
              }
            }
          }
        } else {}
        this._renderer.updateRendererSize();
        this._notifyScenesForGameResolutionResize = true;
      }
    }, {
      key: "setGameResolutionResizeMode",
      value: function setGameResolutionResizeMode(resizeMode) {
        this._resizeMode = resizeMode;
        this._forceGameResolutionUpdate();
      }
    }, {
      key: "getGameResolutionResizeMode",
      value: function getGameResolutionResizeMode() {
        return this._resizeMode;
      }
    }, {
      key: "setAdaptGameResolutionAtRuntime",
      value: function setAdaptGameResolutionAtRuntime(enable) {
        this._adaptGameResolutionAtRuntime = enable;
        this._forceGameResolutionUpdate();
      }
    }, {
      key: "getAdaptGameResolutionAtRuntime",
      value: function getAdaptGameResolutionAtRuntime() {
        return this._adaptGameResolutionAtRuntime;
      }
    }, {
      key: "getMinimalFramerate",
      value: function getMinimalFramerate() {
        return this._minFPS;
      }
    }, {
      key: "getScaleMode",
      value: function getScaleMode() {
        return this._scaleMode;
      }
    }, {
      key: "pause",
      value: function pause(enable) {
        this._paused = enable;
      }
    }, {
      key: "loadAllAssets",
      value: function loadAllAssets(callback, progressCallback) {
        var loadingScreen = new gdjs2.LoadingScreenRenderer(this.getRenderer(), this._data.properties.loadingScreen);
        var allAssetsTotal = this._data.resources.resources.length;
        var that = this;
        this._imageManager.loadTextures(function (count, total) {
          var percent = Math.floor(count / allAssetsTotal * 100);
          loadingScreen.render(percent);
          if (progressCallback) {
            progressCallback(percent);
          }
        }, function (texturesTotalCount) {
          that._soundManager.preloadAudio(function (count, total) {
            var percent = Math.floor((texturesTotalCount + count) / allAssetsTotal * 100);
            loadingScreen.render(percent);
            if (progressCallback) {
              progressCallback(percent);
            }
          }, function (audioTotalCount) {
            that._fontManager.loadFonts(function (count, total) {
              var percent = Math.floor((texturesTotalCount + audioTotalCount + count) / allAssetsTotal * 100);
              loadingScreen.render(percent);
              if (progressCallback) {
                progressCallback(percent);
              }
            }, function (fontTotalCount) {
              that._jsonManager.preloadJsons(function (count, total) {
                var percent = Math.floor((texturesTotalCount + audioTotalCount + fontTotalCount + count) / allAssetsTotal * 100);
                loadingScreen.render(percent);
                if (progressCallback) {
                  progressCallback(percent);
                }
              }, function (jsonTotalCount) {
                that._bitmapFontManager.loadBitmapFontData(function (count) {
                  var percent = Math.floor((texturesTotalCount + audioTotalCount + fontTotalCount + jsonTotalCount + count) / allAssetsTotal * 100);
                  loadingScreen.render(percent);
                  if (progressCallback) progressCallback(percent);
                }).then(function () {
                  loadingScreen.unload();
                  callback();
                });
              });
            });
          });
        });
      }
    }, {
      key: "startGameLoop",
      value: function startGameLoop() {
        var _this = this;

        if (!this.hasScene()) {
          console.log("The game has no scene.");
          return;
        }
        this._forceGameResolutionUpdate();
        var firstSceneName = this._data.firstLayout;
        this._sceneStack.push(this.hasScene(firstSceneName) ? firstSceneName : this.getSceneData().name, this._injectExternalLayout);
        var that = this;
        var accumulatedElapsedTime = 0;
        this._renderer.startGameLoop(function (lastCallElapsedTime) {
          if (that._paused) {
            return true;
          }
          accumulatedElapsedTime += lastCallElapsedTime;
          if (that._maxFPS > 0 && 1e3 / accumulatedElapsedTime > that._maxFPS + 7) {
            return true;
          }
          var elapsedTime = accumulatedElapsedTime;
          accumulatedElapsedTime = 0;
          if (that._notifyScenesForGameResolutionResize) {
            that._sceneStack.onGameResolutionResized();
            that._notifyScenesForGameResolutionResize = false;
          }
          if (that._sceneStack.step(elapsedTime)) {
            that.getInputManager().onFrameEnded();
            return true;
          }
          return false;
        });
        setTimeout(function () {
          _this._setupSessionMetrics();
        }, 1e4);
      }
    }, {
      key: "enableMetrics",
      value: function enableMetrics(enable) {
        this._disableMetrics = !enable;
        if (enable) {
          this._setupSessionMetrics();
        }
      }
    }, {
      key: "_setupSessionMetrics",
      value: function _setupSessionMetrics() {
        var _this2 = this;

        if (this._sessionMetricsInitialized) {
          return;
        }
        if (this._disableMetrics) {
          return;
        }
        if (this.isPreview()) {
          return;
        }
        if (typeof fetch === "undefined") {
          return;
        }
        if (!this._data.properties.projectUuid) {
          return;
        }
        var baseUrl = "https://api.gdevelop-app.com/analytics";
        var playerId = this._makePlayerUuid();
        var sessionId = null;
        var lastSessionHitTime = Date.now();
        fetch(baseUrl + "/session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            gameId: this._data.properties.projectUuid,
            playerId: playerId,
            game: {
              name: this._data.properties.name || "",
              packageName: this._data.properties.packageName || "",
              version: this._data.properties.version || "",
              location: window.location.href
            },
            platform: {
              isCordova: !!window.cordova,
              devicePlatform: typeof device !== "undefined" ? device.platform || "" : "",
              navigatorPlatform: typeof navigator !== "undefined" ? navigator.platform : "",
              hasTouch: typeof navigator !== "undefined" ? !!navigator.maxTouchPoints && navigator.maxTouchPoints > 2 : false
            }
          })
        }).then(function (response) {
          return response.text();
        }).then(function (returnedSessionId) {
          sessionId = returnedSessionId;
        }).catch(function () {});
        var sendSessionHit = function sendSessionHit() {
          if (!sessionId) {
            return;
          }
          if (Date.now() - lastSessionHitTime < 3 * 1e3) {
            return;
          }
          lastSessionHitTime = Date.now();
          navigator.sendBeacon(baseUrl + "/session-hit", JSON.stringify({
            gameId: _this2._data.properties.projectUuid,
            playerId: playerId,
            sessionId: sessionId
          }));
        };
        if (typeof navigator !== "undefined" && typeof document !== "undefined") {
          document.addEventListener("visibilitychange", function () {
            sendSessionHit();
          });
          window.addEventListener("pagehide", function () {
            sendSessionHit();
          }, false);
          var isSafari = (typeof safari === "undefined" ? "undefined" : _typeof(safari)) === "object" && safari.pushNotification;
          var isElectron = /electron/i.test(navigator.userAgent);
          if (isSafari || isElectron) {
            window.addEventListener("beforeunload", function () {
              sendSessionHit();
            });
          }
        }
        this._sessionMetricsInitialized = true;
      }
    }, {
      key: "_makePlayerUuid",
      value: function _makePlayerUuid() {
        try {
          var key = "GDJS-internal-player-uuid";
          var existingPlayerUuid = localStorage.getItem(key);
          if (existingPlayerUuid) {
            return existingPlayerUuid;
          }
          var newPlayerUuid = gdjs2.makeUuid();
          localStorage.setItem(key, newPlayerUuid);
          return newPlayerUuid;
        } catch (err) {
          return gdjs2.makeUuid();
        }
      }
    }, {
      key: "onWindowInnerSizeChanged",
      value: function onWindowInnerSizeChanged() {
        this._forceGameResolutionUpdate();
      }
    }, {
      key: "_forceGameResolutionUpdate",
      value: function _forceGameResolutionUpdate() {
        this.setGameResolutionSize(this._gameResolutionWidth, this._gameResolutionHeight);
      }
    }, {
      key: "startCurrentSceneProfiler",
      value: function startCurrentSceneProfiler(onProfilerStopped) {
        var currentScene = this._sceneStack.getCurrentScene();
        if (!currentScene) {
          return false;
        }
        currentScene.startProfiler(onProfilerStopped);
        return true;
      }
    }, {
      key: "stopCurrentSceneProfiler",
      value: function stopCurrentSceneProfiler() {
        var currentScene = this._sceneStack.getCurrentScene();
        if (!currentScene) {
          return;
        }
        currentScene.stopProfiler();
      }
    }, {
      key: "wasFirstSceneLoaded",
      value: function wasFirstSceneLoaded() {
        return this._sceneStack.wasFirstSceneLoaded();
      }
    }, {
      key: "getSceneStack",
      value: function getSceneStack() {
        return this._sceneStack;
      }
    }, {
      key: "isPreview",
      value: function isPreview() {
        return this._isPreview;
      }
    }, {
      key: "getExtensionProperty",
      value: function getExtensionProperty(extensionName, propertyName) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this._data.properties.extensionProperties[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var property = _step.value;

            if (property.extension === extensionName && property.property === propertyName) {
              return property.value;
            }
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

        return null;
      }
    }]);

    return RuntimeGame;
  }();

  gdjs2.RuntimeGame = RuntimeGame;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=runtimegame.js.map