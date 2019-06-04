do{
    var aleatorio = Math.floor(Math.random() * 51);
    console.log('aleatorio: ' + aleatorio)
    var intentos = 1
    do{
        var num = prompt('Introduce un numero: ');
        if(num == aleatorio){
            alert('Has acertado. Intentos: ' + intentos)
        } else if(num < aleatorio){
            alert('Error. El número indicado es menor que el numero a acertar. Intentos: ' + intentos)
        } else if(num > aleatorio){
            alert('Error. El número indicado es mayor que el numero a acertar. Intentos: ' + intentos)
        }
        intentos++;
    }while(num != aleatorio);
    var jugar = confirm('Quiere volver a jugar: ');
}while(jugar)


