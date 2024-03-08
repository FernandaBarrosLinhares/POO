class Pessoa{
    telefone;
    email;
    clienteDesde;

    constructor(telefone,email,clienteDesde){
        this.telefone = telefone;
        this.email = email;
        this.clienteDesde = clienteDesde;
    }
}


class Funcionario extends Pessoa{
    cargaHoraria;

    constructor(telefone, email, clienteDesde,cargaHoraria){
        super(telefone, email, clienteDesde);
        this.cargaHoraria = cargaHoraria;
}

}

class Cliente extends Pessoa{
    constructor(telefone, email, clienteDesde){
        super(telefone, email, clienteDesde);
        this.clienteDesde = clienteDesde;
}

}

let funcFer = new Funcionario("Fernanda","1980-05-31", "fer@email.com", 80);
console.log(funcFer)

let cliente1 = new Cliente("96721965", "email@email.com", "2015");
console.log(cliente1)