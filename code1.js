"use strict";

gdjs.TitleCode = {};
gdjs.TitleCode.GDBackgroundObjects1 = [];
gdjs.TitleCode.GDBackgroundObjects2 = [];
gdjs.TitleCode.GDBackgroundObjects3 = [];
gdjs.TitleCode.GDBackgroundObjects4 = [];
gdjs.TitleCode.GDBackgroundObjects5 = [];
gdjs.TitleCode.GDLogoObjects1 = [];
gdjs.TitleCode.GDLogoObjects2 = [];
gdjs.TitleCode.GDLogoObjects3 = [];
gdjs.TitleCode.GDLogoObjects4 = [];
gdjs.TitleCode.GDLogoObjects5 = [];
gdjs.TitleCode.GDCatObjects1 = [];
gdjs.TitleCode.GDCatObjects2 = [];
gdjs.TitleCode.GDCatObjects3 = [];
gdjs.TitleCode.GDCatObjects4 = [];
gdjs.TitleCode.GDCatObjects5 = [];
gdjs.TitleCode.GDstartObjects1 = [];
gdjs.TitleCode.GDstartObjects2 = [];
gdjs.TitleCode.GDstartObjects3 = [];
gdjs.TitleCode.GDstartObjects4 = [];
gdjs.TitleCode.GDstartObjects5 = [];
gdjs.TitleCode.GDDifficultyObjects1 = [];
gdjs.TitleCode.GDDifficultyObjects2 = [];
gdjs.TitleCode.GDDifficultyObjects3 = [];
gdjs.TitleCode.GDDifficultyObjects4 = [];
gdjs.TitleCode.GDDifficultyObjects5 = [];
gdjs.TitleCode.GDtutorialObjects1 = [];
gdjs.TitleCode.GDtutorialObjects2 = [];
gdjs.TitleCode.GDtutorialObjects3 = [];
gdjs.TitleCode.GDtutorialObjects4 = [];
gdjs.TitleCode.GDtutorialObjects5 = [];
gdjs.TitleCode.GDcloudObjects1 = [];
gdjs.TitleCode.GDcloudObjects2 = [];
gdjs.TitleCode.GDcloudObjects3 = [];
gdjs.TitleCode.GDcloudObjects4 = [];
gdjs.TitleCode.GDcloudObjects5 = [];
gdjs.TitleCode.GDcloud2Objects1 = [];
gdjs.TitleCode.GDcloud2Objects2 = [];
gdjs.TitleCode.GDcloud2Objects3 = [];
gdjs.TitleCode.GDcloud2Objects4 = [];
gdjs.TitleCode.GDcloud2Objects5 = [];
gdjs.TitleCode.GDcloud3Objects1 = [];
gdjs.TitleCode.GDcloud3Objects2 = [];
gdjs.TitleCode.GDcloud3Objects3 = [];
gdjs.TitleCode.GDcloud3Objects4 = [];
gdjs.TitleCode.GDcloud3Objects5 = [];
gdjs.TitleCode.GDpointerObjects1 = [];
gdjs.TitleCode.GDpointerObjects2 = [];
gdjs.TitleCode.GDpointerObjects3 = [];
gdjs.TitleCode.GDpointerObjects4 = [];
gdjs.TitleCode.GDpointerObjects5 = [];
gdjs.TitleCode.GDAudioObjects1 = [];
gdjs.TitleCode.GDAudioObjects2 = [];
gdjs.TitleCode.GDAudioObjects3 = [];
gdjs.TitleCode.GDAudioObjects4 = [];
gdjs.TitleCode.GDAudioObjects5 = [];
gdjs.TitleCode.GDversionObjects1 = [];
gdjs.TitleCode.GDversionObjects2 = [];
gdjs.TitleCode.GDversionObjects3 = [];
gdjs.TitleCode.GDversionObjects4 = [];
gdjs.TitleCode.GDversionObjects5 = [];

gdjs.TitleCode.conditionTrue_0 = { val: false };
gdjs.TitleCode.condition0IsTrue_0 = { val: false };
gdjs.TitleCode.condition1IsTrue_0 = { val: false };
gdjs.TitleCode.condition2IsTrue_0 = { val: false };
gdjs.TitleCode.condition3IsTrue_0 = { val: false };
gdjs.TitleCode.condition4IsTrue_0 = { val: false };

gdjs.TitleCode.eventsList0 = function (runtimeScene) {

    {

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
            }
        }
    }
};gdjs.TitleCode.eventsList1 = function (runtimeScene) {

    {

        {
            gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.TitleCode.GDBackgroundObjects1);
            gdjs.copyArray(runtimeScene.getObjects("Difficulty"), gdjs.TitleCode.GDDifficultyObjects1);
            gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.TitleCode.GDLogoObjects1);
            gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.TitleCode.GDstartObjects1);
            gdjs.copyArray(runtimeScene.getObjects("tutorial"), gdjs.TitleCode.GDtutorialObjects1);
            {
                for (var i = 0, len = gdjs.TitleCode.GDBackgroundObjects1.length; i < len; ++i) {
                    gdjs.TitleCode.GDBackgroundObjects1[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
                }
            }{
                for (var i = 0, len = gdjs.TitleCode.GDLogoObjects1.length; i < len; ++i) {
                    gdjs.TitleCode.GDLogoObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.TitleCode.GDLogoObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.TitleCode.GDstartObjects1.length; i < len; ++i) {
                    gdjs.TitleCode.GDstartObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.TitleCode.GDstartObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.TitleCode.GDDifficultyObjects1.length; i < len; ++i) {
                    gdjs.TitleCode.GDDifficultyObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.TitleCode.GDDifficultyObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.TitleCode.GDtutorialObjects1.length; i < len; ++i) {
                    gdjs.TitleCode.GDtutorialObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.TitleCode.GDtutorialObjects1[i].getWidth() / 2);
                }
            }
        }
    }
};gdjs.TitleCode.eventsList2 = function (runtimeScene) {

    {

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.TitleCode.GDpointerObjects1);
            {
                gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
            }{
                for (var i = 0, len = gdjs.TitleCode.GDpointerObjects1.length; i < len; ++i) {
                    gdjs.TitleCode.GDpointerObjects1[i].deleteFromScene(runtimeScene);
                }
            }
        }
    }
};gdjs.TitleCode.eventsList3 = function (runtimeScene) {

    {

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {

            {
                //Subevents
                gdjs.TitleCode.eventsList2(runtimeScene);
            } //End of subevents
        }
    }
};gdjs.TitleCode.eventsList4 = function (runtimeScene) {

    {

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("Cat"), gdjs.TitleCode.GDCatObjects2);
            {
                for (var i = 0, len = gdjs.TitleCode.GDCatObjects2.length; i < len; ++i) {
                    gdjs.TitleCode.GDCatObjects2[i].getBehavior("Tween").addObjectPositionXTween("MoveRight", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + 200, "linear", 9000, false);
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Cat"), gdjs.TitleCode.GDCatObjects1);

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        {
            for (var i = 0, k = 0, l = gdjs.TitleCode.GDCatObjects1.length; i < l; ++i) {
                if (gdjs.TitleCode.GDCatObjects1[i].getBehavior("Tween").hasFinished("MoveRight")) {
                    gdjs.TitleCode.condition0IsTrue_0.val = true;
                    gdjs.TitleCode.GDCatObjects1[k] = gdjs.TitleCode.GDCatObjects1[i];
                    ++k;
                }
            }
            gdjs.TitleCode.GDCatObjects1.length = k;
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.TitleCode.GDCatObjects1 */
            {
                for (var i = 0, len = gdjs.TitleCode.GDCatObjects1.length; i < len; ++i) {
                    gdjs.TitleCode.GDCatObjects1[i].deleteFromScene(runtimeScene);
                }
            }
        }
    }
};gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDstartObjects2Objects = Hashtable.newFrom({ "start": gdjs.TitleCode.GDstartObjects2 });gdjs.TitleCode.eventsList5 = function (runtimeScene) {

    {

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(6), true);
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {
            gdjs.copyArray(gdjs.TitleCode.GDpointerObjects2, gdjs.TitleCode.GDpointerObjects4);

            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }{
                gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
            }{
                for (var i = 0, len = gdjs.TitleCode.GDpointerObjects4.length; i < len; ++i) {
                    gdjs.TitleCode.GDpointerObjects4[i].hide();
                }
            }
        }
    }

    {

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(6), false);
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {
            gdjs.copyArray(gdjs.TitleCode.GDpointerObjects2, gdjs.TitleCode.GDpointerObjects3);

            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }{
                gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tutorial?", false);
            }{
                for (var i = 0, len = gdjs.TitleCode.GDpointerObjects3.length; i < len; ++i) {
                    gdjs.TitleCode.GDpointerObjects3[i].hide();
                }
            }
        }
    }
};gdjs.TitleCode.eventsList6 = function (runtimeScene) {

    {

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(6), true);
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 10, 1);
            }{
                gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
            }
        }
    }

    {

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(6), false);
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 10, 1);
            }{
                gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tutorial?", false);
            }
        }
    }
};gdjs.TitleCode.eventsList7 = function (runtimeScene) {

    {

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {

            {
                //Subevents
                gdjs.TitleCode.eventsList5(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        gdjs.TitleCode.condition1IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {
            {
                gdjs.TitleCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.TitleCode.condition1IsTrue_0.val) {

            {
                //Subevents
                gdjs.TitleCode.eventsList6(runtimeScene);
            } //End of subevents
        }
    }
};gdjs.TitleCode.eventsList8 = function (runtimeScene) {

    {

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getVariables().getFromIndex(0), true);
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {

            {
                //Subevents
                gdjs.TitleCode.eventsList7(runtimeScene);
            } //End of subevents
        }
    }
};gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDDifficultyObjects2Objects = Hashtable.newFrom({ "Difficulty": gdjs.TitleCode.GDDifficultyObjects2 });gdjs.TitleCode.eventsList9 = function (runtimeScene) {

    {

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {
            gdjs.copyArray(gdjs.TitleCode.GDpointerObjects2, gdjs.TitleCode.GDpointerObjects3);

            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 10, 1);
            }{
                gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Difficulty", false);
            }{
                for (var i = 0, len = gdjs.TitleCode.GDpointerObjects3.length; i < len; ++i) {
                    gdjs.TitleCode.GDpointerObjects3[i].hide();
                }
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }
        }
    }

    {

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        gdjs.TitleCode.condition1IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {
            {
                gdjs.TitleCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.TitleCode.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 10, 1);
            }{
                gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Difficulty", false);
            }
        }
    }
};gdjs.TitleCode.eventsList10 = function (runtimeScene) {

    {

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getVariables().getFromIndex(0), true);
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {

            {
                //Subevents
                gdjs.TitleCode.eventsList9(runtimeScene);
            } //End of subevents
        }
    }
};gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDAudioObjects2Objects = Hashtable.newFrom({ "Audio": gdjs.TitleCode.GDAudioObjects2 });gdjs.TitleCode.eventsList11 = function (runtimeScene) {

    {

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {
            gdjs.copyArray(gdjs.TitleCode.GDpointerObjects2, gdjs.TitleCode.GDpointerObjects3);

            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 10, 1);
            }{
                for (var i = 0, len = gdjs.TitleCode.GDpointerObjects3.length; i < len; ++i) {
                    gdjs.TitleCode.GDpointerObjects3[i].hide();
                }
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }{
                gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Settings");
            }
        }
    }

    {

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        gdjs.TitleCode.condition1IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {
            {
                gdjs.TitleCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.TitleCode.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 10, 1);
            }{
                gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Settings");
            }
        }
    }
};gdjs.TitleCode.eventsList12 = function (runtimeScene) {

    {

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getVariables().getFromIndex(0), true);
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {

            {
                //Subevents
                gdjs.TitleCode.eventsList11(runtimeScene);
            } //End of subevents
        }
    }
};gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDtutorialObjects2Objects = Hashtable.newFrom({ "tutorial": gdjs.TitleCode.GDtutorialObjects2 });gdjs.TitleCode.eventsList13 = function (runtimeScene) {

    {

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {
            gdjs.copyArray(gdjs.TitleCode.GDpointerObjects2, gdjs.TitleCode.GDpointerObjects3);

            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 10, 1);
            }{
                gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tutorial1: Welcome", false);
            }{
                for (var i = 0, len = gdjs.TitleCode.GDpointerObjects3.length; i < len; ++i) {
                    gdjs.TitleCode.GDpointerObjects3[i].hide();
                }
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }
        }
    }

    {

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        gdjs.TitleCode.condition1IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {
            {
                gdjs.TitleCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.TitleCode.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 10, 1);
            }{
                gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tutorial1: Welcome", false);
            }
        }
    }
};gdjs.TitleCode.eventsList14 = function (runtimeScene) {

    {

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getVariables().getFromIndex(0), true);
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {

            {
                //Subevents
                gdjs.TitleCode.eventsList13(runtimeScene);
            } //End of subevents
        }
    }
};gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDAudioObjects2Objects = Hashtable.newFrom({ "Audio": gdjs.TitleCode.GDAudioObjects2 });gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDstartObjects2Objects = Hashtable.newFrom({ "start": gdjs.TitleCode.GDstartObjects2 });gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDDifficultyObjects2Objects = Hashtable.newFrom({ "Difficulty": gdjs.TitleCode.GDDifficultyObjects2 });gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDtutorialObjects2Objects = Hashtable.newFrom({ "tutorial": gdjs.TitleCode.GDtutorialObjects2 });gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDstartObjects1Objects = Hashtable.newFrom({ "start": gdjs.TitleCode.GDstartObjects1 });gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDDifficultyObjects1Objects = Hashtable.newFrom({ "Difficulty": gdjs.TitleCode.GDDifficultyObjects1 });gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDtutorialObjects1Objects = Hashtable.newFrom({ "tutorial": gdjs.TitleCode.GDtutorialObjects1 });gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDAudioObjects1Objects = Hashtable.newFrom({ "Audio": gdjs.TitleCode.GDAudioObjects1 });gdjs.TitleCode.eventsList15 = function (runtimeScene) {

    {

        {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.TitleCode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.TitleCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.TitleCode.GDpointerObjects2[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.TitleCode.GDstartObjects2);

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDstartObjects2Objects, runtimeScene, true, false);
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.TitleCode.GDpointerObjects2);
            /* Reuse gdjs.TitleCode.GDstartObjects2 */
            {
                for (var i = 0, len = gdjs.TitleCode.GDstartObjects2.length; i < len; ++i) {
                    gdjs.TitleCode.GDstartObjects2[i].setAnimation(1);
                }
            }{
                for (var i = 0, len = gdjs.TitleCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.TitleCode.GDpointerObjects2[i].hide(false);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }
            {
                //Subevents
                gdjs.TitleCode.eventsList8(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Difficulty"), gdjs.TitleCode.GDDifficultyObjects2);

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDDifficultyObjects2Objects, runtimeScene, true, false);
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.TitleCode.GDDifficultyObjects2 */
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.TitleCode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.TitleCode.GDDifficultyObjects2.length; i < len; ++i) {
                    gdjs.TitleCode.GDDifficultyObjects2[i].setAnimation(1);
                }
            }{
                for (var i = 0, len = gdjs.TitleCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.TitleCode.GDpointerObjects2[i].hide(false);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }
            {
                //Subevents
                gdjs.TitleCode.eventsList10(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Audio"), gdjs.TitleCode.GDAudioObjects2);

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDAudioObjects2Objects, runtimeScene, true, false);
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.TitleCode.GDAudioObjects2 */
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.TitleCode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.TitleCode.GDAudioObjects2.length; i < len; ++i) {
                    gdjs.TitleCode.GDAudioObjects2[i].setAnimation(1);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.TitleCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.TitleCode.GDpointerObjects2[i].hide(false);
                }
            }
            {
                //Subevents
                gdjs.TitleCode.eventsList12(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("tutorial"), gdjs.TitleCode.GDtutorialObjects2);

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDtutorialObjects2Objects, runtimeScene, true, false);
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.TitleCode.GDpointerObjects2);
            /* Reuse gdjs.TitleCode.GDtutorialObjects2 */
            {
                for (var i = 0, len = gdjs.TitleCode.GDtutorialObjects2.length; i < len; ++i) {
                    gdjs.TitleCode.GDtutorialObjects2[i].setAnimation(1);
                }
            }{
                for (var i = 0, len = gdjs.TitleCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.TitleCode.GDpointerObjects2[i].hide(false);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }
            {
                //Subevents
                gdjs.TitleCode.eventsList14(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Audio"), gdjs.TitleCode.GDAudioObjects2);

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDAudioObjects2Objects, runtimeScene, true, true);
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.TitleCode.GDAudioObjects2 */
            {
                for (var i = 0, len = gdjs.TitleCode.GDAudioObjects2.length; i < len; ++i) {
                    gdjs.TitleCode.GDAudioObjects2[i].setAnimation(0);
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.TitleCode.GDstartObjects2);

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDstartObjects2Objects, runtimeScene, true, true);
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.TitleCode.GDstartObjects2 */
            {
                for (var i = 0, len = gdjs.TitleCode.GDstartObjects2.length; i < len; ++i) {
                    gdjs.TitleCode.GDstartObjects2[i].setAnimation(0);
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Difficulty"), gdjs.TitleCode.GDDifficultyObjects2);

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDDifficultyObjects2Objects, runtimeScene, true, true);
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.TitleCode.GDDifficultyObjects2 */
            {
                for (var i = 0, len = gdjs.TitleCode.GDDifficultyObjects2.length; i < len; ++i) {
                    gdjs.TitleCode.GDDifficultyObjects2[i].setAnimation(0);
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("tutorial"), gdjs.TitleCode.GDtutorialObjects2);

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDtutorialObjects2Objects, runtimeScene, true, true);
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.TitleCode.GDtutorialObjects2 */
            {
                for (var i = 0, len = gdjs.TitleCode.GDtutorialObjects2.length; i < len; ++i) {
                    gdjs.TitleCode.GDtutorialObjects2[i].setAnimation(0);
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Audio"), gdjs.TitleCode.GDAudioObjects1);
        gdjs.copyArray(runtimeScene.getObjects("Difficulty"), gdjs.TitleCode.GDDifficultyObjects1);
        gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.TitleCode.GDstartObjects1);
        gdjs.copyArray(runtimeScene.getObjects("tutorial"), gdjs.TitleCode.GDtutorialObjects1);

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        gdjs.TitleCode.condition1IsTrue_0.val = false;
        gdjs.TitleCode.condition2IsTrue_0.val = false;
        gdjs.TitleCode.condition3IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDstartObjects1Objects, runtimeScene, true, true);
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {
            {
                gdjs.TitleCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDDifficultyObjects1Objects, runtimeScene, true, true);
            }if (gdjs.TitleCode.condition1IsTrue_0.val) {
                {
                    gdjs.TitleCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDtutorialObjects1Objects, runtimeScene, true, true);
                }if (gdjs.TitleCode.condition2IsTrue_0.val) {
                    {
                        gdjs.TitleCode.condition3IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDAudioObjects1Objects, runtimeScene, true, true);
                    }
                }
            }
        }
        if (gdjs.TitleCode.condition3IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.TitleCode.GDpointerObjects1);
            {
                gdjs.evtTools.input.showCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.TitleCode.GDpointerObjects1.length; i < len; ++i) {
                    gdjs.TitleCode.GDpointerObjects1[i].hide();
                }
            }
        }
    }
};gdjs.TitleCode.eventsList16 = function (runtimeScene) {

    {

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, 0);
            }
        }
    }

    {

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 25;
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, 25);
            }
        }
    }

    {

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 50;
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, 50);
            }
        }
    }

    {

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 75;
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, 75);
            }
        }
    }

    {

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 100;
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, 100);
            }
        }
    }

    {

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 0);
            }
        }
    }

    {

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 25;
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 25);
            }
        }
    }

    {

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 50;
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 50);
            }
        }
    }

    {

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 75;
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 75);
            }
        }
    }

    {

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 100;
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 100);
            }
        }
    }
};gdjs.TitleCode.eventsList17 = function (runtimeScene) {

    {

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 1);
            }{
                runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(25);
            }{
                gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "The Jazz Logo.mp3", 3, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)), 1);
            }
            {
                //Subevents
                gdjs.TitleCode.eventsList0(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        gdjs.TitleCode.condition1IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {
            {
                gdjs.TitleCode.condition1IsTrue_0.val = gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, 1);
            }
        }
        if (gdjs.TitleCode.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 1);
            }{
                gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "The Jazz Logo.mp3", 3, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)), 1);
            }
        }
    }

    {

        {
            gdjs.copyArray(runtimeScene.getObjects("version"), gdjs.TitleCode.GDversionObjects1);
            {
                for (var i = 0, len = gdjs.TitleCode.GDversionObjects1.length; i < len; ++i) {
                    gdjs.TitleCode.GDversionObjects1[i].setBBText("[shadow=black]" + "Version " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)) + " - Beta" + "[/shadow]");
                }
            }
        }
    }

    {

        gdjs.TitleCode.condition0IsTrue_0.val = false;
        {
            gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "buttonsClickable");
        }if (gdjs.TitleCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.common.setVariableBoolean(runtimeScene.getVariables().getFromIndex(0), true);
            }
        }
    }

    {

        gdjs.TitleCode.eventsList1(runtimeScene);
    }

    {

        gdjs.TitleCode.eventsList3(runtimeScene);
    }

    {

        gdjs.TitleCode.eventsList4(runtimeScene);
    }

    {

        gdjs.TitleCode.eventsList15(runtimeScene);
    }

    {

        gdjs.TitleCode.eventsList16(runtimeScene);
    }
};

gdjs.TitleCode.func = function (runtimeScene) {
    runtimeScene.getOnceTriggers().startNewFrame();

    gdjs.TitleCode.GDBackgroundObjects1.length = 0;
    gdjs.TitleCode.GDBackgroundObjects2.length = 0;
    gdjs.TitleCode.GDBackgroundObjects3.length = 0;
    gdjs.TitleCode.GDBackgroundObjects4.length = 0;
    gdjs.TitleCode.GDBackgroundObjects5.length = 0;
    gdjs.TitleCode.GDLogoObjects1.length = 0;
    gdjs.TitleCode.GDLogoObjects2.length = 0;
    gdjs.TitleCode.GDLogoObjects3.length = 0;
    gdjs.TitleCode.GDLogoObjects4.length = 0;
    gdjs.TitleCode.GDLogoObjects5.length = 0;
    gdjs.TitleCode.GDCatObjects1.length = 0;
    gdjs.TitleCode.GDCatObjects2.length = 0;
    gdjs.TitleCode.GDCatObjects3.length = 0;
    gdjs.TitleCode.GDCatObjects4.length = 0;
    gdjs.TitleCode.GDCatObjects5.length = 0;
    gdjs.TitleCode.GDstartObjects1.length = 0;
    gdjs.TitleCode.GDstartObjects2.length = 0;
    gdjs.TitleCode.GDstartObjects3.length = 0;
    gdjs.TitleCode.GDstartObjects4.length = 0;
    gdjs.TitleCode.GDstartObjects5.length = 0;
    gdjs.TitleCode.GDDifficultyObjects1.length = 0;
    gdjs.TitleCode.GDDifficultyObjects2.length = 0;
    gdjs.TitleCode.GDDifficultyObjects3.length = 0;
    gdjs.TitleCode.GDDifficultyObjects4.length = 0;
    gdjs.TitleCode.GDDifficultyObjects5.length = 0;
    gdjs.TitleCode.GDtutorialObjects1.length = 0;
    gdjs.TitleCode.GDtutorialObjects2.length = 0;
    gdjs.TitleCode.GDtutorialObjects3.length = 0;
    gdjs.TitleCode.GDtutorialObjects4.length = 0;
    gdjs.TitleCode.GDtutorialObjects5.length = 0;
    gdjs.TitleCode.GDcloudObjects1.length = 0;
    gdjs.TitleCode.GDcloudObjects2.length = 0;
    gdjs.TitleCode.GDcloudObjects3.length = 0;
    gdjs.TitleCode.GDcloudObjects4.length = 0;
    gdjs.TitleCode.GDcloudObjects5.length = 0;
    gdjs.TitleCode.GDcloud2Objects1.length = 0;
    gdjs.TitleCode.GDcloud2Objects2.length = 0;
    gdjs.TitleCode.GDcloud2Objects3.length = 0;
    gdjs.TitleCode.GDcloud2Objects4.length = 0;
    gdjs.TitleCode.GDcloud2Objects5.length = 0;
    gdjs.TitleCode.GDcloud3Objects1.length = 0;
    gdjs.TitleCode.GDcloud3Objects2.length = 0;
    gdjs.TitleCode.GDcloud3Objects3.length = 0;
    gdjs.TitleCode.GDcloud3Objects4.length = 0;
    gdjs.TitleCode.GDcloud3Objects5.length = 0;
    gdjs.TitleCode.GDpointerObjects1.length = 0;
    gdjs.TitleCode.GDpointerObjects2.length = 0;
    gdjs.TitleCode.GDpointerObjects3.length = 0;
    gdjs.TitleCode.GDpointerObjects4.length = 0;
    gdjs.TitleCode.GDpointerObjects5.length = 0;
    gdjs.TitleCode.GDAudioObjects1.length = 0;
    gdjs.TitleCode.GDAudioObjects2.length = 0;
    gdjs.TitleCode.GDAudioObjects3.length = 0;
    gdjs.TitleCode.GDAudioObjects4.length = 0;
    gdjs.TitleCode.GDAudioObjects5.length = 0;
    gdjs.TitleCode.GDversionObjects1.length = 0;
    gdjs.TitleCode.GDversionObjects2.length = 0;
    gdjs.TitleCode.GDversionObjects3.length = 0;
    gdjs.TitleCode.GDversionObjects4.length = 0;
    gdjs.TitleCode.GDversionObjects5.length = 0;

    gdjs.TitleCode.eventsList17(runtimeScene);
    return;
};

gdjs['TitleCode'] = gdjs.TitleCode;