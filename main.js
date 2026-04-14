function calcular() { let a = Number(document.getElementById("num1").value); let b = Number(document.getElementById("num2").value); let c = Number(document.getElementById("num3").value);

    let soma = a + b + c;
    let subtracao = a - b - c;
    let multiplicacao = a * b * c;
    let divisao = a / b / c;
    
    console.log("Soma:", soma);
    console.log("Subtração:", subtracao);
    console.log("Multiplicação:", multiplicacao);
    console.log("Divisão:", divisao);