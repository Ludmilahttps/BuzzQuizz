# BuzzQuizz
This project is a mobile implementation of the Parrot Card Game, a themed memory game with randomness, effects, transition, responsiveness and dancing parrots!. This working with HTML, CSS and JavaScript. Try it out now at https://buzzquizz-lac.vercel.app/

# About
- Distribution of cards
    - When entering the game, the user is asked how many cards he wants to play
    - The user can only enter even numbers in the `prompt`, from 4 to 14. Any number that breaks the rule is not accepted.
    - After entering a number of valid cards, the game must enter the cards face down with the deal dealt.

- Click on the letter
    - When clicking on a card, it is turned over.
    - If it is the first card of the second, it remains until the user chooses the card.
    - If it is the second card turned over, there are 2 situations:
        - If it is equal to the first card, the user got it right and both will be up until the end of the game.
        - If it is a different card than the first card turned over, the user made a mistake. In this case, the game saves 1 second and then turns both cards face down again.

- End of the Game an `alert` is displayed with the message *"You won in X moves!"* where X is the number of times the user has turned a card in the game.

# OBS
This web site is a replica, using the tecnologies:

- HTML
- CSS
- JavaScript

By open this website is possible see all styles and features implemented by the long in your construction.

# How to run
Clone this repository
Finally access http://localhost:3000 on your favorite browser. (unless it is Internet Explorer. In this case, review your life decisions). 

You can also try it out now at https://buzzquizz-lac.vercel.app/

# Who
Ludmila Silveira, 19 years old and a Computer Engineer student at Federal University of Santa Catarina (UFSC). 

I'm currently studying to be a full stack developer and this is a learning project.

# When 
@date NOV/2022
@copyright Copyright (c) 2022


# Descrição
Seu primeiro projetão será a implementação de um sistema de Quizzes em HTML, CSS e JavaScript! Nesse sistema, você será responsável por desenvolver tanto a experiência do Quiz em si, quanto as telas que permitem criar quizzes! 

Você e sua dupla construirão todo o front-end da aplicação e usarão como back-end a API que fornecemos:

# API



# **Rotinas do Projetão**

- Fazer o levantamento de horas individual
    - Criar uma cópia e preencher com os seus horários individuais
        
        [Levantamento de Horas da Semana - BuzzQuizz](https://docs.google.com/spreadsheets/d/1Fu02DYMrmdIGcarpCuBodUAetw8eFbVG3WPRn3OzkOI/edit?usp=drivesdk)
        
- Escolher uma pessoa, da dupla ou trio, para criar o repositório no github.
- **Rotina 1 - Priorizar tarefas**
    
    [https://trello.com/b/aTYIT6Bm/projetão-buzzquizz](https://trello.com/b/aTYIT6Bm/projet%C3%A3o-buzzquizz)
    
    Recomendação Google Meet
    
    [https://meet.google.com/](https://meet.google.com/)

# Requisitos

- Geral
    - [ ]  Não utilize nenhuma biblioteca para implementar este projeto (jquery, lodash, etc), somente JavaScript puro (exceção: biblioteca **axios**) e também não utilize outras linguagens que traduzam para JavaScript (ClojureScript, Elm, etc)
    - [ ]  Seu projeto deverá ser desenvolvido utilizando **Git** e **GitHub. A cada requisito implementado** faça um commit com uma mensagem descritiva do que você evoluiu.
    - [ ]  Todas as telas devem ser implementadas em um único arquivo HTML. Se preferir, por organização, pode dividir seu JavaScript/CSS em múltiplos arquivos.

- Layout
    - [ ]  Aplique o layout para mobile e desktop, seguindo o Figma fornecido:
        
        [https://www.figma.com/file/nCuPD1re0r4EAwNl7OCNvz/BuzzQuizz-Turma-02?node-id=0%3A1](https://www.figma.com/file/nCuPD1re0r4EAwNl7OCNvz/BuzzQuizz-Turma-02?node-id=0%3A1)
        
    - [ ]  O layout deve alternar para versão de dispositivos móveis quando a largura da janela for inferior a 1100px

- Tela 1: Lista de Quizzes
    - [ ]  Nesta tela, devem ser listados os quizzes fornecidos pelo servidor, seguindo o layout dado
    - [ ]  A lista de quizzes do usuário deve mostrar somente seus quizzes, enquanto a lista de baixo deve mostrar todos os quizzes recebidos, sem os do usuário. Para diferenciar os quizzes do usuário dos demais, veja o requisito **Quizzes do Usuário**
    - [ ]  Os quizzes devem ser exibidos num formato retangular (conforme layout), com a imagem e título do quizz. A imagem deve estar sobreposta com um degradê de preto para transparente conforme layout. Ao clicar sobre o quizz, esta tela deve sumir e dar lugar à **Tela 2: Página de um quizz** do quizz em questão
        
        **Dica**: pesquise por como fazer degradê (gradiente) com CSS
        
    - [ ]  Ao clicar em "Criar Quizz" ou no "+" essa tela deve sumir, dando lugar à tela de **Tela 3: Criação de Quiz**

- Tela 2: Página de um quizz (perguntas)
    - [ ]  No topo do quizz, deve ser exibido um banner com a imagem e o título do quizz. A imagem deve estar escurecida com uma camada preta de 60% de opacidade.
    - [ ]  As respostas de cada pergunta devem ser exibidas organizadas aleatoriamente
    - [ ]  Ao clicar em uma resposta, as demais devem ganhar o efeito "esbranquiçado" do layout
    - [ ]  Não deve ser possível alterar a resposta após a escolha
    - [ ]  Após escolher uma resposta, o texto das opções deve ganhar a cor vermelha ou verde, conforme layout, indicando quais eram as respostas erradas e a certa
    - [ ]  Após 2 segundos de respondida, deve-se scrollar a página para a próxima pergunta

- Tela 2: Página de um quizz (fim do quizz)
    - [ ]  Após responder todas as perguntas, deve aparecer ao final da tela a caixa de resultado do quizz. Assim como na passagem das perguntas, deve-se aguardar 2 segundos após a última resposta e então scrollar a tela para exibir essa caixa de resultado
    - [ ]  A pontuação do quiz (porcentagem de acertos sobre total de perguntas) deve ser calculada no front, sem nenhuma comunicação com o servidor, bem como a classificação de em qual nível o usuário ficou baseado nessa pontuação
    - [ ]  Deverão ser exibidos o título, a imagem e a descrição do nível que o usuário ficou
    - [ ]  O score deve ser arredondado de forma a não ter casas decimais
        
        **Dica**: pesquise pelas funções `Math.ceil`, `Math.floor`, `Math.round` (e utilize a que você preferir)
        
    - [ ]  Ao clicar no botão "Reiniciar Quizz", a tela deverá ser scrollada novamente para o topo, as respostas zeradas pro estado inicial e a caixa de resultado escondida novamente
    - [ ]  Ao clicar no botão "Voltar pra home", essa tela deve sumir e dar lugar à **Tela 1: Lista de Quizzes**

- Tela 3: Criação de Quiz
    - [ ]  O processo de criar um quizz passará por 4 telas, seguindo o layout:
        - Tela 3.1: Informações básicas do quizz
        - Tela 3.2: Perguntas do quizz
        - Tela 3.3: Níveis do quizz
        - Tela 3.4: Sucesso do quizz
    - [ ]  A cada etapa, antes de avançar para a próxima tela, devem ser feitas validações nas informações inseridas, seguindo as regras abaixo:
        - Informações básicas do quizz
            - [ ]  Título do quizz: deve ter no mínimo 20 e no máximo 65 caracteres
            - [ ]  URL da Imagem: deve ter formato de URL
            - [ ]  Quantidade de perguntas: no mínimo 3 perguntas
            - [ ]  Quantidade de níveis: no mínimo 2 níveis
        - Perguntas do quizz
            - [ ]  Texto da pergunta: no mínimo 20 caracteres
            - [ ]  Cor de fundo: deve ser uma cor em hexadecimal (começar em "#", seguida de 6 caracteres hexadecimais, ou seja, números ou letras de A a F)
            - [ ]  Textos das respostas: não pode estar vazio
            - [ ]  URL das imagens de resposta: deve ter formato de URL
            - [ ]  É obrigatória a inserção da resposta correta e de pelo menos 1 resposta errada. Portanto, é permitido existirem perguntas com só 2 ou 3 respostas em vez de 4.
        - Níveis do quizz
            - [ ]  Título do nível: mínimo de 10 caracteres
            - [ ]  % de acerto mínima: um número entre 0 e 100
            - [ ]  URL da imagem do nível: deve ter formato de URL
            - [ ]  Descrição do nível: mínimo de 30 caracteres
            - [ ]  É obrigatório existir pelo menos 1 nível cuja % de acerto mínima seja 0%
    - [ ]  Caso alguma validação falhe, deve ser exibida um alerta pedindo para o usuário preencher os dados corretamente. Para simplificar, não é obrigatório informar qual foi a validação que falhou.
    - [ ]  Ao finalizar a criação do quizz e salvá-lo no servidor, o usuário deverá visualizar a **Tela 3.4: Sucesso do quizz**. Nesta tela ele pode clicar no quizz (ou no botão de "Acessar Quizz") para visualizar o quizz criado (Tela 2) ou voltar pra home (Tela 1)
    - [ ]  Quando o usuário retornar pra home (seja imediatamente ou mais tarde), esta deve atualizar os quizzes listados para incluir o quizz recém-criado

- Quizzes do Usuário
    - [ ]  Ao criar um quizz no servidor, este devolverá como resposta o objeto completo do quizz criado, incluindo o id (identificador único) que o servidor gerou pra este quizz
    - [ ]  Para futuramente você conseguir diferenciar um quizz criado pelo usuário de outros quizzes, você pode armazenar esses ids no momento da criação do quizz
        
        **Dica**: para isso, você usará um recurso do JavaScript chamado Local Storage. Preparamos um artigo pra te ajudar nisso:
        
        [Artigo: como armazenar dados no computador do usuário?](https://www.notion.so/Artigo-como-armazenar-dados-no-computador-do-usu-rio-8ec86587567e432da8e03b6c201b8df9)
        
    - [ ]  Na Tela 1: Lista de Quizzes, você pode comparar o id dos quizzes vindo do servidor com esses ids armazenados na criação dos quizzes para verificar se um determinado quizz foi criado pelo usuário em questão

- Deploy
    - [ ]  Faça deploy do seu projeto utilizando **GitHub Pages**

# Bônus (opcional)

- Bônus 1: Apagar quizz
    - [ ]  Adicione um botão em cada quizz (conforme layout do Bônus 1) permitindo que o usuário apague um quizz existente
        
        **Dica:** pesquise por "axios delete" e veja a documentação que fornecemos do servidor sobre delete de quizzes
        
    - [ ]  Ao clicar no botão, deve ser exibida um janelinha de confirmação, utilizando a função `confirm` do JavaScript (pesquise por JavaScript confirm)
    - [ ]  Ao confirmar, o quizz deve ser deletado no servidor e a lista de quizzes do usuário obtida novamente
- Bônus 2: Editar quizz
    - [ ]  Adicione um botão em cada quizz (conforme layout do Bônus 1) permitindo que o usuário edite um quizz existente
        
        **Dica:** pesquise por "axios put" e veja a documentação que fornecemos do servidor sobre update de quizzes
        
    - [ ]  Ao clicar no botão de editar, o usuário deverá ser levado para um fluxo idêntico ao de criação de quizzes, porém os campos já virão preenchidos com os dados atuais do quizz, permitindo que o usuário os altere e prossiga confirme desejado. Assim como na criação, a cada etapa devem ser validados os valores que o usuário inputou
    - [ ]  Ao finalizar a edição, caso volte pra home, a lista de quizzes do usuário deve ser obtida novamente
- Bônus 3: Loadings
    - [ ]  Adicione uma tela de loading (conforme layout) em todas as interações que demandem comunicação com o servidor:
        - Carregamento da lista de quizzes
        - Carregamento de um quizz
        - Criar / deletar / editar quizz
    
    **OBS**: o ícone de loading não precisa ser igual ao do layout. Você pode gerar um ícone de loading no formato que preferir no site:
    
    [](https://loading.io/)
    
- Bônus 4: Exibir erros na validação
    - [ ]  Altere o processo de criação/edição de quizzes para que, caso haja problemas de validação nos inputs, os erros sejam indicados abaixo dos campos em que ocorreram, seguindo o layout fornecido


