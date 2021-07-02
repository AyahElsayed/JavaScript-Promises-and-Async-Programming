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
    let request = new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:3000/users/7");
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        };
        xhr.onerror = () => {
            reject("Request failed!");
        };
        xhr.send();
    });

    request.then(setText).catch(setText);
}

export function allPromises() {
}

export function allSettled() {
}

export function race() {
}