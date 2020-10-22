// 5.1 Rest
// A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe a primeira
// posição do vetor e outra variável y que recebe todo restante dos dados.
const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;
console.log(x);
console.log(y);

// Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:
const soma = (...param) =>
	param.reduce((acc, next) => {
		return acc + next;
	}, 0);

console.log(soma(2, 6, 7, 6, 5));

// 5.2 Spread
// A partir do objeto e utilizando o operador spread:
const usuario = {
	nome: 'Diego',
	idade: 23,
	endereco: {
		cidade: 'Rio do Sul',
		uf: 'SC',
		pais: 'Brasil'
	}
};
// Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.
const usuario2 = {
	...usuario,
	nome: 'Gabriel'
};
console.log(usuario2);
// Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.
const usuario3 = {
	...usuario,
	endereco: {
		...usuario.endereco,
		cidade: 'lontras'
	}
};
console.log(usuario3);
