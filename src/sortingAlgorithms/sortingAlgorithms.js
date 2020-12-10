export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const aux = new Array(array.length);
    sort(array, aux, 0, array.length-1, animations);
    console.log(animations);
    return animations;
}

export function mergeAndSort(array) {
    const animations = [];
    const aux = new Array(array.length);
    sort(array, aux, 0, array.length-1, animations);
    return array;
}

function sort(array, aux, lo, hi, animations) {
    //console.log(array);
    if (hi <= lo) return;
    const mid = Math.floor(lo + (hi - lo) / 2);
    sort(array, aux, lo, mid, animations);
    sort(array, aux, mid + 1, hi, animations);
    merge(array, aux, lo, mid, hi, animations);

}

function merge(array, aux, lo, mid, hi, animations) {
    //console.log(array);
    for (let k = lo; k <= hi; k++) {
        aux[k] = array[k];
    }

    let i = lo;
    let j = mid + 1;

    for (let z = lo; z <= hi; z++) {
        if (i > mid) {
         //   console.log(z);
            animations.push([i, j]);
            animations.push([i, j]);
            animations.push([z, aux[j]]);
          //  console.log([z, aux[j]]);
            array[z] = aux[j++];
        }
        else if (j > hi) {
          //  console.log(z);
          //  console.log('hit');
            animations.push([i, j-1]);
            animations.push([i, j-1]);
            animations.push([z, aux[i]]);
            array[z] = aux[i++];
        }

        else {
            animations.push([i, j]);
            animations.push([i, j]);

            if (aux[j] < aux[i]){
                //  console.log(z);

                  animations.push([z, aux[j]]);
                  //console.log([z, aux[j]])
                  array[z] = aux[j++];
              }
            else {
                  //console.log(z);
                 // console.log('hit');
                  animations.push([z, aux[i]]);
                  array[z] = aux[i++];
              }

        }

    }
}

/*
 export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
} 


function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx+1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
        animations.push([i, j]);
        animations.push([i, j]);

        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            animations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }

    while (i <= middleIdx) {
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }

    while (j <= endIdx) {
        animations.push([j, j]);
        animations.push([j, j]);

        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
}
*/
