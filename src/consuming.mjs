import setText, { appendText, showWaiting, hideWaiting } from "./results.mjs";

// promises are not lazy
export function get() {
    axios.get("http://localhost:3000/orders/1")
        .then(({ data }) => setText(JSON.stringify(data)));
    // this destructuring mean that axios will return {data}
    // then mean => after the get complete run this code
}

export function getCatch() {
    axios.get("http://localhost:3000/orders/123")
        .then(({ data }) => setText(data.id))
        .catch((err) => setText(err));
}

export function chain() {
}

export function chainCatch() {
}

export function final() {
}