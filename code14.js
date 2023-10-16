"use strict";

gdjs.Tutorial6_58_32Tutorial_32EndCode = {};
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDCityObjects1 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDCityObjects2 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDCityObjects3 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDCityObjects4 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDTutorialBoxObjects1 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDTutorialBoxObjects2 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDTutorialBoxObjects3 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDTutorialBoxObjects4 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDFinishObjects1 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDFinishObjects2 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDFinishObjects3 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDFinishObjects4 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDpointerObjects1 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDpointerObjects2 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDpointerObjects3 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDpointerObjects4 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDboundaryObjects1 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDboundaryObjects2 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDboundaryObjects3 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDboundaryObjects4 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDTutorialEndText2Objects1 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDTutorialEndText2Objects2 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDTutorialEndText2Objects3 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDTutorialEndText2Objects4 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDinfectedfiletextObjects1 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDinfectedfiletextObjects2 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDinfectedfiletextObjects3 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDinfectedfiletextObjects4 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDminusoneObjects1 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDminusoneObjects2 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDminusoneObjects3 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDminusoneObjects4 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDhealthObjects1 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDhealthObjects2 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDhealthObjects3 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDhealthObjects4 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDInfectedFilePanelObjects1 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDInfectedFilePanelObjects2 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDInfectedFilePanelObjects3 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDInfectedFilePanelObjects4 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDwatchoutObjects1 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDwatchoutObjects2 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDwatchoutObjects3 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDwatchoutObjects4 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDAudioObjects1 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDAudioObjects2 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDAudioObjects3 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDAudioObjects4 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDLoseLivesObjects1 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDLoseLivesObjects2 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDLoseLivesObjects3 = [];
gdjs.Tutorial6_58_32Tutorial_32EndCode.GDLoseLivesObjects4 = [];

gdjs.Tutorial6_58_32Tutorial_32EndCode.conditionTrue_0 = { val: false };
gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0 = { val: false };
gdjs.Tutorial6_58_32Tutorial_32EndCode.condition1IsTrue_0 = { val: false };
gdjs.Tutorial6_58_32Tutorial_32EndCode.condition2IsTrue_0 = { val: false };

gdjs.Tutorial6_58_32Tutorial_32EndCode.eventsList0 = function (runtimeScene) {

    {

        {
            gdjs.copyArray(runtimeScene.getObjects("Finish"), gdjs.Tutorial6_58_32Tutorial_32EndCode.GDFinishObjects1);
            gdjs.copyArray(runtimeScene.getObjects("InfectedFilePanel"), gdjs.Tutorial6_58_32Tutorial_32EndCode.GDInfectedFilePanelObjects1);
            gdjs.copyArray(runtimeScene.getObjects("LoseLives"), gdjs.Tutorial6_58_32Tutorial_32EndCode.GDLoseLivesObjects1);
            gdjs.copyArray(runtimeScene.getObjects("TutorialBox"), gdjs.Tutorial6_58_32Tutorial_32EndCode.GDTutorialBoxObjects1);
            gdjs.copyArray(runtimeScene.getObjects("TutorialEndText2"), gdjs.Tutorial6_58_32Tutorial_32EndCode.GDTutorialEndText2Objects1);
            gdjs.copyArray(runtimeScene.getObjects("health"), gdjs.Tutorial6_58_32Tutorial_32EndCode.GDhealthObjects1);
            gdjs.copyArray(runtimeScene.getObjects("infectedfiletext"), gdjs.Tutorial6_58_32Tutorial_32EndCode.GDinfectedfiletextObjects1);
            gdjs.copyArray(runtimeScene.getObjects("minusone"), gdjs.Tutorial6_58_32Tutorial_32EndCode.GDminusoneObjects1);
            gdjs.copyArray(runtimeScene.getObjects("watchout"), gdjs.Tutorial6_58_32Tutorial_32EndCode.GDwatchoutObjects1);
            {
                for (var i = 0, len = gdjs.Tutorial6_58_32Tutorial_32EndCode.GDTutorialBoxObjects1.length; i < len; ++i) {
                    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDTutorialBoxObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.Tutorial6_58_32Tutorial_32EndCode.GDTutorialBoxObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.Tutorial6_58_32Tutorial_32EndCode.GDFinishObjects1.length; i < len; ++i) {
                    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDFinishObjects1[i].setX((gdjs.Tutorial6_58_32Tutorial_32EndCode.GDTutorialBoxObjects1.length === 0 ? 0 : gdjs.Tutorial6_58_32Tutorial_32EndCode.GDTutorialBoxObjects1[0].getPointX("tutorialbox")) + 680);
                }
            }{
                for (var i = 0, len = gdjs.Tutorial6_58_32Tutorial_32EndCode.GDinfectedfiletextObjects1.length; i < len; ++i) {
                    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDinfectedfiletextObjects1[i].setX((gdjs.Tutorial6_58_32Tutorial_32EndCode.GDTutorialBoxObjects1.length === 0 ? 0 : gdjs.Tutorial6_58_32Tutorial_32EndCode.GDTutorialBoxObjects1[0].getPointX("tutorialbox")) + 280);
                }
            }{
                for (var i = 0, len = gdjs.Tutorial6_58_32Tutorial_32EndCode.GDminusoneObjects1.length; i < len; ++i) {
                    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDminusoneObjects1[i].setX((gdjs.Tutorial6_58_32Tutorial_32EndCode.GDTutorialBoxObjects1.length === 0 ? 0 : gdjs.Tutorial6_58_32Tutorial_32EndCode.GDTutorialBoxObjects1[0].getPointX("tutorialbox")) + 410);
                }
            }{
                for (var i = 0, len = gdjs.Tutorial6_58_32Tutorial_32EndCode.GDTutorialEndText2Objects1.length; i < len; ++i) {
                    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDTutorialEndText2Objects1[i].setX((gdjs.Tutorial6_58_32Tutorial_32EndCode.GDTutorialBoxObjects1.length === 0 ? 0 : gdjs.Tutorial6_58_32Tutorial_32EndCode.GDTutorialBoxObjects1[0].getPointX("tutorialbox")) + 50);
                }
            }{
                for (var i = 0, len = gdjs.Tutorial6_58_32Tutorial_32EndCode.GDhealthObjects1.length; i < len; ++i) {
                    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDhealthObjects1[i].setX((gdjs.Tutorial6_58_32Tutorial_32EndCode.GDTutorialBoxObjects1.length === 0 ? 0 : gdjs.Tutorial6_58_32Tutorial_32EndCode.GDTutorialBoxObjects1[0].getPointX("tutorialbox")) + 520);
                }
            }{
                for (var i = 0, len = gdjs.Tutorial6_58_32Tutorial_32EndCode.GDInfectedFilePanelObjects1.length; i < len; ++i) {
                    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDInfectedFilePanelObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.Tutorial6_58_32Tutorial_32EndCode.GDInfectedFilePanelObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.Tutorial6_58_32Tutorial_32EndCode.GDwatchoutObjects1.length; i < len; ++i) {
                    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDwatchoutObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.Tutorial6_58_32Tutorial_32EndCode.GDwatchoutObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.Tutorial6_58_32Tutorial_32EndCode.GDLoseLivesObjects1.length; i < len; ++i) {
                    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDLoseLivesObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.Tutorial6_58_32Tutorial_32EndCode.GDLoseLivesObjects1[i].getWidth() / 2);
                }
            }
        }
    }
};gdjs.Tutorial6_58_32Tutorial_32EndCode.mapOfGDgdjs_46Tutorial6_9558_9532Tutorial_9532EndCode_46GDAudioObjects2Objects = Hashtable.newFrom({ "Audio": gdjs.Tutorial6_58_32Tutorial_32EndCode.GDAudioObjects2 });gdjs.Tutorial6_58_32Tutorial_32EndCode.eventsList1 = function (runtimeScene) {

    {

        gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Settings");
            }
        }
    }

    {

        gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = false;
        gdjs.Tutorial6_58_32Tutorial_32EndCode.condition1IsTrue_0.val = false;
        {
            gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val) {
            {
                gdjs.Tutorial6_58_32Tutorial_32EndCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.Tutorial6_58_32Tutorial_32EndCode.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Settings");
            }
        }
    }
};gdjs.Tutorial6_58_32Tutorial_32EndCode.mapOfGDgdjs_46Tutorial6_9558_9532Tutorial_9532EndCode_46GDFinishObjects2Objects = Hashtable.newFrom({ "Finish": gdjs.Tutorial6_58_32Tutorial_32EndCode.GDFinishObjects2 });gdjs.Tutorial6_58_32Tutorial_32EndCode.eventsList2 = function (runtimeScene) {

    {

        gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val) {
            gdjs.copyArray(gdjs.Tutorial6_58_32Tutorial_32EndCode.GDpointerObjects2, gdjs.Tutorial6_58_32Tutorial_32EndCode.GDpointerObjects3);

            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
            }{
                for (var i = 0, len = gdjs.Tutorial6_58_32Tutorial_32EndCode.GDpointerObjects3.length; i < len; ++i) {
                    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDpointerObjects3[i].hide();
                }
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }
        }
    }

    {

        gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = false;
        gdjs.Tutorial6_58_32Tutorial_32EndCode.condition1IsTrue_0.val = false;
        {
            gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val) {
            {
                gdjs.Tutorial6_58_32Tutorial_32EndCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.Tutorial6_58_32Tutorial_32EndCode.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
            }
        }
    }
};gdjs.Tutorial6_58_32Tutorial_32EndCode.mapOfGDgdjs_46Tutorial6_9558_9532Tutorial_9532EndCode_46GDAudioObjects2Objects = Hashtable.newFrom({ "Audio": gdjs.Tutorial6_58_32Tutorial_32EndCode.GDAudioObjects2 });gdjs.Tutorial6_58_32Tutorial_32EndCode.mapOfGDgdjs_46Tutorial6_9558_9532Tutorial_9532EndCode_46GDFinishObjects2Objects = Hashtable.newFrom({ "Finish": gdjs.Tutorial6_58_32Tutorial_32EndCode.GDFinishObjects2 });gdjs.Tutorial6_58_32Tutorial_32EndCode.mapOfGDgdjs_46Tutorial6_9558_9532Tutorial_9532EndCode_46GDFinishObjects1Objects = Hashtable.newFrom({ "Finish": gdjs.Tutorial6_58_32Tutorial_32EndCode.GDFinishObjects1 });gdjs.Tutorial6_58_32Tutorial_32EndCode.mapOfGDgdjs_46Tutorial6_9558_9532Tutorial_9532EndCode_46GDAudioObjects1Objects = Hashtable.newFrom({ "Audio": gdjs.Tutorial6_58_32Tutorial_32EndCode.GDAudioObjects1 });gdjs.Tutorial6_58_32Tutorial_32EndCode.eventsList3 = function (runtimeScene) {

    {

        gdjs.copyArray(runtimeScene.getObjects("Audio"), gdjs.Tutorial6_58_32Tutorial_32EndCode.GDAudioObjects2);

        gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Tutorial6_58_32Tutorial_32EndCode.mapOfGDgdjs_46Tutorial6_9558_9532Tutorial_9532EndCode_46GDAudioObjects2Objects, runtimeScene, true, false);
        }if (gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.Tutorial6_58_32Tutorial_32EndCode.GDAudioObjects2 */
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.Tutorial6_58_32Tutorial_32EndCode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.Tutorial6_58_32Tutorial_32EndCode.GDAudioObjects2.length; i < len; ++i) {
                    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDAudioObjects2[i].setAnimation(1);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.Tutorial6_58_32Tutorial_32EndCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDpointerObjects2[i].hide(false);
                }
            }
            {
                //Subevents
                gdjs.Tutorial6_58_32Tutorial_32EndCode.eventsList1(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Finish"), gdjs.Tutorial6_58_32Tutorial_32EndCode.GDFinishObjects2);

        gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Tutorial6_58_32Tutorial_32EndCode.mapOfGDgdjs_46Tutorial6_9558_9532Tutorial_9532EndCode_46GDFinishObjects2Objects, runtimeScene, true, false);
        }if (gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.Tutorial6_58_32Tutorial_32EndCode.GDFinishObjects2 */
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.Tutorial6_58_32Tutorial_32EndCode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.Tutorial6_58_32Tutorial_32EndCode.GDFinishObjects2.length; i < len; ++i) {
                    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDFinishObjects2[i].setAnimation(1);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.Tutorial6_58_32Tutorial_32EndCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDpointerObjects2[i].hide(false);
                }
            }
            {
                //Subevents
                gdjs.Tutorial6_58_32Tutorial_32EndCode.eventsList2(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Audio"), gdjs.Tutorial6_58_32Tutorial_32EndCode.GDAudioObjects2);

        gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Tutorial6_58_32Tutorial_32EndCode.mapOfGDgdjs_46Tutorial6_9558_9532Tutorial_9532EndCode_46GDAudioObjects2Objects, runtimeScene, true, true);
        }if (gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.Tutorial6_58_32Tutorial_32EndCode.GDAudioObjects2 */
            {
                for (var i = 0, len = gdjs.Tutorial6_58_32Tutorial_32EndCode.GDAudioObjects2.length; i < len; ++i) {
                    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDAudioObjects2[i].setAnimation(0);
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Finish"), gdjs.Tutorial6_58_32Tutorial_32EndCode.GDFinishObjects2);

        gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Tutorial6_58_32Tutorial_32EndCode.mapOfGDgdjs_46Tutorial6_9558_9532Tutorial_9532EndCode_46GDFinishObjects2Objects, runtimeScene, true, true);
        }if (gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.Tutorial6_58_32Tutorial_32EndCode.GDFinishObjects2 */
            {
                for (var i = 0, len = gdjs.Tutorial6_58_32Tutorial_32EndCode.GDFinishObjects2.length; i < len; ++i) {
                    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDFinishObjects2[i].setAnimation(0);
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Audio"), gdjs.Tutorial6_58_32Tutorial_32EndCode.GDAudioObjects1);
        gdjs.copyArray(runtimeScene.getObjects("Finish"), gdjs.Tutorial6_58_32Tutorial_32EndCode.GDFinishObjects1);

        gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = false;
        gdjs.Tutorial6_58_32Tutorial_32EndCode.condition1IsTrue_0.val = false;
        {
            gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Tutorial6_58_32Tutorial_32EndCode.mapOfGDgdjs_46Tutorial6_9558_9532Tutorial_9532EndCode_46GDFinishObjects1Objects, runtimeScene, true, true);
        }if (gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val) {
            {
                gdjs.Tutorial6_58_32Tutorial_32EndCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Tutorial6_58_32Tutorial_32EndCode.mapOfGDgdjs_46Tutorial6_9558_9532Tutorial_9532EndCode_46GDAudioObjects1Objects, runtimeScene, true, true);
            }
        }
        if (gdjs.Tutorial6_58_32Tutorial_32EndCode.condition1IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.Tutorial6_58_32Tutorial_32EndCode.GDpointerObjects1);
            {
                gdjs.evtTools.input.showCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.Tutorial6_58_32Tutorial_32EndCode.GDpointerObjects1.length; i < len; ++i) {
                    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDpointerObjects1[i].hide();
                }
            }
        }
    }
};gdjs.Tutorial6_58_32Tutorial_32EndCode.eventsList4 = function (runtimeScene) {

    {

        gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
            }
        }
    }
};gdjs.Tutorial6_58_32Tutorial_32EndCode.eventsList5 = function (runtimeScene) {

    {

        gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        }if (gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val) {

            {
                //Subevents
                gdjs.Tutorial6_58_32Tutorial_32EndCode.eventsList4(runtimeScene);
            } //End of subevents
        }
    }
};gdjs.Tutorial6_58_32Tutorial_32EndCode.eventsList6 = function (runtimeScene) {

    {

        gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
        }if (gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, 0);
            }
        }
    }

    {

        gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 25;
        }if (gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, 25);
            }
        }
    }

    {

        gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 50;
        }if (gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, 50);
            }
        }
    }

    {

        gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 75;
        }if (gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, 75);
            }
        }
    }

    {

        gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 100;
        }if (gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, 100);
            }
        }
    }

    {

        gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
        }if (gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 0);
            }
        }
    }

    {

        gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 25;
        }if (gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 25);
            }
        }
    }

    {

        gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 50;
        }if (gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 50);
            }
        }
    }

    {

        gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 75;
        }if (gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 75);
            }
        }
    }

    {

        gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 100;
        }if (gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 100);
            }
        }
    }
};gdjs.Tutorial6_58_32Tutorial_32EndCode.eventsList7 = function (runtimeScene) {

    {

        {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.Tutorial6_58_32Tutorial_32EndCode.GDpointerObjects1);
            {
                for (var i = 0, len = gdjs.Tutorial6_58_32Tutorial_32EndCode.GDpointerObjects1.length; i < len; ++i) {
                    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDpointerObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
                }
            }
        }
    }

    {

        gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        }if (gdjs.Tutorial6_58_32Tutorial_32EndCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.common.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(6), true);
            }
        }
    }

    {

        gdjs.Tutorial6_58_32Tutorial_32EndCode.eventsList0(runtimeScene);
    }

    {

        gdjs.Tutorial6_58_32Tutorial_32EndCode.eventsList3(runtimeScene);
    }

    {

        gdjs.Tutorial6_58_32Tutorial_32EndCode.eventsList5(runtimeScene);
    }

    {

        gdjs.Tutorial6_58_32Tutorial_32EndCode.eventsList6(runtimeScene);
    }
};

gdjs.Tutorial6_58_32Tutorial_32EndCode.func = function (runtimeScene) {
    runtimeScene.getOnceTriggers().startNewFrame();

    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDCityObjects1.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDCityObjects2.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDCityObjects3.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDCityObjects4.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDTutorialBoxObjects1.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDTutorialBoxObjects2.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDTutorialBoxObjects3.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDTutorialBoxObjects4.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDFinishObjects1.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDFinishObjects2.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDFinishObjects3.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDFinishObjects4.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDpointerObjects1.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDpointerObjects2.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDpointerObjects3.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDpointerObjects4.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDboundaryObjects1.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDboundaryObjects2.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDboundaryObjects3.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDboundaryObjects4.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDTutorialEndText2Objects1.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDTutorialEndText2Objects2.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDTutorialEndText2Objects3.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDTutorialEndText2Objects4.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDinfectedfiletextObjects1.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDinfectedfiletextObjects2.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDinfectedfiletextObjects3.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDinfectedfiletextObjects4.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDminusoneObjects1.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDminusoneObjects2.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDminusoneObjects3.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDminusoneObjects4.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDhealthObjects1.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDhealthObjects2.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDhealthObjects3.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDhealthObjects4.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDInfectedFilePanelObjects1.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDInfectedFilePanelObjects2.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDInfectedFilePanelObjects3.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDInfectedFilePanelObjects4.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDwatchoutObjects1.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDwatchoutObjects2.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDwatchoutObjects3.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDwatchoutObjects4.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDAudioObjects1.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDAudioObjects2.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDAudioObjects3.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDAudioObjects4.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDLoseLivesObjects1.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDLoseLivesObjects2.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDLoseLivesObjects3.length = 0;
    gdjs.Tutorial6_58_32Tutorial_32EndCode.GDLoseLivesObjects4.length = 0;

    gdjs.Tutorial6_58_32Tutorial_32EndCode.eventsList7(runtimeScene);
    return;
};

gdjs['Tutorial6_58_32Tutorial_32EndCode'] = gdjs.Tutorial6_58_32Tutorial_32EndCode;