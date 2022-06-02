import {
  brojRadnihDanaDo,
  pomakniRasporedZa,
  formatDDMMYYYY,
  danUTjednu,
  praznici,
  kolonaDatum,
  prviRadniDanPrije,
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

const danas = new Date("2022-05-31");
danas.setHours(1, 0, 0);

// Datum formatiran u oblik dd.mm.yyyy

// Broj radnih dana od fiksnog datuma
const dana = brojRadnihDanaDo(danas, praznici);
osobe = pomakniRasporedZa(osobe, dana);

const radniDan = prviRadniDanPrije(danas);

for (let i = 0; i < osobe.length; i++) {
  const element = osobe[i];
  const [osoba, datum, dan] = document.getElementById(i).children;
  osoba.innerText = element;
  datum.innerText = formatDDMMYYYY(kolonaDatum(radniDan, i - 1));
  dan.innerText = danUTjednu(kolonaDatum(radniDan, i - 1));
}
