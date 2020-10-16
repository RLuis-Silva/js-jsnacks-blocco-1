console.log("funziona js");

// esercizio 1
// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.


// var n1, n2;

// n1 = parseInt(prompt("Inserisci il numero 1: "));
// n2 = parseInt(prompt("Inserisci il numero 2: "));

// if(n1 > n2){
//     console.log(n1 + " è più grande di " + n2);
// }else if(n1 < n2){
//     console.log(n2 + " è più grande di " + n1);
// }else{
//     console.log("i numeri sono uguali");
// }




// esercizio 2
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa una stringa contenente prima la parola più corta, uno spazio e poi la parola più lunga.

// var stringa1, stringa2, stringaNuova;
// stringa1 = prompt("inserisci la tua stringa: ");
// stringa2 = prompt("inserisci la tua stringa: ");

// if( (isNaN(stringa1) ) && (isNaN(stringa2) ) ){
//     if(stringa1.length > stringa2.length){
//         console.log(stringaNuova = stringa2 + " " + stringa1);
//     }else if(stringa1.length < stringa2.length){
//         console.log(stringaNuova = stringa1 + " " + stringa2);
//     }else{
//         console.log("Attenzione le tue stringhe inserite sono uguali!");
//     }

// }else{
//     console.log("Errore, hai inserito dei valori non validi.");
// }



// esercizio 3
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma con il for.


// var somma = 0;
// var input;

// for(var i = 0; i <= 4; i++){ // 1 2 3 4 5
//     input = parseInt(prompt("inserire un numero: "));
//     somma += input; //1 3 6 10 15
//     // numero = numero + input;
// }

// console.log(somma);

//esercizio 4
var invitato = ["paolo", "fabio", "lorenzo"];
var utente;
var utenteValid = false;
var sottostringa;

utente = prompt("Inserire il nome del guest: ").toLowerCase();
for(var i = 0; i < invitato.length; i++){
    if(utente === invitato[i]){
        utenteValid = true;
    }
}
// gestisco output prima lettera in MAIUsc anche se do' input prima letter min
sottostringa = utente.substring(1, utente.length );
if(utenteValid == true){
    console.log(utente.charAt(0).toUpperCase() + sottostringa + " è stato/a invitato/a alla festa.");
}else{
    console.log(utente.charAt().toUpperCase() + sottostringa + " non è stato/a invitato/a alla festa.");
}



//esercizio 5
// var arrayDispari = [];
// var numero;

// for(var i = 1; i <= 6; i++){
//     numero = parseInt(prompt("inserire un numero: "));
//     if(numero % 2 != 0){
//         arrayDispari.push(numero);
//     }
// }
// console.log(arrayDispari);
