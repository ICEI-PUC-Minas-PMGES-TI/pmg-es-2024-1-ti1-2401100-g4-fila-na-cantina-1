document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/bebidas')
        .then(response => {
            if (!response.ok) {
                throw new Error('Não esta funcionando');
            }
            return response.json();
        })
        .then(data => {
            if (!data || !Array.isArray(data)) {
                throw new Error('Erro');
            }

            const catalogo = document.getElementById('catalogobebida');
            data.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');
                productDiv.innerHTML = `
                <div class="card" style="width: 18rem;">
                <img src="${product.image_url}" class="card-img-top" alt="${product.nome}">
                <div class="card-body">
                  <h5 class="card-title">${product.nome}</h5>
                  <p class="card-quantidade">quantidade:${product.quantidade}</p>
                  <p class="card-preco">$${product.preco}</p>
                  <label class="botaocarrinho">Adicionar ao Carrinho</label>
                </div>
                `;
                catalogo.appendChild(productDiv);
            });
        })
        .catch(error => console.error('Erro pegando os produtos:', error));
});