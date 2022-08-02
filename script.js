const form = document.getElementById("form");

form.addEventListener("submit", stampaBiglietto);

const prezzo = 0.21;
const scontoMinorenni = 0.8;
const scontoAnziani = 0.6;

function stampaBiglietto() {
  const etaPasseggiero = document.getElementById("eta").value;
  console.log(etaPasseggiero);
  const kmDaPercorrere = document.getElementById("km").value;
  console.log(kmDaPercorrere);

  let prezzoBiglietto = kmDaPercorrere * prezzo;

  if (etaPasseggiero < 18) {
    prezzoBiglietto = prezzoBiglietto * scontoMinorenni;
  } else if (etaPasseggiero > 65) {
    prezzoBiglietto = prezzoBiglietto * scontoAnziani;
  } else {
    prezzoBiglietto = prezzoBiglietto;
  }

  document.getElementById("Biglietto").innerHTML = prezzoBiglietto;
}
