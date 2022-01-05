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
    let clave=0, valor=0;
    const contarExistentes = contar(lista).map(x => {
      if (x[1] >= valor) {
        clave=x[0];
        valor = x[1];
        //console.log('clave: '+x[0]+' valor: '+x[1]);
      }
    });

    //const moda = contarExistentes[contarExistentes.length - 1];
    alert(`el valor promedio es: ${clave} se repite ${valor} veces`);
}


/* let valor=0;
contar(extraeValores()).map(x => {
  if (x[1] >= valor) {
    valor = x[1];
    console.log('clave: '+x[0]+' valor: '+x[1]);
  }
});
console.log('el valor mayor es: '+valor); */