// proste dane testowe
const questions = [
  {
    topic: "logika",
    text: "Które zdanie jest tautologią?",
    answers: [
      "p ∨ ¬p",
      "p ∧ ¬p",
      "p → p",
      "¬(p ∨ q)"
    ],
    correctIndex: 0
  },
  {
    topic: "zbiory",
    text: "Ile elementów ma iloczyn kartezjański A×B, jeśli |A| = 3 i |B| = 4?",
    answers: ["7", "12", "3", "4"],
    correctIndex: 1
  }
];

let currentQuestion = 1;
const totalQuestions = 10;
let streak = 0;
let timeLeft = 30;
let timerInterval;

const questionTextEl = document.getElementById("question-text");
const answersEl = document.getElementById("answers");
const topicSelectEl = document.getElementById("topic-select");

function updateProgress() {
  const progressText = document.getElementById("progress-text");
  const streakText = document.getElementById("streak-text");
  const fill = document.getElementById("progress-fill");

  progressText.textContent = `Pytanie ${currentQuestion} z ${totalQuestions}`;
  streakText.textContent = `Streak: ${streak} 🔥`;
  const percent = (currentQuestion / totalQuestions) * 100;
  fill.style.width = `${percent}%`;
}

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 30;
  const timerEl = document.getElementById("quiz-timer");
  timerEl.textContent = `⏱ ${timeLeft} s`;

  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `⏱ ${timeLeft} s`;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      // tutaj możesz np. pokazać komunikat "czas minął" i przejść do kolejnego pytania
    }
  }, 1000);
}

function renderAnswers(question) {
  answersEl.innerHTML = "";
  question.answers.forEach((answersText, index) => {
    const btn = document.createElement("button");
    btn.className = "answer-tile";
    btn.textContent = answersText;
    btn.addEventListener("click", () => handleAnswerClick(index, question));
    answersEl.appendChild(btn);
  });
}

function handleAnswerClick(selectedIndex, question) {
  const tiles = document.querySelectorAll(".answer-tile");
  tiles.forEach((tile, idx) => {
    tile.disabled = true;
    if (idx === question.correctIndex) {
      tile.classList.add("correct");
    } else if (idx === selectedIndex) {
      tile.classList.add("wrong");
    }
  });

  if (selectedIndex === question.correctIndex) {
    streak++;
  } else {
    streak = 0;
  }
  updateProgress();
}

function pickQuestion() {
  const topic = topicSelectEl.value;
  const pool = topic === "all" ? questions : questions.filter(q => q.topic === topic);
  const q = pool[Math.floor(Math.random() * pool.length)];
  questionTextEl.textContent = q.text;
  renderAnswers(q);
  startTimer();
}

// eventy

document.getElementById("next-btn").addEventListener("click", () => {
  currentQuestion = Math.min(currentQuestion + 1, totalQuestions);
  pickQuestion();
});

topicSelectEl.addEventListener("change", () => {
  currentQuestion = 1;
  streak = 0;
  updateProgress();
  pickQuestion();
});

// start
updateProgress();
pickQuestion();
