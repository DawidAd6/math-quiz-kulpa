// Prosta baza pytań – możesz ją później rozbudować.
const questions = [
  // LOGIKA
  {
    id: "L1",
    topic: "logika",
    lecture: "Test 01 – Elementy logiki matematycznej",
    text: "W logice matematycznej liczba 0 oznacza wartość logiczną:",
    answers: [
      { label: "a", text: "prawda", correct: false },
      { label: "b", text: "fałsz", correct: true }
    ]
  },
  {
    id: "L2",
    topic: "logika",
    lecture: "Test 01 – Elementy logiki matematycznej",
    text: "Które ze zdań jest alternatywą zdań p oraz q?",
    answers: [
      { label: "a", text: "p lub q", correct: true },
      { label: "b", text: "p wtedy i tylko wtedy, gdy q", correct: false },
      { label: "c", text: "jeżeli p, to q", correct: false },
      { label: "d", text: "p i q", correct: false }
    ]
  },

  // ZBIORY
  {
    id: "Z1",
    topic: "zbiory",
    lecture: "Test 02 – Elementy teorii zbiorów",
    text: "Iloczyn kartezjański zbiorów jest działaniem:",
    answers: [
      { label: "a", text: "przemiennym", correct: false },
      { label: "b", text: "nieprzemiennym", correct: true }
    ]
  },
  {
    id: "Z2",
    topic: "zbiory",
    lecture: "Test 02 – Elementy teorii zbiorów",
    text: "Symbol N oznacza zbiór:",
    answers: [
      { label: "a", text: "liczb rzeczywistych", correct: false },
      { label: "b", text: "liczb wymiernych", correct: false },
      { label: "c", text: "liczb całkowitych", correct: false },
      { label: "d", text: "liczb naturalnych", correct: true }
    ]
  },

  // KOMBINATORYKA
  {
    id: "K1",
    topic: "kombinatoryka",
    lecture: "Test 03 – Elementy kombinatoryki",
    text: "Ile jest wszystkich permutacji zbioru n–elementowego?",
    answers: [
      { label: "a", text: "2ⁿ", correct: false },
      { label: "b", text: "n", correct: false },
      { label: "c", text: "n!", correct: true },
      { label: "d", text: "n²", correct: false }
    ]
  },
  {
    id: "K2",
    topic: "kombinatoryka",
    lecture: "Test 03 – Elementy kombinatoryki",
    text: "Silnia liczby 4 jest równa:",
    answers: [
      { label: "a", text: "4", correct: false },
      { label: "b", text: "16", correct: false },
      { label: "c", text: "24", correct: true },
      { label: "d", text: "2", correct: false }
    ]
  },

  // MACIERZE
  {
    id: "M1",
    topic: "macierze",
    lecture: "Test 04 – Macierze",
    text: "Macierz kwadratowa A jest osobliwa wtedy i tylko wtedy, gdy:",
    answers: [
      { label: "a", text: "det A ≠ 0", correct: false },
      { label: "b", text: "det A = 0", correct: true },
      { label: "c", text: "A = A⁻¹", correct: false },
      { label: "d", text: "A = Aᵀ", correct: false }
    ]
  },

  // UKŁADY RÓWNAŃ LINIOWYCH
  {
    id: "U1",
    topic: "uklady",
    lecture: "Test 05 – Układy równań liniowych",
    text: "Układ równań liniowych Cramera ma:",
    answers: [
      { label: "a", text: "dokładnie jedno rozwiązanie", correct: true },
      { label: "b", text: "dokładnie dwa rozwiązania", correct: false },
      { label: "c", text: "brak rozwiązań", correct: false },
      { label: "d", text: "nieskończenie wiele rozwiązań", correct: false }
    ]
  },

  // CIĄGI
  {
    id: "C1",
    topic: "ciagi",
    lecture: "Test 06 – Ciągi liczbowe",
    text: "Ciąg jest ograniczony, jeśli:",
    answers: [
      { label: "a", text: "jest ograniczony z góry i z dołu", correct: true },
      { label: "b", text: "jest monotoniczny", correct: false },
      { label: "c", text: "jest rosnący", correct: false },
      { label: "d", text: "jest malejący", correct: false }
    ]
  },

  // FUNKCJE
  {
    id: "F1",
    topic: "funkcje",
    lecture: "Test 07 – Funkcje jednej zmiennej",
    text: "Funkcja f jest rosnąca, jeśli dla każdego x₁, x₂ z dziedziny spełnione jest:",
    answers: [
      { label: "a", text: "x₁ < x₂ ⇒ f(x₁) < f(x₂)", correct: true },
      { label: "b", text: "x₁ < x₂ ⇒ f(x₁) > f(x₂)", correct: false },
      { label: "c", text: "x₁ > x₂ ⇒ f(x₁) < f(x₂)", correct: false }
    ]
  },

  // GRANICE / CIĄGŁOŚĆ
  {
    id: "G1",
    topic: "granice",
    lecture: "Test 08 – Ciągłość i granice funkcji",
    text: "Funkcja f jest ciągła w przedziale [a, b], jeśli:",
    answers: [
      { label: "a", text: "jest ciągła w każdym punkcie tego przedziału", correct: true },
      { label: "b", text: "ma granicę w jednym punkcie przedziału", correct: false }
    ]
  },

  // POCHODNE
  {
    id: "P1",
    topic: "pochodne",
    lecture: "Test 09 – Różniczkowalność funkcji",
    text: "Jeśli funkcja jest różniczkowalna w punkcie x₀, to:",
    answers: [
      { label: "a", text: "musi mieć tam pochodną", correct: true },
      { label: "b", text: "nie musi być tam ciągła", correct: false },
      { label: "c", text: "jest tam ciągła", correct: true } // uwaga: dwa poprawne
    ]
  },

  // EKSTREMA
  {
    id: "E1",
    topic: "ekstrema",
    lecture: "Test 10 – Monotoniczność i ekstrema lokalne",
    text: "Twierdzenie Rolle’a mówi, że jeśli funkcja jest ciągła na [a, b], różniczkowalna na (a, b) oraz f(a) = f(b), to:",
    answers: [
      { label: "a", text: "istnieje c ∈ (a, b) takie, że f′(c) = 0", correct: true },
      { label: "b", text: "funkcja jest stała", correct: false }
    ]
  },

  // CAŁKI
  {
    id: "I1",
    topic: "calki",
    lecture: "Test 11 – Całka oznaczona i nieoznaczona",
    text: "Całka oznaczona ∫ₐᵇ f(x) dx jest interpretowana geometrycznie jako:",
    answers: [
      { label: "a", text: "pole figury ograniczonej wykresem funkcji i osią OX", correct: true },
      { label: "b", text: "długość wykresu funkcji", correct: false }
    ]
  }
];

let currentQuestion = null;
let correctCount = 0;
let wrongCount = 0;

const questionTextEl = document.getElementById("questionText");
const answersListEl = document.getElementById("answersList");
const feedbackEl = document.getElementById("feedback");
const questionMetaEl = document.getElementById("questionMeta");
const topicSelectEl = document.getElementById("topicSelect");
const nextBtnEl = document.getElementById("nextBtn");
const correctCountEl = document.getElementById("correctCount");
const wrongCountEl = document.getElementById("wrongCount");

function pickRandomQuestion(topic) {
  const pool =
    topic === "all"
      ? questions
      : questions.filter((q) => q.topic === topic);

  if (pool.length === 0) {
    return null;
  }

  const idx = Math.floor(Math.random() * pool.length);
  return pool[idx];
}

function renderQuestion(q) {
  currentQuestion = q;
  answersListEl.innerHTML = "";
  feedbackEl.textContent = "";
  feedbackEl.className = "feedback";

  questionMetaEl.textContent = `${q.lecture} · ID: ${q.id}`;
  questionTextEl.textContent = q.text;

  q.answers.forEach((ans) => {
    const li = document.createElement("li");
    li.className = "answer";
    li.dataset.correct = ans.correct ? "1" : "0";

    const labelSpan = document.createElement("span");
    labelSpan.className = "answer-label";
    labelSpan.textContent = ans.label + ")";

    const textSpan = document.createElement("span");
    textSpan.className = "answer-text";
    textSpan.textContent = ans.text;

    li.appendChild(labelSpan);
    li.appendChild(textSpan);

    li.addEventListener("click", () => handleAnswerClick(li));

    answersListEl.appendChild(li);
  });
}

function handleAnswerClick(li) {
  // Jedna odpowiedź na pytanie – po kliknięciu blokujemy kolejne oceny.
  if (feedbackEl.textContent !== "") return;

  const isCorrect = li.dataset.correct === "1";
  li.classList.add(isCorrect ? "correct" : "wrong");

  if (isCorrect) {
    feedbackEl.textContent = "Dobrze! 🎯";
    feedbackEl.classList.add("correct");
    correctCount++;
  } else {
    feedbackEl.textContent = "Nie tym razem. Spróbuj kolejne pytanie.";
    feedbackEl.classList.add("wrong");
    wrongCount++;
    // podświetl poprawne odpowiedzi
    document
      .querySelectorAll(".answer")
      .forEach((el) => {
        if (el.dataset.correct === "1") {
          el.classList.add("correct");
        }
      });
  }

  correctCountEl.textContent = correctCount;
  wrongCountEl.textContent = wrongCount;
}

function loadNextQuestion() {
  const topic = topicSelectEl.value;
  const q = pickRandomQuestion(topic);
  if (!q) {
    questionTextEl.textContent =
      "Brak pytań dla wybranego tematu. Dodaj więcej do tablicy questions w script.js.";
    answersListEl.innerHTML = "";
    feedbackEl.textContent = "";
    questionMetaEl.textContent = "";
    return;
  }
  renderQuestion(q);
}

nextBtnEl.addEventListener("click", loadNextQuestion);
topicSelectEl.addEventListener("change", loadNextQuestion);

// start
loadNextQuestion();