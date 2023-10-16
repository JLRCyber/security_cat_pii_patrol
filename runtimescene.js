"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gdjs;
(function (gdjs2) {
  var RuntimeScene = function () {
    function RuntimeScene(runtimeGame) {
      _classCallCheck(this, RuntimeScene);

      this._eventsFunction = null;
      this._lastId = 0;
      this._name = "";
      this._gameStopRequested = false;
      this._requestedScene = "";
      this._isLoaded = false;
      this._isJustResumed = false;
      this._backgroundColor = 0;
      this._allInstancesList = [];
      this._layersCameraCoordinates = {};
      this._instancesRemoved = [];
      this._profiler = null;
      this._debugDrawEnabled = false;
      this._debugDrawShowHiddenInstances = false;
      this._debugDrawShowPointsNames = false;
      this._debugDrawShowCustomPoints = false;
      this._onProfilerStopped = null;
      this._instances = new Hashtable();
      this._instancesCache = new Hashtable();
      this._objects = new Hashtable();
      this._objectsCtor = new Hashtable();
      this._layers = new Hashtable();
      this._initialBehaviorSharedData = new Hashtable();
      this._renderer = new gdjs2.RuntimeSceneRenderer(this, runtimeGame ? runtimeGame.getRenderer() : null);
      this._variables = new gdjs2.VariablesContainer();
      this._runtimeGame = runtimeGame;
      this._timeManager = new gdjs2.TimeManager();
      this._requestedChange = SceneChangeRequest.CONTINUE;
      this._onceTriggers = new gdjs2.OnceTriggers();
      this.onGameResolutionResized();
    }

    _createClass(RuntimeScene, [{
      key: "enableDebugDraw",
      value: function enableDebugDraw(_enableDebugDraw, showHiddenInstances, showPointsNames, showCustomPoints) {
        if (this._debugDrawEnabled && !_enableDebugDraw) {
          this.getRenderer().clearDebugDraw();
        }
        this._debugDrawEnabled = _enableDebugDraw;
        this._debugDrawShowHiddenInstances = showHiddenInstances;
        this._debugDrawShowPointsNames = showPointsNames;
        this._debugDrawShowCustomPoints = showCustomPoints;
      }
    }, {
      key: "onGameResolutionResized",
      value: function onGameResolutionResized() {
        for (var name in this._layers.items) {
          if (this._layers.items.hasOwnProperty(name)) {
            var theLayer = this._layers.items[name];
            theLayer.onGameResolutionResized();
          }
        }
        this._renderer.onGameResolutionResized();
      }
    }, {
      key: "loadFromScene",
      value: function loadFromScene(sceneData) {
        if (!sceneData) {
          console.error("loadFromScene was called without a scene");
          return;
        }
        if (this._isLoaded) {
          this.unloadScene();
        }
        if (this._runtimeGame) {
          this._runtimeGame.getRenderer().setWindowTitle(sceneData.title);
        }
        this._name = sceneData.name;
        this.setBackgroundColor(sceneData.r, sceneData.v, sceneData.b);
        for (var i = 0, len = sceneData.layers.length; i < len; ++i) {
          this.addLayer(sceneData.layers[i]);
        }
        this._variables = new gdjs2.VariablesContainer(sceneData.variables);
        for (var _i = 0, _len = sceneData.behaviorsSharedData.length; _i < _len; ++_i) {
          var behaviorSharedData = sceneData.behaviorsSharedData[_i];
          this.setInitialSharedDataForBehavior(behaviorSharedData.name, behaviorSharedData);
        }
        var initialGlobalObjectsData = this.getGame().getInitialObjectsData();
        for (var _i2 = 0, _len2 = initialGlobalObjectsData.length; _i2 < _len2; ++_i2) {
          this.registerObject(initialGlobalObjectsData[_i2]);
        }
        for (var _i3 = 0, _len3 = sceneData.objects.length; _i3 < _len3; ++_i3) {
          this.registerObject(sceneData.objects[_i3]);
        }
        this.createObjectsFrom(sceneData.instances, 0, 0, true);
        this._setLayerDefaultZOrders();
        this.setEventsGeneratedCodeFunction(sceneData);
        this._onceTriggers = new gdjs2.OnceTriggers();
        if (this._runtimeGame && !this._runtimeGame.wasFirstSceneLoaded()) {
          for (var _i4 = 0; _i4 < gdjs2.callbacksFirstRuntimeSceneLoaded.length; ++_i4) {
            gdjs2.callbacksFirstRuntimeSceneLoaded[_i4](this);
          }
        }
        for (var _i5 = 0; _i5 < gdjs2.callbacksRuntimeSceneLoaded.length; ++_i5) {
          gdjs2.callbacksRuntimeSceneLoaded[_i5](this);
        }
        if (sceneData.stopSoundsOnStartup && this._runtimeGame) {
          this._runtimeGame.getSoundManager().clearAll();
        }
        this._isLoaded = true;
        this._timeManager.reset();
      }
    }, {
      key: "isObjectRegistered",
      value: function isObjectRegistered(objectName) {
        return this._objects.containsKey(objectName) && this._instances.containsKey(objectName) && this._objectsCtor.containsKey(objectName);
      }
    }, {
      key: "registerObject",
      value: function registerObject(objectData) {
        this._objects.put(objectData.name, objectData);
        this._instances.put(objectData.name, []);
        var Ctor = gdjs2.getObjectConstructor(objectData.type);
        this._objectsCtor.put(objectData.name, Ctor);
        if (Ctor.supportsReinitialization) {
          this._instancesCache.put(objectData.name, []);
        }
      }
    }, {
      key: "updateObject",
      value: function updateObject(objectData) {
        if (!this.isObjectRegistered(objectData.name)) {
          console.warn("Tried to call updateObject for an object that was not registered (" + objectData.name + "). Call registerObject first.");
        }
        this._objects.put(objectData.name, objectData);
      }
    }, {
      key: "unregisterObject",
      value: function unregisterObject(objectName) {
        var instances = this._instances.get(objectName);
        if (instances) {
          var instancesToRemove = instances.slice();
          for (var i = 0; i < instancesToRemove.length; i++) {
            this.markObjectForDeletion(instancesToRemove[i]);
          }
          this._cacheOrClearRemovedInstances();
        }
        this._objects.remove(objectName);
        this._instances.remove(objectName);
        this._instancesCache.remove(objectName);
        this._objectsCtor.remove(objectName);
      }
    }, {
      key: "onPause",
      value: function onPause() {
        for (var i = 0; i < gdjs2.callbacksRuntimeScenePaused.length; ++i) {
          gdjs2.callbacksRuntimeScenePaused[i](this);
        }
      }
    }, {
      key: "onResume",
      value: function onResume() {
        this._isJustResumed = true;
        for (var i = 0; i < gdjs2.callbacksRuntimeSceneResumed.length; ++i) {
          gdjs2.callbacksRuntimeSceneResumed[i](this);
        }
      }
    }, {
      key: "unloadScene",
      value: function unloadScene() {
        if (!this._isLoaded) {
          return;
        }
        if (this._profiler) {
          this.stopProfiler();
        }
        for (var i = 0; i < gdjs2.callbacksRuntimeSceneUnloading.length; ++i) {
          gdjs2.callbacksRuntimeSceneUnloading[i](this);
        }
        this._constructListOfAllInstances();
        for (var _i6 = 0, len = this._allInstancesList.length; _i6 < len; ++_i6) {
          var object = this._allInstancesList[_i6];
          object.onDestroyFromScene(this);
        }
        if (this._renderer) {
          this._renderer.onSceneUnloaded();
        }
        for (var _i7 = 0; _i7 < gdjs2.callbacksRuntimeSceneUnloaded.length; ++_i7) {
          gdjs2.callbacksRuntimeSceneUnloaded[_i7](this);
        }
        this._layers = new Hashtable();
        this._variables = new gdjs2.VariablesContainer();
        this._initialBehaviorSharedData = new Hashtable();
        this._objects = new Hashtable();
        this._instances = new Hashtable();
        this._instancesCache = new Hashtable();
        this._eventsFunction = null;
        this._objectsCtor = new Hashtable();
        this._allInstancesList = [];
        this._instancesRemoved = [];
        this._lastId = 0;
        this._onceTriggers = null;
        this._isLoaded = false;
        this.onGameResolutionResized();
      }
    }, {
      key: "createObjectsFrom",
      value: function createObjectsFrom(data, xPos, yPos, trackByPersistentUuid) {
        for (var i = 0, len = data.length; i < len; ++i) {
          var instanceData = data[i];
          var objectName = instanceData.name;
          var newObject = this.createObject(objectName);
          if (newObject !== null) {
            if (trackByPersistentUuid) {
              newObject.persistentUuid = instanceData.persistentUuid || null;
            }
            newObject.setPosition(instanceData.x + xPos, instanceData.y + yPos);
            newObject.setZOrder(instanceData.zOrder);
            newObject.setAngle(instanceData.angle);
            newObject.setLayer(instanceData.layer);
            newObject.getVariables().initFrom(instanceData.initialVariables, true);
            newObject.extraInitializationFromInitialInstance(instanceData);
          }
        }
      }
    }, {
      key: "_setLayerDefaultZOrders",
      value: function _setLayerDefaultZOrders() {
        if (this._runtimeGame.getGameData().properties.useDeprecatedZeroAsDefaultZOrder) {
          return;
        }
        var layerHighestZOrders = {};
        var allInstances = this.getAdhocListOfAllInstances();
        for (var i = 0, len = allInstances.length; i < len; ++i) {
          var object = allInstances[i];
          var layerName = object.getLayer();
          var zOrder = object.getZOrder();
          if (layerHighestZOrders[layerName] === void 0 || layerHighestZOrders[layerName] < zOrder) {
            layerHighestZOrders[layerName] = zOrder;
          }
        }
        for (var _layerName in layerHighestZOrders) {
          this.getLayer(_layerName).setDefaultZOrder(layerHighestZOrders[_layerName] + 1);
        }
      }
    }, {
      key: "setEventsGeneratedCodeFunction",
      value: function setEventsGeneratedCodeFunction(sceneData) {
        var module = gdjs2[sceneData.mangledName + "Code"];
        if (module && module.func) {
          this._eventsFunction = module.func;
        } else {
          console.log("Warning: no function found for running logic of scene " + this._name);
          this._eventsFunction = function () {};
        }
      }
    }, {
      key: "setEventsFunction",
      value: function setEventsFunction(func) {
        this._eventsFunction = func;
      }
    }, {
      key: "renderAndStep",
      value: function renderAndStep(elapsedTime) {
        if (this._profiler) {
          this._profiler.beginFrame();
        }
        this._requestedChange = SceneChangeRequest.CONTINUE;
        this._timeManager.update(elapsedTime, this._runtimeGame.getMinimalFramerate());
        if (this._profiler) {
          this._profiler.begin("objects (pre-events)");
        }
        this._updateObjectsPreEvents();
        if (this._profiler) {
          this._profiler.end("objects (pre-events)");
        }
        if (this._profiler) {
          this._profiler.begin("callbacks and extensions (pre-events)");
        }
        for (var i = 0; i < gdjs2.callbacksRuntimeScenePreEvents.length; ++i) {
          gdjs2.callbacksRuntimeScenePreEvents[i](this);
        }
        if (this._profiler) {
          this._profiler.end("callbacks and extensions (pre-events)");
        }
        if (this._profiler) {
          this._profiler.begin("events");
        }
        if (this._eventsFunction !== null) this._eventsFunction(this);
        if (this._profiler) {
          this._profiler.end("events");
        }
        if (this._profiler) {
          this._profiler.begin("objects (post-events)");
        }
        this._updateObjectsPostEvents();
        if (this._profiler) {
          this._profiler.end("objects (post-events)");
        }
        if (this._profiler) {
          this._profiler.begin("callbacks and extensions (post-events)");
        }
        for (var _i8 = 0; _i8 < gdjs2.callbacksRuntimeScenePostEvents.length; ++_i8) {
          gdjs2.callbacksRuntimeScenePostEvents[_i8](this);
        }
        if (this._profiler) {
          this._profiler.end("callbacks and extensions (post-events)");
        }
        if (this._profiler) {
          this._profiler.begin("objects (pre-render)");
        }
        this._updateObjectsPreRender();
        if (this._profiler) {
          this._profiler.end("objects (pre-render)");
        }
        if (this._profiler) {
          this._profiler.begin("layers (effects update)");
        }
        this._updateLayers();
        if (this._profiler) {
          this._profiler.end("layers (effects update)");
        }
        if (this._profiler) {
          this._profiler.begin("render");
        }
        if (this._debugDrawEnabled && this._layersCameraCoordinates) {
          this._updateLayersCameraCoordinates(1);
          this.getRenderer().renderDebugDraw(this._allInstancesList, this._layersCameraCoordinates, this._debugDrawShowHiddenInstances, this._debugDrawShowPointsNames, this._debugDrawShowCustomPoints);
        }
        this._isJustResumed = false;
        this.render();
        if (this._profiler) {
          this._profiler.end("render");
        }
        if (this._profiler) {
          this._profiler.endFrame();
        }
        return !!this.getRequestedChange();
      }
    }, {
      key: "render",
      value: function render() {
        this._renderer.render();
      }
    }, {
      key: "_updateLayersCameraCoordinates",
      value: function _updateLayersCameraCoordinates(scale) {
        this._layersCameraCoordinates = this._layersCameraCoordinates || {};
        for (var name in this._layers.items) {
          if (this._layers.items.hasOwnProperty(name)) {
            var theLayer = this._layers.items[name];
            this._layersCameraCoordinates[name] = this._layersCameraCoordinates[name] || [0, 0, 0, 0];
            this._layersCameraCoordinates[name][0] = theLayer.getCameraX() - theLayer.getCameraWidth() / 2 * scale;
            this._layersCameraCoordinates[name][1] = theLayer.getCameraY() - theLayer.getCameraHeight() / 2 * scale;
            this._layersCameraCoordinates[name][2] = theLayer.getCameraX() + theLayer.getCameraWidth() / 2 * scale;
            this._layersCameraCoordinates[name][3] = theLayer.getCameraY() + theLayer.getCameraHeight() / 2 * scale;
          }
        }
      }
    }, {
      key: "_updateLayers",
      value: function _updateLayers() {
        for (var name in this._layers.items) {
          if (this._layers.items.hasOwnProperty(name)) {
            var theLayer = this._layers.items[name];
            theLayer.update(this);
          }
        }
      }
    }, {
      key: "_updateObjectsPreRender",
      value: function _updateObjectsPreRender() {
        if (this._timeManager.isFirstFrame()) {
          this._constructListOfAllInstances();
          for (var i = 0, len = this._allInstancesList.length; i < len; ++i) {
            var object = this._allInstancesList[i];
            var rendererObject = object.getRendererObject();
            if (rendererObject) {
              object.getRendererObject().visible = !object.isHidden();
            }
            object.updatePreRender(this);
          }
          return;
        } else {
          this._updateLayersCameraCoordinates(2);
          this._constructListOfAllInstances();
          for (var _i9 = 0, _len4 = this._allInstancesList.length; _i9 < _len4; ++_i9) {
            var _object = this._allInstancesList[_i9];
            var cameraCoords = this._layersCameraCoordinates[_object.getLayer()];
            var _rendererObject = _object.getRendererObject();
            if (!cameraCoords || !_rendererObject) {
              continue;
            }
            if (_object.isHidden()) {
              _rendererObject.visible = false;
            } else {
              var aabb = _object.getVisibilityAABB();
              if (aabb && (aabb.min[0] > cameraCoords[2] || aabb.min[1] > cameraCoords[3] || aabb.max[0] < cameraCoords[0] || aabb.max[1] < cameraCoords[1])) {
                _rendererObject.visible = false;
              } else {
                _rendererObject.visible = true;
              }
            }
            _object.updatePreRender(this);
          }
        }
      }
    }, {
      key: "_cacheOrClearRemovedInstances",
      value: function _cacheOrClearRemovedInstances() {
        for (var k = 0, lenk = this._instancesRemoved.length; k < lenk; ++k) {
          var cache = this._instancesCache.get(this._instancesRemoved[k].getName());
          if (cache) {
            if (cache.length < 128) {
              cache.push(this._instancesRemoved[k]);
            }
          }
        }
        this._instancesRemoved.length = 0;
      }
    }, {
      key: "_constructListOfAllInstances",
      value: function _constructListOfAllInstances() {
        var currentListSize = 0;
        for (var name in this._instances.items) {
          if (this._instances.items.hasOwnProperty(name)) {
            var list = this._instances.items[name];
            var oldSize = currentListSize;
            currentListSize += list.length;
            for (var j = 0, lenj = list.length; j < lenj; ++j) {
              if (oldSize + j < this._allInstancesList.length) {
                this._allInstancesList[oldSize + j] = list[j];
              } else {
                this._allInstancesList.push(list[j]);
              }
            }
          }
        }
        this._allInstancesList.length = currentListSize;
      }
    }, {
      key: "_updateObjectsPreEvents",
      value: function _updateObjectsPreEvents() {
        this._constructListOfAllInstances();
        for (var i = 0, len = this._allInstancesList.length; i < len; ++i) {
          var obj = this._allInstancesList[i];
          var elapsedTime = obj.getElapsedTime(this);
          if (!obj.hasNoForces()) {
            var averageForce = obj.getAverageForce();
            var elapsedTimeInSeconds = elapsedTime / 1e3;
            obj.setX(obj.getX() + averageForce.getX() * elapsedTimeInSeconds);
            obj.setY(obj.getY() + averageForce.getY() * elapsedTimeInSeconds);
            obj.update(this);
            obj.updateForces(elapsedTimeInSeconds);
          } else {
            obj.update(this);
          }
          obj.updateTimers(elapsedTime);
          this._allInstancesList[i].stepBehaviorsPreEvents(this);
        }
        this._cacheOrClearRemovedInstances();
      }
    }, {
      key: "_updateObjectsPostEvents",
      value: function _updateObjectsPostEvents() {
        this._cacheOrClearRemovedInstances();
        this._constructListOfAllInstances();
        for (var i = 0, len = this._allInstancesList.length; i < len; ++i) {
          this._allInstancesList[i].stepBehaviorsPostEvents(this);
        }
        this._cacheOrClearRemovedInstances();
      }
    }, {
      key: "setBackgroundColor",
      value: function setBackgroundColor(r, g, b) {
        this._backgroundColor = parseInt(gdjs2.rgbToHex(r, g, b), 16);
      }
    }, {
      key: "getBackgroundColor",
      value: function getBackgroundColor() {
        return this._backgroundColor;
      }
    }, {
      key: "getName",
      value: function getName() {
        return this._name;
      }
    }, {
      key: "updateObjectsForces",
      value: function updateObjectsForces() {
        for (var name in this._instances.items) {
          if (this._instances.items.hasOwnProperty(name)) {
            var list = this._instances.items[name];
            for (var j = 0, listLen = list.length; j < listLen; ++j) {
              var obj = list[j];
              if (!obj.hasNoForces()) {
                var averageForce = obj.getAverageForce();
                var elapsedTimeInSeconds = obj.getElapsedTime(this) / 1e3;
                obj.setX(obj.getX() + averageForce.getX() * elapsedTimeInSeconds);
                obj.setY(obj.getY() + averageForce.getY() * elapsedTimeInSeconds);
                obj.updateForces(elapsedTimeInSeconds);
              }
            }
          }
        }
      }
    }, {
      key: "addObject",
      value: function addObject(obj) {
        if (!this._instances.containsKey(obj.name)) {
          this._instances.put(obj.name, []);
        }
        this._instances.get(obj.name).push(obj);
      }
    }, {
      key: "getObjects",
      value: function getObjects(name) {
        if (!this._instances.containsKey(name)) {
          console.log('RuntimeScene.getObjects: No instances called "' + name + '"! Adding it.');
          this._instances.put(name, []);
        }
        return this._instances.get(name);
      }
    }, {
      key: "createObject",
      value: function createObject(objectName) {
        if (!this._objectsCtor.containsKey(objectName) || !this._objects.containsKey(objectName)) {
          return null;
        }
        var cache = this._instancesCache.get(objectName);
        var ctor = this._objectsCtor.get(objectName);
        var obj = void 0;
        if (!cache || cache.length === 0) {
          obj = new ctor(this, this._objects.get(objectName));
        } else {
          obj = cache.pop();
          obj.reinitialize(this._objects.get(objectName));
        }
        this.addObject(obj);
        return obj;
      }
    }, {
      key: "markObjectForDeletion",
      value: function markObjectForDeletion(obj) {
        if (this._instancesRemoved.indexOf(obj) === -1) {
          this._instancesRemoved.push(obj);
        }
        if (this._instances.containsKey(obj.getName())) {
          var objId = obj.id;
          var allInstances = this._instances.get(obj.getName());
          for (var i = 0, len = allInstances.length; i < len; ++i) {
            if (allInstances[i].id == objId) {
              allInstances.splice(i, 1);
              break;
            }
          }
        }
        obj.onDestroyFromScene(this);
        for (var j = 0; j < gdjs2.callbacksObjectDeletedFromScene.length; ++j) {
          gdjs2.callbacksObjectDeletedFromScene[j](this, obj);
        }
        return;
      }
    }, {
      key: "createNewUniqueId",
      value: function createNewUniqueId() {
        this._lastId++;
        return this._lastId;
      }
    }, {
      key: "getRenderer",
      value: function getRenderer() {
        return this._renderer;
      }
    }, {
      key: "getGame",
      value: function getGame() {
        return this._runtimeGame;
      }
    }, {
      key: "getVariables",
      value: function getVariables() {
        return this._variables;
      }
    }, {
      key: "getInitialSharedDataForBehavior",
      value: function getInitialSharedDataForBehavior(name) {
        var behaviorSharedData = this._initialBehaviorSharedData.get(name);
        if (behaviorSharedData) {
          return behaviorSharedData;
        }
        console.error("Can't find shared data for behavior with name:", name);
        return null;
      }
    }, {
      key: "setInitialSharedDataForBehavior",
      value: function setInitialSharedDataForBehavior(name, sharedData) {
        this._initialBehaviorSharedData.put(name, sharedData);
      }
    }, {
      key: "getLayer",
      value: function getLayer(name) {
        if (this._layers.containsKey(name)) {
          return this._layers.get(name);
        }
        return this._layers.get("");
      }
    }, {
      key: "hasLayer",
      value: function hasLayer(name) {
        return this._layers.containsKey(name);
      }
    }, {
      key: "addLayer",
      value: function addLayer(layerData) {
        this._layers.put(layerData.name, new gdjs2.Layer(layerData, this));
      }
    }, {
      key: "removeLayer",
      value: function removeLayer(layerName) {
        var allInstances = this.getAdhocListOfAllInstances();
        for (var i = 0; i < allInstances.length; ++i) {
          var runtimeObject = allInstances[i];
          if (runtimeObject.getLayer() === layerName) {
            runtimeObject.setLayer("");
          }
        }
        this._layers.remove(layerName);
      }
    }, {
      key: "setLayerIndex",
      value: function setLayerIndex(layerName, index) {
        var layer = this._layers.get(layerName);
        if (!layer) {
          return;
        }
        this._renderer.setLayerIndex(layer, index);
      }
    }, {
      key: "getAllLayerNames",
      value: function getAllLayerNames(result) {
        this._layers.keys(result);
      }
    }, {
      key: "getTimeManager",
      value: function getTimeManager() {
        return this._timeManager;
      }
    }, {
      key: "getSoundManager",
      value: function getSoundManager() {
        return this._runtimeGame.getSoundManager();
      }
    }, {
      key: "getRequestedChange",
      value: function getRequestedChange() {
        return this._requestedChange;
      }
    }, {
      key: "getRequestedScene",
      value: function getRequestedScene() {
        return this._requestedScene;
      }
    }, {
      key: "requestChange",
      value: function requestChange(change, sceneName) {
        this._requestedChange = change;
        if (sceneName) this._requestedScene = sceneName;
      }
    }, {
      key: "getProfiler",
      value: function getProfiler() {
        return this._profiler;
      }
    }, {
      key: "startProfiler",
      value: function startProfiler(onProfilerStopped) {
        if (this._profiler) {
          return;
        }
        this._profiler = new gdjs2.Profiler();
        this._onProfilerStopped = onProfilerStopped;
      }
    }, {
      key: "stopProfiler",
      value: function stopProfiler() {
        if (!this._profiler) {
          return;
        }
        var oldProfiler = this._profiler;
        var onProfilerStopped = this._onProfilerStopped;
        this._profiler = null;
        this._onProfilerStopped = null;
        if (onProfilerStopped) {
          onProfilerStopped(oldProfiler);
        }
      }
    }, {
      key: "getOnceTriggers",
      value: function getOnceTriggers() {
        return this._onceTriggers;
      }
    }, {
      key: "getAdhocListOfAllInstances",
      value: function getAdhocListOfAllInstances() {
        this._constructListOfAllInstances();
        return this._allInstancesList;
      }
    }, {
      key: "sceneJustResumed",
      value: function sceneJustResumed() {
        return this._isJustResumed;
      }
    }]);

    return RuntimeScene;
  }();

  gdjs2.RuntimeScene = RuntimeScene;
  var SceneChangeRequest = void 0;
  (function (SceneChangeRequest2) {
    SceneChangeRequest2[SceneChangeRequest2["CONTINUE"] = 0] = "CONTINUE";
    SceneChangeRequest2[SceneChangeRequest2["PUSH_SCENE"] = 1] = "PUSH_SCENE";
    SceneChangeRequest2[SceneChangeRequest2["POP_SCENE"] = 2] = "POP_SCENE";
    SceneChangeRequest2[SceneChangeRequest2["REPLACE_SCENE"] = 3] = "REPLACE_SCENE";
    SceneChangeRequest2[SceneChangeRequest2["CLEAR_SCENES"] = 4] = "CLEAR_SCENES";
    SceneChangeRequest2[SceneChangeRequest2["STOP_GAME"] = 5] = "STOP_GAME";
  })(SceneChangeRequest = gdjs2.SceneChangeRequest || (gdjs2.SceneChangeRequest = {}));
})(gdjs || (gdjs = {}));
//# sourceMappingURL=runtimescene.js.map