//Codigo del cuadrado

console.group("Cuadrados");

    function perimetroCuadrado(lado){
        return lado * 4;
    }//perimetroCuadrado

    perimetroCuadrado();

    function areaCuadrado(lado){
        return lado * lado;
    }//areaCuadrado

    areaCuadrado();

console.groupEnd();

//Codigo del triangulo
 console.group("Triangulos");

    function perimetroTriangulo(lado1, lado2, altura){
        let perimetroTriangulo = lado1 + lado2 + altura;
        return `el perimetro del triangulo es de: ${perimetroTriangulo} cm`;
    }//perimetroTriangulo

    perimetroTriangulo();

    function areaTriangulo(base, altura){
        let areaTriangulo = (base * altura) / 2;
        return "El area del triangulo es de: " + areaTriangulo + "cm2";
    }//areaTriangulo

    areaTriangulo();

console.groupEnd();

    console.group("Circulo");

    function diametroCirculo(radio){
        return `El diametro del circulo es de: ${radio * 2} cm`;
    }//diametroCirculo

    diametroCirculo();

    function perimetroCirculo(radio){
        return "El perimetro del circulo es de: " + (radio*2*Math.PI) + "cm";
    }//perimetroCirculo

    areaCirculo();

    function areaCirculo(radio){
        return `el area del circulo es: ${radio*radio*Math.PI} cm2`;
    }//areaCirculo

    areaCirculo();

console.groupEnd();

//aqui interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    alert(`El perimetro de su cuadrado es: ${perimetro}`);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    alert(`El perimetro de su cuadrado es: ${area}`);
}