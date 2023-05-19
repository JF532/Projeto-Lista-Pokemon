const botaoAlterarTema = document.getElementById
    ("botao_alterar_tema");

const body = document.querySelector
    ("body");

const imgBotaoTrocaDeTema = document.querySelector
    (".imagem_botao");
    
botaoAlterarTema.addEventListener("click", () => {
    
    const modoEscuroEstaAtivo = body.classList.contains("modo_escuro");

    body.classList.toggle("modo_escuro")

    if (modoEscuroEstaAtivo) {
        imgBotaoTrocaDeTema.setAttribute
        ("src","./src/imagens/sun.png");
        

    } else {
        imgBotaoTrocaDeTema.setAttribute("src", 
        "./src/imagens/moon.png");
        
    }


});