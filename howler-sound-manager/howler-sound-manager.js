"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gdjs;
(function (gdjs2) {
  var HowlParameters = {
    preload: true,
    onplayerror: function onplayerror(_, error) {
      return console.error("Can't play an audio file: ", error);
    },
    onloaderror: function onloaderror(_, error) {
      return console.error("Error while loading an audio file: ", error);
    }
  };

  var HowlerSound = function () {
    function HowlerSound(howl) {
      _classCallCheck(this, HowlerSound);

      this._id = null;
      this._oncePlay = [];
      this._onPlay = [];
      this._howl = howl;
    }

    _createClass(HowlerSound, [{
      key: "isLoaded",
      value: function isLoaded() {
        return this._howl.state() === "loaded";
      }
    }, {
      key: "play",
      value: function play() {
        var _this = this;

        if (this.isLoaded()) {
          var newID = this._howl.play(this._id === null ? "__default" : this._id);
          this._id = newID;
          this._onPlay.forEach(function (func) {
            _this.on("play", func);
            func(newID);
          });
          this._oncePlay.forEach(function (func) {
            return func(newID);
          });
          this._onPlay = [];
          this._oncePlay = [];
        } else this._howl.once("load", function () {
          return _this.play();
        });
        return this;
      }
    }, {
      key: "pause",
      value: function pause() {
        if (this._id !== null) this._howl.pause(this._id);
        return this;
      }
    }, {
      key: "stop",
      value: function stop() {
        if (this._id !== null) this._howl.stop(this._id);
        return this;
      }
    }, {
      key: "playing",
      value: function playing() {
        return (this._id !== null ? this._howl.playing(this._id) : true) || !this.isLoaded();
      }
    }, {
      key: "paused",
      value: function paused() {
        return !this.playing();
      }
    }, {
      key: "stopped",
      value: function stopped() {
        return this.paused() && this.getSeek() === 0;
      }
    }, {
      key: "getRate",
      value: function getRate() {
        if (this._id === null) return 0;
        return this._howl.rate(this._id);
      }
    }, {
      key: "setRate",
      value: function setRate(rate) {
        if (this._id !== null) {
          rate = gdjs2.HowlerSoundManager.clampRate(rate);
          this._howl.rate(rate, this._id);
        }
        return this;
      }
    }, {
      key: "getLoop",
      value: function getLoop() {
        if (this._id === null) return false;
        return this._howl.loop(this._id);
      }
    }, {
      key: "setLoop",
      value: function setLoop(loop) {
        if (this._id !== null) this._howl.loop(loop, this._id);
        return this;
      }
    }, {
      key: "getVolume",
      value: function getVolume() {
        if (this._id === null) return 100;
        return this._howl.volume(this._id);
      }
    }, {
      key: "setVolume",
      value: function setVolume(volume) {
        if (this._id !== null) this._howl.volume(volume, this._id);
        return this;
      }
    }, {
      key: "getMute",
      value: function getMute() {
        if (this._id === null) return false;
        return this._howl.mute(this._id);
      }
    }, {
      key: "setMute",
      value: function setMute(mute) {
        if (this._id !== null) this._howl.mute(mute, this._id);
        return this;
      }
    }, {
      key: "getSeek",
      value: function getSeek() {
        if (this._id === null) return 0;
        return this._howl.seek(this._id);
      }
    }, {
      key: "setSeek",
      value: function setSeek(seek) {
        if (this._id !== null) this._howl.seek(seek, this._id);
        return this;
      }
    }, {
      key: "getSpatialPosition",
      value: function getSpatialPosition(axis) {
        if (this._id === null) return 0;
        return this._howl.pos(this._id)[axis === "x" ? 0 : axis === "y" ? 1 : 2];
      }
    }, {
      key: "setSpatialPosition",
      value: function setSpatialPosition(x, y, z) {
        if (this._id !== null) this._howl.pos(x, y, z, this._id);
        return this;
      }
    }, {
      key: "fade",
      value: function fade(from, to, duration) {
        if (this._id !== null) this._howl.fade(from, to, duration, this._id);
        return this;
      }
    }, {
      key: "on",
      value: function on(event, handler) {
        var _this2 = this;

        if (event === "play") {
          if (this._id === null) {
            this._onPlay.push(handler);
          } else {
            this._howl.on(event, handler, this._id);
          }
        } else if (this._id === null) this.once("play", function () {
          return _this2.on(event, handler);
        });else this._howl.on(event, handler, this._id);
        return this;
      }
    }, {
      key: "once",
      value: function once(event, handler) {
        var _this3 = this;

        if (event === "play") {
          if (this._id === null) {
            this._oncePlay.push(handler);
          } else if (this.playing()) {
            handler(this._id);
          } else {
            this._howl.once(event, handler, this._id);
          }
        } else if (this._id === null) this.once("play", function () {
          return _this3.once(event, handler);
        });else this._howl.once(event, handler, this._id);
        return this;
      }
    }, {
      key: "off",
      value: function off(event, handler) {
        if (this._id !== null) this._howl.off(event, handler, this._id);
        return this;
      }
    }]);

    return HowlerSound;
  }();

  gdjs2.HowlerSound = HowlerSound;

  var HowlerSoundManager = function () {
    function HowlerSoundManager(resources) {
      _classCallCheck(this, HowlerSoundManager);

      this._loadedMusics = {};
      this._loadedSounds = {};
      this._availableResources = {};
      this._globalVolume = 100;
      this._sounds = {};
      this._musics = {};
      this._freeSounds = [];
      this._freeMusics = [];
      this._pausedSounds = [];
      this._paused = false;
      this._resources = resources;
      var that = this;
      document.addEventListener("deviceready", function () {
        document.addEventListener("pause", function () {
          var soundList = that._freeSounds.concat(that._freeMusics);
          for (var key in that._sounds) {
            if (that._sounds.hasOwnProperty(key)) {
              soundList.push(that._sounds[key]);
            }
          }
          for (var _key in that._musics) {
            if (that._musics.hasOwnProperty(_key)) {
              soundList.push(that._musics[_key]);
            }
          }
          for (var i = 0; i < soundList.length; i++) {
            var sound = soundList[i];
            if (!sound.paused() && !sound.stopped()) {
              sound.pause();
              that._pausedSounds.push(sound);
            }
          }
          that._paused = true;
        }, false);
        document.addEventListener("resume", function () {
          for (var i = 0; i < that._pausedSounds.length; i++) {
            var sound = that._pausedSounds[i];
            if (!sound.stopped()) {
              sound.play();
            }
          }
          that._pausedSounds.length = 0;
          that._paused = false;
        }, false);
      });
    }

    _createClass(HowlerSoundManager, [{
      key: "setResources",
      value: function setResources(resources) {
        this._resources = resources;
      }
    }, {
      key: "_getFileFromSoundName",
      value: function _getFileFromSoundName(soundName) {
        if (this._availableResources.hasOwnProperty(soundName) && this._availableResources[soundName].file) {
          return this._availableResources[soundName].file;
        }
        return soundName;
      }
    }, {
      key: "_storeSoundInArray",
      value: function _storeSoundInArray(arr, sound) {
        for (var i = 0, len = arr.length; i < len; ++i) {
          if (arr[i] !== null && arr[i].stopped()) {
            arr[i] = sound;
            return sound;
          }
        }
        arr.push(sound);
        return sound;
      }
    }, {
      key: "createHowlerSound",
      value: function createHowlerSound(soundName, isMusic) {
        var soundFile = this._getFileFromSoundName(soundName);
        var cacheContainer = isMusic ? this._loadedMusics : this._loadedSounds;
        if (!cacheContainer.hasOwnProperty(soundFile)) {
          cacheContainer[soundFile] = new Howl(Object.assign({
            src: [soundFile],
            html5: isMusic
          }, HowlParameters));
        }
        return new gdjs2.HowlerSound(cacheContainer[soundFile]);
      }
    }, {
      key: "loadAudio",
      value: function loadAudio(soundName, isMusic) {
        var soundFile = this._getFileFromSoundName(soundName);
        var cacheContainer = isMusic ? this._loadedMusics : this._loadedSounds;
        if (cacheContainer.hasOwnProperty(soundFile)) return;
        cacheContainer[soundFile] = new Howl(Object.assign({
          src: [soundFile],
          html5: isMusic
        }, HowlParameters));
      }
    }, {
      key: "unloadAudio",
      value: function unloadAudio(soundName, isMusic) {
        var soundFile = this._getFileFromSoundName(soundName);
        var cacheContainer = isMusic ? this._loadedMusics : this._loadedSounds;
        if (!cacheContainer[soundFile]) return;
        var howl = cacheContainer[soundFile];
        function clearContainer(howlerSoundContainer) {
          for (var i in howlerSoundContainer) {
            if (howlerSoundContainer[i] && howlerSoundContainer[i]._howl === howl) {
              howlerSoundContainer[i].stop();
              delete howlerSoundContainer[i];
            }
          }
        }
        clearContainer(this._freeMusics);
        clearContainer(this._freeSounds);
        clearContainer(Object.values(this._musics));
        clearContainer(Object.values(this._sounds));
        clearContainer(this._pausedSounds);
        cacheContainer[soundFile].unload();
        delete cacheContainer[soundFile];
      }
    }, {
      key: "unloadAll",
      value: function unloadAll() {
        Howler.unload();
        this._freeSounds.length = 0;
        this._freeMusics.length = 0;
        this._sounds = {};
        this._musics = {};
        this._pausedSounds.length = 0;
        this._loadedMusics = {};
        this._loadedSounds = {};
      }
    }, {
      key: "playSound",
      value: function playSound(soundName, loop, volume, pitch) {
        var _this4 = this;

        var sound = this.createHowlerSound(soundName, false);
        this._storeSoundInArray(this._freeSounds, sound).play();
        sound.once("play", function () {
          sound.setLoop(loop).setVolume(volume / 100).setRate(pitch);
          if (_this4._paused) {
            sound.pause();
            _this4._pausedSounds.push(sound);
          }
        });
      }
    }, {
      key: "playSoundOnChannel",
      value: function playSoundOnChannel(soundName, channel, loop, volume, pitch) {
        var _this5 = this;

        if (this._sounds[channel]) this._sounds[channel].stop();
        var sound = this.createHowlerSound(soundName, false).play();
        this._sounds[channel] = sound;
        sound.once("play", function () {
          sound.setLoop(loop).setVolume(volume / 100).setRate(pitch);
          if (_this5._paused) {
            sound.pause();
            _this5._pausedSounds.push(sound);
          }
        });
      }
    }, {
      key: "getSoundOnChannel",
      value: function getSoundOnChannel(channel) {
        return this._sounds[channel];
      }
    }, {
      key: "playMusic",
      value: function playMusic(soundName, loop, volume, pitch) {
        var _this6 = this;

        var music = this.createHowlerSound(soundName, true);
        this._storeSoundInArray(this._freeMusics, music).play();
        music.once("play", function () {
          music.setLoop(loop).setVolume(volume / 100).setRate(pitch);
          if (_this6._paused) {
            music.pause();
            _this6._pausedSounds.push(music);
          }
        });
      }
    }, {
      key: "playMusicOnChannel",
      value: function playMusicOnChannel(soundName, channel, loop, volume, pitch) {
        var _this7 = this;

        if (this._musics[channel]) this._musics[channel].stop();
        var music = this.createHowlerSound(soundName, true).play();
        this._musics[channel] = music;
        music.once("play", function () {
          music.setLoop(loop).setVolume(volume / 100).setRate(pitch);
          if (_this7._paused) {
            music.pause();
            _this7._pausedSounds.push(music);
          }
        });
      }
    }, {
      key: "getMusicOnChannel",
      value: function getMusicOnChannel(channel) {
        return this._musics[channel];
      }
    }, {
      key: "setGlobalVolume",
      value: function setGlobalVolume(volume) {
        this._globalVolume = volume;
        if (this._globalVolume > 100) {
          this._globalVolume = 100;
        }
        if (this._globalVolume < 0) {
          this._globalVolume = 0;
        }
        Howler.volume(this._globalVolume / 100);
      }
    }, {
      key: "getGlobalVolume",
      value: function getGlobalVolume() {
        return this._globalVolume;
      }
    }, {
      key: "clearAll",
      value: function clearAll() {
        Howler.stop();
        this._freeSounds.length = 0;
        this._freeMusics.length = 0;
        this._sounds = {};
        this._musics = {};
        this._pausedSounds.length = 0;
      }
    }, {
      key: "preloadAudio",
      value: function preloadAudio(onProgress, onComplete, resources) {
        var _this8 = this;

        resources = resources || this._resources;
        var files = {};
        for (var i = 0, len = resources.length; i < len; ++i) {
          var res = resources[i];
          if (res.file && res.kind === "audio") {
            if (!!this._availableResources[res.name]) {
              continue;
            }
            this._availableResources[res.name] = res;
            files[res.file] = (files[res.file] || []).concat(res);
          }
        }
        var totalCount = Object.keys(files).length;
        if (totalCount === 0) return onComplete(totalCount);
        var loadedCount = 0;
        var onLoad = function onLoad(_, error) {
          if (error) console.error("There was an error while loading an audio file:", error);
          loadedCount++;
          if (loadedCount === totalCount) return onComplete(totalCount);
          onProgress(loadedCount, totalCount);
        };
        var preloadAudioFile = function preloadAudioFile(file, onLoadCallback, isMusic) {
          var container = isMusic ? _this8._loadedMusics : _this8._loadedSounds;
          container[file] = new Howl(Object.assign({}, HowlParameters, {
            src: [file],
            onload: onLoadCallback,
            onloaderror: onLoadCallback,
            html5: isMusic
          }));
        };
        for (var file in files) {
          if (files.hasOwnProperty(file)) {
            var fileData = files[file][0];
            if (!fileData.preloadAsSound && !fileData.preloadAsMusic) {
              onLoad();
            } else if (fileData.preloadAsSound && fileData.preloadAsMusic) {
              (function () {
                var loadedOnce = false;
                var callback = function callback(_, error) {
                  if (!loadedOnce) {
                    loadedOnce = true;
                    return;
                  }
                  onLoad(_, error);
                };
                preloadAudioFile(file, callback, true);
                preloadAudioFile(file, callback, false);
              })();
            } else if (fileData.preloadAsSound) {
              preloadAudioFile(file, onLoad, false);
            } else if (fileData.preloadAsMusic) preloadAudioFile(file, onLoad, true);
          }
        }
      }
    }], [{
      key: "clampRate",
      value: function clampRate(rate) {
        if (rate > 4) {
          return 4;
        }
        if (rate < 0.5) {
          return 0.5;
        }
        return rate;
      }
    }]);

    return HowlerSoundManager;
  }();

  gdjs2.HowlerSoundManager = HowlerSoundManager;
  gdjs2.SoundManager = HowlerSoundManager;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=howler-sound-manager.js.map