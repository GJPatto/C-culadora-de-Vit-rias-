let resultado = soma (200, 50)

function soma (numA, numB){
  let somatorio = numA - numB
  return somatorio
}

if (resultado<10){
    console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível de FERRO")
}
else if (resultado >=11 && resultado < 20){
    console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível de BRONZE")
}
else if (resultado >=21 && resultado < 50){
    console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível de PRATA")
}
else if (resultado >=51 && resultado < 80){
    console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível de OURO")
} 
else if (resultado >=81 && resultado < 90){
    console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível de DIAMANTE")
}
else if (resultado >=91 && resultado < 100){
    console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível de LENDÁRIO")
} 
else if (resultado >= 101){
    console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível de IMORTAL")
} 