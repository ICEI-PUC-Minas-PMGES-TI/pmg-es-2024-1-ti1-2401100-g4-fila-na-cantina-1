document.addEventListener('DOMContentLoaded', function() {
    const btnRemove = document.getElementsByClassName('removeItem'); //Variável para o botão de remoção.
    const caixas = document.getElementsByClassName('caixa'); //Pega as caixinhas indivuais. 
    const alert = document.getElementById('alert'); 
    const closeBtn = document.getElementById('close-btn');
    const btnFocus = document.getElementById('btnFocus');

    //Remove os itens ao clicar no botão de remoção: 
    for (let i = 0; i < btnRemove.length; i++) {
        btnRemove[i].addEventListener('click', function() {
            caixas[i].remove();
            alert.classList.remove('hidden');
            btnFocus.focus(); 
            setTimeout(function() {
                alert.classList.add('hidden');
            }, 3000);
        });
    }

    closeBtn.addEventListener('click', function(){
        alert.classList.add('hidden');
    });


    //Ao adicionar um item, salvá-lo no localStorage.
    //Criar um objeto, contendo o nome, quantidade e preço.
    //Ao remover o item, removê-lo do localStorage.


});