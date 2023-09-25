const botaoAlterarAtributo = document.getElementById("botao-alterar-atributo");

botaoAlterarAtributo.addEventListener("click", () => {

    const body = document.querySelector("body");
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
    const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

body.classList.toggle("modo-escuro");

if(modoEscuroEstaAtivo) {

    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/angelica-luz.png");

} else {

    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/angelica-dark.png");

}
});

const botaoTrocaDeHeroi = document.querySelectorAll(".token-herois button");

for (let i = 0; i < botaoTrocaDeHeroi.length; i++) {      
    botaoTrocaDeHeroi[i].addEventListener("click", function() {             
        console.log(botaoTrocaDeHeroi[i].id);
        console.log(document.querySelector(".heroi-ras img"));
        switch(botaoTrocaDeHeroi[i].id) {
            case "ras-fire":
                document.querySelector(".heroi-ras img").src="./src/imagens/adventurer-ras-sem-fundo.png"
                document.querySelector(".informacao-ras").textContent = "Ras desistiu da sua divindade como Herdeiro da Aliança e se tornou um humano para salvar o mundo das ameaças celestiais. Um Herói que obteve tanto o poder de Diche como o de Ilírio ao entender a natureza de ambos e está sempre em busca de novas aventuras. Ras é um herói do tipo cavaleiro do elemento fogo."
                document.querySelector(".informacoes").textContent = "Ras Aventureiro";
            break;
            case "mercedes-fire":
                document.querySelector(".heroi-ras img").src="./src/imagens/mercedes-sem-fundo.png"
                document.querySelector(".informacao-ras").textContent = "Mercedes, uma Homúnculo deixada sob os cuidados da Rainha Diene há alguns anos, parece inexpressiva, mas se apega com facilidade a quem lhe trata bem. Às vezes, ela tenta imitar os outros e repetir o que dizem, mas sempre meio sem jeito Ela é uma maga do elemento fogo.";
                document.querySelector(".informacoes").textContent = "Mercedes";
            break;
            case "angelica-agua":
                document.querySelector(".heroi-ras img").src="./src/imagens/angelica-normal.png"
                document.querySelector(".informacao-ras").textContent = "Alta-Sacerdotisa da Ordem Sagrada da Cruz Azul. Grande curandeira que possui um poder divino extraordinário. Apesar da aparência jovem, dizem que ocupa o cargo mais alto dos membros do Conclave."
                document.querySelector(".informacoes").textContent = "Angélica";
            break;
            case "light-angelica":
                document.querySelector(".heroi-ras img").src="./src/imagens/angelica-luz.png"
                document.querySelector(".informacao-ras").textContent = "Como se a profecia que fora esquecida fosse consumada, uma catástrofe atingiu a terra após o aparecimento de uma garota que carrega o destino do mundo em suas frágeis asas alvas. Aqueles que sobreviveram à destruição chamaram ela de anjo e, o doutor Noardo que encontrou a verdade escondida no seu interior, a nomeou de 'chave'"
                document.querySelector(".informacoes").textContent = "Angélica Anjo da Luz";
            break;
            case "dark-iseria":
                document.querySelector(".heroi-ras img").src="./src/imagens/dark-iseria.png"
                document.querySelector(".informacao-ras").textContent = "Foi um dia a mais nobre cavaleira do reino. Porém depois de caçar a Bruxa Sombria, acabou sendo amaldiçoada e se tornando também uma bruxa. Lutou com seus próprios companheiros e com a passoa amada por causa da maldição, e traumatizada, se trancou num castelo envolto por espinheiros para que ninguém se aproximasse."
                document.querySelector(".informacoes").textContent = "Bruxa do Espinheiro Iséria";
            break;
            case "dark-angelica":
                document.querySelector(".heroi-ras img").src="./src/imagens/angelica-dark.png"
                document.querySelector(".informacao-ras").textContent = "Filha de uma grande família novre, foi deixada sob os cuidados da Igreja da Deusa para tratar uma doença incurável. Porém, não só a doença continuou a agravar-se, como tornou-se um grande problema com o fim do suporte financeiro de sua família. Amaldiçoando a Igreja da Deusa e o seu destino, foi até o lugar escrito no livro proibido, encontrando um ser misterioso. Assim ela renasce como um ser totalmente diferente, inflamada de ódio pela Igreja da Deusa e pelo mundo."
                document.querySelector(".informacoes").textContent = "Angélica do Pecado";
            break;
            case "adine-terra":
                document.querySelector(".heroi-ras img").src="./src/imagens/adine-sem-fundo.png"
                document.querySelector(".informacao-ras").textContent = "Garota alegre e esforçada que nunca perde as esperanças. Embora seja originária da região norte, acabou permanecendo no Santuário do Verão após andarilhar por um longo tempo. Porém, ao se envolver com as Espadas das Quatro Estações, depara-se com um novo destino totalmente inimaginado."
                document.querySelector(".informacoes").textContent = "Adine";
            break;
            case "adine-light":
                document.querySelector(".heroi-ras img").src="./src/imagens/savior-adine.png"
                document.querySelector(".informacao-ras").textContent = "Venceu o medo interior e usa harmoniosamente os poderes contidos nas Espadas das Quatro Estações para resistir à existência celestial que ameaça o mundo. Tornou-se a salvadora e guardiã de Natalon e está se preparando para uma nova aventura."
                document.querySelector(".informacoes").textContent = "Adine Salvadora";
            break;
            case "veronica":
                document.querySelector(".heroi-ras img").src="./src/imagens/veronica-sem-fundo.png"
                document.querySelector(".informacao-ras").textContent = "Primeira filha de uma influente família de nobres humanos na região central de Erásia. Assumiu a liderança dos Caçadores ainda jovem, seguindo a tradição da família em apoiar e participar das campanhas contra vampiros."
                document.querySelector(".informacoes").textContent = "Verônica";
            break;
            case "aria":
                document.querySelector(".heroi-ras img").src="./src/imagens/aria.png"
                document.querySelector(".informacao-ras").textContent = "Líder dos elfos sombrios que vivem isolados do mundo na Floresta dos Eremitas. Com feição fria e difícil de ler, é extremamente hostil contra indivíduos que não fazem parte de sua tribo."
                document.querySelector(".informacoes").textContent = "Aria";
            break;
            case "baiken":
                document.querySelector(".heroi-ras img").src="./src/imagens/baiken.png"
                document.querySelector(".informacao-ras").textContent = "Ela perdeu a família e os amigos num ataque dos Gears liderados por That Man. A partir daquele momento, ela seguiu os passos de Asura, obcecada por se vingar de That Man. ela é forte e decidida e ostenta um poder de combate capaz de rivalizar até com o de um Gear."
                document.querySelector(".informacoes").textContent = "Baiken - Collab Guilty Gear";
            break;
            case "edward":
                document.querySelector(".heroi-ras img").src="./src/imagens/edward.png"
                document.querySelector(".informacao-ras").textContent = "Alquimista de aço que possui um talento genial para a alquimia. Sua característica principal é a prótese automail no lugar do braço direito e da sua perna esquerda. Embora tenha um intelecto extraordinário e elevada disposição, fica facilmente provocado se o chamar de baixinho."
                document.querySelector(".informacoes").textContent = "Edward Elric - Collab FullMetal Alchemist";
            break;
            case "Elphet":
                document.querySelector(".heroi-ras img").src="./src/imagens/elphet.png"
                document.querySelector(".informacao-ras").textContent = "Amante da natureza e dos animais, tem uma personalidade que não consegue ignorar a solidão de ninguém. Possui uma mente otimista e acha que é necessário tentar para resolver qualquer problema. Demonstra grande interesse em assuntos de namoro e gosta de devanear como se estivesse num sonho."
                document.querySelector(".informacoes").textContent = "Elphelt - Collab Guilty Gear";
            break;
            case "jacko":
                document.querySelector(".heroi-ras img").src="./src/imagens/Jack-O.png"
                document.querySelector(".informacao-ras").textContent = "Um ser artificial criado para impedir o renascimento de Justice. Com metad eda alma do antigo amor de Sol, Aria, ela tem uma personalidade dividida: uma é o de uma adulta inteligente e a outra é a de uma criança inocente. Ela usa uma máscara durante o combate para controlar suas mudanças de humor peculiares."
                document.querySelector(".informacoes").textContent = "Jack 'O - Collab Guilty Gear";
            break;
            case "Milin":
                document.querySelector(".heroi-ras img").src="./src/imagens/Milim.png"
                document.querySelector(".informacao-ras").textContent = "Humana meio-dragão que odeia coisas entediantes por ter vivido por muito tempo. Aceitou a amizade de Rimuru,que conhece muitas coisas divertidas."
                document.querySelector(".informacoes").textContent = "Milim - Collab That Time i got Reincarnated as a Slime";
            break;
            case "ran":
                document.querySelector(".heroi-ras img").src="./src/imagens/Ran.png"
                document.querySelector(".informacao-ras").textContent = "Espadachim detentor da Espada do Inverno, uma das Espadas das Quatro Estações. Embora sua terra natal seja o continente oriental, vagueou por outros continentes duante muito tempo para cumprir seu propósito. No entanto, sem obter qualquer sucesso, acabou voltando ao oriente como se tivesse sido atraído pelo destino."
                document.querySelector(".informacoes").textContent = "Ran";
            break;
            case "rimuru":
                document.querySelector(".heroi-ras img").src="./src/imagens/Rimuru.png"
                document.querySelector(".informacao-ras").textContent = "Líder da Federação de Jura Tempest, o país dos monstros. A sua forma original é de slime, mas possui grande força e habilidade. Não tem muito interesse me dominar ou conquistar terras, e apenas deseja que todos convivam em paz."
                document.querySelector(".informacoes").textContent = "Rimuru - Collab That Time i got Reincarnated as a Slime";
            break;
            case "risa":
                document.querySelector(".heroi-ras img").src="./src/imagens/riza.png"
                document.querySelector(".informacao-ras").textContent = "Oficial talentosa e subalterna de Roy, que ocupa o cargo de tenente das Forças Armadas. Não é alquimista, mas exibe excelente talento em diversos aspectos como atiradora. Possui uma postura íntegra e personalidade calma, não hesitanto em criticar os erros de seu superior."
                document.querySelector(".informacoes").textContent = "Riza - Collab FullMetal Alchemist";
            break;
            case "roy-mustang":
                document.querySelector(".heroi-ras img").src="./src/imagens/roy-mustang.png"
                document.querySelector(".informacao-ras").textContent = "Alquimista das chamas e coronel das Forças Armadas Amestrinas. Possui habilidades excepcionais que o permitiram subir na hierarquia militar ainda jovem. É um ambicioso de sangue frio e de avidez ardente que se aproxima do seu objetivo de forma calculada."
                document.querySelector(".informacoes").textContent = "Roy Mustang - Collab FullMetal Alchemist";
            break;
            case "sol-badguy":
                document.querySelector(".heroi-ras img").src="./src/imagens/sol.png"
                document.querySelector(".informacao-ras").textContent = "Um assassino e caçador de recompensas que perambula pelo mundo atrás de criminosos. Ele ostenta um poder de combate impressionante, e, embora seja capaz de controlar todos os elementos, constuma usar só o Fogo. Ele se comunica de uma forma dura e direta e prefere agir em vez de falar."
                document.querySelector(".informacoes").textContent = "Sol Badguy - Collab Guilty Gear";
            break;
            case "tenebria-fire":
                document.querySelector(".heroi-ras img").src="./src/imagens/tenebria.png"
                document.querySelector(".informacao-ras").textContent = "Uma Acólita ilusionista, Tenébria é conhecida como a Rainha Fantasma. Ela desestabiliza os alvos conjurando ilusões terríveis ou assumindo a aparência de outras pessoas. Embora pareça brincalhona, ela é cruel e brutal."
                document.querySelector(".informacoes").textContent = "Tenébria";
            break;
            case "winter":
                document.querySelector(".heroi-ras img").src="./src/imagens/winter.png"
                document.querySelector(".informacao-ras").textContent = "Consegue usar qualquer arma facilmente. Gosta de jogos e de animar as pessoas à sua volta. Atualmente, está sincronizada com WINTER por meio do SYNK DIVE."
                document.querySelector(".informacoes").textContent = "Winter - Collab AESPA";
            break;
            case "karina":
                document.querySelector(".heroi-ras img").src="./src/imagens/karina.png"
                document.querySelector(".informacao-ras").textContent = "Possui inocência de criança e ao mesmo tempo uma grande força capaz de destruir qualquer coisa. Atualmente está sincronizada com KARINA por meio do SYNK DIVE."
                document.querySelector(".informacoes").textContent = "Karina - Collab AESPA";
            break;
            case "giselle":
                document.querySelector(".heroi-ras img").src="./src/imagens/giselle.png"
                document.querySelector(".informacao-ras").textContent = "Possui grandes habilidades linguísticas e estilo, e também pode usar uma borda de luz para imobilizar os oponentes. Atualmente está sincronizada com GISELLE por meio do SYNK DIVE."
                document.querySelector(".informacoes").textContent = "Giselle - Collab AESPA";
            break;
            case "dizzy":
                document.querySelector(".heroi-ras img").src="./src/imagens/dizzy.png"
                document.querySelector(".informacao-ras").textContent = "Uma criatura híbrida, filha de um humano com uma Gear. Após ter sido atacada por humanos, ela passou a nutrir grandes desconfiança em relação a eles, mas mudou de opinião depois de conhecer várias pessoas. Ela adora a humanidade e a natureza e detesta lutar, mas quando necessário, não foge da batalha, usando suas duas asas, Necro e Undine."
                document.querySelector(".informacoes").textContent = "Dizzy - Collab Guilty Gear";
            break;
            case "ningning":
                document.querySelector(".heroi-ras img").src="./src/imagens/ningning.png"
                document.querySelector(".informacao-ras").textContent = "Gosta de música e de desenhar, e faz parte de uma equipe de hackers, onde mostra suas incríveis habilidades em uma dupla com NINGNING. Atualmente está sincronizada com NINGNING por meio do SYNK DIVE."
                document.querySelector(".informacoes").textContent = "Ningning - Collab AESPA";
            break;
            case "emilia":
                document.querySelector(".heroi-ras img").src="./src/imagens/emilia.png"
                document.querySelector(".informacao-ras").textContent = "Meia-elfa de cabelos prateados que chegou a Ritânia através de um Portal do Caos. Ela é gentil e terna, além de bondosa e honesta, não conseguindo passar batido ao ver alguém em apuros."
                document.querySelector(".informacoes").textContent = "Emilia - Collab RE-Zero";
            break;
            case "ram":
                document.querySelector(".heroi-ras img").src="./src/imagens/ram.png"
                document.querySelector(".informacao-ras").textContent = "Criada da Mansão de Roswaal que chegou a Ritânia através do Portal do Caos. Cobre o olho esquerdo com seu cabelo cor-de-rosa. Após chegar em Ritânia, administra o Castelo de Tirel com Rem. Ram valoriza sua irmã mais nova mais do que qualquer outro."
                document.querySelector(".informacoes").textContent = "Ram - Collab RE-Zero";
            break;
            case "rem":
                document.querySelector(".heroi-ras img").src="./src/imagens/rem.png"
                document.querySelector(".informacao-ras").textContent = "Criada da Mansão de Roswaal que chegou a Ritânia através do Portal do Caos. Fala respeitosamente com todos e tem uma personalidade calma. Tem talento para tarefaz domésticas."
                document.querySelector(".informacoes").textContent = "Rem - Collab RE-Zero";
            break;
            case "shuna":
                document.querySelector(".heroi-ras img").src="./src/imagens/shuna.png"
                document.querySelector(".informacao-ras").textContent = "Princesa engenhosa que cuida muito bem de tarefas domésticas como cozinhar e costurar."
                document.querySelector(".informacoes").textContent = "Shuna - Collab That Time i got Reincarnated as a Slime";
            break;
            case "benimaru":
                document.querySelector(".heroi-ras img").src="./src/imagens/benimaru.png"
                document.querySelector(".informacao-ras").textContent = "Irmão mais velho de Shuna que lidrou a vingança contra os Orcs que dizimaram sua tribo. Após se vingar, jurou lealdade a Rimuru, tornando-se Comandante-Chefe das tropas da Federação de Jura Tempest."
                document.querySelector(".informacoes").textContent = "Benimaru - Collab That Time i got Reincarnated as a Slime";
            break;



            default:
                document.querySelector(".heroi-ras img").src="./src/imagens/adventurer-ras-sem-fundo.png"
                document.querySelector(".informacao-ras").textContent = ""
        }


    });  }






console.log(document)
console.log(body);
console.log(modoEscuroEstaAtivo);
console.log(imagemBotaoTrocaDeTema);
console.log(botaoAlterarAtributo);
