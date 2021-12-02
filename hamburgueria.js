var itens = [];
document.querySelector("input[type=submit]").addEventListener("click", () => {
  var nomeProduto = document.querySelector("input[name=nome_produto]");
  var precoProduto = document.querySelector("input[name=price]");

  //CADASTRANDO NOVOS PRODUTOS NO ARRAY ITEMS

  itens.push({
    nome: nomeProduto.value,
    valor: precoProduto.value,
  });

  //CADASTRANDO DE FORMA DINÂMICA OS PRODUTOS

  let listaProdutos = document.querySelector(".lista-produtos");
  let soma = 0;
  listaProdutos.innerHTML = "";

  //MAP É COMO SE TIVESSE FAZENDO UM LOOP NO  ARRAY ITEM LA EM CIMA

  itens.map((val) => {
    soma += parseFloat(val.valor);
    listaProdutos.innerHTML +=

     //-- MACETE PARA SE BASEAR OQ FAZER NA HORA DE FAZER DINÂMICO

      `

    <div class="lista-produto-single">
      <h3>` +
      val.nome +
      `</h3>
      <h3 class="price-produto"><span>R$` +
      val.valor +
      `</span></h3>
    </div>
    
    `;

    soma.toFixed(2); // PARA LIMITAR A APENAS 2 CASAS DECIMAIS 0,00
    nomeProduto.value = "";
    precoProduto.value = "";

    //SOMA DOS PRODUTOS

    let somaProduto = document.querySelector(".soma-produto h1");
    somaProduto.innerHTML = "Soma dos itens R$" + soma;
  });
});

//LIMPANDO A SACOLA DO CARRINHO

document.querySelector("button[name=limpar]").addEventListener("click", () => {
  itens = [];
  document.querySelector(".lista-produtos").innerHTML = "";
  document.querySelector(".soma-produto h1").innerHTML = "R$ 0,00";
});
