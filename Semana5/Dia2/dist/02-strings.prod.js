"use strict";var frase="Al que madruga, Dios lo ayuda",tamanio=frase.length;console.log(tamanio);var minusculas=frase.toLowerCase();console.log(minusculas),console.log(frase);var mayusculas=frase.toUpperCase();console.log(mayusculas);var primeraParte=frase.substr(3,11);console.log(primeraParte);var primeraParteV1=frase.substring(3,14);console.log(primeraParteV1);var iniciaConAl=frase.startsWith("Al qu");console.log(iniciaConAl);var contieneMadruga=frase.includes("madru");console.log(contieneMadruga);var buscarAyuda=frase.indexOf("ayuda");console.log(buscarAyuda);var frase2="Agua qUe no Has de Beber, jala la cadena Y dejala Correr",frase2m=frase2.toLowerCase(),posicionBeber=frase2m.indexOf("BEBER".toLowerCase());console.log(posicionBeber),console.log(frase2[posicionBeber]);var frase3=" antes de partir       ",frase3Trim=frase3.trim();console.log(frase3Trim);