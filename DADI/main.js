/* Dichiarazione delle variabili */
let btn = document.getElementById('btn');

/* Eseguo la funzione al click */
btn.addEventListener("click",
    function() {
        /* Generato i numeri Random */
        let userNum = Math.floor(Math.random() * 6 + 1);
        let computerNum = Math.floor(Math.random() * 6 + 1);

        /* Verifica di chi ha vinto o se hanno pareggiato */
        if (userNum > computerNum) {
            alert(`HA VINTO IL GIOCATORE. \n Il tuo numero è ${userNum} e il numero del computer è ${computerNum}`);
        } else if (computerNum > userNum) {
            alert(`HA VINTO IL COMPUTER. \n Il numero del computer è ${computerNum} e il numero del giocatore è ${userNum}`);
        } else {
            alert(`AVETE PAREGGIATO. \n Il numero del computer è ${computerNum} e il numero del giocatore è ${userNum}`);
        }
    }


)