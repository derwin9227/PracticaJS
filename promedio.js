let lista = [];

function calcularMediaAritmetica(lista){

    /* let sumaLista = 0;

    for(let i = 0; i< lista.length; i++){
        sumaLista = sumaLista + lista[i];
    }//for */

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }//funcion valor acumulado
    );

    return promedioLista = sumaLista / lista.length;

}//calcularMediaAritmetica