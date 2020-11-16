var nome = "Antonio Lima";
var idade = 21;
var idade2 = 10;
var frase = "BRASIL";


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