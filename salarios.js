function listaUsuarios(){
    const colombia = [];

    let cantidadInputs = document.getElementById('cantidadInputs');
    let cantidad = parseInt(cantidadInputs.value);

    for(i=0; i<cantidad; i++){
            let nombre = document.getElementById(`nombre${i}`).value;
            let salario = parseFloat(document.getElementById(`salario${i}`).value);

            /* nombre = nombre.value;
            salario = parseFloat(salario.value); */
        colombia.push({
            name: nombre,
            salary: salario
            });
        }//for ingreso datos

    return colombia;

}//listaUsuarios
