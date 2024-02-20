"use strict"

import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

const delayInput = document.querySelector("input[type=number]")
const form = document.querySelector("form.form")
const stateBtn = document.querySelector('input[type="radio"]')



form.addEventListener("submit", (event) => {
    event.preventDefault()
    const delay = delayInput.value

   const promise =  new Promise((res,rej) => {
       setTimeout(() => {
            if (form.elements.state.value == "fulfilled") {
            res(console.log(`✅ Fulfilled promise in ${delay}ms`))
        } else {
            rej(console.log(`❌ Rejected promise in ${delay}ms`))
        }

    }, delay)
    })
    
    promise.then(() => {
        iziToast.show({
                title: 'Sucsess',
                message: `✅ Fulfilled promise in ${delay}ms`,
        });
    })
    .catch(() => {
        iziToast.error({
                title: 'Error',
                message: `❌ Rejected promise in ${delay}ms`,
            });
    })
    
})


