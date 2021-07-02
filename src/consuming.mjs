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
    axios.get("http://localhost:3000/orders/1")
        .then(({ data }) => {
            return axios.get(`http://localhost:3000/addresses/${data.shippingAddress}`);
            // if i remove return, will get error
        })
        .then(({ data }) => {
            setText(`City: ${data.city}`);
        })
}

export function chainCatch() {
    axios.get("http://localhost:3000/orders/1")
        .then(({ data }) => {
            axios.get(`http://localhost:3000/addresses/${data.shippingAddress}`);
            throw new Error('Fake Error');
        })
        .then(({ data }) => {
            setText(`City: ${data.city}`);
        })
        .catch(setText);
        // in chain use one catch to catch all errors
}

export function final() {
}