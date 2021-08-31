const returnFirstTwoDrivers = function(array) {
    const [a, b] = array;
    return [a, b];
}

const returnLastTwoDrivers = function(array) {
    const [a, b] = array.slice(-2);
    return [a, b];
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

function createFareMultiplier(mult) {
    return function(fare) {
        return fare * mult
    };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(array, a = returnFirstTwoDrivers, b = returnLastTwoDrivers) {
    if (a === undefined) {
        return b(array);
    } else {
        return a(array);
    }
}

