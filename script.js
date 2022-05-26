import {
  brojRadnihDanaDo,
  pomakniRasporedZa,
  formatDDMMYYYY,
  danUTjednu,
  dodajDane,
  praznici,
} from "./utilities.js";

let osobe = [
  "Jo",
  "Filip",
  "Ivona",
  "Zvonac",
  "Antonio",
  "Karlo",
  "Tin",
  "Ena",
  "Kia",
  "Marko",
  "Zagy",
  "Sljiva",
  "Tino",
  "Ante",
];

const danas = new Date("2022-05-31");

// Datum formatiran u oblik dd.mm.yyyy

// Broj radnih dana od fiksnog datuma
const dana = brojRadnihDanaDo(danas, praznici);
osobe = pomakniRasporedZa(osobe, dana);

for (let i = 0; i < osobe.length; i++) {
  const element = osobe[i];
  const [osoba, datum, dan] = document.getElementById(i).children;
  osoba.innerText = element;
  datum.innerText = formatDDMMYYYY(dodajDane(danas, i));
  dan.innerText = danUTjednu(dodajDane(danas, i));
}
