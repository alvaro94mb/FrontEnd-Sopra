var texto = "Hola mundo!"
console.log(texto);
console.log(typeof(texto) + ' - ' + texto);

texto = 3;

console.log(texto);
var nombre1 ="Me llamo \"Alvaro\"";
var nombre2 ='Me llamo\n "Alvaro"';
console.log(nombre2);

//Truthy o Falsy

if(nombre1){
    console.log('Es truthy');
}

var unTexto;
if(!unTexto){
    console.log('Es falsy')
}

//Arrays
var nums = [1, 2, 3, 4, 5]; //usar esta
var numsConstructor = new Array();

var ar3Posiciones = new Array(3);
ar3Posiciones[0] = 10;
ar3Posiciones[1] = 11;
ar3Posiciones.push(12);
ar3Posiciones.push(13);
console.log(ar3Posiciones);

var texto1 = "Alvaro"
console.log(texto1[0])

var direccion = ['Calle', 'Norte', 12, '3B', 28330, 'Madrid', true];
direccion[4] = '28331';
console.log(direccion);


var txtnum = 3 % 2 === 0 ? 'Es par' : 'Es impar'; //si el 3 es un numero par
var txtnum2 = '';
if(3 % 2 === 0){
    txtnum2 = 'Es par';
} else{
    txtnum2 = 'Es impar'
}

console.log("txtnum: " + txtnum);
console.log("txtnum2: " + txtnum2);

console.log('Un mensaje de informacion')
console.warn('Un mensaje de peligro')
console.error('Un mensaje de error')

//POPUP JS
//alert('iyo loco alerta alerta')
//var esverdad = confirm('Es verdad lo que dicen de mi?')
//var miNombre = prompt('Como te llamas??')

//if else if-else
var miNombre = 'Paco';
if(miNombre == 'Paco'){
    console.log('Eres Paco');
} else if(miNombre === 'Angel'){
    console.log('Eres Angel');
} else{
    console.log('No eres Paco y tampoco Angel, quien eres?')
}

//Switch
switch(miNombre){
    case 'Paco':
        console.log('Switch: Eres Paco');
        break;
    case 'Angel':
        console.log('Switch: Eres Angel');
        break;
    default:
    console.log('Switch: No eres Paco y tampoco Angel, quien eres?');
}


//For
var nombres = ['Robb', 'Arya', 'Sansa', 'Rickon', 'Bran'];

for (var i  = 0; i < nombres.length; i++) {
    console.log(nombres[i]);    
}

//for in
for(var i in nombres){
    console.log('FORIN: ' + nombres[i]);
}

//for of
for(var nombre of nombres){
    console.log('FOROF: ' + nombre);
}

var num = prompt('Introduce un num: ');
//while
while(Number(num) !== -1){
    console.log('Introduce -1 para salir del bucle')
    num = prompt('Introduce un num: ');
}

//do while
do{
    console.log('Introduce -1 para salir del bucle')
    num = prompt('Introduce un num: ');
}while(Number(num) !== -1)