const text = `A Live in the Light surgiu após o colapso de diversos planetas. Cada um enfrentava extinção por diferentes razões: os humanos estavam destruindo seu mundo, os Ômnicos em guerra, os Bestiais se autodestruindo, e os Voids desaparecendo. Um ser divino chamado Providence interveio, salvando esses planetas ao criar novos mundos organizados ao redor de uma fonte tecnológica central. Por um tempo, houve paz e prosperidade, mas a ausência de Providence levou à Guerra dos Cem Anos. A paz foi restaurada com o Tratado de Prime, unificando os planetas e dando origem à corporação.\n\nAtualmente, a Live in the Light é dividida em três setores principais: Proteção, Inteligência e Exploração, cada um com subdivisões específicas. As missões variam de defesa planetária à exploração dimensional. A corporação também possui um sistema de ranking para medir o progresso dos membros, além de ferramentas como a "Nexus-box" que concedem poderes especiais.\n\nA corporação enfrenta inimigos poderosos, como a Igreja do Deus Quebrado, a Mão da Serpente, a Coalizão Global Oculta e a Insurgência do Caos, todos com seus próprios objetivos. Além disso, a Live in the Light é defendida por heróis lendários, como Raze, Yumi e Tatsuya, que servem como inspirações para os novos recrutas.\n\nCom tecnologias avançadas e desafios constantes, a corporação continua evoluindo, sempre em busca de realizar o legado deixado por Providence.`;

const animatedTextElement = document.getElementById("animated-text");
const cursorElement = document.getElementById("cursor");
let index = 0;

function typeText() {
    if (index < text.length) {
        // Adiciona a letra ou a quebra de linha
        animatedTextElement.innerHTML += text.charAt(index) === '\n' ? '<br>' : text.charAt(index);
        index++;
        setTimeout(typeText, 20); // Tempo de atraso em milissegundos (ajuste conforme necessário)
    } else {
        startCursorBlinking(); // Inicia o piscar do cursor após terminar
    }
}

function startCursorBlinking() {
    setInterval(() => {
        cursorElement.style.opacity = cursorElement.style.opacity === '0' ? '1' : '0';
    }, 500); // Tempo de piscar em milissegundos
}

// Iniciar a animação
typeText();