// //const a = 12
// //const b = 15

// //const soma = a + b 

// //function soma (a,b,c){

// //const resultado = a + b + c  // faz a soma

// //return console.log (resultado) // retorna para o user o resultado da soma


// //soma(123, 12314, 412)


// function media (n1,n2,n3) {

// const resultado = (n1 + n2 + n3) /3
// return console.log(resultado)

// }

// //media (8,6,10)

//  function horasParaMinutos(horas){

//     const horario = horas *60

//     return console.log(horario)
//  }


// // horasParaMinutos(50)


//  function minutosParasegundos(segundos){

//     const horario = segundos *60

//     return console.log(horario)
//  }

// // minutosParasegundos(30)


// function areaTriangulo(base,altura){

//     const area = (base*altura) /2

//     return console.log( area)

// }

// //areaTriangulo(25,89)

// function imc (peso, altura){

//     const massa = peso / (altura*altura)

//     return console.log(massa)

// }

// //imc(89,1.68)


// function precoComDesconto(preco,desconto){


//     const off = preco - (preco*desconto / 100)

//     return console.log(off)


// }

// //precoComDesconto(1000,10)



// function precoComAcrecimo(preco,acrecimo){


//     const addition = preco + (preco*acrecimo / 100)

//     return console.log(addition)


// }

// //precoComAcrecimo(1000,10)


// function restoDaDivisao(a,b){

//     const rest = a%b

//     return console.log(rest)


// }

// //restoDaDivisao(25,3)

// function troco(valorPago,valorCompra){


//     const change = valorPago - valorCompra

//     return console.log(change)

// }

// //troco(1000,56)





// //Exercício de 11/02/2026



// function somaMaiorQue( a,b,limite){

//     const soma = a+b
//     const resultado = soma > limite

//     return console.log(resultado)


// }

// //somaMaiorQue(25,35,100)

// function areaRetangulo(base,altura){


//      return base*altura}

    

//     function areaEhMultiplaDe (area,k){

//         return area%k==0


//     }

    
//    //console.log(areaEhMultiplaDe(areaRetangulo(65,20),4))

   

// function media3(a,b,c){

//     return (a+b+c) /3

    
// }

//     function mediaAtingiu(media,meta){

//         return media >= meta


//     }


//     //console.log(mediaAtingiu(media3(10,9,7),9))
    

// function precoComDesconto(preco,descontoPercent){

//     return preco - descontoPercent / 100}

//     function ficouAbaixode(valorFinal,teto){

//         return valorFinal%teto==0

//     }

//    // console.log(ficouAbaixode( precoComAcrecimo(850,25),450))

// function celciusParaFahrenheit(celcius){

//     return (celcius*9/5) + 32
// }

//     function estaAcimadeFervuraF(fahrenheit){

//         return fahrenheit >= 212

//     }     

//     //console.log(estaAcimadeFervuraF(celciusParaFahrenheit(39)))

//     function resto(a,b){

//         return a%b

//     }

//          function restoEhZero(resto){

//             return resto ==0

//          }

//          //console.log(restoEhZero(resto(20,2)))

//          function novoSalario (salario,aumentoPercent){

//             return salario + (salario + aumentoPercent / 100)
//          }

//              function ultrapassou(salarioNovo,limite){

//                 return salarioNovo > limite
//              }

//              //console.log(ultrapassou(novoSalario(1890,15),2100))


//              // Aula 23/02/2026

// // FUNÇÃO MÉDIA

//          function nota  (n1, n2) {
//             return (n1 + n2) /2;

//          }

          
//             let media1 = nota(10, 10)

//           if(media >= 5.5){
                
//                 //console.log("aprovado");

                
//             }

//           else{

//                     //console.log("reprovado");
//                 }

//                 // FUNÇÃO DE TROCO + VERIFICAÇÃO]

//                 function calcularTroco (pago, compra) {
                    
                    

//                     return pago - compra  }


//                     let resultado = calcularTroco(1000, 2000);

//                     if (resultado >= 0) {

//                         console.log ( "Compra OK");

//                     }

//                     else {

//                        // console.log("Falta", resultado);
//                     }


//                     // Função de desconto + condição


//                     function precoComDesconto (preco, perc) {

//                         return preco - (preco*perc / 100)
//                     }

//                     let precoNovo = precoComDesconto(2000, 25);

//                     if (precoNovo > 0){

//                         console.log("Seu preço novo", precoNovo);

//                     }

//                     else{

//                        // console.log("Seu preço inicial", preco);

//                     }


//                     //Conta com taxa de serviços + lógica

//                   function totalComTaxa(valor, taxa){

//                     return valor - (valor*taxa / 100)
//                   }


//                   function valorPorPessoa(total, pessoas){

//                   //   return total / pessoas



//                   }

//                   //const 

//                   function implica (p, q){

//                     return (!p) || q 

//                   }

//                   const p = true
//                   const q = false
                  

//                   if(implica(p, q)){

//                     console.log("tabela verdade")
//                   }

//                   else{

//                     console.log("tabela inverdade")
//                   }

  

//             function alunosAprovados(acertos, total){

//                 return (acertos / total) * 100

                
//             }

//             let acertos = 170
//             let total = 183
//             let porcentagem = alunosAprovados(acertos, total)

//             if (porcentagem >= 70){

//                 console.log(`${porcentagem.toFixed(2)} % total de alunos aprovados`)
//             }

//             else{

//                 //console.log(`${porcentagem.toFixed(2)} % total de alunos reprovados`)
//             }


// function precoComDescontoconto(preco, desconto){

// return preco -(preco*(desconto/100))


// }


// let precoNew = precoComAcrecimo(1000, 15)

// //let result = prercoNew

// //if(precoNew >= 0){

//     //console.log(`${precoNew.toFixed(2)} Seu preço com desconto´ )

// //}



//  function escolherLanche(opcao){
// console.log('opção 1 hamburger')
// console.log('opção 2 combo')
// console.log('opção 3 promoção')

//     switch(opcao){

//         case 1:
//             return  'Você escolheu um hamburger'
//         case 2: 
//              return 'você escolheu um combo'

//         case 3:
//              return 'você escolheu a nossa promoção do dia'     

//         default:
//             return 'Opção inválida'

    
//     }
//  }

//  console.log(escolherLanche( 5 ))




// // atividade 1 de switch/case ----- dia da semana

//   function nomeDoDia(numero){

//     switch(numero){

//         case 1:
//             return 'Domingo'

//         case 2:
//             return 'segunda feira'

//         case 3:
//             return 'terça feira'

//         case 4:
//             return 'quarta feira'
            
//         case 5:
//             return 'quinta feira'
            
//         case 6:
//             return 'sexta feira'
            
//         case 7:
//             return 'sábado'  
            
//         default :
        
//         return 'dia inválido'
        
//     }


//   }

//      console.log(nomeDoDia(8))                

                

                     
// // atividade 2 --- plano de assinatura


// function plano(tipo){

//     switch(tipo.toLowerCase()){

//         case 'básico' : 
//            return ' limitado'

//         case 'pro' : 
        
//            return ' acesso completo'

//         case 'premium' :
//             return ' acesso completo mais suporte'
            
//         default :
        
//         return 'plano inexistente'


//     }
// }

//        console.log(plano('pro'))    
       
       
//        // atividade 3 ---- calculadora (operador)

//        function  calcular(a, b, operacao){

//         switch(a, b, operacao){

//             case '+' :
//                 return a + b

//             case '-' :
//                 return a - b

//             case '*' :
//                 return a * b

//             case ' / ' :
                

//                 if (b > 0){

//                     return a / b
//                 }

//                 else{

//                     return 'divisão inválida'
//                 }

//             default :
            
//             return 'insira um operador válido'




                
        
//         }
//        }


//        console.log(calcular(8, 2, '/'))



//        //  atividade 4 ------ semaforo


//        function acaoSemaforo(cor){

//          switch (cor.toLowerCase()){

//               case 'vermelho' :
                
//                  return 'pare'

//               case 'amarelo'
              
             //    return 'atenção'

                 

         // aula de correção das atividades

         // atividade 1
         
         let carrinho = ['arroz', 'feijao', 'carne'];

         carrinho.push('suco')//add por ultimo
         carrinho.pop()// remove o ultimo
         carrinho.push('macarrao')

         console.log(carrinho.length) // mostra o tamanho do array (quantidade de itens dentro)



//atividade 2

let fila = ['joao', 'maria', 'ana', 'pedro'];

fila.push('lucas') // adiciona como último
fila.shift() // remove o primeiro

console.log(fila) // mostra no cmd


//atividade 3

let atendimento = ['cliente1', 'cliente2', 'cliente3'];

atendimento.unshift('idoso') // add como index 0
atendimento.shift() // remove o primeiro

console.log(atendimento) // retorna no cmd

// atividade 4 

let nomes = ['ana', 'bruno', 'carla', 'daniel', 'elisa'];

nomes.splice(1,2) // removeu a partir do indicce 1 e removeu 2 a seguir

console.log(nomes)

//atividade 5

let frutas = ['maca', 'banana', 'uva', 'morango'];

frutas.splice(2,1, 'melancia') //remove a uva 


// atividade 6

let lista = ['mouse ', 'teclado', 'monitor'];

const temMonitor = lista.includes('monitor') // verifica se é true ou false e colocar na variável

console.log(temMonitor) // retorna o valor true || false


// atividade 7

let cores = ['azul', 'vermelho', 'verde', 'amarelo'];

console.log(cores.indexOf('verde')) // verifica a posição do elemento (index)
console.log(cores.indexOf('rosa')) // não existe no array, então retorna -1


// atividade 8

let alunos = ['carlos', 'ana', 'bruno', 'daniel'];

console,log(alunos.sort()) // coloca o array em ordem alfabética


//atividade 9

let tarefas = ['estudar', 'treinar', 'dormir' ];

tarefas.push('comer')
tarefas.unshioft('trabalhar')
tarefas.pop()
tarefas.includes('estudar')
tarefas.indexOf('dormir')
tarefas.sort()
console.log(tarefas)

//atividade 10


let estoque = ['pao', 'leite', 'cafe', 'acucar'];

if(estoque.includes('cafe')){

    const i = eastoque.indexOfg('cafe')
    estoque.splice(i, i)
}
// verifica se tem manteiga
if (!estoque.includes('manteiga')){ //se não tiver

    estoque.push('tega') // adiciona a tega
}

estoque.sort() // coloca em ordem alfabética

console.log(estoque)









         



       
             
            