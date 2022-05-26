/**
 * Funkcija vraća broj radnih dana od fiksnog datuma do danas. Preskačemo vikende i elemente u objektu "praznici"
 * @param {date} datum - datum do kojeg brojimo radne dane
 * @param {object} praznici - datumi praznika
 * @returns {integer}
 */
export function brojRadnihDanaDo(datum, praznici) {
  let radnihDana = 0;
  let pocetak = new Date("2022-05-25");
  while (pocetak < datum) {
    if (
      praznici[pocetak.toLocaleDateString("en-CA")] ||
      pocetak.getDay() === 0 ||
      pocetak.getDay() === 6
    ) {
      pocetak.setDate(pocetak.getDate() + 1);
      continue;
    }
    radnihDana++;
    pocetak.setDate(pocetak.getDate() + 1);
  }
  return radnihDana;
}

/**
 * Funkcija dinamički pomiče osobe, ovisno o broju radnih dana
 * @param {string[]} osobe - Osobe koje su zadužene za red u kuhinji s redoslijedom od fiksnog datuma
 * @param {integer} dana - Broj radnih dana od fiksnog datuma
 * @returns {string[]} - Novi raspored
 */
export function pomakniRasporedZa(osobe, dana) {
  const pomak = dana > osobe.length ? dana % osobe.length : dana;
  return osobe.concat(osobe.splice(0, pomak));
}

/**
 * Funkcija uzima datum i konvertira ga u string oblika dd.mm.yyyy
 * @param {date} datum
 * @returns {string}
 */
export function formatDDMMYYYY(datum) {
  return `${datum.getDate()}.${datum.getMonth() + 1}.${datum.getFullYear()}`;
}

/**
 * Funkcija vraća dan u tjednu
 * @param {date} datum
 * @returns {string}
 */
export function danUTjednu(datum) {
  let dan;
  switch (datum.getDay()) {
    case 0:
      dan = "Nedjelja";
      break;
    case 1:
      dan = "Ponedjeljak";
      break;
    case 2:
      dan = "Utorak";
      break;
    case 3:
      dan = "Srijeda";
      break;
    case 4:
      dan = "Četvrtak";
      break;
    case 5:
      dan = "Petak";
      break;
    case 6:
      dan = "Subota";
  }
  return dan;
}

/**
 * Funkcija dodaje dane na određeni datum
 * @param {date} datum - datum na koji dodajemo dane
 * @param {integer} dana - broj dana koji dodajemo
 * @returns {date}
 */
export function dodajDane(datum, dana) {
  let noviDatum = new Date(datum.getTime());
  noviDatum.setDate(noviDatum.getDate() + dana);
  return noviDatum;
}

export const praznici = {
  "2022-01-01": "Nova Godina",
};
