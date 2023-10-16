"use strict";

gdjs.GameCode = {};
gdjs.GameCode.GDCityObjects1 = [];
gdjs.GameCode.GDCityObjects2 = [];
gdjs.GameCode.GDCityObjects3 = [];
gdjs.GameCode.GDCityObjects4 = [];
gdjs.GameCode.GDplayerObjects1 = [];
gdjs.GameCode.GDplayerObjects2 = [];
gdjs.GameCode.GDplayerObjects3 = [];
gdjs.GameCode.GDplayerObjects4 = [];
gdjs.GameCode.GDpauseObjects1 = [];
gdjs.GameCode.GDpauseObjects2 = [];
gdjs.GameCode.GDpauseObjects3 = [];
gdjs.GameCode.GDpauseObjects4 = [];
gdjs.GameCode.GDscorebarObjects1 = [];
gdjs.GameCode.GDscorebarObjects2 = [];
gdjs.GameCode.GDscorebarObjects3 = [];
gdjs.GameCode.GDscorebarObjects4 = [];
gdjs.GameCode.GDhealthbarObjects1 = [];
gdjs.GameCode.GDhealthbarObjects2 = [];
gdjs.GameCode.GDhealthbarObjects3 = [];
gdjs.GameCode.GDhealthbarObjects4 = [];
gdjs.GameCode.GDPIIObjects1 = [];
gdjs.GameCode.GDPIIObjects2 = [];
gdjs.GameCode.GDPIIObjects3 = [];
gdjs.GameCode.GDPIIObjects4 = [];
gdjs.GameCode.GDinfectedfileObjects1 = [];
gdjs.GameCode.GDinfectedfileObjects2 = [];
gdjs.GameCode.GDinfectedfileObjects3 = [];
gdjs.GameCode.GDinfectedfileObjects4 = [];
gdjs.GameCode.GDnon_95PIIObjects1 = [];
gdjs.GameCode.GDnon_95PIIObjects2 = [];
gdjs.GameCode.GDnon_95PIIObjects3 = [];
gdjs.GameCode.GDnon_95PIIObjects4 = [];
gdjs.GameCode.GDpointerObjects1 = [];
gdjs.GameCode.GDpointerObjects2 = [];
gdjs.GameCode.GDpointerObjects3 = [];
gdjs.GameCode.GDpointerObjects4 = [];
gdjs.GameCode.GDphoneUIleftObjects1 = [];
gdjs.GameCode.GDphoneUIleftObjects2 = [];
gdjs.GameCode.GDphoneUIleftObjects3 = [];
gdjs.GameCode.GDphoneUIleftObjects4 = [];
gdjs.GameCode.GDphoneUIrightObjects1 = [];
gdjs.GameCode.GDphoneUIrightObjects2 = [];
gdjs.GameCode.GDphoneUIrightObjects3 = [];
gdjs.GameCode.GDphoneUIrightObjects4 = [];
gdjs.GameCode.GDphoneUIupObjects1 = [];
gdjs.GameCode.GDphoneUIupObjects2 = [];
gdjs.GameCode.GDphoneUIupObjects3 = [];
gdjs.GameCode.GDphoneUIupObjects4 = [];
gdjs.GameCode.GDphoneUIdownObjects1 = [];
gdjs.GameCode.GDphoneUIdownObjects2 = [];
gdjs.GameCode.GDphoneUIdownObjects3 = [];
gdjs.GameCode.GDphoneUIdownObjects4 = [];
gdjs.GameCode.GDboundaryObjects1 = [];
gdjs.GameCode.GDboundaryObjects2 = [];
gdjs.GameCode.GDboundaryObjects3 = [];
gdjs.GameCode.GDboundaryObjects4 = [];
gdjs.GameCode.GDscoreObjects1 = [];
gdjs.GameCode.GDscoreObjects2 = [];
gdjs.GameCode.GDscoreObjects3 = [];
gdjs.GameCode.GDscoreObjects4 = [];
gdjs.GameCode.GDhealthObjects1 = [];
gdjs.GameCode.GDhealthObjects2 = [];
gdjs.GameCode.GDhealthObjects3 = [];
gdjs.GameCode.GDhealthObjects4 = [];
gdjs.GameCode.GDTextBoxObjects1 = [];
gdjs.GameCode.GDTextBoxObjects2 = [];
gdjs.GameCode.GDTextBoxObjects3 = [];
gdjs.GameCode.GDTextBoxObjects4 = [];
gdjs.GameCode.GDCollectTenObjects1 = [];
gdjs.GameCode.GDCollectTenObjects2 = [];
gdjs.GameCode.GDCollectTenObjects3 = [];
gdjs.GameCode.GDCollectTenObjects4 = [];
gdjs.GameCode.GDAudioObjects1 = [];
gdjs.GameCode.GDAudioObjects2 = [];
gdjs.GameCode.GDAudioObjects3 = [];
gdjs.GameCode.GDAudioObjects4 = [];
gdjs.GameCode.GDfreeplayTextObjects1 = [];
gdjs.GameCode.GDfreeplayTextObjects2 = [];
gdjs.GameCode.GDfreeplayTextObjects3 = [];
gdjs.GameCode.GDfreeplayTextObjects4 = [];

gdjs.GameCode.conditionTrue_0 = { val: false };
gdjs.GameCode.condition0IsTrue_0 = { val: false };
gdjs.GameCode.condition1IsTrue_0 = { val: false };
gdjs.GameCode.condition2IsTrue_0 = { val: false };
gdjs.GameCode.condition3IsTrue_0 = { val: false };
gdjs.GameCode.conditionTrue_1 = { val: false };
gdjs.GameCode.condition0IsTrue_1 = { val: false };
gdjs.GameCode.condition1IsTrue_1 = { val: false };
gdjs.GameCode.condition2IsTrue_1 = { val: false };
gdjs.GameCode.condition3IsTrue_1 = { val: false };

gdjs.GameCode.userFunc0xfbb668 = function (runtimeScene) {
    "use strict";

    initializeScorm();

    var currentScore = getCurrentScormScore();
};
gdjs.GameCode.eventsList0 = function (runtimeScene) {

    {

        gdjs.GameCode.userFunc0xfbb668(runtimeScene);
    }
};gdjs.GameCode.eventsList1 = function (runtimeScene) {

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), true);
        }if (gdjs.GameCode.condition0IsTrue_0.val) {

            {
                //Subevents
                gdjs.GameCode.eventsList0(runtimeScene);
            } //End of subevents
        }
    }
};gdjs.GameCode.eventsList2 = function (runtimeScene) {

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                runtimeScene.getVariables().getFromIndex(3).setNumber(5);
            }{
                runtimeScene.getVariables().getFromIndex(4).setNumber(5);
            }{
                runtimeScene.getVariables().getFromIndex(5).setNumber(5);
            }
        }
    }

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 2;
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                runtimeScene.getVariables().getFromIndex(3).setNumber(3.75);
            }{
                runtimeScene.getVariables().getFromIndex(4).setNumber(3.75);
            }{
                runtimeScene.getVariables().getFromIndex(5).setNumber(3.75);
            }
        }
    }

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3;
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                runtimeScene.getVariables().getFromIndex(3).setNumber(2);
            }{
                runtimeScene.getVariables().getFromIndex(4).setNumber(2);
            }{
                runtimeScene.getVariables().getFromIndex(5).setNumber(2);
            }
        }
    }
};gdjs.GameCode.eventsList3 = function (runtimeScene) {

    {

        {
            gdjs.copyArray(runtimeScene.getObjects("CollectTen"), gdjs.GameCode.GDCollectTenObjects1);
            gdjs.copyArray(runtimeScene.getObjects("TextBox"), gdjs.GameCode.GDTextBoxObjects1);
            gdjs.copyArray(runtimeScene.getObjects("boundary"), gdjs.GameCode.GDboundaryObjects1);
            gdjs.copyArray(runtimeScene.getObjects("freeplayText"), gdjs.GameCode.GDfreeplayTextObjects1);
            {
                for (var i = 0, len = gdjs.GameCode.GDboundaryObjects1.length; i < len; ++i) {
                    gdjs.GameCode.GDboundaryObjects1[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + 500);
                }
            }{
                for (var i = 0, len = gdjs.GameCode.GDTextBoxObjects1.length; i < len; ++i) {
                    gdjs.GameCode.GDTextBoxObjects1[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + 500);
                }
            }{
                for (var i = 0, len = gdjs.GameCode.GDCollectTenObjects1.length; i < len; ++i) {
                    gdjs.GameCode.GDCollectTenObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.GameCode.GDCollectTenObjects1[i].getWidth() / 2);
                }
            }{
                for (var i = 0, len = gdjs.GameCode.GDfreeplayTextObjects1.length; i < len; ++i) {
                    gdjs.GameCode.GDfreeplayTextObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.GameCode.GDfreeplayTextObjects1[i].getWidth() / 2);
                }
            }
        }
    }
};gdjs.GameCode.eventsList4 = function (runtimeScene) {

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                runtimeScene.getVariables().getFromIndex(0).setNumber(1);
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("City"), gdjs.GameCode.GDCityObjects2);

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            for (var i = 0, k = 0, l = gdjs.GameCode.GDCityObjects2.length; i < l; ++i) {
                if (gdjs.GameCode.GDCityObjects2[i].getX() <= -gdjs.GameCode.GDCityObjects2[i].getWidth()) {
                    gdjs.GameCode.condition0IsTrue_0.val = true;
                    gdjs.GameCode.GDCityObjects2[k] = gdjs.GameCode.GDCityObjects2[i];
                    ++k;
                }
            }
            gdjs.GameCode.GDCityObjects2.length = k;
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.GameCode.GDCityObjects2 */
            {
                for (var i = 0, len = gdjs.GameCode.GDCityObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDCityObjects2[i].setX(gdjs.GameCode.GDCityObjects2[i].getWidth());
                }
            }
        }
    }

    {

        {
            gdjs.copyArray(runtimeScene.getObjects("City"), gdjs.GameCode.GDCityObjects1);
            {
                for (var i = 0, len = gdjs.GameCode.GDCityObjects1.length; i < len; ++i) {
                    gdjs.GameCode.GDCityObjects1[i].setX(gdjs.GameCode.GDCityObjects1[i].getX() - gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
                }
            }
        }
    }
};gdjs.GameCode.eventsList5 = function (runtimeScene) {

    {

        /* Reuse gdjs.GameCode.GDplayerObjects2 */

        gdjs.GameCode.condition0IsTrue_0.val = false;
        gdjs.GameCode.condition1IsTrue_0.val = false;
        gdjs.GameCode.condition2IsTrue_0.val = false;
        {
            for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects2.length; i < l; ++i) {
                if (gdjs.GameCode.GDplayerObjects2[i].getAnimation() != 6) {
                    gdjs.GameCode.condition0IsTrue_0.val = true;
                    gdjs.GameCode.GDplayerObjects2[k] = gdjs.GameCode.GDplayerObjects2[i];
                    ++k;
                }
            }
            gdjs.GameCode.GDplayerObjects2.length = k;
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects2.length; i < l; ++i) {
                    if (gdjs.GameCode.GDplayerObjects2[i].getAnimation() != 5) {
                        gdjs.GameCode.condition1IsTrue_0.val = true;
                        gdjs.GameCode.GDplayerObjects2[k] = gdjs.GameCode.GDplayerObjects2[i];
                        ++k;
                    }
                }
                gdjs.GameCode.GDplayerObjects2.length = k;
            }if (gdjs.GameCode.condition1IsTrue_0.val) {
                {
                    for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects2.length; i < l; ++i) {
                        if (gdjs.GameCode.GDplayerObjects2[i].getAnimation() != 7) {
                            gdjs.GameCode.condition2IsTrue_0.val = true;
                            gdjs.GameCode.GDplayerObjects2[k] = gdjs.GameCode.GDplayerObjects2[i];
                            ++k;
                        }
                    }
                    gdjs.GameCode.GDplayerObjects2.length = k;
                }
            }
        }
        if (gdjs.GameCode.condition2IsTrue_0.val) {
            /* Reuse gdjs.GameCode.GDplayerObjects2 */
            {
                for (var i = 0, len = gdjs.GameCode.GDplayerObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDplayerObjects2[i].setAnimationName("up");
                }
            }
        }
    }
};gdjs.GameCode.eventsList6 = function (runtimeScene) {

    {

        /* Reuse gdjs.GameCode.GDplayerObjects2 */

        gdjs.GameCode.condition0IsTrue_0.val = false;
        gdjs.GameCode.condition1IsTrue_0.val = false;
        gdjs.GameCode.condition2IsTrue_0.val = false;
        {
            for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects2.length; i < l; ++i) {
                if (gdjs.GameCode.GDplayerObjects2[i].getAnimation() != 6) {
                    gdjs.GameCode.condition0IsTrue_0.val = true;
                    gdjs.GameCode.GDplayerObjects2[k] = gdjs.GameCode.GDplayerObjects2[i];
                    ++k;
                }
            }
            gdjs.GameCode.GDplayerObjects2.length = k;
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects2.length; i < l; ++i) {
                    if (gdjs.GameCode.GDplayerObjects2[i].getAnimation() != 5) {
                        gdjs.GameCode.condition1IsTrue_0.val = true;
                        gdjs.GameCode.GDplayerObjects2[k] = gdjs.GameCode.GDplayerObjects2[i];
                        ++k;
                    }
                }
                gdjs.GameCode.GDplayerObjects2.length = k;
            }if (gdjs.GameCode.condition1IsTrue_0.val) {
                {
                    for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects2.length; i < l; ++i) {
                        if (gdjs.GameCode.GDplayerObjects2[i].getAnimation() != 7) {
                            gdjs.GameCode.condition2IsTrue_0.val = true;
                            gdjs.GameCode.GDplayerObjects2[k] = gdjs.GameCode.GDplayerObjects2[i];
                            ++k;
                        }
                    }
                    gdjs.GameCode.GDplayerObjects2.length = k;
                }
            }
        }
        if (gdjs.GameCode.condition2IsTrue_0.val) {
            /* Reuse gdjs.GameCode.GDplayerObjects2 */
            {
                for (var i = 0, len = gdjs.GameCode.GDplayerObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDplayerObjects2[i].setAnimationName("down");
                }
            }
        }
    }
};gdjs.GameCode.eventsList7 = function (runtimeScene) {

    {

        /* Reuse gdjs.GameCode.GDplayerObjects2 */

        gdjs.GameCode.condition0IsTrue_0.val = false;
        gdjs.GameCode.condition1IsTrue_0.val = false;
        gdjs.GameCode.condition2IsTrue_0.val = false;
        {
            for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects2.length; i < l; ++i) {
                if (gdjs.GameCode.GDplayerObjects2[i].getAnimation() != 6) {
                    gdjs.GameCode.condition0IsTrue_0.val = true;
                    gdjs.GameCode.GDplayerObjects2[k] = gdjs.GameCode.GDplayerObjects2[i];
                    ++k;
                }
            }
            gdjs.GameCode.GDplayerObjects2.length = k;
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects2.length; i < l; ++i) {
                    if (gdjs.GameCode.GDplayerObjects2[i].getAnimation() != 5) {
                        gdjs.GameCode.condition1IsTrue_0.val = true;
                        gdjs.GameCode.GDplayerObjects2[k] = gdjs.GameCode.GDplayerObjects2[i];
                        ++k;
                    }
                }
                gdjs.GameCode.GDplayerObjects2.length = k;
            }if (gdjs.GameCode.condition1IsTrue_0.val) {
                {
                    for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects2.length; i < l; ++i) {
                        if (gdjs.GameCode.GDplayerObjects2[i].getAnimation() != 7) {
                            gdjs.GameCode.condition2IsTrue_0.val = true;
                            gdjs.GameCode.GDplayerObjects2[k] = gdjs.GameCode.GDplayerObjects2[i];
                            ++k;
                        }
                    }
                    gdjs.GameCode.GDplayerObjects2.length = k;
                }
            }
        }
        if (gdjs.GameCode.condition2IsTrue_0.val) {
            /* Reuse gdjs.GameCode.GDplayerObjects2 */
            {
                for (var i = 0, len = gdjs.GameCode.GDplayerObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDplayerObjects2[i].setAnimationName("left");
                }
            }
        }
    }
};gdjs.GameCode.eventsList8 = function (runtimeScene) {

    {

        /* Reuse gdjs.GameCode.GDplayerObjects2 */

        gdjs.GameCode.condition0IsTrue_0.val = false;
        gdjs.GameCode.condition1IsTrue_0.val = false;
        gdjs.GameCode.condition2IsTrue_0.val = false;
        {
            for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects2.length; i < l; ++i) {
                if (gdjs.GameCode.GDplayerObjects2[i].getAnimation() != 6) {
                    gdjs.GameCode.condition0IsTrue_0.val = true;
                    gdjs.GameCode.GDplayerObjects2[k] = gdjs.GameCode.GDplayerObjects2[i];
                    ++k;
                }
            }
            gdjs.GameCode.GDplayerObjects2.length = k;
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects2.length; i < l; ++i) {
                    if (gdjs.GameCode.GDplayerObjects2[i].getAnimation() != 5) {
                        gdjs.GameCode.condition1IsTrue_0.val = true;
                        gdjs.GameCode.GDplayerObjects2[k] = gdjs.GameCode.GDplayerObjects2[i];
                        ++k;
                    }
                }
                gdjs.GameCode.GDplayerObjects2.length = k;
            }if (gdjs.GameCode.condition1IsTrue_0.val) {
                {
                    for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects2.length; i < l; ++i) {
                        if (gdjs.GameCode.GDplayerObjects2[i].getAnimation() != 7) {
                            gdjs.GameCode.condition2IsTrue_0.val = true;
                            gdjs.GameCode.GDplayerObjects2[k] = gdjs.GameCode.GDplayerObjects2[i];
                            ++k;
                        }
                    }
                    gdjs.GameCode.GDplayerObjects2.length = k;
                }
            }
        }
        if (gdjs.GameCode.condition2IsTrue_0.val) {
            /* Reuse gdjs.GameCode.GDplayerObjects2 */
            {
                for (var i = 0, len = gdjs.GameCode.GDplayerObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDplayerObjects2[i].setAnimationName("right");
                }
            }
        }
    }
};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDplayerObjects1Objects = Hashtable.newFrom({ "player": gdjs.GameCode.GDplayerObjects1 });gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDboundaryObjects1Objects = Hashtable.newFrom({ "boundary": gdjs.GameCode.GDboundaryObjects1 });gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDboundaryObjects1Objects = Hashtable.newFrom({ "boundary": gdjs.GameCode.GDboundaryObjects1 });gdjs.GameCode.eventsList9 = function (runtimeScene) {

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            {
                gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
                gdjs.GameCode.condition0IsTrue_1.val = false;
                gdjs.GameCode.condition1IsTrue_1.val = false;
                {
                    gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
                    if (gdjs.GameCode.condition0IsTrue_1.val) {
                        gdjs.GameCode.conditionTrue_1.val = true;
                    }
                }
                {
                    gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
                    if (gdjs.GameCode.condition1IsTrue_1.val) {
                        gdjs.GameCode.conditionTrue_1.val = true;
                    }
                }
                {}
            }
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameCode.GDplayerObjects2);
            {
                for (var i = 0, len = gdjs.GameCode.GDplayerObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDplayerObjects2[i].addPolarForce(270, 180, 0);
                }
            }
            {
                //Subevents
                gdjs.GameCode.eventsList5(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            {
                gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
                gdjs.GameCode.condition0IsTrue_1.val = false;
                gdjs.GameCode.condition1IsTrue_1.val = false;
                {
                    gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
                    if (gdjs.GameCode.condition0IsTrue_1.val) {
                        gdjs.GameCode.conditionTrue_1.val = true;
                    }
                }
                {
                    gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
                    if (gdjs.GameCode.condition1IsTrue_1.val) {
                        gdjs.GameCode.conditionTrue_1.val = true;
                    }
                }
                {}
            }
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameCode.GDplayerObjects2);
            {
                for (var i = 0, len = gdjs.GameCode.GDplayerObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDplayerObjects2[i].addPolarForce(90, 180, 0);
                }
            }
            {
                //Subevents
                gdjs.GameCode.eventsList6(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            {
                gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
                gdjs.GameCode.condition0IsTrue_1.val = false;
                gdjs.GameCode.condition1IsTrue_1.val = false;
                {
                    gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
                    if (gdjs.GameCode.condition0IsTrue_1.val) {
                        gdjs.GameCode.conditionTrue_1.val = true;
                    }
                }
                {
                    gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
                    if (gdjs.GameCode.condition1IsTrue_1.val) {
                        gdjs.GameCode.conditionTrue_1.val = true;
                    }
                }
                {}
            }
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameCode.GDplayerObjects2);
            {
                for (var i = 0, len = gdjs.GameCode.GDplayerObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDplayerObjects2[i].addPolarForce(180, 180, 0);
                }
            }
            {
                //Subevents
                gdjs.GameCode.eventsList7(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            {
                gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
                gdjs.GameCode.condition0IsTrue_1.val = false;
                gdjs.GameCode.condition1IsTrue_1.val = false;
                {
                    gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
                    if (gdjs.GameCode.condition0IsTrue_1.val) {
                        gdjs.GameCode.conditionTrue_1.val = true;
                    }
                }
                {
                    gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
                    if (gdjs.GameCode.condition1IsTrue_1.val) {
                        gdjs.GameCode.conditionTrue_1.val = true;
                    }
                }
                {}
            }
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameCode.GDplayerObjects2);
            {
                for (var i = 0, len = gdjs.GameCode.GDplayerObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDplayerObjects2[i].addPolarForce(0, 180, 0);
                }
            }
            {
                //Subevents
                gdjs.GameCode.eventsList8(runtimeScene);
            } //End of subevents
        }
    }

    {}

    {

        gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameCode.GDplayerObjects2);

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects2.length; i < l; ++i) {
                if (gdjs.GameCode.GDplayerObjects2[i].getX() <= 0) {
                    gdjs.GameCode.condition0IsTrue_0.val = true;
                    gdjs.GameCode.GDplayerObjects2[k] = gdjs.GameCode.GDplayerObjects2[i];
                    ++k;
                }
            }
            gdjs.GameCode.GDplayerObjects2.length = k;
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.GameCode.GDplayerObjects2 */
            {
                for (var i = 0, len = gdjs.GameCode.GDplayerObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDplayerObjects2[i].setX(gdjs.GameCode.GDplayerObjects2[i].getX() + (gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + gdjs.GameCode.GDplayerObjects2[i].getWidth() - 50));
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameCode.GDplayerObjects2);

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects2.length; i < l; ++i) {
                if (gdjs.GameCode.GDplayerObjects2[i].getX() >= gdjs.evtTools.window.getGameResolutionWidth(runtimeScene)) {
                    gdjs.GameCode.condition0IsTrue_0.val = true;
                    gdjs.GameCode.GDplayerObjects2[k] = gdjs.GameCode.GDplayerObjects2[i];
                    ++k;
                }
            }
            gdjs.GameCode.GDplayerObjects2.length = k;
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.GameCode.GDplayerObjects2 */
            {
                for (var i = 0, len = gdjs.GameCode.GDplayerObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDplayerObjects2[i].setX(gdjs.GameCode.GDplayerObjects2[i].getX() - (gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + gdjs.GameCode.GDplayerObjects2[i].getWidth() - 50));
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("boundary"), gdjs.GameCode.GDboundaryObjects1);
        gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameCode.GDplayerObjects1);

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDplayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDboundaryObjects1Objects, false, runtimeScene, false);
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.GameCode.GDboundaryObjects1 */
            /* Reuse gdjs.GameCode.GDplayerObjects1 */
            {
                for (var i = 0, len = gdjs.GameCode.GDplayerObjects1.length; i < len; ++i) {
                    gdjs.GameCode.GDplayerObjects1[i].separateFromObjectsList(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDboundaryObjects1Objects, false);
                }
            }
        }
    }
};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDplayerObjects2Objects = Hashtable.newFrom({ "player": gdjs.GameCode.GDplayerObjects2 });gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPIIObjects2Objects = Hashtable.newFrom({ "PII": gdjs.GameCode.GDPIIObjects2 });gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDplayerObjects1Objects = Hashtable.newFrom({ "player": gdjs.GameCode.GDplayerObjects1 });gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDnon_9595PIIObjects1Objects = Hashtable.newFrom({ "non_PII": gdjs.GameCode.GDnon_95PIIObjects1 });gdjs.GameCode.eventsList10 = function (runtimeScene) {

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "playeranimationtimer");
            }
        }
    }

    {

        {
            gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.GameCode.GDscoreObjects2);
            {
                for (var i = 0, len = gdjs.GameCode.GDscoreObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDscoreObjects2[i].setBBText("[shadow=black]" + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)) + "[/shadow]");
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("PII"), gdjs.GameCode.GDPIIObjects2);
        gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameCode.GDplayerObjects2);

        gdjs.GameCode.condition0IsTrue_0.val = false;
        gdjs.GameCode.condition1IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDplayerObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPIIObjects2Objects, false, runtimeScene, false);
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                {
                    gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
                    gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13017068);
                }
            }
        }
        if (gdjs.GameCode.condition1IsTrue_0.val) {
            /* Reuse gdjs.GameCode.GDPIIObjects2 */
            /* Reuse gdjs.GameCode.GDplayerObjects2 */
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Tiny Victory.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                for (var i = 0, len = gdjs.GameCode.GDplayerObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDplayerObjects2[i].setAnimation(6);
                }
            }{
                runtimeScene.getVariables().getFromIndex(1).add(1);
            }{
                for (var i = 0, len = gdjs.GameCode.GDPIIObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDPIIObjects2[i].deleteFromScene(runtimeScene);
                }
            }{
                gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "playeranimationtimer");
            }{
                gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "playeranimationtimer");
            }
        }
    }

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1.2, "playeranimationtimer");
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameCode.GDplayerObjects2);
            {
                for (var i = 0, len = gdjs.GameCode.GDplayerObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDplayerObjects2[i].setAnimation(3);
                }
            }{
                gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "playeranimationtimer");
            }{
                gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "playeranimationtimer");
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("non_PII"), gdjs.GameCode.GDnon_95PIIObjects1);
        gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameCode.GDplayerObjects1);

        gdjs.GameCode.condition0IsTrue_0.val = false;
        gdjs.GameCode.condition1IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDplayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDnon_9595PIIObjects1Objects, false, runtimeScene, false);
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                {
                    gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
                    gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13021916);
                }
            }
        }
        if (gdjs.GameCode.condition1IsTrue_0.val) {
            /* Reuse gdjs.GameCode.GDnon_95PIIObjects1 */
            /* Reuse gdjs.GameCode.GDplayerObjects1 */
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "AnimalCat_meow.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                for (var i = 0, len = gdjs.GameCode.GDplayerObjects1.length; i < len; ++i) {
                    gdjs.GameCode.GDplayerObjects1[i].setAnimation(5);
                }
            }{
                runtimeScene.getVariables().getFromIndex(1).add(-1);
            }{
                for (var i = 0, len = gdjs.GameCode.GDnon_95PIIObjects1.length; i < len; ++i) {
                    gdjs.GameCode.GDnon_95PIIObjects1[i].deleteFromScene(runtimeScene);
                }
            }{
                gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "playeranimationtimer");
            }{
                gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "playeranimationtimer");
            }
        }
    }
};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPIIObjects1Objects = Hashtable.newFrom({ "PII": gdjs.GameCode.GDPIIObjects1 });gdjs.GameCode.eventsList11 = function (runtimeScene) {

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PII");
            }
        }
    }

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        gdjs.GameCode.condition1IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)), "PII");
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimeScale(runtimeScene) > 0;
            }
        }
        if (gdjs.GameCode.condition1IsTrue_0.val) {
            gdjs.GameCode.GDPIIObjects1.length = 0;

            {
                gdjs.evtTools.object.createObjectOnScene(typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPIIObjects1Objects, gdjs.randomFloatInRange(55, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 55), -100, "");
            }{
                gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PII");
            }
        }
    }
};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDinfectedfileObjects1Objects = Hashtable.newFrom({ "infectedfile": gdjs.GameCode.GDinfectedfileObjects1 });gdjs.GameCode.eventsList12 = function (runtimeScene) {

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "threats");
            }
        }
    }

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        gdjs.GameCode.condition1IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)), "threats");
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimeScale(runtimeScene) > 0;
            }
        }
        if (gdjs.GameCode.condition1IsTrue_0.val) {
            gdjs.GameCode.GDinfectedfileObjects1.length = 0;

            {
                gdjs.evtTools.object.createObjectOnScene(typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDinfectedfileObjects1Objects, gdjs.randomFloatInRange(55, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 55), -100, "");
            }{
                gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "threats");
            }
        }
    }
};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDnon_9595PIIObjects1Objects = Hashtable.newFrom({ "non_PII": gdjs.GameCode.GDnon_95PIIObjects1 });gdjs.GameCode.eventsList13 = function (runtimeScene) {

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "non_PII");
            }
        }
    }

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        gdjs.GameCode.condition1IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)), "non_PII");
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimeScale(runtimeScene) > 0;
            }
        }
        if (gdjs.GameCode.condition1IsTrue_0.val) {
            gdjs.GameCode.GDnon_95PIIObjects1.length = 0;

            {
                gdjs.evtTools.object.createObjectOnScene(typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDnon_9595PIIObjects1Objects, gdjs.randomFloatInRange(55, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 55), -100, "");
            }{
                gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "non_PII");
            }
        }
    }
};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDplayerObjects1Objects = Hashtable.newFrom({ "player": gdjs.GameCode.GDplayerObjects1 });gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDinfectedfileObjects1Objects = Hashtable.newFrom({ "infectedfile": gdjs.GameCode.GDinfectedfileObjects1 });gdjs.GameCode.eventsList14 = function (runtimeScene) {

    {

        {
            gdjs.copyArray(runtimeScene.getObjects("health"), gdjs.GameCode.GDhealthObjects2);
            {
                for (var i = 0, len = gdjs.GameCode.GDhealthObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDhealthObjects2[i].setBBText("[shadow=black]" + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)) + "[/shadow]");
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("infectedfile"), gdjs.GameCode.GDinfectedfileObjects1);
        gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameCode.GDplayerObjects1);

        gdjs.GameCode.condition0IsTrue_0.val = false;
        gdjs.GameCode.condition1IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDplayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDinfectedfileObjects1Objects, false, runtimeScene, false);
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                {
                    gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
                    gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13032444);
                }
            }
        }
        if (gdjs.GameCode.condition1IsTrue_0.val) {
            /* Reuse gdjs.GameCode.GDinfectedfileObjects1 */
            /* Reuse gdjs.GameCode.GDplayerObjects1 */
            {
                runtimeScene.getVariables().getFromIndex(2).sub(1);
            }{
                for (var i = 0, len = gdjs.GameCode.GDinfectedfileObjects1.length; i < len; ++i) {
                    gdjs.GameCode.GDinfectedfileObjects1[i].deleteFromScene(runtimeScene);
                }
            }{
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Cat_Hiss_Edited.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                for (var i = 0, len = gdjs.GameCode.GDplayerObjects1.length; i < len; ++i) {
                    gdjs.GameCode.GDplayerObjects1[i].setAnimation(7);
                }
            }{
                gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "playeranimationtimer");
            }{
                gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "playeranimationtimer");
            }
        }
    }
};gdjs.GameCode.eventsList15 = function (runtimeScene) {

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        gdjs.GameCode.condition1IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) <= 0;
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                {
                    gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
                    gdjs.GameCode.condition0IsTrue_1.val = false;
                    gdjs.GameCode.condition1IsTrue_1.val = false;
                    {
                        gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) <= 9;
                    }if (gdjs.GameCode.condition0IsTrue_1.val) {
                        {
                            gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), false);
                        }
                    }
                    gdjs.GameCode.conditionTrue_1.val = true && gdjs.GameCode.condition0IsTrue_1.val && gdjs.GameCode.condition1IsTrue_1.val;
                }
            }
        }
        if (gdjs.GameCode.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
            }
        }
    }

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        gdjs.GameCode.condition1IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 10;
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                {
                    gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
                    gdjs.GameCode.condition0IsTrue_1.val = false;
                    {
                        gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), false);
                    }gdjs.GameCode.conditionTrue_1.val = true && gdjs.GameCode.condition0IsTrue_1.val;
                }
            }
        }
        if (gdjs.GameCode.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.common.setVariableBoolean(runtimeScene.getGame().getVariables().get("gameWon"), true);
            }{
                gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "You Win");
            }
        }
    }

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        gdjs.GameCode.condition1IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) <= 0;
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                {
                    gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
                    gdjs.GameCode.condition0IsTrue_1.val = false;
                    gdjs.GameCode.condition1IsTrue_1.val = false;
                    {
                        gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) >= 10;
                    }if (gdjs.GameCode.condition0IsTrue_1.val) {
                        {
                            gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
                        }
                    }
                    gdjs.GameCode.conditionTrue_1.val = true && gdjs.GameCode.condition0IsTrue_1.val && gdjs.GameCode.condition1IsTrue_1.val;
                }
            }
        }
        if (gdjs.GameCode.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "You Win Continued", false);
            }
        }
    }

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        gdjs.GameCode.condition1IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) <= 0;
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                {
                    gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
                    gdjs.GameCode.condition0IsTrue_1.val = false;
                    gdjs.GameCode.condition1IsTrue_1.val = false;
                    {
                        gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) <= 9;
                    }if (gdjs.GameCode.condition0IsTrue_1.val) {
                        {
                            gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
                        }
                    }
                    gdjs.GameCode.conditionTrue_1.val = true && gdjs.GameCode.condition0IsTrue_1.val && gdjs.GameCode.condition1IsTrue_1.val;
                }
            }
        }
        if (gdjs.GameCode.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
            }
        }
    }

    {

        {
            {
                runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)));
            }
        }
    }
};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDpauseObjects2Objects = Hashtable.newFrom({ "pause": gdjs.GameCode.GDpauseObjects2 });gdjs.GameCode.eventsList16 = function (runtimeScene) {

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            gdjs.copyArray(gdjs.GameCode.GDpointerObjects2, gdjs.GameCode.GDpointerObjects3);

            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                for (var i = 0, len = gdjs.GameCode.GDpointerObjects3.length; i < len; ++i) {
                    gdjs.GameCode.GDpointerObjects3[i].hide();
                }
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }{
                gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "GamePause");
            }
        }
    }

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        gdjs.GameCode.condition1IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.GameCode.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "GamePause");
            }
        }
    }
};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAudioObjects2Objects = Hashtable.newFrom({ "Audio": gdjs.GameCode.GDAudioObjects2 });gdjs.GameCode.eventsList17 = function (runtimeScene) {

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            gdjs.copyArray(gdjs.GameCode.GDpointerObjects2, gdjs.GameCode.GDpointerObjects3);

            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                for (var i = 0, len = gdjs.GameCode.GDpointerObjects3.length; i < len; ++i) {
                    gdjs.GameCode.GDpointerObjects3[i].hide();
                }
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }{
                gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Settings");
            }
        }
    }

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        gdjs.GameCode.condition1IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
            }
        }
        if (gdjs.GameCode.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bubble_pop.mp3", 2, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
            }{
                gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Settings");
            }
        }
    }
};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDpauseObjects2Objects = Hashtable.newFrom({ "pause": gdjs.GameCode.GDpauseObjects2 });gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAudioObjects2Objects = Hashtable.newFrom({ "Audio": gdjs.GameCode.GDAudioObjects2 });gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDpauseObjects1Objects = Hashtable.newFrom({ "pause": gdjs.GameCode.GDpauseObjects1 });gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAudioObjects1Objects = Hashtable.newFrom({ "Audio": gdjs.GameCode.GDAudioObjects1 });gdjs.GameCode.eventsList18 = function (runtimeScene) {

    {

        gdjs.copyArray(runtimeScene.getObjects("pause"), gdjs.GameCode.GDpauseObjects2);

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDpauseObjects2Objects, runtimeScene, true, false);
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.GameCode.GDpauseObjects2 */
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.GameCode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.GameCode.GDpauseObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDpauseObjects2[i].setAnimation(1);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.GameCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDpointerObjects2[i].hide(false);
                }
            }
            {
                //Subevents
                gdjs.GameCode.eventsList16(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Audio"), gdjs.GameCode.GDAudioObjects2);

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAudioObjects2Objects, runtimeScene, true, false);
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.GameCode.GDAudioObjects2 */
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.GameCode.GDpointerObjects2);
            {
                for (var i = 0, len = gdjs.GameCode.GDAudioObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDAudioObjects2[i].setAnimation(1);
                }
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.GameCode.GDpointerObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDpointerObjects2[i].hide(false);
                }
            }
            {
                //Subevents
                gdjs.GameCode.eventsList17(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("pause"), gdjs.GameCode.GDpauseObjects2);

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDpauseObjects2Objects, runtimeScene, true, true);
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.GameCode.GDpauseObjects2 */
            {
                for (var i = 0, len = gdjs.GameCode.GDpauseObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDpauseObjects2[i].setAnimation(0);
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Audio"), gdjs.GameCode.GDAudioObjects2);

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAudioObjects2Objects, runtimeScene, true, true);
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            /* Reuse gdjs.GameCode.GDAudioObjects2 */
            {
                for (var i = 0, len = gdjs.GameCode.GDAudioObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDAudioObjects2[i].setAnimation(0);
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("Audio"), gdjs.GameCode.GDAudioObjects1);
        gdjs.copyArray(runtimeScene.getObjects("pause"), gdjs.GameCode.GDpauseObjects1);

        gdjs.GameCode.condition0IsTrue_0.val = false;
        gdjs.GameCode.condition1IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDpauseObjects1Objects, runtimeScene, true, true);
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAudioObjects1Objects, runtimeScene, true, true);
            }
        }
        if (gdjs.GameCode.condition1IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.GameCode.GDpointerObjects1);
            {
                for (var i = 0, len = gdjs.GameCode.GDpointerObjects1.length; i < len; ++i) {
                    gdjs.GameCode.GDpointerObjects1[i].hide();
                }
            }{
                gdjs.evtTools.input.showCursor(runtimeScene);
            }
        }
    }
};gdjs.GameCode.eventsList19 = function (runtimeScene) {

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.GameCode.GDpointerObjects3);
            {
                gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
            }{
                gdjs.evtTools.input.hideCursor(runtimeScene);
            }{
                for (var i = 0, len = gdjs.GameCode.GDpointerObjects3.length; i < len; ++i) {
                    gdjs.GameCode.GDpointerObjects3[i].hide();
                }
            }
        }
    }

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        gdjs.GameCode.condition1IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = !gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), false);
            }
        }
        if (gdjs.GameCode.condition1IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("phoneUIdown"), gdjs.GameCode.GDphoneUIdownObjects2);
            gdjs.copyArray(runtimeScene.getObjects("phoneUIleft"), gdjs.GameCode.GDphoneUIleftObjects2);
            gdjs.copyArray(runtimeScene.getObjects("phoneUIright"), gdjs.GameCode.GDphoneUIrightObjects2);
            gdjs.copyArray(runtimeScene.getObjects("phoneUIup"), gdjs.GameCode.GDphoneUIupObjects2);
            {
                for (var i = 0, len = gdjs.GameCode.GDphoneUIleftObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDphoneUIleftObjects2[i].hide();
                }
                for (var i = 0, len = gdjs.GameCode.GDphoneUIrightObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDphoneUIrightObjects2[i].hide();
                }
                for (var i = 0, len = gdjs.GameCode.GDphoneUIupObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDphoneUIupObjects2[i].hide();
                }
                for (var i = 0, len = gdjs.GameCode.GDphoneUIdownObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDphoneUIdownObjects2[i].hide();
                }
            }
        }
    }
};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDphoneUIdownObjects2Objects = Hashtable.newFrom({ "phoneUIdown": gdjs.GameCode.GDphoneUIdownObjects2 });gdjs.GameCode.eventsList20 = function (runtimeScene) {

    {

        /* Reuse gdjs.GameCode.GDplayerObjects3 */

        gdjs.GameCode.condition0IsTrue_0.val = false;
        gdjs.GameCode.condition1IsTrue_0.val = false;
        gdjs.GameCode.condition2IsTrue_0.val = false;
        {
            for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects3.length; i < l; ++i) {
                if (gdjs.GameCode.GDplayerObjects3[i].getAnimation() != 6) {
                    gdjs.GameCode.condition0IsTrue_0.val = true;
                    gdjs.GameCode.GDplayerObjects3[k] = gdjs.GameCode.GDplayerObjects3[i];
                    ++k;
                }
            }
            gdjs.GameCode.GDplayerObjects3.length = k;
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects3.length; i < l; ++i) {
                    if (gdjs.GameCode.GDplayerObjects3[i].getAnimation() != 5) {
                        gdjs.GameCode.condition1IsTrue_0.val = true;
                        gdjs.GameCode.GDplayerObjects3[k] = gdjs.GameCode.GDplayerObjects3[i];
                        ++k;
                    }
                }
                gdjs.GameCode.GDplayerObjects3.length = k;
            }if (gdjs.GameCode.condition1IsTrue_0.val) {
                {
                    for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects3.length; i < l; ++i) {
                        if (gdjs.GameCode.GDplayerObjects3[i].getAnimation() != 7) {
                            gdjs.GameCode.condition2IsTrue_0.val = true;
                            gdjs.GameCode.GDplayerObjects3[k] = gdjs.GameCode.GDplayerObjects3[i];
                            ++k;
                        }
                    }
                    gdjs.GameCode.GDplayerObjects3.length = k;
                }
            }
        }
        if (gdjs.GameCode.condition2IsTrue_0.val) {
            /* Reuse gdjs.GameCode.GDplayerObjects3 */
            {
                for (var i = 0, len = gdjs.GameCode.GDplayerObjects3.length; i < len; ++i) {
                    gdjs.GameCode.GDplayerObjects3[i].setAnimationName("down");
                }
            }
        }
    }
};gdjs.GameCode.eventsList21 = function (runtimeScene) {

    {

        /* Reuse gdjs.GameCode.GDplayerObjects2 */

        gdjs.GameCode.condition0IsTrue_0.val = false;
        gdjs.GameCode.condition1IsTrue_0.val = false;
        gdjs.GameCode.condition2IsTrue_0.val = false;
        {
            for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects2.length; i < l; ++i) {
                if (gdjs.GameCode.GDplayerObjects2[i].getAnimation() != 6) {
                    gdjs.GameCode.condition0IsTrue_0.val = true;
                    gdjs.GameCode.GDplayerObjects2[k] = gdjs.GameCode.GDplayerObjects2[i];
                    ++k;
                }
            }
            gdjs.GameCode.GDplayerObjects2.length = k;
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects2.length; i < l; ++i) {
                    if (gdjs.GameCode.GDplayerObjects2[i].getAnimation() != 5) {
                        gdjs.GameCode.condition1IsTrue_0.val = true;
                        gdjs.GameCode.GDplayerObjects2[k] = gdjs.GameCode.GDplayerObjects2[i];
                        ++k;
                    }
                }
                gdjs.GameCode.GDplayerObjects2.length = k;
            }if (gdjs.GameCode.condition1IsTrue_0.val) {
                {
                    for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects2.length; i < l; ++i) {
                        if (gdjs.GameCode.GDplayerObjects2[i].getAnimation() != 7) {
                            gdjs.GameCode.condition2IsTrue_0.val = true;
                            gdjs.GameCode.GDplayerObjects2[k] = gdjs.GameCode.GDplayerObjects2[i];
                            ++k;
                        }
                    }
                    gdjs.GameCode.GDplayerObjects2.length = k;
                }
            }
        }
        if (gdjs.GameCode.condition2IsTrue_0.val) {
            /* Reuse gdjs.GameCode.GDplayerObjects2 */
            {
                for (var i = 0, len = gdjs.GameCode.GDplayerObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDplayerObjects2[i].setAnimationName("down");
                }
            }
        }
    }
};gdjs.GameCode.eventsList22 = function (runtimeScene) {

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameCode.GDplayerObjects3);
            {
                for (var i = 0, len = gdjs.GameCode.GDplayerObjects3.length; i < len; ++i) {
                    gdjs.GameCode.GDplayerObjects3[i].addPolarForce(90, 180, 0);
                }
            }
            {
                //Subevents
                gdjs.GameCode.eventsList20(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        gdjs.GameCode.condition1IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = !gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
            }
        }
        if (gdjs.GameCode.condition1IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameCode.GDplayerObjects2);
            {
                for (var i = 0, len = gdjs.GameCode.GDplayerObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDplayerObjects2[i].addPolarForce(90, 180, 0);
                }
            }
            {
                //Subevents
                gdjs.GameCode.eventsList21(runtimeScene);
            } //End of subevents
        }
    }
};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDphoneUIupObjects2Objects = Hashtable.newFrom({ "phoneUIup": gdjs.GameCode.GDphoneUIupObjects2 });gdjs.GameCode.eventsList23 = function (runtimeScene) {

    {

        /* Reuse gdjs.GameCode.GDplayerObjects3 */

        gdjs.GameCode.condition0IsTrue_0.val = false;
        gdjs.GameCode.condition1IsTrue_0.val = false;
        gdjs.GameCode.condition2IsTrue_0.val = false;
        {
            for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects3.length; i < l; ++i) {
                if (gdjs.GameCode.GDplayerObjects3[i].getAnimation() != 6) {
                    gdjs.GameCode.condition0IsTrue_0.val = true;
                    gdjs.GameCode.GDplayerObjects3[k] = gdjs.GameCode.GDplayerObjects3[i];
                    ++k;
                }
            }
            gdjs.GameCode.GDplayerObjects3.length = k;
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects3.length; i < l; ++i) {
                    if (gdjs.GameCode.GDplayerObjects3[i].getAnimation() != 5) {
                        gdjs.GameCode.condition1IsTrue_0.val = true;
                        gdjs.GameCode.GDplayerObjects3[k] = gdjs.GameCode.GDplayerObjects3[i];
                        ++k;
                    }
                }
                gdjs.GameCode.GDplayerObjects3.length = k;
            }if (gdjs.GameCode.condition1IsTrue_0.val) {
                {
                    for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects3.length; i < l; ++i) {
                        if (gdjs.GameCode.GDplayerObjects3[i].getAnimation() != 7) {
                            gdjs.GameCode.condition2IsTrue_0.val = true;
                            gdjs.GameCode.GDplayerObjects3[k] = gdjs.GameCode.GDplayerObjects3[i];
                            ++k;
                        }
                    }
                    gdjs.GameCode.GDplayerObjects3.length = k;
                }
            }
        }
        if (gdjs.GameCode.condition2IsTrue_0.val) {
            /* Reuse gdjs.GameCode.GDplayerObjects3 */
            {
                for (var i = 0, len = gdjs.GameCode.GDplayerObjects3.length; i < len; ++i) {
                    gdjs.GameCode.GDplayerObjects3[i].setAnimationName("up");
                }
            }
        }
    }
};gdjs.GameCode.eventsList24 = function (runtimeScene) {

    {

        /* Reuse gdjs.GameCode.GDplayerObjects2 */

        gdjs.GameCode.condition0IsTrue_0.val = false;
        gdjs.GameCode.condition1IsTrue_0.val = false;
        gdjs.GameCode.condition2IsTrue_0.val = false;
        {
            for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects2.length; i < l; ++i) {
                if (gdjs.GameCode.GDplayerObjects2[i].getAnimation() != 6) {
                    gdjs.GameCode.condition0IsTrue_0.val = true;
                    gdjs.GameCode.GDplayerObjects2[k] = gdjs.GameCode.GDplayerObjects2[i];
                    ++k;
                }
            }
            gdjs.GameCode.GDplayerObjects2.length = k;
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects2.length; i < l; ++i) {
                    if (gdjs.GameCode.GDplayerObjects2[i].getAnimation() != 5) {
                        gdjs.GameCode.condition1IsTrue_0.val = true;
                        gdjs.GameCode.GDplayerObjects2[k] = gdjs.GameCode.GDplayerObjects2[i];
                        ++k;
                    }
                }
                gdjs.GameCode.GDplayerObjects2.length = k;
            }if (gdjs.GameCode.condition1IsTrue_0.val) {
                {
                    for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects2.length; i < l; ++i) {
                        if (gdjs.GameCode.GDplayerObjects2[i].getAnimation() != 7) {
                            gdjs.GameCode.condition2IsTrue_0.val = true;
                            gdjs.GameCode.GDplayerObjects2[k] = gdjs.GameCode.GDplayerObjects2[i];
                            ++k;
                        }
                    }
                    gdjs.GameCode.GDplayerObjects2.length = k;
                }
            }
        }
        if (gdjs.GameCode.condition2IsTrue_0.val) {
            /* Reuse gdjs.GameCode.GDplayerObjects2 */
            {
                for (var i = 0, len = gdjs.GameCode.GDplayerObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDplayerObjects2[i].setAnimationName("up");
                }
            }
        }
    }
};gdjs.GameCode.eventsList25 = function (runtimeScene) {

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameCode.GDplayerObjects3);
            {
                for (var i = 0, len = gdjs.GameCode.GDplayerObjects3.length; i < len; ++i) {
                    gdjs.GameCode.GDplayerObjects3[i].addPolarForce(270, 180, 0);
                }
            }
            {
                //Subevents
                gdjs.GameCode.eventsList23(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        gdjs.GameCode.condition1IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = !gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
            }
        }
        if (gdjs.GameCode.condition1IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameCode.GDplayerObjects2);
            {
                for (var i = 0, len = gdjs.GameCode.GDplayerObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDplayerObjects2[i].addPolarForce(270, 180, 0);
                }
            }
            {
                //Subevents
                gdjs.GameCode.eventsList24(runtimeScene);
            } //End of subevents
        }
    }
};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDphoneUIrightObjects2Objects = Hashtable.newFrom({ "phoneUIright": gdjs.GameCode.GDphoneUIrightObjects2 });gdjs.GameCode.eventsList26 = function (runtimeScene) {

    {

        /* Reuse gdjs.GameCode.GDplayerObjects3 */

        gdjs.GameCode.condition0IsTrue_0.val = false;
        gdjs.GameCode.condition1IsTrue_0.val = false;
        gdjs.GameCode.condition2IsTrue_0.val = false;
        {
            for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects3.length; i < l; ++i) {
                if (gdjs.GameCode.GDplayerObjects3[i].getAnimation() != 6) {
                    gdjs.GameCode.condition0IsTrue_0.val = true;
                    gdjs.GameCode.GDplayerObjects3[k] = gdjs.GameCode.GDplayerObjects3[i];
                    ++k;
                }
            }
            gdjs.GameCode.GDplayerObjects3.length = k;
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects3.length; i < l; ++i) {
                    if (gdjs.GameCode.GDplayerObjects3[i].getAnimation() != 5) {
                        gdjs.GameCode.condition1IsTrue_0.val = true;
                        gdjs.GameCode.GDplayerObjects3[k] = gdjs.GameCode.GDplayerObjects3[i];
                        ++k;
                    }
                }
                gdjs.GameCode.GDplayerObjects3.length = k;
            }if (gdjs.GameCode.condition1IsTrue_0.val) {
                {
                    for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects3.length; i < l; ++i) {
                        if (gdjs.GameCode.GDplayerObjects3[i].getAnimation() != 7) {
                            gdjs.GameCode.condition2IsTrue_0.val = true;
                            gdjs.GameCode.GDplayerObjects3[k] = gdjs.GameCode.GDplayerObjects3[i];
                            ++k;
                        }
                    }
                    gdjs.GameCode.GDplayerObjects3.length = k;
                }
            }
        }
        if (gdjs.GameCode.condition2IsTrue_0.val) {
            /* Reuse gdjs.GameCode.GDplayerObjects3 */
            {
                for (var i = 0, len = gdjs.GameCode.GDplayerObjects3.length; i < len; ++i) {
                    gdjs.GameCode.GDplayerObjects3[i].setAnimationName("right");
                }
            }
        }
    }
};gdjs.GameCode.eventsList27 = function (runtimeScene) {

    {

        /* Reuse gdjs.GameCode.GDplayerObjects2 */

        gdjs.GameCode.condition0IsTrue_0.val = false;
        gdjs.GameCode.condition1IsTrue_0.val = false;
        gdjs.GameCode.condition2IsTrue_0.val = false;
        {
            for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects2.length; i < l; ++i) {
                if (gdjs.GameCode.GDplayerObjects2[i].getAnimation() != 6) {
                    gdjs.GameCode.condition0IsTrue_0.val = true;
                    gdjs.GameCode.GDplayerObjects2[k] = gdjs.GameCode.GDplayerObjects2[i];
                    ++k;
                }
            }
            gdjs.GameCode.GDplayerObjects2.length = k;
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects2.length; i < l; ++i) {
                    if (gdjs.GameCode.GDplayerObjects2[i].getAnimation() != 5) {
                        gdjs.GameCode.condition1IsTrue_0.val = true;
                        gdjs.GameCode.GDplayerObjects2[k] = gdjs.GameCode.GDplayerObjects2[i];
                        ++k;
                    }
                }
                gdjs.GameCode.GDplayerObjects2.length = k;
            }if (gdjs.GameCode.condition1IsTrue_0.val) {
                {
                    for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects2.length; i < l; ++i) {
                        if (gdjs.GameCode.GDplayerObjects2[i].getAnimation() != 7) {
                            gdjs.GameCode.condition2IsTrue_0.val = true;
                            gdjs.GameCode.GDplayerObjects2[k] = gdjs.GameCode.GDplayerObjects2[i];
                            ++k;
                        }
                    }
                    gdjs.GameCode.GDplayerObjects2.length = k;
                }
            }
        }
        if (gdjs.GameCode.condition2IsTrue_0.val) {
            /* Reuse gdjs.GameCode.GDplayerObjects2 */
            {
                for (var i = 0, len = gdjs.GameCode.GDplayerObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDplayerObjects2[i].setAnimationName("right");
                }
            }
        }
    }
};gdjs.GameCode.eventsList28 = function (runtimeScene) {

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameCode.GDplayerObjects3);
            {
                for (var i = 0, len = gdjs.GameCode.GDplayerObjects3.length; i < len; ++i) {
                    gdjs.GameCode.GDplayerObjects3[i].addPolarForce(0, 180, 0);
                }
            }
            {
                //Subevents
                gdjs.GameCode.eventsList26(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        gdjs.GameCode.condition1IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = !gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
            }
        }
        if (gdjs.GameCode.condition1IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameCode.GDplayerObjects2);
            {
                for (var i = 0, len = gdjs.GameCode.GDplayerObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDplayerObjects2[i].addPolarForce(0, 180, 0);
                }
            }
            {
                //Subevents
                gdjs.GameCode.eventsList27(runtimeScene);
            } //End of subevents
        }
    }
};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDphoneUIleftObjects1Objects = Hashtable.newFrom({ "phoneUIleft": gdjs.GameCode.GDphoneUIleftObjects1 });gdjs.GameCode.eventsList29 = function (runtimeScene) {

    {

        /* Reuse gdjs.GameCode.GDplayerObjects2 */

        gdjs.GameCode.condition0IsTrue_0.val = false;
        gdjs.GameCode.condition1IsTrue_0.val = false;
        gdjs.GameCode.condition2IsTrue_0.val = false;
        {
            for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects2.length; i < l; ++i) {
                if (gdjs.GameCode.GDplayerObjects2[i].getAnimation() != 6) {
                    gdjs.GameCode.condition0IsTrue_0.val = true;
                    gdjs.GameCode.GDplayerObjects2[k] = gdjs.GameCode.GDplayerObjects2[i];
                    ++k;
                }
            }
            gdjs.GameCode.GDplayerObjects2.length = k;
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects2.length; i < l; ++i) {
                    if (gdjs.GameCode.GDplayerObjects2[i].getAnimation() != 5) {
                        gdjs.GameCode.condition1IsTrue_0.val = true;
                        gdjs.GameCode.GDplayerObjects2[k] = gdjs.GameCode.GDplayerObjects2[i];
                        ++k;
                    }
                }
                gdjs.GameCode.GDplayerObjects2.length = k;
            }if (gdjs.GameCode.condition1IsTrue_0.val) {
                {
                    for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects2.length; i < l; ++i) {
                        if (gdjs.GameCode.GDplayerObjects2[i].getAnimation() != 7) {
                            gdjs.GameCode.condition2IsTrue_0.val = true;
                            gdjs.GameCode.GDplayerObjects2[k] = gdjs.GameCode.GDplayerObjects2[i];
                            ++k;
                        }
                    }
                    gdjs.GameCode.GDplayerObjects2.length = k;
                }
            }
        }
        if (gdjs.GameCode.condition2IsTrue_0.val) {
            /* Reuse gdjs.GameCode.GDplayerObjects2 */
            {
                for (var i = 0, len = gdjs.GameCode.GDplayerObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDplayerObjects2[i].setAnimationName("left");
                }
            }
        }
    }
};gdjs.GameCode.eventsList30 = function (runtimeScene) {

    {

        /* Reuse gdjs.GameCode.GDplayerObjects1 */

        gdjs.GameCode.condition0IsTrue_0.val = false;
        gdjs.GameCode.condition1IsTrue_0.val = false;
        gdjs.GameCode.condition2IsTrue_0.val = false;
        {
            for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects1.length; i < l; ++i) {
                if (gdjs.GameCode.GDplayerObjects1[i].getAnimation() != 6) {
                    gdjs.GameCode.condition0IsTrue_0.val = true;
                    gdjs.GameCode.GDplayerObjects1[k] = gdjs.GameCode.GDplayerObjects1[i];
                    ++k;
                }
            }
            gdjs.GameCode.GDplayerObjects1.length = k;
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects1.length; i < l; ++i) {
                    if (gdjs.GameCode.GDplayerObjects1[i].getAnimation() != 5) {
                        gdjs.GameCode.condition1IsTrue_0.val = true;
                        gdjs.GameCode.GDplayerObjects1[k] = gdjs.GameCode.GDplayerObjects1[i];
                        ++k;
                    }
                }
                gdjs.GameCode.GDplayerObjects1.length = k;
            }if (gdjs.GameCode.condition1IsTrue_0.val) {
                {
                    for (var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects1.length; i < l; ++i) {
                        if (gdjs.GameCode.GDplayerObjects1[i].getAnimation() != 7) {
                            gdjs.GameCode.condition2IsTrue_0.val = true;
                            gdjs.GameCode.GDplayerObjects1[k] = gdjs.GameCode.GDplayerObjects1[i];
                            ++k;
                        }
                    }
                    gdjs.GameCode.GDplayerObjects1.length = k;
                }
            }
        }
        if (gdjs.GameCode.condition2IsTrue_0.val) {
            /* Reuse gdjs.GameCode.GDplayerObjects1 */
            {
                for (var i = 0, len = gdjs.GameCode.GDplayerObjects1.length; i < len; ++i) {
                    gdjs.GameCode.GDplayerObjects1[i].setAnimationName("left");
                }
            }
        }
    }
};gdjs.GameCode.eventsList31 = function (runtimeScene) {

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameCode.GDplayerObjects2);
            {
                for (var i = 0, len = gdjs.GameCode.GDplayerObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDplayerObjects2[i].addPolarForce(180, 180, 0);
                }
            }
            {
                //Subevents
                gdjs.GameCode.eventsList29(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        gdjs.GameCode.condition1IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = !gdjs.evtTools.systemInfo.isMobile();
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
            }
        }
        if (gdjs.GameCode.condition1IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameCode.GDplayerObjects1);
            {
                for (var i = 0, len = gdjs.GameCode.GDplayerObjects1.length; i < len; ++i) {
                    gdjs.GameCode.GDplayerObjects1[i].addPolarForce(180, 180, 0);
                }
            }
            {
                //Subevents
                gdjs.GameCode.eventsList30(runtimeScene);
            } //End of subevents
        }
    }
};gdjs.GameCode.eventsList32 = function (runtimeScene) {

    {

        gdjs.copyArray(gdjs.GameCode.GDphoneUIdownObjects1, gdjs.GameCode.GDphoneUIdownObjects2);

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDphoneUIdownObjects2Objects, runtimeScene, true, false);
        }if (gdjs.GameCode.condition0IsTrue_0.val) {

            {
                //Subevents
                gdjs.GameCode.eventsList22(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(gdjs.GameCode.GDphoneUIupObjects1, gdjs.GameCode.GDphoneUIupObjects2);

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDphoneUIupObjects2Objects, runtimeScene, true, false);
        }if (gdjs.GameCode.condition0IsTrue_0.val) {

            {
                //Subevents
                gdjs.GameCode.eventsList25(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.copyArray(gdjs.GameCode.GDphoneUIrightObjects1, gdjs.GameCode.GDphoneUIrightObjects2);

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDphoneUIrightObjects2Objects, runtimeScene, true, false);
        }if (gdjs.GameCode.condition0IsTrue_0.val) {

            {
                //Subevents
                gdjs.GameCode.eventsList28(runtimeScene);
            } //End of subevents
        }
    }

    {

        /* Reuse gdjs.GameCode.GDphoneUIleftObjects1 */

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDphoneUIleftObjects1Objects, runtimeScene, true, false);
        }if (gdjs.GameCode.condition0IsTrue_0.val) {

            {
                //Subevents
                gdjs.GameCode.eventsList31(runtimeScene);
            } //End of subevents
        }
    }
};gdjs.GameCode.eventsList33 = function (runtimeScene) {

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        }if (gdjs.GameCode.condition0IsTrue_0.val) {

            {
                //Subevents
                gdjs.GameCode.eventsList19(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        gdjs.GameCode.condition1IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), true);
            }
        }
        if (gdjs.GameCode.condition1IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("phoneUIdown"), gdjs.GameCode.GDphoneUIdownObjects2);
            gdjs.copyArray(runtimeScene.getObjects("phoneUIleft"), gdjs.GameCode.GDphoneUIleftObjects2);
            gdjs.copyArray(runtimeScene.getObjects("phoneUIright"), gdjs.GameCode.GDphoneUIrightObjects2);
            gdjs.copyArray(runtimeScene.getObjects("phoneUIup"), gdjs.GameCode.GDphoneUIupObjects2);
            {
                for (var i = 0, len = gdjs.GameCode.GDphoneUIleftObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDphoneUIleftObjects2[i].hide(false);
                }
                for (var i = 0, len = gdjs.GameCode.GDphoneUIrightObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDphoneUIrightObjects2[i].hide(false);
                }
                for (var i = 0, len = gdjs.GameCode.GDphoneUIupObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDphoneUIupObjects2[i].hide(false);
                }
                for (var i = 0, len = gdjs.GameCode.GDphoneUIdownObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDphoneUIdownObjects2[i].hide(false);
                }
            }
        }
    }

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        gdjs.GameCode.condition1IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), false);
            }
        }
        if (gdjs.GameCode.condition1IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("phoneUIdown"), gdjs.GameCode.GDphoneUIdownObjects2);
            gdjs.copyArray(runtimeScene.getObjects("phoneUIleft"), gdjs.GameCode.GDphoneUIleftObjects2);
            gdjs.copyArray(runtimeScene.getObjects("phoneUIright"), gdjs.GameCode.GDphoneUIrightObjects2);
            gdjs.copyArray(runtimeScene.getObjects("phoneUIup"), gdjs.GameCode.GDphoneUIupObjects2);
            {
                for (var i = 0, len = gdjs.GameCode.GDphoneUIleftObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDphoneUIleftObjects2[i].hide();
                }
                for (var i = 0, len = gdjs.GameCode.GDphoneUIrightObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDphoneUIrightObjects2[i].hide();
                }
                for (var i = 0, len = gdjs.GameCode.GDphoneUIupObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDphoneUIupObjects2[i].hide();
                }
                for (var i = 0, len = gdjs.GameCode.GDphoneUIdownObjects2.length; i < len; ++i) {
                    gdjs.GameCode.GDphoneUIdownObjects2[i].hide();
                }
            }
        }
    }

    {

        gdjs.copyArray(runtimeScene.getObjects("phoneUIdown"), gdjs.GameCode.GDphoneUIdownObjects1);
        gdjs.copyArray(runtimeScene.getObjects("phoneUIleft"), gdjs.GameCode.GDphoneUIleftObjects1);
        gdjs.copyArray(runtimeScene.getObjects("phoneUIright"), gdjs.GameCode.GDphoneUIrightObjects1);
        gdjs.copyArray(runtimeScene.getObjects("phoneUIup"), gdjs.GameCode.GDphoneUIupObjects1);

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            for (var i = 0, k = 0, l = gdjs.GameCode.GDphoneUIleftObjects1.length; i < l; ++i) {
                if (gdjs.GameCode.GDphoneUIleftObjects1[i].isVisible()) {
                    gdjs.GameCode.condition0IsTrue_0.val = true;
                    gdjs.GameCode.GDphoneUIleftObjects1[k] = gdjs.GameCode.GDphoneUIleftObjects1[i];
                    ++k;
                }
            }
            gdjs.GameCode.GDphoneUIleftObjects1.length = k;for (var i = 0, k = 0, l = gdjs.GameCode.GDphoneUIrightObjects1.length; i < l; ++i) {
                if (gdjs.GameCode.GDphoneUIrightObjects1[i].isVisible()) {
                    gdjs.GameCode.condition0IsTrue_0.val = true;
                    gdjs.GameCode.GDphoneUIrightObjects1[k] = gdjs.GameCode.GDphoneUIrightObjects1[i];
                    ++k;
                }
            }
            gdjs.GameCode.GDphoneUIrightObjects1.length = k;for (var i = 0, k = 0, l = gdjs.GameCode.GDphoneUIupObjects1.length; i < l; ++i) {
                if (gdjs.GameCode.GDphoneUIupObjects1[i].isVisible()) {
                    gdjs.GameCode.condition0IsTrue_0.val = true;
                    gdjs.GameCode.GDphoneUIupObjects1[k] = gdjs.GameCode.GDphoneUIupObjects1[i];
                    ++k;
                }
            }
            gdjs.GameCode.GDphoneUIupObjects1.length = k;for (var i = 0, k = 0, l = gdjs.GameCode.GDphoneUIdownObjects1.length; i < l; ++i) {
                if (gdjs.GameCode.GDphoneUIdownObjects1[i].isVisible()) {
                    gdjs.GameCode.condition0IsTrue_0.val = true;
                    gdjs.GameCode.GDphoneUIdownObjects1[k] = gdjs.GameCode.GDphoneUIdownObjects1[i];
                    ++k;
                }
            }
            gdjs.GameCode.GDphoneUIdownObjects1.length = k;
        }if (gdjs.GameCode.condition0IsTrue_0.val) {

            {
                //Subevents
                gdjs.GameCode.eventsList32(runtimeScene);
            } //End of subevents
        }
    }
};gdjs.GameCode.eventsList34 = function (runtimeScene) {

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, 0);
            }
        }
    }

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 25;
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, 25);
            }
        }
    }

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 50;
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, 50);
            }
        }
    }

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 75;
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, 75);
            }
        }
    }

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 100;
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, 100);
            }
        }
    }

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 0);
            }
        }
    }

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 25;
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 25);
            }
        }
    }

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 50;
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 50);
            }
        }
    }

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 75;
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 75);
            }
        }
    }

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 100;
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 100);
            }
        }
    }
};gdjs.GameCode.eventsList35 = function (runtimeScene) {

    {

        {
            gdjs.copyArray(runtimeScene.getObjects("pointer"), gdjs.GameCode.GDpointerObjects1);
            {
                for (var i = 0, len = gdjs.GameCode.GDpointerObjects1.length; i < len; ++i) {
                    gdjs.GameCode.GDpointerObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
                }
            }
        }
    }

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("freeplayText"), gdjs.GameCode.GDfreeplayTextObjects1);
            gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameCode.GDplayerObjects1);
            {
                for (var i = 0, len = gdjs.GameCode.GDplayerObjects1.length; i < len; ++i) {
                    gdjs.GameCode.GDplayerObjects1[i].playAnimation();
                }
            }{
                for (var i = 0, len = gdjs.GameCode.GDfreeplayTextObjects1.length; i < len; ++i) {
                    gdjs.GameCode.GDfreeplayTextObjects1[i].hide();
                }
            }
            {
                //Subevents
                gdjs.GameCode.eventsList1(runtimeScene);
            } //End of subevents
        }
    }

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        gdjs.GameCode.condition1IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                {
                    gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
                    gdjs.GameCode.condition0IsTrue_1.val = false;
                    gdjs.GameCode.condition1IsTrue_1.val = false;
                    {
                        gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.sound.isMusicOnChannelStopped(runtimeScene, 1);
                        if (gdjs.GameCode.condition0IsTrue_1.val) {
                            gdjs.GameCode.conditionTrue_1.val = true;
                        }
                    }
                    {
                        gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.sound.isMusicOnChannelPaused(runtimeScene, 1);
                        if (gdjs.GameCode.condition1IsTrue_1.val) {
                            gdjs.GameCode.conditionTrue_1.val = true;
                        }
                    }
                    {}
                }
            }
        }
        if (gdjs.GameCode.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
            }
        }
    }

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 3);
            }
        }
    }

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        gdjs.GameCode.condition1IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            {
                gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.sound.isMusicOnChannelPaused(runtimeScene, 1);
            }
        }
        if (gdjs.GameCode.condition1IsTrue_0.val) {
            {
                gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
            }
        }
    }

    {

        gdjs.GameCode.condition0IsTrue_0.val = false;
        {
            gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
        }if (gdjs.GameCode.condition0IsTrue_0.val) {
            gdjs.copyArray(runtimeScene.getObjects("CollectTen"), gdjs.GameCode.GDCollectTenObjects1);
            gdjs.copyArray(runtimeScene.getObjects("freeplayText"), gdjs.GameCode.GDfreeplayTextObjects1);
            {
                for (var i = 0, len = gdjs.GameCode.GDfreeplayTextObjects1.length; i < len; ++i) {
                    gdjs.GameCode.GDfreeplayTextObjects1[i].hide(false);
                }
            }{
                for (var i = 0, len = gdjs.GameCode.GDCollectTenObjects1.length; i < len; ++i) {
                    gdjs.GameCode.GDCollectTenObjects1[i].hide();
                }
            }
        }
    }

    {

        gdjs.GameCode.eventsList2(runtimeScene);
    }

    {

        gdjs.GameCode.eventsList3(runtimeScene);
    }

    {

        gdjs.GameCode.eventsList4(runtimeScene);
    }

    {

        gdjs.GameCode.eventsList9(runtimeScene);
    }

    {

        gdjs.GameCode.eventsList10(runtimeScene);
    }

    {

        gdjs.GameCode.eventsList11(runtimeScene);
    }

    {

        gdjs.GameCode.eventsList12(runtimeScene);
    }

    {

        gdjs.GameCode.eventsList13(runtimeScene);
    }

    {

        gdjs.GameCode.eventsList14(runtimeScene);
    }

    {

        gdjs.GameCode.eventsList15(runtimeScene);
    }

    {

        gdjs.GameCode.eventsList18(runtimeScene);
    }

    {

        gdjs.GameCode.eventsList33(runtimeScene);
    }

    {

        gdjs.GameCode.eventsList34(runtimeScene);
    }
};

gdjs.GameCode.func = function (runtimeScene) {
    runtimeScene.getOnceTriggers().startNewFrame();

    gdjs.GameCode.GDCityObjects1.length = 0;
    gdjs.GameCode.GDCityObjects2.length = 0;
    gdjs.GameCode.GDCityObjects3.length = 0;
    gdjs.GameCode.GDCityObjects4.length = 0;
    gdjs.GameCode.GDplayerObjects1.length = 0;
    gdjs.GameCode.GDplayerObjects2.length = 0;
    gdjs.GameCode.GDplayerObjects3.length = 0;
    gdjs.GameCode.GDplayerObjects4.length = 0;
    gdjs.GameCode.GDpauseObjects1.length = 0;
    gdjs.GameCode.GDpauseObjects2.length = 0;
    gdjs.GameCode.GDpauseObjects3.length = 0;
    gdjs.GameCode.GDpauseObjects4.length = 0;
    gdjs.GameCode.GDscorebarObjects1.length = 0;
    gdjs.GameCode.GDscorebarObjects2.length = 0;
    gdjs.GameCode.GDscorebarObjects3.length = 0;
    gdjs.GameCode.GDscorebarObjects4.length = 0;
    gdjs.GameCode.GDhealthbarObjects1.length = 0;
    gdjs.GameCode.GDhealthbarObjects2.length = 0;
    gdjs.GameCode.GDhealthbarObjects3.length = 0;
    gdjs.GameCode.GDhealthbarObjects4.length = 0;
    gdjs.GameCode.GDPIIObjects1.length = 0;
    gdjs.GameCode.GDPIIObjects2.length = 0;
    gdjs.GameCode.GDPIIObjects3.length = 0;
    gdjs.GameCode.GDPIIObjects4.length = 0;
    gdjs.GameCode.GDinfectedfileObjects1.length = 0;
    gdjs.GameCode.GDinfectedfileObjects2.length = 0;
    gdjs.GameCode.GDinfectedfileObjects3.length = 0;
    gdjs.GameCode.GDinfectedfileObjects4.length = 0;
    gdjs.GameCode.GDnon_95PIIObjects1.length = 0;
    gdjs.GameCode.GDnon_95PIIObjects2.length = 0;
    gdjs.GameCode.GDnon_95PIIObjects3.length = 0;
    gdjs.GameCode.GDnon_95PIIObjects4.length = 0;
    gdjs.GameCode.GDpointerObjects1.length = 0;
    gdjs.GameCode.GDpointerObjects2.length = 0;
    gdjs.GameCode.GDpointerObjects3.length = 0;
    gdjs.GameCode.GDpointerObjects4.length = 0;
    gdjs.GameCode.GDphoneUIleftObjects1.length = 0;
    gdjs.GameCode.GDphoneUIleftObjects2.length = 0;
    gdjs.GameCode.GDphoneUIleftObjects3.length = 0;
    gdjs.GameCode.GDphoneUIleftObjects4.length = 0;
    gdjs.GameCode.GDphoneUIrightObjects1.length = 0;
    gdjs.GameCode.GDphoneUIrightObjects2.length = 0;
    gdjs.GameCode.GDphoneUIrightObjects3.length = 0;
    gdjs.GameCode.GDphoneUIrightObjects4.length = 0;
    gdjs.GameCode.GDphoneUIupObjects1.length = 0;
    gdjs.GameCode.GDphoneUIupObjects2.length = 0;
    gdjs.GameCode.GDphoneUIupObjects3.length = 0;
    gdjs.GameCode.GDphoneUIupObjects4.length = 0;
    gdjs.GameCode.GDphoneUIdownObjects1.length = 0;
    gdjs.GameCode.GDphoneUIdownObjects2.length = 0;
    gdjs.GameCode.GDphoneUIdownObjects3.length = 0;
    gdjs.GameCode.GDphoneUIdownObjects4.length = 0;
    gdjs.GameCode.GDboundaryObjects1.length = 0;
    gdjs.GameCode.GDboundaryObjects2.length = 0;
    gdjs.GameCode.GDboundaryObjects3.length = 0;
    gdjs.GameCode.GDboundaryObjects4.length = 0;
    gdjs.GameCode.GDscoreObjects1.length = 0;
    gdjs.GameCode.GDscoreObjects2.length = 0;
    gdjs.GameCode.GDscoreObjects3.length = 0;
    gdjs.GameCode.GDscoreObjects4.length = 0;
    gdjs.GameCode.GDhealthObjects1.length = 0;
    gdjs.GameCode.GDhealthObjects2.length = 0;
    gdjs.GameCode.GDhealthObjects3.length = 0;
    gdjs.GameCode.GDhealthObjects4.length = 0;
    gdjs.GameCode.GDTextBoxObjects1.length = 0;
    gdjs.GameCode.GDTextBoxObjects2.length = 0;
    gdjs.GameCode.GDTextBoxObjects3.length = 0;
    gdjs.GameCode.GDTextBoxObjects4.length = 0;
    gdjs.GameCode.GDCollectTenObjects1.length = 0;
    gdjs.GameCode.GDCollectTenObjects2.length = 0;
    gdjs.GameCode.GDCollectTenObjects3.length = 0;
    gdjs.GameCode.GDCollectTenObjects4.length = 0;
    gdjs.GameCode.GDAudioObjects1.length = 0;
    gdjs.GameCode.GDAudioObjects2.length = 0;
    gdjs.GameCode.GDAudioObjects3.length = 0;
    gdjs.GameCode.GDAudioObjects4.length = 0;
    gdjs.GameCode.GDfreeplayTextObjects1.length = 0;
    gdjs.GameCode.GDfreeplayTextObjects2.length = 0;
    gdjs.GameCode.GDfreeplayTextObjects3.length = 0;
    gdjs.GameCode.GDfreeplayTextObjects4.length = 0;

    gdjs.GameCode.eventsList35(runtimeScene);
    return;
};

gdjs['GameCode'] = gdjs.GameCode;