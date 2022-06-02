var praznici = {
  "2022-01-01": "Nova Godina",
  "2022-01-06": "Sveta tri kralja",
  "2022-04-17": "Uskrs",
  "2022-04-18": "Uskrsni ponedjeljak",
  "2022-05-01": "Praznik rada",
  "2022-05-30": "Dan državnosti",
  "2022-06-16": "Tijelovo",
  "2022-06-22": "Dan antifašističke borbe",
  "2022-08-05": "Dan domovinske zahvalnosti",
  "2022-08-15": "Velika Gospa",
  "2022-11-01": "Dan svih svetih",
  "2022-11-18": "Sjećanje na Vukovar",
  "2022-12-25": "Božić",
  "2022-12-26": "Sveti Stjepan",
  "2023-01-01": "Nova Godina",
  "2023-01-06": "Sveta tri kralja",
  "2023-04-09": "Uskrs",
  "2023-04-10": "Uskrsni ponedjeljak",
  "2023-05-01": "Praznik rada",
  "2023-05-30": "Dan državnosti",
  "2023-06-08": "Tijelovo",
  "2023-06-22": "Dan antifašističke borbe",
  "2023-08-05": "Dan domovinske zahvalnosti",
  "2023-08-15": "Velika Gospa",
  "2023-11-01": "Dan svih svetih",
  "2023-11-18": "Sjećanje na Vukovar",
  "2023-12-25": "Božić",
  "2023-12-26": "Sveti Stjepan",
};

/**
 * Funkcija vraća broj dana između 2 datuma
 * @param {Date} pocetak
 * @param {Date} kraj
 * @returns {integer}
 */
function brojDana(pocetak, kraj) {
  const datum1 = new Date(pocetak.getTime());
  const datum2 = new Date(kraj.getTime());

  // Dan u milisekundana
  const jedanDan = 1000 * 60 * 60 * 24;

  // Razlika u milisekundama
  const razlika = datum2.getTime() - datum1.getTime();

  // Razlika u danima
  const razlikaDana = Math.round(razlika / jedanDan);

  return razlikaDana;
}

function dodajDane(datum, dana) {
  let noviDatum = new Date(datum.getTime());
  noviDatum.setDate(noviDatum.getDate() + dana);
  return noviDatum;
}

function brojRadnihDanaDo(datum, praznici) {
  let pocetak = new Date("2022-05-25");
  const ukupnoDana = brojDana(pocetak, datum);
  let i = 0;
  while (i < ukupnoDana) {
    pocetak = dodajDane(pocetak, 1);
    if (
      !(
        praznici[pocetak.toLocaleDateString("en-CA")] ||
        pocetak.getDay() === 0 ||
        pocetak.getDay() === 6
      )
    ) {
      i++;
    }
  }
  return i;
}

const danas = new Date("2022-05-28");
danas.setHours(1, 0, 0);
console.log(brojRadnihDanaDo(danas));
