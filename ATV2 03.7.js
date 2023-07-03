ATV2
//1-array com valores numericos 
var ordenarNumeros = ["25", "23", "11","55", "30", "6", "4", "21", "34", "89", "56"];
ordenarNumeros.sort();
console.log(ordenarNumeros);

//2-times
var times = [ "Santos", "Sport", "Santa Cruz", "Vasco", "Chapecó"];
//a
times.push("Flamengo");
console.log(times);
//b
times.shift();
console.log(times);
//c
times.unshift("Palmeiras");
console.log(times);
//d
times.push("Grêmio");
console.log(times);
//e
times.unshift("São Paulo", "Santos");
console.log(times);
//f
var quantidadeElementos = times.length;
console.log(quantidadeElementos);
//g
times.pop();
console.log(times);
//h
times.sort();
console.log(times);

//3 Atividades diarias
var atividades = [ "Tomar café", "Tomar banho", "Academia", "Estudar", "Almocar", "ler", "Jantar"];
//a
console.log(atividades.reverse());
//b
var elemento3 = atividades[2];
var elemento6 = atividades[5];
console.log(elemento3);
console.log(elemento6);
//c
console.log(atividades.join());
console.log(atividades.join("-"));
//d
var melhoresAtividades = [" Ir a praia", "Ficar com a familia"];
var juntas = atividades.concat(melhoresAtividades);
console.log(juntas);

//4 Cidades
var cidades = ["Olinda", "Recife", "Porto de galinhas", "Barreiros", "Paulista"];
//a
cidades.sort();
console.log(cidades);
//b
cidades.shift(); 
console.log(cidades);
//c
cidades.pop();
console.log(cidades);















