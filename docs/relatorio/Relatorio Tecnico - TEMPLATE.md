# Informações do Projeto
`TÍTULO DO PROJETO`  

FoodFlow

`CURSO` 

Engenharia de Software

## Participantes

 Membros da equipe:
 - Arthur Henrique Teixeira e Silva Bacelete
 - Davi Benjamin Guimarães
 - Alexandre Augusto dos Reis Junior
 - André Nestor Celino
 - Felipe Araújo Monteiro
 - João Pedro Tavares e Amorim

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

## Problema

> Um dos problemas mais significativos a serem abordados é o tempo gasto
> em fila de estabelecimentos da PUC-Minas. Essa questão não apenas resulta
> em atrasos para as aulas, mas pode também desencadear uma série de outros
> incovenientes.

## Objetivos

 O objetivo principal do nosso projeto é integrar e aproximar a cantina dos 
 alunos de forma que a compra e retirada dos lanches aconteça de maneira hábil
 e suficiente para o seu consumo. Assim, nos comprometemos com uma gestão
 eficiente do tempo de consumo e de demanda das filas, tornando-as menos
 demoradas e cheias.

## Justificativa

 De acordo com entrevistas realizadas com alunos e por experiência dos
 integrantes do grupos, percebemos que demoramos muito tempo para realizar
 a compra de alimentos nos estabelecimentos da PUC-Minas, assim não restando
 tempo suficiente para que possamos comer devagar e saborear o alimento.
 Por isso decidimos criar um software para que as compras possam ser feitas
 antes mesmo de chegar ao campus e podendo pegar o alimento quando quisermos.

## Público-Alvo

 O projeto não possui um público específico, podendo variar entre alunos,
 funcionários e até mesmo visitantes da PUC-Minas.
 
# Especificações do Projeto

Para a elaboração do Projeto, contamos com a utilização de ferramentas como o Discord (para comunicação), o Miro (etapa de entendimento e exploração de Design Thinking), além do Figma (para a elaboração do protótipo) e do GitHub.

> Apresente uma visão geral do que será abordado nesta parte do
> documento, enumerando as técnicas e/ou ferramentas utilizadas para
> realizar a especificações do projeto

## Personas e Mapas de Empatia

As personas identificadas no nosso projeto conta com uma maioria de estudantes que buscam um atendimento agilizado e eficaz nos estabelecimentos da PUC. Aqui estão os exemplos de personas geradas:

- Pedro, 21 anos, treina bastante durante a semana e utiliza das cantinas um local para um consumo de calórias maior. Pedro precisa consumir uma quantidade de calorias maior em um pouco intervalo de tempo. O atendimento rápido é crucial para Pedro. 
- Gabriela, 20 anos, é uma estudante dedicada que sonha em ser uma juiz renomada. Devido a isso, Gabriela possui um dia a dia agitado com os estudos, serviço e outras atividades complementares. Gabriela precisa de um atendimento agilizado para lanchar e voltar ás aulas.
- Rayssa, 22 anos, sonha em ser engenheira e é uma estudante extrovertida. Rayssa deseja lanchar com calma enquanto conversa com seus amigos da faculdade;

> Relacione as personas identificadas no seu projeto e os respectivos mapas de empatia. Lembre-se que 
> você deve ser enumerar e descrever precisamente e de forma
> personalizada todos os principais envolvidos com a solução almeja. 
> 
> Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina
> e/ou nos seguintes links:
>
> **Links Úteis**:
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Como fazer um mapa de empatia - Vídeo](https://www.youtube.com/watch?v=JlKHGpVoA2Y)
> 
> 
> **Exemplo de Persona**
> 
 ![Exemplo de Persona](imaages/../images/persona.png)
 
 Fonte: [Como criar uma persona para o seu negócio](https://raissaviegas.com.br/como-criar-uma-persona/)


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Aluno  | Ver as opções de alimentos           | Escolher os alimentos antes de entrar na fila, para proporcionar uma experiência mais rápida e eficiente|
| Aluno  | Ver o valor dos alimentos          | Conferir se tem o valor necessário para a compra e se o preço é justo |
| Aluno  | Fazer a compra diretamente pelo site| Ter uma experiência mais rápida e eficiente |
| Proprietario de uma lanchonete  | Cadastrar seu estabelecimento (lanchonete) no site| Estar entre as opções de estabelecimentos presentes, aumentando a sua visibilidade|
| Proprietario de uma lanchonete  | Adicionar e atualizar o seu catálogo de alimentos| Os potenciais clientes vejam o seu catálogo de produtos mesmo antes de chegarem presencialmente no local|
| Aluno  | Ver as opções de estabelecimentos| Conseguir ver as opções de locais, e ver qual atenda com as suas necessidades e desejos no momento|

> Apresente aqui as histórias de usuário que são relevantes para o
> projeto de sua solução. As Histórias de Usuário consistem em uma
> ferramenta poderosa para a compreensão e elicitação dos requisitos
> funcionais e não funcionais da sua aplicação. Se possível, agrupe as
> histórias de usuário por contexto, para facilitar consultas
> recorrentes à essa parte do documento.
>
> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA |
|RF-002| Cadastramento do estabelecimento e aluno  | ALTA |
|RF-003| Variedade de estabelecimentos | ALTA |
|RF-004| Sistema de catálogo (opção de bebida e lanche) | ALTA |
|RF-005| Cadastramento de lanches pelo estabelecimento | ALTA |
|RF-006| Adicionar/remover lanches e bebidas pelo estabelecimento | ALTA |
|RF-007| Atualização de preços pelo estabelecimento | ALTA |
|RF-008| Cadastro da forma de pagamento pelo aluno | ALTA |
|RF-009| QR Code Gerado para o aluno | ALTA |
|RF-010| Sistema de Feedback Estabelecimento/Aluno | MÉDIA |
|RF-011| Histórico de pedidos daquele lanchonete | MÉDIA |
|RF-012| Sistema de filtragem dos alimentos (preço, demanda, etc.) | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em dispositivos móveis | ALTA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s | MÉDIA | 
|RNF-003| Confiabilidade das informações de privacidade dos alunos (como os dados do pagamento) | ALTA | 
|RNF-004| O consumo de dados móveis deve ser otimizado | MÉDIA | 
|RNF-005| A demanda deve afetar minimamente o desempenho do aplicativo | MÉDIA | 

> Com base nas Histórias de Usuário, enumere os requisitos da sua
> solução. Classifique esses requisitos em dois grupos:
>
 - [Requisitos Funcionais (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
   correspondem a uma funcionalidade que deve estar presente na
   plataforma (ex: cadastro de usuário).
>
> - [Requisitos Não Funcionais (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
>   correspondem a uma característica técnica, seja de usabilidade,
>   desempenho, confiabilidade, segurança ou outro (ex: suporte a
>   dispositivos iOS e Android).
>
> Lembre-se que cada requisito deve corresponder à uma e somente uma
> característica alvo da sua solução. Além disso, certifique-se de que
> todos os aspectos capturados nas Histórias de Usuário foram cobertos.
> 
> **Links Úteis**:
> 
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| O aplicativo está restrito a utilização dentro das PUC's        |

> Enumere as restrições à sua solução. Lembre-se de que as restrições
> geralmente limitam a solução candidata.
> 
> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)


# Projeto de Interface

O nosso projeto de interface inicial foi realizado no Figma de forma que a maioria dos requisitos funcionais fossem concebidos. No link abaixo, podemos observar uma tela inicial de login e cadastro para clientes e estabelecimentos da PUC Minas. Além disso, o nosso projeto de interface conta com: 
  - Uma página inicial onde os estabelecimentos colocam os seus produtos de destaque á mostra para os consumidores;
  - Uma tela para seleção do estabelecimento PUC Minas e nele a visualização de seus produtos (comidas, bebidas, balas, chocolates, etc.);
  - Uma tela de histórico de pedidos; 
  - Uma tela de efetuação do pagamento dos produtos selecionados no carrinho e o envio do QR Code via email.
    
Link do Figma: https://www.figma.com/file/LleNCpbdiaeYrSqSiKq2N7/Fila-da-Cantina?type=design&node-id=0%3A1&mode=design&t=KMK2qAyaAtvKB9Qh-1

> Apresente as principais interfaces da solução. Discuta como 
> foram elaboradas de forma a atender os requisitos funcionais, não
> funcionais e histórias de usuário abordados nas [Especificações do
> Projeto](#especificações-do-projeto).

## User Flow

https://app.flowmapp.com/share/projects/63ff843f-1931-497a-abc0-81384ff451e8/userflow/d503cdb2-1665-4ded-8429-00da65cb4ffe

> Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor
> mapear todo fluxo de telas do site ou app. Essa técnica funciona
> para alinhar os caminhos e as possíveis ações que o usuário pode
> fazer junto com os membros de sua equipe.
>
> **Links Úteis**:
> - [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
> - [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
> - [Top 25 User Flow Tools & Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)
>
> **Exemplo**:
> 
> ![Exemplo de UserFlow](images/userflow.jpg)


## Wireframes

O Wireframe está ao lado do design do Figma

> Wireframes são protótipos das telas da aplicação usados em design de interface para sugerir a
> estrutura de um site web e seu relacionamentos entre suas
> páginas. Um wireframe web é uma ilustração semelhante ao
> layout de elementos fundamentais na interface.
> 
> **Links Úteis**:
> - [Ferramentas de Wireframes](https://rockcontent.com/blog/wireframes/)
> - [Figma](https://www.figma.com/)
> - [Adobe XD](https://www.adobe.com/br/products/xd.html#scroll)
> - [MarvelApp](https://marvelapp.com/developers/documentation/tutorials/)
> 
> **Exemplo**:
> 
> ![Exemplo de Wireframe](images/wireframe-example.png)


# Metodologia

Nos baseamos na metodologia Scrum, no qual planejamos o projeto e em seguido avaliamos, selecionamos, desenvolvemos e revisamos. A liderança da equipe se manteve de maneira diluída, embora alguns participantes se sobressairam, cada um teve a sua tarefa e o trabalho foi realizado de maneira organizada, com um apoio mútuo, a partir do backlog do nosso projeto, sempre nos atualizando do que precisava ser feito. O nosso grupo utilizou das diversas ferramentas disponíveis para a concepção e idealização do projeto e a gestão via GitHub foi feita de maneira compartilhada.

> Nesta parte do documento, você deve apresentar a metodologia 
> adotada pelo grupo, descrevendo o processo de trabalho baseado nas metodologias ágeis, 
> a divisão de papéis e tarefas, as ferramentas empregadas e como foi realizada a
> gestão de configuração do projeto via GitHub.
>
> Coloque detalhes sobre o processo de Design Thinking e a implementação do Framework Scrum seguido
> pelo grupo. O grupo poderá fazer uso de ferramentas on-line para acompanhar
> o andamento do projeto, a execução das tarefas e o status de desenvolvimento
> da solução.
> 
> **Links Úteis**:
> - [Tutorial Trello](https://trello.com/b/8AygzjUA/tutorial-trello)
> - [Gestão ágil de projetos com o Trello](https://www.youtube.com/watch?v=1o9BOMAKBRE)
> - [Gerência de projetos - Trello com Scrum](https://www.youtube.com/watch?v=DHLA8X_ujwo)
> - [Tutorial Slack](https://slack.com/intl/en-br/)

## Divisão de Papéis


- Arthur Henrique Teixeira e Silva Bacelete: Coordenação do grupo, Design Thinking (Miro) e Documentação do Projeto
- Davi Benjamin Guimarães: Coordenação do grupo, Design Thinking (Miro)
- Alexandre Augusto dos Reis Junior: Design Thinking (Miro)
- André Nestor Celino: Elaboração dos Slides, Figma e Design Thinking (Miro)
- Felipe Araújo Monteiro: Design Thinking (Miro), Figma e UserFlow
- João Pedro Tavares e Amorim: Documentação do Projeto e Design Thinking (Miro).

> Apresente a divisão de papéis e tarefas entre os membros do grupo.
>
> **Links Úteis**:
> - [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)


## Ferramentas

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro | https://miro.com/app/board/uXjVNiWgZ_8=/ | 
|Repositório de código | GitHub | https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g4-fila-na-cantina-1/tree/master/codigo | 
|UserFlow | FlowmApp | https://app.flowmapp.com/share/projects/63ff843f-1931-497a-abc0-81384ff451e8/userflow/d503cdb2-1665-4ded-8429-00da65cb4ffe | 
|Protótipo Interativo | MavelApp ou Figma | https://www.figma.com/file/LIeNCpbdiaeYrSqSiKq2N7?type=design | 

>
> 
> 
> **Links Úteis - Hospedagem**:
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Crie seu Site com o HostGator](https://www.hostgator.com.br/como-publicar-seu-site)
> - [GoDady](https://br.godaddy.com/how-to)
> - [GitHub Pages](https://pages.github.com/)

## Controle de Versão
O grupo auxiliou na elaboração do projeto através de vários commits no main. 

> Discuta como a configuração do projeto foi feita na ferramenta de
> versionamento escolhida. Exponha como a gerência de tags, merges,
> commits e branchs é realizada. Discuta como a gerência de issues foi
> realizada.
> A ferramenta de controle de versão adotada no projeto foi o
> [Git](https://git-scm.com/), sendo que o [Github](https://github.com)
> foi utilizado para hospedagem do repositório `upstream`.
> 
> O projeto segue a seguinte convenção para o nome de branchs:
> 
> - `master`: versão estável já testada do software
> - `unstable`: versão já testada do software, porém instável
> - `testing`: versão em testes do software
> - `dev`: versão de desenvolvimento do software
> 
> Quanto à gerência de issues, o projeto adota a seguinte convenção para
> etiquetas:
> 
> - `bugfix`: uma funcionalidade encontra-se com problemas
> - `enhancement`: uma funcionalidade precisa ser melhorada
> - `feature`: uma nova funcionalidade precisa ser introduzida
>
> **Links Úteis**:
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
> - [5 Git Workflows & Branching Strategy to deliver better code](https://zepel.io/blog/5-git-workflows-to-improve-development/)
>
> **Exemplo - GitHub Feature Branch Workflow**:
>
> ![Exemplo de Wireframe](images/Github-Workflow.png)

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
