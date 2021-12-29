/*
Autore: Ermanno Oliveri
Data: 29/12/2021
Descrizione: Programma per verificare se una frase o una parola è un palindromo
*/

// funzione che verifica che la parola inserita nel form presente in index.html sia un palindromo
function verificaPalindromi(){
    var parola = document.input.testo.value; // salvo nella variabile parola il testo inserito nel form
    
    if (parola === '' || parola === 'undefined'){ // condizione se il form è vuoto
        document.getElementById("risultato").textContent = "Inserire una frase o una parola";        
    }
    else{
        
        let parolaNormalizzata = normalizzaStringa(parola); //salva nella variabile il risultato della funzione normalizzaStringa
        let parolaInvertita = invertiStringa(parolaNormalizzata); //salva nella variabile il risultato della funzione invertiStringa
        
        if (parolaNormalizzata === parolaInvertita){ // condizione se la parola invertita e quella inserite sono uguali
            document.getElementById("risultato").textContent = "La parola inserita \u00E8 un palindromo";
        }
        else { // condizione se la parola invertita e quella originale non sono uguali
            document.getElementById("risultato").textContent = "La parola inserita non \u00E8 un palindromo";
        }
        
    }
}

// funzione che inverte una stringa eliminando gli spazi
function invertiStringa(parola){ 
    return parola.split("").reverse().join("").replace(/ /g, "");
}


// funzione che elimina la puntaggiatura e gli spazi
function normalizzaStringa(parola){
    return parola.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ").replace(/ /g, "");
}