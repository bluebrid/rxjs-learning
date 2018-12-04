import { fromEvent } from './esm2015';
import { throttleTime, scan, mapTo} from './esm2015/operators'
import { isInteropObservable } from './esm2015/internal/util/isInteropObservable';

const addBtn = document.getElementById('add')
const minusBtn = document.getElementById('minus')
const nameInput = document.getElementById('name')
let addFromEventObj = fromEvent(addBtn, 'click')
addFromEventObj = addFromEventObj.pipe(throttleTime(1000 * 2),mapTo(1), scan((init, next) => init + next, 0))
addFromEventObj = addFromEventObj.subscribe((value) => {
    nameInput.value = value
})
console.log(addFromEventObj)
// const minusFromEventObj = fromEvent(minusBtn, 'click')

// minusFromEventObj
//     .pipe(throttleTime(1000 * 3))
//     .subscribe(() => {
//         nameInput.value = +(nameInput.value) - 1
//     })