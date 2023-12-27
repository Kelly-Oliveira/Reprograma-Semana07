let produtos = [
  {
    nome: "TV 20 polegadas",
    categoria: "áudio e vídeo",
    preco: 1500
  },
  {
    nome: "Mouse",
    categoria: "informática",
    preco: 70
  },
  {
    nome: "Teclado",
    categoria: "informática",
    preco: 350
  },
  {
    nome: "Aparelho de som",
    categoria: "áudio e vídeo",
    preco: 600
  },
  {
    nome: "Sanduicheira",
    categoria: "eletrodomésticos",
    preco: 130
  },
  {
    nome: "Microondas 20L",
    categoria: "eletrodomésticos",
    preco: 800
  },
  {
    nome: "Geladeira frost free",
    categoria: "eletrodomésticos",
    preco: 2100
  },
  {
    nome: "Carregador de notebook Dell",
    categoria: "informática",
    preco: 140
  },
  {
    nome: "Caixa de som JBL",
    categoria: "áudio e vídeo",
    preco: 230
  },
  {
    nome: "Webcam",
    categoria: "informática",
    preco: 330
  },
  {
    nome: "Fogão 4 bocas",
    categoria: "eletrodomésticos",
    preco: 680
  },
  {
    nome: "Monitor 24 polegadas",
    categoria: "informática",
    preco: 900
  },
  {
    nome: "Air fryer",
    categoria: "eletrodomésticos",
    preco: 450
  }
]

/* PASSO A PASSO
  - Perguntar qual é o item que o usuário quer pesquisar
  - Percorrer a lista verificando se o nome de algum produto é igual a pesquisa do usuário
  - Colocar na tela as informações do produto encontrado ou colocar que o produto não foi encontrado
*/

let pesquisa = prompt("Qual produto você deseja pesquisar?\n\nProdutos:"+
    "\n- TV 20 polegadas - Mouse - Teclado - Aparelho de som\n - Sanduicheira - Microondas 20L - Geladeira frost free\n- Carregador de notebook Dell"+
    "- Caixa de som JBL - Webcam \n- Fogão 4 bocas - Monitor 24 polegadas - Air fryer");



for (let produto of produtos) {
  if (produto.nome === pesquisa) {
    const nomeProduto = document.getElementById("nome-produto");
    let precoProduto = document.querySelector("#preco-produto");
    const categoriaProduto = document.getElementById("categoria-produto");
    nomeProduto.innerHTML = produto.nome;
    precoProduto.innerHTML = produto.preco;
    categoriaProduto.innerHTML = produto.categoria;
  }
}

/*

// FORMA 2
for (let i = 0; i < produtos.length; i++) {
  if (produtos[i].nome === pesquisa) {
    nomeProduto.innerHTML = produtos[i].nome;
    precoProduto.innerHTML = produtos[i].preco;
    categoriaProduto.innerHTML = produtos[i].categoria;
  }
}

// FORMA 3
function ehIgualAPesquisa(produto) {
  return produto.nome === pesquisa;
}

let produtoEncontrado = produtos.filter(ehIgualAPesquisa)
// filter devolve uma LISTA dos itens que passam no filtro
nomeProduto.innerHTML = produtoEncontrado[0].nome;
precoProduto.innerHTML = produtoEncontrado[0].preco;
categoriaProduto.innerHTML = produtoEncontrado[0].categoria;

// FORMA 4 
let produtoEncontrado2 = produtos.find(function (produtoParametro) {
  return produtoParametro.nome === pesquisa
})
// find devolve um único elemento que passa na verificação da callback, o primeiro se tiver mais que um

nomeProduto.innerHTML = produtoEncontrado2.nome;
precoProduto.innerHTML = produtoEncontrado2.preco;
categoriaProduto.innerHTML = produtoEncontrado2.categoria;

*/