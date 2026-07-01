// pełna baza pytań oparta na question.md (tematy: logika, zbiory, kombinatoryka, macierze, układy równań, ciągi, funkcje, ciągłość, różniczkowalność, monotoniczność, całki, pochodne cząstkowe)
const questions = [
  // Test do wykładu nr 01 - Elementy logiki matematycznej
  {
    topic: "logika",
    text: "Wskaż zdanie prawdziwe.",
    answers: [
      "dla każdej liczby rzeczywistej $x$ zachodzi $x^2 \\ge 10$",
      "dla każdej liczby rzeczywistej $x$ zachodzi $x^2 \\ge 0$",
      "istnieje liczba rzeczywista $x$ taka, dla której zachodzi $x^2 \\le -10$",
      "istnieje liczba rzeczywista $x$ taka, dla której zachodzi $x^2 < 0$"
    ],
    correctIndex: 1
  },
  {
    topic: "logika",
    text: "Alternatywa zdań $p$ oraz $q$ to zdanie:",
    answers: [
      "$p$ lub $q$",
      "$p$ wtedy i tylko wtedy, gdy $q$",
      "jeżeli $p$, to $q$",
      "$p$ i $q$"
    ],
    correctIndex: 0
  },
  {
    topic: "logika",
    text: "Wyrażenie logiczne $[\\sim (p \\lor q)] \\Leftrightarrow [(\\sim p) \\land (\\sim q)]$ to:",
    answers: [
      "prawo przemienności koniunkcji",
      "prawo przemienności alternatywy",
      "prawo kontrapozycji",
      "prawo de Morgana"
    ],
    correctIndex: 3
  },
  {
    topic: "logika",
    text: "Zdanie $p \\land q$ jest prawdziwe tylko w przypadku, gdy:",
    answers: [
      "zdanie $p$ jest fałszywe, a zdanie $q$ jest prawdziwe",
      "zdanie $p$ jest prawdziwe, a zdanie $q$ jest fałszywe",
      "obydwa zdania $p$ oraz $q$ są prawdziwe",
      "obydwa zdania $p$ oraz $q$ są fałszywe"
    ],
    correctIndex: 2
  },
  {
    topic: "logika",
    text: "W logice matematycznej liczba 0 określa:",
    answers: ["prawdę", "fałsz"],
    correctIndex: 1
  },
  {
    topic: "logika",
    text: "Zdanie $p \\to q$ jest fałszywe tylko w przypadku, gdy:",
    answers: [
      "zdanie $p$ jest fałszywe i zdanie $q$ jest prawdziwe",
      "obydwa zdania $p$ i $q$ są fałszywe",
      "zdanie $p$ jest prawdziwe i zdanie $q$ jest fałszywe",
      "obydwa zdania $p$ i $q$ są prawdziwe"
    ],
    correctIndex: 2
  },
  {
    topic: "logika",
    text: "Zdanie: istnieje liczba rzeczywista $x$ taka, że dla każdej liczby rzeczywistej $y$ zachodzi równość $xy = 0$.",
    answers: ["jest prawdziwe", "jest fałszywe"],
    correctIndex: 0
  },
  {
    topic: "logika",
    text: "Zaprzeczeniem zdania: istnieje liczba naturalna $n$ taka, że $n^2 \\ge 10$; jest zdanie:",
    answers: [
      "dla każdej liczby naturalnej $n$ zachodzi $n^2 \\ge 10$",
      "istnieje liczba naturalna $n$ taka, że $n^2 \\ge 10$",
      "istnieje liczba naturalna $n$ taka, że $n^2 < 10$",
      "dla każdej liczby naturalnej $n$ zachodzi $n^2 < 10$"
    ],
    correctIndex: 3
  },
  {
    topic: "logika",
    text: "Wskaż zdanie, które nie jest zdaniem logicznym.",
    answers: [
      "Liczba 21 dzieli się przez 5",
      "Czy liczba 6 jest dzielnikiem liczby 18?",
      "Iloczyn liczb 4 i 8 wynosi 32",
      "Suma liczb 7 i 13 wynosi 20"
    ],
    correctIndex: 1
  },
  {
    topic: "logika",
    text: "Wskaż tautologię.",
    answers: [
      "$p \\land \\sim p$",
      "$p \\Rightarrow \\sim p$",
      "$p \\Leftrightarrow \\sim p$",
      "$p \\lor \\sim p$"
    ],
    correctIndex: 3
  },

  // Test do wykładu nr 02 - Elementy teorii mnogości
  {
    topic: "zbiory",
    text: "Która z poniższych relacji nie zachodzi?",
    answers: [
      "$\\mathbb{N} \\subset \\mathbb{Z}$",
      "$\\mathbb{R} \\subset \\mathbb{N}$",
      "$\\mathbb{Q} \\subset \\mathbb{R}$",
      "$\\mathbb{N} \\subset \\mathbb{Q}$"
    ],
    correctIndex: 1
  },
  {
    topic: "zbiory",
    text: "Iloczyn kartezjański zbiorów jest działaniem przemiennym.",
    answers: ["Prawda", "Fałsz"],
    correctIndex: 1
  },
  {
    topic: "zbiory",
    text: "Niech $A = \\{2\\}$ i $B = \\{3\\}$. Wówczas zbiór $A \\times B$ to:",
    answers: [
      "$\\{(3, 2)\\}$",
      "$\\{(2, 3)\\}$",
      "$\\{6\\}$",
      "$\\{5\\}$"
    ],
    correctIndex: 1
  },
  {
    topic: "zbiory",
    text: "Niech $A = (-4, 5)$ i $B = [0, 9]$. Wówczas zbiór $A \\ackslash B$ to:",
    answers: [
      "$(-4, 9]$",
      "$[0, 5)$",
      "$[5, 9]$",
      "$(-4, 0)$"
    ],
    correctIndex: 3
  },
  {
    topic: "zbiory",
    text: "Równość $(A \\cup B)' = A' \\cap B'$ to:",
    answers: [
      "prawo de Morgana",
      "prawo rozdzielności dopełnienia względem sumy zbiorów",
      "prawo łączności sumy zbiorów",
      "prawo łączności mnożenia zbiorów",
      "prawo podwójnego dopełnienia"
    ],
    correctIndex: 0
  },
  {
    topic: "zbiory",
    text: "Sumę zbiorów $A$ i $B$ oznaczamy symbolem:",
    answers: ["$A \\oplus B$", "$A \\cap B$", "$A \\subset B$", "$A \\cup B$"],
    correctIndex: 3
  },
  {
    topic: "zbiory",
    text: "Jeżeli zbiór $A$ ma 4 elementy, a zbiór $B$ ma 8 elementów, to liczba elementów zbioru $A \\times B$ wynosi:",
    answers: ["4", "15", "32", "12"],
    correctIndex: 2
  },
  {
    topic: "zbiory",
    text: "Zbiór liczb naturalnych oznaczamy literą:",
    answers: ["$\\mathbb{R}$", "$\\mathbb{Q}$", "$\\mathbb{Z}$", "$\\mathbb{N}$"],
    correctIndex: 3
  },
  {
    topic: "zbiory",
    text: "Jeżeli $A = (-\\infty, 0]$ i $B = [8, \\infty)$, to $A \\cap B$ to:",
    answers: [
      "$(-\\infty, \\infty)$",
      "$[0, 8]$",
      "$\\varnothing$",
      "$(0, 8)$"
    ],
    correctIndex: 2
  },
  {
    topic: "zbiory",
    text: "Interpretacją geometryczną zbioru $\\mathbb{R}^2$ jest:",
    answers: ["kwadrat jednostkowy", "przestrzeń", "płaszczyzna", "prosta"],
    correctIndex: 2
  }

  // kolejne tematy (kombinatoryka, macierze, układy równań, ciągi, funkcje itd.) można dopisać analogicznie na podstawie question.md
];

let currentQuestion = 1;
const totalQuestions = 10;
let streak = 0;
let correctCount = 0;
let totalTime = 0;
let bestStreak = 0;
let timeLeft = 30;
let timerInterval;

// statystyki globalne w navbarze, trzymane w localStorage
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
  finishQuestion(isCorrect);
}

function finishQuestion(isCorrect) {
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
updateNavbar();
buildSessionQuestions();
updateProgress();
showQuestion();
