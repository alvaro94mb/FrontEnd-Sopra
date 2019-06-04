var sumaYo = 0, sumaMaquina = 0;
var numsYo = new Array();
var numsMaquina = new Array();
var otro = false;

var jugar = confirm('Quieres jugar?');
if (jugar) {
    do{
        var aleatorio = Math.floor(Math.random() * 9) + 1;
        alert('Tu numero es: ' + aleatorio);
        numsYo.push(aleatorio);
        sumaYo = sumarArray(numsYo);
        if (sumaYo > 20) {
            alert('Has superado los 20 - Tienes ' + sumaYo);
            otro = null;
        } else if(sumaYo == 20){
            alert('Has ganado! - Tienes ' + sumaYo);
            otro = null;
        }
         else {
            otro = confirm('Quieres otro numero - Tienes ' + sumaYo);
        }
    }while(otro);
} 
if(sumaYo < 20){
    sacarMaquina();
}

var difYo = 20 - sumaYo;
var difMaq = 20 - sumaMaquina;
if(difYo < difMaq && difYo > 0){
    alert('Ha ganado el jugador')
} else{
    alert('Ha ganado la maquina')
}

function sacarMaquina(){
    do{
        var aleatorio = Math.floor(Math.random() * 9) + 1;
        numsMaquina.push(aleatorio);
        sumaMaquina = sumarArray(numsMaquina);
        alert('Numero maquina: ' + aleatorio + " - Total maquina: " + sumaMaquina);
    }while(sumaMaquina < 17);
}

function sumarArray(array){
    var suma = array.reduce(
        function(accu, elem){
            return accu += elem;
        }, 0);
    return suma;
}