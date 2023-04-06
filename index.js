// code your solution here
function saturdayFun(someString) {
    if (someString === undefined) {
        someString = "roller-skate";
        return `This Saturday, I want to ${someString}!`;
    } else {
        return `This Saturday, I want to ${someString}!`;
    }
}

const mondayWork = function(someOtherString) {
    if (someOtherString === undefined) {
        someOtherString = "go to the office";
        return `This Monday, I will ${someOtherString}.`;
    } else {
        return `This Monday, I will ${someOtherString}.`;
    }
}

function wrapAdjective (flair = "*") {
    const encouragingPromptFunction = function (adj = "special") {
        return `You are ${flair}${adj}${flair}!`;
    };
    return encouragingPromptFunction;
}


