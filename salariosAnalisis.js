//funciones Helpers
function esPar(totalLista){
    return (totalLista % 2 === 0);
}//esPar
 
function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }//function
    )//const

    return promedioLista = sumaLista / lista.length;
}//calcularMediaAritmetica

//Calcular de mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);

        return mediana;

    }else{
         const personaMitad = lista[mitad];
         return personaMitad;
    }//else
}//medianaSalarios

function getSalary(){
    let salaries = listaUsuarios().map(
        persona => persona.salary
    );
    return salaries;
}//getSalary

function orderSalaries(){
    let salariesSorted = getSalary().sort(
        (salaryA, salaryB) => (salaryA - salaryB)
    );
    return salariesSorted;
}//orderSalaries

function medianaGeneral(){
    let medianaGeneral = medianaSalarios(orderSalaries());
    return medianaGeneral;
}//calcularMedianaSalarios

//mediana del top 10%
function salariesTop(){
    let spliceStart = parseInt((orderSalaries().length * 90) / 100);
    let spliceCount = orderSalaries().length - spliceStart;
    
    let salariesTop = orderSalaries().splice(
        spliceStart,
        spliceCount,
    );
    return salariesTop;
}//salariesTop

function calcularMedianaSalarios(){
    alert(
        `El salario promedio es de: ${medianaGeneral()} 
        y el salario top 10 es: ${salariesTop()}`
    );
}