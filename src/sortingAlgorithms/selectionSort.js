export function getSelectionSortAnimations(array) {
    const animations = [];
    sort(array, animations);
    return animations;
}

function sort(array, animations) {
    let n = array.length;
    for (let i = 0; i < n; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            animations.push([i, j, false])
            if (array[j] < array[min]) min = j;
        }
        exch(array, i, min, animations);
    }
}

function exch(array, i, j, animations) {
    animations.push([i, j, true])
    let swap = array[i];
    array[i] = array[j];
    array[j] = swap;
}