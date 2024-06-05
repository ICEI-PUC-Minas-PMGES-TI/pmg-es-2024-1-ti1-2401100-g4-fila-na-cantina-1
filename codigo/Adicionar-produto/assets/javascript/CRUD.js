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
  const dbProdutos = readProduto();
  dbProdutos.splice(index, 1);
  setLocalStorage(dbProdutos);
};

// CRUD-- UPDATE
const updateProduto = (index, produto) => {
  const dbProdutos = readProduto();
  dbProdutos[index] = produto;
  setLocalStorage(dbProdutos);
};

// CRUD-- READ
function readProduto() {
  const listaDeProdutos = getLocalStorage();
  listaDeProdutos.forEach((produto) => {
    createCard(produto);
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
    !inputEDestaqueValue ||
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
const isValidFields = () => {
  return document.getElementsByClassName("form")?.reportValidity();
};

const clearFields = () => {
  const fields = document.querySelectorAll(".inputJS");
  fields.forEach((field) => (field.value = ""));
};

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

const closeAdicionarProdutos = () => {
  clearFields();
};

// linkar nos inputs
document.getElementById("gerenciar-btn")?.addEventListener("click", () => {
  window.location.href = "./gerenciar-produto.html";
});


document
  .getElementById("btn-adicionar")
  ?.addEventListener("click", criarProduto);

//window_gerenciar.location.href = "./gerenciar-produto.html";
//document
 // .getElementById("gerenciar-btn")
 //?.addEventListener("click", window_gerenciar);

//
const createCard = (produto) => {
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
              </div>
              <button class="gerenciar-btn">Gerenciar Item</button>
              
    `;
  cardComidas.appendChild(newCard);
};
//document.querySelector('.gerenciar-btn').addEventListener('click', function() {
//  window.location.href = './gerenciar-produto.html';
//}); 