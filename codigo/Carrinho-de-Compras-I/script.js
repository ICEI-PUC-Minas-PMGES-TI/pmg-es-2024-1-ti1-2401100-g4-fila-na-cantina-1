document.addEventListener('DOMContentLoaded', function() {
    
    const btnRemove = document.getElementsByClassName('removeItem'); //Variável para o botão de remoção.
    const caixas = document.getElementsByClassName('caixa'); //Pega as caixinhas indivuais. 
    const alert = document.getElementById('alert'); //Pega a caixinha de alerta.
    const closeBtn = document.getElementById('close-btn'); //Pega o botão de remoção.
    const btnFocus = document.getElementById('btnFocus'); 
    const txtAlert = document.getElementById('txtItem'); //Pega o texto do alerta.

    //Remove os itens ao clicar no botão de remoção: 
    for (let i = 0; i < btnRemove.length; i++) {

        btnRemove[i].addEventListener('click', function() {
            const index = Array.from(btnRemove).indexOf(this); 
            //Código acima adicionado via IA, pois ao remover uma caixinha, o loop for não está ciente que o índice
            //se altera também, colocando este trecho a remoção ocorre da maneira correta.
 
            caixas[index].remove();
            var carrinho = carregaLocalStorage(); //Retorna o vetor obj. de carrinho de itens:
            txtAlert.innerText = carrinho[index].nome + ' foi removido do carrinho';

            alert.classList.remove('hidden'); //O alerta aparece.
            btnFocus.focus(); //O foco é direcionado para a caixinha de alerta.
            setTimeout(function() { //A caixinha de alerta aparece por 3s. 
                alert.classList.add('hidden');
            }, 3000);

            salvaLocalStorage(); //Salva os dados após excluir a caixinha, isto é, atualiza o localStorage(); 
        });
    }
  
    closeBtn.addEventListener('click', function(){
        alert.classList.add('hidden');
    });

    function salvaLocalStorage() {
        var itens = []; //Cria um vetor de objetos vazio. 
        for (let i = 0; i < caixas.length; i++) {

            var nomeLanche = caixas[i].querySelector('.titulo-lanche')
            var qtdLanche = caixas[i].querySelector('.quantidade')
            var precoLanche = caixas[i].querySelector('.preco') 

            if (nomeLanche && qtdLanche && precoLanche) { //Verifica se existem: 
                novoItens = {
                    nome: nomeLanche.innerText,
                    quantidade: qtdLanche.innerText,
                    preco: precoLanche.innerText
                }
                itens.push(novoItens);
            }
        }
        localStorage.setItem('itensCarrinho', JSON.stringify(itens)); //Salva os itens do carrinho no localStorage.
        carregaLocalStorage(); 
    }

    function carregaLocalStorage() {
        var carrinho = JSON.parse(localStorage.getItem('itensCarrinho')); 
        console.log(carrinho);

        return carrinho; 
    }
   
    salvaLocalStorage(); //Função de salvar os itens no localStorage();

});