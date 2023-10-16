"use strict";

gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode = {};
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDCityObjects1 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDCityObjects2 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDCityObjects3 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDCityObjects4 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDMainMenu1Objects1 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDMainMenu1Objects2 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDMainMenu1Objects3 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDMainMenu1Objects4 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDTutorialBoxObjects1 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDTutorialBoxObjects2 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDTutorialBoxObjects3 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDTutorialBoxObjects4 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDReturnObjects1 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDReturnObjects2 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDReturnObjects3 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDReturnObjects4 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDpointerObjects1 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDpointerObjects2 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDpointerObjects3 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDpointerObjects4 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDboundaryObjects1 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDboundaryObjects2 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDboundaryObjects3 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDboundaryObjects4 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDWhatIsPIITextObjects1 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDWhatIsPIITextObjects2 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDWhatIsPIITextObjects3 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDWhatIsPIITextObjects4 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDDocmentsPanelObjects1 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDDocmentsPanelObjects2 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDDocmentsPanelObjects3 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDDocmentsPanelObjects4 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDAudioObjects1 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDAudioObjects2 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDAudioObjects3 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDAudioObjects4 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDDisclaimerObjects1 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDDisclaimerObjects2 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDDisclaimerObjects3 = [];
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDDisclaimerObjects4 = [];

gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.conditionTrue_0 = { val: false };
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0 = { val: false };
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition1IsTrue_0 = { val: false };
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition2IsTrue_0 = { val: false };
gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition3IsTrue_0 = { val: false };

gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.eventsList0 = function (runtimeScene) {

    {

        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        }if (gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("Disclaimer"), gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDDisclaimerObjects1);
            gdjs.copyArray(runtimeScene.getObjects("DocmentsPanel"), gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDDocmentsPanelObjects1);
            gdjs.copyArray(runtimeScene.getObjects("Return"), gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDReturnObjects1);
            gdjs.copyArray(runtimeScene.getObjects("TutorialBox"), gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDTutorialBoxObjects1);
            gdjs.copyArray(runtimeScene.getObjects("WhatIsPIIText"), gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDWhatIsPIITextObjects1);
            {
                for (var i = 0, len = gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDTutorialBoxObjects1.length; i < len; ++i) {
                    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDTutorialBoxObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDTutorialBoxObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDReturnObjects1.length; i < len; ++i) {
                    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDReturnObjects1[i].setX((gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDTutorialBoxObjects1.length === 0 ? 0 : gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDTutorialBoxObjects1[0].getPointX("tutorialbox")) + 730);
                }
            }{
                for (var i = 0, len = gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDDocmentsPanelObjects1.length; i < len; ++i) {
                    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDDocmentsPanelObjects1[i].setX((gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDTutorialBoxObjects1.length === 0 ? 0 : gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDTutorialBoxObjects1[0].getPointX("tutorialbox")) + 335);
                }
            }{
                for (var i = 0, len = gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDWhatIsPIITextObjects1.length; i < len; ++i) {
                    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDWhatIsPIITextObjects1[i].setX((gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDTutorialBoxObjects1.length === 0 ? 0 : gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDTutorialBoxObjects1[0].getPointX("tutorialbox")) + 40);
                }
            }{
                for (var i = 0, len = gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDDisclaimerObjects1.length; i < len; ++i) {
                    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDDisclaimerObjects1[i].setX((gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDTutorialBoxObjects1.length === 0 ? 0 : gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDTutorialBoxObjects1[0].getPointX("tutorialbox")) + 40);
                }
            }
        }
    }
};gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.mapOfGDgdjs_46Tutorial4_95465b_9558_9532_9563_9532What_9532is_9532PIICode_46GDAudioObjects2Objects = Hashtable.newFrom({ "Audio": gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDAudioObjects2 });gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.eventsList1 = function (runtimeScene) {

    {

        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = false;
        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition1IsTrue_0.val = false;
        {
            gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val) {
            {
                gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Settings");
            }
        }
    }

    {

        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Settings");
            }
        }
    }
};gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.eventsList2 = function (runtimeScene) {

    {

        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getVariables().get("ButtonsClickable"), true);
        }if (gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val) {

            {
                //Subevents
                gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.eventsList1(runtimeScene);
            } //End of subevents
        }
    }
};gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.mapOfGDgdjs_46Tutorial4_95465b_9558_9532_9563_9532What_9532is_9532PIICode_46GDMainMenu1Objects2Objects = Hashtable.newFrom({ "MainMenu1": gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDMainMenu1Objects2 });gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.eventsList3 = function (runtimeScene) {

    {

        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = false;
        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition1IsTrue_0.val = false;
        {
            gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val) {
            {
                gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
            }
        }
    }

    {

        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
            }
        }
    }
};gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.eventsList4 = function (runtimeScene) {

    {

        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getVariables().get("ButtonsClickable"), true);
        }if (gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val) {

            {
                //Subevents
                gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.eventsList3(runtimeScene);
            } //End of subevents
        }
    }
};gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.mapOfGDgdjs_46Tutorial4_95465b_9558_9532_9563_9532What_9532is_9532PIICode_46GDReturnObjects2Objects = Hashtable.newFrom({ "Return": gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDReturnObjects2 });gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.eventsList5 = function (runtimeScene) {

    {

        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val) {
            gdjs.copyArray(gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDpointerObjects2, gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDpointerObjects3);

            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 10, 1);
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tutorial5: Touch the PII Retry", false);
            }{
                for (var i = 0, len = gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDpointerObjects3.length; i < len; ++i) {
                    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDpointerObjects3[i].hide();
                }
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }
        }
    }

    {

        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = false;
        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition1IsTrue_0.val = false;
        {
            gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val) {
            {
                gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 10, 1);
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tutorial5: Touch the PII Retry", false);
            }
        }
    }
};gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.eventsList6 = function (runtimeScene) {

    {

        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getVariables().get("ButtonsClickable"), true);
        }if (gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val) {

            {
                //Subevents
                gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.eventsList5(runtimeScene);
            } //End of subevents
        }
    }
};gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.mapOfGDgdjs_46Tutorial4_95465b_9558_9532_9563_9532What_9532is_9532PIICode_46GDMainMenu1Objects2Objects = Hashtable.newFrom({ "MainMenu1": gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDMainMenu1Objects2 });gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.mapOfGDgdjs_46Tutorial4_95465b_9558_9532_9563_9532What_9532is_9532PIICode_46GDReturnObjects2Objects = Hashtable.newFrom({ "Return": gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDReturnObjects2 });gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.mapOfGDgdjs_46Tutorial4_95465b_9558_9532_9563_9532What_9532is_9532PIICode_46GDAudioObjects2Objects = Hashtable.newFrom({ "Audio": gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDAudioObjects2 });gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.mapOfGDgdjs_46Tutorial4_95465b_9558_9532_9563_9532What_9532is_9532PIICode_46GDReturnObjects2Objects = Hashtable.newFrom({ "Return": gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDReturnObjects2 });gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.mapOfGDgdjs_46Tutorial4_95465b_9558_9532_9563_9532What_9532is_9532PIICode_46GDMainMenu1Objects2Objects = Hashtable.newFrom({ "MainMenu1": gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDMainMenu1Objects2 });gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.mapOfGDgdjs_46Tutorial4_95465b_9558_9532_9563_9532What_9532is_9532PIICode_46GDAudioObjects1Objects = Hashtable.newFrom({ "Audio": gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDAudioObjects1 });gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.eventsList7 = function (runtimeScene) {

    {

        gdjs.copyArray(runtimeScene.getObjects("Audio"), gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDAudioObjects2);

        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.mapOfGDgdjs_46Tutorial4_95465b_9558_9532_9563_9532What_9532is_9532PIICode_46GDAudioObjects2Objects, runtimeScene, true, false);
        }if (gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val) {
            /* Reuse gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDAudioObjects2 */
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDAudioObjects2.length; i < len; ++i) {
                    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDAudioObjects2[i].setAnimation(1);
                }
            }{
                for (var i = 0, len = gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDpointerObjects2[i].hide(false);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }
            {
                //Subevents
                gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.eventsList2(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("MainMenu1"), gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDMainMenu1Objects2);

        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.mapOfGDgdjs_46Tutorial4_95465b_9558_9532_9563_9532What_9532is_9532PIICode_46GDMainMenu1Objects2Objects, runtimeScene, true, false);
        }if (gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val) {
            /* Reuse gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDMainMenu1Objects2 */
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDMainMenu1Objects2.length; i < len; ++i) {
                    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDMainMenu1Objects2[i].setAnimation(1);
                }
            }{
                for (var i = 0, len = gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDpointerObjects2[i].hide(false);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }
            {
                //Subevents
                gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.eventsList4(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Return"), gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDReturnObjects2);

        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.mapOfGDgdjs_46Tutorial4_95465b_9558_9532_9563_9532What_9532is_9532PIICode_46GDReturnObjects2Objects, runtimeScene, true, false);
        }if (gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val) {
            /* Reuse gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDReturnObjects2 */
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDReturnObjects2.length; i < len; ++i) {
                    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDReturnObjects2[i].setAnimation(1);
                }
            }{
                for (var i = 0, len = gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDpointerObjects2[i].hide(false);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }
            {
                //Subevents
                gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.eventsList6(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Audio"), gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDAudioObjects2);
        gdjs.copyArray(runtimeScene.getObjects("MainMenu1"), gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDMainMenu1Objects2);
        gdjs.copyArray(runtimeScene.getObjects("Return"), gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDReturnObjects2);

        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = false;
        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition1IsTrue_0.val = false;
        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition2IsTrue_0.val = false;
        {
            gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.mapOfGDgdjs_46Tutorial4_95465b_9558_9532_9563_9532What_9532is_9532PIICode_46GDMainMenu1Objects2Objects, runtimeScene, true, true);
        }if (gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val) {
            {
                gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.mapOfGDgdjs_46Tutorial4_95465b_9558_9532_9563_9532What_9532is_9532PIICode_46GDReturnObjects2Objects, runtimeScene, true, true);
            }if (gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition1IsTrue_0.val) {
                {
                    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.mapOfGDgdjs_46Tutorial4_95465b_9558_9532_9563_9532What_9532is_9532PIICode_46GDAudioObjects2Objects, runtimeScene, true, true);
                }
            }
        }
        if (gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition2IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDpointerObjects2);
            {
                gdjs.evtTools.input.showCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDpointerObjects2[i].hide();
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Return"), gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDReturnObjects2);

        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.mapOfGDgdjs_46Tutorial4_95465b_9558_9532_9563_9532What_9532is_9532PIICode_46GDReturnObjects2Objects, runtimeScene, true, true);
        }if (gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val) {
            /* Reuse gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDReturnObjects2 */
            {
                for (var i = 0, len = gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDReturnObjects2.length; i < len; ++i) {
                    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDReturnObjects2[i].setAnimation(0);
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("MainMenu1"), gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDMainMenu1Objects2);

        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.mapOfGDgdjs_46Tutorial4_95465b_9558_9532_9563_9532What_9532is_9532PIICode_46GDMainMenu1Objects2Objects, runtimeScene, true, true);
        }if (gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val) {
            /* Reuse gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDMainMenu1Objects2 */
            {
                for (var i = 0, len = gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDMainMenu1Objects2.length; i < len; ++i) {
                    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDMainMenu1Objects2[i].setAnimation(0);
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Audio"), gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDAudioObjects1);

        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.mapOfGDgdjs_46Tutorial4_95465b_9558_9532_9563_9532What_9532is_9532PIICode_46GDAudioObjects1Objects, runtimeScene, true, true);
        }if (gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val) {
            /* Reuse gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDAudioObjects1 */
            {
                for (var i = 0, len = gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDAudioObjects1.length; i < len; ++i) {
                    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDAudioObjects1[i].setAnimation(0);
                }
            }
        }
    }
};gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.eventsList8 = function (runtimeScene) {

    {

        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
        }if (gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, 0);
            }
        }
    }

    {

        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 25;
        }if (gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, 25);
            }
        }
    }

    {

        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 50;
        }if (gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, 50);
            }
        }
    }

    {

        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 75;
        }if (gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, 75);
            }
        }
    }

    {

        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 100;
        }if (gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, 100);
            }
        }
    }

    {

        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
        }if (gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 0);
            }
        }
    }

    {

        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 25;
        }if (gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 25);
            }
        }
    }

    {

        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 50;
        }if (gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 50);
            }
        }
    }

    {

        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 75;
        }if (gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 75);
            }
        }
    }

    {

        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 100;
        }if (gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 100);
            }
        }
    }
};gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.eventsList9 = function (runtimeScene) {

    {

        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
            }
        }
    }
};gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.eventsList10 = function (runtimeScene) {

    {

        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        }if (gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val) {

            {
                //Subevents
                gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.eventsList9(runtimeScene);
            } //End of subevents
        }
    }
};gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.eventsList11 = function (runtimeScene) {

    {

        {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDpointerObjects1);
            {
                for (var i = 0, len = gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDpointerObjects1.length; i < len; ++i) {
                    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDpointerObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
                }
            }
        }
    }

    {

        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "buttonsClickable");
        }if (gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.common.setVariableBoolean(runtimeScene.getVariables().get("ButtonsClickable"), true);
            }
        }
    }

    {

        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.eventsList0(runtimeScene);
    }

    {

        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.eventsList7(runtimeScene);
    }

    {

        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.eventsList8(runtimeScene);
    }

    {

        gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.eventsList10(runtimeScene);
    }
};

gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.func = function (runtimeScene) {
    runtimeScene.getOnceTriggers().startNewFrame();

    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDCityObjects1.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDCityObjects2.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDCityObjects3.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDCityObjects4.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDMainMenu1Objects1.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDMainMenu1Objects2.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDMainMenu1Objects3.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDMainMenu1Objects4.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDTutorialBoxObjects1.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDTutorialBoxObjects2.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDTutorialBoxObjects3.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDTutorialBoxObjects4.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDReturnObjects1.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDReturnObjects2.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDReturnObjects3.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDReturnObjects4.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDpointerObjects1.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDpointerObjects2.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDpointerObjects3.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDpointerObjects4.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDboundaryObjects1.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDboundaryObjects2.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDboundaryObjects3.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDboundaryObjects4.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDWhatIsPIITextObjects1.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDWhatIsPIITextObjects2.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDWhatIsPIITextObjects3.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDWhatIsPIITextObjects4.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDDocmentsPanelObjects1.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDDocmentsPanelObjects2.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDDocmentsPanelObjects3.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDDocmentsPanelObjects4.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDAudioObjects1.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDAudioObjects2.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDAudioObjects3.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDAudioObjects4.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDDisclaimerObjects1.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDDisclaimerObjects2.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDDisclaimerObjects3.length = 0;
    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.GDDisclaimerObjects4.length = 0;

    gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode.eventsList11(runtimeScene);
    return;
};

gdjs['Tutorial4_465b_58_32_63_32What_32is_32PIICode'] = gdjs.Tutorial4_465b_58_32_63_32What_32is_32PIICode;