import { range, interval, fromEvent, pipe } from './esm2015';
import { map, filter, throttleTime } from './esm2015/operators';

const addBtn = document.getElementById('add')
const minusBtn = document.getElementById('minus')
const incomeLabel = document.getElementById('incomeLabel')
const nameInput = document.getElementById('name');

// const intervalHander = interval(1000 * 2)
//     .pipe(filter(x => x % 2 === 1), map(x => x + x))
//     .subscribe(x => nameInput.value = x);

const fromE = fromEvent(addBtn, 'click')
    // .pipe(throttleTime(1000))
    .subscribe(() => {
        console.log(11111111111)
        nameInput.value = +(nameInput.value) + 1
    })
