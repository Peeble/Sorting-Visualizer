export function getShuffleAnimations(array) {
    const animations = [];
    shuffle(array, animations);
    console.log(array);
    return animations;
}

// Knuth/Fisher-Yates shuffling algorithm
function shuffle(array, animations) {
    for (let i = 0; i < array.length; i++) {
        let r = Math.floor((Math.random() * (i + 1)));

        let swap = array[r];
        animations.push([i, r]);
        animations.push([i, r]);
        array[r] = array[i];
        array[i] = swap;
    }
}