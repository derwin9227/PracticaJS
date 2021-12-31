function generarInputs(cantidadValores){
    for(i=0;i<cantidadValores;i++)
    {
        let label1 = document.createElement("label");
        let label2 = document.createElement("label");
        let input1 = document.createElement("input");
        let input2 = document.createElement("input");
        input1.setAttribute('type', 'text');
        input1.setAttribute('id', `nombre${i}`);
        input1.setAttribute('placeholder', `Ingrese el Nombre ${i+1}`);
        input2.setAttribute('type', 'number');
        input2.setAttribute('id', `salario${i}`);
        input2.setAttribute('placeholder', `Ingrese el Salario ${i+1}`);
        
        let spaceBetween = document.createElement("br");
        
        let formulario = document.getElementById('form');
        label1.textContent = `Nombre: ${i+1} ==> `;
        label2.textContent = `Salario: ${i+1} ==> `;
        formulario.appendChild(label1);
        formulario.appendChild(input1);
        formulario.appendChild(spaceBetween);
        formulario.appendChild(label2);
        formulario.appendChild(input2);
        formulario.appendChild(spaceBetween);
    }
}//generarInputs

function agregarInputs(){
    let cantidadInputs = document.getElementById('cantidadInputs');
    let cantidad = parseInt(cantidadInputs.value);

    const boton = document.getElementById("boton");

    if(cantidadInputs.value == ''){alert('El Campo no puede estar vacio');}


    if (cantidad <= 0){
        alert("Tiene que escribir un numero mayor a 0");
        resetForm();
        boton.focus();
    }else{
        resetForm();
        generarInputs(cantidad);
        document.getElementById('nombre0').focus();
    }

}//agregarInputs

function resetForm(){
    const formulario = document.getElementById('form');

        while(formulario.firstChild) {
            formulario.removeChild(formulario.firstChild);
        }
        

}//resetForm