export function getHeapSortAnimations(array) {
    const animations = [];
    sort(array, animations);
    return animations;
}

function sort(array, animations) {
    let n = array.length;
    for (let k = Math.floor(n/2); k >= 1; k--) {
        sink(array, k, n, animations);
    }

    let k = n;
    while (k > 1) {
        exch(array, 1, k--, animations);
        sink(array, 1, k, animations);
    }
};

function sink(array, k, n, animations) {
    while (2*k <= n) {
        let j = 2 * k;
        animations.push([k-1, j-1, false])
        if (j < n && less(array, j, j+1)) {
            j++;
        }
        if (!less(array, k, j)) {
            break;
        }
        
        exch(array, k, j, animations);
        k = j;
    }
}

function less(array, i, j) {
    return (array[i-1] < array[j-1])
}

function exch(array, i, j, animations) {
    animations.push([i-1, j-1, true])
    let swap = array[i-1];
    array[i-1] = array[j-1];
    array[j-1] = swap;
}