"use strict";var hoy=new Date,anioActual=hoy.getFullYear();console.log("Anio => ".concat(anioActual));var mesActual=hoy.getMonth();console.log("Mes => ".concat(mesActual));var diaCalendario=hoy.getDate();console.log("Dia Calendario => ".concat(diaCalendario));var horas=hoy.getHours();console.log("horas => ".concat(horas));var minutos=hoy.getMinutes();console.log("minutos => ".concat(minutos));var segundos=hoy.getSeconds();console.log("segundos => ".concat(segundos));var milisegundos=hoy.getMilliseconds();console.log("milisegundos => ".concat(milisegundos));var navidad=new Date(2020,11,25),mili=navidad-hoy,seg=mili/1e3,min=seg/60,hor=min/60,dias=hor/24,sem=dias/7;console.log(sem);