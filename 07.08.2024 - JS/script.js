// let carros = ['Fusca', 'Gol', 'Palio', 'Celta']

// // Adicionando um item no Array

// carros.splice(2,0,'Civic', 'Fiesta')

// // Alterando um item no Array

// carros.splice(1,1, 'Polo')

// // Apagar um item no Array


// let carrosRemovidos = carros.splice(2,2)

// console.log(carrosRemovidos)

// console.log(carros)


// const alunos = [
//     {nome: 'Luis', nota: 5},
//     {nome: 'Gustavo', nota: 7},
//     {nome: 'Erick', nota: 4},
//     {nome: 'Felipe', nota: 3},
//     {nome: 'Giovanna', nota: 6},
// ]

// let listaAlunos = alunos.map( aluno=> aluno.nome )

// console.log(listaAlunos)

// let aprovados = alunos.filter(aluno => aluno.nota >= 6).map(aluno => `O ${aluno.nome} foi aprovado com ${aluno.nota} de média`)
// console.log(aprovados)

// const vendedores = [
//     {nome: 'Janaina', idade: 24, vendas:5},
//     {nome: 'Vitoria', idade: 30, vendas:7},
//     {nome: 'Marcelo', idade: 35, vendas:3},
//     {nome: 'Henrique', idade: 40, vendas:9}
// ]

// const totalVendas = vendedores.reduce((valorTotal, valorAtual)=> valorTotal + valorAtual.vendas,0)

// const dadosVendas = vendedores.reduce(
//     (acc, item)=>{
//         const maisNovo = acc.maisNovo < item.idade ? acc.maisNovo : item.idade
//         const maisVelho = acc.maisVelho > item.idade ? acc.maisVelho : item.idade

//         return{totalVendas: acc.totalVendas + item.vendas, 
//                 maisNovo: maisNovo,
//                 maisVelho: maisVelho
//         }

//     },{totalVendas: 0, maisNovo: undefined, maisVelho: undefined}
// )

// console.log(dadosVendas);

// const filaBrinquedo = [
//     {nome: 'Sara', idade : 17, altura: 1.5},
//     {nome: 'Luciana', idade : 16, altura: 1.7},
//     {nome: 'Kleber', idade : 15, altura: 1.65},
//     {nome: 'Anderson', idade : 22, altura: 1.80}
// ]

// const todaFilaPode = filaBrinquedo.every(pessoas => pessoas.altura >= 1.60)

// console.log(todaFilaPode ? "Vamos Lá" : "Nem todos podem");

// const temResponsavel = filaBrinquedo.some(pessoa => pessoa.idade >= 18)
// console.log(temResponsavel ? 'Sim, vocês podem!' : 'Não, precisa de alguém maior')

// const responsavel = filaBrinquedo.find ( pessoa => pessoa.idade >= 18)
// console.log(`A pessoa responsável será ${responsavel.nome} pois ela tem ${responsavel.idade}`)

// const convidados = ['Prof Luis', 'Gustavo', 'Anne', 'Prof Rafael Ronqui', 'Carolina']

// const profConvidados = convidados.filter(conv => conv.includes('Prof'))

// console.log(profConvidados);

// const frutas = ['maça', 'banana', 'uva']
// const verduras = ['couve', 'alface', 'agrião']

// const feira = [...frutas, ...verduras, 'batata']



// console.log(feira);

let pessoa = {
    nome: 'João',
    idade: 18,
    altura: 1.70
}

pessoa = {... pessoa, rg: 23.13782381}

console.log(pessoa);

function somarTodos(...args){
    return args.reduce((acc, atual)=> acc += atual)
}

// Rest Parameter 

console.log(somarTodos(4,5,6,9,10));
