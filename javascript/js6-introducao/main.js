var nome = "Antonio Lima";
var idade = 21;
var idade2 = 10;
var frase = "BRASIL";
var frutas =[{nome:"maça", cor:"vermelha"}, {nome: "uva", cor:"roxa"}]


//alert(idade + idade2);
console.log(nome);
console.log(idade+idade2);
console.log(frase.replace("BRASIL","Japão"));



var list = ["maça", "pera", "laranja"];
//Remover elemento da array.
list.pop();

//Adicionar elemeto a array.
list.push("uva");

//Exibir número de elementos.
console.log(list.length);

//Exibe elementos em ordem contrária.
console.log(list.reverse());

//Exibe os valores como String.
console.log(list.toString());

//Exibe os valores como String, porém, com possibilidade de alteração.
console.log(list.join("|"));

console.log(frutas);

//exive valor da variável frutas referente ao elemento.
alert(frutas[1].cor);


var idade = prompt("Qual é a sua idade");
if (idade >=18){
    alert("Maior de idade");
}
else{
    alert("Menor de idade");
}

//Estrutura de Repetição While//
var count = 0;
while (count <=5){
   console.log(count);
    count = count +1;
};

//Funções//

function soma(n1,n2){
    return n1+ n2;
}

alert(soma(5,10));

function setReplace(frase, novo_nome){
    frase.replace(nome, novo_nome)
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));