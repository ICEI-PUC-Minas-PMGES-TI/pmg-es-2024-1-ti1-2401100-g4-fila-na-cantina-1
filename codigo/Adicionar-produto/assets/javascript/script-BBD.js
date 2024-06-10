const dropAreaBBD = document.getElementById("drop-area-BBD");
const inputFileBBD = document.getElementById("input-file-BBD");
const imageViewBBD = document.getElementById("img-view-BBD");
const previewImgBBD = document.querySelector(".preview-img-BBD");


inputFileBBD?.addEventListener("change", uploadImageBBD);

function uploadImageBBD() {
  let imgLinkBBD = URL.createObjectURL(inputFileBBD.files[0]);
  imageViewBBD.style.backgroundImage = `url(${imgLinkBBD})`;
  imageViewBBD.textContent = "";
  imageViewBBD.style.border = 0;

  if (inputFileBBD.files && inputFileBBD.files[0]) {
    const readerBBD = new FileReader();
    readerBBD.onload = function (e) {
      previewImgBBD.src = e.target.result;
    };
    readerBBD.readAsDataURL(inputFileBBD.files[0]);
  }
}

dropAreaBBD?.addEventListener("dragover", function (e) {
  e.preventDefault();
});
dropAreaBBD?.addEventListener("drop", function (e) {
  e.preventDefault();
  inputFileBBD.files = e.dataTransfer.files;
  uploadImageBBD();
});

const previewNomeBBD = document.querySelector(".preview-nome-BBD");
const nomeBBD = document.getElementById("nome-BBD");
const previewPrecoBBD = document.querySelector(".preview-preco-BBD");
const precoBBD = document.getElementById("preco-BBD");
const previewQtdBBD = document.querySelector(".preview-qtd-BBD");
const qtdBBD = document.getElementById("qtd-BBD");

if (nomeBBD) {
  nomeBBD.oninput = () => {
    previewNomeBBD.textContent = nomeBBD.value;
  };
}
if (precoBBD) {
  precoBBD.oninput = () => {
    previewPrecoBBD.textContent = precoBBD.value;
  };
}
if (qtdBBD) {
  qtdBBD.oninput = () => {
    previewQtdBBD.textContent = qtdBBD.value;
  };
}
