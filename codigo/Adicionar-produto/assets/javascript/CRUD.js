// CRUD-- create read update delete

const PRODUCT_LIST_LOCALSTORAGE_KEY = "db_Produto";

const getLocalStorage = () =>
  JSON.parse(localStorage.getItem(PRODUCT_LIST_LOCALSTORAGE_KEY)) ?? [];
const setLocalStorage = (productList) => {
  localStorage.setItem(
    PRODUCT_LIST_LOCALSTORAGE_KEY,
    JSON.stringify(productList)
  );
};

// CRUD-- DELETE
const deleteProduto = (index) => {
  const dbProdutos = getLocalStorage();
  dbProdutos.splice(index, 1);
  setLocalStorage(dbProdutos);
};

// CRUD-- UPDATE
const updateProduto = (index, produto) => {
  const dbProdutos = getLocalStorage();
  dbProdutos[index] = produto;
  setLocalStorage(dbProdutos);
};

// CRUD-- READ
function readProduto() {
  const listaDeProdutos = getLocalStorage();
  listaDeProdutos.forEach((produto, index) => {
    createCard(produto, index);
  });
}

// CRUD-- CREATE
const criarProduto = async () => {
  const inputFile = document.getElementById("input-file");
  const inputEDestaque = document.getElementById("flexCheckDefault");
  const inputNomeProduto = document.getElementById("nome");
  const inputPrecoProduto = document.getElementById("preco");
  const inputQtdProduto = document.getElementById("qtd");
  const fileBase64Value =
    inputFile.files.length > 0 && (await getBase64(inputFile.files[0]));
  const inputEDestaqueValue = inputEDestaque.checked;
  const inputNomeProdutoValue = inputNomeProduto.value;
  const inputPrecoProdutoValue = inputPrecoProduto.value;
  const inputQtdProdutoValue = inputQtdProduto.value;

  if (
    !fileBase64Value ||
    !inputNomeProdutoValue ||
    !inputPrecoProdutoValue ||
    !inputQtdProdutoValue
  ) {
    appendAlert("Todos os campos são obrigatorios", "danger");
  }

  const submitObj = {
    eDestaque: inputEDestaqueValue,
    img: fileBase64Value,
    nome: inputNomeProdutoValue,
    preco: inputPrecoProdutoValue,
    qtd: inputQtdProdutoValue,
  };

  const productList = getLocalStorage();
  productList.push(submitObj);

  setLocalStorage(productList);
  window.location.href =
    "/pmg-es-2024-1-ti1-2401100-g4-fila-na-cantina-1/codigo/Adicionar-produto/views/lista-produtos.html";
};

const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert" id="alert-${type}">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById("liveAlertBtn");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    appendAlert("Nice, you triggered this alert message!", "success");
  });
}

//Interação com o layout

async function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      resolve(reader.result);
    };

    reader.onerror = reject;

    reader.readAsDataURL(file);
  });
}

document
  .getElementById("btn-adicionar")
  ?.addEventListener("click", criarProduto);

const createCard = (produto, index) => {
  const cardComidas = document.getElementById("cards-comidas");
  if (!cardComidas) {
    return;
  }
  const newCard = document.createElement("div");
  newCard.className = "card-layout";
  newCard.innerHTML = `
            <div class="cards-produtos">
              <img
                src="${produto.img}"
                width="130"
                height="130"
                class="preview-img"
              />
              <div class="div-text-preview">
                <div class="div-preco-preview">
                  <h6 class="preview-nome">${produto.nome}</h6>
                </div>
                <div class="div-preco-preview">
                  <h6>R$:</h6>
                  <h6 class="preview-preco">${produto.preco}</h6>
                </div>
                <div class="div-preco-preview">
                  <h6>Quantidade:</h6>
                  <h6 class="preview-qtd">${produto.qtd}</h6>
                </div>
              </div>
              <a href="/pmg-es-2024-1-ti1-2401100-g4-fila-na-cantina-1/codigo/Adicionar-produto/views/gerenciar-produto.html?id=${index}" class="gerenciar-btn">Gerenciar Item</a>
              </div>
              
    `;
  cardComidas.appendChild(newCard);
};

function getProduto() {
  const params = new URLSearchParams(window.location.search);

  const id = params.get("id");

  const listaDeProdutos = getLocalStorage();

  const produto = listaDeProdutos[id];

  console.log("produto", produto);

  const imgAtual = document.getElementById("img-atual-gerenciar");

  imgAtual.src = produto.img;

  const nomeAtual = document.getElementById("nome-atual-gerenciar");

  nomeAtual.innerText = `Nome atual: ${produto.nome}`;

  const qtdAtual = document.getElementById("qtd-atual-gerenciar");

  qtdAtual.innerText = `Quantidade: ${produto.qtd}`;

  const precoAtual = document.getElementById("preco-atual-gerenciar");

  precoAtual.innerText = `R$: ${produto.preco}`;
}

document.getElementById("btn-voltar")?.addEventListener("click", () => {
  window.location.href =
    "/pmg-es-2024-1-ti1-2401100-g4-fila-na-cantina-1/codigo/Adicionar-produto/views/lista-produtos.html";
});

document.getElementById("btn-deletar")?.addEventListener("click", () => {
  const params = new URLSearchParams(window.location.search);

  const id = params.get("id");

  const listaDeProdutos = getLocalStorage();

  const produto = listaDeProdutos[id];
  deleteProduto(id);
  window.location.href =
    "/pmg-es-2024-1-ti1-2401100-g4-fila-na-cantina-1/codigo/Adicionar-produto/views/lista-produtos.html";
});
getBase64(inputFileGerenciar.files[0]);

async function updateProd() {
  const params = new URLSearchParams(window.location.search);

  const id = params.get("id");

  const inputFileGerenciar = document.getElementById("input-file");

  console.log(document.getElementById("nome-gerenciar").value);
  const inputNomeProdutoGerenciar =
    document.getElementById("nome-gerenciar").value;
  const inputPrecoProdutoGerenciar =
    document.getElementById("preco-gerenciar").value;
  const inputQtdProdutoGerenciar =
    document.getElementById("qtd-gerenciar").value;
  const fileBase64ValueGerenciar =
    inputFileGerenciar.files.length > 0 &&
    (await getBase64(inputFileGerenciar.files[0]));

  if (
    !inputNomeProdutoGerenciar ||
    !inputPrecoProdutoGerenciar ||
    !inputQtdProdutoGerenciar
  ) {
    appendAlert("Todos os campos são obrigatorios", "danger");
  }

  const submitObjGerenciar = {
    img: fileBase64ValueGerenciar,
    nome: inputNomeProdutoGerenciar,
    preco: inputPrecoProdutoGerenciar,
    qtd: inputQtdProdutoGerenciar,
  };

  // const productList = getLocalStorage();
  // productList.push(submitObj);

  //setLocalStorage(productList);

  updateProduto(id, submitObjGerenciar);
  window.location.href =
    "/pmg-es-2024-1-ti1-2401100-g4-fila-na-cantina-1/codigo/Adicionar-produto/views/lista-produtos.html";
}
