var scormPresent;
var scormVersion;
var passingScore;
var currentRawScore;
var currentScaledScore;
var newRawScore;
var newScaledScore;
var completionStatus;

function isScormPresent() {
    scormPresent = pipwerks.SCORM.init();
    return scormPresent;
}

function initializeScorm() {
    pipwerks.SCORM.init();

    scormVersion = pipwerks.SCORM.version;

    switch (scormVersion) {
        case "1.2":
            //set min and max
            pipwerks.SCORM.set("cmi.core.score.min", 0);
            pipwerks.SCORM.set("cmi.core.score.max", 100);

            //pull in passing score from XML manifest
            passingScore = pipwerks.SCORM.get("cmi.student_data.mastery_score");

            //initialize current score
            currentRawScore = pipwerks.SCORM.get("cmi.core.score.raw");
            if (!currentRawScore) {
                currentRawScore = 0;
                pipwerks.SCORM.set("cmi.core.score.raw", 0);
            }

            //change completion status to incomplete because default is completed (this is not needed for 2004)
            completionStatus = pipwerks.SCORM.get("cmi.core.lesson_status");
            console.log(completionStatus);
            if (completionStatus === "not attempted") {
                pipwerks.SCORM.set("cmi.core.lesson_status","incomplete");
            }

            break;

        case "2004":

            //set min and max
            pipwerks.SCORM.set("cmi.score.min", 0);
            pipwerks.SCORM.set("cmi.score.max", 100);

            //pull in passing score from XML manifest
            passingScore = pipwerks.SCORM.get("cmi.scaled_passing_score");

            
            //initialize current score (raw and scaled)
            currentRawScore = pipwerks.SCORM.get("cmi.score.raw");
            if (!currentRawScore) {
                currentRawScore = 0;
                pipwerks.SCORM.set("cmi.score.raw", 0);
            }

            currentScaledScore = pipwerks.SCORM.get("cmi.score.scaled");
            if (!currentScaledScore) {
                pipwerks.SCORM.set("cmi.score.scaled", 0);
            }
            break;
    }
}

function getCurrentScormScore() {
    if (scormVersion === "1.2") {
        currentRawScore = pipwerks.SCORM.get("cmi.core.score.raw");
    }
    if (scormVersion === "2004") {
        currentRawScore = pipwerks.SCORM.get("cmi.score.raw");
    }

    return currentRawScore;
}

function setScormScoreExplicitly(explicitRawScore) {
    if (explicitRawScore === undefined || isNaN(explicitRawScore)) {
        throw "Score to be set was not a number";
    }

    switch (scormVersion) {
        case "1.2":
            if (explicitRawScore >= passingScore) {
                pipwerks.SCORM.set("cmi.core.lesson_status","completed");
            }

            pipwerks.SCORM.set("cmi.core.score.raw", explicitRawScore);
            break;
            
        case "2004":
            explicitScaledScore = explicitRawScore / 100; 

            if (explicitScaledScore > 1) {
                explicitScaledScore = 1; //fixes Scorm Cloud bug that doesn't handle Scaled Score being greater than 1
            }

            if (explicitScaledScore >= passingScore) {
                pipwerks.SCORM.set("cmi.completion_status","completed");
            }

            pipwerks.SCORM.set("cmi.score.raw", explicitRawScore);
            pipwerks.SCORM.set("cmi.score.scaled", explicitScaledScore);
            break;
    }

}

function setScormScore(setScore) {
    try {
        setScormScoreExplicitly(setScore);
    } 
    catch (e) {
        console.error(e);
    }
}

function incrementScormScore(addedPoints) {
    if (addedPoints === undefined || isNaN(addedPoints)) {
        addedPoints = 0;
    }

    switch (scormVersion) {
        case "1.2":
            currentRawScore = pipwerks.SCORM.get("cmi.core.score.raw");
            currentRawScore = parseFloat(currentRawScore);

            newRawScore = currentRawScore + addedPoints;

            if (newRawScore >= passingScore) {
                pipwerks.SCORM.set("cmi.core.lesson_status","completed");
            }

            pipwerks.SCORM.set("cmi.core.score.raw", newRawScore);
            break;
            
        case "2004":
            currentRawScore = pipwerks.SCORM.get("cmi.score.raw");
            currentScaledScore = pipwerks.SCORM.get("cmi.score.scaled");

            currentRawScore = parseFloat(currentRawScore);
            currentScaledScore = parseFloat(currentScaledScore);

            newRawScore = currentRawScore + addedPoints;
            newScaledScore = currentScaledScore + (addedPoints / 100); 

            if (newScaledScore > 1) {
                newScaledScore = 1; //fixes Scorm Cloud bug that doesn't handle Scaled Score being greater than 1
            }

            if (newScaledScore >= passingScore) {
                pipwerks.SCORM.set("cmi.completion_status","completed");
            }

            pipwerks.SCORM.set("cmi.score.raw", newRawScore);
            pipwerks.SCORM.set("cmi.score.scaled", newScaledScore);
            break;
    }
}

function decrementScormScore(deductedPoints) {
    if (deductedPoints === undefined || isNaN(deductedPoints)) {
        deductedPoints = 0;
    }

    switch (scormVersion) {
        case "1.2":
            currentRawScore = pipwerks.SCORM.get("cmi.core.score.raw");
            currentRawScore = parseFloat(currentRawScore);

            newRawScore = currentRawScore - deductedPoints;

            pipwerks.SCORM.set("cmi.core.score.raw", newRawScore);
            break;
            
        case "2004":
            currentRawScore = pipwerks.SCORM.get("cmi.score.raw");
            currentScaledScore = pipwerks.SCORM.get("cmi.score.scaled");

            currentRawScore = parseFloat(currentRawScore);
            currentScaledScore = parseFloat(currentScaledScore);

            newRawScore = currentRawScore - deductedPoints;
            newScaledScore = currentScaledScore - (deductedPoints / 100); 

            pipwerks.SCORM.set("cmi.score.raw", newRawScore);
            pipwerks.SCORM.set("cmi.score.scaled", newScaledScore);
            break;
    }
}

function saveScormScore() {
    pipwerks.SCORM.save();
}

function closeScorm() {
    pipwerks.SCORM.quit();
}