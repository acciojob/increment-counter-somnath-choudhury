//your JS code here. If required.
let counter = 0;

let counterId = document.getElementById("counter");
let incrementBtn = document.getElementById("incrementBtn");

incrementBtn.addEventListener("click", () => {
    alert(counter)
    counter++;
    counterId.textContent = counter
})