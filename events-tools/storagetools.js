"use strict";

var gdjs;
(function (gdjs2) {
  var evtTools = void 0;
  (function (evtTools2) {
    var storage = void 0;
    (function (storage2) {
      var localStorage = null;
      try {
        if (typeof cc !== "undefined") {
          localStorage = cc.sys.localStorage;
        } else {
          if (typeof window !== "undefined") {
            localStorage = window.localStorage;
          }
        }
      } catch (error) {
        console.warn("Unable to get access to the localStorage: ", error);
      }
      if (!localStorage) {
        console.warn("Storage actions won't work as no localStorage was found.");
      }
      var loadedObjects = new Hashtable();
      storage2.loadJSONFileFromStorage = function (name) {
        if (loadedObjects.containsKey(name)) {
          return;
        }
        var serializedString = null;
        try {
          if (localStorage) {
            serializedString = localStorage.getItem("GDJS_" + name);
          }
        } catch (error) {
          console.warn('Unable to load data from localStorage for "' + name + '":', error);
        }
        var jsObject = {};
        try {
          if (serializedString) {
            jsObject = JSON.parse(serializedString);
          }
        } catch (error) {
          console.warn('Unable to load data from "' + name + '" - data is not valid JSON:', error);
        }
        loadedObjects.put(name, jsObject);
      };
      storage2.unloadJSONFile = function (name) {
        if (!loadedObjects.containsKey(name)) {
          return;
        }
        var jsObject = loadedObjects.get(name);
        var serializedString = JSON.stringify(jsObject);
        try {
          if (localStorage) {
            localStorage.setItem("GDJS_" + name, serializedString);
          }
        } catch (error) {
          console.warn('Unable to save data to localStorage for "' + name + '":', error);
        }
        loadedObjects.remove(name);
      };
      var loadObject = function loadObject(name, cb) {
        var notPermanentlyLoaded = false;
        if (!loadedObjects.containsKey(name)) {
          notPermanentlyLoaded = true;
          storage2.loadJSONFileFromStorage(name);
        }
        var returnValue = cb(loadedObjects.get(name));
        if (notPermanentlyLoaded) {
          storage2.unloadJSONFile(name);
        }
        return returnValue;
      };
      storage2.clearJSONFile = function (name) {
        return loadObject(name, function (jsObject) {
          for (var p in jsObject) {
            if (jsObject.hasOwnProperty(p)) {
              delete jsObject[p];
            }
          }
          return true;
        });
      };
      storage2.elementExistsInJSONFile = function (name, elementPath) {
        return loadObject(name, function (jsObject) {
          var pathSegments = elementPath.split("/");
          var currentElem = jsObject;
          for (var i = 0; i < pathSegments.length; ++i) {
            if (!currentElem[pathSegments[i]]) {
              return false;
            }
            currentElem = currentElem[pathSegments[i]];
          }
          return true;
        });
      };
      storage2.deleteElementFromJSONFile = function (name, elementPath) {
        return loadObject(name, function (jsObject) {
          var pathSegments = elementPath.split("/");
          var currentElem = jsObject;
          for (var i = 0; i < pathSegments.length; ++i) {
            if (!currentElem[pathSegments[i]]) {
              return false;
            }
            if (i === pathSegments.length - 1) {
              delete currentElem[pathSegments[i]];
            } else {
              currentElem = currentElem[pathSegments[i]];
            }
          }
          return true;
        });
      };
      storage2.writeNumberInJSONFile = function (name, elementPath, val) {
        return loadObject(name, function (jsObject) {
          var pathSegments = elementPath.split("/");
          var currentElem = jsObject;
          for (var i = 0; i < pathSegments.length; ++i) {
            if (!currentElem[pathSegments[i]]) {
              currentElem[pathSegments[i]] = {};
            }
            if (i === pathSegments.length - 1) {
              currentElem[pathSegments[i]].value = val;
            } else {
              currentElem = currentElem[pathSegments[i]];
            }
          }
          return true;
        });
      };
      storage2.writeStringInJSONFile = function (name, elementPath, str) {
        return loadObject(name, function (jsObject) {
          var pathSegments = elementPath.split("/");
          var currentElem = jsObject;
          for (var i = 0; i < pathSegments.length; ++i) {
            if (!currentElem[pathSegments[i]]) {
              currentElem[pathSegments[i]] = {};
            }
            if (i === pathSegments.length - 1) {
              currentElem[pathSegments[i]].str = str;
            } else {
              currentElem = currentElem[pathSegments[i]];
            }
          }
          return true;
        });
      };
      storage2.readNumberFromJSONFile = function (name, elementPath, runtimeScene, variable) {
        return loadObject(name, function (jsObject) {
          var pathSegments = elementPath.split("/");
          var currentElem = jsObject;
          for (var i = 0; i < pathSegments.length; ++i) {
            if (!currentElem[pathSegments[i]]) {
              return false;
            }
            if (i === pathSegments.length - 1 && typeof currentElem[pathSegments[i]].value !== "undefined") {
              variable.setNumber(currentElem[pathSegments[i]].value);
            } else {
              currentElem = currentElem[pathSegments[i]];
            }
          }
          return true;
        });
      };
      storage2.readStringFromJSONFile = function (name, elementPath, runtimeScene, variable) {
        return loadObject(name, function (jsObject) {
          var pathSegments = elementPath.split("/");
          var currentElem = jsObject;
          for (var i = 0; i < pathSegments.length; ++i) {
            if (!currentElem[pathSegments[i]]) {
              return false;
            }
            if (i === pathSegments.length - 1 && typeof currentElem[pathSegments[i]].str !== "undefined") {
              variable.setString(currentElem[pathSegments[i]].str);
            } else {
              currentElem = currentElem[pathSegments[i]];
            }
          }
          return true;
        });
      };
    })(storage = evtTools2.storage || (evtTools2.storage = {}));
  })(evtTools = gdjs2.evtTools || (gdjs2.evtTools = {}));
})(gdjs || (gdjs = {}));
//# sourceMappingURL=storagetools.js.map