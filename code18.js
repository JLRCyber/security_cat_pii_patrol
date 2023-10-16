"use strict";

gdjs.You_32WinCode = {};
gdjs.You_32WinCode.GDBackgroundObjects1 = [];
gdjs.You_32WinCode.GDBackgroundObjects2 = [];
gdjs.You_32WinCode.GDBackgroundObjects3 = [];
gdjs.You_32WinCode.GDBackgroundObjects4 = [];
gdjs.You_32WinCode.GDScoreBoardObjects1 = [];
gdjs.You_32WinCode.GDScoreBoardObjects2 = [];
gdjs.You_32WinCode.GDScoreBoardObjects3 = [];
gdjs.You_32WinCode.GDScoreBoardObjects4 = [];
gdjs.You_32WinCode.GDcloudObjects1 = [];
gdjs.You_32WinCode.GDcloudObjects2 = [];
gdjs.You_32WinCode.GDcloudObjects3 = [];
gdjs.You_32WinCode.GDcloudObjects4 = [];
gdjs.You_32WinCode.GDcloud2Objects1 = [];
gdjs.You_32WinCode.GDcloud2Objects2 = [];
gdjs.You_32WinCode.GDcloud2Objects3 = [];
gdjs.You_32WinCode.GDcloud2Objects4 = [];
gdjs.You_32WinCode.GDcloud3Objects1 = [];
gdjs.You_32WinCode.GDcloud3Objects2 = [];
gdjs.You_32WinCode.GDcloud3Objects3 = [];
gdjs.You_32WinCode.GDcloud3Objects4 = [];
gdjs.You_32WinCode.GDhomeObjects1 = [];
gdjs.You_32WinCode.GDhomeObjects2 = [];
gdjs.You_32WinCode.GDhomeObjects3 = [];
gdjs.You_32WinCode.GDhomeObjects4 = [];
gdjs.You_32WinCode.GDreplayObjects1 = [];
gdjs.You_32WinCode.GDreplayObjects2 = [];
gdjs.You_32WinCode.GDreplayObjects3 = [];
gdjs.You_32WinCode.GDreplayObjects4 = [];
gdjs.You_32WinCode.GDExitObjects1 = [];
gdjs.You_32WinCode.GDExitObjects2 = [];
gdjs.You_32WinCode.GDExitObjects3 = [];
gdjs.You_32WinCode.GDExitObjects4 = [];
gdjs.You_32WinCode.GDWinnerObjects1 = [];
gdjs.You_32WinCode.GDWinnerObjects2 = [];
gdjs.You_32WinCode.GDWinnerObjects3 = [];
gdjs.You_32WinCode.GDWinnerObjects4 = [];
gdjs.You_32WinCode.GDSecurityCatWinObjects1 = [];
gdjs.You_32WinCode.GDSecurityCatWinObjects2 = [];
gdjs.You_32WinCode.GDSecurityCatWinObjects3 = [];
gdjs.You_32WinCode.GDSecurityCatWinObjects4 = [];
gdjs.You_32WinCode.GDpointerObjects1 = [];
gdjs.You_32WinCode.GDpointerObjects2 = [];
gdjs.You_32WinCode.GDpointerObjects3 = [];
gdjs.You_32WinCode.GDpointerObjects4 = [];
gdjs.You_32WinCode.GDKeepPlayingTextObjects1 = [];
gdjs.You_32WinCode.GDKeepPlayingTextObjects2 = [];
gdjs.You_32WinCode.GDKeepPlayingTextObjects3 = [];
gdjs.You_32WinCode.GDKeepPlayingTextObjects4 = [];
gdjs.You_32WinCode.GDContinuePlayObjects1 = [];
gdjs.You_32WinCode.GDContinuePlayObjects2 = [];
gdjs.You_32WinCode.GDContinuePlayObjects3 = [];
gdjs.You_32WinCode.GDContinuePlayObjects4 = [];
gdjs.You_32WinCode.GDcongratsTextObjects1 = [];
gdjs.You_32WinCode.GDcongratsTextObjects2 = [];
gdjs.You_32WinCode.GDcongratsTextObjects3 = [];
gdjs.You_32WinCode.GDcongratsTextObjects4 = [];
gdjs.You_32WinCode.GDTextBoxObjects1 = [];
gdjs.You_32WinCode.GDTextBoxObjects2 = [];
gdjs.You_32WinCode.GDTextBoxObjects3 = [];
gdjs.You_32WinCode.GDTextBoxObjects4 = [];
gdjs.You_32WinCode.GDhovertextObjects1 = [];
gdjs.You_32WinCode.GDhovertextObjects2 = [];
gdjs.You_32WinCode.GDhovertextObjects3 = [];
gdjs.You_32WinCode.GDhovertextObjects4 = [];
gdjs.You_32WinCode.GDSpeechBubbleObjects1 = [];
gdjs.You_32WinCode.GDSpeechBubbleObjects2 = [];
gdjs.You_32WinCode.GDSpeechBubbleObjects3 = [];
gdjs.You_32WinCode.GDSpeechBubbleObjects4 = [];
gdjs.You_32WinCode.GDscoreObjects1 = [];
gdjs.You_32WinCode.GDscoreObjects2 = [];
gdjs.You_32WinCode.GDscoreObjects3 = [];
gdjs.You_32WinCode.GDscoreObjects4 = [];

gdjs.You_32WinCode.conditionTrue_0 = { val: false };
gdjs.You_32WinCode.condition0IsTrue_0 = { val: false };
gdjs.You_32WinCode.condition1IsTrue_0 = { val: false };
gdjs.You_32WinCode.condition2IsTrue_0 = { val: false };
gdjs.You_32WinCode.condition3IsTrue_0 = { val: false };
gdjs.You_32WinCode.condition4IsTrue_0 = { val: false };

gdjs.You_32WinCode.eventsList0 = function (runtimeScene) {

    {

        gdjs.You_32WinCode.condition0IsTrue_0.val = false;
        {
            gdjs.You_32WinCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.You_32WinCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
            }
        }
    }
};gdjs.You_32WinCode.userFunc0x1314020 = function (runtimeScene) {
    "use strict";

    setScormScore(100);
    saveScormScore();
    //closeScorm();
};
gdjs.You_32WinCode.eventsList1 = function (runtimeScene) {

    {

        gdjs.You_32WinCode.userFunc0x1314020(runtimeScene);
    }
};gdjs.You_32WinCode.eventsList2 = function (runtimeScene) {

    {

        gdjs.You_32WinCode.condition0IsTrue_0.val = false;
        {
            gdjs.You_32WinCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), true);
        }if (gdjs.You_32WinCode.condition0IsTrue_0.val) {

            {
                //Subevents
                gdjs.You_32WinCode.eventsList1(runtimeScene);
            } //End of subevents
        }
    }
};gdjs.You_32WinCode.eventsList3 = function (runtimeScene) {

    {

        {
            gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.You_32WinCode.GDBackgroundObjects1);
            gdjs.copyArray(runtimeScene.getObjects("ContinuePlay"), gdjs.You_32WinCode.GDContinuePlayObjects1);
            gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.You_32WinCode.GDExitObjects1);
            gdjs.copyArray(runtimeScene.getObjects("ScoreBoard"), gdjs.You_32WinCode.GDScoreBoardObjects1);
            gdjs.copyArray(runtimeScene.getObjects("SecurityCatWin"), gdjs.You_32WinCode.GDSecurityCatWinObjects1);
            gdjs.copyArray(runtimeScene.getObjects("Winner"), gdjs.You_32WinCode.GDWinnerObjects1);
            gdjs.copyArray(runtimeScene.getObjects("congratsText"), gdjs.You_32WinCode.GDcongratsTextObjects1);
            gdjs.copyArray(runtimeScene.getObjects("home"), gdjs.You_32WinCode.GDhomeObjects1);
            gdjs.copyArray(runtimeScene.getObjects("hovertext"), gdjs.You_32WinCode.GDhovertextObjects1);
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.You_32WinCode.GDpointerObjects1);
            gdjs.copyArray(runtimeScene.getObjects("replay"), gdjs.You_32WinCode.GDreplayObjects1);
            gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.You_32WinCode.GDscoreObjects1);
            {
                for (var i = 0, len = gdjs.You_32WinCode.GDpointerObjects1.length; i < len; ++i) {
                    gdjs.You_32WinCode.GDpointerObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
                }
            }{
                for (var i = 0, len = gdjs.You_32WinCode.GDScoreBoardObjects1.length; i < len; ++i) {
                    gdjs.You_32WinCode.GDScoreBoardObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.You_32WinCode.GDScoreBoardObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.You_32WinCode.GDcongratsTextObjects1.length; i < len; ++i) {
                    gdjs.You_32WinCode.GDcongratsTextObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.You_32WinCode.GDcongratsTextObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.You_32WinCode.GDWinnerObjects1.length; i < len; ++i) {
                    gdjs.You_32WinCode.GDWinnerObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.You_32WinCode.GDWinnerObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.You_32WinCode.GDreplayObjects1.length; i < len; ++i) {
                    gdjs.You_32WinCode.GDreplayObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.You_32WinCode.GDreplayObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.You_32WinCode.GDhomeObjects1.length; i < len; ++i) {
                    gdjs.You_32WinCode.GDhomeObjects1[i].setX((gdjs.You_32WinCode.GDreplayObjects1.length === 0 ? 0 : gdjs.You_32WinCode.GDreplayObjects1[0].getPointX("replay")) - 120);
                }
            }{
                for (var i = 0, len = gdjs.You_32WinCode.GDExitObjects1.length; i < len; ++i) {
                    gdjs.You_32WinCode.GDExitObjects1[i].setX((gdjs.You_32WinCode.GDreplayObjects1.length === 0 ? 0 : gdjs.You_32WinCode.GDreplayObjects1[0].getPointX("replay")) + 120);
                }
            }{
                for (var i = 0, len = gdjs.You_32WinCode.GDscoreObjects1.length; i < len; ++i) {
                    gdjs.You_32WinCode.GDscoreObjects1[i].setX((gdjs.You_32WinCode.GDreplayObjects1.length === 0 ? 0 : gdjs.You_32WinCode.GDreplayObjects1[0].getPointX("replay")) + 90);
                }
            }{
                for (var i = 0, len = gdjs.You_32WinCode.GDSecurityCatWinObjects1.length; i < len; ++i) {
                    gdjs.You_32WinCode.GDSecurityCatWinObjects1[i].setX((gdjs.You_32WinCode.GDreplayObjects1.length === 0 ? 0 : gdjs.You_32WinCode.GDreplayObjects1[0].getPointX("replay")) - 450);
                }
            }{
                for (var i = 0, len = gdjs.You_32WinCode.GDBackgroundObjects1.length; i < len; ++i) {
                    gdjs.You_32WinCode.GDBackgroundObjects1[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
                }
            }{
                for (var i = 0, len = gdjs.You_32WinCode.GDContinuePlayObjects1.length; i < len; ++i) {
                    gdjs.You_32WinCode.GDContinuePlayObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.You_32WinCode.GDContinuePlayObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.You_32WinCode.GDhovertextObjects1.length; i < len; ++i) {
                    gdjs.You_32WinCode.GDhovertextObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.You_32WinCode.GDhovertextObjects1[i].getWidth() / 2);
                }
            }
        }
    }
};gdjs.You_32WinCode.eventsList4 = function (runtimeScene) {

    {

        {
            gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.You_32WinCode.GDscoreObjects2);
            {
                for (var i = 0, len = gdjs.You_32WinCode.GDscoreObjects2.length; i < len; ++i) {
                    gdjs.You_32WinCode.GDscoreObjects2[i].setBBText("[shadow=black]" + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) + "[/shadow]");
                }
            }
        }
    }

    {

        gdjs.You_32WinCode.condition0IsTrue_0.val = false;
        {
            gdjs.You_32WinCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        }if (gdjs.You_32WinCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("ScoreBoard"), gdjs.You_32WinCode.GDScoreBoardObjects1);
            {
                runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
            }{
                for (var i = 0, len = gdjs.You_32WinCode.GDScoreBoardObjects1.length; i < len; ++i) {
                    gdjs.You_32WinCode.GDScoreBoardObjects1[i].setAnimation(3);
                }
            }
        }
    }
};gdjs.You_32WinCode.mapOfGDgdjs_46You_9532WinCode_46GDhomeObjects2Objects = Hashtable.newFrom({ "home": gdjs.You_32WinCode.GDhomeObjects2 });gdjs.You_32WinCode.eventsList5 = function (runtimeScene) {

    {

        gdjs.You_32WinCode.condition0IsTrue_0.val = false;
        {
            gdjs.You_32WinCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.You_32WinCode.condition0IsTrue_0.val) {
            gdjs.copyArray(gdjs.You_32WinCode.GDpointerObjects2, gdjs.You_32WinCode.GDpointerObjects3);

            {
                gdjs.evtTools.common.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), false);
            }{
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.You_32WinCode.GDpointerObjects3.length; i < len; ++i) {
                    gdjs.You_32WinCode.GDpointerObjects3[i].hide();
                }
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
            }
        }
    }

    {

        gdjs.You_32WinCode.condition0IsTrue_0.val = false;
        gdjs.You_32WinCode.condition1IsTrue_0.val = false;
        {
            gdjs.You_32WinCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.You_32WinCode.condition0IsTrue_0.val) {
            {
                gdjs.You_32WinCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.You_32WinCode.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.common.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), false);
            }{
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
            }
        }
    }
};gdjs.You_32WinCode.mapOfGDgdjs_46You_9532WinCode_46GDreplayObjects2Objects = Hashtable.newFrom({ "replay": gdjs.You_32WinCode.GDreplayObjects2 });gdjs.You_32WinCode.eventsList6 = function (runtimeScene) {

    {

        gdjs.You_32WinCode.condition0IsTrue_0.val = false;
        {
            gdjs.You_32WinCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.You_32WinCode.condition0IsTrue_0.val) {
            gdjs.copyArray(gdjs.You_32WinCode.GDpointerObjects2, gdjs.You_32WinCode.GDpointerObjects3);

            {
                gdjs.evtTools.common.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), false);
            }{
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.You_32WinCode.GDpointerObjects3.length; i < len; ++i) {
                    gdjs.You_32WinCode.GDpointerObjects3[i].hide();
                }
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
            }
        }
    }

    {

        gdjs.You_32WinCode.condition0IsTrue_0.val = false;
        gdjs.You_32WinCode.condition1IsTrue_0.val = false;
        {
            gdjs.You_32WinCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.You_32WinCode.condition0IsTrue_0.val) {
            {
                gdjs.You_32WinCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.You_32WinCode.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.common.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), false);
            }{
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
            }
        }
    }
};gdjs.You_32WinCode.mapOfGDgdjs_46You_9532WinCode_46GDExitObjects2Objects = Hashtable.newFrom({ "Exit": gdjs.You_32WinCode.GDExitObjects2 });gdjs.You_32WinCode.userFunc0xfc1700 = function (runtimeScene) {
    "use strict";

    window.close();
};
gdjs.You_32WinCode.eventsList7 = function (runtimeScene) {

    {

        gdjs.You_32WinCode.userFunc0xfc1700(runtimeScene);
    }
};gdjs.You_32WinCode.userFunc0xfbb600 = function (runtimeScene) {
    "use strict";

    window.close();
};
gdjs.You_32WinCode.eventsList8 = function (runtimeScene) {

    {

        gdjs.You_32WinCode.userFunc0xfbb600(runtimeScene);
    }
};gdjs.You_32WinCode.eventsList9 = function (runtimeScene) {

    {

        gdjs.You_32WinCode.condition0IsTrue_0.val = false;
        {
            gdjs.You_32WinCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.You_32WinCode.condition0IsTrue_0.val) {
            gdjs.copyArray(gdjs.You_32WinCode.GDpointerObjects2, gdjs.You_32WinCode.GDpointerObjects3);

            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.You_32WinCode.GDpointerObjects3.length; i < len; ++i) {
                    gdjs.You_32WinCode.GDpointerObjects3[i].hide();
                }
            }
            {
                //Subevents
                gdjs.You_32WinCode.eventsList7(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.You_32WinCode.condition0IsTrue_0.val = false;
        gdjs.You_32WinCode.condition1IsTrue_0.val = false;
        {
            gdjs.You_32WinCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.You_32WinCode.condition0IsTrue_0.val) {
            {
                gdjs.You_32WinCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.You_32WinCode.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }
            {
                //Subevents
                gdjs.You_32WinCode.eventsList8(runtimeScene);
            } //End of subevents
        }
    }
};gdjs.You_32WinCode.mapOfGDgdjs_46You_9532WinCode_46GDreplayObjects2Objects = Hashtable.newFrom({ "replay": gdjs.You_32WinCode.GDreplayObjects2 });gdjs.You_32WinCode.mapOfGDgdjs_46You_9532WinCode_46GDhomeObjects2Objects = Hashtable.newFrom({ "home": gdjs.You_32WinCode.GDhomeObjects2 });gdjs.You_32WinCode.mapOfGDgdjs_46You_9532WinCode_46GDExitObjects2Objects = Hashtable.newFrom({ "Exit": gdjs.You_32WinCode.GDExitObjects2 });gdjs.You_32WinCode.mapOfGDgdjs_46You_9532WinCode_46GDContinuePlayObjects2Objects = Hashtable.newFrom({ "ContinuePlay": gdjs.You_32WinCode.GDContinuePlayObjects2 });gdjs.You_32WinCode.mapOfGDgdjs_46You_9532WinCode_46GDreplayObjects2Objects = Hashtable.newFrom({ "replay": gdjs.You_32WinCode.GDreplayObjects2 });gdjs.You_32WinCode.mapOfGDgdjs_46You_9532WinCode_46GDExitObjects2Objects = Hashtable.newFrom({ "Exit": gdjs.You_32WinCode.GDExitObjects2 });gdjs.You_32WinCode.mapOfGDgdjs_46You_9532WinCode_46GDhomeObjects2Objects = Hashtable.newFrom({ "home": gdjs.You_32WinCode.GDhomeObjects2 });gdjs.You_32WinCode.mapOfGDgdjs_46You_9532WinCode_46GDContinuePlayObjects2Objects = Hashtable.newFrom({ "ContinuePlay": gdjs.You_32WinCode.GDContinuePlayObjects2 });gdjs.You_32WinCode.mapOfGDgdjs_46You_9532WinCode_46GDContinuePlayObjects1Objects = Hashtable.newFrom({ "ContinuePlay": gdjs.You_32WinCode.GDContinuePlayObjects1 });gdjs.You_32WinCode.eventsList10 = function (runtimeScene) {

    {

        gdjs.You_32WinCode.condition0IsTrue_0.val = false;
        {
            gdjs.You_32WinCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.You_32WinCode.condition0IsTrue_0.val) {
            gdjs.copyArray(gdjs.You_32WinCode.GDpointerObjects1, gdjs.You_32WinCode.GDpointerObjects2);

            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 10, 1);
            }{
                gdjs.evtTools.common.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.You_32WinCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.You_32WinCode.GDpointerObjects2[i].hide();
                }
            }{
                gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 3);
            }{
                gdjs.evtTools.runtimeScene.popScene(runtimeScene);
            }
        }
    }

    {

        gdjs.You_32WinCode.condition0IsTrue_0.val = false;
        gdjs.You_32WinCode.condition1IsTrue_0.val = false;
        {
            gdjs.You_32WinCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.You_32WinCode.condition0IsTrue_0.val) {
            {
                gdjs.You_32WinCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.You_32WinCode.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 10, 1);
            }{
                gdjs.evtTools.common.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
            }{
                gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 3);
            }{
                gdjs.evtTools.runtimeScene.popScene(runtimeScene);
            }
        }
    }
};gdjs.You_32WinCode.eventsList11 = function (runtimeScene) {

    {

        gdjs.copyArray(runtimeScene.getObjects("home"), gdjs.You_32WinCode.GDhomeObjects2);

        gdjs.You_32WinCode.condition0IsTrue_0.val = false;
        {
            gdjs.You_32WinCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.You_32WinCode.mapOfGDgdjs_46You_9532WinCode_46GDhomeObjects2Objects, runtimeScene, true, false);
        }if (gdjs.You_32WinCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.You_32WinCode.GDhomeObjects2 */
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.You_32WinCode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.You_32WinCode.GDhomeObjects2.length; i < len; ++i) {
                    gdjs.You_32WinCode.GDhomeObjects2[i].setAnimation(1);
                }
            }{
                for (var i = 0, len = gdjs.You_32WinCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.You_32WinCode.GDpointerObjects2[i].hide(false);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }
            {
                //Subevents
                gdjs.You_32WinCode.eventsList5(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("replay"), gdjs.You_32WinCode.GDreplayObjects2);

        gdjs.You_32WinCode.condition0IsTrue_0.val = false;
        {
            gdjs.You_32WinCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.You_32WinCode.mapOfGDgdjs_46You_9532WinCode_46GDreplayObjects2Objects, runtimeScene, true, false);
        }if (gdjs.You_32WinCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.You_32WinCode.GDpointerObjects2);
            /* Reuse gdjs.You_32WinCode.GDreplayObjects2 */
            {
                for (var i = 0, len = gdjs.You_32WinCode.GDreplayObjects2.length; i < len; ++i) {
                    gdjs.You_32WinCode.GDreplayObjects2[i].setAnimation(1);
                }
            }{
                for (var i = 0, len = gdjs.You_32WinCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.You_32WinCode.GDpointerObjects2[i].hide(false);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }
            {
                //Subevents
                gdjs.You_32WinCode.eventsList6(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.You_32WinCode.GDExitObjects2);

        gdjs.You_32WinCode.condition0IsTrue_0.val = false;
        {
            gdjs.You_32WinCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.You_32WinCode.mapOfGDgdjs_46You_9532WinCode_46GDExitObjects2Objects, runtimeScene, true, false);
        }if (gdjs.You_32WinCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.You_32WinCode.GDExitObjects2 */
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.You_32WinCode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.You_32WinCode.GDExitObjects2.length; i < len; ++i) {
                    gdjs.You_32WinCode.GDExitObjects2[i].setAnimation(1);
                }
            }{
                for (var i = 0, len = gdjs.You_32WinCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.You_32WinCode.GDpointerObjects2[i].hide(false);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }
            {
                //Subevents
                gdjs.You_32WinCode.eventsList9(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("replay"), gdjs.You_32WinCode.GDreplayObjects2);

        gdjs.You_32WinCode.condition0IsTrue_0.val = false;
        {
            gdjs.You_32WinCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.You_32WinCode.mapOfGDgdjs_46You_9532WinCode_46GDreplayObjects2Objects, runtimeScene, true, true);
        }if (gdjs.You_32WinCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.You_32WinCode.GDreplayObjects2 */
            {
                for (var i = 0, len = gdjs.You_32WinCode.GDreplayObjects2.length; i < len; ++i) {
                    gdjs.You_32WinCode.GDreplayObjects2[i].setAnimation(0);
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("home"), gdjs.You_32WinCode.GDhomeObjects2);

        gdjs.You_32WinCode.condition0IsTrue_0.val = false;
        {
            gdjs.You_32WinCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.You_32WinCode.mapOfGDgdjs_46You_9532WinCode_46GDhomeObjects2Objects, runtimeScene, true, true);
        }if (gdjs.You_32WinCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.You_32WinCode.GDhomeObjects2 */
            {
                for (var i = 0, len = gdjs.You_32WinCode.GDhomeObjects2.length; i < len; ++i) {
                    gdjs.You_32WinCode.GDhomeObjects2[i].setAnimation(0);
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.You_32WinCode.GDExitObjects2);

        gdjs.You_32WinCode.condition0IsTrue_0.val = false;
        {
            gdjs.You_32WinCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.You_32WinCode.mapOfGDgdjs_46You_9532WinCode_46GDExitObjects2Objects, runtimeScene, true, true);
        }if (gdjs.You_32WinCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.You_32WinCode.GDExitObjects2 */
            {
                for (var i = 0, len = gdjs.You_32WinCode.GDExitObjects2.length; i < len; ++i) {
                    gdjs.You_32WinCode.GDExitObjects2[i].setAnimation(0);
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("ContinuePlay"), gdjs.You_32WinCode.GDContinuePlayObjects2);

        gdjs.You_32WinCode.condition0IsTrue_0.val = false;
        {
            gdjs.You_32WinCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.You_32WinCode.mapOfGDgdjs_46You_9532WinCode_46GDContinuePlayObjects2Objects, runtimeScene, true, true);
        }if (gdjs.You_32WinCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.You_32WinCode.GDContinuePlayObjects2 */
            {
                for (var i = 0, len = gdjs.You_32WinCode.GDContinuePlayObjects2.length; i < len; ++i) {
                    gdjs.You_32WinCode.GDContinuePlayObjects2[i].setAnimation(0);
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("ContinuePlay"), gdjs.You_32WinCode.GDContinuePlayObjects2);
        gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.You_32WinCode.GDExitObjects2);
        gdjs.copyArray(runtimeScene.getObjects("home"), gdjs.You_32WinCode.GDhomeObjects2);
        gdjs.copyArray(runtimeScene.getObjects("replay"), gdjs.You_32WinCode.GDreplayObjects2);

        gdjs.You_32WinCode.condition0IsTrue_0.val = false;
        gdjs.You_32WinCode.condition1IsTrue_0.val = false;
        gdjs.You_32WinCode.condition2IsTrue_0.val = false;
        gdjs.You_32WinCode.condition3IsTrue_0.val = false;
        {
            gdjs.You_32WinCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.You_32WinCode.mapOfGDgdjs_46You_9532WinCode_46GDreplayObjects2Objects, runtimeScene, true, true);
        }if (gdjs.You_32WinCode.condition0IsTrue_0.val) {
            {
                gdjs.You_32WinCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.You_32WinCode.mapOfGDgdjs_46You_9532WinCode_46GDExitObjects2Objects, runtimeScene, true, true);
            }if (gdjs.You_32WinCode.condition1IsTrue_0.val) {
                {
                    gdjs.You_32WinCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.You_32WinCode.mapOfGDgdjs_46You_9532WinCode_46GDhomeObjects2Objects, runtimeScene, true, true);
                }if (gdjs.You_32WinCode.condition2IsTrue_0.val) {
                    {
                        gdjs.You_32WinCode.condition3IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.You_32WinCode.mapOfGDgdjs_46You_9532WinCode_46GDContinuePlayObjects2Objects, runtimeScene, true, true);
                    }
                }
            }
        }
        if (gdjs.You_32WinCode.condition3IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.You_32WinCode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.You_32WinCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.You_32WinCode.GDpointerObjects2[i].hide();
                }
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("ContinuePlay"), gdjs.You_32WinCode.GDContinuePlayObjects1);

        gdjs.You_32WinCode.condition0IsTrue_0.val = false;
        {
            gdjs.You_32WinCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.You_32WinCode.mapOfGDgdjs_46You_9532WinCode_46GDContinuePlayObjects1Objects, runtimeScene, true, false);
        }if (gdjs.You_32WinCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.You_32WinCode.GDContinuePlayObjects1 */
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.You_32WinCode.GDpointerObjects1);
            {
                for (var i = 0, len = gdjs.You_32WinCode.GDContinuePlayObjects1.length; i < len; ++i) {
                    gdjs.You_32WinCode.GDContinuePlayObjects1[i].setAnimation(1);
                }
            }{
                for (var i = 0, len = gdjs.You_32WinCode.GDpointerObjects1.length; i < len; ++i) {
                    gdjs.You_32WinCode.GDpointerObjects1[i].hide(false);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }
            {
                //Subevents
                gdjs.You_32WinCode.eventsList10(runtimeScene);
            } //End of subevents
        }
    }
};gdjs.You_32WinCode.eventsList12 = function (runtimeScene) {

    {

        gdjs.You_32WinCode.condition0IsTrue_0.val = false;
        {
            gdjs.You_32WinCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        }if (gdjs.You_32WinCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 1);
            }{
                gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "The Jazz Logo.mp3", 3, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)), 1);
            }
            {
                //Subevents
                gdjs.You_32WinCode.eventsList0(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.You_32WinCode.condition0IsTrue_0.val = false;
        {
            gdjs.You_32WinCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        }if (gdjs.You_32WinCode.condition0IsTrue_0.val) {

            {
                //Subevents
                gdjs.You_32WinCode.eventsList2(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.You_32WinCode.eventsList3(runtimeScene);
    }

    {

        gdjs.You_32WinCode.eventsList4(runtimeScene);
    }

    {

        gdjs.You_32WinCode.eventsList11(runtimeScene);
    }
};

gdjs.You_32WinCode.func = function (runtimeScene) {
    runtimeScene.getOnceTriggers().startNewFrame();

    gdjs.You_32WinCode.GDBackgroundObjects1.length = 0;
    gdjs.You_32WinCode.GDBackgroundObjects2.length = 0;
    gdjs.You_32WinCode.GDBackgroundObjects3.length = 0;
    gdjs.You_32WinCode.GDBackgroundObjects4.length = 0;
    gdjs.You_32WinCode.GDScoreBoardObjects1.length = 0;
    gdjs.You_32WinCode.GDScoreBoardObjects2.length = 0;
    gdjs.You_32WinCode.GDScoreBoardObjects3.length = 0;
    gdjs.You_32WinCode.GDScoreBoardObjects4.length = 0;
    gdjs.You_32WinCode.GDcloudObjects1.length = 0;
    gdjs.You_32WinCode.GDcloudObjects2.length = 0;
    gdjs.You_32WinCode.GDcloudObjects3.length = 0;
    gdjs.You_32WinCode.GDcloudObjects4.length = 0;
    gdjs.You_32WinCode.GDcloud2Objects1.length = 0;
    gdjs.You_32WinCode.GDcloud2Objects2.length = 0;
    gdjs.You_32WinCode.GDcloud2Objects3.length = 0;
    gdjs.You_32WinCode.GDcloud2Objects4.length = 0;
    gdjs.You_32WinCode.GDcloud3Objects1.length = 0;
    gdjs.You_32WinCode.GDcloud3Objects2.length = 0;
    gdjs.You_32WinCode.GDcloud3Objects3.length = 0;
    gdjs.You_32WinCode.GDcloud3Objects4.length = 0;
    gdjs.You_32WinCode.GDhomeObjects1.length = 0;
    gdjs.You_32WinCode.GDhomeObjects2.length = 0;
    gdjs.You_32WinCode.GDhomeObjects3.length = 0;
    gdjs.You_32WinCode.GDhomeObjects4.length = 0;
    gdjs.You_32WinCode.GDreplayObjects1.length = 0;
    gdjs.You_32WinCode.GDreplayObjects2.length = 0;
    gdjs.You_32WinCode.GDreplayObjects3.length = 0;
    gdjs.You_32WinCode.GDreplayObjects4.length = 0;
    gdjs.You_32WinCode.GDExitObjects1.length = 0;
    gdjs.You_32WinCode.GDExitObjects2.length = 0;
    gdjs.You_32WinCode.GDExitObjects3.length = 0;
    gdjs.You_32WinCode.GDExitObjects4.length = 0;
    gdjs.You_32WinCode.GDWinnerObjects1.length = 0;
    gdjs.You_32WinCode.GDWinnerObjects2.length = 0;
    gdjs.You_32WinCode.GDWinnerObjects3.length = 0;
    gdjs.You_32WinCode.GDWinnerObjects4.length = 0;
    gdjs.You_32WinCode.GDSecurityCatWinObjects1.length = 0;
    gdjs.You_32WinCode.GDSecurityCatWinObjects2.length = 0;
    gdjs.You_32WinCode.GDSecurityCatWinObjects3.length = 0;
    gdjs.You_32WinCode.GDSecurityCatWinObjects4.length = 0;
    gdjs.You_32WinCode.GDpointerObjects1.length = 0;
    gdjs.You_32WinCode.GDpointerObjects2.length = 0;
    gdjs.You_32WinCode.GDpointerObjects3.length = 0;
    gdjs.You_32WinCode.GDpointerObjects4.length = 0;
    gdjs.You_32WinCode.GDKeepPlayingTextObjects1.length = 0;
    gdjs.You_32WinCode.GDKeepPlayingTextObjects2.length = 0;
    gdjs.You_32WinCode.GDKeepPlayingTextObjects3.length = 0;
    gdjs.You_32WinCode.GDKeepPlayingTextObjects4.length = 0;
    gdjs.You_32WinCode.GDContinuePlayObjects1.length = 0;
    gdjs.You_32WinCode.GDContinuePlayObjects2.length = 0;
    gdjs.You_32WinCode.GDContinuePlayObjects3.length = 0;
    gdjs.You_32WinCode.GDContinuePlayObjects4.length = 0;
    gdjs.You_32WinCode.GDcongratsTextObjects1.length = 0;
    gdjs.You_32WinCode.GDcongratsTextObjects2.length = 0;
    gdjs.You_32WinCode.GDcongratsTextObjects3.length = 0;
    gdjs.You_32WinCode.GDcongratsTextObjects4.length = 0;
    gdjs.You_32WinCode.GDTextBoxObjects1.length = 0;
    gdjs.You_32WinCode.GDTextBoxObjects2.length = 0;
    gdjs.You_32WinCode.GDTextBoxObjects3.length = 0;
    gdjs.You_32WinCode.GDTextBoxObjects4.length = 0;
    gdjs.You_32WinCode.GDhovertextObjects1.length = 0;
    gdjs.You_32WinCode.GDhovertextObjects2.length = 0;
    gdjs.You_32WinCode.GDhovertextObjects3.length = 0;
    gdjs.You_32WinCode.GDhovertextObjects4.length = 0;
    gdjs.You_32WinCode.GDSpeechBubbleObjects1.length = 0;
    gdjs.You_32WinCode.GDSpeechBubbleObjects2.length = 0;
    gdjs.You_32WinCode.GDSpeechBubbleObjects3.length = 0;
    gdjs.You_32WinCode.GDSpeechBubbleObjects4.length = 0;
    gdjs.You_32WinCode.GDscoreObjects1.length = 0;
    gdjs.You_32WinCode.GDscoreObjects2.length = 0;
    gdjs.You_32WinCode.GDscoreObjects3.length = 0;
    gdjs.You_32WinCode.GDscoreObjects4.length = 0;

    gdjs.You_32WinCode.eventsList12(runtimeScene);
    return;
};

gdjs['You_32WinCode'] = gdjs.You_32WinCode;