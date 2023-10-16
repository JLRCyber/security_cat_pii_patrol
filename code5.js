"use strict";

gdjs.Tutorial1_58_32WelcomeCode = {};
gdjs.Tutorial1_58_32WelcomeCode.GDCityObjects1 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDCityObjects2 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDCityObjects3 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDCityObjects4 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDplayerObjects1 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDplayerObjects2 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDplayerObjects3 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDplayerObjects4 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDMainMenu1Objects1 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDMainMenu1Objects2 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDMainMenu1Objects3 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDMainMenu1Objects4 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDTutorialBoxObjects1 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDTutorialBoxObjects2 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDTutorialBoxObjects3 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDTutorialBoxObjects4 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDStart1Objects1 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDStart1Objects2 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDStart1Objects3 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDStart1Objects4 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDpointerObjects1 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDpointerObjects2 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDpointerObjects3 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDpointerObjects4 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDboundaryObjects1 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDboundaryObjects2 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDboundaryObjects3 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDboundaryObjects4 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDTutorialStartTextObjects1 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDTutorialStartTextObjects2 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDTutorialStartTextObjects3 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDTutorialStartTextObjects4 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDorObjects1 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDorObjects2 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDorObjects3 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDorObjects4 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDControlPanelObjects1 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDControlPanelObjects2 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDControlPanelObjects3 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDControlPanelObjects4 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDAudioObjects1 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDAudioObjects2 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDAudioObjects3 = [];
gdjs.Tutorial1_58_32WelcomeCode.GDAudioObjects4 = [];

gdjs.Tutorial1_58_32WelcomeCode.conditionTrue_0 = { val: false };
gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0 = { val: false };
gdjs.Tutorial1_58_32WelcomeCode.condition1IsTrue_0 = { val: false };
gdjs.Tutorial1_58_32WelcomeCode.condition2IsTrue_0 = { val: false };
gdjs.Tutorial1_58_32WelcomeCode.condition3IsTrue_0 = { val: false };
gdjs.Tutorial1_58_32WelcomeCode.conditionTrue_1 = { val: false };
gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_1 = { val: false };
gdjs.Tutorial1_58_32WelcomeCode.condition1IsTrue_1 = { val: false };
gdjs.Tutorial1_58_32WelcomeCode.condition2IsTrue_1 = { val: false };
gdjs.Tutorial1_58_32WelcomeCode.condition3IsTrue_1 = { val: false };

gdjs.Tutorial1_58_32WelcomeCode.eventsList0 = function (runtimeScene) {

    {

        {
            gdjs.copyArray(runtimeScene.getObjects("ControlPanel"), gdjs.Tutorial1_58_32WelcomeCode.GDControlPanelObjects1);
            gdjs.copyArray(runtimeScene.getObjects("Start1"), gdjs.Tutorial1_58_32WelcomeCode.GDStart1Objects1);
            gdjs.copyArray(runtimeScene.getObjects("TutorialBox"), gdjs.Tutorial1_58_32WelcomeCode.GDTutorialBoxObjects1);
            gdjs.copyArray(runtimeScene.getObjects("TutorialStartText"), gdjs.Tutorial1_58_32WelcomeCode.GDTutorialStartTextObjects1);
            gdjs.copyArray(runtimeScene.getObjects("or"), gdjs.Tutorial1_58_32WelcomeCode.GDorObjects1);
            {
                for (var i = 0, len = gdjs.Tutorial1_58_32WelcomeCode.GDTutorialBoxObjects1.length; i < len; ++i) {
                    gdjs.Tutorial1_58_32WelcomeCode.GDTutorialBoxObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.Tutorial1_58_32WelcomeCode.GDTutorialBoxObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.Tutorial1_58_32WelcomeCode.GDTutorialStartTextObjects1.length; i < len; ++i) {
                    gdjs.Tutorial1_58_32WelcomeCode.GDTutorialStartTextObjects1[i].setX((gdjs.Tutorial1_58_32WelcomeCode.GDTutorialBoxObjects1.length === 0 ? 0 : gdjs.Tutorial1_58_32WelcomeCode.GDTutorialBoxObjects1[0].getPointX("tutorialbox")) + 50);
                }
            }{
                for (var i = 0, len = gdjs.Tutorial1_58_32WelcomeCode.GDStart1Objects1.length; i < len; ++i) {
                    gdjs.Tutorial1_58_32WelcomeCode.GDStart1Objects1[i].setX((gdjs.Tutorial1_58_32WelcomeCode.GDTutorialBoxObjects1.length === 0 ? 0 : gdjs.Tutorial1_58_32WelcomeCode.GDTutorialBoxObjects1[0].getPointX("tutorialbox")) + 620);
                }
            }{
                for (var i = 0, len = gdjs.Tutorial1_58_32WelcomeCode.GDorObjects1.length; i < len; ++i) {
                    gdjs.Tutorial1_58_32WelcomeCode.GDorObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.Tutorial1_58_32WelcomeCode.GDorObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.Tutorial1_58_32WelcomeCode.GDControlPanelObjects1.length; i < len; ++i) {
                    gdjs.Tutorial1_58_32WelcomeCode.GDControlPanelObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.Tutorial1_58_32WelcomeCode.GDControlPanelObjects1[i].getWidth() / 2);
                }
            }
        }
    }
};gdjs.Tutorial1_58_32WelcomeCode.mapOfGDgdjs_46Tutorial1_9558_9532WelcomeCode_46GDAudioObjects2Objects = Hashtable.newFrom({ "Audio": gdjs.Tutorial1_58_32WelcomeCode.GDAudioObjects2 });gdjs.Tutorial1_58_32WelcomeCode.eventsList1 = function (runtimeScene) {

    {

        gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val) {
            gdjs.copyArray(gdjs.Tutorial1_58_32WelcomeCode.GDpointerObjects2, gdjs.Tutorial1_58_32WelcomeCode.GDpointerObjects3);

            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                for (var i = 0, len = gdjs.Tutorial1_58_32WelcomeCode.GDpointerObjects3.length; i < len; ++i) {
                    gdjs.Tutorial1_58_32WelcomeCode.GDpointerObjects3[i].hide();
                }
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }{
                gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Settings");
            }
        }
    }

    {

        gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = false;
        gdjs.Tutorial1_58_32WelcomeCode.condition1IsTrue_0.val = false;
        {
            gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val) {
            {
                gdjs.Tutorial1_58_32WelcomeCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.Tutorial1_58_32WelcomeCode.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Settings");
            }
        }
    }
};gdjs.Tutorial1_58_32WelcomeCode.mapOfGDgdjs_46Tutorial1_9558_9532WelcomeCode_46GDMainMenu1Objects2Objects = Hashtable.newFrom({ "MainMenu1": gdjs.Tutorial1_58_32WelcomeCode.GDMainMenu1Objects2 });gdjs.Tutorial1_58_32WelcomeCode.eventsList2 = function (runtimeScene) {

    {

        gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.playSound(runtimeScene, "bubble_pop.mp3", false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 10, 1);
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
            }
        }
    }

    {

        gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = false;
        gdjs.Tutorial1_58_32WelcomeCode.condition1IsTrue_0.val = false;
        {
            gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val) {
            {
                gdjs.Tutorial1_58_32WelcomeCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.Tutorial1_58_32WelcomeCode.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.sound.playSound(runtimeScene, "bubble_pop.mp3", false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 10, 1);
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
            }
        }
    }
};gdjs.Tutorial1_58_32WelcomeCode.mapOfGDgdjs_46Tutorial1_9558_9532WelcomeCode_46GDStart1Objects2Objects = Hashtable.newFrom({ "Start1": gdjs.Tutorial1_58_32WelcomeCode.GDStart1Objects2 });gdjs.Tutorial1_58_32WelcomeCode.eventsList3 = function (runtimeScene) {

    {

        gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tutorial2: Touch Yellow X", false);
            }
        }
    }

    {

        gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = false;
        gdjs.Tutorial1_58_32WelcomeCode.condition1IsTrue_0.val = false;
        {
            gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val) {
            {
                gdjs.Tutorial1_58_32WelcomeCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.Tutorial1_58_32WelcomeCode.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tutorial2: Touch Yellow X", false);
            }
        }
    }
};gdjs.Tutorial1_58_32WelcomeCode.mapOfGDgdjs_46Tutorial1_9558_9532WelcomeCode_46GDAudioObjects2Objects = Hashtable.newFrom({ "Audio": gdjs.Tutorial1_58_32WelcomeCode.GDAudioObjects2 });gdjs.Tutorial1_58_32WelcomeCode.mapOfGDgdjs_46Tutorial1_9558_9532WelcomeCode_46GDMainMenu1Objects2Objects = Hashtable.newFrom({ "MainMenu1": gdjs.Tutorial1_58_32WelcomeCode.GDMainMenu1Objects2 });gdjs.Tutorial1_58_32WelcomeCode.mapOfGDgdjs_46Tutorial1_9558_9532WelcomeCode_46GDStart1Objects2Objects = Hashtable.newFrom({ "Start1": gdjs.Tutorial1_58_32WelcomeCode.GDStart1Objects2 });gdjs.Tutorial1_58_32WelcomeCode.mapOfGDgdjs_46Tutorial1_9558_9532WelcomeCode_46GDMainMenu1Objects1Objects = Hashtable.newFrom({ "MainMenu1": gdjs.Tutorial1_58_32WelcomeCode.GDMainMenu1Objects1 });gdjs.Tutorial1_58_32WelcomeCode.mapOfGDgdjs_46Tutorial1_9558_9532WelcomeCode_46GDStart1Objects1Objects = Hashtable.newFrom({ "Start1": gdjs.Tutorial1_58_32WelcomeCode.GDStart1Objects1 });gdjs.Tutorial1_58_32WelcomeCode.mapOfGDgdjs_46Tutorial1_9558_9532WelcomeCode_46GDAudioObjects1Objects = Hashtable.newFrom({ "Audio": gdjs.Tutorial1_58_32WelcomeCode.GDAudioObjects1 });gdjs.Tutorial1_58_32WelcomeCode.eventsList4 = function (runtimeScene) {

    {

        gdjs.copyArray(runtimeScene.getObjects("Audio"), gdjs.Tutorial1_58_32WelcomeCode.GDAudioObjects2);

        gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Tutorial1_58_32WelcomeCode.mapOfGDgdjs_46Tutorial1_9558_9532WelcomeCode_46GDAudioObjects2Objects, runtimeScene, true, false);
        }if (gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.Tutorial1_58_32WelcomeCode.GDAudioObjects2 */
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.Tutorial1_58_32WelcomeCode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.Tutorial1_58_32WelcomeCode.GDAudioObjects2.length; i < len; ++i) {
                    gdjs.Tutorial1_58_32WelcomeCode.GDAudioObjects2[i].setAnimation(1);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.Tutorial1_58_32WelcomeCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.Tutorial1_58_32WelcomeCode.GDpointerObjects2[i].hide(false);
                }
            }
            {
                //Subevents
                gdjs.Tutorial1_58_32WelcomeCode.eventsList1(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("MainMenu1"), gdjs.Tutorial1_58_32WelcomeCode.GDMainMenu1Objects2);

        gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Tutorial1_58_32WelcomeCode.mapOfGDgdjs_46Tutorial1_9558_9532WelcomeCode_46GDMainMenu1Objects2Objects, runtimeScene, true, false);
        }if (gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.Tutorial1_58_32WelcomeCode.GDMainMenu1Objects2 */
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.Tutorial1_58_32WelcomeCode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.Tutorial1_58_32WelcomeCode.GDMainMenu1Objects2.length; i < len; ++i) {
                    gdjs.Tutorial1_58_32WelcomeCode.GDMainMenu1Objects2[i].setAnimation(1);
                }
            }{
                for (var i = 0, len = gdjs.Tutorial1_58_32WelcomeCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.Tutorial1_58_32WelcomeCode.GDpointerObjects2[i].hide(false);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }
            {
                //Subevents
                gdjs.Tutorial1_58_32WelcomeCode.eventsList2(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Start1"), gdjs.Tutorial1_58_32WelcomeCode.GDStart1Objects2);

        gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Tutorial1_58_32WelcomeCode.mapOfGDgdjs_46Tutorial1_9558_9532WelcomeCode_46GDStart1Objects2Objects, runtimeScene, true, false);
        }if (gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.Tutorial1_58_32WelcomeCode.GDStart1Objects2 */
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.Tutorial1_58_32WelcomeCode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.Tutorial1_58_32WelcomeCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.Tutorial1_58_32WelcomeCode.GDpointerObjects2[i].hide(false);
                }
            }{
                for (var i = 0, len = gdjs.Tutorial1_58_32WelcomeCode.GDStart1Objects2.length; i < len; ++i) {
                    gdjs.Tutorial1_58_32WelcomeCode.GDStart1Objects2[i].setAnimation(1);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }
            {
                //Subevents
                gdjs.Tutorial1_58_32WelcomeCode.eventsList3(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Audio"), gdjs.Tutorial1_58_32WelcomeCode.GDAudioObjects2);

        gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Tutorial1_58_32WelcomeCode.mapOfGDgdjs_46Tutorial1_9558_9532WelcomeCode_46GDAudioObjects2Objects, runtimeScene, true, true);
        }if (gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.Tutorial1_58_32WelcomeCode.GDAudioObjects2 */
            {
                for (var i = 0, len = gdjs.Tutorial1_58_32WelcomeCode.GDAudioObjects2.length; i < len; ++i) {
                    gdjs.Tutorial1_58_32WelcomeCode.GDAudioObjects2[i].setAnimation(0);
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("MainMenu1"), gdjs.Tutorial1_58_32WelcomeCode.GDMainMenu1Objects2);

        gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Tutorial1_58_32WelcomeCode.mapOfGDgdjs_46Tutorial1_9558_9532WelcomeCode_46GDMainMenu1Objects2Objects, runtimeScene, true, true);
        }if (gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.Tutorial1_58_32WelcomeCode.GDMainMenu1Objects2 */
            {
                for (var i = 0, len = gdjs.Tutorial1_58_32WelcomeCode.GDMainMenu1Objects2.length; i < len; ++i) {
                    gdjs.Tutorial1_58_32WelcomeCode.GDMainMenu1Objects2[i].setAnimation(0);
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Start1"), gdjs.Tutorial1_58_32WelcomeCode.GDStart1Objects2);

        gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Tutorial1_58_32WelcomeCode.mapOfGDgdjs_46Tutorial1_9558_9532WelcomeCode_46GDStart1Objects2Objects, runtimeScene, true, true);
        }if (gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.Tutorial1_58_32WelcomeCode.GDStart1Objects2 */
            {
                for (var i = 0, len = gdjs.Tutorial1_58_32WelcomeCode.GDStart1Objects2.length; i < len; ++i) {
                    gdjs.Tutorial1_58_32WelcomeCode.GDStart1Objects2[i].setAnimation(0);
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Audio"), gdjs.Tutorial1_58_32WelcomeCode.GDAudioObjects1);
        gdjs.copyArray(runtimeScene.getObjects("MainMenu1"), gdjs.Tutorial1_58_32WelcomeCode.GDMainMenu1Objects1);
        gdjs.copyArray(runtimeScene.getObjects("Start1"), gdjs.Tutorial1_58_32WelcomeCode.GDStart1Objects1);

        gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = false;
        gdjs.Tutorial1_58_32WelcomeCode.condition1IsTrue_0.val = false;
        gdjs.Tutorial1_58_32WelcomeCode.condition2IsTrue_0.val = false;
        {
            gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Tutorial1_58_32WelcomeCode.mapOfGDgdjs_46Tutorial1_9558_9532WelcomeCode_46GDMainMenu1Objects1Objects, runtimeScene, true, true);
        }if (gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val) {
            {
                gdjs.Tutorial1_58_32WelcomeCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Tutorial1_58_32WelcomeCode.mapOfGDgdjs_46Tutorial1_9558_9532WelcomeCode_46GDStart1Objects1Objects, runtimeScene, true, true);
            }if (gdjs.Tutorial1_58_32WelcomeCode.condition1IsTrue_0.val) {
                {
                    gdjs.Tutorial1_58_32WelcomeCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Tutorial1_58_32WelcomeCode.mapOfGDgdjs_46Tutorial1_9558_9532WelcomeCode_46GDAudioObjects1Objects, runtimeScene, true, true);
                }
            }
        }
        if (gdjs.Tutorial1_58_32WelcomeCode.condition2IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.Tutorial1_58_32WelcomeCode.GDpointerObjects1);
            {
                gdjs.evtTools.input.showCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.Tutorial1_58_32WelcomeCode.GDpointerObjects1.length; i < len; ++i) {
                    gdjs.Tutorial1_58_32WelcomeCode.GDpointerObjects1[i].hide();
                }
            }
        }
    }
};gdjs.Tutorial1_58_32WelcomeCode.eventsList5 = function (runtimeScene) {

    {

        gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.Tutorial1_58_32WelcomeCode.GDpointerObjects1);
            {
                gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
            }{
                for (var i = 0, len = gdjs.Tutorial1_58_32WelcomeCode.GDpointerObjects1.length; i < len; ++i) {
                    gdjs.Tutorial1_58_32WelcomeCode.GDpointerObjects1[i].deleteFromScene(runtimeScene);
                }
            }
        }
    }
};gdjs.Tutorial1_58_32WelcomeCode.eventsList6 = function (runtimeScene) {

    {

        gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        }if (gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
            }
            {
                //Subevents
                gdjs.Tutorial1_58_32WelcomeCode.eventsList5(runtimeScene);
            } //End of subevents
        }
    }
};gdjs.Tutorial1_58_32WelcomeCode.eventsList7 = function (runtimeScene) {

    {

        gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
        }if (gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, 0);
            }
        }
    }

    {

        gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 25;
        }if (gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, 25);
            }
        }
    }

    {

        gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 50;
        }if (gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, 50);
            }
        }
    }

    {

        gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 75;
        }if (gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, 75);
            }
        }
    }

    {

        gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 100;
        }if (gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, 100);
            }
        }
    }

    {

        gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
        }if (gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 0);
            }
        }
    }

    {

        gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 25;
        }if (gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 25);
            }
        }
    }

    {

        gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 50;
        }if (gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 50);
            }
        }
    }

    {

        gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 75;
        }if (gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 75);
            }
        }
    }

    {

        gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 100;
        }if (gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 100);
            }
        }
    }
};gdjs.Tutorial1_58_32WelcomeCode.eventsList8 = function (runtimeScene) {

    {

        gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        }if (gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 3);
            }
        }
    }

    {

        gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = false;
        gdjs.Tutorial1_58_32WelcomeCode.condition1IsTrue_0.val = false;
        {
            gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        }if (gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_0.val) {
            {
                {
                    gdjs.Tutorial1_58_32WelcomeCode.conditionTrue_1 = gdjs.Tutorial1_58_32WelcomeCode.condition1IsTrue_0;
                    gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_1.val = false;
                    {
                        gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_1.val = gdjs.evtTools.sound.isMusicOnChannelPaused(runtimeScene, 1);
                    }gdjs.Tutorial1_58_32WelcomeCode.conditionTrue_1.val = true && gdjs.Tutorial1_58_32WelcomeCode.condition0IsTrue_1.val;
                }
            }
        }
        if (gdjs.Tutorial1_58_32WelcomeCode.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
            }
        }
    }

    {

        {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.Tutorial1_58_32WelcomeCode.GDpointerObjects1);
            {
                for (var i = 0, len = gdjs.Tutorial1_58_32WelcomeCode.GDpointerObjects1.length; i < len; ++i) {
                    gdjs.Tutorial1_58_32WelcomeCode.GDpointerObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
                }
            }
        }
    }

    {

        gdjs.Tutorial1_58_32WelcomeCode.eventsList0(runtimeScene);
    }

    {

        gdjs.Tutorial1_58_32WelcomeCode.eventsList4(runtimeScene);
    }

    {

        gdjs.Tutorial1_58_32WelcomeCode.eventsList6(runtimeScene);
    }

    {

        gdjs.Tutorial1_58_32WelcomeCode.eventsList7(runtimeScene);
    }
};

gdjs.Tutorial1_58_32WelcomeCode.func = function (runtimeScene) {
    runtimeScene.getOnceTriggers().startNewFrame();

    gdjs.Tutorial1_58_32WelcomeCode.GDCityObjects1.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDCityObjects2.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDCityObjects3.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDCityObjects4.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDplayerObjects1.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDplayerObjects2.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDplayerObjects3.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDplayerObjects4.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDMainMenu1Objects1.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDMainMenu1Objects2.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDMainMenu1Objects3.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDMainMenu1Objects4.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDTutorialBoxObjects1.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDTutorialBoxObjects2.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDTutorialBoxObjects3.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDTutorialBoxObjects4.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDStart1Objects1.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDStart1Objects2.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDStart1Objects3.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDStart1Objects4.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDpointerObjects1.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDpointerObjects2.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDpointerObjects3.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDpointerObjects4.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDboundaryObjects1.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDboundaryObjects2.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDboundaryObjects3.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDboundaryObjects4.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDTutorialStartTextObjects1.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDTutorialStartTextObjects2.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDTutorialStartTextObjects3.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDTutorialStartTextObjects4.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDorObjects1.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDorObjects2.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDorObjects3.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDorObjects4.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDControlPanelObjects1.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDControlPanelObjects2.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDControlPanelObjects3.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDControlPanelObjects4.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDAudioObjects1.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDAudioObjects2.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDAudioObjects3.length = 0;
    gdjs.Tutorial1_58_32WelcomeCode.GDAudioObjects4.length = 0;

    gdjs.Tutorial1_58_32WelcomeCode.eventsList8(runtimeScene);
    return;
};

gdjs['Tutorial1_58_32WelcomeCode'] = gdjs.Tutorial1_58_32WelcomeCode;