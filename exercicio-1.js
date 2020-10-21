// 1º exercício
// Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve
// extender uma segunda classe chamada "Usuario".
// A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los
// em propriedades da classe. A classe "Admin" por sua vez não recebe parâmetros mas deve
// repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" como
// true na classe.
// Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin que
// retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não.

class usuario {
	constructor(email, senha) {
		this.email = email;
		this.senha = senha;
	}
	isAdmin() {
		return this.admin === true;
	}
}

class admin extends usuario {
	constructor() {
		super();
		this.admin = true;
	}
}
const user1 = new usuario('valuche02@gmail.com', '02122000');
const admin1 = new admin('alanaraujo@storm.com.br', '271281');

console.log(user1.isAdmin());
console.log(admin1.isAdmin());
