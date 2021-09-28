

let numberBtn = document.querySelectorAll(".nmbr");
console.log(numberBtn, numberBtn.length);
let calcScreen = document.querySelector("#calculator-screen");
numberBtn.forEach(function (btn) {
  console.log(btn);
  btn.addEventListener("click", function (e) {
    console.log("clicked", e);
    calcScreen.textContent += btn.value;
  });
});
// for(let i= 0; i < numberBtn.lenght; i++){
//     console.log(numberBtn[i])
//     numberBtn[i].addEventListener("click", function(){
//     console.log("clicked")
//     calcScreen.textContent += numberBtn[i].value
//     }
//     )}

//2. input , calculate, output

// THEME SWITCHER
const theme1btn = document.querySelector("#theme1-btn");
const theme2btn = document.querySelector("#theme2-btn");
const theme3btn = document.querySelector("#theme3-btn");
const body = document.querySelector("body");
const clacBody = document.querySelector("#calculator");


theme2btn.addEventListener("click", function () {
  let element = document.body;
  if ((classList = "theme1")) {
    element.classList.toggle("theme2");
  } else if ((classList = "theme2")) {
    element.classList.toggle("theme3");
  } else {
    element.classList.toggle("theme1");
  }
});
