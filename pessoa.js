class Pessoa{
    nome
    idade;
    profissao;

    constructor(nome,idade,profissao){
        this.nome= nome;
        this.idade = idade;
        this.profissao = profissao;
    }
}


class Funcionario extends Pessoa{
    cargaHoraria;

    constructor(nome,idade, profissao,cargaHoraria){
        super(nome,idade,profissao);
        this.cargaHoraria = cargaHoraria;
}

}

class Cliente extends Pessoa{
    telefone;
    email;
    clienteDesde;
    constructor(nome,idade, profissao,telefone, email, clienteDesde){
        super(nome,idade, profissao);
        this.telefone = telefone;
        this.email =email;
        this.clienteDesde = clienteDesde;
}

}

let funcFer = new Funcionario("Fernanda",43, "FullStack", "48999998888", "fer@email.com", 80);
console.log(funcFer)

let cliente1 = new Cliente("Joaca", 8, "comedora de racao" ,"96721965", "email@email.com", "2015");
console.log(cliente1)