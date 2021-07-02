import setText, { appendText } from "./results.mjs";

// promise => 
// object that represents the eventual completion (or failure) of an asynchronous operation, 
// and its resulting value

// let temp = new promise()  // => pending

export function timeout() {
    let wait = new Promise(resolve => {
        setTimeout(() => {
            resolve("Timeout!"); // setTimeout fires one time
        }, 1500);
    });

    wait.then(setText);
}

export function interval() {
    let counter = 0;
    let wait = new Promise(resolve => {
        setInterval(() => {
            console.log("INTERVAL");   // setInterval fires multiple times
            resolve(`Timeout! ${++counter}`);
        }, 1500);
    });

    wait.then(setText).finally(() => appendText(` -- Done ${counter}`));
}

export function clearIntervalChain() {
    let counter = 0;
    let interval;
    let wait = new Promise(resolve => {
        interval = setInterval(() => {
            console.log("INTERVAL");
            resolve(`Timeout! ${++counter}`);
        }, 1500);
    });

    wait.then(setText).finally(() => {
        clearInterval(interval);
    });
}

export function xhr() {
}

export function allPromises() {
}

export function allSettled() {
}

export function race() {
}