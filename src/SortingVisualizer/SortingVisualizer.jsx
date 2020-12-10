import React from 'react';
import {getMergeSortAnimations, mergeAndSort} from '../sortingAlgorithms/sortingAlgorithms.js';
import {getShuffleAnimations} from '../sortingAlgorithms/knuthShuffle.js';
import {getQuickSortAnimations} from '../sortingAlgorithms/quickSort.js';
import {getHeapSortAnimations} from '../sortingAlgorithms/heapSort.js';
import {getBubbleSortAnimations} from '../sortingAlgorithms/bubbleSort.js'
import {getSelectionSortAnimations} from '../sortingAlgorithms/selectionSort.js'
import {getInsertionSortAnimations} from '../sortingAlgorithms/insertionSort.js'
import './SortingVisualizer.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Slider from '@material-ui/core/Slider'
import Typography from '@material-ui/core/Typography';




let ANIMATION_SPEED_MS = 50;

function valuetext(value) {
    return value;
}

const classes = {
    slider: {
        width: 500
    },
    typo: {
        margin: 10
    }
}

let NUMBER_OF_ARRAY_BARS = 20;

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5, 500));
        }
        this.setState({array});
    }

    mergeSort() {
        //console.log(mergeAndSort(this.state.array));
        const animations = getMergeSortAnimations(this.state.array);

        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i]; /*
                if (barTwoIdx === arrayBars.length)
                {
                    barTwoIdx--;
                }*/
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? 'red' : 'turquoise';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor= color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    knuthShuffle() {
        //console.log(this.state.array);
        const animations = getShuffleAnimations(this.state.array);
        //console.log(animations);
        //console.log(this.state.array);

        
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = i % 2 !== 1;
            const arrayBars = document.getElementsByClassName('array-bar');
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    if (barOneIdx === barTwoIdx)
                    {
                        barOneStyle.backgroundColor = 'green';
                        barTwoStyle.backgroundColor = 'green';
                    } else {
                        barOneStyle.backgroundColor = 'green';
                        barTwoStyle.backgroundColor = 'purple';
                    }
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, barTwoIdx] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;

                    const heightOne = barOneStyle.height;
                    const heightTwo = barTwoStyle.height;
                    //console.log(heightOne);
                    arrayBars[barOneIdx].style.height = heightTwo;
                    arrayBars[barTwoIdx].style.height = heightOne;
                    arrayBars[barOneIdx].style.backgroundColor = 'pink';
                    arrayBars[barTwoIdx].style.backgroundColor = 'pink';
                    //console.log(arrayBars[barTwoIdx].height);
                }, i * ANIMATION_SPEED_MS)
            }
        }
    }

    quickSort() {

        const animations = getQuickSortAnimations(this.state.array);
        //console.log(animations);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            //console.log(arrayBars);
            const [barOneIdx, barTwoIdx, isSwap] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            if (isSwap === false) {
                setTimeout(() => {
                    barOneStyle.backgroundColor = 'green';
                    barTwoStyle.backgroundColor = 'green';
                    setTimeout(() => {
                        barOneStyle.backgroundColor = 'blue';
                        barTwoStyle.backgroundColor  = 'blue';
                    }, ANIMATION_SPEED_MS)
                }, i * ANIMATION_SPEED_MS)
            }
            else {
                setTimeout(() => {
                    const heightOne = barOneStyle.height;
                    const heightTwo = barTwoStyle.height;
                    arrayBars[barOneIdx].style.height = heightTwo;
                    arrayBars[barTwoIdx].style.height = heightOne;
                    arrayBars[barOneIdx].style.backgroundColor = 'purple';
                    arrayBars[barTwoIdx].style.backgroundColor = 'purple';

                    setTimeout(() => {
                        arrayBars[barOneIdx].style.backgroundColor = 'blue';
                        arrayBars[barTwoIdx].style.backgroundColor = 'blue';
                    }, ANIMATION_SPEED_MS)

                }, i * ANIMATION_SPEED_MS)

                
            }
        }
        
    }

    heapSort() {
        //console.log(this.state.array);
        const animations = getHeapSortAnimations(this.state.array);
       // console.log(animations);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [barOneIdx, barTwoIdx, isSwap] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            if (isSwap === false) {
                /*
                setTimeout(() => {
                    barOneStyle.backgroundColor = 'green';
                    barTwoStyle.backgroundColor = 'green';
                    setTimeout(() => {
                        barOneStyle.backgroundColor = 'blue';
                        barTwoStyle.backgroundColor  = 'blue';
                    }, ANIMATION_SPEED_MS)
                }, i * ANIMATION_SPEED_MS)*/
            }
            else {
                setTimeout(() => {
                    const heightOne = barOneStyle.height;
                    const heightTwo = barTwoStyle.height;
                    arrayBars[barOneIdx].style.height = heightTwo;
                    arrayBars[barTwoIdx].style.height = heightOne;
                    arrayBars[barOneIdx].style.backgroundColor = 'purple';
                    arrayBars[barTwoIdx].style.backgroundColor = 'purple';

                    setTimeout(() => {
                        arrayBars[barOneIdx].style.backgroundColor = 'blue';
                        arrayBars[barTwoIdx].style.backgroundColor = 'blue';
                    }, ANIMATION_SPEED_MS)

                }, i * ANIMATION_SPEED_MS)
            }
        }

    }

    bubbleSort() {
        console.log(this.state.array);
        const animations = getBubbleSortAnimations(this.state.array);
        console.log(this.state.array);

        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [barOneIdx, barTwoIdx, isSwap] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            if (isSwap === false) {
            }
            else {
                setTimeout(() => {
                    const heightOne = barOneStyle.height;
                    const heightTwo = barTwoStyle.height;
                    arrayBars[barOneIdx].style.height = heightTwo;
                    arrayBars[barTwoIdx].style.height = heightOne;
                    arrayBars[barOneIdx].style.backgroundColor = 'purple';
                    arrayBars[barTwoIdx].style.backgroundColor = 'purple';

                    setTimeout(() => {
                        arrayBars[barOneIdx].style.backgroundColor = 'blue';
                        arrayBars[barTwoIdx].style.backgroundColor = 'blue';
                    }, ANIMATION_SPEED_MS)

                }, i * ANIMATION_SPEED_MS)
            }
        }
    }

    selectionSort() {
        console.log(this.state.array);
        const animations = getSelectionSortAnimations(this.state.array);
        console.log(this.state.array);

        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [barOneIdx, barTwoIdx, isSwap] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            if (isSwap === false) {
                setTimeout(() => {
                    barOneStyle.backgroundColor = 'yellow';
                    barTwoStyle.backgroundColor = 'green';
                    setTimeout(() => {
                        barOneStyle.backgroundColor = 'blue';
                        barTwoStyle.backgroundColor  = 'blue';
                    }, ANIMATION_SPEED_MS)
                }, i * ANIMATION_SPEED_MS)
            }
            else {
                setTimeout(() => {
                    const heightOne = barOneStyle.height;
                    const heightTwo = barTwoStyle.height;
                    arrayBars[barOneIdx].style.height = heightTwo;
                    arrayBars[barTwoIdx].style.height = heightOne;
                    arrayBars[barOneIdx].style.backgroundColor = 'purple';
                    arrayBars[barTwoIdx].style.backgroundColor = 'purple';

                    setTimeout(() => {
                        arrayBars[barOneIdx].style.backgroundColor = 'blue';
                        arrayBars[barTwoIdx].style.backgroundColor = 'blue';
                    }, ANIMATION_SPEED_MS)

                }, i * ANIMATION_SPEED_MS)
            }
        }
    }

    insertionSort() {
        console.log(this.state.array);
        const animations = getSelectionSortAnimations(this.state.array);
        console.log(this.state.array);

        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [barOneIdx, barTwoIdx, isSwap] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            if (isSwap === false) {
                setTimeout(() => {
                    barOneStyle.backgroundColor = 'yellow';
                    barTwoStyle.backgroundColor = 'green';
                    setTimeout(() => {
                        barOneStyle.backgroundColor = 'blue';
                        barTwoStyle.backgroundColor  = 'blue';
                    }, ANIMATION_SPEED_MS)
                }, i * ANIMATION_SPEED_MS)
            }
            else {
                setTimeout(() => {
                    const heightOne = barOneStyle.height;
                    const heightTwo = barTwoStyle.height;
                    arrayBars[barOneIdx].style.height = heightTwo;
                    arrayBars[barTwoIdx].style.height = heightOne;
                    arrayBars[barOneIdx].style.backgroundColor = 'purple';
                    arrayBars[barTwoIdx].style.backgroundColor = 'purple';

                    setTimeout(() => {
                        arrayBars[barOneIdx].style.backgroundColor = 'blue';
                        arrayBars[barTwoIdx].style.backgroundColor = 'blue';
                    }, ANIMATION_SPEED_MS)

                }, i * ANIMATION_SPEED_MS)
            }
        }
    }



    render() {
        const {array} = this.state;

        return (
            <div className="array-container">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

            {array.map((value, idx) => (
                <div 
                className="array-bar" 
                key={idx}
                style={{height: `${value}px`}}>
                </div>
            ))}
            <div>
            <Button className="buttons" color="secondary" variant="outlined" onClick={() => this.resetArray()}>Generate New Array</Button>
            <div class="divider"/>
            <Button className="buttons" color="primary" variant="contained" onClick={() => this.knuthShuffle()}>Knuth Shuffle</Button>
            <div class="divider"/>
            <Button className="buttons" color="primary" variant="contained" onClick={() => this.mergeSort()}>Merge Sort</Button>
            <div class="divider"/>
            <Button className="buttons" color="primary" variant="contained" onClick={() => this.quickSort()}>Quick Sort</Button>
            <div class="divider"/>
            <Button className="buttons" color="primary" variant="contained" onClick={() => this.heapSort()}>Heap Sort</Button>
            <div class="divider"/>
            <Button className="buttons" color="primary" variant="contained" onClick={() => this.selectionSort()}>Selection Sort</Button>
            <div class="divider"/>
            <Button className="buttons" color="primary" variant="contained" onClick={() => this.insertionSort()}>Insertion Sort</Button>
            <div class="divider"/>
            <Button className="buttons" color="primary" variant="contained" onClick={() => this.bubbleSort()}>Bubble Sort</Button>
            </div>
            <Typography style={classes.typo}>Speed</Typography>
            <div className="sliders">
            <Slider style={classes.slider} onChange={(e, val) => ANIMATION_SPEED_MS=val}
        defaultValue={30}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={200}
      />
      </div>
      <Typography style={classes.typo}>Size</Typography>
      <div className="sliders">
            <Slider style={classes.slider} onChange={(e, val) => {
                NUMBER_OF_ARRAY_BARS=val
                this.resetArray() }}
        defaultValue={30}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={100}
      />
            </div>
            </div>
        );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
