// Gestion du changement des onglets *******************************

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

// Gestion du calendrier ************************************

let cases = document.getElementsByClassName("case");
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

const monthName = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

// action pour avancer ou reculer dans les mois via les flèches
const UP_MONTH = "upMonth";
const DOWN_MONTH = "downMonth";

function CALENDRIER_REDUCER(action) {
  switch (action) {
    case UP_MONTH:
      if (month < 12) month++;
      else {
        year++;
        month = 1;
      }
      break;

    case DOWN_MONTH:
      if (month > 0) month--;
      else {
        year--;
        month = 12;
      }
      break;
    default:
      break;
  }
  calendrier(year, month);
}

document.getElementById("avant").onclick = function () {
  CALENDRIER_REDUCER(DOWN_MONTH);
  console.log(month);
};

document.getElementById("apres").onclick = function () {
  CALENDRIER_REDUCER(UP_MONTH);
  console.log(month);
};

function calendrier(year, month) {
  const monthNb = month + 12 * (year - 2020);

  let cld = [{ dayStart: 2, length: 31, year: 2020, month: "janvier" }];
  for (let i = 0; i < monthNb - 1; i++) {
    let yearSimulé = 2020 + Math.floor(i / 12);
    const monthsSimuléLongeur = [
      31,
      getFévrierLenght(yearSimulé),
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ];
    let monthsSimuléIndex = i + 1 - (yearSimulé - 2020) * 12;

    cld[i + 1] = {
      dayStart:
        (cld[i].dayStart + monthsSimuléLongeur[monthsSimuléIndex - 1]) % 7,
      length: monthsSimuléLongeur[monthsSimuléIndex],
      year: 2020 + Math.floor((i + 1) / 12),
      month: monthName[monthsSimuléIndex],
    };

    if (cld[i + 1].month === undefined) {
      cld[i + 1].month = "Janvier";
      cld[i + 1].length = 31;
    }
  }
  for (let i = 0; i < cases.length; i++) {
    cases[i].innerText = "";
  }
  for (let i = 0; i < cld[cld.length - 1].length; i++) {
    cases[i + cld[cld.length - 1].dayStart].innerText = i + 1;
  }
  document.getElementById("cldT").innerText =
    cld[cld.length - 1].month.toLocaleUpperCase() +
    " " +
    cld[cld.length - 1].year;
}

calendrier(year, month);

// fonction pour l'année bissextile
function getFévrierLenght(year) {
  if (year % 4 === 0) return 29;
  else return 28;
}

let cldBoite = document.getElementById("cldBoite");

cldBoite.addEventListener("click", function () {
  heurePage.style.visibility = "visible";
  datePage.style.visibility = "hidden";
  personnePage.style.visibility = "hidden";
  btnB.classList.add("active");
  btnA.classList.remove("active");
  btnC.classList.remove("active");
});

// Gestion de la selection des heures **********************************

// Ajout des Adultes
let nbrAdefaut = 2;
let nbrMan = nbrAdefaut;
let downA = document.getElementById("downA");
let upA = document.getElementById("upA");
let div = `
<div class="col-2 pastille d-flex pastMan mx-2 my-3" id="pastA" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Adulte</div>`;
let test = document.getElementById("parent");
let nombreA = document.getElementById("nombreA");
let nombre = (nombreA.textContent = nbrMan);

const addA = () => {
  nbrMan++;
  let targetDiv = document.getElementById("parent");
  targetDiv.innerHTML += div;
  nombreA.textContent = nbrMan;
};

const delA = () => {
  nbrMan--;
  let targetDiv = document.getElementById("parent");
  nombreA.textContent = nbrMan;
  let pastA = document.getElementById("pastA");
  pastA.remove();
};

upA.addEventListener("click", addA);
downA.addEventListener("click", delA);

// Ajout des Enfants
let nbrEdefaut = 0;
let nbrChil = nbrEdefaut;
let nombreE = document.getElementById("nombreE");
let upE = document.getElementById("upE");
let downE = document.getElementById("downE");
let nombre2 = (nombreE.textContent = nbrChil);
let div2 = `
<div class="col-2 pastille d-flex pastChild mx-2 my-3" id="pastE" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Enfant</div>`;

const addE = () => {
  nbrChil++;
  nombreE.textContent = nbrChil;
  let targetDiv = document.getElementById("parent");
  targetDiv.innerHTML += div2;
};

const delE = () => {
  nbrChil--;
  nombreE.textContent = nbrChil;
  let pastE = document.getElementById("pastE");
  pastE.remove();
};

upE.addEventListener("click", addE);
downE.addEventListener("click", delE);

// Places restantes

let nbrPlaceTotal = 15 - (nbrMan + nbrChil);

let nbrPlace = document.getElementById("nbrPlace");
nbrPlace.innerHTML = nbrPlaceTotal;

if (nbrChil == nbrEdefaut) {
  downE.style.visibility = "hidden";
}
if (nbrMan == nbrAdefaut) {
  downA.style.visibility = "hidden";
}

upA.addEventListener("click", () => {
  nbrPlace.innerHTML--;
  if (nbrPlace.innerHTML == 0) {
    upA.style.visibility = "hidden";
    upE.style.visibility = "hidden";
  }
  if (nbrMan > 0) {
    downA.style.visibility = "visible";
  }
});

upE.addEventListener("click", () => {
  nbrPlace.innerHTML--;
  if (nbrPlace.innerHTML == 0) {
    upA.style.visibility = "hidden";
    upE.style.visibility = "hidden";
  }
  if (nbrChil > 0) {
    downE.style.visibility = "visible";
  }
});

downA.addEventListener("click", () => {
  nbrPlace.innerHTML++;
  if (nbrMan == nbrAdefaut) {
    downA.style.visibility = "hidden";
  }
  if (nbrPlace.innerHTML > 0) {
    upA.style.visibility = "visible";
    upE.style.visibility = "visible";
  }
});

downE.addEventListener("click", () => {
  nbrPlace.innerHTML++;
  if (nbrChil == nbrEdefaut) {
    downE.style.visibility = "hidden";
  }

  if (nbrPlace.innerHTML > 0) {
    upA.style.visibility = "visible";
    upE.style.visibility = "visible";
  }
});
