//Exercicio 1
class Produto{
    nome;
    preco;
    quantidade;

    //Exercicio 2

     constructor(nome,preco,quantidade){
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
    }

     //Exercicio 3

 vender(quantidadeVendida){ 
    if(quantidadeVendida <= this.quantidade){
        this.quantidade -= quantidadeVendida;
        console.log(`Venda realizada com sucesso. ${quantidadeVendida} unidades de ${this.nome} vendidas.`);
    } else {
        console.log("Estoque insuficiente.")
    }

    }

//     //Exercicio 4
 repor(quantidadeReposta) {
        this.quantidade += quantidadeReposta;
        console.log(`Foram repostas ${quantidadeReposta} unidades do produto ${this.nome}.`);
    }

// // //Exercicio 5


 mostrarEstoque() {
    console.log(`O produto ${this.nome.toUpperCase()} possui ${this.quantidade} unidades disponíveis.`);
    }

// // //Exercico 6

atualizarPreco(novoPreco){
    this.preco = novoPreco
    console.log(`O preço do produto ${this.nome.toUpperCase()} foi atualizado para R$ ${this.preco.toFixed(2)}.`);
}


}


let produto = new Produto("camisa", 40, 20);
produto.vender(15);
produto.mostrarEstoque();
produto.repor(30);
produto.mostrarEstoque();
produto.atualizarPreco(50);







 






 
 