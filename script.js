//your JS code here. If required.
let counter = 0;

let counterId = document.getElementById("counter");
let incrementBtn = document.getElementById("increment-btn");

incrementBtn.addEventListener("click", () => {
    alert(`Current value of increment: ${counter}`)
    counter++;
    counterId.textContent = counter
})