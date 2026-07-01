// pełna baza pytań oparta na question.md
const questions = [
  // ... (niezmieniona baza pytań)
];

let currentQuestion = 1;
const totalQuestions = 10;
let streak = 0;
let correctCount = 0;
let totalTime = 0;
let bestStreak = 0;
let timeLeft = 30;
let timerInterval;

const navTotalEl = document.getElementById("nav-total");
const navTodayEl = document.getElementById("nav-today");
const navCorrectEl = document.getElementById("nav-correct");

const STORAGE_KEY = "math-quiz-kulpa-stats";

function loadStats() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { totalSolved: 0, todaySolved: 0, correctTotal: 0, lastDate: todayString() };
    }
    const parsed = JSON.parse(raw);
    if (parsed.lastDate !== todayString()) {
      parsed.todaySolved = 0;
      parsed.lastDate = todayString();
    }
    return parsed;
  } catch {
    return { totalSolved: 0, todaySolved: 0, correctTotal: 0, lastDate: todayString() };
  }
}

function saveStats(stats) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
}

function todayString() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

let globalStats = loadStats();

function updateNavbar() {
  if (navTotalEl) navTotalEl.textContent = String(questions.length);
  if (navTodayEl) navTodayEl.textContent = String(globalStats.todaySolved);
  if (navCorrectEl) navCorrectEl.textContent = String(globalStats.correctTotal);
}

const questionTextEl = document.getElementById("question-text");
const answersEl = document.getElementById("answers");
const topicSelectEl = document.getElementById("topic-select");
const summaryEl = document.getElementById("quiz-summary");
const summaryCountEl = document.getElementById("summary-count");
const summaryTimeEl = document.getElementById("summary-time");
const summaryBestEl = document.getElementById("summary-best");
const summaryRestartBtn = document.getElementById("summary-restart");
const feedbackEl = document.getElementById("question-feedback");

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
  streakText.textContent = `Streak: ${streak}`;
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
      finishQuestion(false, sessionQuestions[currentQuestion - 1]);
    }
  }, 1000);
}

let sessionQuestions = [];

function buildSessionQuestions() {
  const topic = topicSelectEl.value;
  const pool = topic === "all" ? questions.slice() : questions.filter(q => q.topic === topic);
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  sessionQuestions = pool.slice(0, Math.min(totalQuestions, pool.length));
}

function renderAnswers(question) {
  answersEl.innerHTML = "";
  question.answers.forEach((answersText, index) => {
    const btn = document.createElement("button");
    btn.className = "answer-tile";
    btn.innerHTML = answersText;
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

  if (feedbackEl) {
    if (isCorrect) {
      feedbackEl.innerHTML = "Dobrze!";
    } else {
      feedbackEl.innerHTML = `Poprawna odpowiedź: <strong>${question.answers[question.correctIndex]}</strong>`;
    }
    typesetMath();
  }

  finishQuestion(isCorrect, question);
}

function finishQuestion(isCorrect, question) {
  const spent = 30 - timeLeft;
  totalTime += spent > 0 ? spent : 30;

  if (isCorrect) {
    correctCount++;
    streak++;
    bestStreak = Math.max(bestStreak, streak);
    globalStats.correctTotal += 1;
  } else {
    streak = 0;
  }
  updateProgress();

  globalStats.todaySolved += 1;
  saveStats(globalStats);
  updateNavbar();

  setTimeout(() => {
    if (currentQuestion >= sessionQuestions.length) {
      showSummary();
    } else {
      currentQuestion++;
      showQuestion();
    }
  }, 700);
}

function showQuestion() {
  summaryEl.hidden = true;
  if (feedbackEl) {
    feedbackEl.innerHTML = "";
  }
  const q = sessionQuestions[currentQuestion - 1];
  if (!q) {
    buildSessionQuestions();
    currentQuestion = 1;
  }
  const question = sessionQuestions[currentQuestion - 1];
  questionTextEl.innerHTML = question.text;
  renderAnswers(question);
  startTimer();
  typesetMath();
}

function showSummary() {
  summaryEl.hidden = false;
  const avgTime = totalTime / sessionQuestions.length;
  summaryCountEl.textContent = `Poprawne odpowiedzi: ${correctCount} / ${sessionQuestions.length}`;
  summaryTimeEl.textContent = `Średni czas na pytanie: ${avgTime.toFixed(1)} s`;
  summaryBestEl.textContent = `Najlepszy streak: ${bestStreak}`;
}

function resetSession() {
  currentQuestion = 1;
  correctCount = 0;
  totalTime = 0;
  streak = 0;
  bestStreak = 0;
  buildSessionQuestions();
  updateProgress();
  showQuestion();
}

// eventy

document.getElementById("next-btn").addEventListener("click", () => {
  if (currentQuestion < sessionQuestions.length) {
    clearInterval(timerInterval);
    finishQuestion(false, sessionQuestions[currentQuestion - 1]);
  }
});

topicSelectEl.addEventListener("change", () => {
  resetSession();
});

summaryRestartBtn.addEventListener("click", () => {
  resetSession();
});

// start
updateNavbar();
buildSessionQuestions();
updateProgress();
showQuestion();
