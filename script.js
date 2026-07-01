// przykładowa baza pytań (do dalszego rozszerzania)
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
    topic: "logika",
    text: "Jak nazywa się zdanie, które jest prawdziwe dla każdego wartościowania?",
    answers: ["Sprzeczność", "Tautologia", "Spełnialne", "Równoważność"],
    correctIndex: 1
  },
  {
    topic: "zbiory",
    text: "Ile elementów ma iloczyn kartezjański A×B, jeśli |A| = 3 i |B| = 4?",
    answers: ["7", "12", "3", "4"],
    correctIndex: 1
  },
  {
    topic: "zbiory",
    text: "Jak nazywa się zbiór wszystkich podzbiorów zbioru A?",
    answers: ["Suma zbiorów", "Iloczyn zbiorów", "Zbiór potęgowy", "Dopełnienie"],
    correctIndex: 2
  },
  {
    topic: "kombinatoryka",
    text: "Ile permutacji ma zbiór 4-elementowy?",
    answers: ["4", "8", "16", "24"],
    correctIndex: 3
  },
  {
    topic: "macierze",
    text: "Jaki wymiar ma macierz wynikowa przy mnożeniu macierzy A(m×n) i B(n×k)?",
    answers: ["m×n", "n×k", "m×k", "k×m"],
    correctIndex: 2
  },
  {
    topic: "ciagi",
    text: "Jaki to ciąg: a_n = 3n + 2?",
    answers: ["Geometryczny", "Arytmetyczny", "Stały", "Losowy"],
    correctIndex: 1
  },
  {
    topic: "granice",
    text: "Co oznacza zapis lim_{n→∞} a_n = L?",
    answers: [
      "Ciąg jest rosnący",
      "Ciąg jest malejący",
      "Granica ciągu istnieje i równa jest L",
      "Ciąg nie ma granicy"
    ],
    correctIndex: 2
  },
  {
    topic: "pochodne",
    text: "Jaka jest pochodna funkcji f(x) = x^2?",
    answers: ["2x", "x", "x^3", "1"],
    correctIndex: 0
  },
  {
    topic: "pochodne",
    text: "Co oznacza pochodna funkcji w punkcie x0?",
    answers: [
      "Wartość funkcji w x0",
      "Nachylenie stycznej w punkcie x0",
      "Maksimum funkcji",
      "Minimum funkcji"
    ],
    correctIndex: 1
  }
];

let currentQuestion = 1;
const totalQuestions = 10;
let streak = 0;
let correctCount = 0;
let totalTime = 0;
let bestStreak = 0;
let timeLeft = 30;
let timerInterval;

const questionTextEl = document.getElementById("question-text");
const answersEl = document.getElementById("answers");
const topicSelectEl = document.getElementById("topic-select");
const summaryEl = document.getElementById("quiz-summary");
const summaryCountEl = document.getElementById("summary-count");
const summaryTimeEl = document.getElementById("summary-time");
const summaryBestEl = document.getElementById("summary-best");
const summaryRestartBtn = document.getElementById("summary-restart");

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
      finishQuestion(false);
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
  clearInterval(timerInterval);
  const tiles = document.querySelectorAll(".answer-tile");
  tiles.forEach((tile, idx) => {
    tile.disabled = true;
    if (idx === question.correctIndex) {
      tile.classList.add("correct");
    } else if (idx === selectedIndex) {
      tile.classList.add("wrong");
    }
  });

  const isCorrect = selectedIndex === question.correctIndex;
  finishQuestion(isCorrect);
}

function finishQuestion(isCorrect) {
  const spent = 30 - timeLeft;
  totalTime += spent > 0 ? spent : 30;

  if (isCorrect) {
    correctCount++;
    streak++;
    bestStreak = Math.max(bestStreak, streak);
  } else {
    streak = 0;
  }
  updateProgress();

  setTimeout(() => {
    if (currentQuestion >= totalQuestions) {
      showSummary();
    } else {
      currentQuestion++;
      pickQuestion();
    }
  }, 700);
}

function pickQuestion() {
  summaryEl.hidden = true;
  const topic = topicSelectEl.value;
  const pool = topic === "all" ? questions : questions.filter(q => q.topic === topic);
  const q = pool[Math.floor(Math.random() * pool.length)];
  questionTextEl.textContent = q.text;
  renderAnswers(q);
  startTimer();
}

function showSummary() {
  summaryEl.hidden = false;
  const avgTime = totalTime / totalQuestions;
  summaryCountEl.textContent = `Poprawne odpowiedzi: ${correctCount} / ${totalQuestions}`;
  summaryTimeEl.textContent = `Średni czas na pytanie: ${avgTime.toFixed(1)} s`;
  summaryBestEl.textContent = `Najlepszy streak: ${bestStreak}`;
}

function resetSession() {
  currentQuestion = 1;
  correctCount = 0;
  totalTime = 0;
  streak = 0;
  bestStreak = 0;
  updateProgress();
  pickQuestion();
}

// eventy

document.getElementById("next-btn").addEventListener("click", () => {
  if (currentQuestion < totalQuestions) {
    clearInterval(timerInterval);
    finishQuestion(false);
  }
});

topicSelectEl.addEventListener("change", () => {
  resetSession();
});

summaryRestartBtn.addEventListener("click", () => {
  resetSession();
});

// start
updateProgress();
pickQuestion();
