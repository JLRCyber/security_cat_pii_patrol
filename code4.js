"use strict";

gdjs.Tutorial_63Code = {};
gdjs.Tutorial_63Code.GDBackgroundObjects1 = [];
gdjs.Tutorial_63Code.GDBackgroundObjects2 = [];
gdjs.Tutorial_63Code.GDBackgroundObjects3 = [];
gdjs.Tutorial_63Code.GDBackgroundObjects4 = [];
gdjs.Tutorial_63Code.GDSecurityCatLoseObjects1 = [];
gdjs.Tutorial_63Code.GDSecurityCatLoseObjects2 = [];
gdjs.Tutorial_63Code.GDSecurityCatLoseObjects3 = [];
gdjs.Tutorial_63Code.GDSecurityCatLoseObjects4 = [];
gdjs.Tutorial_63Code.GDcloudObjects1 = [];
gdjs.Tutorial_63Code.GDcloudObjects2 = [];
gdjs.Tutorial_63Code.GDcloudObjects3 = [];
gdjs.Tutorial_63Code.GDcloudObjects4 = [];
gdjs.Tutorial_63Code.GDcloud2Objects1 = [];
gdjs.Tutorial_63Code.GDcloud2Objects2 = [];
gdjs.Tutorial_63Code.GDcloud2Objects3 = [];
gdjs.Tutorial_63Code.GDcloud2Objects4 = [];
gdjs.Tutorial_63Code.GDcloud3Objects1 = [];
gdjs.Tutorial_63Code.GDcloud3Objects2 = [];
gdjs.Tutorial_63Code.GDcloud3Objects3 = [];
gdjs.Tutorial_63Code.GDcloud3Objects4 = [];
gdjs.Tutorial_63Code.GDpointerObjects1 = [];
gdjs.Tutorial_63Code.GDpointerObjects2 = [];
gdjs.Tutorial_63Code.GDpointerObjects3 = [];
gdjs.Tutorial_63Code.GDpointerObjects4 = [];
gdjs.Tutorial_63Code.GDTutorialObjects1 = [];
gdjs.Tutorial_63Code.GDTutorialObjects2 = [];
gdjs.Tutorial_63Code.GDTutorialObjects3 = [];
gdjs.Tutorial_63Code.GDTutorialObjects4 = [];
gdjs.Tutorial_63Code.GDyesObjects1 = [];
gdjs.Tutorial_63Code.GDyesObjects2 = [];
gdjs.Tutorial_63Code.GDyesObjects3 = [];
gdjs.Tutorial_63Code.GDyesObjects4 = [];
gdjs.Tutorial_63Code.GDnoObjects1 = [];
gdjs.Tutorial_63Code.GDnoObjects2 = [];
gdjs.Tutorial_63Code.GDnoObjects3 = [];
gdjs.Tutorial_63Code.GDnoObjects4 = [];
gdjs.Tutorial_63Code.GDMenuObjects1 = [];
gdjs.Tutorial_63Code.GDMenuObjects2 = [];
gdjs.Tutorial_63Code.GDMenuObjects3 = [];
gdjs.Tutorial_63Code.GDMenuObjects4 = [];

gdjs.Tutorial_63Code.conditionTrue_0 = { val: false };
gdjs.Tutorial_63Code.condition0IsTrue_0 = { val: false };
gdjs.Tutorial_63Code.condition1IsTrue_0 = { val: false };
gdjs.Tutorial_63Code.condition2IsTrue_0 = { val: false };

gdjs.Tutorial_63Code.eventsList0 = function (runtimeScene) {

    {

        gdjs.Tutorial_63Code.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial_63Code.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.Tutorial_63Code.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
            }
        }
    }
};gdjs.Tutorial_63Code.eventsList1 = function (runtimeScene) {

    {

        {
            gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Tutorial_63Code.GDBackgroundObjects1);
            gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.Tutorial_63Code.GDMenuObjects1);
            gdjs.copyArray(runtimeScene.getObjects("SecurityCatLose"), gdjs.Tutorial_63Code.GDSecurityCatLoseObjects1);
            gdjs.copyArray(runtimeScene.getObjects("Tutorial"), gdjs.Tutorial_63Code.GDTutorialObjects1);
            {
                for (var i = 0, len = gdjs.Tutorial_63Code.GDBackgroundObjects1.length; i < len; ++i) {
                    gdjs.Tutorial_63Code.GDBackgroundObjects1[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
                }
            }{
                for (var i = 0, len = gdjs.Tutorial_63Code.GDTutorialObjects1.length; i < len; ++i) {
                    gdjs.Tutorial_63Code.GDTutorialObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.Tutorial_63Code.GDTutorialObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.Tutorial_63Code.GDSecurityCatLoseObjects1.length; i < len; ++i) {
                    gdjs.Tutorial_63Code.GDSecurityCatLoseObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.Tutorial_63Code.GDSecurityCatLoseObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.Tutorial_63Code.GDMenuObjects1.length; i < len; ++i) {
                    gdjs.Tutorial_63Code.GDMenuObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.Tutorial_63Code.GDMenuObjects1[i].getWidth() / 2);
                }
            }
        }
    }
};gdjs.Tutorial_63Code.mapOfGDgdjs_46Tutorial_9563Code_46GDyesObjects2Objects = Hashtable.newFrom({ "yes": gdjs.Tutorial_63Code.GDyesObjects2 });gdjs.Tutorial_63Code.eventsList2 = function (runtimeScene) {

    {

        gdjs.Tutorial_63Code.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial_63Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.Tutorial_63Code.condition0IsTrue_0.val) {
            gdjs.copyArray(gdjs.Tutorial_63Code.GDpointerObjects2, gdjs.Tutorial_63Code.GDpointerObjects3);

            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tutorial1: Welcome", false);
            }{
                for (var i = 0, len = gdjs.Tutorial_63Code.GDpointerObjects3.length; i < len; ++i) {
                    gdjs.Tutorial_63Code.GDpointerObjects3[i].hide();
                }
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }
        }
    }

    {

        gdjs.Tutorial_63Code.condition0IsTrue_0.val = false;
        gdjs.Tutorial_63Code.condition1IsTrue_0.val = false;
        {
            gdjs.Tutorial_63Code.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.Tutorial_63Code.condition0IsTrue_0.val) {
            {
                gdjs.Tutorial_63Code.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.Tutorial_63Code.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tutorial1: Welcome", false);
            }
        }
    }
};gdjs.Tutorial_63Code.mapOfGDgdjs_46Tutorial_9563Code_46GDyesObjects2Objects = Hashtable.newFrom({ "yes": gdjs.Tutorial_63Code.GDyesObjects2 });gdjs.Tutorial_63Code.mapOfGDgdjs_46Tutorial_9563Code_46GDnoObjects2Objects = Hashtable.newFrom({ "no": gdjs.Tutorial_63Code.GDnoObjects2 });gdjs.Tutorial_63Code.eventsList3 = function (runtimeScene) {

    {

        gdjs.Tutorial_63Code.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial_63Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.Tutorial_63Code.condition0IsTrue_0.val) {
            gdjs.copyArray(gdjs.Tutorial_63Code.GDpointerObjects2, gdjs.Tutorial_63Code.GDpointerObjects3);

            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.Tutorial_63Code.GDpointerObjects3.length; i < len; ++i) {
                    gdjs.Tutorial_63Code.GDpointerObjects3[i].hide();
                }
            }{
                gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
            }
        }
    }

    {

        gdjs.Tutorial_63Code.condition0IsTrue_0.val = false;
        gdjs.Tutorial_63Code.condition1IsTrue_0.val = false;
        {
            gdjs.Tutorial_63Code.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.Tutorial_63Code.condition0IsTrue_0.val) {
            {
                gdjs.Tutorial_63Code.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.Tutorial_63Code.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
            }
        }
    }
};gdjs.Tutorial_63Code.mapOfGDgdjs_46Tutorial_9563Code_46GDyesObjects2Objects = Hashtable.newFrom({ "yes": gdjs.Tutorial_63Code.GDyesObjects2 });gdjs.Tutorial_63Code.mapOfGDgdjs_46Tutorial_9563Code_46GDnoObjects2Objects = Hashtable.newFrom({ "no": gdjs.Tutorial_63Code.GDnoObjects2 });gdjs.Tutorial_63Code.mapOfGDgdjs_46Tutorial_9563Code_46GDnoObjects1Objects = Hashtable.newFrom({ "no": gdjs.Tutorial_63Code.GDnoObjects1 });gdjs.Tutorial_63Code.eventsList4 = function (runtimeScene) {

    {

        gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Tutorial_63Code.GDyesObjects2);

        gdjs.Tutorial_63Code.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial_63Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Tutorial_63Code.mapOfGDgdjs_46Tutorial_9563Code_46GDyesObjects2Objects, runtimeScene, true, false);
        }if (gdjs.Tutorial_63Code.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.Tutorial_63Code.GDpointerObjects2);
            /* Reuse gdjs.Tutorial_63Code.GDyesObjects2 */
            {
                for (var i = 0, len = gdjs.Tutorial_63Code.GDyesObjects2.length; i < len; ++i) {
                    gdjs.Tutorial_63Code.GDyesObjects2[i].setAnimation(1);
                }
            }{
                for (var i = 0, len = gdjs.Tutorial_63Code.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.Tutorial_63Code.GDpointerObjects2[i].hide(false);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }
            {
                //Subevents
                gdjs.Tutorial_63Code.eventsList2(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Tutorial_63Code.GDyesObjects2);

        gdjs.Tutorial_63Code.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial_63Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Tutorial_63Code.mapOfGDgdjs_46Tutorial_9563Code_46GDyesObjects2Objects, runtimeScene, true, true);
        }if (gdjs.Tutorial_63Code.condition0IsTrue_0.val) {
            /* Reuse gdjs.Tutorial_63Code.GDyesObjects2 */
            {
                for (var i = 0, len = gdjs.Tutorial_63Code.GDyesObjects2.length; i < len; ++i) {
                    gdjs.Tutorial_63Code.GDyesObjects2[i].setAnimation(0);
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Tutorial_63Code.GDnoObjects2);

        gdjs.Tutorial_63Code.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial_63Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Tutorial_63Code.mapOfGDgdjs_46Tutorial_9563Code_46GDnoObjects2Objects, runtimeScene, true, false);
        }if (gdjs.Tutorial_63Code.condition0IsTrue_0.val) {
            /* Reuse gdjs.Tutorial_63Code.GDnoObjects2 */
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.Tutorial_63Code.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.Tutorial_63Code.GDnoObjects2.length; i < len; ++i) {
                    gdjs.Tutorial_63Code.GDnoObjects2[i].setAnimation(1);
                }
            }{
                for (var i = 0, len = gdjs.Tutorial_63Code.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.Tutorial_63Code.GDpointerObjects2[i].hide(false);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }
            {
                //Subevents
                gdjs.Tutorial_63Code.eventsList3(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Tutorial_63Code.GDnoObjects2);
        gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Tutorial_63Code.GDyesObjects2);

        gdjs.Tutorial_63Code.condition0IsTrue_0.val = false;
        gdjs.Tutorial_63Code.condition1IsTrue_0.val = false;
        {
            gdjs.Tutorial_63Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Tutorial_63Code.mapOfGDgdjs_46Tutorial_9563Code_46GDyesObjects2Objects, runtimeScene, true, true);
        }if (gdjs.Tutorial_63Code.condition0IsTrue_0.val) {
            {
                gdjs.Tutorial_63Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Tutorial_63Code.mapOfGDgdjs_46Tutorial_9563Code_46GDnoObjects2Objects, runtimeScene, true, true);
            }
        }
        if (gdjs.Tutorial_63Code.condition1IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.Tutorial_63Code.GDpointerObjects2);
            {
                gdjs.evtTools.input.showCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.Tutorial_63Code.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.Tutorial_63Code.GDpointerObjects2[i].hide();
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Tutorial_63Code.GDnoObjects1);

        gdjs.Tutorial_63Code.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial_63Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Tutorial_63Code.mapOfGDgdjs_46Tutorial_9563Code_46GDnoObjects1Objects, runtimeScene, true, true);
        }if (gdjs.Tutorial_63Code.condition0IsTrue_0.val) {
            /* Reuse gdjs.Tutorial_63Code.GDnoObjects1 */
            {
                for (var i = 0, len = gdjs.Tutorial_63Code.GDnoObjects1.length; i < len; ++i) {
                    gdjs.Tutorial_63Code.GDnoObjects1[i].setAnimation(0);
                }
            }
        }
    }
};gdjs.Tutorial_63Code.eventsList5 = function (runtimeScene) {

    {

        gdjs.Tutorial_63Code.condition0IsTrue_0.val = false;
        {
            gdjs.Tutorial_63Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        }if (gdjs.Tutorial_63Code.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 3);
            }
            {
                //Subevents
                gdjs.Tutorial_63Code.eventsList0(runtimeScene);
            } //End of subevents
        }
    }

    {

        {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.Tutorial_63Code.GDpointerObjects1);
            {
                for (var i = 0, len = gdjs.Tutorial_63Code.GDpointerObjects1.length; i < len; ++i) {
                    gdjs.Tutorial_63Code.GDpointerObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
                }
            }
        }
    }

    {

        gdjs.Tutorial_63Code.eventsList1(runtimeScene);
    }

    {

        gdjs.Tutorial_63Code.eventsList4(runtimeScene);
    }
};

gdjs.Tutorial_63Code.func = function (runtimeScene) {
    runtimeScene.getOnceTriggers().startNewFrame();

    gdjs.Tutorial_63Code.GDBackgroundObjects1.length = 0;
    gdjs.Tutorial_63Code.GDBackgroundObjects2.length = 0;
    gdjs.Tutorial_63Code.GDBackgroundObjects3.length = 0;
    gdjs.Tutorial_63Code.GDBackgroundObjects4.length = 0;
    gdjs.Tutorial_63Code.GDSecurityCatLoseObjects1.length = 0;
    gdjs.Tutorial_63Code.GDSecurityCatLoseObjects2.length = 0;
    gdjs.Tutorial_63Code.GDSecurityCatLoseObjects3.length = 0;
    gdjs.Tutorial_63Code.GDSecurityCatLoseObjects4.length = 0;
    gdjs.Tutorial_63Code.GDcloudObjects1.length = 0;
    gdjs.Tutorial_63Code.GDcloudObjects2.length = 0;
    gdjs.Tutorial_63Code.GDcloudObjects3.length = 0;
    gdjs.Tutorial_63Code.GDcloudObjects4.length = 0;
    gdjs.Tutorial_63Code.GDcloud2Objects1.length = 0;
    gdjs.Tutorial_63Code.GDcloud2Objects2.length = 0;
    gdjs.Tutorial_63Code.GDcloud2Objects3.length = 0;
    gdjs.Tutorial_63Code.GDcloud2Objects4.length = 0;
    gdjs.Tutorial_63Code.GDcloud3Objects1.length = 0;
    gdjs.Tutorial_63Code.GDcloud3Objects2.length = 0;
    gdjs.Tutorial_63Code.GDcloud3Objects3.length = 0;
    gdjs.Tutorial_63Code.GDcloud3Objects4.length = 0;
    gdjs.Tutorial_63Code.GDpointerObjects1.length = 0;
    gdjs.Tutorial_63Code.GDpointerObjects2.length = 0;
    gdjs.Tutorial_63Code.GDpointerObjects3.length = 0;
    gdjs.Tutorial_63Code.GDpointerObjects4.length = 0;
    gdjs.Tutorial_63Code.GDTutorialObjects1.length = 0;
    gdjs.Tutorial_63Code.GDTutorialObjects2.length = 0;
    gdjs.Tutorial_63Code.GDTutorialObjects3.length = 0;
    gdjs.Tutorial_63Code.GDTutorialObjects4.length = 0;
    gdjs.Tutorial_63Code.GDyesObjects1.length = 0;
    gdjs.Tutorial_63Code.GDyesObjects2.length = 0;
    gdjs.Tutorial_63Code.GDyesObjects3.length = 0;
    gdjs.Tutorial_63Code.GDyesObjects4.length = 0;
    gdjs.Tutorial_63Code.GDnoObjects1.length = 0;
    gdjs.Tutorial_63Code.GDnoObjects2.length = 0;
    gdjs.Tutorial_63Code.GDnoObjects3.length = 0;
    gdjs.Tutorial_63Code.GDnoObjects4.length = 0;
    gdjs.Tutorial_63Code.GDMenuObjects1.length = 0;
    gdjs.Tutorial_63Code.GDMenuObjects2.length = 0;
    gdjs.Tutorial_63Code.GDMenuObjects3.length = 0;
    gdjs.Tutorial_63Code.GDMenuObjects4.length = 0;

    gdjs.Tutorial_63Code.eventsList5(runtimeScene);
    return;
};

gdjs['Tutorial_63Code'] = gdjs.Tutorial_63Code;