export function getInsertionSortAnimations(array) {
    const animations = [];
    sort(array, animations);
    return animations;
}

function sort(array, animations) {
    let n = array.length;
    for (let i = 1; i < n; i++) {
        for (let j = i; j > 0 && (array[j] < array[j-1]); j--)
        {
            animations.push([i, j, false])
            exch(array, j, j-1, animations);
        }
    }
}

function exch(array, i, j, animations) {
    animations.push([i, j, true])
    let swap = array[i];
    array[i] = array[j];
    array[j] = swap;
}