"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! Shifty 2.14.1 - https://github.com/jeremyckahn/shifty */
!function (t, n) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = n() : "function" == typeof define && define.amd ? define("shifty", [], n) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.shifty = n() : t.shifty = n();
}(window, function () {
  return function (t) {
    var n = {};function e(r) {
      if (n[r]) return n[r].exports;var i = n[r] = { i: r, l: !1, exports: {} };return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports;
    }return e.m = t, e.c = n, e.d = function (t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r });
    }, e.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
    }, e.t = function (t, n) {
      if (1 & n && (t = e(t)), 8 & n) return t;if (4 & n && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t && t.__esModule) return t;var r = Object.create(null);if (e.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & n && "string" != typeof t) for (var i in t) {
        e.d(r, i, function (n) {
          return t[n];
        }.bind(null, i));
      }return r;
    }, e.n = function (t) {
      var n = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };return e.d(n, "a", n), n;
    }, e.o = function (t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }, e.p = "", e(e.s = 3);
  }([function (t, n, e) {
    "use strict";
    (function (t) {
      e.d(n, "e", function () {
        return q;
      }), e.d(n, "c", function () {
        return B;
      }), e.d(n, "b", function () {
        return R;
      }), e.d(n, "a", function () {
        return V;
      }), e.d(n, "d", function () {
        return U;
      });var r = e(1);function i(t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
      }function u(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }function o(t) {
        return (o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
          return typeof t === "undefined" ? "undefined" : _typeof(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
        })(t);
      }function a(t, n) {
        var e = Object.keys(t);if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);n && (r = r.filter(function (n) {
            return Object.getOwnPropertyDescriptor(t, n).enumerable;
          })), e.push.apply(e, r);
        }return e;
      }function c(t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = null != arguments[n] ? arguments[n] : {};n % 2 ? a(Object(e), !0).forEach(function (n) {
            s(t, n, e[n]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : a(Object(e)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
          });
        }return t;
      }function s(t, n, e) {
        return n in t ? Object.defineProperty(t, n, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : t[n] = e, t;
      }var f,
          l,
          h,
          p,
          d,
          v,
          _,
          y,
          m,
          g,
          b,
          w,
          O,
          S,
          j,
          k,
          P,
          M,
          A,
          T,
          x = "undefined" != typeof window ? window : t,
          E = x.requestAnimationFrame || x.webkitRequestAnimationFrame || x.oRequestAnimationFrame || x.msRequestAnimationFrame || x.mozCancelRequestAnimationFrame && x.mozRequestAnimationFrame || setTimeout,
          F = function F() {},
          I = null,
          C = null,
          D = c({}, r),
          q = function q(t, n, e, r, i, u, o) {
        for (d in v = t < u ? 0 : (t - u) / i, l = null, p = !1, o && o.call && (p = !0, f = o(v)), n) {
          p || (h = o[d], l = h.call ? h : D[h], f = l(v)), _ = e[d], n[d] = _ + (r[d] - _) * f;
        }return n;
      },
          Q = function Q(t, n) {
        if (m = t._timestamp, j = t._currentState, P = t._delay, !(n < m + P)) {
          if (y = t._duration, k = t._targetState, w = (b = n > (g = m + P + y) ? g : n) >= g, S = y - (g - b), O = t._filters.length > 0, w) return t._render(k, t._data, S), t.stop(!0);O && t._applyFilter("beforeTween"), b < m + P ? m = y = b = 1 : m += P, q(b, j, t._originalState, k, y, m, t._easing), O && t._applyFilter("afterTween"), t._render(j, t._data, S);
        }
      },
          B = function B(t, n, e) {
        return function () {
          for (t = V.now(), n = I; n;) {
            e = n._next, Q(n, t), n = e;
          }
        }();
      },
          N = Date.now || function () {
        return +new Date();
      },
          R = function R(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "linear",
            e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = o(n);if (D[n]) return D[n];if ("string" === r || "function" === r) for (var i in t) {
          e[i] = n;
        } else for (var u in t) {
          e[u] = n[u] || "linear";
        }return e;
      },
          z = function z(t) {
        t === I ? (I = t._next) ? I._previous = null : C = null : t === C ? (C = t._previous) ? C._next = null : I = null : (A = t._previous, T = t._next, A._next = T, T._previous = A), t._previous = t._next = null;
      },
          L = "function" == typeof Promise ? Promise : null,
          V = function () {
        function t() {
          var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;i(this, t), this._config = {}, this._data = {}, this._delay = 0, this._filters = [], this._next = null, this._previous = null, this._timestamp = null, this._resolve = null, this._reject = null, this._currentState = n || {}, this._originalState = {}, this._targetState = {}, this._start = F, this._render = F, this._promiseCtor = L, e && this.setConfig(e);
        }var n, e, r;return n = t, (e = [{ key: "_applyFilter", value: function value(t) {
            for (var n = this._filters.length; n > 0; n--) {
              var e = this._filters[n - n][t];e && e(this);
            }
          } }, { key: "tween", value: function value() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;return this._isPlaying && this.stop(), !n && this._config || this.setConfig(n), this._pausedAtTime = null, this._timestamp = t.now(), this._start(this.get(), this._data), this._delay && this._render(this._currentState, this._data, 0), this._resume(this._timestamp);
          } }, { key: "setConfig", value: function value() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = this._config;for (var r in n) {
              e[r] = n[r];
            }var i = e.promise,
                u = void 0 === i ? this._promiseCtor : i,
                a = e.start,
                c = void 0 === a ? F : a,
                s = e.finish,
                f = e.render,
                l = void 0 === f ? this._config.step || F : f,
                h = e.step,
                p = void 0 === h ? F : h;this._data = e.data || e.attachment || this._data, this._isPlaying = !1, this._pausedAtTime = null, this._scheduleId = null, this._delay = n.delay || 0, this._start = c, this._render = l || p, this._duration = e.duration || 500, this._promiseCtor = u, s && (this._resolve = s);var d,
                v = n.from,
                _ = n.to,
                y = void 0 === _ ? {} : _,
                m = this._currentState,
                g = this._originalState,
                b = this._targetState;for (d in v) {
              m[d] = v[d];
            }var w = !1;for (d in m) {
              var O = m[d];w || "string" !== o(O) || (w = !0), g[d] = O, b[d] = y.hasOwnProperty(d) ? y[d] : O;
            }if (this._easing = R(this._currentState, e.easing, this._easing), this._filters.length = 0, w) {
              for (d in t.filters) {
                t.filters[d].doesApply(this) && this._filters.push(t.filters[d]);
              }this._applyFilter("tweenCreated");
            }return this;
          } }, { key: "then", value: function value(t, n) {
            var e = this;return this._promise = new this._promiseCtor(function (t, n) {
              e._resolve = t, e._reject = n;
            }), this._promise.then(t, n);
          } }, { key: "catch", value: function value(t) {
            return this.then().catch(t);
          } }, { key: "get", value: function value() {
            return c({}, this._currentState);
          } }, { key: "set", value: function value(t) {
            this._currentState = t;
          } }, { key: "pause", value: function value() {
            if (this._isPlaying) return this._pausedAtTime = t.now(), this._isPlaying = !1, z(this), this;
          } }, { key: "resume", value: function value() {
            return this._resume();
          } }, { key: "_resume", value: function value() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.now();return null === this._timestamp ? this.tween() : this._isPlaying ? this._promise : (this._pausedAtTime && (this._timestamp += n - this._pausedAtTime, this._pausedAtTime = null), this._isPlaying = !0, null === I ? (I = this, C = this) : (this._previous = C, C._next = this, C = this), this);
          } }, { key: "seek", value: function value(n) {
            n = Math.max(n, 0);var e = t.now();return this._timestamp + n === 0 || (this._timestamp = e - n, Q(this, e)), this;
          } }, { key: "stop", value: function value() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];if (!this._isPlaying) return this;this._isPlaying = !1, z(this);var n = this._filters.length > 0;t && (n && this._applyFilter("beforeTween"), q(1, this._currentState, this._originalState, this._targetState, 1, 0, this._easing), n && (this._applyFilter("afterTween"), this._applyFilter("afterTweenEnd"))), this._resolve && this._resolve({ data: this._data, state: this._currentState, tweenable: this }), this._resolve = null, this._reject = null;var e = this._currentState,
                r = this._originalState,
                i = this._targetState;for (var u in e) {
              r[u] = i[u] = e[u];
            }return this;
          } }, { key: "cancel", value: function value() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                n = this._currentState,
                e = this._data,
                r = this._isPlaying;return r ? (this._reject && this._reject({ data: e, state: n, tweenable: this }), this._resolve = null, this._reject = null, this.stop(t)) : this;
          } }, { key: "isPlaying", value: function value() {
            return this._isPlaying;
          } }, { key: "setScheduleFunction", value: function value(n) {
            t.setScheduleFunction(n);
          } }, { key: "data", value: function value() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;return t && (this._data = c({}, t)), this._data;
          } }, { key: "dispose", value: function value() {
            for (var t in this) {
              delete this[t];
            }
          } }]) && u(n.prototype, e), r && u(n, r), t;
      }();function U() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = new V();return n.tween(t), n.tweenable = n, n;
      }s(V, "now", function () {
        return M;
      }), V.setScheduleFunction = function (t) {
        return E = t;
      }, V.formulas = D, V.filters = {}, function t() {
        M = N(), E.call(x, t, 1e3 / 60), B();
      }();
    }).call(this, e(2));
  }, function (t, n, e) {
    "use strict";
    e.r(n), e.d(n, "linear", function () {
      return r;
    }), e.d(n, "easeInQuad", function () {
      return i;
    }), e.d(n, "easeOutQuad", function () {
      return u;
    }), e.d(n, "easeInOutQuad", function () {
      return o;
    }), e.d(n, "easeInCubic", function () {
      return a;
    }), e.d(n, "easeOutCubic", function () {
      return c;
    }), e.d(n, "easeInOutCubic", function () {
      return s;
    }), e.d(n, "easeInQuart", function () {
      return f;
    }), e.d(n, "easeOutQuart", function () {
      return l;
    }), e.d(n, "easeInOutQuart", function () {
      return h;
    }), e.d(n, "easeInQuint", function () {
      return p;
    }), e.d(n, "easeOutQuint", function () {
      return d;
    }), e.d(n, "easeInOutQuint", function () {
      return v;
    }), e.d(n, "easeInSine", function () {
      return _;
    }), e.d(n, "easeOutSine", function () {
      return y;
    }), e.d(n, "easeInOutSine", function () {
      return m;
    }), e.d(n, "easeInExpo", function () {
      return g;
    }), e.d(n, "easeOutExpo", function () {
      return b;
    }), e.d(n, "easeInOutExpo", function () {
      return w;
    }), e.d(n, "easeInCirc", function () {
      return O;
    }), e.d(n, "easeOutCirc", function () {
      return S;
    }), e.d(n, "easeInOutCirc", function () {
      return j;
    }), e.d(n, "easeOutBounce", function () {
      return k;
    }), e.d(n, "easeInBack", function () {
      return P;
    }), e.d(n, "easeOutBack", function () {
      return M;
    }), e.d(n, "easeInOutBack", function () {
      return A;
    }), e.d(n, "elastic", function () {
      return T;
    }), e.d(n, "swingFromTo", function () {
      return x;
    }), e.d(n, "swingFrom", function () {
      return E;
    }), e.d(n, "swingTo", function () {
      return F;
    }), e.d(n, "bounce", function () {
      return I;
    }), e.d(n, "bouncePast", function () {
      return C;
    }), e.d(n, "easeFromTo", function () {
      return D;
    }), e.d(n, "easeFrom", function () {
      return q;
    }), e.d(n, "easeTo", function () {
      return Q;
    });
    /*!
     * All equations are adapted from Thomas Fuchs'
     * [Scripty2](https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/penner.js).
     *
     * Based on Easing Equations (c) 2003 [Robert
     * Penner](http://www.robertpenner.com/), all rights reserved. This work is
     * [subject to terms](http://www.robertpenner.com/easing_terms_of_use.html).
     */
    /*!
     *  TERMS OF USE - EASING EQUATIONS
     *  Open source under the BSD License.
     *  Easing Equations (c) 2003 Robert Penner, all rights reserved.
     */
    var r = function r(t) {
      return t;
    },
        i = function i(t) {
      return Math.pow(t, 2);
    },
        u = function u(t) {
      return -(Math.pow(t - 1, 2) - 1);
    },
        o = function o(t) {
      return (t /= .5) < 1 ? .5 * Math.pow(t, 2) : -.5 * ((t -= 2) * t - 2);
    },
        a = function a(t) {
      return Math.pow(t, 3);
    },
        c = function c(t) {
      return Math.pow(t - 1, 3) + 1;
    },
        s = function s(t) {
      return (t /= .5) < 1 ? .5 * Math.pow(t, 3) : .5 * (Math.pow(t - 2, 3) + 2);
    },
        f = function f(t) {
      return Math.pow(t, 4);
    },
        l = function l(t) {
      return -(Math.pow(t - 1, 4) - 1);
    },
        h = function h(t) {
      return (t /= .5) < 1 ? .5 * Math.pow(t, 4) : -.5 * ((t -= 2) * Math.pow(t, 3) - 2);
    },
        p = function p(t) {
      return Math.pow(t, 5);
    },
        d = function d(t) {
      return Math.pow(t - 1, 5) + 1;
    },
        v = function v(t) {
      return (t /= .5) < 1 ? .5 * Math.pow(t, 5) : .5 * (Math.pow(t - 2, 5) + 2);
    },
        _ = function _(t) {
      return 1 - Math.cos(t * (Math.PI / 2));
    },
        y = function y(t) {
      return Math.sin(t * (Math.PI / 2));
    },
        m = function m(t) {
      return -.5 * (Math.cos(Math.PI * t) - 1);
    },
        g = function g(t) {
      return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
    },
        b = function b(t) {
      return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
    },
        w = function w(t) {
      return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t));
    },
        O = function O(t) {
      return -(Math.sqrt(1 - t * t) - 1);
    },
        S = function S(t) {
      return Math.sqrt(1 - Math.pow(t - 1, 2));
    },
        j = function j(t) {
      return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    },
        k = function k(t) {
      return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
    },
        P = function P(t) {
      var n = 1.70158;return t * t * ((n + 1) * t - n);
    },
        M = function M(t) {
      var n = 1.70158;return (t -= 1) * t * ((n + 1) * t + n) + 1;
    },
        A = function A(t) {
      var n = 1.70158;return (t /= .5) < 1 ? t * t * ((1 + (n *= 1.525)) * t - n) * .5 : .5 * ((t -= 2) * t * ((1 + (n *= 1.525)) * t + n) + 2);
    },
        T = function T(t) {
      return -1 * Math.pow(4, -8 * t) * Math.sin((6 * t - 1) * (2 * Math.PI) / 2) + 1;
    },
        x = function x(t) {
      var n = 1.70158;return (t /= .5) < 1 ? t * t * ((1 + (n *= 1.525)) * t - n) * .5 : .5 * ((t -= 2) * t * ((1 + (n *= 1.525)) * t + n) + 2);
    },
        E = function E(t) {
      var n = 1.70158;return t * t * ((n + 1) * t - n);
    },
        F = function F(t) {
      var n = 1.70158;return (t -= 1) * t * ((n + 1) * t + n) + 1;
    },
        I = function I(t) {
      return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
    },
        C = function C(t) {
      return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375);
    },
        D = function D(t) {
      return (t /= .5) < 1 ? .5 * Math.pow(t, 4) : -.5 * ((t -= 2) * Math.pow(t, 3) - 2);
    },
        q = function q(t) {
      return Math.pow(t, 4);
    },
        Q = function Q(t) {
      return Math.pow(t, .25);
    };
  }, function (t, n) {
    var e;e = function () {
      return this;
    }();try {
      e = e || new Function("return this")();
    } catch (t) {
      "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (e = window);
    }t.exports = e;
  }, function (t, n, e) {
    "use strict";
    e.r(n), e.d(n, "processTweens", function () {
      return o.c;
    }), e.d(n, "Tweenable", function () {
      return o.a;
    }), e.d(n, "tween", function () {
      return o.d;
    }), e.d(n, "interpolate", function () {
      return F;
    }), e.d(n, "Scene", function () {
      return N;
    }), e.d(n, "setBezierFunction", function () {
      return z;
    }), e.d(n, "unsetBezierFunction", function () {
      return L;
    });var r = {};e.r(r), e.d(r, "doesApply", function () {
      return S;
    }), e.d(r, "tweenCreated", function () {
      return j;
    }), e.d(r, "beforeTween", function () {
      return k;
    }), e.d(r, "afterTween", function () {
      return P;
    });var i,
        u,
        o = e(0),
        a = /(\d|-|\.)/,
        c = /([^\-0-9.]+)/g,
        s = /[0-9.-]+/g,
        f = (i = s.source, u = /,\s*/.source, new RegExp("rgb\\(".concat(i).concat(u).concat(i).concat(u).concat(i, "\\)"), "g")),
        l = /^.*\(/,
        h = /#([0-9]|[a-f]){3,6}/gi,
        p = function p(t, n) {
      return t.map(function (t, e) {
        return "_".concat(n, "_").concat(e);
      });
    };function d(t) {
      return parseInt(t, 16);
    }var v = function v(t) {
      return "rgb(".concat((n = t, 3 === (n = n.replace(/#/, "")).length && (n = (n = n.split(""))[0] + n[0] + n[1] + n[1] + n[2] + n[2]), [d(n.substr(0, 2)), d(n.substr(2, 2)), d(n.substr(4, 2))]).join(","), ")");var n;
    },
        _ = function _(t, n, e) {
      var r = n.match(t),
          i = n.replace(t, "VAL");return r && r.forEach(function (t) {
        return i = i.replace("VAL", e(t));
      }), i;
    },
        y = function y(t) {
      for (var n in t) {
        var e = t[n];"string" == typeof e && e.match(h) && (t[n] = _(h, e, v));
      }
    },
        m = function m(t) {
      var n = t.match(s).map(Math.floor),
          e = t.match(l)[0];return "".concat(e).concat(n.join(","), ")");
    },
        g = function g(t) {
      return t.match(s);
    },
        b = function b(t, n) {
      var e = {};return n.forEach(function (n) {
        e[n] = t[n], delete t[n];
      }), e;
    },
        w = function w(t, n) {
      return n.map(function (n) {
        return t[n];
      });
    },
        O = function O(t, n) {
      return n.forEach(function (n) {
        return t = t.replace("VAL", +n.toFixed(4));
      }), t;
    },
        S = function S(t) {
      for (var n in t._currentState) {
        if ("string" == typeof t._currentState[n]) return !0;
      }return !1;
    };function j(t) {
      var n = t._currentState;[n, t._originalState, t._targetState].forEach(y), t._tokenData = function (t) {
        var n,
            e,
            r = {};for (var i in t) {
          var u = t[i];"string" == typeof u && (r[i] = { formatString: (n = u, e = void 0, e = n.match(c), e ? (1 === e.length || n.charAt(0).match(a)) && e.unshift("") : e = ["", ""], e.join("VAL")), chunkNames: p(g(u), i) });
        }return r;
      }(n);
    }function k(t) {
      var n = t._currentState,
          e = t._originalState,
          r = t._targetState,
          i = t._easing,
          u = t._tokenData;!function (t, n) {
        var e = function e(_e) {
          var r = n[_e].chunkNames,
              i = t[_e];if ("string" == typeof i) {
            var u = i.split(" "),
                o = u[u.length - 1];r.forEach(function (n, e) {
              return t[n] = u[e] || o;
            });
          } else r.forEach(function (n) {
            return t[n] = i;
          });delete t[_e];
        };for (var r in n) {
          e(r);
        }
      }(i, u), [n, e, r].forEach(function (t) {
        return function (t, n) {
          var e = function e(_e2) {
            g(t[_e2]).forEach(function (r, i) {
              return t[n[_e2].chunkNames[i]] = +r;
            }), delete t[_e2];
          };for (var r in n) {
            e(r);
          }
        }(t, u);
      });
    }function P(t) {
      var n = t._currentState,
          e = t._originalState,
          r = t._targetState,
          i = t._easing,
          u = t._tokenData;[n, e, r].forEach(function (t) {
        return function (t, n) {
          for (var e in n) {
            var r = n[e],
                i = r.chunkNames,
                u = r.formatString,
                o = O(u, w(b(t, i), i));t[e] = _(f, o, m);
          }
        }(t, u);
      }), function (t, n) {
        for (var e in n) {
          var r = n[e].chunkNames,
              i = t[r[0]];t[e] = "string" == typeof i ? r.map(function (n) {
            var e = t[n];return delete t[n], e;
          }).join(" ") : i;
        }
      }(i, u);
    }function M(t, n) {
      var e = Object.keys(t);if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);n && (r = r.filter(function (n) {
          return Object.getOwnPropertyDescriptor(t, n).enumerable;
        })), e.push.apply(e, r);
      }return e;
    }function A(t) {
      for (var n = 1; n < arguments.length; n++) {
        var e = null != arguments[n] ? arguments[n] : {};n % 2 ? M(Object(e), !0).forEach(function (n) {
          T(t, n, e[n]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : M(Object(e)).forEach(function (n) {
          Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
        });
      }return t;
    }function T(t, n, e) {
      return n in t ? Object.defineProperty(t, n, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : t[n] = e, t;
    }var x = new o.a(),
        E = o.a.filters,
        F = function F(t, n, e, r) {
      var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          u = A({}, t),
          a = Object(o.b)(t, r);for (var c in x._filters.length = 0, x.set({}), x._currentState = u, x._originalState = t, x._targetState = n, x._easing = a, E) {
        E[c].doesApply(x) && x._filters.push(E[c]);
      }x._applyFilter("tweenCreated"), x._applyFilter("beforeTween");var s = Object(o.e)(e, u, t, n, 1, i, a);return x._applyFilter("afterTween"), s;
    };function I(t) {
      return function (t) {
        if (Array.isArray(t)) return C(t);
      }(t) || function (t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
      }(t) || function (t, n) {
        if (!t) return;if ("string" == typeof t) return C(t, n);var e = Object.prototype.toString.call(t).slice(8, -1);"Object" === e && t.constructor && (e = t.constructor.name);if ("Map" === e || "Set" === e) return Array.from(t);if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return C(t, n);
      }(t) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }function C(t, n) {
      (null == n || n > t.length) && (n = t.length);for (var e = 0, r = new Array(n); e < n; e++) {
        r[e] = t[e];
      }return r;
    }function D(t, n) {
      if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
    }function q(t, n) {
      for (var e = 0; e < n.length; e++) {
        var r = n[e];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }function Q(t, n) {
      var e = n.get(t);if (!e) throw new TypeError("attempted to get private field on non-instance");return e.get ? e.get.call(t) : e.value;
    }var B = new WeakMap(),
        N = function () {
      function t() {
        D(this, t), B.set(this, { writable: !0, value: [] });for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) {
          e[r] = arguments[r];
        }e.forEach(this.add.bind(this));
      }var n, e, r;return n = t, (e = [{ key: "add", value: function value(t) {
          return Q(this, B).push(t), t;
        } }, { key: "remove", value: function value(t) {
          var n = Q(this, B).indexOf(t);return ~n && Q(this, B).splice(n, 1), t;
        } }, { key: "empty", value: function value() {
          return this.tweenables.map(this.remove.bind(this));
        } }, { key: "isPlaying", value: function value() {
          return Q(this, B).some(function (t) {
            return t.isPlaying();
          });
        } }, { key: "play", value: function value() {
          return Q(this, B).forEach(function (t) {
            return t.tween();
          }), this;
        } }, { key: "pause", value: function value() {
          return Q(this, B).forEach(function (t) {
            return t.pause();
          }), this;
        } }, { key: "resume", value: function value() {
          return Q(this, B).forEach(function (t) {
            return t.resume();
          }), this;
        } }, { key: "stop", value: function value(t) {
          return Q(this, B).forEach(function (n) {
            return n.stop(t);
          }), this;
        } }, { key: "tweenables", get: function get() {
          return I(Q(this, B));
        } }, { key: "promises", get: function get() {
          return Q(this, B).map(function (t) {
            return t.then();
          });
        } }]) && q(n.prototype, e), r && q(n, r), t;
    }();function R(t, n, e, r, i, u) {
      var o,
          a,
          c = 0,
          s = 0,
          f = 0,
          l = 0,
          h = 0,
          p = 0,
          d = function d(t) {
        return ((c * t + s) * t + f) * t;
      },
          v = function v(t) {
        return (3 * c * t + 2 * s) * t + f;
      },
          _ = function _(t) {
        return t >= 0 ? t : 0 - t;
      };return c = 1 - (f = 3 * n) - (s = 3 * (r - n) - f), l = 1 - (p = 3 * e) - (h = 3 * (i - e) - p), o = t, a = function (t) {
        return 1 / (200 * t);
      }(u), function (t) {
        return ((l * t + h) * t + p) * t;
      }(function (t, n) {
        var e, r, i, u, o, a;for (i = t, a = 0; a < 8; a++) {
          if (u = d(i) - t, _(u) < n) return i;if (o = v(i), _(o) < 1e-6) break;i -= u / o;
        }if ((i = t) < (e = 0)) return e;if (i > (r = 1)) return r;for (; e < r;) {
          if (u = d(i), _(u - t) < n) return i;t > u ? e = i : r = i, i = .5 * (r - e) + e;
        }return i;
      }(o, a));
    }var z = function z(t, n, e, r, i) {
      var u = function (t, n, e, r) {
        return function (i) {
          return R(i, t, n, e, r, 1);
        };
      }(n, e, r, i);return u.displayName = t, u.x1 = n, u.y1 = e, u.x2 = r, u.y2 = i, o.a.formulas[t] = u;
    },
        L = function L(t) {
      return delete o.a.formulas[t];
    };o.a.filters.token = r;
  }]);
});