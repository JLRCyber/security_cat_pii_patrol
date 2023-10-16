"use strict";

gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.GDBackgroundObjects1 = [];
gdjs.Game_32OverCode.GDBackgroundObjects2 = [];
gdjs.Game_32OverCode.GDBackgroundObjects3 = [];
gdjs.Game_32OverCode.GDBackgroundObjects4 = [];
gdjs.Game_32OverCode.GDGameOverObjects1 = [];
gdjs.Game_32OverCode.GDGameOverObjects2 = [];
gdjs.Game_32OverCode.GDGameOverObjects3 = [];
gdjs.Game_32OverCode.GDGameOverObjects4 = [];
gdjs.Game_32OverCode.GDSecurityCatLoseObjects1 = [];
gdjs.Game_32OverCode.GDSecurityCatLoseObjects2 = [];
gdjs.Game_32OverCode.GDSecurityCatLoseObjects3 = [];
gdjs.Game_32OverCode.GDSecurityCatLoseObjects4 = [];
gdjs.Game_32OverCode.GDScoreBoardObjects1 = [];
gdjs.Game_32OverCode.GDScoreBoardObjects2 = [];
gdjs.Game_32OverCode.GDScoreBoardObjects3 = [];
gdjs.Game_32OverCode.GDScoreBoardObjects4 = [];
gdjs.Game_32OverCode.GDcloudObjects1 = [];
gdjs.Game_32OverCode.GDcloudObjects2 = [];
gdjs.Game_32OverCode.GDcloudObjects3 = [];
gdjs.Game_32OverCode.GDcloudObjects4 = [];
gdjs.Game_32OverCode.GDcloud2Objects1 = [];
gdjs.Game_32OverCode.GDcloud2Objects2 = [];
gdjs.Game_32OverCode.GDcloud2Objects3 = [];
gdjs.Game_32OverCode.GDcloud2Objects4 = [];
gdjs.Game_32OverCode.GDcloud3Objects1 = [];
gdjs.Game_32OverCode.GDcloud3Objects2 = [];
gdjs.Game_32OverCode.GDcloud3Objects3 = [];
gdjs.Game_32OverCode.GDcloud3Objects4 = [];
gdjs.Game_32OverCode.GDhomeObjects1 = [];
gdjs.Game_32OverCode.GDhomeObjects2 = [];
gdjs.Game_32OverCode.GDhomeObjects3 = [];
gdjs.Game_32OverCode.GDhomeObjects4 = [];
gdjs.Game_32OverCode.GDreplayObjects1 = [];
gdjs.Game_32OverCode.GDreplayObjects2 = [];
gdjs.Game_32OverCode.GDreplayObjects3 = [];
gdjs.Game_32OverCode.GDreplayObjects4 = [];
gdjs.Game_32OverCode.GDpointerObjects1 = [];
gdjs.Game_32OverCode.GDpointerObjects2 = [];
gdjs.Game_32OverCode.GDpointerObjects3 = [];
gdjs.Game_32OverCode.GDpointerObjects4 = [];
gdjs.Game_32OverCode.GDExitObjects1 = [];
gdjs.Game_32OverCode.GDExitObjects2 = [];
gdjs.Game_32OverCode.GDExitObjects3 = [];
gdjs.Game_32OverCode.GDExitObjects4 = [];
gdjs.Game_32OverCode.GDTextBoxObjects1 = [];
gdjs.Game_32OverCode.GDTextBoxObjects2 = [];
gdjs.Game_32OverCode.GDTextBoxObjects3 = [];
gdjs.Game_32OverCode.GDTextBoxObjects4 = [];
gdjs.Game_32OverCode.GDYouLoseTextObjects1 = [];
gdjs.Game_32OverCode.GDYouLoseTextObjects2 = [];
gdjs.Game_32OverCode.GDYouLoseTextObjects3 = [];
gdjs.Game_32OverCode.GDYouLoseTextObjects4 = [];
gdjs.Game_32OverCode.GDSpeechBubbleObjects1 = [];
gdjs.Game_32OverCode.GDSpeechBubbleObjects2 = [];
gdjs.Game_32OverCode.GDSpeechBubbleObjects3 = [];
gdjs.Game_32OverCode.GDSpeechBubbleObjects4 = [];
gdjs.Game_32OverCode.GDReplayTextObjects1 = [];
gdjs.Game_32OverCode.GDReplayTextObjects2 = [];
gdjs.Game_32OverCode.GDReplayTextObjects3 = [];
gdjs.Game_32OverCode.GDReplayTextObjects4 = [];
gdjs.Game_32OverCode.GDscoreObjects1 = [];
gdjs.Game_32OverCode.GDscoreObjects2 = [];
gdjs.Game_32OverCode.GDscoreObjects3 = [];
gdjs.Game_32OverCode.GDscoreObjects4 = [];

gdjs.Game_32OverCode.conditionTrue_0 = { val: false };
gdjs.Game_32OverCode.condition0IsTrue_0 = { val: false };
gdjs.Game_32OverCode.condition1IsTrue_0 = { val: false };
gdjs.Game_32OverCode.condition2IsTrue_0 = { val: false };
gdjs.Game_32OverCode.condition3IsTrue_0 = { val: false };
gdjs.Game_32OverCode.conditionTrue_1 = { val: false };
gdjs.Game_32OverCode.condition0IsTrue_1 = { val: false };
gdjs.Game_32OverCode.condition1IsTrue_1 = { val: false };
gdjs.Game_32OverCode.condition2IsTrue_1 = { val: false };
gdjs.Game_32OverCode.condition3IsTrue_1 = { val: false };

gdjs.Game_32OverCode.eventsList0 = function (runtimeScene) {

    {

        gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
        {
            gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
            }
        }
    }
};gdjs.Game_32OverCode.eventsList1 = function (runtimeScene) {

    {

        {
            gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Game_32OverCode.GDBackgroundObjects1);
            gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.Game_32OverCode.GDExitObjects1);
            gdjs.copyArray(runtimeScene.getObjects("GameOver"), gdjs.Game_32OverCode.GDGameOverObjects1);
            gdjs.copyArray(runtimeScene.getObjects("ReplayText"), gdjs.Game_32OverCode.GDReplayTextObjects1);
            gdjs.copyArray(runtimeScene.getObjects("ScoreBoard"), gdjs.Game_32OverCode.GDScoreBoardObjects1);
            gdjs.copyArray(runtimeScene.getObjects("SecurityCatLose"), gdjs.Game_32OverCode.GDSecurityCatLoseObjects1);
            gdjs.copyArray(runtimeScene.getObjects("YouLoseText"), gdjs.Game_32OverCode.GDYouLoseTextObjects1);
            gdjs.copyArray(runtimeScene.getObjects("home"), gdjs.Game_32OverCode.GDhomeObjects1);
            gdjs.copyArray(runtimeScene.getObjects("replay"), gdjs.Game_32OverCode.GDreplayObjects1);
            gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Game_32OverCode.GDscoreObjects1);
            {
                for (var i = 0, len = gdjs.Game_32OverCode.GDScoreBoardObjects1.length; i < len; ++i) {
                    gdjs.Game_32OverCode.GDScoreBoardObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.Game_32OverCode.GDScoreBoardObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.Game_32OverCode.GDGameOverObjects1.length; i < len; ++i) {
                    gdjs.Game_32OverCode.GDGameOverObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.Game_32OverCode.GDGameOverObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.Game_32OverCode.GDreplayObjects1.length; i < len; ++i) {
                    gdjs.Game_32OverCode.GDreplayObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.Game_32OverCode.GDreplayObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.Game_32OverCode.GDhomeObjects1.length; i < len; ++i) {
                    gdjs.Game_32OverCode.GDhomeObjects1[i].setX((gdjs.Game_32OverCode.GDreplayObjects1.length === 0 ? 0 : gdjs.Game_32OverCode.GDreplayObjects1[0].getPointX("replay")) - 120);
                }
            }{
                for (var i = 0, len = gdjs.Game_32OverCode.GDExitObjects1.length; i < len; ++i) {
                    gdjs.Game_32OverCode.GDExitObjects1[i].setX((gdjs.Game_32OverCode.GDreplayObjects1.length === 0 ? 0 : gdjs.Game_32OverCode.GDreplayObjects1[0].getPointX("replay")) + 120);
                }
            }{
                for (var i = 0, len = gdjs.Game_32OverCode.GDscoreObjects1.length; i < len; ++i) {
                    gdjs.Game_32OverCode.GDscoreObjects1[i].setX((gdjs.Game_32OverCode.GDreplayObjects1.length === 0 ? 0 : gdjs.Game_32OverCode.GDreplayObjects1[0].getPointX("replay")) + 90);
                }
            }{
                for (var i = 0, len = gdjs.Game_32OverCode.GDSecurityCatLoseObjects1.length; i < len; ++i) {
                    gdjs.Game_32OverCode.GDSecurityCatLoseObjects1[i].setX((gdjs.Game_32OverCode.GDreplayObjects1.length === 0 ? 0 : gdjs.Game_32OverCode.GDreplayObjects1[0].getPointX("replay")) - 450);
                }
            }{
                for (var i = 0, len = gdjs.Game_32OverCode.GDBackgroundObjects1.length; i < len; ++i) {
                    gdjs.Game_32OverCode.GDBackgroundObjects1[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
                }
            }{
                for (var i = 0, len = gdjs.Game_32OverCode.GDYouLoseTextObjects1.length; i < len; ++i) {
                    gdjs.Game_32OverCode.GDYouLoseTextObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.Game_32OverCode.GDYouLoseTextObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.Game_32OverCode.GDReplayTextObjects1.length; i < len; ++i) {
                    gdjs.Game_32OverCode.GDReplayTextObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.Game_32OverCode.GDReplayTextObjects1[i].getWidth() / 2);
                }
            }
        }
    }
};gdjs.Game_32OverCode.eventsList2 = function (runtimeScene) {

    {

        gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
        {
            gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) <= 0;
        }if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("ScoreBoard"), gdjs.Game_32OverCode.GDScoreBoardObjects2);
            {
                for (var i = 0, len = gdjs.Game_32OverCode.GDScoreBoardObjects2.length; i < len; ++i) {
                    gdjs.Game_32OverCode.GDScoreBoardObjects2[i].setAnimation(0);
                }
            }{
                gdjs.evtTools.camera.showLayer(runtimeScene, "YouLose");
            }{
                gdjs.evtTools.camera.hideLayer(runtimeScene, "YouWin");
            }
        }
    }

    {

        gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
        gdjs.Game_32OverCode.condition1IsTrue_0.val = false;
        {
            gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 5;
        }if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
            {
                {
                    gdjs.Game_32OverCode.conditionTrue_1 = gdjs.Game_32OverCode.condition1IsTrue_0;
                    gdjs.Game_32OverCode.condition0IsTrue_1.val = false;
                    {
                        gdjs.Game_32OverCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) <= 9;
                    }gdjs.Game_32OverCode.conditionTrue_1.val = true && gdjs.Game_32OverCode.condition0IsTrue_1.val;
                }
            }
        }
        if (gdjs.Game_32OverCode.condition1IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("ScoreBoard"), gdjs.Game_32OverCode.GDScoreBoardObjects2);
            {
                for (var i = 0, len = gdjs.Game_32OverCode.GDScoreBoardObjects2.length; i < len; ++i) {
                    gdjs.Game_32OverCode.GDScoreBoardObjects2[i].setAnimation(2);
                }
            }{
                gdjs.evtTools.camera.showLayer(runtimeScene, "YouLose");
            }{
                gdjs.evtTools.camera.hideLayer(runtimeScene, "YouWin");
            }
        }
    }

    {

        gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
        gdjs.Game_32OverCode.condition1IsTrue_0.val = false;
        {
            gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 0;
        }if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
            {
                {
                    gdjs.Game_32OverCode.conditionTrue_1 = gdjs.Game_32OverCode.condition1IsTrue_0;
                    gdjs.Game_32OverCode.condition0IsTrue_1.val = false;
                    {
                        gdjs.Game_32OverCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) <= 5;
                    }gdjs.Game_32OverCode.conditionTrue_1.val = true && gdjs.Game_32OverCode.condition0IsTrue_1.val;
                }
            }
        }
        if (gdjs.Game_32OverCode.condition1IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("ScoreBoard"), gdjs.Game_32OverCode.GDScoreBoardObjects1);
            {
                for (var i = 0, len = gdjs.Game_32OverCode.GDScoreBoardObjects1.length; i < len; ++i) {
                    gdjs.Game_32OverCode.GDScoreBoardObjects1[i].setAnimation(1);
                }
            }{
                gdjs.evtTools.camera.showLayer(runtimeScene, "YouLose");
            }{
                gdjs.evtTools.camera.hideLayer(runtimeScene, "YouWin");
            }
        }
    }
};gdjs.Game_32OverCode.eventsList3 = function (runtimeScene) {

    {

        {
            gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Game_32OverCode.GDscoreObjects2);
            {
                for (var i = 0, len = gdjs.Game_32OverCode.GDscoreObjects2.length; i < len; ++i) {
                    gdjs.Game_32OverCode.GDscoreObjects2[i].setBBText("[shadow=black]" + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) + "[/shadow]");
                }
            }
        }
    }

    {

        gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
        {
            gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        }if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.Game_32OverCode.GDpointerObjects1);
            {
                runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
            }{
                for (var i = 0, len = gdjs.Game_32OverCode.GDpointerObjects1.length; i < len; ++i) {
                    gdjs.Game_32OverCode.GDpointerObjects1[i].hide();
                }
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }
            {
                //Subevents
                gdjs.Game_32OverCode.eventsList2(runtimeScene);
            } //End of subevents
        }
    }
};gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDhomeObjects2Objects = Hashtable.newFrom({ "home": gdjs.Game_32OverCode.GDhomeObjects2 });gdjs.Game_32OverCode.eventsList4 = function (runtimeScene) {

    {

        gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
        {
            gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
            gdjs.copyArray(gdjs.Game_32OverCode.GDpointerObjects2, gdjs.Game_32OverCode.GDpointerObjects3);

            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.Game_32OverCode.GDpointerObjects3.length; i < len; ++i) {
                    gdjs.Game_32OverCode.GDpointerObjects3[i].hide();
                }
            }{
                gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 3);
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
            }
        }
    }

    {

        gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
        gdjs.Game_32OverCode.condition1IsTrue_0.val = false;
        {
            gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
            {
                gdjs.Game_32OverCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.Game_32OverCode.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 3);
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
            }
        }
    }
};gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDreplayObjects2Objects = Hashtable.newFrom({ "replay": gdjs.Game_32OverCode.GDreplayObjects2 });gdjs.Game_32OverCode.eventsList5 = function (runtimeScene) {

    {

        gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
        {
            gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
            gdjs.copyArray(gdjs.Game_32OverCode.GDpointerObjects2, gdjs.Game_32OverCode.GDpointerObjects3);

            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.Game_32OverCode.GDpointerObjects3.length; i < len; ++i) {
                    gdjs.Game_32OverCode.GDpointerObjects3[i].hide();
                }
            }{
                gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 3);
            }{
                gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
            }
        }
    }

    {

        gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
        gdjs.Game_32OverCode.condition1IsTrue_0.val = false;
        {
            gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
            {
                gdjs.Game_32OverCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.Game_32OverCode.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
            }{
                gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 3);
            }{
                gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
            }
        }
    }
};gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDExitObjects2Objects = Hashtable.newFrom({ "Exit": gdjs.Game_32OverCode.GDExitObjects2 });gdjs.Game_32OverCode.userFunc0xfbff20 = function (runtimeScene) {
    "use strict";

    window.close();
};
gdjs.Game_32OverCode.eventsList6 = function (runtimeScene) {

    {

        gdjs.Game_32OverCode.userFunc0xfbff20(runtimeScene);
    }
};gdjs.Game_32OverCode.userFunc0xafc728 = function (runtimeScene) {
    "use strict";

    window.close();
};
gdjs.Game_32OverCode.eventsList7 = function (runtimeScene) {

    {

        gdjs.Game_32OverCode.userFunc0xafc728(runtimeScene);
    }
};gdjs.Game_32OverCode.eventsList8 = function (runtimeScene) {

    {

        gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
        {
            gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
            gdjs.copyArray(gdjs.Game_32OverCode.GDpointerObjects2, gdjs.Game_32OverCode.GDpointerObjects3);

            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.Game_32OverCode.GDpointerObjects3.length; i < len; ++i) {
                    gdjs.Game_32OverCode.GDpointerObjects3[i].hide();
                }
            }
            {
                //Subevents
                gdjs.Game_32OverCode.eventsList6(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
        gdjs.Game_32OverCode.condition1IsTrue_0.val = false;
        {
            gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
            {
                gdjs.Game_32OverCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.Game_32OverCode.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }
            {
                //Subevents
                gdjs.Game_32OverCode.eventsList7(runtimeScene);
            } //End of subevents
        }
    }
};gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDreplayObjects2Objects = Hashtable.newFrom({ "replay": gdjs.Game_32OverCode.GDreplayObjects2 });gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDhomeObjects2Objects = Hashtable.newFrom({ "home": gdjs.Game_32OverCode.GDhomeObjects2 });gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDExitObjects2Objects = Hashtable.newFrom({ "Exit": gdjs.Game_32OverCode.GDExitObjects2 });gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDreplayObjects1Objects = Hashtable.newFrom({ "replay": gdjs.Game_32OverCode.GDreplayObjects1 });gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDExitObjects1Objects = Hashtable.newFrom({ "Exit": gdjs.Game_32OverCode.GDExitObjects1 });gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDhomeObjects1Objects = Hashtable.newFrom({ "home": gdjs.Game_32OverCode.GDhomeObjects1 });gdjs.Game_32OverCode.eventsList9 = function (runtimeScene) {

    {

        gdjs.copyArray(runtimeScene.getObjects("home"), gdjs.Game_32OverCode.GDhomeObjects2);

        gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
        {
            gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDhomeObjects2Objects, runtimeScene, true, false);
        }if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.Game_32OverCode.GDhomeObjects2 */
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.Game_32OverCode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.Game_32OverCode.GDhomeObjects2.length; i < len; ++i) {
                    gdjs.Game_32OverCode.GDhomeObjects2[i].setAnimation(1);
                }
            }{
                for (var i = 0, len = gdjs.Game_32OverCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.Game_32OverCode.GDpointerObjects2[i].hide(false);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }
            {
                //Subevents
                gdjs.Game_32OverCode.eventsList4(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("replay"), gdjs.Game_32OverCode.GDreplayObjects2);

        gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
        {
            gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDreplayObjects2Objects, runtimeScene, true, false);
        }if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.Game_32OverCode.GDpointerObjects2);
            /* Reuse gdjs.Game_32OverCode.GDreplayObjects2 */
            {
                for (var i = 0, len = gdjs.Game_32OverCode.GDreplayObjects2.length; i < len; ++i) {
                    gdjs.Game_32OverCode.GDreplayObjects2[i].setAnimation(1);
                }
            }{
                for (var i = 0, len = gdjs.Game_32OverCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.Game_32OverCode.GDpointerObjects2[i].hide(false);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }
            {
                //Subevents
                gdjs.Game_32OverCode.eventsList5(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.Game_32OverCode.GDExitObjects2);

        gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
        {
            gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDExitObjects2Objects, runtimeScene, true, false);
        }if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.Game_32OverCode.GDExitObjects2 */
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.Game_32OverCode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.Game_32OverCode.GDExitObjects2.length; i < len; ++i) {
                    gdjs.Game_32OverCode.GDExitObjects2[i].setAnimation(1);
                }
            }{
                for (var i = 0, len = gdjs.Game_32OverCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.Game_32OverCode.GDpointerObjects2[i].hide(false);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }
            {
                //Subevents
                gdjs.Game_32OverCode.eventsList8(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("replay"), gdjs.Game_32OverCode.GDreplayObjects2);

        gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
        {
            gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDreplayObjects2Objects, runtimeScene, true, true);
        }if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.Game_32OverCode.GDreplayObjects2 */
            {
                for (var i = 0, len = gdjs.Game_32OverCode.GDreplayObjects2.length; i < len; ++i) {
                    gdjs.Game_32OverCode.GDreplayObjects2[i].setAnimation(0);
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("home"), gdjs.Game_32OverCode.GDhomeObjects2);

        gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
        {
            gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDhomeObjects2Objects, runtimeScene, true, true);
        }if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.Game_32OverCode.GDhomeObjects2 */
            {
                for (var i = 0, len = gdjs.Game_32OverCode.GDhomeObjects2.length; i < len; ++i) {
                    gdjs.Game_32OverCode.GDhomeObjects2[i].setAnimation(0);
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.Game_32OverCode.GDExitObjects2);

        gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
        {
            gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDExitObjects2Objects, runtimeScene, true, true);
        }if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.Game_32OverCode.GDExitObjects2 */
            {
                for (var i = 0, len = gdjs.Game_32OverCode.GDExitObjects2.length; i < len; ++i) {
                    gdjs.Game_32OverCode.GDExitObjects2[i].setAnimation(0);
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.Game_32OverCode.GDExitObjects1);
        gdjs.copyArray(runtimeScene.getObjects("home"), gdjs.Game_32OverCode.GDhomeObjects1);
        gdjs.copyArray(runtimeScene.getObjects("replay"), gdjs.Game_32OverCode.GDreplayObjects1);

        gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
        gdjs.Game_32OverCode.condition1IsTrue_0.val = false;
        gdjs.Game_32OverCode.condition2IsTrue_0.val = false;
        {
            gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDreplayObjects1Objects, runtimeScene, true, true);
        }if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
            {
                gdjs.Game_32OverCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDExitObjects1Objects, runtimeScene, true, true);
            }if (gdjs.Game_32OverCode.condition1IsTrue_0.val) {
                {
                    gdjs.Game_32OverCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDhomeObjects1Objects, runtimeScene, true, true);
                }
            }
        }
        if (gdjs.Game_32OverCode.condition2IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.Game_32OverCode.GDpointerObjects1);
            {
                for (var i = 0, len = gdjs.Game_32OverCode.GDpointerObjects1.length; i < len; ++i) {
                    gdjs.Game_32OverCode.GDpointerObjects1[i].hide();
                }
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }
        }
    }
};gdjs.Game_32OverCode.eventsList10 = function (runtimeScene) {

    {

        gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
        {
            gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        }if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 1);
            }{
                gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "The Jazz Logo.mp3", 3, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)), 1);
            }
            {
                //Subevents
                gdjs.Game_32OverCode.eventsList0(runtimeScene);
            } //End of subevents
        }
    }

    {

        {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.Game_32OverCode.GDpointerObjects1);
            {
                for (var i = 0, len = gdjs.Game_32OverCode.GDpointerObjects1.length; i < len; ++i) {
                    gdjs.Game_32OverCode.GDpointerObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
                }
            }
        }
    }

    {

        gdjs.Game_32OverCode.eventsList1(runtimeScene);
    }

    {

        gdjs.Game_32OverCode.eventsList3(runtimeScene);
    }

    {

        gdjs.Game_32OverCode.eventsList9(runtimeScene);
    }
};

gdjs.Game_32OverCode.func = function (runtimeScene) {
    runtimeScene.getOnceTriggers().startNewFrame();

    gdjs.Game_32OverCode.GDBackgroundObjects1.length = 0;
    gdjs.Game_32OverCode.GDBackgroundObjects2.length = 0;
    gdjs.Game_32OverCode.GDBackgroundObjects3.length = 0;
    gdjs.Game_32OverCode.GDBackgroundObjects4.length = 0;
    gdjs.Game_32OverCode.GDGameOverObjects1.length = 0;
    gdjs.Game_32OverCode.GDGameOverObjects2.length = 0;
    gdjs.Game_32OverCode.GDGameOverObjects3.length = 0;
    gdjs.Game_32OverCode.GDGameOverObjects4.length = 0;
    gdjs.Game_32OverCode.GDSecurityCatLoseObjects1.length = 0;
    gdjs.Game_32OverCode.GDSecurityCatLoseObjects2.length = 0;
    gdjs.Game_32OverCode.GDSecurityCatLoseObjects3.length = 0;
    gdjs.Game_32OverCode.GDSecurityCatLoseObjects4.length = 0;
    gdjs.Game_32OverCode.GDScoreBoardObjects1.length = 0;
    gdjs.Game_32OverCode.GDScoreBoardObjects2.length = 0;
    gdjs.Game_32OverCode.GDScoreBoardObjects3.length = 0;
    gdjs.Game_32OverCode.GDScoreBoardObjects4.length = 0;
    gdjs.Game_32OverCode.GDcloudObjects1.length = 0;
    gdjs.Game_32OverCode.GDcloudObjects2.length = 0;
    gdjs.Game_32OverCode.GDcloudObjects3.length = 0;
    gdjs.Game_32OverCode.GDcloudObjects4.length = 0;
    gdjs.Game_32OverCode.GDcloud2Objects1.length = 0;
    gdjs.Game_32OverCode.GDcloud2Objects2.length = 0;
    gdjs.Game_32OverCode.GDcloud2Objects3.length = 0;
    gdjs.Game_32OverCode.GDcloud2Objects4.length = 0;
    gdjs.Game_32OverCode.GDcloud3Objects1.length = 0;
    gdjs.Game_32OverCode.GDcloud3Objects2.length = 0;
    gdjs.Game_32OverCode.GDcloud3Objects3.length = 0;
    gdjs.Game_32OverCode.GDcloud3Objects4.length = 0;
    gdjs.Game_32OverCode.GDhomeObjects1.length = 0;
    gdjs.Game_32OverCode.GDhomeObjects2.length = 0;
    gdjs.Game_32OverCode.GDhomeObjects3.length = 0;
    gdjs.Game_32OverCode.GDhomeObjects4.length = 0;
    gdjs.Game_32OverCode.GDreplayObjects1.length = 0;
    gdjs.Game_32OverCode.GDreplayObjects2.length = 0;
    gdjs.Game_32OverCode.GDreplayObjects3.length = 0;
    gdjs.Game_32OverCode.GDreplayObjects4.length = 0;
    gdjs.Game_32OverCode.GDpointerObjects1.length = 0;
    gdjs.Game_32OverCode.GDpointerObjects2.length = 0;
    gdjs.Game_32OverCode.GDpointerObjects3.length = 0;
    gdjs.Game_32OverCode.GDpointerObjects4.length = 0;
    gdjs.Game_32OverCode.GDExitObjects1.length = 0;
    gdjs.Game_32OverCode.GDExitObjects2.length = 0;
    gdjs.Game_32OverCode.GDExitObjects3.length = 0;
    gdjs.Game_32OverCode.GDExitObjects4.length = 0;
    gdjs.Game_32OverCode.GDTextBoxObjects1.length = 0;
    gdjs.Game_32OverCode.GDTextBoxObjects2.length = 0;
    gdjs.Game_32OverCode.GDTextBoxObjects3.length = 0;
    gdjs.Game_32OverCode.GDTextBoxObjects4.length = 0;
    gdjs.Game_32OverCode.GDYouLoseTextObjects1.length = 0;
    gdjs.Game_32OverCode.GDYouLoseTextObjects2.length = 0;
    gdjs.Game_32OverCode.GDYouLoseTextObjects3.length = 0;
    gdjs.Game_32OverCode.GDYouLoseTextObjects4.length = 0;
    gdjs.Game_32OverCode.GDSpeechBubbleObjects1.length = 0;
    gdjs.Game_32OverCode.GDSpeechBubbleObjects2.length = 0;
    gdjs.Game_32OverCode.GDSpeechBubbleObjects3.length = 0;
    gdjs.Game_32OverCode.GDSpeechBubbleObjects4.length = 0;
    gdjs.Game_32OverCode.GDReplayTextObjects1.length = 0;
    gdjs.Game_32OverCode.GDReplayTextObjects2.length = 0;
    gdjs.Game_32OverCode.GDReplayTextObjects3.length = 0;
    gdjs.Game_32OverCode.GDReplayTextObjects4.length = 0;
    gdjs.Game_32OverCode.GDscoreObjects1.length = 0;
    gdjs.Game_32OverCode.GDscoreObjects2.length = 0;
    gdjs.Game_32OverCode.GDscoreObjects3.length = 0;
    gdjs.Game_32OverCode.GDscoreObjects4.length = 0;

    gdjs.Game_32OverCode.eventsList10(runtimeScene);
    return;
};

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;