document.addEventListener('DOMContentLoaded', () => {
    const catalogoComida = document.getElementById('catalogocomida');
    const catalogoBebida = document.getElementById('catalogobebida');
    const carrinhoLista = document.getElementById('carrinho-lista');
    const carrinhoTotal = document.getElementById('carrinho-total');
    const carrinhoContainer = document.querySelector('.carrinho-container');

    let carrinho = [];

    const adicionarcarrinho = (event) => {
        const target = event.target;
        if (target.classList.contains('botaocarrinho')) {
            const card = target.closest('.card');
            if (card) {
                const nome = card.querySelector('.card-title').textContent;
                const preco = parseFloat(card.querySelector('.card-preco').textContent.replace('$', ''));
                const quantidadeDisponivel = parseInt(card.querySelector('.card-quantidade').textContent.replace('quantidade:', ''));

                const itemexistente = carrinho.find(item => item.nome === nome);

                if (itemexistente) {
                    if (itemexistente.quantidade < quantidadeDisponivel) {
                        itemexistente.quantidade += 1;
                        itemexistente.precoTotal = itemexistente.quantidade * preco;
                    } else {
                        alert('Quantidade indisponível no estoque.');
                    }
                } else {
                    carrinho.push({
                        nome,
                        quantidade: 1,
                        precoUnitario: preco,
                        precoTotal: preco
                    });
                }

                renderCarrinho();
                carrinhoContainer.style.display = 'block';
                console.log('Item adicionado ao carrinho:', nome);
            } else {
                console.error('elemento não achado');
            }
        }
    };

    const renderCarrinho = () => {
        carrinhoLista.innerHTML = '';
        let total = 0;
        carrinho.forEach(item => {
            const carrinhoItem = document.createElement('li');
            carrinhoItem.innerHTML = `
                <strong>${item.nome}</strong> - Quantidade: ${item.quantidade} - Preço: $${item.precoTotal.toFixed(2)}
            `;
            carrinhoLista.appendChild(carrinhoItem);
            total += item.precoTotal;
        });
        carrinhoTotal.textContent = `Total: $${total.toFixed(2)}`;
    };

    catalogoComida.addEventListener('click', adicionarcarrinho);
    catalogoBebida.addEventListener('click', adicionarcarrinho);
});