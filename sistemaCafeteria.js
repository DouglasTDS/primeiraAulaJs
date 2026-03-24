class produto {

    construtor (nome, preco, quantidade) {


    this.nome = nome
    this.preco = preco
    this.quantidade = quantidade
}

exibirProduto () {

    console.log ( `${this.nome} - R$ ${this.preco} | estoque ${this.quantidade}`)
}

vender () {


    if (this.quantidade > 0) {

        this.quantidade --
        mconsole.log (`unidade de ${this.nome} ,foi vendida`)
    }

    else {
        console.log ( `${this.nome} está sem estoque`)
    }
}

repor (qtdReposicao) {

    if (quantidade > 0) {

         this.quantidade += qtdReposicao
         
         console.log (`${this.quantidade} de ${this.nome} adicionadas ao estoque`)

    }

    else {

        console.log ('quantidade inválida')
    }
}

}


class bebida extends produto {

    contructor (nome, preco, quantidade, tamanho){

        super (nome, preco, quantidade)

        this.tamanho = tamanho


    }

    exibirTamanho () {


        console.log (`${this.nome} - R$ ${this.preco}   tamanho - ${this.tamanho} | Estoque ${this.quantidade}`)

      
    }
}



class comida extends produto {

    constructor (nome, preco, quantidade, tipo){


        super (nome, preco, quantidade)
        this.tipo = tipo
    }

    exibirProduto () {


        console.log (`${this.nome} - R$ ${this.preco}   tamanho - ${this.tipo} | Estoque ${this.quantidade}`)

      
}

}

class pedido {

    constructor (cliente) {

        this.cliente = cliente
         this.itens = []
    }


    adicionarItem (produto) {

        if (produto.quantidade > 0) {

            this.itens.push (produto)
        }

        else {

            console.log (`${this.nome} está sem estoque`)
        }

    }


    verPedidos () {

        console.log (`${this.itens}`)


        if (this.itens.legth === 0) {

            console.log ('pedido sem produto')
        }

        this.itens.foreach ((item, index)=>{console.log(`${index + 1}, ${item.nome}, R$ ${this.preco}`) })
    }
}
         

         


    



