async function getData() {
  const response = await fetch('/data');
  const data = await response.json();

  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    const [ime, datum, dan] = document.getElementById(i).children;
    ime.innerText = element.ime;
    datum.innerText = element.datum;
    dan.innerText = element.dan;
  }
}

getData();
