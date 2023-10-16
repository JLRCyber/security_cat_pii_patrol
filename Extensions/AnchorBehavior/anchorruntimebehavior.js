"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var gdjs;
(function (gdjs2) {
  var AnchorRuntimeBehavior2 = function (_gdjs2$RuntimeBehavio) {
    _inherits(AnchorRuntimeBehavior2, _gdjs2$RuntimeBehavio);

    function AnchorRuntimeBehavior2(runtimeScene, behaviorData, owner) {
      _classCallCheck(this, AnchorRuntimeBehavior2);

      var _this = _possibleConstructorReturn(this, (AnchorRuntimeBehavior2.__proto__ || Object.getPrototypeOf(AnchorRuntimeBehavior2)).call(this, runtimeScene, behaviorData, owner));

      _this._invalidDistances = true;
      _this._leftEdgeDistance = 0;
      _this._rightEdgeDistance = 0;
      _this._topEdgeDistance = 0;
      _this._bottomEdgeDistance = 0;
      _this._relativeToOriginalWindowSize = !!behaviorData.relativeToOriginalWindowSize;
      _this._leftEdgeAnchor = behaviorData.leftEdgeAnchor;
      _this._rightEdgeAnchor = behaviorData.rightEdgeAnchor;
      _this._topEdgeAnchor = behaviorData.topEdgeAnchor;
      _this._bottomEdgeAnchor = behaviorData.bottomEdgeAnchor;
      return _this;
    }

    _createClass(AnchorRuntimeBehavior2, [{
      key: "updateFromBehaviorData",
      value: function updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
        if (oldBehaviorData.leftEdgeAnchor !== newBehaviorData.leftEdgeAnchor) {
          this._leftEdgeAnchor = newBehaviorData.leftEdgeAnchor;
        }
        if (oldBehaviorData.rightEdgeAnchor !== newBehaviorData.rightEdgeAnchor) {
          this._rightEdgeAnchor = newBehaviorData.rightEdgeAnchor;
        }
        if (oldBehaviorData.topEdgeAnchor !== newBehaviorData.topEdgeAnchor) {
          this._topEdgeAnchor = newBehaviorData.topEdgeAnchor;
        }
        if (oldBehaviorData.bottomEdgeAnchor !== newBehaviorData.bottomEdgeAnchor) {
          this._bottomEdgeAnchor = newBehaviorData.bottomEdgeAnchor;
        }
        if (oldBehaviorData.relativeToOriginalWindowSize !== newBehaviorData.relativeToOriginalWindowSize) {
          return false;
        }
        return true;
      }
    }, {
      key: "onActivate",
      value: function onActivate() {
        this._invalidDistances = true;
      }
    }, {
      key: "doStepPreEvents",
      value: function doStepPreEvents(runtimeScene) {
        var game = runtimeScene.getGame();
        var rendererWidth = game.getGameResolutionWidth();
        var rendererHeight = game.getGameResolutionHeight();
        var layer = runtimeScene.getLayer(this.owner.getLayer());
        if (this._invalidDistances) {
          if (this._relativeToOriginalWindowSize) {
            rendererWidth = game.getOriginalWidth();
            rendererHeight = game.getOriginalHeight();
          }
          var topLeftPixel = layer.convertCoords(this.owner.getDrawableX(), this.owner.getDrawableY());
          if (this._leftEdgeAnchor === AnchorRuntimeBehavior2.HorizontalAnchor.WINDOW_LEFT) {
            this._leftEdgeDistance = topLeftPixel[0];
          } else {
            if (this._leftEdgeAnchor === AnchorRuntimeBehavior2.HorizontalAnchor.WINDOW_RIGHT) {
              this._leftEdgeDistance = rendererWidth - topLeftPixel[0];
            } else {
              if (this._leftEdgeAnchor === AnchorRuntimeBehavior2.HorizontalAnchor.PROPORTIONAL) {
                this._leftEdgeDistance = topLeftPixel[0] / rendererWidth;
              }
            }
          }
          if (this._topEdgeAnchor === AnchorRuntimeBehavior2.VerticalAnchor.WINDOW_TOP) {
            this._topEdgeDistance = topLeftPixel[1];
          } else {
            if (this._topEdgeAnchor === AnchorRuntimeBehavior2.VerticalAnchor.WINDOW_BOTTOM) {
              this._topEdgeDistance = rendererHeight - topLeftPixel[1];
            } else {
              if (this._topEdgeAnchor === AnchorRuntimeBehavior2.VerticalAnchor.PROPORTIONAL) {
                this._topEdgeDistance = topLeftPixel[1] / rendererHeight;
              }
            }
          }
          var bottomRightPixel = layer.convertCoords(this.owner.getDrawableX() + this.owner.getWidth(), this.owner.getDrawableY() + this.owner.getHeight());
          if (this._rightEdgeAnchor === AnchorRuntimeBehavior2.HorizontalAnchor.WINDOW_LEFT) {
            this._rightEdgeDistance = bottomRightPixel[0];
          } else {
            if (this._rightEdgeAnchor === AnchorRuntimeBehavior2.HorizontalAnchor.WINDOW_RIGHT) {
              this._rightEdgeDistance = rendererWidth - bottomRightPixel[0];
            } else {
              if (this._rightEdgeAnchor === AnchorRuntimeBehavior2.HorizontalAnchor.PROPORTIONAL) {
                this._rightEdgeDistance = bottomRightPixel[0] / rendererWidth;
              }
            }
          }
          if (this._bottomEdgeAnchor === AnchorRuntimeBehavior2.VerticalAnchor.WINDOW_TOP) {
            this._bottomEdgeDistance = bottomRightPixel[1];
          } else {
            if (this._bottomEdgeAnchor === AnchorRuntimeBehavior2.VerticalAnchor.WINDOW_BOTTOM) {
              this._bottomEdgeDistance = rendererHeight - bottomRightPixel[1];
            } else {
              if (this._bottomEdgeAnchor === AnchorRuntimeBehavior2.VerticalAnchor.PROPORTIONAL) {
                this._bottomEdgeDistance = bottomRightPixel[1] / rendererHeight;
              }
            }
          }
          this._invalidDistances = false;
        } else {
          var leftPixel = 0;
          var topPixel = 0;
          var rightPixel = 0;
          var bottomPixel = 0;
          if (this._leftEdgeAnchor === AnchorRuntimeBehavior2.HorizontalAnchor.WINDOW_LEFT) {
            leftPixel = this._leftEdgeDistance;
          } else {
            if (this._leftEdgeAnchor === AnchorRuntimeBehavior2.HorizontalAnchor.WINDOW_RIGHT) {
              leftPixel = rendererWidth - this._leftEdgeDistance;
            } else {
              if (this._leftEdgeAnchor === AnchorRuntimeBehavior2.HorizontalAnchor.PROPORTIONAL) {
                leftPixel = this._leftEdgeDistance * rendererWidth;
              }
            }
          }
          if (this._topEdgeAnchor === AnchorRuntimeBehavior2.VerticalAnchor.WINDOW_TOP) {
            topPixel = this._topEdgeDistance;
          } else {
            if (this._topEdgeAnchor === AnchorRuntimeBehavior2.VerticalAnchor.WINDOW_BOTTOM) {
              topPixel = rendererHeight - this._topEdgeDistance;
            } else {
              if (this._topEdgeAnchor === AnchorRuntimeBehavior2.VerticalAnchor.PROPORTIONAL) {
                topPixel = this._topEdgeDistance * rendererHeight;
              }
            }
          }
          if (this._rightEdgeAnchor === AnchorRuntimeBehavior2.HorizontalAnchor.WINDOW_LEFT) {
            rightPixel = this._rightEdgeDistance;
          } else {
            if (this._rightEdgeAnchor === AnchorRuntimeBehavior2.HorizontalAnchor.WINDOW_RIGHT) {
              rightPixel = rendererWidth - this._rightEdgeDistance;
            } else {
              if (this._rightEdgeAnchor === AnchorRuntimeBehavior2.HorizontalAnchor.PROPORTIONAL) {
                rightPixel = this._rightEdgeDistance * rendererWidth;
              }
            }
          }
          if (this._bottomEdgeAnchor === AnchorRuntimeBehavior2.VerticalAnchor.WINDOW_TOP) {
            bottomPixel = this._bottomEdgeDistance;
          } else {
            if (this._bottomEdgeAnchor === AnchorRuntimeBehavior2.VerticalAnchor.WINDOW_BOTTOM) {
              bottomPixel = rendererHeight - this._bottomEdgeDistance;
            } else {
              if (this._bottomEdgeAnchor === AnchorRuntimeBehavior2.VerticalAnchor.PROPORTIONAL) {
                bottomPixel = this._bottomEdgeDistance * rendererHeight;
              }
            }
          }
          var topLeftCoord = layer.convertInverseCoords(leftPixel, topPixel);
          var bottomRightCoord = layer.convertInverseCoords(rightPixel, bottomPixel);
          if (this._rightEdgeAnchor !== AnchorRuntimeBehavior2.HorizontalAnchor.NONE) {
            this.owner.setWidth(bottomRightCoord[0] - topLeftCoord[0]);
          }
          if (this._bottomEdgeAnchor !== AnchorRuntimeBehavior2.VerticalAnchor.NONE) {
            this.owner.setHeight(bottomRightCoord[1] - topLeftCoord[1]);
          }
          if (this._leftEdgeAnchor !== AnchorRuntimeBehavior2.HorizontalAnchor.NONE) {
            this.owner.setX(topLeftCoord[0] + this.owner.getX() - this.owner.getDrawableX());
          }
          if (this._topEdgeAnchor !== AnchorRuntimeBehavior2.VerticalAnchor.NONE) {
            this.owner.setY(topLeftCoord[1] + this.owner.getY() - this.owner.getDrawableY());
          }
        }
      }
    }, {
      key: "doStepPostEvents",
      value: function doStepPostEvents(runtimeScene) {}
    }]);

    return AnchorRuntimeBehavior2;
  }(gdjs2.RuntimeBehavior);
  var AnchorRuntimeBehavior = AnchorRuntimeBehavior2;
  AnchorRuntimeBehavior.HorizontalAnchor = {
    NONE: 0,
    WINDOW_LEFT: 1,
    WINDOW_RIGHT: 2,
    PROPORTIONAL: 3
  };
  AnchorRuntimeBehavior.VerticalAnchor = {
    NONE: 0,
    WINDOW_TOP: 1,
    WINDOW_BOTTOM: 2,
    PROPORTIONAL: 3
  };
  gdjs2.AnchorRuntimeBehavior = AnchorRuntimeBehavior;
  gdjs2.registerBehavior("AnchorBehavior::AnchorBehavior", gdjs2.AnchorRuntimeBehavior);
})(gdjs || (gdjs = {}));
//# sourceMappingURL=anchorruntimebehavior.js.map