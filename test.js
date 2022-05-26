function kolonaDatum(datum, brojIteracije) {
  let pomocniDatum = new Date(datum.getTime());
  if (brojIteracije === 0) {
    return pomocniDatum;
  }
  while (brojIteracije > 0) {
    pomocniDatum = dodajDane(pomocniDatum, 1);
    if (
      !(
        praznici[pomocniDatum.toLocaleDateString("en-CA")] ||
        pomocniDatum.getDay() === 0 ||
        pomocniDatum.getDay() === 6
      )
    ) {
      brojIteracije--;
    }
  }
  return pomocniDatum;
}

function dodajDane(datum, dana) {
  let noviDatum = new Date(datum.getTime());
  noviDatum.setDate(noviDatum.getDate() + dana);
  return noviDatum;
}
const praznici = {
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
  "2022-05-26": "TEST",
};

kolonaDatum(new Date(), 5);
console.log();
