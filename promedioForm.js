let click = 0;

function generarInputs(cantidadValores){
    click++;
    for(i=0;i<cantidadValores;i++)
    {
        let label = document.createElement("label");
        let input = document.createElement("input");
        input.setAttribute('type', 'number');
        input.setAttribute('id', `input${i+1}`);
        input.setAttribute('placeholder', `valor: ${i+1}`);
        
        label.setAttribute('id', `label${i+1}`);
        let spaceBetween = document.createElement("br");
        
        let formulario = document.getElementById('form');
        label.textContent = `valor: ${i+1} ==> `;
        formulario.appendChild(label);
        formulario.appendChild(input);
        formulario.appendChild(spaceBetween);
    }
}//generarInputs

function agregarInputs(){
    let cantidadInputs = document.getElementById('cantidadInputs');
    let cantidad = parseInt(cantidadInputs.value);

    if(click >= 1)
    {
        resetForm();
    }

    generarInputs(cantidad);

//    alert(`Se han generado ${cantidad} de campos satisfactoriamente`);

}//agregarInputs

function resetForm(){
    const formulario = document.getElementById('form');

        while(formulario.firstChild) {
            formulario.removeChild(formulario.firstChild);
        }
        

}//resetForm