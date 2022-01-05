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

function contar(lista){

    listaCount={};
    lista.map(
        function (elemento) {
          if (listaCount[elemento]) {
            listaCount[elemento] += 1;
          } else {
            listaCount[elemento] = 1;
          }
        }
      );

      const listaArray = Object.entries(listaCount).sort((elementoA, elementoB) => elementoA - elementoB);

      return listaArray;
}//contar

function orderArray(lista){
    let listaOrdenada = lista.sort((elementoA, elementoB) => elementoA - elementoB);
    return listaOrdenada
}//ordenarArray

function calcularModa(){
    let lista = orderArray(extraeValores());
    const contarExistentes = contar(lista);

    const moda = contarExistentes[contarExistentes.length - 1];
    //contar(orderArray(extraeValores())).map(x => console.log("puto "+x));
    alert('moda '+moda);
}

