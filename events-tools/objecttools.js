"use strict";

var gdjs;
(function (gdjs2) {
  var evtTools = void 0;
  (function (evtTools2) {
    var object = void 0;
    (function (object2) {
      object2.pickOnly = function (objectsLists, runtimeObject) {
        for (var listName in objectsLists.items) {
          if (objectsLists.items.hasOwnProperty(listName)) {
            var list = objectsLists.items[listName];
            if (list.indexOf(runtimeObject) === -1) {
              list.length = 0;
            } else {
              list.length = 0;
              list.push(runtimeObject);
            }
          }
        }
      };
      object2.twoListsTest = function (predicate, objectsLists1, objectsLists2, inverted, extraArg) {
        var isTrue = false;
        var objects1Lists = gdjs2.staticArray(gdjs2.evtTools.object.twoListsTest);
        objectsLists1.values(objects1Lists);
        var objects2Lists = gdjs2.staticArray2(gdjs2.evtTools.object.twoListsTest);
        objectsLists2.values(objects2Lists);
        for (var i = 0, leni = objects1Lists.length; i < leni; ++i) {
          var arr = objects1Lists[i];
          for (var k = 0, lenk = arr.length; k < lenk; ++k) {
            arr[k].pick = false;
          }
        }
        for (var _i = 0, _leni = objects2Lists.length; _i < _leni; ++_i) {
          var _arr = objects2Lists[_i];
          for (var _k = 0, _lenk = _arr.length; _k < _lenk; ++_k) {
            _arr[_k].pick = false;
          }
        }
        for (var _i2 = 0, _leni2 = objects1Lists.length; _i2 < _leni2; ++_i2) {
          var arr1 = objects1Lists[_i2];
          for (var _k2 = 0, _lenk2 = arr1.length; _k2 < _lenk2; ++_k2) {
            var atLeastOneObject = false;
            for (var j = 0, lenj = objects2Lists.length; j < lenj; ++j) {
              var arr2 = objects2Lists[j];
              for (var l = 0, lenl = arr2.length; l < lenl; ++l) {
                if (arr1[_k2].pick && arr2[l].pick) {
                  continue;
                }
                if (arr1[_k2].id !== arr2[l].id && predicate(arr1[_k2], arr2[l], extraArg)) {
                  if (!inverted) {
                    isTrue = true;
                    arr1[_k2].pick = true;
                    arr2[l].pick = true;
                  }
                  atLeastOneObject = true;
                }
              }
            }
            if (!atLeastOneObject && inverted) {
              isTrue = true;
              arr1[_k2].pick = true;
            }
          }
        }
        for (var _i3 = 0, _leni3 = objects1Lists.length; _i3 < _leni3; ++_i3) {
          var _arr2 = objects1Lists[_i3];
          var finalSize = 0;
          for (var _k3 = 0, _lenk3 = _arr2.length; _k3 < _lenk3; ++_k3) {
            var obj = _arr2[_k3];
            if (_arr2[_k3].pick) {
              _arr2[finalSize] = obj;
              finalSize++;
            }
          }
          _arr2.length = finalSize;
        }
        if (!inverted) {
          for (var _i4 = 0, _leni4 = objects2Lists.length; _i4 < _leni4; ++_i4) {
            var _arr3 = objects2Lists[_i4];
            var _finalSize = 0;
            for (var _k4 = 0, _lenk4 = _arr3.length; _k4 < _lenk4; ++_k4) {
              var _obj = _arr3[_k4];
              if (_arr3[_k4].pick) {
                _arr3[_finalSize] = _obj;
                _finalSize++;
              }
            }
            _arr3.length = _finalSize;
          }
        }
        return isTrue;
      };
      object2.pickObjectsIf = function (predicate, objectsLists, negatePredicate, extraArg) {
        var isTrue = false;
        var lists = gdjs2.staticArray(gdjs2.evtTools.object.pickObjectsIf);
        objectsLists.values(lists);
        for (var i = 0, leni = lists.length; i < leni; ++i) {
          var arr = lists[i];
          for (var k = 0, lenk = arr.length; k < lenk; ++k) {
            var object3 = arr[k];
            if (negatePredicate ^ predicate(object3, extraArg)) {
              isTrue = true;
              object3.pick = true;
            } else {
              object3.pick = false;
            }
          }
        }
        for (var _i5 = 0, _leni5 = lists.length; _i5 < _leni5; ++_i5) {
          gdjs2.evtTools.object.filterPickedObjectsList(lists[_i5]);
        }
        return isTrue;
      };
      object2.filterPickedObjectsList = function (arr) {
        var finalSize = 0;
        for (var k = 0, lenk = arr.length; k < lenk; ++k) {
          var obj = arr[k];
          if (obj.pick) {
            arr[finalSize] = obj;
            finalSize++;
          }
        }
        arr.length = finalSize;
      };
      object2.hitBoxesCollisionTest = function (objectsLists1, objectsLists2, inverted, runtimeScene, ignoreTouchingEdges) {
        return gdjs2.evtTools.object.twoListsTest(gdjs2.RuntimeObject.collisionTest, objectsLists1, objectsLists2, inverted, ignoreTouchingEdges);
      };
      object2._distanceBetweenObjects = function (obj1, obj2, distance) {
        return obj1.getSqDistanceToObject(obj2) <= distance;
      };
      object2.distanceTest = function (objectsLists1, objectsLists2, distance, inverted) {
        return gdjs2.evtTools.object.twoListsTest(gdjs2.evtTools.object._distanceBetweenObjects, objectsLists1, objectsLists2, inverted, distance * distance);
      };
      object2._movesToward = function (obj1, obj2, tolerance) {
        if (obj1.hasNoForces()) {
          return false;
        }
        var objAngle = Math.atan2(obj2.getDrawableY() + obj2.getCenterY() - (obj1.getDrawableY() + obj1.getCenterY()), obj2.getDrawableX() + obj2.getCenterX() - (obj1.getDrawableX() + obj1.getCenterX()));
        objAngle *= 180 / 3.14159;
        return Math.abs(gdjs2.evtTools.common.angleDifference(obj1.getAverageForce().getAngle(), objAngle)) <= tolerance / 2;
      };
      object2.movesTowardTest = function (objectsLists1, objectsLists2, tolerance, inverted) {
        return gdjs2.evtTools.object.twoListsTest(gdjs2.evtTools.object._movesToward, objectsLists1, objectsLists2, inverted, tolerance);
      };
      object2._turnedToward = function (obj1, obj2, tolerance) {
        var objAngle = Math.atan2(obj2.getDrawableY() + obj2.getCenterY() - (obj1.getDrawableY() + obj1.getCenterY()), obj2.getDrawableX() + obj2.getCenterX() - (obj1.getDrawableX() + obj1.getCenterX()));
        objAngle *= 180 / 3.14159;
        return Math.abs(gdjs2.evtTools.common.angleDifference(obj1.getAngle(), objAngle)) <= tolerance / 2;
      };
      object2.turnedTowardTest = function (objectsLists1, objectsLists2, tolerance, inverted) {
        return gdjs2.evtTools.object.twoListsTest(gdjs2.evtTools.object._turnedToward, objectsLists1, objectsLists2, inverted, tolerance);
      };
      object2.pickAllObjects = function (objectsContext, objectsLists) {
        for (var name in objectsLists.items) {
          if (objectsLists.items.hasOwnProperty(name)) {
            var allObjects = objectsContext.getObjects(name);
            var objectsList = objectsLists.items[name];
            objectsList.length = 0;
            objectsList.push.apply(objectsList, allObjects);
          }
        }
        return true;
      };
      object2.pickRandomObject = function (runtimeScene, objectsLists) {
        var objectsCount = 0;
        for (var listName in objectsLists.items) {
          if (objectsLists.items.hasOwnProperty(listName)) {
            var list = objectsLists.items[listName];
            objectsCount += list.length;
          }
        }
        if (objectsCount === 0) {
          return false;
        }
        var index = Math.floor(Math.random() * objectsCount);
        if (index >= objectsCount) {
          index = objectsCount - 1;
        }
        var startIndex = 0;
        var theChosenOne = null;
        for (var _listName in objectsLists.items) {
          if (objectsLists.items.hasOwnProperty(_listName)) {
            var _list = objectsLists.items[_listName];
            if (index - startIndex < _list.length) {
              theChosenOne = _list[index - startIndex];
              break;
            }
            startIndex += _list.length;
          }
        }
        gdjs2.evtTools.object.pickOnly(objectsLists, theChosenOne);
        return true;
      };
      object2.pickNearestObject = function (objectsLists, x, y, inverted) {
        var bestObject = null;
        var best = 0;
        var first = true;
        var lists = gdjs2.staticArray(gdjs2.evtTools.object.pickNearestObject);
        objectsLists.values(lists);
        for (var i = 0, len = lists.length; i < len; ++i) {
          var list = lists[i];
          for (var j = 0; j < list.length; ++j) {
            var object3 = list[j];
            var distance = object3.getSqDistanceToPosition(x, y);
            if (first || distance < best ^ inverted) {
              best = distance;
              bestObject = object3;
            }
            first = false;
          }
        }
        if (!bestObject) {
          return false;
        }
        gdjs2.evtTools.object.pickOnly(objectsLists, bestObject);
        return true;
      };
      object2.raycastObject = function (objectsLists, x, y, angle, dist, varX, varY, inverted) {
        return gdjs2.evtTools.object.raycastObjectToPosition(objectsLists, x, y, x + dist * Math.cos(angle * Math.PI / 180), y + dist * Math.sin(angle * Math.PI / 180), varX, varY, inverted);
      };
      object2.raycastObjectToPosition = function (objectsLists, x, y, endX, endY, varX, varY, inverted) {
        var matchObject = null;
        var testSqDist = inverted ? 0 : (endX - x) * (endX - x) + (endY - y) * (endY - y);
        var resultX = 0;
        var resultY = 0;
        var lists = gdjs2.staticArray(gdjs2.evtTools.object.raycastObjectToPosition);
        objectsLists.values(lists);
        for (var i = 0; i < lists.length; i++) {
          var list = lists[i];
          for (var j = 0; j < list.length; j++) {
            var object3 = list[j];
            var result = object3.raycastTest(x, y, endX, endY, !inverted);
            if (result.collision) {
              if (!inverted && result.closeSqDist <= testSqDist) {
                testSqDist = result.closeSqDist;
                matchObject = object3;
                resultX = result.closeX;
                resultY = result.closeY;
              } else {
                if (inverted && result.farSqDist >= testSqDist) {
                  testSqDist = result.farSqDist;
                  matchObject = object3;
                  resultX = result.farX;
                  resultY = result.farY;
                }
              }
            }
          }
        }
        if (!matchObject) {
          return false;
        }
        gdjs2.evtTools.object.pickOnly(objectsLists, matchObject);
        varX.setNumber(resultX);
        varY.setNumber(resultY);
        return true;
      };
      object2.doCreateObjectOnScene = function (objectsContext, objectName, objectsLists, x, y, layerName) {
        var obj = objectsContext.createObject(objectName);
        var layer = objectsContext.getLayer(layerName);
        if (obj !== null) {
          obj.setPosition(x, y);
          obj.setLayer(layerName);
          obj.setZOrder(layer.getDefaultZOrder());
          if (objectsLists.containsKey(objectName)) {
            objectsLists.get(objectName).push(obj);
          }
        }
      };
      object2.createObjectOnScene = function (objectsContext, objectsLists, x, y, layer) {
        gdjs2.evtTools.object.doCreateObjectOnScene(objectsContext, objectsLists.firstKey(), objectsLists, x, y, layer);
      };
      object2.createObjectFromGroupOnScene = function (objectsContext, objectsLists, objectName, x, y, layer) {
        gdjs2.evtTools.object.doCreateObjectOnScene(objectsContext, objectName, objectsLists, x, y, layer);
      };
      object2.pickedObjectsCount = function (objectsLists) {
        var size = 0;
        var lists = gdjs2.staticArray(gdjs2.evtTools.object.pickedObjectsCount);
        objectsLists.values(lists);
        for (var i = 0, len = lists.length; i < len; ++i) {
          size += lists[i].length;
        }
        return size;
      };
    })(object = evtTools2.object || (evtTools2.object = {}));
  })(evtTools = gdjs2.evtTools || (gdjs2.evtTools = {}));
})(gdjs || (gdjs = {}));
//# sourceMappingURL=objecttools.js.map