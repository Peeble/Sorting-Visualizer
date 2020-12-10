export function getQuickSortAnimations(array) {
    const animations = [];
    sort(array, 0, array.length-1, animations);
    return animations;
}

function sort(array, lo, hi, animations) {
    if (hi <= lo) return;
    let j = partition(array, lo, hi, animations);
    sort(array, lo, j-1, animations);
    sort(array, j+1, hi, animations);
}

function partition(array, lo, hi, animations) {
    let i = lo;
    let j = hi + 1;
    let v = array[lo];

    while (true) {
        while (array[++i] < v) {
            if (i === hi) break;
            if (j < array.length) {
                animations.push([i, j, false]);
            }
        }

        while(v < array[--j]) {
            if (j === lo) break;
            animations.push([i, j, false]);
        }

        if (i >= j) break;
        animations.push([i, j, true]);
        exch(array, i, j);
    }
    animations.push([lo, j, true]);
    exch(array, lo, j);

    return j;
}

function exch(array, i, j) {
    let swap = array[i];
    array[i] = array[j];
    array[j] = swap;
}