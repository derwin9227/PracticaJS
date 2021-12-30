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
/*     console.log('lista '+lista);
    let conteo={};
    lista.map( elemento => {
        console.log('elemento => '+elemento);
        console.log('elemento x => '+lista[elemento]);
            if(conteo[elemento])
            {
                conteo[elemento] += 1;
            }else{
                conteo[elemento] = 1;
            }//else


        }//function 
    );
    console.log('contar '+conteo);
    return conteo; */
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

/* function ordenarArray(){
    let listaOrdenada = .sort((elementoA, elementoB) => elementoA - elementoB);
    return listaOrdenada
}//ordenarArray */

function calcularModa(){
    let lista = extraeValores();
    const contarExistentes = contar(lista);
    const moda = contarExistentes[contarExistentes.length - 1];
    alert('moda '+moda);
}

