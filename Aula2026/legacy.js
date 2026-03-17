//Entendendo Heranças de uma classe

class Pessoa {

    constructor (nome, idade){

        this.nome =  nome
        this.idade =  idade

    }

    apresentar() {

        console.log(`meu  nome é ${nome}`)
    }
}


class Aluno extends Pessoa {

    constructor (nome, idade, curso) {

        super(nome, idade)

        this.curso = curso


    }

    estudar(){

        console.log(`${this.nome} está estudando`)
    }
}


class Professor extends Pessoa {

    constructor (nome, idade, disciplina){

        super(nome, idade)

        this.disciplina = disciplina
    }
    
    ensinado(){

        console.log(`${this.nome} es tá ensinando`)
    }
}


const professor1 = new Professor('Igor', 65,'T.I')
console.log(professor1)

const aluno1 = new Aluno('Fulano', 25,'T.I')
console.log(aluno1)