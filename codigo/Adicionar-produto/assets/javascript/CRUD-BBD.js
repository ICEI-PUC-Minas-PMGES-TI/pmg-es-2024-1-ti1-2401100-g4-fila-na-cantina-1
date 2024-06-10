// CRUD-- create read update delete

const PRODUCT_LIST_LOCALSTORAGE_KEY_BEBIDAS = "db_Produto_bebidas";

const getLocalStorageBebidas = () =>
  JSON.parse(localStorage.getItem(PRODUCT_LIST_LOCALSTORAGE_KEY_BEBIDAS)) ?? [];
const setLocalStorageBebidas = (productList) => {
  localStorage.setItem(
    PRODUCT_LIST_LOCALSTORAGE_KEY_BEBIDAS,
    JSON.stringify(productList)
  );
};

// CRUD-- DELETE
const deleteProdutoBebidas = (index) => {
  const dbProdutos = getLocalStorageBebidas();
  dbProdutos.splice(index, 1);
  setLocalStorageBebidas(dbProdutos);
};

// CRUD-- UPDATE
const updateProdutoBebidas = (index, produto) => {
  const dbProdutos = getLocalStorageBebidas();
  dbProdutos[index] = produto;
  setLocalStorageBebidas(dbProdutos);
};

// CRUD-- READ
function readProdutoBebidas() {
  const listaDeProdutos = getLocalStorageBebidas();
  listaDeProdutos.forEach((produto) => {
    createCardBebidas(produto);
  });
}

// CRUD-- CREATE
const criarProdutoBebidas = async () => {
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
    appendAlertBebidas("Todos os campos são obrigatorios", "danger");
  }

  const submitObj = {
    eDestaque: inputEDestaqueValue,
    img: fileBase64Value,
    nome: inputNomeProdutoValue,
    preco: inputPrecoProdutoValue,
    qtd: inputQtdProdutoValue,
  };

  const productList = getLocalStorageBebidas();
  productList.push(submitObj);

  setLocalStorageBebidas(productList);
  window.location.href = "/codigo/Adicionar-produto/views/lista-produtos.html";
};

const alertPlaceholderBebidas = document.getElementById("liveAlertPlaceholder");
const appendAlertBebidas = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert" id="alert-${type}">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholderBebidas.append(wrapper);
};

const alertTriggerBebidas = document.getElementById("liveAlertBtn");
if (alertTriggerBebidas) {
  alertTriggerBebidas.addEventListener("click", () => {
    appendAlertBebidas("Nice, you triggered this alert message!", "success");
  });
}

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
  ?.addEventListener("click", criarProdutoBebidas);

const createCardBebidas = (produto) => {
  const cardComidas = document.getElementById("cards-comidas-bebidas");
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
              <button class="gerenciar-btn">Gerenciar Item</button>
              </div>
              
    `;
  cardComidas.appendChild(newCard);
};
