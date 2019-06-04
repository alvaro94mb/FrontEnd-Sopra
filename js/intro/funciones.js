function muestraMsg(msg){
    console.log(msg);
}

muestraMsg("Un mensaje para la funcion");
muestraMsg();
muestraMsg("Un mensaje para la funcion", 2);

function muestraArgs(arg1){
    console.log(arguments);
    console.log(arguments[3]);
}

muestraArgs(1, 2, 3, "hola")

//funciones recursivas

function sumatorio(num){
    if(num === 1){
        return num;
    } else{
        return num + sumatorio(num - 1);
    }
}

sumatorio(5); //5+4+3+2+1
console.log('Sumatorio de 5: ' + sumatorio(5))

//funciones callbacks
function ejemploCallbacks(){
    console.log(1);
    setTimeout(function () {
        console.log(2);
    }, 2000);
    console.log(3);
}

/*console.log('ejemploCallbacks:');
console.log('**********')
ejemploCallbacks()
console.log('**********')*/

function guardar(){
    console.log('Datos Guardados!')
}

function validar(nombreIntroducido, cb){
    console.log('Pidiendo nombres validos...')
    setTimeout(function(){
        if(['angel', 'sandra', 'charly'].includes(nombreIntroducido)){
            cb(); //callback
            //return true;
        }
    }, 300);
}

var esValido = validar('angel', guardar);
console.log('ESVALIDO: ' + esValido)
if(esValido){
    guardar();
}



//funciones anonimas

/*function(){
    //aqui se hace algo

}*/

var series = ['TWD', 'GOT', 'Chernobyl'];
series.forEach(function (elem, pos) {
    console.log(pos +  ': ' + elem);
});

//funciones de arrays

var nums = [1, 2, 3, 4, 5];
var impares = nums.filter(function(elem){
    return elem % 2 !== 0;
})

var numImparesX3 = impares.map(function(elem){
    return elem * 3;
})

var sumTotalImpareX3 = numImparesX3.reduce(
    function(accu, elem){
        return accu += elem;
}, 10);


console.log(impares)
console.log(numImparesX3)
console.log(sumTotalImpareX3)