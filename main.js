let reserver = document.querySelector(".reserver");
let menu = document.querySelector(".menu");

reserver.addEventListener("mouseenter", () => {
  reserver.style.transform = "scale(1.2)";
});

reserver.addEventListener("mouseleave", () => {
  reserver.style.transform = "scale(1)";
});

menu.addEventListener("mouseenter", () => {
  menu.style.transform = "scale(1.2)";
});

menu.addEventListener("mouseleave", () => {
  menu.style.transform = "scale(1)";
});
