function generarInputs(cantidadValores){
    for(i=0;i<cantidadValores;i++)
    {
        let label = document.createElement("label");
        let input = document.createElement("input");
        input.setAttribute('type', 'number');
        input.setAttribute('id', `input${i+1}`);
        input.setAttribute('placeholder', `valor: ${i+1}`);
        let spaceBetween = document.createElement("br");
        
        let formulario = document.getElementById('form');
        label.textContent = `valor: ${i+1} ==>`;
        formulario.appendChild(label);
        formulario.appendChild(input);
        formulario.appendChild(spaceBetween);
    }
}//generarInputs

function agregarInputs(){
    let cantidadInputs = document.getElementById('cantidadInputs');
    let cantidad = parseInt(cantidadInputs.value);

    generarInputs(cantidad);

    alert(`Se han generado ${cantidad} de campos satisfactoriamente`);

}//agregarInputs