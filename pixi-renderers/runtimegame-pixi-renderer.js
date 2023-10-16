"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gdjs;
(function (gdjs2) {
  var RuntimeGamePixiRenderer = function () {
    function RuntimeGamePixiRenderer(game, forceFullscreen) {
      _classCallCheck(this, RuntimeGamePixiRenderer);

      this._isFullPage = true;
      this._isFullscreen = false;
      this._pixiRenderer = null;
      this._canvasWidth = 0;
      this._canvasHeight = 0;
      this._keepRatio = true;
      this._game = game;
      this._forceFullscreen = forceFullscreen;
      this._marginLeft = this._marginTop = this._marginRight = this._marginBottom = 0;
      this._setupOrientation();
    }

    _createClass(RuntimeGamePixiRenderer, [{
      key: "createStandardCanvas",
      value: function createStandardCanvas(parentElement) {
        this._pixiRenderer = PIXI.autoDetectRenderer({
          width: this._game.getGameResolutionWidth(),
          height: this._game.getGameResolutionHeight(),
          preserveDrawingBuffer: true,
          antialias: false
        });
        parentElement.appendChild(this._pixiRenderer.view);
        this._pixiRenderer.view.style["position"] = "absolute";
        this._pixiRenderer.view.tabIndex = 1;
        this._resizeCanvas();
        if (this._game.getScaleMode() === "nearest") {
          this._pixiRenderer.view.style["image-rendering"] = "-moz-crisp-edges";
          this._pixiRenderer.view.style["image-rendering"] = "-webkit-optimize-contrast";
          this._pixiRenderer.view.style["image-rendering"] = "-webkit-crisp-edges";
          this._pixiRenderer.view.style["image-rendering"] = "pixelated";
        }
        var that = this;
        window.addEventListener("resize", function () {
          that._game.onWindowInnerSizeChanged();
          that._resizeCanvas();
          that._game._notifySceneForResize = true;
        });
        return this._pixiRenderer;
      }
    }, {
      key: "updateRendererSize",
      value: function updateRendererSize() {
        this._resizeCanvas();
      }
    }, {
      key: "_setupOrientation",
      value: function _setupOrientation() {
        if (typeof window === "undefined" || !window.screen || !window.screen.orientation) {
          return;
        }
        var gameOrientation = this._game.getGameData().properties.orientation;
        try {
          if (gameOrientation === "default") {
            var promise = window.screen.orientation.unlock();
            if (promise) {
              promise.catch(function () {});
            }
          } else {
            window.screen.orientation.lock(gameOrientation).catch(function () {});
          }
        } catch (error) {
          console.error("Unexpected error while setting up orientation: ", error);
        }
      }
    }, {
      key: "_resizeCanvas",
      value: function _resizeCanvas() {
        if (!this._pixiRenderer) return;
        if (this._pixiRenderer.width !== this._game.getGameResolutionWidth() || this._pixiRenderer.height !== this._game.getGameResolutionHeight()) {
          this._pixiRenderer.resize(this._game.getGameResolutionWidth(), this._game.getGameResolutionHeight());
        }
        var isFullPage = this._forceFullscreen || this._isFullPage || this._isFullscreen;
        var canvasWidth = this._game.getGameResolutionWidth();
        var canvasHeight = this._game.getGameResolutionHeight();
        var maxWidth = window.innerWidth - this._marginLeft - this._marginRight;
        var maxHeight = window.innerHeight - this._marginTop - this._marginBottom;
        if (maxWidth < 0) {
          maxWidth = 0;
        }
        if (maxHeight < 0) {
          maxHeight = 0;
        }
        if (isFullPage && !this._keepRatio) {
          canvasWidth = maxWidth;
          canvasHeight = maxHeight;
        } else {
          if (isFullPage && this._keepRatio || canvasWidth > maxWidth || canvasHeight > maxHeight) {
            var factor = maxWidth / canvasWidth;
            if (canvasHeight * factor > maxHeight) {
              factor = maxHeight / canvasHeight;
            }
            canvasWidth *= factor;
            canvasHeight *= factor;
          }
        }
        this._pixiRenderer.view.style["top"] = this._marginTop + (maxHeight - canvasHeight) / 2 + "px";
        this._pixiRenderer.view.style["left"] = this._marginLeft + (maxWidth - canvasWidth) / 2 + "px";
        this._pixiRenderer.view.style.width = canvasWidth + "px";
        this._pixiRenderer.view.style.height = canvasHeight + "px";
        this._canvasWidth = canvasWidth;
        this._canvasHeight = canvasHeight;
      }
    }, {
      key: "keepAspectRatio",
      value: function keepAspectRatio(enable) {
        if (this._keepRatio === enable) {
          return;
        }
        this._keepRatio = enable;
        this._resizeCanvas();
        this._game._notifySceneForResize = true;
      }
    }, {
      key: "setMargins",
      value: function setMargins(top, right, bottom, left) {
        if (this._marginTop === top && this._marginRight === right && this._marginBottom === bottom && this._marginLeft === left) {
          return;
        }
        this._marginTop = top;
        this._marginRight = right;
        this._marginBottom = bottom;
        this._marginLeft = left;
        this._resizeCanvas();
        this._game._notifySceneForResize = true;
      }
    }, {
      key: "setWindowSize",
      value: function setWindowSize(width, height) {
        var electron = this.getElectron();
        if (electron) {
          var browserWindow = electron.remote.getCurrentWindow();
          if (browserWindow) {
            browserWindow.setContentSize(width, height);
          }
        } else {
          console.warn("Window size can't be changed on this platform.");
        }
      }
    }, {
      key: "centerWindow",
      value: function centerWindow() {
        var electron = this.getElectron();
        if (electron) {
          var browserWindow = electron.remote.getCurrentWindow();
          if (browserWindow) {
            browserWindow.center();
          }
        } else {}
      }
    }, {
      key: "setFullScreen",
      value: function setFullScreen(enable) {
        if (this._forceFullscreen) {
          return;
        }
        if (this._isFullscreen !== enable) {
          this._isFullscreen = !!enable;
          var electron = this.getElectron();
          if (electron) {
            var browserWindow = electron.remote.getCurrentWindow();
            if (browserWindow) {
              browserWindow.setFullScreen(this._isFullscreen);
            }
          } else {
            if (this._isFullscreen) {
              if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
              } else {
                if (document.documentElement.mozRequestFullScreen) {
                  document.documentElement.mozRequestFullScreen();
                } else {
                  if (document.documentElement.webkitRequestFullScreen) {
                    document.documentElement.webkitRequestFullScreen();
                  }
                }
              }
            } else {
              if (document.exitFullscreen) {
                document.exitFullscreen();
              } else {
                if (document.mozCancelFullScreen) {
                  document.mozCancelFullScreen();
                } else {
                  if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                  }
                }
              }
            }
          }
          this._resizeCanvas();
          this._notifySceneForResize = true;
        }
      }
    }, {
      key: "isFullScreen",
      value: function isFullScreen() {
        var electron = this.getElectron();
        if (electron) {
          return electron.remote.getCurrentWindow().isFullScreen();
        }
        return this._isFullscreen || window.screen.height === window.innerHeight;
      }
    }, {
      key: "bindStandardEvents",
      value: function bindStandardEvents(manager, window2, document2) {
        var renderer = this._pixiRenderer;
        if (!renderer) return;
        var canvas = renderer.view;
        var that = this;
        function getEventPosition(e) {
          var pos = [0, 0];
          if (e.pageX) {
            pos[0] = e.pageX - canvas.offsetLeft;
            pos[1] = e.pageY - canvas.offsetTop;
          } else {
            pos[0] = e.clientX + document2.body.scrollLeft + document2.documentElement.scrollLeft - canvas.offsetLeft;
            pos[1] = e.clientY + document2.body.scrollTop + document2.documentElement.scrollTop - canvas.offsetTop;
          }
          pos[0] *= that._game.getGameResolutionWidth() / (that._canvasWidth || 1);
          pos[1] *= that._game.getGameResolutionHeight() / (that._canvasHeight || 1);
          return pos;
        }
        (function ensureOffsetsExistence() {
          if (isNaN(canvas.offsetLeft)) {
            canvas.offsetLeft = 0;
            canvas.offsetTop = 0;
          }
          if (isNaN(document2.body.scrollLeft)) {
            document2.body.scrollLeft = 0;
            document2.body.scrollTop = 0;
          }
          if (document2.documentElement === void 0 || document2.documentElement === null) {
            document2.documentElement = {};
          }
          if (isNaN(document2.documentElement.scrollLeft)) {
            document2.documentElement.scrollLeft = 0;
            document2.documentElement.scrollTop = 0;
          }
          if (isNaN(canvas.offsetLeft)) {
            canvas.offsetLeft = 0;
            canvas.offsetTop = 0;
          }
        })();
        document2.onkeydown = function (e) {
          manager.onKeyPressed(e.keyCode, e.location);
        };
        document2.onkeyup = function (e) {
          manager.onKeyReleased(e.keyCode, e.location);
        };
        renderer.view.onmousemove = function (e) {
          var pos = getEventPosition(e);
          manager.onMouseMove(pos[0], pos[1]);
        };
        renderer.view.onmousedown = function (e) {
          manager.onMouseButtonPressed(e.button === 2 ? gdjs2.InputManager.MOUSE_RIGHT_BUTTON : e.button === 1 ? gdjs2.InputManager.MOUSE_MIDDLE_BUTTON : gdjs2.InputManager.MOUSE_LEFT_BUTTON);
          if (window2.focus !== void 0) {
            window2.focus();
          }
          return false;
        };
        renderer.view.onmouseup = function (e) {
          manager.onMouseButtonReleased(e.button === 2 ? gdjs2.InputManager.MOUSE_RIGHT_BUTTON : e.button === 1 ? gdjs2.InputManager.MOUSE_MIDDLE_BUTTON : gdjs2.InputManager.MOUSE_LEFT_BUTTON);
          return false;
        };
        window2.addEventListener("click", function (e) {
          if (window2.focus !== void 0) {
            window2.focus();
          }
          e.preventDefault();
          return false;
        }, false);
        renderer.view.oncontextmenu = function (event) {
          event.preventDefault();
          event.stopPropagation();
          return false;
        };
        renderer.view.onwheel = function (event) {
          manager.onMouseWheel(-event.deltaY);
        };
        window2.addEventListener("touchmove", function (e) {
          e.preventDefault();
          if (e.changedTouches) {
            for (var i = 0; i < e.changedTouches.length; ++i) {
              var pos = getEventPosition(e.changedTouches[i]);
              manager.onTouchMove(e.changedTouches[i].identifier, pos[0], pos[1]);
            }
          }
        });
        window2.addEventListener("touchstart", function (e) {
          e.preventDefault();
          if (e.changedTouches) {
            for (var i = 0; i < e.changedTouches.length; ++i) {
              var pos = getEventPosition(e.changedTouches[i]);
              manager.onTouchStart(e.changedTouches[i].identifier, pos[0], pos[1]);
            }
          }
          return false;
        });
        window2.addEventListener("touchend", function (e) {
          e.preventDefault();
          if (e.changedTouches) {
            for (var i = 0; i < e.changedTouches.length; ++i) {
              var pos = getEventPosition(e.changedTouches[i]);
              manager.onTouchEnd(e.changedTouches[i].identifier);
            }
          }
          return false;
        });
      }
    }, {
      key: "setWindowTitle",
      value: function setWindowTitle(title) {
        if (typeof document !== "undefined") {
          document.title = title;
        }
      }
    }, {
      key: "getWindowTitle",
      value: function getWindowTitle() {
        return typeof document !== "undefined" ? document.title : "";
      }
    }, {
      key: "startGameLoop",
      value: function startGameLoop(fn) {
        requestAnimationFrame(gameLoop);
        var oldTime = 0;
        function gameLoop(time) {
          var dt = oldTime ? time - oldTime : 0;
          oldTime = time;
          if (fn(dt)) {
            requestAnimationFrame(gameLoop);
          }
        }
      }
    }, {
      key: "getPIXIRenderer",
      value: function getPIXIRenderer() {
        return this._pixiRenderer;
      }
    }, {
      key: "openURL",
      value: function openURL(url) {
        if (typeof window !== "undefined") {
          var electron = this.getElectron();
          if (electron) {
            electron.shell.openExternal(url);
          } else {
            var target = window.cordova ? "_system" : "_blank";
            window.open(url, target);
          }
        }
      }
    }, {
      key: "stopGame",
      value: function stopGame() {
        var electron = this.getElectron();
        if (electron) {
          var browserWindow = electron.remote.getCurrentWindow();
          if (browserWindow) {
            browserWindow.close();
          }
        } else {
          if (typeof navigator !== "undefined" && navigator.app && navigator.app.exitApp) {
            navigator.app.exitApp();
          }
        }
      }
    }, {
      key: "getCanvas",
      value: function getCanvas() {
        return this._pixiRenderer.view;
      }
    }, {
      key: "isWebGLSupported",
      value: function isWebGLSupported() {
        return !!this._pixiRenderer && this._pixiRenderer.type === PIXI.RENDERER_TYPE.WEBGL;
      }
    }, {
      key: "getElectron",
      value: function getElectron() {
        if (typeof require !== "undefined") {
          return require("electron");
        }
        return null;
      }
    }], [{
      key: "getWindowInnerWidth",
      value: function getWindowInnerWidth() {
        return typeof window !== "undefined" ? window.innerWidth : 800;
      }
    }, {
      key: "getWindowInnerHeight",
      value: function getWindowInnerHeight() {
        return typeof window !== "undefined" ? window.innerHeight : 800;
      }
    }]);

    return RuntimeGamePixiRenderer;
  }();

  gdjs2.RuntimeGamePixiRenderer = RuntimeGamePixiRenderer;
  gdjs2.RuntimeGameRenderer = RuntimeGamePixiRenderer;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=runtimegame-pixi-renderer.js.map