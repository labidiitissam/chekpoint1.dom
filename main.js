// get the elements from the HTML
const counterEl = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

// initialize the counter value to 0
let counterValue = 0;

// add a click event listener to the increment button
incrementBtn.addEventListener('click', () => {
  counterValue++; // increment the counter value
  counterEl.textContent = counterValue; // update the counter element
});

// add a click event listener to the decrement button
decrementBtn.addEventListener('click', () => {
  // decrement the counter value only if it's greater than 0
  if (counterValue > 0) {
    counterValue--; // decrement the counter value
    counterEl.textContent = counterValue; // update the counter element
  }
});