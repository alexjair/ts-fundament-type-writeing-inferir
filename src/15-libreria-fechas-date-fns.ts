import {subDays,format} from 'date-fns';// importacion de la libreria.

const date =  new Date(1993,1,6); //  en JavaScript el formato de fechas va de 0 a 11 donde 0 es enero y 11 es diciembre.
const response = subDays(date,1); // funcion para restar dias
const string=format(response,'yyyy/MM/dd');// funcion para dale formato a la fecha.
console.log(string);

const response2 = subDays(date,60); // funcion para restar dias
const string2=format(response2,'yyyy/MM/dd');// funcion para dale formato a la fecha.
console.log(string2);
