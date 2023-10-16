"use strict";

var gdjs;
(function (gdjs2) {
  var evtTools = void 0;
  (function (evtTools2) {
    var network = void 0;
    (function (network2) {
      network2.sendAsyncRequest = function (url, body, method, contentType, responseVar, errorVar) {
        var onError = function onError(err) {
          errorVar.setString("" + err);
        };
        try {
          var request = new XMLHttpRequest();
          request.onerror = onError;
          request.ontimeout = onError;
          request.onabort = onError;
          request.onreadystatechange = function () {
            if (request.readyState === 4) {
              if (request.status >= 400) {
                onError("" + request.status);
              }
              responseVar.setString(request.responseText);
            }
          };
          request.open(method, url);
          request.setRequestHeader("Content-Type", contentType === "" ? "application/x-www-form-urlencoded" : contentType);
          request.send(body);
        } catch (err) {
          onError(err);
        }
      };
      network2.sendDeprecatedSynchronousRequest = function (host, uri, body, method, contentType, responseVar) {
        try {
          var xhr = void 0;
          if (typeof XMLHttpRequest !== "undefined") {
            xhr = new XMLHttpRequest();
          } else {
            var versions = ["MSXML2.XmlHttp.5.0", "MSXML2.XmlHttp.4.0", "MSXML2.XmlHttp.3.0", "MSXML2.XmlHttp.2.0", "Microsoft.XmlHttp"];
            for (var i = 0, len = versions.length; i < len; i++) {
              try {
                xhr = new ActiveXObject(versions[i]);
                break;
              } catch (e) {}
            }
          }
          if (xhr === void 0) {
            return;
          }
          xhr.open(method, host + uri, false);
          xhr.setRequestHeader("Content-Type", contentType === "" ? "application/x-www-form-urlencoded" : contentType);
          xhr.send(body);
          responseVar.setString(xhr.responseText);
        } catch (e) {}
      };
      network2.enableMetrics = function (runtimeScene, enable) {
        runtimeScene.getGame().enableMetrics(enable);
      };
      network2.variableStructureToJSON = function (variable) {
        return JSON.stringify(variable.toJSObject());
      };
      network2.objectVariableStructureToJSON = function (object, variable) {
        return JSON.stringify(variable.toJSObject());
      };
      network2._objectToVariable = function (obj, variable) {
        variable.fromJSObject(obj);
      };
      network2.jsonToVariableStructure = function (jsonStr, variable) {
        variable.fromJSON(jsonStr);
      };
      network2.jsonToObjectVariableStructure = function (jsonStr, object, variable) {
        variable.fromJSON(jsonStr);
      };
    })(network = evtTools2.network || (evtTools2.network = {}));
  })(evtTools = gdjs2.evtTools || (gdjs2.evtTools = {}));
})(gdjs || (gdjs = {}));
//# sourceMappingURL=networktools.js.map