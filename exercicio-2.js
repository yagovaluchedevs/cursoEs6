// A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):

const usuarios = [
	{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
	{ nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
	{ nome: 'Lucas', idade: 30, empresa: 'Facebook' }
];

// Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]

const getIdade = usuarios.map(element => {
	return element.idade;
});
console.log(getIdade);

// Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
// anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

const usersFilter = usuarios.filter(element =>
	element.idade > 18 && element.empresa === 'Rocketseat' ? true : false
);
console.log(usersFilter);

// Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined

const nonExistent = usuarios.find(element =>
	element.empresa === 'Google' ? true : false
);
console.log(nonExistent);

// Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
// no máximo 50 anos:

const getElement = usuarios.map(element => {
	element.idade *= 2;
	return element;
});
console.log(getElement);

const newUsers = getElement.filter(users => (users.idade <= 50 ? true : false));
console.log(newUsers);
