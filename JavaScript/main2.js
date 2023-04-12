let dateBtn = document.getElementById("dateBtn");
let heureBtn = document.getElementById("heureBtn");
let personneBtn = document.getElementById("personneBtn");
let datePage = document.querySelector(".datePage");
let heurePage = document.querySelector(".heurePage");
let personnePage = document.querySelector(".personnePage");
let btnA = document.querySelector(".btnA");
let btnB = document.querySelector(".btnB");
let btnC = document.querySelector(".btnC");

dateBtn.addEventListener("click", () => {
  datePage.style.visibility = "visible";
  heurePage.style.visibility = "hidden";
  personnePage.style.visibility = "hidden";
  btnA.classList.add("active");
  btnB.classList.remove("active");
  btnC.classList.remove("active");
});

heureBtn.addEventListener("click", () => {
  heurePage.style.visibility = "visible";
  datePage.style.visibility = "hidden";
  personnePage.style.visibility = "hidden";
  btnB.classList.add("active");
  btnA.classList.remove("active");
  btnC.classList.remove("active");
});

personneBtn.addEventListener("click", () => {
  personnePage.style.visibility = "visible";
  heurePage.style.visibility = "hidden";
  datePage.style.visibility = "hidden";
  btnC.classList.add("active");
  btnA.classList.remove("active");
  btnB.classList.remove("active");
});
