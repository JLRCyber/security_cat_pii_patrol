"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gdjs;
(function (gdjs2) {
  var Polygon2 = function () {
    function Polygon2() {
      _classCallCheck(this, Polygon2);

      this.vertices = [];
      this.edges = [];
      this.center = [0, 0];
    }

    _createClass(Polygon2, [{
      key: "move",
      value: function move(x, y) {
        for (var i = 0, len = this.vertices.length; i < len; ++i) {
          this.vertices[i][0] += x;
          this.vertices[i][1] += y;
        }
      }
    }, {
      key: "rotate",
      value: function rotate(angle) {
        var t = 0;
        var cosa = Math.cos(-angle);
        var sina = Math.sin(-angle);
        for (var i = 0, len = this.vertices.length; i < len; ++i) {
          t = this.vertices[i][0];
          this.vertices[i][0] = t * cosa + this.vertices[i][1] * sina;
          this.vertices[i][1] = -t * sina + this.vertices[i][1] * cosa;
        }
      }
    }, {
      key: "computeEdges",
      value: function computeEdges() {
        while (this.edges.length < this.vertices.length) {
          this.edges.push([0, 0]);
        }
        if (this.edges.length != this.vertices.length) {
          this.edges.length = this.vertices.length;
        }
        for (var i = 0, len = this.vertices.length; i < len; ++i) {
          var v1 = this.vertices[i];
          var v2 = i + 1 >= len ? this.vertices[0] : this.vertices[i + 1];
          this.edges[i][0] = v2[0] - v1[0];
          this.edges[i][1] = v2[1] - v1[1];
        }
      }
    }, {
      key: "isConvex",
      value: function isConvex() {
        this.computeEdges();
        var edgesLen = this.edges.length;
        if (edgesLen < 3) {
          return false;
        }
        var zProductIsPositive = this.edges[0][0] * this.edges[0 + 1][1] - this.edges[0][1] * this.edges[0 + 1][0] > 0;
        for (var i = 1; i < edgesLen - 1; ++i) {
          var zCrossProduct = this.edges[i][0] * this.edges[i + 1][1] - this.edges[i][1] * this.edges[i + 1][0];
          if (zCrossProduct > 0 !== zProductIsPositive) {
            return false;
          }
        }
        var lastZCrossProduct = this.edges[edgesLen - 1][0] * this.edges[0][1] - this.edges[edgesLen - 1][1] * this.edges[0][0];
        if (lastZCrossProduct > 0 !== zProductIsPositive) {
          return false;
        }
        return true;
      }
    }, {
      key: "computeCenter",
      value: function computeCenter() {
        this.center[0] = 0;
        this.center[1] = 0;
        var len = this.vertices.length;
        for (var i = 0; i < len; ++i) {
          this.center[0] += this.vertices[i][0];
          this.center[1] += this.vertices[i][1];
        }
        this.center[0] /= len;
        this.center[1] /= len;
        return this.center;
      }
    }], [{
      key: "createRectangle",
      value: function createRectangle(width, height) {
        var rect = new gdjs2.Polygon();
        rect.vertices.push([-width / 2, -height / 2]);
        rect.vertices.push([+width / 2, -height / 2]);
        rect.vertices.push([+width / 2, +height / 2]);
        rect.vertices.push([-width / 2, +height / 2]);
        return rect;
      }
    }, {
      key: "collisionTest",
      value: function collisionTest(p1, p2, ignoreTouchingEdges) {
        p1.computeEdges();
        p2.computeEdges();
        var edge = Polygon2.collisionTestStatics.edge;
        var move_axis = Polygon2.collisionTestStatics.move_axis;
        var result = Polygon2.collisionTestStatics.result;
        var minDist = Number.MAX_VALUE;
        edge[0] = 0;
        edge[1] = 0;
        edge[0] = 0;
        edge[1] = 0;
        result.collision = false;
        result.move_axis[0] = 0;
        result.move_axis[1] = 0;
        for (var i = 0, len1 = p1.vertices.length, len2 = p2.vertices.length; i < len1 + len2; i++) {
          if (i < len1) {
            edge = p1.edges[i];
          } else {
            edge = p2.edges[i - len1];
          }
          var axis = Polygon2.collisionTestStatics.axis;
          axis[0] = -edge[1];
          axis[1] = edge[0];
          Polygon2.normalise(axis);
          var minMaxA = Polygon2.collisionTestStatics.minMaxA;
          var minMaxB = Polygon2.collisionTestStatics.minMaxB;
          Polygon2.project(axis, p1, minMaxA);
          Polygon2.project(axis, p2, minMaxB);
          var dist = Polygon2.distance(minMaxA[0], minMaxA[1], minMaxB[0], minMaxB[1]);
          if (dist > 0 || dist === 0 && ignoreTouchingEdges) {
            result.collision = false;
            result.move_axis[0] = 0;
            result.move_axis[1] = 0;
            return result;
          }
          var absDist = Math.abs(dist);
          if (absDist < minDist) {
            minDist = absDist;
            move_axis[0] = axis[0];
            move_axis[1] = axis[1];
          }
        }
        result.collision = true;
        var p1Center = p1.computeCenter();
        var p2Center = p2.computeCenter();
        var d = [p1Center[0] - p2Center[0], p1Center[1] - p2Center[1]];
        if (Polygon2.dotProduct(d, move_axis) < 0) {
          move_axis[0] = -move_axis[0];
          move_axis[1] = -move_axis[1];
        }
        result.move_axis[0] = move_axis[0] * minDist;
        result.move_axis[1] = move_axis[1] * minDist;
        return result;
      }
    }, {
      key: "raycastTest",
      value: function raycastTest(poly, startX, startY, endX, endY) {
        var result = Polygon2.raycastTestStatics.result;
        result.collision = false;
        if (poly.vertices.length < 2) {
          return result;
        }
        poly.computeEdges();
        var p = Polygon2.raycastTestStatics.p;
        var q = Polygon2.raycastTestStatics.q;
        var r = Polygon2.raycastTestStatics.r;
        var s = Polygon2.raycastTestStatics.s;
        var minSqDist = Number.MAX_VALUE;
        p[0] = startX;
        p[1] = startY;
        r[0] = endX - startX;
        r[1] = endY - startY;
        for (var i = 0; i < poly.edges.length; i++) {
          q[0] = poly.vertices[i][0];
          q[1] = poly.vertices[i][1];
          s[0] = poly.edges[i][0];
          s[1] = poly.edges[i][1];
          var deltaQP = Polygon2.raycastTestStatics.deltaQP;
          deltaQP[0] = q[0] - p[0];
          deltaQP[1] = q[1] - p[1];
          var crossRS = Polygon2.crossProduct(r, s);
          var t = Polygon2.crossProduct(deltaQP, s) / crossRS;
          var u = Polygon2.crossProduct(deltaQP, r) / crossRS;
          if (Math.abs(crossRS) <= 1e-4 && Math.abs(Polygon2.crossProduct(deltaQP, r)) <= 1e-4) {
            var axis = Polygon2.raycastTestStatics.axis;
            axis[0] = r[0];
            axis[1] = r[1];
            Polygon2.normalise(axis);
            var rayA = 0;
            var rayB = Polygon2.dotProduct(axis, r);
            var edgeA = Polygon2.dotProduct(axis, deltaQP);
            var edgeB = Polygon2.dotProduct(axis, [deltaQP[0] + s[0], deltaQP[1] + s[1]]);
            var minOverlap = Math.max(Math.min(rayA, rayB), Math.min(edgeA, edgeB));
            var maxOverlap = Math.min(Math.max(rayA, rayB), Math.max(edgeA, edgeB));
            if (minOverlap > maxOverlap) {
              return result;
            }
            result.collision = true;
            if (rayB === 0) {
              result.closeX = startX;
              result.closeY = startY;
              result.closeSqDist = 0;
              result.farX = startX;
              result.farY = startY;
              result.farSqDist = 0;
            }
            var t1 = minOverlap / Math.abs(rayB);
            var t2 = maxOverlap / Math.abs(rayB);
            result.closeX = startX + t1 * r[0];
            result.closeY = startY + t1 * r[1];
            result.closeSqDist = t1 * t1 * (r[0] * r[0] + r[1] * r[1]);
            result.farX = startX + t2 * r[0];
            result.farY = startY + t2 * r[1];
            result.farSqDist = t2 * t2 * (r[0] * r[0] + r[1] * r[1]);
            return result;
          } else {
            if (crossRS !== 0 && 0 <= t && t <= 1 && 0 <= u && u <= 1) {
              var x = p[0] + t * r[0];
              var y = p[1] + t * r[1];
              var sqDist = (x - startX) * (x - startX) + (y - startY) * (y - startY);
              if (sqDist < minSqDist) {
                if (!result.collision) {
                  result.farX = x;
                  result.farY = y;
                  result.farSqDist = sqDist;
                }
                minSqDist = sqDist;
                result.closeX = x;
                result.closeY = y;
                result.closeSqDist = sqDist;
                result.collision = true;
              } else {
                result.farX = x;
                result.farY = y;
                result.farSqDist = sqDist;
              }
            }
          }
        }
        return result;
      }
    }, {
      key: "normalise",
      value: function normalise(v) {
        var len = Math.sqrt(v[0] * v[0] + v[1] * v[1]);
        if (len != 0) {
          v[0] /= len;
          v[1] /= len;
        }
      }
    }, {
      key: "dotProduct",
      value: function dotProduct(a, b) {
        var dp = a[0] * b[0] + a[1] * b[1];
        return dp;
      }
    }, {
      key: "crossProduct",
      value: function crossProduct(a, b) {
        var cp = a[0] * b[1] - a[1] * b[0];
        return cp;
      }
    }, {
      key: "project",
      value: function project(axis, p, result) {
        var dp = Polygon2.dotProduct(axis, p.vertices[0]);
        result[0] = dp;
        result[1] = dp;
        for (var i = 1, len = p.vertices.length; i < len; ++i) {
          dp = Polygon2.dotProduct(axis, p.vertices[i]);
          if (dp < result[0]) {
            result[0] = dp;
          } else {
            if (dp > result[1]) {
              result[1] = dp;
            }
          }
        }
      }
    }, {
      key: "distance",
      value: function distance(minA, maxA, minB, maxB) {
        if (minA < minB) {
          return minB - maxA;
        } else {
          return minA - maxB;
        }
      }
    }, {
      key: "isPointInside",
      value: function isPointInside(poly, x, y) {
        var inside = false;
        for (var i = 0, j = poly.vertices.length - 1; i < poly.vertices.length; j = i++) {
          var vi = poly.vertices[i];
          var vj = poly.vertices[j];
          if (vi[1] > y != vj[1] > y && x < (vj[0] - vi[0]) * (y - vi[1]) / (vj[1] - vi[1]) + vi[0]) {
            inside = !inside;
          }
        }
        return inside;
      }
    }]);

    return Polygon2;
  }();
  var Polygon = Polygon2;
  Polygon.collisionTestStatics = {
    minMaxA: [0, 0],
    minMaxB: [0, 0],
    edge: [0, 0],
    axis: [0, 0],
    move_axis: [0, 0],
    result: { collision: false, move_axis: [0, 0] }
  };
  Polygon.raycastTestStatics = {
    p: [0, 0],
    q: [0, 0],
    r: [0, 0],
    s: [0, 0],
    deltaQP: [0, 0],
    axis: [0, 0],
    result: {
      collision: false,
      closeX: 0,
      closeY: 0,
      closeSqDist: 0,
      farX: 0,
      farY: 0,
      farSqDist: 0
    }
  };
  gdjs2.Polygon = Polygon;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=polygon.js.map