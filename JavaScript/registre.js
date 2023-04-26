// Gestion de la selection des personnes **********************************

// Ajout des Adultes

let nbrMan = 0;
let downA = document.getElementById("downA");
let upA = document.getElementById("upA");
let div = `
<div class="col-2 pastille d-flex pastMan mx-2 " id="pastA">Adulte</div>`;

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

let nbrChil = 0;
let nombreE = document.getElementById("nombreE");
let upE = document.getElementById("upE");
let downE = document.getElementById("downE");
let nombre2 = (nombreE.textContent = nbrChil);
let div2 = `
<div class="col-2 pastille d-flex pastChild mx-2" id="pastE" >Enfant</div>`;

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

// Gestion des boutons convive

if (nbrChil == 0) {
  downE.style.visibility = "hidden";
}
if (nbrMan == 0) {
  downA.style.visibility = "hidden";
}
if (nbrChil + nbrMan == 4) {
  upA.style.visibility = "hidden";
  upE.style.visibility = "hidden";
}

upA.addEventListener("click", () => {
  if (nbrMan > 0) {
    downA.style.visibility = "visible";
  }
  if (nbrMan === 4) {
    upA.style.visibility = "hidden";
    upE.style.visibility = "hidden";
  }
  if (nbrChil + nbrMan == 4) {
    upA.style.visibility = "hidden";
    upE.style.visibility = "hidden";
  }
});

upE.addEventListener("click", () => {
  if (nbrChil > 0) {
    downE.style.visibility = "visible";
  }
  if (nbrChil === 4) {
    upA.style.visibility = "hidden";
    upE.style.visibility = "hidden";
  }
  if (nbrChil + nbrMan == 4) {
    upA.style.visibility = "hidden";
    upE.style.visibility = "hidden";
  }
});

downA.addEventListener("click", () => {
  if (nbrMan < 4) {
    upA.style.visibility = "visible";
    upE.style.visibility = "visible";
  }
  if (nbrMan == 0) {
    downA.style.visibility = "hidden";
  }
  if (nbrChil + nbrMan == 0) {
    downA.style.visibility = "hidden";
    downE.style.visibility = "hidden";
  }
});

downE.addEventListener("click", () => {
  if (nbrChil < 4) {
    upE.style.visibility = "visible";
    upA.style.visibility = "visible";
  }
  if (nbrChil == 0) {
    downE.style.visibility = "hidden";
  }
  if (nbrChil + nbrMan == 0) {
    downA.style.visibility = "hidden";
    downE.style.visibility = "hidden";
  }
});
