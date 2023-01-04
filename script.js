import {
  brojRadnihDanaDo,
  pomakniRasporedZa,
  formatDDMMYYYY,
  danUTjednu,
  praznici,
  kolonaDatum,
  prviRadniDanPrije,
} from './utilities.js';

let osobe = [
  'Sljiva',
  'Tino',
  'Ante',
  'Jo',
  'Filip',
  'Ivona',
  'Zvonac',
  'Antonio',
  'Karlo',
  'Tin',
  'Ena',
  'Kia',
  'Marko',
  'Studenti',
  'Zagy',
];

const danas = new Date('2023-01-26');
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
