function extraeValores(){
    let lista = [];
    let cantidadInputs = document.getElementById('cantidadInputs').value;
    let cantidad = parseInt(cantidadInputs);

    for(i=0; i<cantidad; i++)
    {
        lista.push(parseInt(document.getElementById(`input${i+1}`).value));
    }//for
    
    return lista;

}//extraeValores

function mediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }//funcion valor acumulado
    );
    promedioLista = sumaLista / lista.length;

    return promedioLista;

}//calcularMediaAritmetica

function esPar(numero){
    if(numero % 2 === 0){
        return true;
    }else{
        return false;
    }//else

}//esPar

function calcularMediaAritmetica(){
    let mediana;
    let lista = extraeValores();
    const mitadLista = parseInt(lista.length / 2);
    const listaOrdenada = lista.sort((A,B) => {return A-B});
    alert(listaOrdenada);

    if (esPar(lista.length)){
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];

        const promedioElemento1y2 = mediaAritmetica([
            elemento1,
            elemento2,
        ]);
        
        mediana = promedioElemento1y2;

        alert(`La mediana tiene un valor de: ${mediana}`);
    }else{
        mediana = lista[mitadLista];

        alert(`La mediana tiene un valor de: ${mediana}`);
    }
}//calcularMediaAritmetica