const questions = [
  {
    question: "1️⃣ Qual meu jogo favorito?",
    answers: ["Manicraft", "The sims4", "Free Fire", "Lol"],
    correct: 2
  },
  {
    question: "2️⃣ o que esta comigo que não vou devolver?",
    answers: ["cueca", "camiseta", "blusa de frio", "calça"],
    correct: 1
  },
  {
    question: "3️⃣ Como chamou minha primeira gata?",
    answers: ["Lua", "Jade", "Mia", "Bela"],
    correct: 1
  },
  {
    question: "4️⃣ O que mais fazemos?",
    answers: ["Saimos", "Transamos", "Brigamos", "Coversamos"],
    correct: 2
  },
  {
    question: "5️⃣ O que vc faz que me estressa?",
    answers: ["Respira", "Fica jogando", "Só vê oq quer", "Não me responder"],
    correct: 1
  },
  {
    question: "6️⃣ Oque eu mais gosto de fazer ATUALMENTE?",
    answers: ["Ecrever", "Ouvir musica", "Ler", "jogar vôlei"],
    correct: 2
  },
  {
    question: "7️⃣ Qual emoji me define?",
    answers: ["😍", "💩", "😜", "😈"],
    correct: 1
  },
  {
    question: "8️⃣ Luagr q eu levaria vc pra passar um tempo?",
    answers: ["Praia", "Cachoeira", "Clube", "Parque de diversão"],
    correct: 1
  },
  {
    question: "9️⃣ Minha série favorita?",
    answers: ["Ginny e Gerogia", "Shadow Hunters", "The witcher", "You"],
    correct: 1
  },
  {
    question: "🔟 Qual é o certo?",
    answers: ["Te amo💕", "Te amo💖", "Te amo❤️", "Te amo🥰"],
    correct: 0
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const scoreText = document.getElementById("score-text");
const quizBox = document.getElementById("quiz-box");
const restartBtn = document.getElementById("restart-btn");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";

  q.answers.forEach((ans, index) => {
    const btn = document.createElement("button");
    btn.classList.add("answer-btn");
    btn.textContent = ans;
    btn.addEventListener("click", () => selectAnswer(index, btn));
    answersEl.appendChild(btn);
  });
}

function selectAnswer(index, btn) {
  const correct = questions[currentQuestion].correct;
  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach(b => b.disabled = true);

  if (index === correct) {
    btn.classList.add("correct");
    score++;
  } else {
    btn.classList.add("wrong");
    buttons[correct].classList.add("correct");
  }

  nextBtn.style.display = "block";
}

function nextQuestion() {
  currentQuestion++;
  nextBtn.style.display = "none";

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizBox.classList.add("hidden");
  resultBox.classList.remove("hidden");
  scoreText.textContent = `Você acertou ${score} de ${questions.length} perguntas! 🎉`;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  resultBox.classList.add("hidden");
  quizBox.classList.remove("hidden");
  nextBtn.style.display = "none";
  loadQuestion();
}

nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", restartQuiz);

loadQuestion();
