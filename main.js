// Gestion des photos page "Home"

let photo01 = document.querySelector(".photo01");
let photo01name = document.querySelector(".photo01name");
let photo01des = document.querySelector(".photo01des");
let photo02 = document.querySelector(".photo02");
let photo02name = document.querySelector(".photo02name");
let photo02des = document.querySelector(".photo02des");
let photo03 = document.querySelector(".photo03");
let photo03name = document.querySelector(".photo03name");
let photo03des = document.querySelector(".photo03des");
let photo04 = document.querySelector(".photo04");
let photo04name = document.querySelector(".photo04name");
let photo04des = document.querySelector(".photo04des");
let photo05 = document.querySelector(".photo05");
let photo05name = document.querySelector(".photo05name");
let photo05des = document.querySelector(".photo05des");
let photo06 = document.querySelector(".photo06");
let photo06name = document.querySelector(".photo06name");
let photo06des = document.querySelector(".photo06des");

photo01.addEventListener("mouseenter", () => {
  photo01.style.transform = "scale(1.2)";
  photo01name.style.visibility = "visible";
  photo01des.style.visibility = "visible";
  photo01.style.zIndex = "3";
});

photo01.addEventListener("mouseleave", () => {
  photo01.style.transform = "scale(1)";
  photo01name.style.visibility = "hidden";
  photo01des.style.visibility = "hidden";
  photo01.style.zIndex = "2";
});

photo02.addEventListener("mouseenter", () => {
  photo02.style.transform = "scale(1.2)";
  photo02name.style.visibility = "visible";
  photo02des.style.visibility = "visible";
  photo02.style.zIndex = "3";
});

photo02.addEventListener("mouseleave", () => {
  photo02.style.transform = "scale(1)";
  photo02name.style.visibility = "hidden";
  photo02des.style.visibility = "hidden";
  photo02.style.zIndex = "2";
});

photo03.addEventListener("mouseenter", () => {
  photo03.style.transform = "scale(1.2)";
  photo03name.style.visibility = "visible";
  photo03des.style.visibility = "visible";
  photo03.style.zIndex = "3";
});

photo03.addEventListener("mouseleave", () => {
  photo03.style.transform = "scale(1)";
  photo03name.style.visibility = "hidden";
  photo03des.style.visibility = "hidden";
  photo03.style.zIndex = "2";
});

photo04.addEventListener("mouseenter", () => {
  photo04.style.transform = "scale(1.2)";
  photo04name.style.visibility = "visible";
  photo04des.style.visibility = "visible";
  photo04.style.zIndex = "3";
});

photo04.addEventListener("mouseleave", () => {
  photo04.style.transform = "scale(1)";
  photo04name.style.visibility = "hidden";
  photo04des.style.visibility = "hidden";
  photo04.style.zIndex = "2";
});

photo05.addEventListener("mouseenter", () => {
  photo05.style.transform = "scale(1.2)";
  photo05name.style.visibility = "visible";
  photo05des.style.visibility = "visible";
  photo05.style.zIndex = "3";
});

photo05.addEventListener("mouseleave", () => {
  photo05.style.transform = "scale(1)";
  photo05name.style.visibility = "hidden";
  photo05des.style.visibility = "hidden";
  photo05.style.zIndex = "2";
});

photo06.addEventListener("mouseenter", () => {
  photo06.style.transform = "scale(1.2)";
  photo06name.style.visibility = "visible";
  photo06des.style.visibility = "visible";
  photo06.style.zIndex = "3";
});

photo06.addEventListener("mouseleave", () => {
  photo06.style.transform = "scale(1)";
  photo06name.style.visibility = "hidden";
  photo06des.style.visibility = "hidden";
  photo06.style.zIndex = "2";
});

// Gestion de la page reservation
