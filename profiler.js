"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gdjs;
(function (gdjs2) {
  var Profiler = function () {
    function Profiler() {
      _classCallCheck(this, Profiler);

      this._framesMeasures = [];
      this._currentFrameIndex = 0;
      this._currentFrameMeasure = {
        parent: null,
        time: 0,
        lastStartTime: 0,
        subsections: {}
      };
      this._currentSection = null;
      this._maxFramesCount = 600;
      this._framesCount = 0;
      while (this._framesMeasures.length < this._maxFramesCount) {
        this._framesMeasures.push({
          parent: null,
          time: 0,
          lastStartTime: 0,
          subsections: {}
        });
      }
      this._getTimeNow = window.performance && typeof window.performance.now === "function" ? window.performance.now.bind(window.performance) : Date.now;
    }

    _createClass(Profiler, [{
      key: "beginFrame",
      value: function beginFrame() {
        this._currentFrameMeasure = {
          parent: null,
          time: 0,
          lastStartTime: this._getTimeNow(),
          subsections: {}
        };
        this._currentSection = this._currentFrameMeasure;
      }
    }, {
      key: "begin",
      value: function begin(sectionName) {
        if (this._currentSection === null) throw new Error("Impossible to call Profiler.begin() when not profiling a frame!");
        var subsections = this._currentSection.subsections;
        var subsection = subsections[sectionName] = subsections[sectionName] || {
          parent: this._currentSection,
          time: 0,
          lastStartTime: 0,
          subsections: {}
        };
        this._currentSection = subsection;
        this._currentSection.lastStartTime = this._getTimeNow();
      }
    }, {
      key: "end",
      value: function end(sectionName) {
        if (this._currentSection === null) throw new Error("Impossible to call Profiler.end() when not profiling a frame!");
        var sectionTime = this._getTimeNow() - this._currentSection.lastStartTime;
        this._currentSection.time = (this._currentSection.time || 0) + sectionTime;
        if (this._currentSection.parent !== null) this._currentSection = this._currentSection.parent;
      }
    }, {
      key: "endFrame",
      value: function endFrame() {
        if (this._currentSection === null) throw new Error("Impossible to end profiling a frame when profiling has not started a frame!");
        if (this._currentSection.parent !== null) {
          throw new Error("Mismatch in profiler, endFrame should be called on root section");
        }
        this.end();
        this._framesCount++;
        if (this._framesCount > this._maxFramesCount) {
          this._framesCount = this._maxFramesCount;
        }
        this._framesMeasures[this._currentFrameIndex] = this._currentFrameMeasure;
        this._currentFrameIndex++;
        if (this._currentFrameIndex >= this._maxFramesCount) {
          this._currentFrameIndex = 0;
        }
      }
    }, {
      key: "getFramesAverageMeasures",
      value: function getFramesAverageMeasures() {
        var framesAverageMeasures = {
          parent: null,
          time: 0,
          lastStartTime: 0,
          subsections: {}
        };
        for (var i = 0; i < this._framesCount; ++i) {
          Profiler._addAverageSectionTimes(this._framesMeasures[i], framesAverageMeasures, this._framesCount, i);
        }
        return framesAverageMeasures;
      }
    }, {
      key: "getStats",
      value: function getStats() {
        return { framesCount: this._framesCount };
      }
    }], [{
      key: "_addAverageSectionTimes",
      value: function _addAverageSectionTimes(section, destinationSection, totalCount, i) {
        destinationSection.time = (destinationSection.time || 0) + section.time / totalCount;
        for (var sectionName in section.subsections) {
          if (section.subsections.hasOwnProperty(sectionName)) {
            var destinationSubsections = destinationSection.subsections;
            var destinationSubsection = destinationSubsections[sectionName] = destinationSubsections[sectionName] || {
              parent: destinationSection,
              time: 0,
              subsections: {}
            };
            Profiler._addAverageSectionTimes(section.subsections[sectionName], destinationSubsection, totalCount, i);
          }
        }
      }
    }, {
      key: "getProfilerSectionTexts",
      value: function getProfilerSectionTexts(sectionName, profilerSection, outputs) {
        var percent = profilerSection.parent && profilerSection.parent.time !== 0 ? (profilerSection.time / profilerSection.parent.time * 100).toFixed(1) : "100%";
        var time = profilerSection.time.toFixed(2);
        outputs.push(sectionName + ": " + time + "ms (" + percent + ")");
        var subsectionsOutputs = [];
        for (var subsectionName in profilerSection.subsections) {
          if (profilerSection.subsections.hasOwnProperty(subsectionName)) {
            Profiler.getProfilerSectionTexts(subsectionName, profilerSection.subsections[subsectionName], subsectionsOutputs);
          }
        }
        outputs.push.apply(outputs, subsectionsOutputs);
      }
    }]);

    return Profiler;
  }();

  gdjs2.Profiler = Profiler;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=profiler.js.map