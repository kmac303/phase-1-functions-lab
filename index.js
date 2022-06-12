function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42);
}

function distanceFromHqInFeet(feet) {
    distanceFromHqInBlocks(feet);
    return Math.abs(feet - 42) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((destination - start) * 264);
}

function calculatesFarePrice(start, destination) {
    let feet = Math.abs((destination - start) * 264);
    if (feet <= 400) {
        return 0;
    }
    else if (feet > 400 && feet <= 2000) {
        return (feet - 400) * .02; 
    }
    else if (feet > 2000 && feet < 2500) {
        return 25;
    }
    else if (feet > 2500) {
        return 'cannot travel that far';
    }
}