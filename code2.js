"use strict";

gdjs.SettingsCode = {};
gdjs.SettingsCode.GDBackgroundObjects1 = [];
gdjs.SettingsCode.GDBackgroundObjects2 = [];
gdjs.SettingsCode.GDBackgroundObjects3 = [];
gdjs.SettingsCode.GDBackgroundObjects4 = [];
gdjs.SettingsCode.GDAudioMenuObjects1 = [];
gdjs.SettingsCode.GDAudioMenuObjects2 = [];
gdjs.SettingsCode.GDAudioMenuObjects3 = [];
gdjs.SettingsCode.GDAudioMenuObjects4 = [];
gdjs.SettingsCode.GDReturnObjects1 = [];
gdjs.SettingsCode.GDReturnObjects2 = [];
gdjs.SettingsCode.GDReturnObjects3 = [];
gdjs.SettingsCode.GDReturnObjects4 = [];
gdjs.SettingsCode.GDSvolume0Objects1 = [];
gdjs.SettingsCode.GDSvolume0Objects2 = [];
gdjs.SettingsCode.GDSvolume0Objects3 = [];
gdjs.SettingsCode.GDSvolume0Objects4 = [];
gdjs.SettingsCode.GDSvolume25Objects1 = [];
gdjs.SettingsCode.GDSvolume25Objects2 = [];
gdjs.SettingsCode.GDSvolume25Objects3 = [];
gdjs.SettingsCode.GDSvolume25Objects4 = [];
gdjs.SettingsCode.GDSvolume50Objects1 = [];
gdjs.SettingsCode.GDSvolume50Objects2 = [];
gdjs.SettingsCode.GDSvolume50Objects3 = [];
gdjs.SettingsCode.GDSvolume50Objects4 = [];
gdjs.SettingsCode.GDSvolume75Objects1 = [];
gdjs.SettingsCode.GDSvolume75Objects2 = [];
gdjs.SettingsCode.GDSvolume75Objects3 = [];
gdjs.SettingsCode.GDSvolume75Objects4 = [];
gdjs.SettingsCode.GDSvolume100Objects1 = [];
gdjs.SettingsCode.GDSvolume100Objects2 = [];
gdjs.SettingsCode.GDSvolume100Objects3 = [];
gdjs.SettingsCode.GDSvolume100Objects4 = [];
gdjs.SettingsCode.GDGvolume0Objects1 = [];
gdjs.SettingsCode.GDGvolume0Objects2 = [];
gdjs.SettingsCode.GDGvolume0Objects3 = [];
gdjs.SettingsCode.GDGvolume0Objects4 = [];
gdjs.SettingsCode.GDGvolume25Objects1 = [];
gdjs.SettingsCode.GDGvolume25Objects2 = [];
gdjs.SettingsCode.GDGvolume25Objects3 = [];
gdjs.SettingsCode.GDGvolume25Objects4 = [];
gdjs.SettingsCode.GDGvolume50Objects1 = [];
gdjs.SettingsCode.GDGvolume50Objects2 = [];
gdjs.SettingsCode.GDGvolume50Objects3 = [];
gdjs.SettingsCode.GDGvolume50Objects4 = [];
gdjs.SettingsCode.GDGvolume75Objects1 = [];
gdjs.SettingsCode.GDGvolume75Objects2 = [];
gdjs.SettingsCode.GDGvolume75Objects3 = [];
gdjs.SettingsCode.GDGvolume75Objects4 = [];
gdjs.SettingsCode.GDGvolume100Objects1 = [];
gdjs.SettingsCode.GDGvolume100Objects2 = [];
gdjs.SettingsCode.GDGvolume100Objects3 = [];
gdjs.SettingsCode.GDGvolume100Objects4 = [];
gdjs.SettingsCode.GDSvolumeSelectObjects1 = [];
gdjs.SettingsCode.GDSvolumeSelectObjects2 = [];
gdjs.SettingsCode.GDSvolumeSelectObjects3 = [];
gdjs.SettingsCode.GDSvolumeSelectObjects4 = [];
gdjs.SettingsCode.GDGvolumeSelectObjects1 = [];
gdjs.SettingsCode.GDGvolumeSelectObjects2 = [];
gdjs.SettingsCode.GDGvolumeSelectObjects3 = [];
gdjs.SettingsCode.GDGvolumeSelectObjects4 = [];
gdjs.SettingsCode.GDpointerObjects1 = [];
gdjs.SettingsCode.GDpointerObjects2 = [];
gdjs.SettingsCode.GDpointerObjects3 = [];
gdjs.SettingsCode.GDpointerObjects4 = [];
gdjs.SettingsCode.GDcheckboxObjects1 = [];
gdjs.SettingsCode.GDcheckboxObjects2 = [];
gdjs.SettingsCode.GDcheckboxObjects3 = [];
gdjs.SettingsCode.GDcheckboxObjects4 = [];
gdjs.SettingsCode.GDOnScreenButtonsTextObjects1 = [];
gdjs.SettingsCode.GDOnScreenButtonsTextObjects2 = [];
gdjs.SettingsCode.GDOnScreenButtonsTextObjects3 = [];
gdjs.SettingsCode.GDOnScreenButtonsTextObjects4 = [];

gdjs.SettingsCode.conditionTrue_0 = { val: false };
gdjs.SettingsCode.condition0IsTrue_0 = { val: false };
gdjs.SettingsCode.condition1IsTrue_0 = { val: false };
gdjs.SettingsCode.condition2IsTrue_0 = { val: false };
gdjs.SettingsCode.conditionTrue_1 = { val: false };
gdjs.SettingsCode.condition0IsTrue_1 = { val: false };
gdjs.SettingsCode.condition1IsTrue_1 = { val: false };
gdjs.SettingsCode.condition2IsTrue_1 = { val: false };

gdjs.SettingsCode.eventsList0 = function (runtimeScene) {

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.SettingsCode.GDpointerObjects1);
            {
                gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDpointerObjects1.length; i < len; ++i) {
                    gdjs.SettingsCode.GDpointerObjects1[i].deleteFromScene(runtimeScene);
                }
            }
        }
    }
};gdjs.SettingsCode.eventsList1 = function (runtimeScene) {

    {

        {
            gdjs.copyArray(runtimeScene.getObjects("AudioMenu"), gdjs.SettingsCode.GDAudioMenuObjects1);
            gdjs.copyArray(runtimeScene.getObjects("Gvolume0"), gdjs.SettingsCode.GDGvolume0Objects1);
            gdjs.copyArray(runtimeScene.getObjects("Gvolume100"), gdjs.SettingsCode.GDGvolume100Objects1);
            gdjs.copyArray(runtimeScene.getObjects("Gvolume25"), gdjs.SettingsCode.GDGvolume25Objects1);
            gdjs.copyArray(runtimeScene.getObjects("Gvolume50"), gdjs.SettingsCode.GDGvolume50Objects1);
            gdjs.copyArray(runtimeScene.getObjects("Gvolume75"), gdjs.SettingsCode.GDGvolume75Objects1);
            gdjs.copyArray(runtimeScene.getObjects("OnScreenButtonsText"), gdjs.SettingsCode.GDOnScreenButtonsTextObjects1);
            gdjs.copyArray(runtimeScene.getObjects("Return"), gdjs.SettingsCode.GDReturnObjects1);
            gdjs.copyArray(runtimeScene.getObjects("Svolume0"), gdjs.SettingsCode.GDSvolume0Objects1);
            gdjs.copyArray(runtimeScene.getObjects("Svolume100"), gdjs.SettingsCode.GDSvolume100Objects1);
            gdjs.copyArray(runtimeScene.getObjects("Svolume25"), gdjs.SettingsCode.GDSvolume25Objects1);
            gdjs.copyArray(runtimeScene.getObjects("Svolume50"), gdjs.SettingsCode.GDSvolume50Objects1);
            gdjs.copyArray(runtimeScene.getObjects("Svolume75"), gdjs.SettingsCode.GDSvolume75Objects1);
            gdjs.copyArray(runtimeScene.getObjects("checkbox"), gdjs.SettingsCode.GDcheckboxObjects1);
            {
                for (var i = 0, len = gdjs.SettingsCode.GDAudioMenuObjects1.length; i < len; ++i) {
                    gdjs.SettingsCode.GDAudioMenuObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.SettingsCode.GDAudioMenuObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDReturnObjects1.length; i < len; ++i) {
                    gdjs.SettingsCode.GDReturnObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.SettingsCode.GDReturnObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDGvolume0Objects1.length; i < len; ++i) {
                    gdjs.SettingsCode.GDGvolume0Objects1[i].setX((gdjs.SettingsCode.GDGvolume50Objects1.length === 0 ? 0 : gdjs.SettingsCode.GDGvolume50Objects1[0].getPointX("OptionsMenu")) - 200);
                }
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDGvolume25Objects1.length; i < len; ++i) {
                    gdjs.SettingsCode.GDGvolume25Objects1[i].setX((gdjs.SettingsCode.GDGvolume50Objects1.length === 0 ? 0 : gdjs.SettingsCode.GDGvolume50Objects1[0].getPointX("OptionsMenu")) - 100);
                }
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDGvolume50Objects1.length; i < len; ++i) {
                    gdjs.SettingsCode.GDGvolume50Objects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.SettingsCode.GDGvolume50Objects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDGvolume75Objects1.length; i < len; ++i) {
                    gdjs.SettingsCode.GDGvolume75Objects1[i].setX((gdjs.SettingsCode.GDGvolume50Objects1.length === 0 ? 0 : gdjs.SettingsCode.GDGvolume50Objects1[0].getPointX("Half")) + 100);
                }
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDGvolume100Objects1.length; i < len; ++i) {
                    gdjs.SettingsCode.GDGvolume100Objects1[i].setX((gdjs.SettingsCode.GDGvolume50Objects1.length === 0 ? 0 : gdjs.SettingsCode.GDGvolume50Objects1[0].getPointX("Half")) + 195);
                }
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDSvolume0Objects1.length; i < len; ++i) {
                    gdjs.SettingsCode.GDSvolume0Objects1[i].setX((gdjs.SettingsCode.GDSvolume50Objects1.length === 0 ? 0 : gdjs.SettingsCode.GDSvolume50Objects1[0].getPointX("OptionsMenu")) - 200);
                }
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDSvolume25Objects1.length; i < len; ++i) {
                    gdjs.SettingsCode.GDSvolume25Objects1[i].setX((gdjs.SettingsCode.GDSvolume50Objects1.length === 0 ? 0 : gdjs.SettingsCode.GDSvolume50Objects1[0].getPointX("OptionsMenu")) - 100);
                }
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDSvolume50Objects1.length; i < len; ++i) {
                    gdjs.SettingsCode.GDSvolume50Objects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.SettingsCode.GDSvolume50Objects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDSvolume75Objects1.length; i < len; ++i) {
                    gdjs.SettingsCode.GDSvolume75Objects1[i].setX((gdjs.SettingsCode.GDSvolume50Objects1.length === 0 ? 0 : gdjs.SettingsCode.GDSvolume50Objects1[0].getPointX("OptionsMenu")) + 100);
                }
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDSvolume100Objects1.length; i < len; ++i) {
                    gdjs.SettingsCode.GDSvolume100Objects1[i].setX((gdjs.SettingsCode.GDSvolume50Objects1.length === 0 ? 0 : gdjs.SettingsCode.GDSvolume50Objects1[0].getPointX("Half")) + 195);
                }
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDcheckboxObjects1.length; i < len; ++i) {
                    gdjs.SettingsCode.GDcheckboxObjects1[i].setX((gdjs.SettingsCode.GDAudioMenuObjects1.length === 0 ? 0 : gdjs.SettingsCode.GDAudioMenuObjects1[0].getPointX("OptionsMenu")) + 50);
                }
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDOnScreenButtonsTextObjects1.length; i < len; ++i) {
                    gdjs.SettingsCode.GDOnScreenButtonsTextObjects1[i].setX((gdjs.SettingsCode.GDcheckboxObjects1.length === 0 ? 0 : gdjs.SettingsCode.GDcheckboxObjects1[0].getPointX("OptionsMenu")) + 100);
                }
            }
        }
    }
};gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDReturnObjects2Objects = Hashtable.newFrom({ "Return": gdjs.SettingsCode.GDReturnObjects2 });gdjs.SettingsCode.eventsList2 = function (runtimeScene) {

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            gdjs.copyArray(gdjs.SettingsCode.GDpointerObjects2, gdjs.SettingsCode.GDpointerObjects3);

            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.runtimeScene.popScene(runtimeScene);
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDpointerObjects3.length; i < len; ++i) {
                    gdjs.SettingsCode.GDpointerObjects3[i].hide();
                }
            }
        }
    }

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        gdjs.SettingsCode.condition1IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            {
                gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.SettingsCode.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.runtimeScene.popScene(runtimeScene);
            }
        }
    }
};gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDReturnObjects2Objects = Hashtable.newFrom({ "Return": gdjs.SettingsCode.GDReturnObjects2 });gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDcheckboxObjects2Objects = Hashtable.newFrom({ "checkbox": gdjs.SettingsCode.GDcheckboxObjects2 });gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDReturnObjects2Objects = Hashtable.newFrom({ "Return": gdjs.SettingsCode.GDReturnObjects2 });gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDcheckboxObjects1Objects = Hashtable.newFrom({ "checkbox": gdjs.SettingsCode.GDcheckboxObjects1 });gdjs.SettingsCode.eventsList3 = function (runtimeScene) {

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            gdjs.copyArray(gdjs.SettingsCode.GDpointerObjects1, gdjs.SettingsCode.GDpointerObjects2);

            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.SettingsCode.GDpointerObjects2[i].hide();
                }
            }{
                gdjs.evtTools.common.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7));
            }
        }
    }

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        gdjs.SettingsCode.condition1IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            {
                gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.SettingsCode.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.common.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7));
            }
        }
    }
};gdjs.SettingsCode.eventsList4 = function (runtimeScene) {

    {

        {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.SettingsCode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.SettingsCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.SettingsCode.GDpointerObjects2[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Return"), gdjs.SettingsCode.GDReturnObjects2);

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDReturnObjects2Objects, runtimeScene, true, false);
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.SettingsCode.GDReturnObjects2 */
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.SettingsCode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.SettingsCode.GDReturnObjects2.length; i < len; ++i) {
                    gdjs.SettingsCode.GDReturnObjects2[i].setAnimation(1);
                }
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.SettingsCode.GDpointerObjects2[i].hide(false);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }
            {
                //Subevents
                gdjs.SettingsCode.eventsList2(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Return"), gdjs.SettingsCode.GDReturnObjects2);
        gdjs.copyArray(runtimeScene.getObjects("checkbox"), gdjs.SettingsCode.GDcheckboxObjects2);

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        gdjs.SettingsCode.condition1IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDReturnObjects2Objects, runtimeScene, true, true);
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            {
                gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDcheckboxObjects2Objects, runtimeScene, true, true);
            }
        }
        if (gdjs.SettingsCode.condition1IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.SettingsCode.GDpointerObjects2);
            {
                gdjs.evtTools.input.showCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.SettingsCode.GDpointerObjects2[i].hide();
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Return"), gdjs.SettingsCode.GDReturnObjects2);

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDReturnObjects2Objects, runtimeScene, true, true);
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.SettingsCode.GDReturnObjects2 */
            {
                for (var i = 0, len = gdjs.SettingsCode.GDReturnObjects2.length; i < len; ++i) {
                    gdjs.SettingsCode.GDReturnObjects2[i].setAnimation(0);
                }
            }
        }
    }

    {}

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), false);
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("checkbox"), gdjs.SettingsCode.GDcheckboxObjects2);
            {
                for (var i = 0, len = gdjs.SettingsCode.GDcheckboxObjects2.length; i < len; ++i) {
                    gdjs.SettingsCode.GDcheckboxObjects2[i].setAnimation(0);
                }
            }
        }
    }

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), true);
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("checkbox"), gdjs.SettingsCode.GDcheckboxObjects2);
            {
                for (var i = 0, len = gdjs.SettingsCode.GDcheckboxObjects2.length; i < len; ++i) {
                    gdjs.SettingsCode.GDcheckboxObjects2[i].setAnimation(1);
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("checkbox"), gdjs.SettingsCode.GDcheckboxObjects1);

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDcheckboxObjects1Objects, runtimeScene, true, false);
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.SettingsCode.GDpointerObjects1);
            {
                for (var i = 0, len = gdjs.SettingsCode.GDpointerObjects1.length; i < len; ++i) {
                    gdjs.SettingsCode.GDpointerObjects1[i].hide(false);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }
            {
                //Subevents
                gdjs.SettingsCode.eventsList3(runtimeScene);
            } //End of subevents
        }
    }
};gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDSvolume0Objects2Objects = Hashtable.newFrom({ "Svolume0": gdjs.SettingsCode.GDSvolume0Objects2 });gdjs.SettingsCode.eventsList5 = function (runtimeScene) {

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        gdjs.SettingsCode.condition1IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            {
                {
                    gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition1IsTrue_0;
                    gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9232956);
                }
            }
        }
        if (gdjs.SettingsCode.condition1IsTrue_0.val) {
            gdjs.copyArray(gdjs.SettingsCode.GDSvolume0Objects2, gdjs.SettingsCode.GDSvolume0Objects3);

            gdjs.copyArray(runtimeScene.getObjects("SvolumeSelect"), gdjs.SettingsCode.GDSvolumeSelectObjects3);
            gdjs.copyArray(gdjs.SettingsCode.GDpointerObjects2, gdjs.SettingsCode.GDpointerObjects3);

            {
                runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
            }{
                gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 2, 0);
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDSvolumeSelectObjects3.length; i < len; ++i) {
                    gdjs.SettingsCode.GDSvolumeSelectObjects3[i].setPosition(gdjs.SettingsCode.GDSvolume0Objects3.length === 0 ? 0 : gdjs.SettingsCode.GDSvolume0Objects3[0].getPointX("Volume0"), 224);
                }
            }{
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "AnimalCat_meow.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDpointerObjects3.length; i < len; ++i) {
                    gdjs.SettingsCode.GDpointerObjects3[i].hide();
                }
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }
        }
    }

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        gdjs.SettingsCode.condition1IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            {
                gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.SettingsCode.condition1IsTrue_0.val) {
            /* Reuse gdjs.SettingsCode.GDSvolume0Objects2 */
            gdjs.copyArray(runtimeScene.getObjects("SvolumeSelect"), gdjs.SettingsCode.GDSvolumeSelectObjects2);
            {
                runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
            }{
                gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 2, 0);
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDSvolumeSelectObjects2.length; i < len; ++i) {
                    gdjs.SettingsCode.GDSvolumeSelectObjects2[i].setPosition(gdjs.SettingsCode.GDSvolume0Objects2.length === 0 ? 0 : gdjs.SettingsCode.GDSvolume0Objects2[0].getPointX("Volume0"), 224);
                }
            }{
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "AnimalCat_meow.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }
        }
    }
};gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDSvolume25Objects2Objects = Hashtable.newFrom({ "Svolume25": gdjs.SettingsCode.GDSvolume25Objects2 });gdjs.SettingsCode.eventsList6 = function (runtimeScene) {

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        gdjs.SettingsCode.condition1IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            {
                {
                    gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition1IsTrue_0;
                    gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18595516);
                }
            }
        }
        if (gdjs.SettingsCode.condition1IsTrue_0.val) {
            gdjs.copyArray(gdjs.SettingsCode.GDSvolume25Objects2, gdjs.SettingsCode.GDSvolume25Objects3);

            gdjs.copyArray(runtimeScene.getObjects("SvolumeSelect"), gdjs.SettingsCode.GDSvolumeSelectObjects3);
            gdjs.copyArray(gdjs.SettingsCode.GDpointerObjects2, gdjs.SettingsCode.GDpointerObjects3);

            {
                runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(25);
            }{
                gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 2, 25);
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDSvolumeSelectObjects3.length; i < len; ++i) {
                    gdjs.SettingsCode.GDSvolumeSelectObjects3[i].setPosition(gdjs.SettingsCode.GDSvolume25Objects3.length === 0 ? 0 : gdjs.SettingsCode.GDSvolume25Objects3[0].getPointX("Volume25"), 224);
                }
            }{
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "AnimalCat_meow.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDpointerObjects3.length; i < len; ++i) {
                    gdjs.SettingsCode.GDpointerObjects3[i].hide();
                }
            }
        }
    }

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        gdjs.SettingsCode.condition1IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            {
                gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.SettingsCode.condition1IsTrue_0.val) {
            /* Reuse gdjs.SettingsCode.GDSvolume25Objects2 */
            gdjs.copyArray(runtimeScene.getObjects("SvolumeSelect"), gdjs.SettingsCode.GDSvolumeSelectObjects2);
            {
                runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(25);
            }{
                gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 2, 25);
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDSvolumeSelectObjects2.length; i < len; ++i) {
                    gdjs.SettingsCode.GDSvolumeSelectObjects2[i].setPosition(gdjs.SettingsCode.GDSvolume25Objects2.length === 0 ? 0 : gdjs.SettingsCode.GDSvolume25Objects2[0].getPointX("Volume25"), 224);
                }
            }{
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "AnimalCat_meow.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }
        }
    }
};gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDSvolume50Objects2Objects = Hashtable.newFrom({ "Svolume50": gdjs.SettingsCode.GDSvolume50Objects2 });gdjs.SettingsCode.eventsList7 = function (runtimeScene) {

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        gdjs.SettingsCode.condition1IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            {
                {
                    gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition1IsTrue_0;
                    gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9109828);
                }
            }
        }
        if (gdjs.SettingsCode.condition1IsTrue_0.val) {
            gdjs.copyArray(gdjs.SettingsCode.GDSvolume50Objects2, gdjs.SettingsCode.GDSvolume50Objects3);

            gdjs.copyArray(runtimeScene.getObjects("SvolumeSelect"), gdjs.SettingsCode.GDSvolumeSelectObjects3);
            gdjs.copyArray(gdjs.SettingsCode.GDpointerObjects2, gdjs.SettingsCode.GDpointerObjects3);

            {
                runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(50);
            }{
                gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 2, 50);
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDSvolumeSelectObjects3.length; i < len; ++i) {
                    gdjs.SettingsCode.GDSvolumeSelectObjects3[i].setPosition(gdjs.SettingsCode.GDSvolume50Objects3.length === 0 ? 0 : gdjs.SettingsCode.GDSvolume50Objects3[0].getPointX("Volume50"), 224);
                }
            }{
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "AnimalCat_meow.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDpointerObjects3.length; i < len; ++i) {
                    gdjs.SettingsCode.GDpointerObjects3[i].hide();
                }
            }
        }
    }

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        gdjs.SettingsCode.condition1IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            {
                gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.SettingsCode.condition1IsTrue_0.val) {
            /* Reuse gdjs.SettingsCode.GDSvolume50Objects2 */
            gdjs.copyArray(runtimeScene.getObjects("SvolumeSelect"), gdjs.SettingsCode.GDSvolumeSelectObjects2);
            {
                runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(50);
            }{
                gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 2, 50);
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDSvolumeSelectObjects2.length; i < len; ++i) {
                    gdjs.SettingsCode.GDSvolumeSelectObjects2[i].setPosition(gdjs.SettingsCode.GDSvolume50Objects2.length === 0 ? 0 : gdjs.SettingsCode.GDSvolume50Objects2[0].getPointX("Volume50"), 224);
                }
            }{
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "AnimalCat_meow.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }
        }
    }
};gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDSvolume75Objects2Objects = Hashtable.newFrom({ "Svolume75": gdjs.SettingsCode.GDSvolume75Objects2 });gdjs.SettingsCode.eventsList8 = function (runtimeScene) {

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        gdjs.SettingsCode.condition1IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            {
                {
                    gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition1IsTrue_0;
                    gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9115260);
                }
            }
        }
        if (gdjs.SettingsCode.condition1IsTrue_0.val) {
            gdjs.copyArray(gdjs.SettingsCode.GDSvolume75Objects2, gdjs.SettingsCode.GDSvolume75Objects3);

            gdjs.copyArray(runtimeScene.getObjects("SvolumeSelect"), gdjs.SettingsCode.GDSvolumeSelectObjects3);
            gdjs.copyArray(gdjs.SettingsCode.GDpointerObjects2, gdjs.SettingsCode.GDpointerObjects3);

            {
                runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(75);
            }{
                gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 2, 75);
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDSvolumeSelectObjects3.length; i < len; ++i) {
                    gdjs.SettingsCode.GDSvolumeSelectObjects3[i].setPosition(gdjs.SettingsCode.GDSvolume75Objects3.length === 0 ? 0 : gdjs.SettingsCode.GDSvolume75Objects3[0].getPointX("Volume75"), 224);
                }
            }{
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "AnimalCat_meow.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDpointerObjects3.length; i < len; ++i) {
                    gdjs.SettingsCode.GDpointerObjects3[i].hide();
                }
            }
        }
    }

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        gdjs.SettingsCode.condition1IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            {
                gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.SettingsCode.condition1IsTrue_0.val) {
            /* Reuse gdjs.SettingsCode.GDSvolume75Objects2 */
            gdjs.copyArray(runtimeScene.getObjects("SvolumeSelect"), gdjs.SettingsCode.GDSvolumeSelectObjects2);
            {
                runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(75);
            }{
                gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 2, 75);
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDSvolumeSelectObjects2.length; i < len; ++i) {
                    gdjs.SettingsCode.GDSvolumeSelectObjects2[i].setPosition(gdjs.SettingsCode.GDSvolume75Objects2.length === 0 ? 0 : gdjs.SettingsCode.GDSvolume75Objects2[0].getPointX("Volume75"), 224);
                }
            }{
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "AnimalCat_meow.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }
        }
    }
};gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDSvolume100Objects2Objects = Hashtable.newFrom({ "Svolume100": gdjs.SettingsCode.GDSvolume100Objects2 });gdjs.SettingsCode.eventsList9 = function (runtimeScene) {

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        gdjs.SettingsCode.condition1IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            {
                {
                    gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition1IsTrue_0;
                    gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9121940);
                }
            }
        }
        if (gdjs.SettingsCode.condition1IsTrue_0.val) {
            gdjs.copyArray(gdjs.SettingsCode.GDSvolume100Objects2, gdjs.SettingsCode.GDSvolume100Objects3);

            gdjs.copyArray(runtimeScene.getObjects("SvolumeSelect"), gdjs.SettingsCode.GDSvolumeSelectObjects3);
            gdjs.copyArray(gdjs.SettingsCode.GDpointerObjects2, gdjs.SettingsCode.GDpointerObjects3);

            {
                runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(100);
            }{
                gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 2, 100);
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDSvolumeSelectObjects3.length; i < len; ++i) {
                    gdjs.SettingsCode.GDSvolumeSelectObjects3[i].setPosition(gdjs.SettingsCode.GDSvolume100Objects3.length === 0 ? 0 : gdjs.SettingsCode.GDSvolume100Objects3[0].getPointX("Volume100"), 224);
                }
            }{
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "AnimalCat_meow.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDpointerObjects3.length; i < len; ++i) {
                    gdjs.SettingsCode.GDpointerObjects3[i].hide();
                }
            }
        }
    }

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        gdjs.SettingsCode.condition1IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            {
                gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.SettingsCode.condition1IsTrue_0.val) {
            /* Reuse gdjs.SettingsCode.GDSvolume100Objects2 */
            gdjs.copyArray(runtimeScene.getObjects("SvolumeSelect"), gdjs.SettingsCode.GDSvolumeSelectObjects2);
            {
                runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(100);
            }{
                gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 2, 100);
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDSvolumeSelectObjects2.length; i < len; ++i) {
                    gdjs.SettingsCode.GDSvolumeSelectObjects2[i].setPosition(gdjs.SettingsCode.GDSvolume100Objects2.length === 0 ? 0 : gdjs.SettingsCode.GDSvolume100Objects2[0].getPointX("Volume100"), 224);
                }
            }{
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "AnimalCat_meow.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }
        }
    }
};gdjs.SettingsCode.eventsList10 = function (runtimeScene) {

    {

        gdjs.copyArray(runtimeScene.getObjects("Svolume0"), gdjs.SettingsCode.GDSvolume0Objects2);

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDSvolume0Objects2Objects, runtimeScene, true, false);
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.SettingsCode.GDpointerObjects2);
            {
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.SettingsCode.GDpointerObjects2[i].hide(false);
                }
            }
            {
                //Subevents
                gdjs.SettingsCode.eventsList5(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Svolume25"), gdjs.SettingsCode.GDSvolume25Objects2);

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDSvolume25Objects2Objects, runtimeScene, true, false);
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.SettingsCode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.SettingsCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.SettingsCode.GDpointerObjects2[i].hide(false);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }
            {
                //Subevents
                gdjs.SettingsCode.eventsList6(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Svolume50"), gdjs.SettingsCode.GDSvolume50Objects2);

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDSvolume50Objects2Objects, runtimeScene, true, false);
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.SettingsCode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.SettingsCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.SettingsCode.GDpointerObjects2[i].hide(false);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }
            {
                //Subevents
                gdjs.SettingsCode.eventsList7(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Svolume75"), gdjs.SettingsCode.GDSvolume75Objects2);

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDSvolume75Objects2Objects, runtimeScene, true, false);
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.SettingsCode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.SettingsCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.SettingsCode.GDpointerObjects2[i].hide(false);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }
            {
                //Subevents
                gdjs.SettingsCode.eventsList8(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Svolume100"), gdjs.SettingsCode.GDSvolume100Objects2);

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDSvolume100Objects2Objects, runtimeScene, true, false);
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.SettingsCode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.SettingsCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.SettingsCode.GDpointerObjects2[i].hide(false);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }
            {
                //Subevents
                gdjs.SettingsCode.eventsList9(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("Svolume0"), gdjs.SettingsCode.GDSvolume0Objects2);
            gdjs.copyArray(runtimeScene.getObjects("SvolumeSelect"), gdjs.SettingsCode.GDSvolumeSelectObjects2);
            {
                for (var i = 0, len = gdjs.SettingsCode.GDSvolumeSelectObjects2.length; i < len; ++i) {
                    gdjs.SettingsCode.GDSvolumeSelectObjects2[i].setPosition(gdjs.SettingsCode.GDSvolume0Objects2.length === 0 ? 0 : gdjs.SettingsCode.GDSvolume0Objects2[0].getPointX("Volume0"), 224);
                }
            }
        }
    }

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 25;
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("Svolume25"), gdjs.SettingsCode.GDSvolume25Objects2);
            gdjs.copyArray(runtimeScene.getObjects("SvolumeSelect"), gdjs.SettingsCode.GDSvolumeSelectObjects2);
            {
                for (var i = 0, len = gdjs.SettingsCode.GDSvolumeSelectObjects2.length; i < len; ++i) {
                    gdjs.SettingsCode.GDSvolumeSelectObjects2[i].setPosition(gdjs.SettingsCode.GDSvolume25Objects2.length === 0 ? 0 : gdjs.SettingsCode.GDSvolume25Objects2[0].getPointX("Volume25"), 224);
                }
            }
        }
    }

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 50;
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("Svolume50"), gdjs.SettingsCode.GDSvolume50Objects2);
            gdjs.copyArray(runtimeScene.getObjects("SvolumeSelect"), gdjs.SettingsCode.GDSvolumeSelectObjects2);
            {
                for (var i = 0, len = gdjs.SettingsCode.GDSvolumeSelectObjects2.length; i < len; ++i) {
                    gdjs.SettingsCode.GDSvolumeSelectObjects2[i].setPosition(gdjs.SettingsCode.GDSvolume50Objects2.length === 0 ? 0 : gdjs.SettingsCode.GDSvolume50Objects2[0].getPointX("Volume50"), 224);
                }
            }
        }
    }

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 75;
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("Svolume75"), gdjs.SettingsCode.GDSvolume75Objects2);
            gdjs.copyArray(runtimeScene.getObjects("SvolumeSelect"), gdjs.SettingsCode.GDSvolumeSelectObjects2);
            {
                for (var i = 0, len = gdjs.SettingsCode.GDSvolumeSelectObjects2.length; i < len; ++i) {
                    gdjs.SettingsCode.GDSvolumeSelectObjects2[i].setPosition(gdjs.SettingsCode.GDSvolume75Objects2.length === 0 ? 0 : gdjs.SettingsCode.GDSvolume75Objects2[0].getPointX("Volume75"), 224);
                }
            }
        }
    }

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 100;
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("Svolume100"), gdjs.SettingsCode.GDSvolume100Objects1);
            gdjs.copyArray(runtimeScene.getObjects("SvolumeSelect"), gdjs.SettingsCode.GDSvolumeSelectObjects1);
            {
                for (var i = 0, len = gdjs.SettingsCode.GDSvolumeSelectObjects1.length; i < len; ++i) {
                    gdjs.SettingsCode.GDSvolumeSelectObjects1[i].setPosition(gdjs.SettingsCode.GDSvolume100Objects1.length === 0 ? 0 : gdjs.SettingsCode.GDSvolume100Objects1[0].getPointX("Volume100"), 224);
                }
            }
        }
    }
};gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDGvolume0Objects2Objects = Hashtable.newFrom({ "Gvolume0": gdjs.SettingsCode.GDGvolume0Objects2 });gdjs.SettingsCode.eventsList11 = function (runtimeScene) {

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            gdjs.copyArray(gdjs.SettingsCode.GDGvolume0Objects2, gdjs.SettingsCode.GDGvolume0Objects3);

            gdjs.copyArray(runtimeScene.getObjects("GvolumeSelect"), gdjs.SettingsCode.GDGvolumeSelectObjects3);
            gdjs.copyArray(gdjs.SettingsCode.GDpointerObjects2, gdjs.SettingsCode.GDpointerObjects3);

            {
                runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDGvolumeSelectObjects3.length; i < len; ++i) {
                    gdjs.SettingsCode.GDGvolumeSelectObjects3[i].setPosition(gdjs.SettingsCode.GDGvolume0Objects3.length === 0 ? 0 : gdjs.SettingsCode.GDGvolume0Objects3[0].getPointX("Volume0"), 469);
                }
            }{
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 0);
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDpointerObjects3.length; i < len; ++i) {
                    gdjs.SettingsCode.GDpointerObjects3[i].hide();
                }
            }
        }
    }

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        gdjs.SettingsCode.condition1IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            {
                gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.SettingsCode.condition1IsTrue_0.val) {
            /* Reuse gdjs.SettingsCode.GDGvolume0Objects2 */
            gdjs.copyArray(runtimeScene.getObjects("GvolumeSelect"), gdjs.SettingsCode.GDGvolumeSelectObjects2);
            {
                runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDGvolumeSelectObjects2.length; i < len; ++i) {
                    gdjs.SettingsCode.GDGvolumeSelectObjects2[i].setPosition(gdjs.SettingsCode.GDGvolume0Objects2.length === 0 ? 0 : gdjs.SettingsCode.GDGvolume0Objects2[0].getPointX("Volume0"), 469);
                }
            }{
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 0);
            }
        }
    }
};gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDGvolume25Objects2Objects = Hashtable.newFrom({ "Gvolume25": gdjs.SettingsCode.GDGvolume25Objects2 });gdjs.SettingsCode.eventsList12 = function (runtimeScene) {

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            gdjs.copyArray(gdjs.SettingsCode.GDGvolume25Objects2, gdjs.SettingsCode.GDGvolume25Objects3);

            gdjs.copyArray(runtimeScene.getObjects("GvolumeSelect"), gdjs.SettingsCode.GDGvolumeSelectObjects3);
            gdjs.copyArray(gdjs.SettingsCode.GDpointerObjects2, gdjs.SettingsCode.GDpointerObjects3);

            {
                runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(25);
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDGvolumeSelectObjects3.length; i < len; ++i) {
                    gdjs.SettingsCode.GDGvolumeSelectObjects3[i].setPosition(gdjs.SettingsCode.GDGvolume25Objects3.length === 0 ? 0 : gdjs.SettingsCode.GDGvolume25Objects3[0].getPointX("Volume0"), 397);
                }
            }{
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 25);
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDpointerObjects3.length; i < len; ++i) {
                    gdjs.SettingsCode.GDpointerObjects3[i].hide();
                }
            }
        }
    }

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        gdjs.SettingsCode.condition1IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            {
                gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.SettingsCode.condition1IsTrue_0.val) {
            /* Reuse gdjs.SettingsCode.GDGvolume25Objects2 */
            gdjs.copyArray(runtimeScene.getObjects("GvolumeSelect"), gdjs.SettingsCode.GDGvolumeSelectObjects2);
            {
                runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(25);
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDGvolumeSelectObjects2.length; i < len; ++i) {
                    gdjs.SettingsCode.GDGvolumeSelectObjects2[i].setPosition(gdjs.SettingsCode.GDGvolume25Objects2.length === 0 ? 0 : gdjs.SettingsCode.GDGvolume25Objects2[0].getPointX("Volume0"), 397);
                }
            }{
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 25);
            }
        }
    }
};gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDGvolume50Objects2Objects = Hashtable.newFrom({ "Gvolume50": gdjs.SettingsCode.GDGvolume50Objects2 });gdjs.SettingsCode.eventsList13 = function (runtimeScene) {

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            gdjs.copyArray(gdjs.SettingsCode.GDGvolume50Objects2, gdjs.SettingsCode.GDGvolume50Objects3);

            gdjs.copyArray(runtimeScene.getObjects("GvolumeSelect"), gdjs.SettingsCode.GDGvolumeSelectObjects3);
            gdjs.copyArray(gdjs.SettingsCode.GDpointerObjects2, gdjs.SettingsCode.GDpointerObjects3);

            {
                runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(50);
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDGvolumeSelectObjects3.length; i < len; ++i) {
                    gdjs.SettingsCode.GDGvolumeSelectObjects3[i].setPosition(gdjs.SettingsCode.GDGvolume50Objects3.length === 0 ? 0 : gdjs.SettingsCode.GDGvolume50Objects3[0].getPointX("Volume0"), 397);
                }
            }{
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 50);
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDpointerObjects3.length; i < len; ++i) {
                    gdjs.SettingsCode.GDpointerObjects3[i].hide();
                }
            }
        }
    }

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        gdjs.SettingsCode.condition1IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            {
                gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.SettingsCode.condition1IsTrue_0.val) {
            /* Reuse gdjs.SettingsCode.GDGvolume50Objects2 */
            gdjs.copyArray(runtimeScene.getObjects("GvolumeSelect"), gdjs.SettingsCode.GDGvolumeSelectObjects2);
            {
                runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(50);
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDGvolumeSelectObjects2.length; i < len; ++i) {
                    gdjs.SettingsCode.GDGvolumeSelectObjects2[i].setPosition(gdjs.SettingsCode.GDGvolume50Objects2.length === 0 ? 0 : gdjs.SettingsCode.GDGvolume50Objects2[0].getPointX("Volume0"), 397);
                }
            }{
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 50);
            }
        }
    }
};gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDGvolume75Objects2Objects = Hashtable.newFrom({ "Gvolume75": gdjs.SettingsCode.GDGvolume75Objects2 });gdjs.SettingsCode.eventsList14 = function (runtimeScene) {

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            gdjs.copyArray(gdjs.SettingsCode.GDGvolume75Objects2, gdjs.SettingsCode.GDGvolume75Objects3);

            gdjs.copyArray(runtimeScene.getObjects("GvolumeSelect"), gdjs.SettingsCode.GDGvolumeSelectObjects3);
            gdjs.copyArray(gdjs.SettingsCode.GDpointerObjects2, gdjs.SettingsCode.GDpointerObjects3);

            {
                runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(75);
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDGvolumeSelectObjects3.length; i < len; ++i) {
                    gdjs.SettingsCode.GDGvolumeSelectObjects3[i].setPosition(gdjs.SettingsCode.GDGvolume75Objects3.length === 0 ? 0 : gdjs.SettingsCode.GDGvolume75Objects3[0].getPointX("Volume0"), 397);
                }
            }{
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 75);
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDpointerObjects3.length; i < len; ++i) {
                    gdjs.SettingsCode.GDpointerObjects3[i].hide();
                }
            }
        }
    }

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        gdjs.SettingsCode.condition1IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            {
                gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.SettingsCode.condition1IsTrue_0.val) {
            /* Reuse gdjs.SettingsCode.GDGvolume75Objects2 */
            gdjs.copyArray(runtimeScene.getObjects("GvolumeSelect"), gdjs.SettingsCode.GDGvolumeSelectObjects2);
            {
                runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(75);
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDGvolumeSelectObjects2.length; i < len; ++i) {
                    gdjs.SettingsCode.GDGvolumeSelectObjects2[i].setPosition(gdjs.SettingsCode.GDGvolume75Objects2.length === 0 ? 0 : gdjs.SettingsCode.GDGvolume75Objects2[0].getPointX("Volume0"), 397);
                }
            }{
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 75);
            }
        }
    }
};gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDGvolume100Objects2Objects = Hashtable.newFrom({ "Gvolume100": gdjs.SettingsCode.GDGvolume100Objects2 });gdjs.SettingsCode.eventsList15 = function (runtimeScene) {

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            gdjs.copyArray(gdjs.SettingsCode.GDGvolume100Objects2, gdjs.SettingsCode.GDGvolume100Objects3);

            gdjs.copyArray(runtimeScene.getObjects("GvolumeSelect"), gdjs.SettingsCode.GDGvolumeSelectObjects3);
            gdjs.copyArray(gdjs.SettingsCode.GDpointerObjects2, gdjs.SettingsCode.GDpointerObjects3);

            {
                runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(100);
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDGvolumeSelectObjects3.length; i < len; ++i) {
                    gdjs.SettingsCode.GDGvolumeSelectObjects3[i].setPosition(gdjs.SettingsCode.GDGvolume100Objects3.length === 0 ? 0 : gdjs.SettingsCode.GDGvolume100Objects3[0].getPointX("Volume0"), 397);
                }
            }{
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 100);
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDpointerObjects3.length; i < len; ++i) {
                    gdjs.SettingsCode.GDpointerObjects3[i].hide();
                }
            }
        }
    }

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        gdjs.SettingsCode.condition1IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            {
                gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.SettingsCode.condition1IsTrue_0.val) {
            /* Reuse gdjs.SettingsCode.GDGvolume100Objects2 */
            gdjs.copyArray(runtimeScene.getObjects("GvolumeSelect"), gdjs.SettingsCode.GDGvolumeSelectObjects2);
            {
                runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(100);
            }{
                for (var i = 0, len = gdjs.SettingsCode.GDGvolumeSelectObjects2.length; i < len; ++i) {
                    gdjs.SettingsCode.GDGvolumeSelectObjects2[i].setPosition(gdjs.SettingsCode.GDGvolume100Objects2.length === 0 ? 0 : gdjs.SettingsCode.GDGvolume100Objects2[0].getPointX("Volume0"), 397);
                }
            }{
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 100);
            }
        }
    }
};gdjs.SettingsCode.eventsList16 = function (runtimeScene) {

    {

        gdjs.copyArray(runtimeScene.getObjects("Gvolume0"), gdjs.SettingsCode.GDGvolume0Objects2);

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDGvolume0Objects2Objects, runtimeScene, true, false);
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.SettingsCode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.SettingsCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.SettingsCode.GDpointerObjects2[i].hide(false);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }
            {
                //Subevents
                gdjs.SettingsCode.eventsList11(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Gvolume25"), gdjs.SettingsCode.GDGvolume25Objects2);

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDGvolume25Objects2Objects, runtimeScene, true, false);
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.SettingsCode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.SettingsCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.SettingsCode.GDpointerObjects2[i].hide(false);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }
            {
                //Subevents
                gdjs.SettingsCode.eventsList12(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Gvolume50"), gdjs.SettingsCode.GDGvolume50Objects2);

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDGvolume50Objects2Objects, runtimeScene, true, false);
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.SettingsCode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.SettingsCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.SettingsCode.GDpointerObjects2[i].hide(false);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }
            {
                //Subevents
                gdjs.SettingsCode.eventsList13(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Gvolume75"), gdjs.SettingsCode.GDGvolume75Objects2);

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDGvolume75Objects2Objects, runtimeScene, true, false);
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.SettingsCode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.SettingsCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.SettingsCode.GDpointerObjects2[i].hide(false);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }
            {
                //Subevents
                gdjs.SettingsCode.eventsList14(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Gvolume100"), gdjs.SettingsCode.GDGvolume100Objects2);

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDGvolume100Objects2Objects, runtimeScene, true, false);
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.SettingsCode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.SettingsCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.SettingsCode.GDpointerObjects2[i].hide(false);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }
            {
                //Subevents
                gdjs.SettingsCode.eventsList15(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("Gvolume0"), gdjs.SettingsCode.GDGvolume0Objects2);
            gdjs.copyArray(runtimeScene.getObjects("GvolumeSelect"), gdjs.SettingsCode.GDGvolumeSelectObjects2);
            {
                for (var i = 0, len = gdjs.SettingsCode.GDGvolumeSelectObjects2.length; i < len; ++i) {
                    gdjs.SettingsCode.GDGvolumeSelectObjects2[i].setPosition(gdjs.SettingsCode.GDGvolume0Objects2.length === 0 ? 0 : gdjs.SettingsCode.GDGvolume0Objects2[0].getPointX("Volume0"), 397);
                }
            }
        }
    }

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 25;
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("Gvolume25"), gdjs.SettingsCode.GDGvolume25Objects2);
            gdjs.copyArray(runtimeScene.getObjects("GvolumeSelect"), gdjs.SettingsCode.GDGvolumeSelectObjects2);
            {
                for (var i = 0, len = gdjs.SettingsCode.GDGvolumeSelectObjects2.length; i < len; ++i) {
                    gdjs.SettingsCode.GDGvolumeSelectObjects2[i].setPosition(gdjs.SettingsCode.GDGvolume25Objects2.length === 0 ? 0 : gdjs.SettingsCode.GDGvolume25Objects2[0].getPointX("Volume0"), 397);
                }
            }
        }
    }

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 50;
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("Gvolume50"), gdjs.SettingsCode.GDGvolume50Objects2);
            gdjs.copyArray(runtimeScene.getObjects("GvolumeSelect"), gdjs.SettingsCode.GDGvolumeSelectObjects2);
            {
                for (var i = 0, len = gdjs.SettingsCode.GDGvolumeSelectObjects2.length; i < len; ++i) {
                    gdjs.SettingsCode.GDGvolumeSelectObjects2[i].setPosition(gdjs.SettingsCode.GDGvolume50Objects2.length === 0 ? 0 : gdjs.SettingsCode.GDGvolume50Objects2[0].getPointX("Volume0"), 397);
                }
            }
        }
    }

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 75;
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("Gvolume75"), gdjs.SettingsCode.GDGvolume75Objects2);
            gdjs.copyArray(runtimeScene.getObjects("GvolumeSelect"), gdjs.SettingsCode.GDGvolumeSelectObjects2);
            {
                for (var i = 0, len = gdjs.SettingsCode.GDGvolumeSelectObjects2.length; i < len; ++i) {
                    gdjs.SettingsCode.GDGvolumeSelectObjects2[i].setPosition(gdjs.SettingsCode.GDGvolume75Objects2.length === 0 ? 0 : gdjs.SettingsCode.GDGvolume75Objects2[0].getPointX("Volume0"), 397);
                }
            }
        }
    }

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 100;
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("Gvolume100"), gdjs.SettingsCode.GDGvolume100Objects1);
            gdjs.copyArray(runtimeScene.getObjects("GvolumeSelect"), gdjs.SettingsCode.GDGvolumeSelectObjects1);
            {
                for (var i = 0, len = gdjs.SettingsCode.GDGvolumeSelectObjects1.length; i < len; ++i) {
                    gdjs.SettingsCode.GDGvolumeSelectObjects1[i].setPosition(gdjs.SettingsCode.GDGvolume100Objects1.length === 0 ? 0 : gdjs.SettingsCode.GDGvolume100Objects1[0].getPointX("Volume0"), 397);
                }
            }
        }
    }
};gdjs.SettingsCode.eventsList17 = function (runtimeScene) {

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 3);
            }
        }
    }

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        gdjs.SettingsCode.condition1IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {
            {
                {
                    gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition1IsTrue_0;
                    gdjs.SettingsCode.condition0IsTrue_1.val = false;
                    {
                        gdjs.SettingsCode.condition0IsTrue_1.val = gdjs.evtTools.sound.isMusicOnChannelPaused(runtimeScene, 1);
                    }gdjs.SettingsCode.conditionTrue_1.val = true && gdjs.SettingsCode.condition0IsTrue_1.val;
                }
            }
        }
        if (gdjs.SettingsCode.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
            }
        }
    }

    {

        gdjs.SettingsCode.condition0IsTrue_0.val = false;
        {
            gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        }if (gdjs.SettingsCode.condition0IsTrue_0.val) {

            {
                //Subevents
                gdjs.SettingsCode.eventsList0(runtimeScene);
            } //End of subevents
        }
    }

    {

        {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
            }
        }
    }

    {

        gdjs.SettingsCode.eventsList1(runtimeScene);
    }

    {

        gdjs.SettingsCode.eventsList4(runtimeScene);
    }

    {

        gdjs.SettingsCode.eventsList10(runtimeScene);
    }

    {

        gdjs.SettingsCode.eventsList16(runtimeScene);
    }
};

gdjs.SettingsCode.func = function (runtimeScene) {
    runtimeScene.getOnceTriggers().startNewFrame();

    gdjs.SettingsCode.GDBackgroundObjects1.length = 0;
    gdjs.SettingsCode.GDBackgroundObjects2.length = 0;
    gdjs.SettingsCode.GDBackgroundObjects3.length = 0;
    gdjs.SettingsCode.GDBackgroundObjects4.length = 0;
    gdjs.SettingsCode.GDAudioMenuObjects1.length = 0;
    gdjs.SettingsCode.GDAudioMenuObjects2.length = 0;
    gdjs.SettingsCode.GDAudioMenuObjects3.length = 0;
    gdjs.SettingsCode.GDAudioMenuObjects4.length = 0;
    gdjs.SettingsCode.GDReturnObjects1.length = 0;
    gdjs.SettingsCode.GDReturnObjects2.length = 0;
    gdjs.SettingsCode.GDReturnObjects3.length = 0;
    gdjs.SettingsCode.GDReturnObjects4.length = 0;
    gdjs.SettingsCode.GDSvolume0Objects1.length = 0;
    gdjs.SettingsCode.GDSvolume0Objects2.length = 0;
    gdjs.SettingsCode.GDSvolume0Objects3.length = 0;
    gdjs.SettingsCode.GDSvolume0Objects4.length = 0;
    gdjs.SettingsCode.GDSvolume25Objects1.length = 0;
    gdjs.SettingsCode.GDSvolume25Objects2.length = 0;
    gdjs.SettingsCode.GDSvolume25Objects3.length = 0;
    gdjs.SettingsCode.GDSvolume25Objects4.length = 0;
    gdjs.SettingsCode.GDSvolume50Objects1.length = 0;
    gdjs.SettingsCode.GDSvolume50Objects2.length = 0;
    gdjs.SettingsCode.GDSvolume50Objects3.length = 0;
    gdjs.SettingsCode.GDSvolume50Objects4.length = 0;
    gdjs.SettingsCode.GDSvolume75Objects1.length = 0;
    gdjs.SettingsCode.GDSvolume75Objects2.length = 0;
    gdjs.SettingsCode.GDSvolume75Objects3.length = 0;
    gdjs.SettingsCode.GDSvolume75Objects4.length = 0;
    gdjs.SettingsCode.GDSvolume100Objects1.length = 0;
    gdjs.SettingsCode.GDSvolume100Objects2.length = 0;
    gdjs.SettingsCode.GDSvolume100Objects3.length = 0;
    gdjs.SettingsCode.GDSvolume100Objects4.length = 0;
    gdjs.SettingsCode.GDGvolume0Objects1.length = 0;
    gdjs.SettingsCode.GDGvolume0Objects2.length = 0;
    gdjs.SettingsCode.GDGvolume0Objects3.length = 0;
    gdjs.SettingsCode.GDGvolume0Objects4.length = 0;
    gdjs.SettingsCode.GDGvolume25Objects1.length = 0;
    gdjs.SettingsCode.GDGvolume25Objects2.length = 0;
    gdjs.SettingsCode.GDGvolume25Objects3.length = 0;
    gdjs.SettingsCode.GDGvolume25Objects4.length = 0;
    gdjs.SettingsCode.GDGvolume50Objects1.length = 0;
    gdjs.SettingsCode.GDGvolume50Objects2.length = 0;
    gdjs.SettingsCode.GDGvolume50Objects3.length = 0;
    gdjs.SettingsCode.GDGvolume50Objects4.length = 0;
    gdjs.SettingsCode.GDGvolume75Objects1.length = 0;
    gdjs.SettingsCode.GDGvolume75Objects2.length = 0;
    gdjs.SettingsCode.GDGvolume75Objects3.length = 0;
    gdjs.SettingsCode.GDGvolume75Objects4.length = 0;
    gdjs.SettingsCode.GDGvolume100Objects1.length = 0;
    gdjs.SettingsCode.GDGvolume100Objects2.length = 0;
    gdjs.SettingsCode.GDGvolume100Objects3.length = 0;
    gdjs.SettingsCode.GDGvolume100Objects4.length = 0;
    gdjs.SettingsCode.GDSvolumeSelectObjects1.length = 0;
    gdjs.SettingsCode.GDSvolumeSelectObjects2.length = 0;
    gdjs.SettingsCode.GDSvolumeSelectObjects3.length = 0;
    gdjs.SettingsCode.GDSvolumeSelectObjects4.length = 0;
    gdjs.SettingsCode.GDGvolumeSelectObjects1.length = 0;
    gdjs.SettingsCode.GDGvolumeSelectObjects2.length = 0;
    gdjs.SettingsCode.GDGvolumeSelectObjects3.length = 0;
    gdjs.SettingsCode.GDGvolumeSelectObjects4.length = 0;
    gdjs.SettingsCode.GDpointerObjects1.length = 0;
    gdjs.SettingsCode.GDpointerObjects2.length = 0;
    gdjs.SettingsCode.GDpointerObjects3.length = 0;
    gdjs.SettingsCode.GDpointerObjects4.length = 0;
    gdjs.SettingsCode.GDcheckboxObjects1.length = 0;
    gdjs.SettingsCode.GDcheckboxObjects2.length = 0;
    gdjs.SettingsCode.GDcheckboxObjects3.length = 0;
    gdjs.SettingsCode.GDcheckboxObjects4.length = 0;
    gdjs.SettingsCode.GDOnScreenButtonsTextObjects1.length = 0;
    gdjs.SettingsCode.GDOnScreenButtonsTextObjects2.length = 0;
    gdjs.SettingsCode.GDOnScreenButtonsTextObjects3.length = 0;
    gdjs.SettingsCode.GDOnScreenButtonsTextObjects4.length = 0;

    gdjs.SettingsCode.eventsList17(runtimeScene);
    return;
};

gdjs['SettingsCode'] = gdjs.SettingsCode;