import {
  brojRadnihDanaDo,
  pomakniRasporedZa,
  formatDDMMYYYY,
  danUTjednu,
  praznici,
  kolonaDatum,
  prviRadniDanPrije,
} from './utilities.js';

export default function calculateData() {
  let osobe = [
    'Sljiva',
    'Tino',
    'Jo',
    'Filip',
    'Petra',
    'Zvonac',
    'Antonijo',
    'Tin',
    'Ena',
    'Kic',
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

  let prethodniRadniDan = kolonaDatum(radniDan, -1);
  prethodniRadniDan.setHours(2);
  prethodniRadniDan = prethodniRadniDan.toISOString().slice(0, 10);

  const data = [];

  for (let i = 0; i < osobe.length; i++) {
    const dataObject = {};
    dataObject.ime = osobe[i];
    dataObject.datum = formatDDMMYYYY(kolonaDatum(radniDan, i - 1));
    dataObject.dan = danUTjednu(kolonaDatum(radniDan, i - 1));
    data.push(dataObject);
  }

  return data;
}
