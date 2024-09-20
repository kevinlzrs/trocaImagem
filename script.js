    //selecionar a imagem principal
    const imagem = document. getElementById('imagem');
    
    //selecionar os botões
    const botao1 = document.getElementById('botao1');
    const botao2 = document.getElementById('botao2');
    const botao3 = document.getElementById('botao3');
    const botao4 = document.getElementById('botao4');
    const botao5 = document.getElementById('botao5');
    const botao6 = document.getElementById('botao6');


    //função para trocar  a imagem
    function trocarImagem(img) {
        imagem.src = img;
    }
    
    //adicionar eventos aos botões para trocar a imagem
    botao1.addEventListener('click', function() {
        trocarImagem('imagem1.jpg');
    })
    botao2.addEventListener('click', function() {
        trocarImagem('imagem2.jpg');
    }) 
    botao3.addEventListener('click', function() {
        trocarImagem('imagem3.jpg');
    }) 
    botao4.addEventListener('click', function() {
        trocarImagem('imagem4.jpg');
    }) 
    botao5.addEventListener('click', function() {
        trocarImagem('imagem5.jpg');
    }) 
    botao6.addEventListener('click', function() {
        trocarImagem('imagem6.jpg');
    }) 

    //funçao para ativar o botão e remover a ativação dos outros
    const botoes = document.querySelectorAll('.botoes button');
    function ativarBotao(botao) {
        botoes.forEach(b => b.classList.remove('ativo'));
        botao.classList.add('ativo')
    }

    //adicionar eventos aos botões para trocar a imagem e mudar a cor do botão
        botoes.forEach((botao,index) => {
            botao.addEventListener('click', function() {
                trocarImagem(`imagem${index+1}.jpg`)
                ativarBotao(botao);
            })
        })
    
