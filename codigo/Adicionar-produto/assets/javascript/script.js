const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");
const previewImg = document.querySelector(".preview-img");

inputFile.addEventListener("change", uploadImage);

function uploadImage() {
  let imgLink = URL.createObjectURL(inputFile.files[0]);
  imageView.style.backgroundImage = `url(${imgLink})`;
  imageView.textContent = "";
  imageView.style.border = 0;

  if (inputFile.files && inputFile.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      previewImg.src = e.target.result;
    }
    reader.readAsDataURL(inputFile.files[0]);
  }
}

dropArea.addEventListener("dragover", function (e) {
  e.preventDefault();
});
dropArea.addEventListener("drop", function (e) {
  e.preventDefault();
  inputFile.files = e.dataTransfer.files;
  uploadImage();
});

const previewNome = document.querySelector(".preview-nome");
const nome = document.getElementById("nome");
const previewPreco = document.querySelector(".preview-preco");
const preco = document.getElementById("preco");
const previewQtd = document.querySelector(".preview-qtd");
const qtd = document.getElementById("qtd");

nome.oninput = () => {
  previewNome.textContent = nome.value;
};

preco.oninput = () => {
  previewPreco.textContent = preco.value;
};
qtd.oninput = () => {
  previewQtd.textContent = qtd.value;
};

