"use strict";

gdjs.DifficultyCode = {};
gdjs.DifficultyCode.GDbackgroundObjects1 = [];
gdjs.DifficultyCode.GDbackgroundObjects2 = [];
gdjs.DifficultyCode.GDbackgroundObjects3 = [];
gdjs.DifficultyCode.GDbackgroundObjects4 = [];
gdjs.DifficultyCode.GDReturn2Objects1 = [];
gdjs.DifficultyCode.GDReturn2Objects2 = [];
gdjs.DifficultyCode.GDReturn2Objects3 = [];
gdjs.DifficultyCode.GDReturn2Objects4 = [];
gdjs.DifficultyCode.GDMenuPanelObjects1 = [];
gdjs.DifficultyCode.GDMenuPanelObjects2 = [];
gdjs.DifficultyCode.GDMenuPanelObjects3 = [];
gdjs.DifficultyCode.GDMenuPanelObjects4 = [];
gdjs.DifficultyCode.GDeasyObjects1 = [];
gdjs.DifficultyCode.GDeasyObjects2 = [];
gdjs.DifficultyCode.GDeasyObjects3 = [];
gdjs.DifficultyCode.GDeasyObjects4 = [];
gdjs.DifficultyCode.GDmediumObjects1 = [];
gdjs.DifficultyCode.GDmediumObjects2 = [];
gdjs.DifficultyCode.GDmediumObjects3 = [];
gdjs.DifficultyCode.GDmediumObjects4 = [];
gdjs.DifficultyCode.GDhardObjects1 = [];
gdjs.DifficultyCode.GDhardObjects2 = [];
gdjs.DifficultyCode.GDhardObjects3 = [];
gdjs.DifficultyCode.GDhardObjects4 = [];
gdjs.DifficultyCode.GDMTitleObjects1 = [];
gdjs.DifficultyCode.GDMTitleObjects2 = [];
gdjs.DifficultyCode.GDMTitleObjects3 = [];
gdjs.DifficultyCode.GDMTitleObjects4 = [];
gdjs.DifficultyCode.GDMDescriptionObjects1 = [];
gdjs.DifficultyCode.GDMDescriptionObjects2 = [];
gdjs.DifficultyCode.GDMDescriptionObjects3 = [];
gdjs.DifficultyCode.GDMDescriptionObjects4 = [];
gdjs.DifficultyCode.GDSelectObjects1 = [];
gdjs.DifficultyCode.GDSelectObjects2 = [];
gdjs.DifficultyCode.GDSelectObjects3 = [];
gdjs.DifficultyCode.GDSelectObjects4 = [];
gdjs.DifficultyCode.GDETitleObjects1 = [];
gdjs.DifficultyCode.GDETitleObjects2 = [];
gdjs.DifficultyCode.GDETitleObjects3 = [];
gdjs.DifficultyCode.GDETitleObjects4 = [];
gdjs.DifficultyCode.GDEDescriptionObjects1 = [];
gdjs.DifficultyCode.GDEDescriptionObjects2 = [];
gdjs.DifficultyCode.GDEDescriptionObjects3 = [];
gdjs.DifficultyCode.GDEDescriptionObjects4 = [];
gdjs.DifficultyCode.GDHTitleObjects1 = [];
gdjs.DifficultyCode.GDHTitleObjects2 = [];
gdjs.DifficultyCode.GDHTitleObjects3 = [];
gdjs.DifficultyCode.GDHTitleObjects4 = [];
gdjs.DifficultyCode.GDHDescriptionObjects1 = [];
gdjs.DifficultyCode.GDHDescriptionObjects2 = [];
gdjs.DifficultyCode.GDHDescriptionObjects3 = [];
gdjs.DifficultyCode.GDHDescriptionObjects4 = [];
gdjs.DifficultyCode.GDpointerObjects1 = [];
gdjs.DifficultyCode.GDpointerObjects2 = [];
gdjs.DifficultyCode.GDpointerObjects3 = [];
gdjs.DifficultyCode.GDpointerObjects4 = [];
gdjs.DifficultyCode.GDAudioObjects1 = [];
gdjs.DifficultyCode.GDAudioObjects2 = [];
gdjs.DifficultyCode.GDAudioObjects3 = [];
gdjs.DifficultyCode.GDAudioObjects4 = [];

gdjs.DifficultyCode.conditionTrue_0 = { val: false };
gdjs.DifficultyCode.condition0IsTrue_0 = { val: false };
gdjs.DifficultyCode.condition1IsTrue_0 = { val: false };
gdjs.DifficultyCode.condition2IsTrue_0 = { val: false };
gdjs.DifficultyCode.condition3IsTrue_0 = { val: false };
gdjs.DifficultyCode.condition4IsTrue_0 = { val: false };
gdjs.DifficultyCode.condition5IsTrue_0 = { val: false };

gdjs.DifficultyCode.eventsList0 = function (runtimeScene) {

    {

        gdjs.DifficultyCode.condition0IsTrue_0.val = false;
        {
            gdjs.DifficultyCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.DifficultyCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.DifficultyCode.GDpointerObjects1);
            {
                gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.DifficultyCode.GDpointerObjects1.length; i < len; ++i) {
                    gdjs.DifficultyCode.GDpointerObjects1[i].deleteFromScene(runtimeScene);
                }
            }
        }
    }
};gdjs.DifficultyCode.eventsList1 = function (runtimeScene) {

    {

        {
            gdjs.copyArray(runtimeScene.getObjects("EDescription"), gdjs.DifficultyCode.GDEDescriptionObjects1);
            gdjs.copyArray(runtimeScene.getObjects("ETitle"), gdjs.DifficultyCode.GDETitleObjects1);
            gdjs.copyArray(runtimeScene.getObjects("HDescription"), gdjs.DifficultyCode.GDHDescriptionObjects1);
            gdjs.copyArray(runtimeScene.getObjects("HTitle"), gdjs.DifficultyCode.GDHTitleObjects1);
            gdjs.copyArray(runtimeScene.getObjects("MDescription"), gdjs.DifficultyCode.GDMDescriptionObjects1);
            gdjs.copyArray(runtimeScene.getObjects("MTitle"), gdjs.DifficultyCode.GDMTitleObjects1);
            gdjs.copyArray(runtimeScene.getObjects("MenuPanel"), gdjs.DifficultyCode.GDMenuPanelObjects1);
            gdjs.copyArray(runtimeScene.getObjects("Return2"), gdjs.DifficultyCode.GDReturn2Objects1);
            gdjs.copyArray(runtimeScene.getObjects("easy"), gdjs.DifficultyCode.GDeasyObjects1);
            gdjs.copyArray(runtimeScene.getObjects("hard"), gdjs.DifficultyCode.GDhardObjects1);
            gdjs.copyArray(runtimeScene.getObjects("medium"), gdjs.DifficultyCode.GDmediumObjects1);
            {
                for (var i = 0, len = gdjs.DifficultyCode.GDMenuPanelObjects1.length; i < len; ++i) {
                    gdjs.DifficultyCode.GDMenuPanelObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.DifficultyCode.GDMenuPanelObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.DifficultyCode.GDReturn2Objects1.length; i < len; ++i) {
                    gdjs.DifficultyCode.GDReturn2Objects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.DifficultyCode.GDReturn2Objects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.DifficultyCode.GDMTitleObjects1.length; i < len; ++i) {
                    gdjs.DifficultyCode.GDMTitleObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.DifficultyCode.GDMTitleObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.DifficultyCode.GDMDescriptionObjects1.length; i < len; ++i) {
                    gdjs.DifficultyCode.GDMDescriptionObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.DifficultyCode.GDMDescriptionObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.DifficultyCode.GDETitleObjects1.length; i < len; ++i) {
                    gdjs.DifficultyCode.GDETitleObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.DifficultyCode.GDETitleObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.DifficultyCode.GDEDescriptionObjects1.length; i < len; ++i) {
                    gdjs.DifficultyCode.GDEDescriptionObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.DifficultyCode.GDEDescriptionObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.DifficultyCode.GDHTitleObjects1.length; i < len; ++i) {
                    gdjs.DifficultyCode.GDHTitleObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.DifficultyCode.GDHTitleObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.DifficultyCode.GDHDescriptionObjects1.length; i < len; ++i) {
                    gdjs.DifficultyCode.GDHDescriptionObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.DifficultyCode.GDHDescriptionObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.DifficultyCode.GDmediumObjects1.length; i < len; ++i) {
                    gdjs.DifficultyCode.GDmediumObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.DifficultyCode.GDmediumObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.DifficultyCode.GDeasyObjects1.length; i < len; ++i) {
                    gdjs.DifficultyCode.GDeasyObjects1[i].setX((gdjs.DifficultyCode.GDmediumObjects1.length === 0 ? 0 : gdjs.DifficultyCode.GDmediumObjects1[0].getPointX("Medium")) - 180);
                }
            }{
                for (var i = 0, len = gdjs.DifficultyCode.GDhardObjects1.length; i < len; ++i) {
                    gdjs.DifficultyCode.GDhardObjects1[i].setX((gdjs.DifficultyCode.GDmediumObjects1.length === 0 ? 0 : gdjs.DifficultyCode.GDmediumObjects1[0].getPointX("Medium")) + 180);
                }
            }
        }
    }
};gdjs.DifficultyCode.mapOfGDgdjs_46DifficultyCode_46GDAudioObjects2Objects = Hashtable.newFrom({ "Audio": gdjs.DifficultyCode.GDAudioObjects2 });gdjs.DifficultyCode.eventsList2 = function (runtimeScene) {

    {

        gdjs.DifficultyCode.condition0IsTrue_0.val = false;
        {
            gdjs.DifficultyCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.DifficultyCode.condition0IsTrue_0.val) {
            gdjs.copyArray(gdjs.DifficultyCode.GDpointerObjects2, gdjs.DifficultyCode.GDpointerObjects3);

            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 10, 1);
            }{
                for (var i = 0, len = gdjs.DifficultyCode.GDpointerObjects3.length; i < len; ++i) {
                    gdjs.DifficultyCode.GDpointerObjects3[i].hide();
                }
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }{
                gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Settings");
            }
        }
    }

    {

        gdjs.DifficultyCode.condition0IsTrue_0.val = false;
        gdjs.DifficultyCode.condition1IsTrue_0.val = false;
        {
            gdjs.DifficultyCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.DifficultyCode.condition0IsTrue_0.val) {
            {
                gdjs.DifficultyCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.DifficultyCode.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 10, 1);
            }{
                gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Settings");
            }
        }
    }
};gdjs.DifficultyCode.mapOfGDgdjs_46DifficultyCode_46GDAudioObjects2Objects = Hashtable.newFrom({ "Audio": gdjs.DifficultyCode.GDAudioObjects2 });gdjs.DifficultyCode.mapOfGDgdjs_46DifficultyCode_46GDReturn2Objects2Objects = Hashtable.newFrom({ "Return2": gdjs.DifficultyCode.GDReturn2Objects2 });gdjs.DifficultyCode.eventsList3 = function (runtimeScene) {

    {

        gdjs.DifficultyCode.condition0IsTrue_0.val = false;
        {
            gdjs.DifficultyCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.DifficultyCode.condition0IsTrue_0.val) {
            gdjs.copyArray(gdjs.DifficultyCode.GDpointerObjects2, gdjs.DifficultyCode.GDpointerObjects3);

            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 10, 1);
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
            }{
                for (var i = 0, len = gdjs.DifficultyCode.GDpointerObjects3.length; i < len; ++i) {
                    gdjs.DifficultyCode.GDpointerObjects3[i].hide();
                }
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }
        }
    }

    {

        gdjs.DifficultyCode.condition0IsTrue_0.val = false;
        gdjs.DifficultyCode.condition1IsTrue_0.val = false;
        {
            gdjs.DifficultyCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.DifficultyCode.condition0IsTrue_0.val) {
            {
                gdjs.DifficultyCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.DifficultyCode.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 10, 1);
            }{
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
            }
        }
    }
};gdjs.DifficultyCode.mapOfGDgdjs_46DifficultyCode_46GDReturn2Objects2Objects = Hashtable.newFrom({ "Return2": gdjs.DifficultyCode.GDReturn2Objects2 });gdjs.DifficultyCode.mapOfGDgdjs_46DifficultyCode_46GDeasyObjects2Objects = Hashtable.newFrom({ "easy": gdjs.DifficultyCode.GDeasyObjects2 });gdjs.DifficultyCode.eventsList4 = function (runtimeScene) {

    {

        gdjs.DifficultyCode.condition0IsTrue_0.val = false;
        {
            gdjs.DifficultyCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.DifficultyCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("Select"), gdjs.DifficultyCode.GDSelectObjects3);
            gdjs.copyArray(gdjs.DifficultyCode.GDeasyObjects2, gdjs.DifficultyCode.GDeasyObjects3);

            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "AnimalCat_meow.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.camera.showLayer(runtimeScene, "Easy");
            }{
                runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
            }{
                for (var i = 0, len = gdjs.DifficultyCode.GDSelectObjects3.length; i < len; ++i) {
                    gdjs.DifficultyCode.GDSelectObjects3[i].setX((gdjs.DifficultyCode.GDeasyObjects3.length === 0 ? 0 : gdjs.DifficultyCode.GDeasyObjects3[0].getPointX("easy")) + 5);
                }
            }
        }
    }

    {

        gdjs.DifficultyCode.condition0IsTrue_0.val = false;
        gdjs.DifficultyCode.condition1IsTrue_0.val = false;
        {
            gdjs.DifficultyCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.DifficultyCode.condition0IsTrue_0.val) {
            {
                gdjs.DifficultyCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.DifficultyCode.condition1IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("Select"), gdjs.DifficultyCode.GDSelectObjects2);
            /* Reuse gdjs.DifficultyCode.GDeasyObjects2 */
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "AnimalCat_meow.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.camera.showLayer(runtimeScene, "Easy");
            }{
                for (var i = 0, len = gdjs.DifficultyCode.GDSelectObjects2.length; i < len; ++i) {
                    gdjs.DifficultyCode.GDSelectObjects2[i].setX((gdjs.DifficultyCode.GDeasyObjects2.length === 0 ? 0 : gdjs.DifficultyCode.GDeasyObjects2[0].getPointX("easy")) + 5);
                }
            }{
                runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
            }
        }
    }
};gdjs.DifficultyCode.mapOfGDgdjs_46DifficultyCode_46GDmediumObjects2Objects = Hashtable.newFrom({ "medium": gdjs.DifficultyCode.GDmediumObjects2 });gdjs.DifficultyCode.eventsList5 = function (runtimeScene) {

    {

        gdjs.DifficultyCode.condition0IsTrue_0.val = false;
        {
            gdjs.DifficultyCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.DifficultyCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("Select"), gdjs.DifficultyCode.GDSelectObjects3);
            gdjs.copyArray(gdjs.DifficultyCode.GDmediumObjects2, gdjs.DifficultyCode.GDmediumObjects3);

            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "AnimalCat_meow.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.camera.showLayer(runtimeScene, "Medium");
            }{
                runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(2);
            }{
                for (var i = 0, len = gdjs.DifficultyCode.GDSelectObjects3.length; i < len; ++i) {
                    gdjs.DifficultyCode.GDSelectObjects3[i].setX((gdjs.DifficultyCode.GDmediumObjects3.length === 0 ? 0 : gdjs.DifficultyCode.GDmediumObjects3[0].getPointX("medium")) + 5);
                }
            }
        }
    }

    {

        gdjs.DifficultyCode.condition0IsTrue_0.val = false;
        gdjs.DifficultyCode.condition1IsTrue_0.val = false;
        {
            gdjs.DifficultyCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.DifficultyCode.condition0IsTrue_0.val) {
            {
                gdjs.DifficultyCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.DifficultyCode.condition1IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("Select"), gdjs.DifficultyCode.GDSelectObjects2);
            /* Reuse gdjs.DifficultyCode.GDmediumObjects2 */
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "AnimalCat_meow.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.camera.showLayer(runtimeScene, "Medium");
            }{
                for (var i = 0, len = gdjs.DifficultyCode.GDSelectObjects2.length; i < len; ++i) {
                    gdjs.DifficultyCode.GDSelectObjects2[i].setX((gdjs.DifficultyCode.GDmediumObjects2.length === 0 ? 0 : gdjs.DifficultyCode.GDmediumObjects2[0].getPointX("medium")) + 5);
                }
            }{
                runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(2);
            }
        }
    }
};gdjs.DifficultyCode.mapOfGDgdjs_46DifficultyCode_46GDhardObjects2Objects = Hashtable.newFrom({ "hard": gdjs.DifficultyCode.GDhardObjects2 });gdjs.DifficultyCode.eventsList6 = function (runtimeScene) {

    {

        gdjs.DifficultyCode.condition0IsTrue_0.val = false;
        {
            gdjs.DifficultyCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.DifficultyCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("Select"), gdjs.DifficultyCode.GDSelectObjects3);
            gdjs.copyArray(gdjs.DifficultyCode.GDhardObjects2, gdjs.DifficultyCode.GDhardObjects3);

            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "AnimalCat_meow.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.camera.showLayer(runtimeScene, "Hard");
            }{
                runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
            }{
                for (var i = 0, len = gdjs.DifficultyCode.GDSelectObjects3.length; i < len; ++i) {
                    gdjs.DifficultyCode.GDSelectObjects3[i].setX((gdjs.DifficultyCode.GDhardObjects3.length === 0 ? 0 : gdjs.DifficultyCode.GDhardObjects3[0].getPointX("hard")) + 5);
                }
            }
        }
    }

    {

        gdjs.DifficultyCode.condition0IsTrue_0.val = false;
        gdjs.DifficultyCode.condition1IsTrue_0.val = false;
        {
            gdjs.DifficultyCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.DifficultyCode.condition0IsTrue_0.val) {
            {
                gdjs.DifficultyCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.DifficultyCode.condition1IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("Select"), gdjs.DifficultyCode.GDSelectObjects2);
            /* Reuse gdjs.DifficultyCode.GDhardObjects2 */
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "AnimalCat_meow.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.camera.showLayer(runtimeScene, "Hard");
            }{
                for (var i = 0, len = gdjs.DifficultyCode.GDSelectObjects2.length; i < len; ++i) {
                    gdjs.DifficultyCode.GDSelectObjects2[i].setX((gdjs.DifficultyCode.GDhardObjects2.length === 0 ? 0 : gdjs.DifficultyCode.GDhardObjects2[0].getPointX("hard")) + 5);
                }
            }{
                runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
            }
        }
    }
};gdjs.DifficultyCode.mapOfGDgdjs_46DifficultyCode_46GDReturn2Objects1Objects = Hashtable.newFrom({ "Return2": gdjs.DifficultyCode.GDReturn2Objects1 });gdjs.DifficultyCode.mapOfGDgdjs_46DifficultyCode_46GDeasyObjects1Objects = Hashtable.newFrom({ "easy": gdjs.DifficultyCode.GDeasyObjects1 });gdjs.DifficultyCode.mapOfGDgdjs_46DifficultyCode_46GDmediumObjects1Objects = Hashtable.newFrom({ "medium": gdjs.DifficultyCode.GDmediumObjects1 });gdjs.DifficultyCode.mapOfGDgdjs_46DifficultyCode_46GDhardObjects1Objects = Hashtable.newFrom({ "hard": gdjs.DifficultyCode.GDhardObjects1 });gdjs.DifficultyCode.mapOfGDgdjs_46DifficultyCode_46GDAudioObjects1Objects = Hashtable.newFrom({ "Audio": gdjs.DifficultyCode.GDAudioObjects1 });gdjs.DifficultyCode.eventsList7 = function (runtimeScene) {

    {

        {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.DifficultyCode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.DifficultyCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.DifficultyCode.GDpointerObjects2[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Audio"), gdjs.DifficultyCode.GDAudioObjects2);

        gdjs.DifficultyCode.condition0IsTrue_0.val = false;
        {
            gdjs.DifficultyCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DifficultyCode.mapOfGDgdjs_46DifficultyCode_46GDAudioObjects2Objects, runtimeScene, true, false);
        }if (gdjs.DifficultyCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.DifficultyCode.GDAudioObjects2 */
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.DifficultyCode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.DifficultyCode.GDAudioObjects2.length; i < len; ++i) {
                    gdjs.DifficultyCode.GDAudioObjects2[i].setAnimation(1);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.DifficultyCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.DifficultyCode.GDpointerObjects2[i].hide(false);
                }
            }
            {
                //Subevents
                gdjs.DifficultyCode.eventsList2(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Audio"), gdjs.DifficultyCode.GDAudioObjects2);

        gdjs.DifficultyCode.condition0IsTrue_0.val = false;
        {
            gdjs.DifficultyCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DifficultyCode.mapOfGDgdjs_46DifficultyCode_46GDAudioObjects2Objects, runtimeScene, true, true);
        }if (gdjs.DifficultyCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.DifficultyCode.GDAudioObjects2 */
            {
                for (var i = 0, len = gdjs.DifficultyCode.GDAudioObjects2.length; i < len; ++i) {
                    gdjs.DifficultyCode.GDAudioObjects2[i].setAnimation(0);
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Return2"), gdjs.DifficultyCode.GDReturn2Objects2);

        gdjs.DifficultyCode.condition0IsTrue_0.val = false;
        {
            gdjs.DifficultyCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DifficultyCode.mapOfGDgdjs_46DifficultyCode_46GDReturn2Objects2Objects, runtimeScene, true, false);
        }if (gdjs.DifficultyCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.DifficultyCode.GDReturn2Objects2 */
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.DifficultyCode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.DifficultyCode.GDReturn2Objects2.length; i < len; ++i) {
                    gdjs.DifficultyCode.GDReturn2Objects2[i].setAnimation(1);
                }
            }{
                for (var i = 0, len = gdjs.DifficultyCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.DifficultyCode.GDpointerObjects2[i].hide(false);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }
            {
                //Subevents
                gdjs.DifficultyCode.eventsList3(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Return2"), gdjs.DifficultyCode.GDReturn2Objects2);

        gdjs.DifficultyCode.condition0IsTrue_0.val = false;
        {
            gdjs.DifficultyCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DifficultyCode.mapOfGDgdjs_46DifficultyCode_46GDReturn2Objects2Objects, runtimeScene, true, true);
        }if (gdjs.DifficultyCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.DifficultyCode.GDReturn2Objects2 */
            {
                for (var i = 0, len = gdjs.DifficultyCode.GDReturn2Objects2.length; i < len; ++i) {
                    gdjs.DifficultyCode.GDReturn2Objects2[i].setAnimation(0);
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("easy"), gdjs.DifficultyCode.GDeasyObjects2);

        gdjs.DifficultyCode.condition0IsTrue_0.val = false;
        {
            gdjs.DifficultyCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DifficultyCode.mapOfGDgdjs_46DifficultyCode_46GDeasyObjects2Objects, runtimeScene, true, false);
        }if (gdjs.DifficultyCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.DifficultyCode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.DifficultyCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.DifficultyCode.GDpointerObjects2[i].hide(false);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }
            {
                //Subevents
                gdjs.DifficultyCode.eventsList4(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.DifficultyCode.condition0IsTrue_0.val = false;
        {
            gdjs.DifficultyCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
        }if (gdjs.DifficultyCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("Select"), gdjs.DifficultyCode.GDSelectObjects2);
            gdjs.copyArray(runtimeScene.getObjects("easy"), gdjs.DifficultyCode.GDeasyObjects2);
            {
                for (var i = 0, len = gdjs.DifficultyCode.GDSelectObjects2.length; i < len; ++i) {
                    gdjs.DifficultyCode.GDSelectObjects2[i].setX((gdjs.DifficultyCode.GDeasyObjects2.length === 0 ? 0 : gdjs.DifficultyCode.GDeasyObjects2[0].getPointX("easy")) + 5);
                }
            }
        }
    }

    {

        gdjs.DifficultyCode.condition0IsTrue_0.val = false;
        {
            gdjs.DifficultyCode.condition0IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1);
        }if (gdjs.DifficultyCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.camera.hideLayer(runtimeScene, "Easy");
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("medium"), gdjs.DifficultyCode.GDmediumObjects2);

        gdjs.DifficultyCode.condition0IsTrue_0.val = false;
        {
            gdjs.DifficultyCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DifficultyCode.mapOfGDgdjs_46DifficultyCode_46GDmediumObjects2Objects, runtimeScene, true, false);
        }if (gdjs.DifficultyCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.DifficultyCode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.DifficultyCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.DifficultyCode.GDpointerObjects2[i].hide(false);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }
            {
                //Subevents
                gdjs.DifficultyCode.eventsList5(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.DifficultyCode.condition0IsTrue_0.val = false;
        {
            gdjs.DifficultyCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 2;
        }if (gdjs.DifficultyCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("Select"), gdjs.DifficultyCode.GDSelectObjects2);
            gdjs.copyArray(runtimeScene.getObjects("medium"), gdjs.DifficultyCode.GDmediumObjects2);
            {
                for (var i = 0, len = gdjs.DifficultyCode.GDSelectObjects2.length; i < len; ++i) {
                    gdjs.DifficultyCode.GDSelectObjects2[i].setX((gdjs.DifficultyCode.GDmediumObjects2.length === 0 ? 0 : gdjs.DifficultyCode.GDmediumObjects2[0].getPointX("medium")) + 5);
                }
            }
        }
    }

    {

        gdjs.DifficultyCode.condition0IsTrue_0.val = false;
        {
            gdjs.DifficultyCode.condition0IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 2);
        }if (gdjs.DifficultyCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.camera.hideLayer(runtimeScene, "Medium");
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("hard"), gdjs.DifficultyCode.GDhardObjects2);

        gdjs.DifficultyCode.condition0IsTrue_0.val = false;
        {
            gdjs.DifficultyCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DifficultyCode.mapOfGDgdjs_46DifficultyCode_46GDhardObjects2Objects, runtimeScene, true, false);
        }if (gdjs.DifficultyCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.DifficultyCode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.DifficultyCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.DifficultyCode.GDpointerObjects2[i].hide(false);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }
            {
                //Subevents
                gdjs.DifficultyCode.eventsList6(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.DifficultyCode.condition0IsTrue_0.val = false;
        {
            gdjs.DifficultyCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3;
        }if (gdjs.DifficultyCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("Select"), gdjs.DifficultyCode.GDSelectObjects2);
            gdjs.copyArray(runtimeScene.getObjects("hard"), gdjs.DifficultyCode.GDhardObjects2);
            {
                for (var i = 0, len = gdjs.DifficultyCode.GDSelectObjects2.length; i < len; ++i) {
                    gdjs.DifficultyCode.GDSelectObjects2[i].setX((gdjs.DifficultyCode.GDhardObjects2.length === 0 ? 0 : gdjs.DifficultyCode.GDhardObjects2[0].getPointX("hard")) + 5);
                }
            }
        }
    }

    {

        gdjs.DifficultyCode.condition0IsTrue_0.val = false;
        {
            gdjs.DifficultyCode.condition0IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3);
        }if (gdjs.DifficultyCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.camera.hideLayer(runtimeScene, "Hard");
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Audio"), gdjs.DifficultyCode.GDAudioObjects1);
        gdjs.copyArray(runtimeScene.getObjects("Return2"), gdjs.DifficultyCode.GDReturn2Objects1);
        gdjs.copyArray(runtimeScene.getObjects("easy"), gdjs.DifficultyCode.GDeasyObjects1);
        gdjs.copyArray(runtimeScene.getObjects("hard"), gdjs.DifficultyCode.GDhardObjects1);
        gdjs.copyArray(runtimeScene.getObjects("medium"), gdjs.DifficultyCode.GDmediumObjects1);

        gdjs.DifficultyCode.condition0IsTrue_0.val = false;
        gdjs.DifficultyCode.condition1IsTrue_0.val = false;
        gdjs.DifficultyCode.condition2IsTrue_0.val = false;
        gdjs.DifficultyCode.condition3IsTrue_0.val = false;
        gdjs.DifficultyCode.condition4IsTrue_0.val = false;
        {
            gdjs.DifficultyCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DifficultyCode.mapOfGDgdjs_46DifficultyCode_46GDReturn2Objects1Objects, runtimeScene, true, true);
        }if (gdjs.DifficultyCode.condition0IsTrue_0.val) {
            {
                gdjs.DifficultyCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DifficultyCode.mapOfGDgdjs_46DifficultyCode_46GDeasyObjects1Objects, runtimeScene, true, true);
            }if (gdjs.DifficultyCode.condition1IsTrue_0.val) {
                {
                    gdjs.DifficultyCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DifficultyCode.mapOfGDgdjs_46DifficultyCode_46GDmediumObjects1Objects, runtimeScene, true, true);
                }if (gdjs.DifficultyCode.condition2IsTrue_0.val) {
                    {
                        gdjs.DifficultyCode.condition3IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DifficultyCode.mapOfGDgdjs_46DifficultyCode_46GDhardObjects1Objects, runtimeScene, true, true);
                    }if (gdjs.DifficultyCode.condition3IsTrue_0.val) {
                        {
                            gdjs.DifficultyCode.condition4IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DifficultyCode.mapOfGDgdjs_46DifficultyCode_46GDAudioObjects1Objects, runtimeScene, true, true);
                        }
                    }
                }
            }
        }
        if (gdjs.DifficultyCode.condition4IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.DifficultyCode.GDpointerObjects1);
            {
                gdjs.evtTools.input.showCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.DifficultyCode.GDpointerObjects1.length; i < len; ++i) {
                    gdjs.DifficultyCode.GDpointerObjects1[i].hide();
                }
            }
        }
    }
};gdjs.DifficultyCode.eventsList8 = function (runtimeScene) {

    {

        gdjs.DifficultyCode.condition0IsTrue_0.val = false;
        {
            gdjs.DifficultyCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
        }if (gdjs.DifficultyCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, 0);
            }
        }
    }

    {

        gdjs.DifficultyCode.condition0IsTrue_0.val = false;
        {
            gdjs.DifficultyCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 25;
        }if (gdjs.DifficultyCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, 25);
            }
        }
    }

    {

        gdjs.DifficultyCode.condition0IsTrue_0.val = false;
        {
            gdjs.DifficultyCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 50;
        }if (gdjs.DifficultyCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, 50);
            }
        }
    }

    {

        gdjs.DifficultyCode.condition0IsTrue_0.val = false;
        {
            gdjs.DifficultyCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 75;
        }if (gdjs.DifficultyCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, 75);
            }
        }
    }

    {

        gdjs.DifficultyCode.condition0IsTrue_0.val = false;
        {
            gdjs.DifficultyCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 100;
        }if (gdjs.DifficultyCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, 100);
            }
        }
    }

    {

        gdjs.DifficultyCode.condition0IsTrue_0.val = false;
        {
            gdjs.DifficultyCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
        }if (gdjs.DifficultyCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 0);
            }
        }
    }

    {

        gdjs.DifficultyCode.condition0IsTrue_0.val = false;
        {
            gdjs.DifficultyCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 25;
        }if (gdjs.DifficultyCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 25);
            }
        }
    }

    {

        gdjs.DifficultyCode.condition0IsTrue_0.val = false;
        {
            gdjs.DifficultyCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 50;
        }if (gdjs.DifficultyCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 50);
            }
        }
    }

    {

        gdjs.DifficultyCode.condition0IsTrue_0.val = false;
        {
            gdjs.DifficultyCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 75;
        }if (gdjs.DifficultyCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 75);
            }
        }
    }

    {

        gdjs.DifficultyCode.condition0IsTrue_0.val = false;
        {
            gdjs.DifficultyCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 100;
        }if (gdjs.DifficultyCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 100);
            }
        }
    }
};gdjs.DifficultyCode.eventsList9 = function (runtimeScene) {

    {

        gdjs.DifficultyCode.condition0IsTrue_0.val = false;
        {
            gdjs.DifficultyCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        }if (gdjs.DifficultyCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 3);
            }
        }
    }

    {

        gdjs.DifficultyCode.condition0IsTrue_0.val = false;
        {
            gdjs.DifficultyCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        }if (gdjs.DifficultyCode.condition0IsTrue_0.val) {

            {
                //Subevents
                gdjs.DifficultyCode.eventsList0(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.DifficultyCode.eventsList1(runtimeScene);
    }

    {

        gdjs.DifficultyCode.eventsList7(runtimeScene);
    }

    {

        gdjs.DifficultyCode.eventsList8(runtimeScene);
    }
};

gdjs.DifficultyCode.func = function (runtimeScene) {
    runtimeScene.getOnceTriggers().startNewFrame();

    gdjs.DifficultyCode.GDbackgroundObjects1.length = 0;
    gdjs.DifficultyCode.GDbackgroundObjects2.length = 0;
    gdjs.DifficultyCode.GDbackgroundObjects3.length = 0;
    gdjs.DifficultyCode.GDbackgroundObjects4.length = 0;
    gdjs.DifficultyCode.GDReturn2Objects1.length = 0;
    gdjs.DifficultyCode.GDReturn2Objects2.length = 0;
    gdjs.DifficultyCode.GDReturn2Objects3.length = 0;
    gdjs.DifficultyCode.GDReturn2Objects4.length = 0;
    gdjs.DifficultyCode.GDMenuPanelObjects1.length = 0;
    gdjs.DifficultyCode.GDMenuPanelObjects2.length = 0;
    gdjs.DifficultyCode.GDMenuPanelObjects3.length = 0;
    gdjs.DifficultyCode.GDMenuPanelObjects4.length = 0;
    gdjs.DifficultyCode.GDeasyObjects1.length = 0;
    gdjs.DifficultyCode.GDeasyObjects2.length = 0;
    gdjs.DifficultyCode.GDeasyObjects3.length = 0;
    gdjs.DifficultyCode.GDeasyObjects4.length = 0;
    gdjs.DifficultyCode.GDmediumObjects1.length = 0;
    gdjs.DifficultyCode.GDmediumObjects2.length = 0;
    gdjs.DifficultyCode.GDmediumObjects3.length = 0;
    gdjs.DifficultyCode.GDmediumObjects4.length = 0;
    gdjs.DifficultyCode.GDhardObjects1.length = 0;
    gdjs.DifficultyCode.GDhardObjects2.length = 0;
    gdjs.DifficultyCode.GDhardObjects3.length = 0;
    gdjs.DifficultyCode.GDhardObjects4.length = 0;
    gdjs.DifficultyCode.GDMTitleObjects1.length = 0;
    gdjs.DifficultyCode.GDMTitleObjects2.length = 0;
    gdjs.DifficultyCode.GDMTitleObjects3.length = 0;
    gdjs.DifficultyCode.GDMTitleObjects4.length = 0;
    gdjs.DifficultyCode.GDMDescriptionObjects1.length = 0;
    gdjs.DifficultyCode.GDMDescriptionObjects2.length = 0;
    gdjs.DifficultyCode.GDMDescriptionObjects3.length = 0;
    gdjs.DifficultyCode.GDMDescriptionObjects4.length = 0;
    gdjs.DifficultyCode.GDSelectObjects1.length = 0;
    gdjs.DifficultyCode.GDSelectObjects2.length = 0;
    gdjs.DifficultyCode.GDSelectObjects3.length = 0;
    gdjs.DifficultyCode.GDSelectObjects4.length = 0;
    gdjs.DifficultyCode.GDETitleObjects1.length = 0;
    gdjs.DifficultyCode.GDETitleObjects2.length = 0;
    gdjs.DifficultyCode.GDETitleObjects3.length = 0;
    gdjs.DifficultyCode.GDETitleObjects4.length = 0;
    gdjs.DifficultyCode.GDEDescriptionObjects1.length = 0;
    gdjs.DifficultyCode.GDEDescriptionObjects2.length = 0;
    gdjs.DifficultyCode.GDEDescriptionObjects3.length = 0;
    gdjs.DifficultyCode.GDEDescriptionObjects4.length = 0;
    gdjs.DifficultyCode.GDHTitleObjects1.length = 0;
    gdjs.DifficultyCode.GDHTitleObjects2.length = 0;
    gdjs.DifficultyCode.GDHTitleObjects3.length = 0;
    gdjs.DifficultyCode.GDHTitleObjects4.length = 0;
    gdjs.DifficultyCode.GDHDescriptionObjects1.length = 0;
    gdjs.DifficultyCode.GDHDescriptionObjects2.length = 0;
    gdjs.DifficultyCode.GDHDescriptionObjects3.length = 0;
    gdjs.DifficultyCode.GDHDescriptionObjects4.length = 0;
    gdjs.DifficultyCode.GDpointerObjects1.length = 0;
    gdjs.DifficultyCode.GDpointerObjects2.length = 0;
    gdjs.DifficultyCode.GDpointerObjects3.length = 0;
    gdjs.DifficultyCode.GDpointerObjects4.length = 0;
    gdjs.DifficultyCode.GDAudioObjects1.length = 0;
    gdjs.DifficultyCode.GDAudioObjects2.length = 0;
    gdjs.DifficultyCode.GDAudioObjects3.length = 0;
    gdjs.DifficultyCode.GDAudioObjects4.length = 0;

    gdjs.DifficultyCode.eventsList9(runtimeScene);
    return;
};

gdjs['DifficultyCode'] = gdjs.DifficultyCode;