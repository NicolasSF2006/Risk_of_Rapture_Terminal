const grades = [
    `Criaturas de Grade 3\n\n- Nome: 5 Nions\n- Descrição: 10 Nions\n- Poderes: 20 Nions\n- Fraquezas: 20 Nions\n- Outros detalhes: 5 Nions\n- Segredos: 40 Nions\n\nTotal possível: 100 Nions`,
    `Criaturas de Grade 2\n\n- Nome: 5 Nions\n- Descrição: 15 Nions\n- Poderes: 25 Nions\n- Fraquezas: 25 Nions\n- Outros detalhes: 5 Nions\n- Segredos: 55 Nions\n\nTotal possível: 130 Nions`,
    `Criaturas de Grade 1\n\n- Nome: 10 Nions\n- Descrição: 25 Nions\n- Poderes: 40 Nions\n- Fraquezas: 40 Nions\n- Outros detalhes: 10 Nions\n- Segredos: 75 Nions\n\nTotal possível: 200 Nions`,
    `Criaturas de Grade Especial\n\n- Nome: 15 Nions\n- Descrição: 50 Nions\n- Poderes: 65 Nions\n- Fraquezas: 65 Nions\n- Outros detalhes: 15 Nions\n- Segredos: 150 Nions\n\nTotal possível: 360 Nions`,
];

const animatedTextElement = document.getElementById("animated-text");
const cursorElement = document.getElementById("cursor");
let index = 0;
let gradeIndex = 0;
let currentGradeDiv;
let cursorBlinkInterval; // Variável para armazenar o intervalo do piscar

function typeText() {
    if (index < grades[gradeIndex].length) {
        currentGradeDiv.innerHTML += grades[gradeIndex].charAt(index) === '\n' ? '<br>' : grades[gradeIndex].charAt(index);
        index++;
        setTimeout(typeText, 5); // Tempo de atraso
    } else {
        index = 0;
        setTimeout(() => {
            gradeIndex++;
            if (gradeIndex < grades.length) {
                setTimeout(typeNextGrade, 500); // Espera um tempo antes de começar a próxima grade
            } else {
                stopCursorBlinking(); // Para o piscar e oculta o cursor ao final da digitação
            }
        }, 500);
    }
}

function typeNextGrade() {
    currentGradeDiv = document.createElement('div');
    currentGradeDiv.className = 'grade';
    animatedTextElement.appendChild(currentGradeDiv);
    typeText(); // Inicia a digitação da próxima grade
}

function startCursorBlinking() {
    cursorBlinkInterval = setInterval(() => {
        cursorElement.style.opacity = cursorElement.style.opacity === '1' ? '0' : '1'; // Alterna a opacidade
    }, 600); // Tempo de piscar
}

function stopCursorBlinking() {
    clearInterval(cursorBlinkInterval); // Para o piscar
    cursorElement.style.opacity = '0'; // Oculta o cursor
}

// Inicia o piscar do cursor e a animação com a primeira grade
startCursorBlinking();
typeNextGrade();
