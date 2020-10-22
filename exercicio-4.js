// 4.1 Desestruturação simples
// A partir do seguinte objeto:
// Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis,
const empresa = {
	nome2: 'Rocketseat',
	endereco: {
		cidade: 'Rio do Sul',
		estado: 'SC'
	}
};

const {
	nome2,
	endereco: { cidade, estado }
} = empresa;

console.log(nome2);
console.log(cidade);
console.log(estado);

// 4.2 Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário
// separadamente e a função poder retornar apenas:

const usuario = {
	nome: 'Yago',
	idade: 19
};

function mostraInfo({ nome, idade }) {
	return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo(usuario));
