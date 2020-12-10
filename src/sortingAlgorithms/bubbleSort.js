export function getBubbleSortAnimations(array) {
    const animations = [];
    sort(array, animations);
    return animations;
}

function sort (array, animations) {
    for (let i = 0; i < array.length; i++) {
        let exchanges = 0;
        for (let j = array.length-1; j > i; j--) {
            if (array[j] < array[j-1]) {
                exch(array, j, j-1, animations);
                exchanges++;
            }
        }
        if (exchanges === 0) break;
    }
}

function exch(array, i, j, animations) {
    animations.push([i, j, true])
    let swap = array[i];
    array[i] = array[j];
    array[j] = swap;
}