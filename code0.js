"use strict";

gdjs.PresceneCode = {};
gdjs.PresceneCode.GDBackgroundObjects1 = [];
gdjs.PresceneCode.GDBackgroundObjects2 = [];
gdjs.PresceneCode.GDBackgroundObjects3 = [];
gdjs.PresceneCode.GDLogoObjects1 = [];
gdjs.PresceneCode.GDLogoObjects2 = [];
gdjs.PresceneCode.GDLogoObjects3 = [];
gdjs.PresceneCode.GDcloudObjects1 = [];
gdjs.PresceneCode.GDcloudObjects2 = [];
gdjs.PresceneCode.GDcloudObjects3 = [];
gdjs.PresceneCode.GDcloud2Objects1 = [];
gdjs.PresceneCode.GDcloud2Objects2 = [];
gdjs.PresceneCode.GDcloud2Objects3 = [];
gdjs.PresceneCode.GDcloud3Objects1 = [];
gdjs.PresceneCode.GDcloud3Objects2 = [];
gdjs.PresceneCode.GDcloud3Objects3 = [];
gdjs.PresceneCode.GDpointerObjects1 = [];
gdjs.PresceneCode.GDpointerObjects2 = [];
gdjs.PresceneCode.GDpointerObjects3 = [];
gdjs.PresceneCode.GDPressAnywhereTextObjects1 = [];
gdjs.PresceneCode.GDPressAnywhereTextObjects2 = [];
gdjs.PresceneCode.GDPressAnywhereTextObjects3 = [];
gdjs.PresceneCode.GDPressAnyKeyTextObjects1 = [];
gdjs.PresceneCode.GDPressAnyKeyTextObjects2 = [];
gdjs.PresceneCode.GDPressAnyKeyTextObjects3 = [];
gdjs.PresceneCode.GDPressAnyKeyObjects1 = [];
gdjs.PresceneCode.GDPressAnyKeyObjects2 = [];
gdjs.PresceneCode.GDPressAnyKeyObjects3 = [];
gdjs.PresceneCode.GDPressAnywhereObjects1 = [];
gdjs.PresceneCode.GDPressAnywhereObjects2 = [];
gdjs.PresceneCode.GDPressAnywhereObjects3 = [];
gdjs.PresceneCode.GDversionObjects1 = [];
gdjs.PresceneCode.GDversionObjects2 = [];
gdjs.PresceneCode.GDversionObjects3 = [];

gdjs.PresceneCode.conditionTrue_0 = { val: false };
gdjs.PresceneCode.condition0IsTrue_0 = { val: false };
gdjs.PresceneCode.condition1IsTrue_0 = { val: false };

gdjs.PresceneCode.eventsList0 = function (runtimeScene) {

    {

        {
            gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.PresceneCode.GDBackgroundObjects1);
            gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.PresceneCode.GDLogoObjects1);
            gdjs.copyArray(runtimeScene.getObjects("PressAnyKey"), gdjs.PresceneCode.GDPressAnyKeyObjects1);
            gdjs.copyArray(runtimeScene.getObjects("PressAnywhere"), gdjs.PresceneCode.GDPressAnywhereObjects1);
            {
                for (var i = 0, len = gdjs.PresceneCode.GDLogoObjects1.length; i < len; ++i) {
                    gdjs.PresceneCode.GDLogoObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.PresceneCode.GDLogoObjects1[i].getWidth() / 2, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - gdjs.PresceneCode.GDLogoObjects1[i].getHeight() / 2);
                }
            }{
                for (var i = 0, len = gdjs.PresceneCode.GDBackgroundObjects1.length; i < len; ++i) {
                    gdjs.PresceneCode.GDBackgroundObjects1[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
                }
            }{
                for (var i = 0, len = gdjs.PresceneCode.GDPressAnyKeyObjects1.length; i < len; ++i) {
                    gdjs.PresceneCode.GDPressAnyKeyObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.PresceneCode.GDPressAnyKeyObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.PresceneCode.GDPressAnywhereObjects1.length; i < len; ++i) {
                    gdjs.PresceneCode.GDPressAnywhereObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.PresceneCode.GDPressAnywhereObjects1[i].getWidth() / 2);
                }
            }
        }
    }
};gdjs.PresceneCode.eventsList1 = function (runtimeScene) {

    {

        gdjs.PresceneCode.condition0IsTrue_0.val = false;
        {
            gdjs.PresceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.PresceneCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.PresceneCode.GDpointerObjects2);
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
            }{
                for (var i = 0, len = gdjs.PresceneCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.PresceneCode.GDpointerObjects2[i].hide();
                }
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }
        }
    }

    {

        gdjs.PresceneCode.condition0IsTrue_0.val = false;
        {
            gdjs.PresceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
        }if (gdjs.PresceneCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.PresceneCode.GDpointerObjects1);
            {
                gdjs.evtTools.input.showCursor(runtimeScene);
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
            }{
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                for (var i = 0, len = gdjs.PresceneCode.GDpointerObjects1.length; i < len; ++i) {
                    gdjs.PresceneCode.GDpointerObjects1[i].hide();
                }
            }
        }
    }
};gdjs.PresceneCode.eventsList2 = function (runtimeScene) {

    {

        gdjs.PresceneCode.condition0IsTrue_0.val = false;
        {
            gdjs.PresceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
        }if (gdjs.PresceneCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
            }
        }
    }
};gdjs.PresceneCode.userFunc0xf3ba50 = function (runtimeScene) {
    "use strict";

    var scormPresent = isScormPresent();
    runtimeScene.getGame().getVariables().get("scormBuild").setBoolean(scormPresent);
};
gdjs.PresceneCode.eventsList3 = function (runtimeScene) {

    {

        {}
    }

    {

        gdjs.PresceneCode.userFunc0xf3ba50(runtimeScene);
    }
};gdjs.PresceneCode.eventsList4 = function (runtimeScene) {

    {

        gdjs.PresceneCode.condition0IsTrue_0.val = false;
        {
            gdjs.PresceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        }if (gdjs.PresceneCode.condition0IsTrue_0.val) {

            {
                //Subevents
                gdjs.PresceneCode.eventsList3(runtimeScene);
            } //End of subevents
        }
    }
};gdjs.PresceneCode.eventsList5 = function (runtimeScene) {

    {

        gdjs.PresceneCode.eventsList0(runtimeScene);
    }

    {

        {
            gdjs.copyArray(runtimeScene.getObjects("version"), gdjs.PresceneCode.GDversionObjects1);
            {
                for (var i = 0, len = gdjs.PresceneCode.GDversionObjects1.length; i < len; ++i) {
                    gdjs.PresceneCode.GDversionObjects1[i].setBBText("[shadow=black]" + "Version " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)) + " - Beta" + "[/shadow]");
                }
            }
        }
    }

    {

        gdjs.PresceneCode.condition0IsTrue_0.val = false;
        {
            gdjs.PresceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        }if (gdjs.PresceneCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.preloadMusic(runtimeScene, "The Jazz Logo.mp3");
            }{
                gdjs.evtTools.sound.preloadMusic(runtimeScene, "FinalLoopedJazzBackground.mp3");
            }{
                gdjs.evtTools.sound.preloadMusic(runtimeScene, "AnimalCat_meow.mp3");
            }{
                gdjs.evtTools.sound.preloadMusic(runtimeScene, "Cat_Hiss_Edited.mp3");
            }{
                gdjs.evtTools.sound.preloadMusic(runtimeScene, "Tiny Victory.mp3");
            }{
                gdjs.evtTools.sound.preloadMusic(runtimeScene, "bubble_pop.mp3");
            }{
                runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
            }{
                gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "FinalLoopedJazzBackground.mp3", 1, true, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)), 1);
            }
        }
    }

    {

        gdjs.PresceneCode.condition0IsTrue_0.val = false;
        {
            gdjs.PresceneCode.condition0IsTrue_0.val = !gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.PresceneCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.camera.hideLayer(runtimeScene, "phone");
            }{
                gdjs.evtTools.camera.showLayer(runtimeScene, "notphone");
            }
            {
                //Subevents
                gdjs.PresceneCode.eventsList1(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.PresceneCode.condition0IsTrue_0.val = false;
        {
            gdjs.PresceneCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.PresceneCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
            }{
                gdjs.evtTools.camera.showLayer(runtimeScene, "phone");
            }{
                gdjs.evtTools.camera.hideLayer(runtimeScene, "notphone");
            }
            {
                //Subevents
                gdjs.PresceneCode.eventsList2(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.PresceneCode.eventsList4(runtimeScene);
    }
};

gdjs.PresceneCode.func = function (runtimeScene) {
    runtimeScene.getOnceTriggers().startNewFrame();

    gdjs.PresceneCode.GDBackgroundObjects1.length = 0;
    gdjs.PresceneCode.GDBackgroundObjects2.length = 0;
    gdjs.PresceneCode.GDBackgroundObjects3.length = 0;
    gdjs.PresceneCode.GDLogoObjects1.length = 0;
    gdjs.PresceneCode.GDLogoObjects2.length = 0;
    gdjs.PresceneCode.GDLogoObjects3.length = 0;
    gdjs.PresceneCode.GDcloudObjects1.length = 0;
    gdjs.PresceneCode.GDcloudObjects2.length = 0;
    gdjs.PresceneCode.GDcloudObjects3.length = 0;
    gdjs.PresceneCode.GDcloud2Objects1.length = 0;
    gdjs.PresceneCode.GDcloud2Objects2.length = 0;
    gdjs.PresceneCode.GDcloud2Objects3.length = 0;
    gdjs.PresceneCode.GDcloud3Objects1.length = 0;
    gdjs.PresceneCode.GDcloud3Objects2.length = 0;
    gdjs.PresceneCode.GDcloud3Objects3.length = 0;
    gdjs.PresceneCode.GDpointerObjects1.length = 0;
    gdjs.PresceneCode.GDpointerObjects2.length = 0;
    gdjs.PresceneCode.GDpointerObjects3.length = 0;
    gdjs.PresceneCode.GDPressAnywhereTextObjects1.length = 0;
    gdjs.PresceneCode.GDPressAnywhereTextObjects2.length = 0;
    gdjs.PresceneCode.GDPressAnywhereTextObjects3.length = 0;
    gdjs.PresceneCode.GDPressAnyKeyTextObjects1.length = 0;
    gdjs.PresceneCode.GDPressAnyKeyTextObjects2.length = 0;
    gdjs.PresceneCode.GDPressAnyKeyTextObjects3.length = 0;
    gdjs.PresceneCode.GDPressAnyKeyObjects1.length = 0;
    gdjs.PresceneCode.GDPressAnyKeyObjects2.length = 0;
    gdjs.PresceneCode.GDPressAnyKeyObjects3.length = 0;
    gdjs.PresceneCode.GDPressAnywhereObjects1.length = 0;
    gdjs.PresceneCode.GDPressAnywhereObjects2.length = 0;
    gdjs.PresceneCode.GDPressAnywhereObjects3.length = 0;
    gdjs.PresceneCode.GDversionObjects1.length = 0;
    gdjs.PresceneCode.GDversionObjects2.length = 0;
    gdjs.PresceneCode.GDversionObjects3.length = 0;

    gdjs.PresceneCode.eventsList5(runtimeScene);
    return;
};

gdjs['PresceneCode'] = gdjs.PresceneCode;