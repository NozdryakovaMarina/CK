const d = [];
const record = (param) => {
    d.push(param);
    console.log('Record: ' + param + ' added!');
};
const remove = () => {
    if (d.length > 0) {
        d.pop();
        console.log('Record removed!');
    }
    else {
        console.log('No records to remove!');
    }
};
let recordCounter = 1;
const intervalId = setInterval(() => {
    if (recordCounter <= 6) {
        const value = Math.floor(Math.random() * 100000);
        record(value);
        setTimeout(() => remove(), 10000);
    }
    else {
        clearInterval(intervalId);
        console.log('Interval stopped, all records are added!');
    }
    recordCounter++;
}, 10000);
