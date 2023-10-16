"use strict";

gdjs.GamePauseCode = {};
gdjs.GamePauseCode.GDCityObjects1 = [];
gdjs.GamePauseCode.GDCityObjects2 = [];
gdjs.GamePauseCode.GDCityObjects3 = [];
gdjs.GamePauseCode.GDCityObjects4 = [];
gdjs.GamePauseCode.GDPausePanelObjects1 = [];
gdjs.GamePauseCode.GDPausePanelObjects2 = [];
gdjs.GamePauseCode.GDPausePanelObjects3 = [];
gdjs.GamePauseCode.GDPausePanelObjects4 = [];
gdjs.GamePauseCode.GDResumeObjects1 = [];
gdjs.GamePauseCode.GDResumeObjects2 = [];
gdjs.GamePauseCode.GDResumeObjects3 = [];
gdjs.GamePauseCode.GDResumeObjects4 = [];
gdjs.GamePauseCode.GDmainmenuObjects1 = [];
gdjs.GamePauseCode.GDmainmenuObjects2 = [];
gdjs.GamePauseCode.GDmainmenuObjects3 = [];
gdjs.GamePauseCode.GDmainmenuObjects4 = [];
gdjs.GamePauseCode.GDSettingsObjects1 = [];
gdjs.GamePauseCode.GDSettingsObjects2 = [];
gdjs.GamePauseCode.GDSettingsObjects3 = [];
gdjs.GamePauseCode.GDSettingsObjects4 = [];
gdjs.GamePauseCode.GDOptionsMenuObjects1 = [];
gdjs.GamePauseCode.GDOptionsMenuObjects2 = [];
gdjs.GamePauseCode.GDOptionsMenuObjects3 = [];
gdjs.GamePauseCode.GDOptionsMenuObjects4 = [];
gdjs.GamePauseCode.GDreturnObjects1 = [];
gdjs.GamePauseCode.GDreturnObjects2 = [];
gdjs.GamePauseCode.GDreturnObjects3 = [];
gdjs.GamePauseCode.GDreturnObjects4 = [];
gdjs.GamePauseCode.GDSvolume0Objects1 = [];
gdjs.GamePauseCode.GDSvolume0Objects2 = [];
gdjs.GamePauseCode.GDSvolume0Objects3 = [];
gdjs.GamePauseCode.GDSvolume0Objects4 = [];
gdjs.GamePauseCode.GDSvolume25Objects1 = [];
gdjs.GamePauseCode.GDSvolume25Objects2 = [];
gdjs.GamePauseCode.GDSvolume25Objects3 = [];
gdjs.GamePauseCode.GDSvolume25Objects4 = [];
gdjs.GamePauseCode.GDSvolume50Objects1 = [];
gdjs.GamePauseCode.GDSvolume50Objects2 = [];
gdjs.GamePauseCode.GDSvolume50Objects3 = [];
gdjs.GamePauseCode.GDSvolume50Objects4 = [];
gdjs.GamePauseCode.GDSvolume75Objects1 = [];
gdjs.GamePauseCode.GDSvolume75Objects2 = [];
gdjs.GamePauseCode.GDSvolume75Objects3 = [];
gdjs.GamePauseCode.GDSvolume75Objects4 = [];
gdjs.GamePauseCode.GDSvolume100Objects1 = [];
gdjs.GamePauseCode.GDSvolume100Objects2 = [];
gdjs.GamePauseCode.GDSvolume100Objects3 = [];
gdjs.GamePauseCode.GDSvolume100Objects4 = [];
gdjs.GamePauseCode.GDGvolume0Objects1 = [];
gdjs.GamePauseCode.GDGvolume0Objects2 = [];
gdjs.GamePauseCode.GDGvolume0Objects3 = [];
gdjs.GamePauseCode.GDGvolume0Objects4 = [];
gdjs.GamePauseCode.GDGvolume25Objects1 = [];
gdjs.GamePauseCode.GDGvolume25Objects2 = [];
gdjs.GamePauseCode.GDGvolume25Objects3 = [];
gdjs.GamePauseCode.GDGvolume25Objects4 = [];
gdjs.GamePauseCode.GDGvolume50Objects1 = [];
gdjs.GamePauseCode.GDGvolume50Objects2 = [];
gdjs.GamePauseCode.GDGvolume50Objects3 = [];
gdjs.GamePauseCode.GDGvolume50Objects4 = [];
gdjs.GamePauseCode.GDGvolume75Objects1 = [];
gdjs.GamePauseCode.GDGvolume75Objects2 = [];
gdjs.GamePauseCode.GDGvolume75Objects3 = [];
gdjs.GamePauseCode.GDGvolume75Objects4 = [];
gdjs.GamePauseCode.GDGvolume100Objects1 = [];
gdjs.GamePauseCode.GDGvolume100Objects2 = [];
gdjs.GamePauseCode.GDGvolume100Objects3 = [];
gdjs.GamePauseCode.GDGvolume100Objects4 = [];
gdjs.GamePauseCode.GDSvolumeSelectObjects1 = [];
gdjs.GamePauseCode.GDSvolumeSelectObjects2 = [];
gdjs.GamePauseCode.GDSvolumeSelectObjects3 = [];
gdjs.GamePauseCode.GDSvolumeSelectObjects4 = [];
gdjs.GamePauseCode.GDGvolumeSelectObjects1 = [];
gdjs.GamePauseCode.GDGvolumeSelectObjects2 = [];
gdjs.GamePauseCode.GDGvolumeSelectObjects3 = [];
gdjs.GamePauseCode.GDGvolumeSelectObjects4 = [];
gdjs.GamePauseCode.GDpointerObjects1 = [];
gdjs.GamePauseCode.GDpointerObjects2 = [];
gdjs.GamePauseCode.GDpointerObjects3 = [];
gdjs.GamePauseCode.GDpointerObjects4 = [];

gdjs.GamePauseCode.conditionTrue_0 = { val: false };
gdjs.GamePauseCode.condition0IsTrue_0 = { val: false };
gdjs.GamePauseCode.condition1IsTrue_0 = { val: false };
gdjs.GamePauseCode.condition2IsTrue_0 = { val: false };
gdjs.GamePauseCode.condition3IsTrue_0 = { val: false };
gdjs.GamePauseCode.conditionTrue_1 = { val: false };
gdjs.GamePauseCode.condition0IsTrue_1 = { val: false };
gdjs.GamePauseCode.condition1IsTrue_1 = { val: false };
gdjs.GamePauseCode.condition2IsTrue_1 = { val: false };
gdjs.GamePauseCode.condition3IsTrue_1 = { val: false };

gdjs.GamePauseCode.eventsList0 = function (runtimeScene) {

    {

        {
            gdjs.copyArray(runtimeScene.getObjects("Gvolume0"), gdjs.GamePauseCode.GDGvolume0Objects1);
            gdjs.copyArray(runtimeScene.getObjects("Gvolume100"), gdjs.GamePauseCode.GDGvolume100Objects1);
            gdjs.copyArray(runtimeScene.getObjects("Gvolume25"), gdjs.GamePauseCode.GDGvolume25Objects1);
            gdjs.copyArray(runtimeScene.getObjects("Gvolume50"), gdjs.GamePauseCode.GDGvolume50Objects1);
            gdjs.copyArray(runtimeScene.getObjects("Gvolume75"), gdjs.GamePauseCode.GDGvolume75Objects1);
            gdjs.copyArray(runtimeScene.getObjects("OptionsMenu"), gdjs.GamePauseCode.GDOptionsMenuObjects1);
            gdjs.copyArray(runtimeScene.getObjects("PausePanel"), gdjs.GamePauseCode.GDPausePanelObjects1);
            gdjs.copyArray(runtimeScene.getObjects("Resume"), gdjs.GamePauseCode.GDResumeObjects1);
            gdjs.copyArray(runtimeScene.getObjects("Settings"), gdjs.GamePauseCode.GDSettingsObjects1);
            gdjs.copyArray(runtimeScene.getObjects("Svolume0"), gdjs.GamePauseCode.GDSvolume0Objects1);
            gdjs.copyArray(runtimeScene.getObjects("Svolume100"), gdjs.GamePauseCode.GDSvolume100Objects1);
            gdjs.copyArray(runtimeScene.getObjects("Svolume25"), gdjs.GamePauseCode.GDSvolume25Objects1);
            gdjs.copyArray(runtimeScene.getObjects("Svolume50"), gdjs.GamePauseCode.GDSvolume50Objects1);
            gdjs.copyArray(runtimeScene.getObjects("Svolume75"), gdjs.GamePauseCode.GDSvolume75Objects1);
            gdjs.copyArray(runtimeScene.getObjects("mainmenu"), gdjs.GamePauseCode.GDmainmenuObjects1);
            gdjs.copyArray(runtimeScene.getObjects("return"), gdjs.GamePauseCode.GDreturnObjects1);
            {
                for (var i = 0, len = gdjs.GamePauseCode.GDPausePanelObjects1.length; i < len; ++i) {
                    gdjs.GamePauseCode.GDPausePanelObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.GamePauseCode.GDPausePanelObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.GamePauseCode.GDOptionsMenuObjects1.length; i < len; ++i) {
                    gdjs.GamePauseCode.GDOptionsMenuObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.GamePauseCode.GDOptionsMenuObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.GamePauseCode.GDResumeObjects1.length; i < len; ++i) {
                    gdjs.GamePauseCode.GDResumeObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.GamePauseCode.GDResumeObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.GamePauseCode.GDSettingsObjects1.length; i < len; ++i) {
                    gdjs.GamePauseCode.GDSettingsObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.GamePauseCode.GDSettingsObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.GamePauseCode.GDmainmenuObjects1.length; i < len; ++i) {
                    gdjs.GamePauseCode.GDmainmenuObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.GamePauseCode.GDmainmenuObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.GamePauseCode.GDreturnObjects1.length; i < len; ++i) {
                    gdjs.GamePauseCode.GDreturnObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.GamePauseCode.GDreturnObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.GamePauseCode.GDSvolume25Objects1.length; i < len; ++i) {
                    gdjs.GamePauseCode.GDSvolume25Objects1[i].setX((gdjs.GamePauseCode.GDSvolume50Objects1.length === 0 ? 0 : gdjs.GamePauseCode.GDSvolume50Objects1[0].getPointX("OptionsMenu")) - 75);
                }
            }{
                for (var i = 0, len = gdjs.GamePauseCode.GDSvolume75Objects1.length; i < len; ++i) {
                    gdjs.GamePauseCode.GDSvolume75Objects1[i].setX((gdjs.GamePauseCode.GDSvolume50Objects1.length === 0 ? 0 : gdjs.GamePauseCode.GDSvolume50Objects1[0].getPointX("OptionsMenu")) + 75);
                }
            }{
                for (var i = 0, len = gdjs.GamePauseCode.GDGvolume75Objects1.length; i < len; ++i) {
                    gdjs.GamePauseCode.GDGvolume75Objects1[i].setX((gdjs.GamePauseCode.GDGvolume50Objects1.length === 0 ? 0 : gdjs.GamePauseCode.GDGvolume50Objects1[0].getPointX("Half")) + 75);
                }
            }{
                for (var i = 0, len = gdjs.GamePauseCode.GDGvolume25Objects1.length; i < len; ++i) {
                    gdjs.GamePauseCode.GDGvolume25Objects1[i].setX((gdjs.GamePauseCode.GDGvolume50Objects1.length === 0 ? 0 : gdjs.GamePauseCode.GDGvolume50Objects1[0].getPointX("OptionsMenu")) - 75);
                }
            }{
                for (var i = 0, len = gdjs.GamePauseCode.GDGvolume50Objects1.length; i < len; ++i) {
                    gdjs.GamePauseCode.GDGvolume50Objects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.GamePauseCode.GDGvolume50Objects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.GamePauseCode.GDSvolume100Objects1.length; i < len; ++i) {
                    gdjs.GamePauseCode.GDSvolume100Objects1[i].setX((gdjs.GamePauseCode.GDSvolume50Objects1.length === 0 ? 0 : gdjs.GamePauseCode.GDSvolume50Objects1[0].getPointX("Half")) + 150);
                }
            }{
                for (var i = 0, len = gdjs.GamePauseCode.GDSvolume0Objects1.length; i < len; ++i) {
                    gdjs.GamePauseCode.GDSvolume0Objects1[i].setX((gdjs.GamePauseCode.GDSvolume50Objects1.length === 0 ? 0 : gdjs.GamePauseCode.GDSvolume50Objects1[0].getPointX("OptionsMenu")) - 150);
                }
            }{
                for (var i = 0, len = gdjs.GamePauseCode.GDGvolume0Objects1.length; i < len; ++i) {
                    gdjs.GamePauseCode.GDGvolume0Objects1[i].setX((gdjs.GamePauseCode.GDGvolume50Objects1.length === 0 ? 0 : gdjs.GamePauseCode.GDGvolume50Objects1[0].getPointX("OptionsMenu")) - 150);
                }
            }{
                for (var i = 0, len = gdjs.GamePauseCode.GDGvolume100Objects1.length; i < len; ++i) {
                    gdjs.GamePauseCode.GDGvolume100Objects1[i].setX((gdjs.GamePauseCode.GDGvolume50Objects1.length === 0 ? 0 : gdjs.GamePauseCode.GDGvolume50Objects1[0].getPointX("Half")) + 150);
                }
            }{
                for (var i = 0, len = gdjs.GamePauseCode.GDSvolume50Objects1.length; i < len; ++i) {
                    gdjs.GamePauseCode.GDSvolume50Objects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.GamePauseCode.GDSvolume50Objects1[i].getWidth() / 2);
                }
            }
        }
    }
};gdjs.GamePauseCode.mapOfGDgdjs_46GamePauseCode_46GDSettingsObjects2Objects = Hashtable.newFrom({ "Settings": gdjs.GamePauseCode.GDSettingsObjects2 });gdjs.GamePauseCode.eventsList1 = function (runtimeScene) {

    {

        gdjs.GamePauseCode.condition0IsTrue_0.val = false;
        {
            gdjs.GamePauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.GamePauseCode.condition0IsTrue_0.val) {
            gdjs.copyArray(gdjs.GamePauseCode.GDpointerObjects2, gdjs.GamePauseCode.GDpointerObjects3);

            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                for (var i = 0, len = gdjs.GamePauseCode.GDpointerObjects3.length; i < len; ++i) {
                    gdjs.GamePauseCode.GDpointerObjects3[i].hide();
                }
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }{
                gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Settings");
            }
        }
    }

    {

        gdjs.GamePauseCode.condition0IsTrue_0.val = false;
        gdjs.GamePauseCode.condition1IsTrue_0.val = false;
        {
            gdjs.GamePauseCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.GamePauseCode.condition0IsTrue_0.val) {
            {
                gdjs.GamePauseCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.GamePauseCode.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Settings");
            }
        }
    }
};gdjs.GamePauseCode.mapOfGDgdjs_46GamePauseCode_46GDmainmenuObjects2Objects = Hashtable.newFrom({ "mainmenu": gdjs.GamePauseCode.GDmainmenuObjects2 });gdjs.GamePauseCode.eventsList2 = function (runtimeScene) {

    {

        gdjs.GamePauseCode.condition0IsTrue_0.val = false;
        {
            gdjs.GamePauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.GamePauseCode.condition0IsTrue_0.val) {
            gdjs.copyArray(gdjs.GamePauseCode.GDpointerObjects2, gdjs.GamePauseCode.GDpointerObjects3);

            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
            }{
                for (var i = 0, len = gdjs.GamePauseCode.GDpointerObjects3.length; i < len; ++i) {
                    gdjs.GamePauseCode.GDpointerObjects3[i].hide();
                }
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }
        }
    }

    {

        gdjs.GamePauseCode.condition0IsTrue_0.val = false;
        gdjs.GamePauseCode.condition1IsTrue_0.val = false;
        {
            gdjs.GamePauseCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.GamePauseCode.condition0IsTrue_0.val) {
            {
                gdjs.GamePauseCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.GamePauseCode.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
            }
        }
    }
};gdjs.GamePauseCode.mapOfGDgdjs_46GamePauseCode_46GDmainmenuObjects2Objects = Hashtable.newFrom({ "mainmenu": gdjs.GamePauseCode.GDmainmenuObjects2 });gdjs.GamePauseCode.eventsList3 = function (runtimeScene) {

    {

        gdjs.GamePauseCode.condition0IsTrue_0.val = false;
        {
            gdjs.GamePauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.GamePauseCode.condition0IsTrue_0.val) {
            gdjs.copyArray(gdjs.GamePauseCode.GDpointerObjects2, gdjs.GamePauseCode.GDpointerObjects3);

            {
                gdjs.evtTools.common.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), false);
            }{
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 10, 1);
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
            }{
                for (var i = 0, len = gdjs.GamePauseCode.GDpointerObjects3.length; i < len; ++i) {
                    gdjs.GamePauseCode.GDpointerObjects3[i].hide();
                }
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }
        }
    }

    {

        gdjs.GamePauseCode.condition0IsTrue_0.val = false;
        gdjs.GamePauseCode.condition1IsTrue_0.val = false;
        {
            gdjs.GamePauseCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.GamePauseCode.condition0IsTrue_0.val) {
            {
                gdjs.GamePauseCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.GamePauseCode.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.common.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), false);
            }{
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 10, 1);
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
            }
        }
    }
};gdjs.GamePauseCode.mapOfGDgdjs_46GamePauseCode_46GDResumeObjects2Objects = Hashtable.newFrom({ "Resume": gdjs.GamePauseCode.GDResumeObjects2 });gdjs.GamePauseCode.eventsList4 = function (runtimeScene) {

    {

        gdjs.GamePauseCode.condition0IsTrue_0.val = false;
        {
            gdjs.GamePauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.GamePauseCode.condition0IsTrue_0.val) {
            gdjs.copyArray(gdjs.GamePauseCode.GDpointerObjects2, gdjs.GamePauseCode.GDpointerObjects3);

            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 10, 1);
            }{
                for (var i = 0, len = gdjs.GamePauseCode.GDpointerObjects3.length; i < len; ++i) {
                    gdjs.GamePauseCode.GDpointerObjects3[i].hide();
                }
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }{
                gdjs.evtTools.runtimeScene.popScene(runtimeScene);
            }
        }
    }

    {

        gdjs.GamePauseCode.condition0IsTrue_0.val = false;
        gdjs.GamePauseCode.condition1IsTrue_0.val = false;
        {
            gdjs.GamePauseCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.GamePauseCode.condition0IsTrue_0.val) {
            {
                gdjs.GamePauseCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.GamePauseCode.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 10, 1);
            }{
                gdjs.evtTools.runtimeScene.popScene(runtimeScene);
            }
        }
    }
};gdjs.GamePauseCode.mapOfGDgdjs_46GamePauseCode_46GDmainmenuObjects2Objects = Hashtable.newFrom({ "mainmenu": gdjs.GamePauseCode.GDmainmenuObjects2 });gdjs.GamePauseCode.mapOfGDgdjs_46GamePauseCode_46GDResumeObjects2Objects = Hashtable.newFrom({ "Resume": gdjs.GamePauseCode.GDResumeObjects2 });gdjs.GamePauseCode.mapOfGDgdjs_46GamePauseCode_46GDSettingsObjects2Objects = Hashtable.newFrom({ "Settings": gdjs.GamePauseCode.GDSettingsObjects2 });gdjs.GamePauseCode.mapOfGDgdjs_46GamePauseCode_46GDSettingsObjects1Objects = Hashtable.newFrom({ "Settings": gdjs.GamePauseCode.GDSettingsObjects1 });gdjs.GamePauseCode.mapOfGDgdjs_46GamePauseCode_46GDmainmenuObjects1Objects = Hashtable.newFrom({ "mainmenu": gdjs.GamePauseCode.GDmainmenuObjects1 });gdjs.GamePauseCode.mapOfGDgdjs_46GamePauseCode_46GDResumeObjects1Objects = Hashtable.newFrom({ "Resume": gdjs.GamePauseCode.GDResumeObjects1 });gdjs.GamePauseCode.eventsList5 = function (runtimeScene) {

    {

        gdjs.copyArray(runtimeScene.getObjects("Settings"), gdjs.GamePauseCode.GDSettingsObjects2);

        gdjs.GamePauseCode.condition0IsTrue_0.val = false;
        {
            gdjs.GamePauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GamePauseCode.mapOfGDgdjs_46GamePauseCode_46GDSettingsObjects2Objects, runtimeScene, true, false);
        }if (gdjs.GamePauseCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.GamePauseCode.GDSettingsObjects2 */
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.GamePauseCode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.GamePauseCode.GDSettingsObjects2.length; i < len; ++i) {
                    gdjs.GamePauseCode.GDSettingsObjects2[i].setAnimation(1);
                }
            }{
                for (var i = 0, len = gdjs.GamePauseCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.GamePauseCode.GDpointerObjects2[i].hide(false);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }
            {
                //Subevents
                gdjs.GamePauseCode.eventsList1(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("mainmenu"), gdjs.GamePauseCode.GDmainmenuObjects2);

        gdjs.GamePauseCode.condition0IsTrue_0.val = false;
        {
            gdjs.GamePauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GamePauseCode.mapOfGDgdjs_46GamePauseCode_46GDmainmenuObjects2Objects, runtimeScene, true, false);
        }if (gdjs.GamePauseCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.GamePauseCode.GDmainmenuObjects2 */
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.GamePauseCode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.GamePauseCode.GDmainmenuObjects2.length; i < len; ++i) {
                    gdjs.GamePauseCode.GDmainmenuObjects2[i].setAnimation(1);
                }
            }{
                for (var i = 0, len = gdjs.GamePauseCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.GamePauseCode.GDpointerObjects2[i].hide(false);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }
            {
                //Subevents
                gdjs.GamePauseCode.eventsList2(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("mainmenu"), gdjs.GamePauseCode.GDmainmenuObjects2);

        gdjs.GamePauseCode.condition0IsTrue_0.val = false;
        gdjs.GamePauseCode.condition1IsTrue_0.val = false;
        {
            gdjs.GamePauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GamePauseCode.mapOfGDgdjs_46GamePauseCode_46GDmainmenuObjects2Objects, runtimeScene, true, false);
        }if (gdjs.GamePauseCode.condition0IsTrue_0.val) {
            {
                {
                    gdjs.GamePauseCode.conditionTrue_1 = gdjs.GamePauseCode.condition1IsTrue_0;
                    gdjs.GamePauseCode.condition0IsTrue_1.val = false;
                    {
                        gdjs.GamePauseCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
                    }gdjs.GamePauseCode.conditionTrue_1.val = true && gdjs.GamePauseCode.condition0IsTrue_1.val;
                }
            }
        }
        if (gdjs.GamePauseCode.condition1IsTrue_0.val) {
            /* Reuse gdjs.GamePauseCode.GDmainmenuObjects2 */
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.GamePauseCode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.GamePauseCode.GDmainmenuObjects2.length; i < len; ++i) {
                    gdjs.GamePauseCode.GDmainmenuObjects2[i].setAnimation(1);
                }
            }{
                for (var i = 0, len = gdjs.GamePauseCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.GamePauseCode.GDpointerObjects2[i].hide(false);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }
            {
                //Subevents
                gdjs.GamePauseCode.eventsList3(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Resume"), gdjs.GamePauseCode.GDResumeObjects2);

        gdjs.GamePauseCode.condition0IsTrue_0.val = false;
        {
            gdjs.GamePauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GamePauseCode.mapOfGDgdjs_46GamePauseCode_46GDResumeObjects2Objects, runtimeScene, true, false);
        }if (gdjs.GamePauseCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.GamePauseCode.GDResumeObjects2 */
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.GamePauseCode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.GamePauseCode.GDResumeObjects2.length; i < len; ++i) {
                    gdjs.GamePauseCode.GDResumeObjects2[i].setAnimation(1);
                }
            }{
                for (var i = 0, len = gdjs.GamePauseCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.GamePauseCode.GDpointerObjects2[i].hide(false);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }
            {
                //Subevents
                gdjs.GamePauseCode.eventsList4(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("mainmenu"), gdjs.GamePauseCode.GDmainmenuObjects2);

        gdjs.GamePauseCode.condition0IsTrue_0.val = false;
        {
            gdjs.GamePauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GamePauseCode.mapOfGDgdjs_46GamePauseCode_46GDmainmenuObjects2Objects, runtimeScene, true, true);
        }if (gdjs.GamePauseCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.GamePauseCode.GDmainmenuObjects2 */
            {
                for (var i = 0, len = gdjs.GamePauseCode.GDmainmenuObjects2.length; i < len; ++i) {
                    gdjs.GamePauseCode.GDmainmenuObjects2[i].setAnimation(0);
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Resume"), gdjs.GamePauseCode.GDResumeObjects2);

        gdjs.GamePauseCode.condition0IsTrue_0.val = false;
        {
            gdjs.GamePauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GamePauseCode.mapOfGDgdjs_46GamePauseCode_46GDResumeObjects2Objects, runtimeScene, true, true);
        }if (gdjs.GamePauseCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.GamePauseCode.GDResumeObjects2 */
            {
                for (var i = 0, len = gdjs.GamePauseCode.GDResumeObjects2.length; i < len; ++i) {
                    gdjs.GamePauseCode.GDResumeObjects2[i].setAnimation(0);
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Settings"), gdjs.GamePauseCode.GDSettingsObjects2);

        gdjs.GamePauseCode.condition0IsTrue_0.val = false;
        {
            gdjs.GamePauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GamePauseCode.mapOfGDgdjs_46GamePauseCode_46GDSettingsObjects2Objects, runtimeScene, true, true);
        }if (gdjs.GamePauseCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.GamePauseCode.GDSettingsObjects2 */
            {
                for (var i = 0, len = gdjs.GamePauseCode.GDSettingsObjects2.length; i < len; ++i) {
                    gdjs.GamePauseCode.GDSettingsObjects2[i].setAnimation(0);
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Resume"), gdjs.GamePauseCode.GDResumeObjects1);
        gdjs.copyArray(runtimeScene.getObjects("Settings"), gdjs.GamePauseCode.GDSettingsObjects1);
        gdjs.copyArray(runtimeScene.getObjects("mainmenu"), gdjs.GamePauseCode.GDmainmenuObjects1);

        gdjs.GamePauseCode.condition0IsTrue_0.val = false;
        gdjs.GamePauseCode.condition1IsTrue_0.val = false;
        gdjs.GamePauseCode.condition2IsTrue_0.val = false;
        {
            gdjs.GamePauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GamePauseCode.mapOfGDgdjs_46GamePauseCode_46GDSettingsObjects1Objects, runtimeScene, true, true);
        }if (gdjs.GamePauseCode.condition0IsTrue_0.val) {
            {
                gdjs.GamePauseCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GamePauseCode.mapOfGDgdjs_46GamePauseCode_46GDmainmenuObjects1Objects, runtimeScene, true, true);
            }if (gdjs.GamePauseCode.condition1IsTrue_0.val) {
                {
                    gdjs.GamePauseCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GamePauseCode.mapOfGDgdjs_46GamePauseCode_46GDResumeObjects1Objects, runtimeScene, true, true);
                }
            }
        }
        if (gdjs.GamePauseCode.condition2IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.GamePauseCode.GDpointerObjects1);
            {
                for (var i = 0, len = gdjs.GamePauseCode.GDpointerObjects1.length; i < len; ++i) {
                    gdjs.GamePauseCode.GDpointerObjects1[i].hide();
                }
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }
        }
    }
};gdjs.GamePauseCode.eventsList6 = function (runtimeScene) {

    {

        gdjs.GamePauseCode.condition0IsTrue_0.val = false;
        {
            gdjs.GamePauseCode.condition0IsTrue_0.val = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Pause");
        }if (gdjs.GamePauseCode.condition0IsTrue_0.val) {

            {
                //Subevents
                gdjs.GamePauseCode.eventsList5(runtimeScene);
            } //End of subevents
        }
    }
};gdjs.GamePauseCode.eventsList7 = function (runtimeScene) {

    {

        gdjs.GamePauseCode.condition0IsTrue_0.val = false;
        {
            gdjs.GamePauseCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.GamePauseCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.GamePauseCode.GDpointerObjects1);
            {
                gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.GamePauseCode.GDpointerObjects1.length; i < len; ++i) {
                    gdjs.GamePauseCode.GDpointerObjects1[i].hide();
                }
            }
        }
    }
};gdjs.GamePauseCode.eventsList8 = function (runtimeScene) {

    {

        gdjs.GamePauseCode.condition0IsTrue_0.val = false;
        {
            gdjs.GamePauseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        }if (gdjs.GamePauseCode.condition0IsTrue_0.val) {

            {
                //Subevents
                gdjs.GamePauseCode.eventsList7(runtimeScene);
            } //End of subevents
        }
    }
};gdjs.GamePauseCode.eventsList9 = function (runtimeScene) {

    {

        gdjs.GamePauseCode.condition0IsTrue_0.val = false;
        {
            gdjs.GamePauseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
        }if (gdjs.GamePauseCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, 0);
            }
        }
    }

    {

        gdjs.GamePauseCode.condition0IsTrue_0.val = false;
        {
            gdjs.GamePauseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 25;
        }if (gdjs.GamePauseCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, 25);
            }
        }
    }

    {

        gdjs.GamePauseCode.condition0IsTrue_0.val = false;
        {
            gdjs.GamePauseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 50;
        }if (gdjs.GamePauseCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, 50);
            }
        }
    }

    {

        gdjs.GamePauseCode.condition0IsTrue_0.val = false;
        {
            gdjs.GamePauseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 75;
        }if (gdjs.GamePauseCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, 75);
            }
        }
    }

    {

        gdjs.GamePauseCode.condition0IsTrue_0.val = false;
        {
            gdjs.GamePauseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 100;
        }if (gdjs.GamePauseCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, 100);
            }
        }
    }

    {

        gdjs.GamePauseCode.condition0IsTrue_0.val = false;
        {
            gdjs.GamePauseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
        }if (gdjs.GamePauseCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 0);
            }
        }
    }

    {

        gdjs.GamePauseCode.condition0IsTrue_0.val = false;
        {
            gdjs.GamePauseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 25;
        }if (gdjs.GamePauseCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 25);
            }
        }
    }

    {

        gdjs.GamePauseCode.condition0IsTrue_0.val = false;
        {
            gdjs.GamePauseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 50;
        }if (gdjs.GamePauseCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 50);
            }
        }
    }

    {

        gdjs.GamePauseCode.condition0IsTrue_0.val = false;
        {
            gdjs.GamePauseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 75;
        }if (gdjs.GamePauseCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 75);
            }
        }
    }

    {

        gdjs.GamePauseCode.condition0IsTrue_0.val = false;
        {
            gdjs.GamePauseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 100;
        }if (gdjs.GamePauseCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 100);
            }
        }
    }
};gdjs.GamePauseCode.eventsList10 = function (runtimeScene) {

    {

        {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.GamePauseCode.GDpointerObjects1);
            {
                for (var i = 0, len = gdjs.GamePauseCode.GDpointerObjects1.length; i < len; ++i) {
                    gdjs.GamePauseCode.GDpointerObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
                }
            }
        }
    }

    {

        gdjs.GamePauseCode.eventsList0(runtimeScene);
    }

    {

        gdjs.GamePauseCode.eventsList6(runtimeScene);
    }

    {

        gdjs.GamePauseCode.eventsList8(runtimeScene);
    }

    {

        gdjs.GamePauseCode.eventsList9(runtimeScene);
    }
};

gdjs.GamePauseCode.func = function (runtimeScene) {
    runtimeScene.getOnceTriggers().startNewFrame();

    gdjs.GamePauseCode.GDCityObjects1.length = 0;
    gdjs.GamePauseCode.GDCityObjects2.length = 0;
    gdjs.GamePauseCode.GDCityObjects3.length = 0;
    gdjs.GamePauseCode.GDCityObjects4.length = 0;
    gdjs.GamePauseCode.GDPausePanelObjects1.length = 0;
    gdjs.GamePauseCode.GDPausePanelObjects2.length = 0;
    gdjs.GamePauseCode.GDPausePanelObjects3.length = 0;
    gdjs.GamePauseCode.GDPausePanelObjects4.length = 0;
    gdjs.GamePauseCode.GDResumeObjects1.length = 0;
    gdjs.GamePauseCode.GDResumeObjects2.length = 0;
    gdjs.GamePauseCode.GDResumeObjects3.length = 0;
    gdjs.GamePauseCode.GDResumeObjects4.length = 0;
    gdjs.GamePauseCode.GDmainmenuObjects1.length = 0;
    gdjs.GamePauseCode.GDmainmenuObjects2.length = 0;
    gdjs.GamePauseCode.GDmainmenuObjects3.length = 0;
    gdjs.GamePauseCode.GDmainmenuObjects4.length = 0;
    gdjs.GamePauseCode.GDSettingsObjects1.length = 0;
    gdjs.GamePauseCode.GDSettingsObjects2.length = 0;
    gdjs.GamePauseCode.GDSettingsObjects3.length = 0;
    gdjs.GamePauseCode.GDSettingsObjects4.length = 0;
    gdjs.GamePauseCode.GDOptionsMenuObjects1.length = 0;
    gdjs.GamePauseCode.GDOptionsMenuObjects2.length = 0;
    gdjs.GamePauseCode.GDOptionsMenuObjects3.length = 0;
    gdjs.GamePauseCode.GDOptionsMenuObjects4.length = 0;
    gdjs.GamePauseCode.GDreturnObjects1.length = 0;
    gdjs.GamePauseCode.GDreturnObjects2.length = 0;
    gdjs.GamePauseCode.GDreturnObjects3.length = 0;
    gdjs.GamePauseCode.GDreturnObjects4.length = 0;
    gdjs.GamePauseCode.GDSvolume0Objects1.length = 0;
    gdjs.GamePauseCode.GDSvolume0Objects2.length = 0;
    gdjs.GamePauseCode.GDSvolume0Objects3.length = 0;
    gdjs.GamePauseCode.GDSvolume0Objects4.length = 0;
    gdjs.GamePauseCode.GDSvolume25Objects1.length = 0;
    gdjs.GamePauseCode.GDSvolume25Objects2.length = 0;
    gdjs.GamePauseCode.GDSvolume25Objects3.length = 0;
    gdjs.GamePauseCode.GDSvolume25Objects4.length = 0;
    gdjs.GamePauseCode.GDSvolume50Objects1.length = 0;
    gdjs.GamePauseCode.GDSvolume50Objects2.length = 0;
    gdjs.GamePauseCode.GDSvolume50Objects3.length = 0;
    gdjs.GamePauseCode.GDSvolume50Objects4.length = 0;
    gdjs.GamePauseCode.GDSvolume75Objects1.length = 0;
    gdjs.GamePauseCode.GDSvolume75Objects2.length = 0;
    gdjs.GamePauseCode.GDSvolume75Objects3.length = 0;
    gdjs.GamePauseCode.GDSvolume75Objects4.length = 0;
    gdjs.GamePauseCode.GDSvolume100Objects1.length = 0;
    gdjs.GamePauseCode.GDSvolume100Objects2.length = 0;
    gdjs.GamePauseCode.GDSvolume100Objects3.length = 0;
    gdjs.GamePauseCode.GDSvolume100Objects4.length = 0;
    gdjs.GamePauseCode.GDGvolume0Objects1.length = 0;
    gdjs.GamePauseCode.GDGvolume0Objects2.length = 0;
    gdjs.GamePauseCode.GDGvolume0Objects3.length = 0;
    gdjs.GamePauseCode.GDGvolume0Objects4.length = 0;
    gdjs.GamePauseCode.GDGvolume25Objects1.length = 0;
    gdjs.GamePauseCode.GDGvolume25Objects2.length = 0;
    gdjs.GamePauseCode.GDGvolume25Objects3.length = 0;
    gdjs.GamePauseCode.GDGvolume25Objects4.length = 0;
    gdjs.GamePauseCode.GDGvolume50Objects1.length = 0;
    gdjs.GamePauseCode.GDGvolume50Objects2.length = 0;
    gdjs.GamePauseCode.GDGvolume50Objects3.length = 0;
    gdjs.GamePauseCode.GDGvolume50Objects4.length = 0;
    gdjs.GamePauseCode.GDGvolume75Objects1.length = 0;
    gdjs.GamePauseCode.GDGvolume75Objects2.length = 0;
    gdjs.GamePauseCode.GDGvolume75Objects3.length = 0;
    gdjs.GamePauseCode.GDGvolume75Objects4.length = 0;
    gdjs.GamePauseCode.GDGvolume100Objects1.length = 0;
    gdjs.GamePauseCode.GDGvolume100Objects2.length = 0;
    gdjs.GamePauseCode.GDGvolume100Objects3.length = 0;
    gdjs.GamePauseCode.GDGvolume100Objects4.length = 0;
    gdjs.GamePauseCode.GDSvolumeSelectObjects1.length = 0;
    gdjs.GamePauseCode.GDSvolumeSelectObjects2.length = 0;
    gdjs.GamePauseCode.GDSvolumeSelectObjects3.length = 0;
    gdjs.GamePauseCode.GDSvolumeSelectObjects4.length = 0;
    gdjs.GamePauseCode.GDGvolumeSelectObjects1.length = 0;
    gdjs.GamePauseCode.GDGvolumeSelectObjects2.length = 0;
    gdjs.GamePauseCode.GDGvolumeSelectObjects3.length = 0;
    gdjs.GamePauseCode.GDGvolumeSelectObjects4.length = 0;
    gdjs.GamePauseCode.GDpointerObjects1.length = 0;
    gdjs.GamePauseCode.GDpointerObjects2.length = 0;
    gdjs.GamePauseCode.GDpointerObjects3.length = 0;
    gdjs.GamePauseCode.GDpointerObjects4.length = 0;

    gdjs.GamePauseCode.eventsList10(runtimeScene);
    return;
};

gdjs['GamePauseCode'] = gdjs.GamePauseCode;