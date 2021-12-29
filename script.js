/*
Copyright 2021 Ermanno Oliveri

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License. */


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
