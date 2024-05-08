import { database, ref, set } from "../script.js";

document.querySelector(".card-number-input").oninput = () => {
  document.querySelector(".card-number-box").innerText =
    document.querySelector(".card-number-input").value;
  let cardNumberValue = document.querySelector(".card-number-input").value;
  cardNumberValue = cardNumberValue.replace(/\D/g, "");
  cardNumberValue = cardNumberValue.replace(/\D/g, "");
  cardNumberValue = cardNumberValue.replace(/(\d{4})(?=\d)/g, "$1 ");
  document.querySelector(".card-number-input").value = cardNumberValue;
  document.querySelector(".card-number-box").innerText = cardNumberValue;
};

document.querySelector(".card-holder-input").oninput = () => {
  let cardHolderValue = document.querySelector(".card-holder-input").value;
  cardHolderValue = cardHolderValue.replace(/\d/g, "");
  cardHolderValue = cardHolderValue.replace(/\b\w/g, (char) =>
    char.toUpperCase()
  );
  cardHolderValue = cardHolderValue.replace(/\B[A-Z]/g, (char) =>
    char.toLowerCase()
  );
  document.querySelector(".card-holder-input").value = cardHolderValue;
  document.querySelector(".card-holder-name").innerText = cardHolderValue;
};

document.querySelector(".month-input").oninput = () => {
  document.querySelector(".exp-month").innerText =
    document.querySelector(".month-input").value;
};

document.querySelector(".year-input").oninput = () => {
  document.querySelector(".exp-year").innerText =
    document.querySelector(".year-input").value;
};

const flipCard = () => {
  document.querySelector(".front").style.transform =
    "perspective(1000px) rotateY(-180deg)";
  document.querySelector(".back").style.transform =
    "perspective(1000px) rotateY(0deg)";
};

const unflipCard = () => {
  document.querySelector(".front").style.transform =
    "perspective(1000px) rotateY(0deg)";
  document.querySelector(".back").style.transform =
    "perspective(1000px) rotateY(180deg)";
};

document.querySelector(".cvv-input").onmouseenter = flipCard;

document.querySelector(".cvv-input").onmouseleave = unflipCard;

document.querySelector(".cvv-input").onfocus = flipCard;

document.querySelector(".cvv-input").onblur = unflipCard;

document.querySelector(".cvv-input").oninput = () => {
  document.querySelector(".cvv-box").innerText =
    document.querySelector(".cvv-input").value;

  let cvvValue = document.querySelector(".cvv-input").value;
  cvvValue = cvvValue.replace(/\D/g, "");
  document.querySelector(".cvv-input").value = cvvValue;
  document.querySelector(".cvv-box").innerText = cvvValue;
};

const form = document.querySelector("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const cardNumberInput = document.querySelector(".card-number-input").value;
  const cardHolderInput = document.querySelector(".card-holder-input").value;
  const monthInput = document.querySelector(".month-input").value;
  const yearInput = document.querySelector(".year-input").value;
  const cvvInput = document.querySelector(".cvv-input").value;

  if (cardNumberInput.replace(/\D/g, "").length !== 16) {
    alert("Por favor, insira um número de cartão válido com 16 dígitos.");
    return;
  }

  if (cardHolderInput.trim() === "") {
    alert("Por favor, insira o nome do titular do cartão.");
    return;
  }

  if (monthInput === "mes") {
    alert("Por favor, selecione o mês de validade do cartão.");
    return;
  }

  if (yearInput === "ano") {
    alert("Por favor, selecione o ano de validade do cartão.");
    return;
  }

  if (cvvInput.length < 3) {
    alert("Por favor, insira um CVV válido com 3 dígitos.");
    return;
  }

  try {
    set(ref(database, "Cliente/cartoes" + new Date().getTime()), {
      nomeTitular: cardHolderInput,
      numeroCartao: cardNumberInput,
      dataDeExpiracao: `${monthInput}/${yearInput}`,
      cvv: cvvInput,
    });
    alert("Cadastro do cartão feito com sucesso!");
    form.reset();
  } catch (error) {
    console.error("Erro ao enviar dados para o DB:", error);
    alert("Falha ao enviar dados.");
  }
});
