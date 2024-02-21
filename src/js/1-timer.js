"use strict"

const dateInput = document.querySelector("#datetime-picker")
const startButton = document.querySelector("button[data-start]")
const daysValue = document.querySelector("span[data-days]")
const hoursValue = document.querySelector("span[data-hours]")
const minutesValue = document.querySelector("span[data-minutes]")
const secondsValue = document.querySelector("span[data-seconds]")
startButton.setAttribute("disabled", "disabled")


import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

let userDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates,date) {

        startButton.setAttribute("disabled", "disabled")
        console.log(dateInput)
        if (selectedDates[0] <= Date.now()) {

            iziToast.show({
            message:'Please choose a date in the future'
            })
            startButton.setAttribute("disabled", "disabled")

        } else if (selectedDates[0] > Date.now()) {
            
            startButton.removeAttribute("disabled")
            userDate = new Date(date)
            
        }
  },
};


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

startButton.addEventListener("click", (event) => {
    startButton.setAttribute("disabled", "disabled")
    dateInput.setAttribute("disabled", "disabled")
  const intervalId = setInterval(() => {
    const { days, hours, minutes, seconds } = convertMs(userDate - Date.now());
    daysValue.textContent = String(days).padStart(2, '0')
    hoursValue.textContent = String(hours).padStart(2, "0")
    minutesValue.textContent = String(minutes).padStart(2, "0")
    secondsValue.textContent = String(seconds).padStart(2, '0')
    if (userDate < Date.now()) {
      console.log("stop")
      }

  }, 1000);

})

flatpickr(dateInput, options)
