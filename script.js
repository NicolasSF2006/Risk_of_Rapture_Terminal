const text = `Bem vindo à Live in the Light! Você acaba de ingressar em uma jornada épica, onde seu talento e dedicação serão cruciais para o progresso e a proteção de tudo o que valorizamos. Aqui, você se unirá a uma equipe com novatos como você, pronta para enfrentar desafios em diferentes setores: Proteção, Inteligência e Exploração. Com seu terminal em mãos, você receberá missões que testarão sua habilidade e estratégia, e armazenará informações importantes para a Live in the Light.\n\nEste é o início de sua contribuição para um futuro brilhante.`;

const animatedTextElement = document.getElementById("animated-text");
const cursorElement = document.getElementById("cursor");
let index = 0;

function typeText() {
    if (index < text.length) {
        // Adiciona a letra ou a quebra de linha
        animatedTextElement.innerHTML += text.charAt(index) === '\n' ? '<br>' : text.charAt(index);
        index++;
        setTimeout(typeText, 30); // Tempo de atraso em milissegundos (ajuste conforme necessário)
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