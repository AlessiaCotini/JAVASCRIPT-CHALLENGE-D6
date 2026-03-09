/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.

 */

/* -number -> es. 0, 1, 100;
-string -> sequenze di caratteri, o vuota (per un dato iniziale). si delimitano con '',"",``;
-boolean -> true,false. rappresenta la veridicità di qualcosa ;
-undefined-> un valore non definito ma un valore c'è non è vuoto;
-null->assenza esplicita di un valore, variabile VUOTA. */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
/*
let myName = "Alessia";
*/

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/*
x = 12;
y = 20;
let somma = x + y;
console.log(somma);
 */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/*
let x = 12;
*/

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
/*
myName = "Cotini";
const my2ndName = "Giada";
my2ndName = "Gianmaria";
console.log(my2ndName);
*/
/*=> in fase di verifica il valore di my2ndName rimarrà un errore*/
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
/*
let y = 4;
let risultato = x - y;
console.log(risultato);
*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
/*
let name1 = "jhon";
let name2 = "Jhon";
console.log(name1 === name2);
console.log(name2.toLowerCase() !== name2.toLowerCase);*/
