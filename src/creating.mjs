import setText, { appendText } from "./results.mjs";

// promise => 
// object that represents the eventual completion (or failure) of an asynchronous operation, 
// and its resulting value

// let temp = new promise()  // => pending

export function timeout() {
    let wait = new Promise(resolve => {
        setTimeout(() => {
            resolve("Timeout!"); // update one time
        }, 1500);
    });

    wait.then(setText);
}

export function interval() {
}

export function clearIntervalChain() {
}

export function xhr() {
}

export function allPromises() {
}

export function allSettled() {
}

export function race() {
}