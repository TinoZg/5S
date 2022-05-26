import {
  brojRadnihDanaDo,
  pomakniRasporedZa,
  formatDDMMYYYY,
  danUTjednu,
  dodajDane,
  praznici,
  kolonaDatum,
} from "./utilities.js";

let osobe = [
  "Ante",
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
];

const danas = new Date();
danas.setHours(1, 0, 0);

// Datum formatiran u oblik dd.mm.yyyy

// Broj radnih dana od fiksnog datuma
const dana = brojRadnihDanaDo(danas, praznici);
osobe = pomakniRasporedZa(osobe, dana);

for (let i = 0; i < osobe.length; i++) {
  const element = osobe[i];
  const [osoba, datum, dan] = document.getElementById(i).children;
  osoba.innerText = element;
  datum.innerText = formatDDMMYYYY(kolonaDatum(danas, i - 1));
  dan.innerText = danUTjednu(kolonaDatum(danas, i - 1));
}
