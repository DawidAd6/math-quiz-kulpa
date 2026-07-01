// przykładowa baza pytań z notacją LaTeX (ładne indeksy górne/dolne)
const questions = [
  {
    topic: "zbiory",
    text: "Ile elementów ma iloczyn kartezjański $A\\times B$, jeśli $|A| = 3$ i $|B| = 4$?",
    answers: ["7", "12", "3", "4"],
    correctIndex: 1
  },
  {
    topic: "kombinatoryka",
    text: "Ile permutacji ma zbiór $n$-elementowy?",
    answers: ["$2^n$", "$n!$", "$n^2$", "$n$"],
    correctIndex: 1
  },
  {
    topic: "kombinatoryka",
    text: "Symbol Newtona definiujemy wzorem $\\binom{n}{k} = \\dfrac{n!}{k!(n-k)!}$. Jaka jest wartość $\\binom{4}{2}$?",
    answers: ["4", "6", "8", "16"],
    correctIndex: 1
  },
  {
    topic: "ciagi",
    text: "Dany jest ciąg $(a_n)$ o wyrazie ogólnym $a_n = 3n + 2$. Jakiego typu jest to ciąg?",
    answers: ["ciąg geometryczny", "ciąg arytmetyczny", "ciąg stały", "ciąg losowy"],
    correctIndex: 1
  },
  {
    topic: "granice",
    text: "Co oznacza zapis $\\lim_{n \\to \\infty} a_n = L$?",
    answers: [
      "ciąg jest rosnący",
      "ciąg jest malejący",
      "ciąg ma granicę równą $L$",
      "ciąg nie ma granicy"
    ],
    correctIndex: 2
  },
  {
    topic: "pochodne",
    text: "Jaka jest pochodna funkcji $f(x) = x^2$?",
    answers: ["$2x$", "$x$", "$x^3$", "$1$"],
    correctIndex: 0
  },
  {
    topic: "pochodne",
    text: "Co oznacza pochodna funkcji w punkcie $x_0$?",
    answers: [
      "wartość funkcji w $x_0$",
      "nachylenie stycznej w punkcie $x_0$",
      "maksimum funkcji",
      "minimum funkcji"
    ],
    correctIndex: 1
  },
  {
    topic: "macierze",
    text: "Jaki wymiar ma macierz wynikowa przy mnożeniu macierzy $A_{m\\times n}$ i $B_{n\\times k}$?",
    answers: ["$m\\times n$", "$n\\times k$", "$m\\times k$", "$k\\times m$"],
    correctIndex: 2
  },
  {
    topic: "ciagi",
    text: "Ciąg $(a_n)$ jest zbieżny, jeśli istnieje $L \\in \\mathbb{R}$ takie, że $\\lim_{n \\to \\infty} a_n = L$. Jak nazywa się liczba $L$?",
    answers: ["granica ciągu", "maksimum ciągu", "minimum ciągu", "wartość średnia ciągu"],
    correctIndex: 0
  },
  {
    topic: "granice",
    text: "Dobrym przybliżeniem liczby $e$ jest:",
    answers: ["2,71", "3,14", "1,72", "0,33"],
    correctIndex: 0
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

function typesetMath() {
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise();
  }
}

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
    btn.innerHTML = answersText; // MathJax ogarnie wzory
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
  questionTextEl.innerHTML = q.text;
  renderAnswers(q);
  startTimer();
  typesetMath();
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
