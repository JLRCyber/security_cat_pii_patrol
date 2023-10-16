"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gdjs;
(function (gdjs2) {
  var SceneStack = function () {
    function SceneStack(runtimeGame) {
      _classCallCheck(this, SceneStack);

      this._stack = [];
      this._wasFirstSceneLoaded = false;
      if (!runtimeGame) {
        throw "SceneStack must be constructed with a gdjs.RuntimeGame.";
      }
      this._runtimeGame = runtimeGame;
    }

    _createClass(SceneStack, [{
      key: "onGameResolutionResized",
      value: function onGameResolutionResized() {
        for (var i = 0; i < this._stack.length; ++i) {
          this._stack[i].onGameResolutionResized();
        }
      }
    }, {
      key: "step",
      value: function step(elapsedTime) {
        if (this._stack.length === 0) {
          return false;
        }
        var currentScene = this._stack[this._stack.length - 1];
        if (currentScene.renderAndStep(elapsedTime)) {
          var request = currentScene.getRequestedChange();
          if (request === gdjs2.SceneChangeRequest.STOP_GAME) {
            this._runtimeGame.getRenderer().stopGame();
            return true;
          } else if (request === gdjs2.SceneChangeRequest.POP_SCENE) {
            this.pop();
          } else if (request === gdjs2.SceneChangeRequest.PUSH_SCENE) {
            this.push(currentScene.getRequestedScene());
          } else if (request === gdjs2.SceneChangeRequest.REPLACE_SCENE) {
            this.replace(currentScene.getRequestedScene());
          } else if (request === gdjs2.SceneChangeRequest.CLEAR_SCENES) {
            this.replace(currentScene.getRequestedScene(), true);
          } else {
            console.error("Unrecognized change in scene stack.");
            return false;
          }
        }
        return true;
      }
    }, {
      key: "renderWithoutStep",
      value: function renderWithoutStep() {
        if (this._stack.length === 0) {
          return false;
        }
        var currentScene = this._stack[this._stack.length - 1];
        currentScene.render();
        return true;
      }
    }, {
      key: "pop",
      value: function pop() {
        if (this._stack.length <= 1) {
          return null;
        }
        var scene = this._stack.pop();
        if (!scene) {
          return null;
        }
        scene.unloadScene();
        var currentScene = this._stack[this._stack.length - 1];
        if (currentScene) {
          currentScene.onResume();
        }
        return scene;
      }
    }, {
      key: "push",
      value: function push(newSceneName, externalLayoutName) {
        var currentScene = this._stack[this._stack.length - 1];
        if (currentScene) {
          currentScene.onPause();
        }
        var newScene = new gdjs2.RuntimeScene(this._runtimeGame);
        newScene.loadFromScene(this._runtimeGame.getSceneData(newSceneName));
        this._wasFirstSceneLoaded = true;
        if (externalLayoutName) {
          var externalLayoutData = this._runtimeGame.getExternalLayoutData(externalLayoutName);
          if (externalLayoutData) {
            newScene.createObjectsFrom(externalLayoutData.instances, 0, 0, true);
          }
        }
        this._stack.push(newScene);
        return newScene;
      }
    }, {
      key: "replace",
      value: function replace(newSceneName, clear) {
        if (!!clear) {
          while (this._stack.length !== 0) {
            var scene = this._stack.pop();
            if (scene) {
              scene.unloadScene();
            }
          }
        } else {
          if (this._stack.length !== 0) {
            var _scene = this._stack.pop();
            if (_scene) {
              _scene.unloadScene();
            }
          }
        }
        return this.push(newSceneName);
      }
    }, {
      key: "getCurrentScene",
      value: function getCurrentScene() {
        if (this._stack.length === 0) {
          return null;
        }
        return this._stack[this._stack.length - 1];
      }
    }, {
      key: "wasFirstSceneLoaded",
      value: function wasFirstSceneLoaded() {
        return this._wasFirstSceneLoaded;
      }
    }]);

    return SceneStack;
  }();

  gdjs2.SceneStack = SceneStack;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=scenestack.js.map