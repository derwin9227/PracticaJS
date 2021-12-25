
function precioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;

}


function calcularPrecioConDescuento()
    {
        const inputPrecio = document.getElementById('inputPrecio');
        const precio = parseFloat(inputPrecio.value);
        const inputDescuento = document.getElementById('inputDescuento');
        let descuento = parseFloat(inputDescuento.value);

        if(precio > 0)
        {
            if(descuento)
                {
                    alert(`El precio total a pagar es: ${precioConDescuento(precio, descuento)}`);
                }else
                {
                    descuento = 0;
                    alert(`El precio total a pagar es: ${precioConDescuento(precio, descuento)}`);

                }
        }else{
            alert('Por favor ingrese un precio para calcular');
        }
}