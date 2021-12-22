function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }//funcion valor acumulado
    );

    return promedioLista = sumaLista / lista.length;

}//calcularMediaAritmetica

/* lista1 = [
    100,
    200,
    500,
    4000000,
    'a',
    'b',
    'A',
    'B'
]; */

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito){
    if(numerito % 2 === 0){
        return true;
    }else{
        return false;
    }//else

}//esPar

let mediana;

if (esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ]);
    
    mediana = promedioElemento1y2;
}else{
    mediana = lista1[mitadLista1];
}

//listaOrdenada = 
/* console.log(
    lista1.sort(
        (a,b)=>a - b
    )
); */