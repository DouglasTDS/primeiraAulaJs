//Entendendo Heranças de uma classe

const prompt = require ('prompt-sync')()

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

        console.log(`${this.nome} está ensinando`)
    }
}

const profNome = prompt ('Digite o nome do professor: ')
const profIdade = prompt ('Digite a idade do professor: ')
const profDisciplina = prompt ('Digite a disciplina do professor: ')

const professor1 = new Professor(profNome, profIdade, profDisciplina)
console.log(professor1)


const alunoNome = prompt ('Digite o nome do aluno: ')
const alunoIdade = prompt ('Digite a idade do aluno: ')
const alunoCurso = prompt ('Digite o Curso do aluno: ')

const aluno1 = new Aluno(alunoNome, alunoIdade, alunoCurso)
console.log(aluno1)


// Atividas Classes em Javascript 18/03/2026

class Pessoa1 {


    constructor (nome, idade ){


        this.nome = nome
        this.idade = idade

    }

    clt() {

        console.log (`${this.nome} está trabalhando`)


    }
}

class Funcionario extends Pessoa1 {


    constructor (nome, idade, bonificacao) {


        super (nome, idade)

        this.bonificacao = bonificacao


    }

    produtividade () {

         console.log (`${this.nome} está produzindo`)
    }

  
}

const cltNome = prompt ('Digite o nome do funcionário: ')
const cltIdade = prompt ('Digite a idade do funcionário: ')
const cltBonificacao = prompt ('Digite a bonificaçáo do funcionário: ')

const funcionario1 = new Professor(cltNome, cltIdade, cltBonificacao)
console.log(funcionario1)


// Conta bancária


class Conta {

    constructor ( titular, saldo){

        this.titular = titular
        this.saldo = saldo

    }

    bank (){

        console.log (`${this.titular} está conectando no sistema`)
    }
}

class Usuario extends Conta {

     constructor ( titular, saldo, investimento) {

        super (titular, saldo)

        this.investimento = investimento


     }

     depositar ( valor) {

this.saldo += valor
        console.log (`${this.titular} está inserindo um depósito `)


     }

     sacar ( valor) {

         if (valor > this.saldo){

           console.log ( 'saldo insuficiente')
         }

         else {

            this.saldo -= valor
            console.log ( 'seu saldo agora é ', this.saldo)
         }





     }

     


}

const nomeTitular = prompt ('Digite o nome do Titular da connta')
const usuario1 = new Usuario (nomeTitular, 3000)

const valorDeposito = Number (prompt ('digite o valor a ser depositado'))
usuario1.depositar(valorDeposito)

const valorSacar = Number (prompt ('digite o valor a ser sacado'))
usuario1.sacar(valorSacar)




