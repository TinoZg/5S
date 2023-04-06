import {
  brojRadnihDanaDo,
  pomakniRasporedZa,
  formatDDMMYYYY,
  danUTjednu,
  praznici,
  kolonaDatum,
  prviRadniDanPrije,
  addRow,
} from './utilities.js';

let osobe = [
  'Sljiva',
  'Tino',
  'Jo',
  'Filip',
  'Petra',
  'Marin',
  'Zvonac',
  'Antonijo',
  'Karlo',
  'Tin',
  'Ena',
  'Kia',
  'Marko',
  'Studenti',
  'Zagy',
];

const danas = new Date();
danas.setHours(1, 0, 0);

// Datum formatiran u oblik dd.mm.yyyy

// Broj radnih dana od fiksnog datuma
const dana = brojRadnihDanaDo(danas, praznici);
osobe = pomakniRasporedZa(osobe, dana);

const radniDan = prviRadniDanPrije(danas);

// Ako je ponedjeljak, fiksno stavljamo Mirči kao osobu
let i = 0;
let j = 0;
while (i < osobe.length) {
  const element = osobe[i];
  const datum = formatDDMMYYYY(kolonaDatum(radniDan, j - 1));
  const dan = danUTjednu(kolonaDatum(radniDan, j - 1));

  if (danUTjednu(kolonaDatum(radniDan, j - 1)) == 'Ponedjeljak') {
    addRow('Mirči', datum, dan, j);
  } else {
    addRow(element, datum, dan, j);
    i++;
  }

  j++;
}
