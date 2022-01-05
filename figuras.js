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
        return "El area del triangulo es de: " + areaTriangulo + " cm2";
    }//areaTriangulo

    areaTriangulo();

console.groupEnd();

    console.group("Circulo");

    function diametroCirculo(radio){
        return (radio * 2);
    }//diametroCirculo

    diametroCirculo();

    function perimetroCirculo(radio){
        return (diametroCirculo(radio)*Math.PI);
    }//perimetroCirculo

    areaCirculo();

    function areaCirculo(radio){
        return (radio*radio*Math.PI);
    }//areaCirculo

    areaCirculo();

console.groupEnd();

//aqui interactuamos con el HTML

//Cuadrado
    function calcularPerimetroCuadrado(){
        const input = document.getElementById("InputCuadrado");
        const value = parseFloat(input.value);

        const perimetro = perimetroCuadrado(value);

        alert(`El perimetro de su cuadrado es: ${perimetro}`);
    }//calcularPerimetroCuadrado

    function calcularAreaCuadrado(){
        const input = document.getElementById("InputCuadrado");
        const value = input.value;

        const area = areaCuadrado(value);

        alert(`El area de su cuadrado es: ${area} cm2`);
    }//calcularAreaCuadrado

//Triangulo

    //perimetro
    function calcularPerimetroTriangulo(){
        const inputLado1 = document.getElementById('lado1Triangulo');
        const lado1 = parseFloat(inputLado1.value);

        const inputLado2 = document.getElementById('lado2Triangulo');
        const lado2 = parseFloat(inputLado2.value);

        const alturaTriangulo = document.getElementById('alturaTriangulo');
        const altura = parseFloat(alturaTriangulo.value);

        const perimetro = perimetroTriangulo(lado1, lado2, altura);

        alert(perimetro);

    }//calcularPerimetroTriangulo

    //area
    function calcularAreaTriangulo(){
        const alturaTriangulo = document.getElementById('alturaTriangulo');
        const altura = parseFloat(alturaTriangulo.value);

        const baseTriangulo = document.getElementById('baseTriangulo');
        const base = parseFloat(baseTriangulo.value);

        const area = areaTriangulo(base, altura);

        alert(area);
    }//calcularAreaTriangulo

//circulo
    function calcularDiametroCirculo(){
        const inputCirculo = document.getElementById('inputCirculo');
        const radio = parseFloat(inputCirculo.value);

        const diametro = diametroCirculo(radio);

        alert(`El diametro del circulo es: ${diametro} cm`);
    }//calcularDiametroCirculo

    function calcularPerimetroCirculo(){
        const inputCirculo = document.getElementById('inputCirculo');
        const radio = parseFloat(inputCirculo.value);

        const perimetro = perimetroCirculo(radio);

        alert(`El perimetro del circulo es: ${perimetro} cm`);
    }//calcularDiametroCirculo

    function calcularAreaCirculo(){
        const inputCirculo = document.getElementById('inputCirculo');
        const radio = parseFloat(inputCirculo.value);

        const area = areaCirculo(radio);

        alert(`El area del circulo es: ${area} cm2`);
    }//calcularAreaCirculo