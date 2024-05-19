
    function leDados () {
        let strDados = localStorage.getItem('db'); //Pega a string do localStorage
        let objDados = {}; 
    
        if (strDados !== "undefined" && strDados !== null) { //Se houver uma string guardado.
            objDados = JSON.parse (strDados); //Transforme-a em objeto. 
        }
        else { //Se não tiver, deixa vazio: 
            objDados = { contatos: [] };
        }

        console.log(objDados); //Imprime no console,log o objeto.
    
        return objDados;
    }
    
    // Função que salva os dados no local Storage em forma de string. 
    function salvaDados (dados) {
        localStorage.setItem ('db', JSON.stringify(dados));
    }
    
    //Adiciona objeto e salva. 
    function incluirContato (){
        // Ler os dados do localStorage
        let objDados = leDados();
        
        // Incluir um novo contato
        let strNome = document.getElementById ('campoNome').value;
        let strEmail = document.getElementById ('campoEmail').value;
        let strMensagem = document.getElementById('campoMensagem').value
        let novoContato = {
            nome: strNome,
            email: strEmail,
            mensagem: strMensagem
        };
        objDados.contatos.push(novoContato);

        // Salvar os dados no localStorage novamente
        salvaDados (objDados);
        limpaCampos(); 
    }

    //Função de excluir dados somente quando o botão 'Apagar Dados' for pressionado.
    function apagarDados() {
        limpaCampos();
        localStorage.removeItem('db');
        document.getElementById('tela').innerHTML = ''; 
    }
    
    //Função imprimir somente quando o botão 'Carregar Dados' for pressionado. 
    function imprimeDados () {
        limpaCampos(); 
        let tela = document.getElementById('tela'); //Guarda na div tela.
        let strHtml = '';
        let objDados = leDados ();
    
        for (i=0; i< objDados.contatos.length; i++) {
            strHtml += `<span>Nome: ${objDados.contatos[i].nome}</span><br>`
            strHtml += `<span>Email: ${objDados.contatos[i].email}</span><br>`
            strHtml += `<span>Mensagem: ${objDados.contatos[i].mensagem}</span><br><br>`
        }
      
        tela.innerHTML = strHtml;
    }

    function limpaCampos() {
        $('#campoNome').val('');  
        $('#campoEmail').val('');
        $('#campoMensagem').val('');
    }

    // Configura os botões
    $('#btnCarregaDados').click(imprimeDados); //Carrega os dados
    $('#btnSalvaDados').click(incluirContato); //Salva os dados
    $('#btnApagarDados').click(apagarDados); //Salva os dados('click', apagarDados); //Apaga os dados do DB.
    
    