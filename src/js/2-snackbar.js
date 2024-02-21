"use strict"

import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

const delayInput = document.querySelector("input[type=number]")
const form = document.querySelector("form.form")
const stateBtns = document.querySelector('fieldset')



form.addEventListener("submit", (event) => {
    event.preventDefault()
    stateBtns.setAttribute("disabled","disabled")
    
    const delay = delayInput.value

   const promise =  new Promise((res,rej) => {
       setTimeout(() => {
            if (form.elements.state.value == "fulfilled") {
            res(delay)
        } else {
            rej(delay)
        }

    }, delay)
    })
    
    promise.then(delay => {
        console.log(`✅ Fulfilled promise in ${delay}ms`)
        iziToast.show({
                title: 'Sucsess',
                message: `✅ Fulfilled promise in ${delay}ms`,
        });
    })
        .catch((delay) => {
        console.log(`❌ Rejected promise in ${delay}ms`)
        iziToast.error({
                title: 'Error',
                message: `❌ Rejected promise in ${delay}ms`,
            });
    })
    
})


