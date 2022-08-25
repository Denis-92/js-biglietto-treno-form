/* INPUT DA PROMPT - NON LO VOGLIAMO - DA MODIFICARE IN INPUT DA PULSANTE
let distanzaDaPercorrere = parseInt(prompt('Quanti chilometri da percorrere?'));
let etaPasseggero = parseInt(prompt('Età del passeggero?'));
*/

console.log('JS - OK!');

const prezzoAcquistoHTMLElement = document.getElementById('prezzoAcquisto');

const inputBigliettoHTMLElement = document.getElementById('inputBiglietto');

inputBigliettoHTMLElement.addEventListener('click', function (event) {

    console.log(event);

    // input distanza
    const distanzaDaPercorrereHTMLElement = document.getElementById('distanzaDaPercorrere');

    const distanzaDaPercorrere = parseInt(distanzaDaPercorrereHTMLElement.value);
    console.log('mostra import distanza.. da html', distanzaDaPercorrere);

    // input eta'
    const etaPasseggeroHTMLElement = document.getElementById('etaPasseggero');

    const etaPasseggero = parseInt(etaPasseggeroHTMLElement.value);
    console.log('mostra import età.. da html', etaPasseggero);
    // fine raccolta input --

    const prezzo = 0.21;

    let costoBiglietto = distanzaDaPercorrere * prezzo;
    let prezzoFinale = distanzaDaPercorrere * prezzo;

    if ((isNaN(distanzaDaPercorrere)) || (isNaN(etaPasseggero))) {
        document.getElementById('prezzoAcquisto').innerHTML = `Dati inseriti non validi`;
    }
    else {
        if (etaPasseggero < 18) {
            const scontoMinori = 0.8;
            //console.log('sconto minori', scontoMinori);
            //console.log('costo biglietto', costoBiglietto);
            prezzoFinale = costoBiglietto * scontoMinori;
        }

        else {

            if (etaPasseggero > 65) {
                const scontoSenior = 0.6;
                prezzoFinale = costoBiglietto * scontoSenior;
            }

        }

        prezzoFinale = prezzoFinale.toFixed(2);
        console.log('prezzo finale prima del output', prezzoFinale);

        document.getElementById('prezzoAcquisto').innerHTML = `Il prezzo del tuo biglietto è ${prezzoFinale} €`;
    }

})