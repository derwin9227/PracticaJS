
    function calcularPromedio(){
        let lista = [];
        let cantidadInputs = document.getElementById('cantidadInputs').value;
        let cantidad = parseInt(cantidadInputs);

        for(i=0; i<cantidad; i++)
        {
            lista.push(parseInt(document.getElementById(`input${i+1}`).value));
        }//for
        
        mediaAritmetica(lista);

    }//calcularPromedio

function mediaAritmetica(lista){
    console.log(lista);
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }//funcion valor acumulado
    );

    const promedioLista = sumaLista / lista.length;

    alert(`El promedio total es: ${promedioLista}`);

}//mediaAritmetica