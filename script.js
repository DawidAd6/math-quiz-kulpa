// pełna baza pytań oparta na question.md
const questions = [
  // 01 Logika
  { topic: "logika", text: "Wskaż zdanie prawdziwe.", answers: ["dla każdej liczby rzeczywistej $x$ zachodzi $x^2 \\ge 10$","dla każdej liczby rzeczywistej $x$ zachodzi $x^2 \\ge 0$","istnieje liczba rzeczywista $x$ taka, dla której zachodzi $x^2 \\le -10$","istnieje liczba rzeczywista $x$ taka, dla której zachodzi $x^2 < 0$"], correctIndex: 1 },
  { topic: "logika", text: "Alternatywa zdań $p$ oraz $q$ to zdanie:", answers: ["$p$ lub $q$","$p$ wtedy i tylko wtedy, gdy $q$","jeżeli $p$, to $q$","$p$ i $q$"], correctIndex: 0 },
  { topic: "logika", text: "Wyrażenie logiczne $[\\sim (p \\lor q)] \\Leftrightarrow [(\\sim p) \\land (\\sim q)]$ to:", answers: ["prawo przemienności koniunkcji","prawo przemienności alternatywy","prawo kontrapozycji","prawo de Morgana"], correctIndex: 3 },
  { topic: "logika", text: "Zdanie $p \\land q$ jest prawdziwe tylko w przypadku, gdy:", answers: ["zdanie $p$ jest fałszywe, a zdanie $q$ jest prawdziwe","zdanie $p$ jest prawdziwe, a zdanie $q$ jest fałszywe","obydwa zdania $p$ oraz $q$ są prawdziwe","obydwa zdania $p$ oraz $q$ są fałszywe"], correctIndex: 2 },
  { topic: "logika", text: "W logice matematycznej liczba 0 określa:", answers: ["prawdę","fałsz"], correctIndex: 1 },
  { topic: "logika", text: "Zdanie $p \\to q$ jest fałszywe tylko w przypadku, gdy:", answers: ["zdanie $p$ jest fałszywe i zdanie $q$ jest prawdziwe","obydwa zdania $p$ i $q$ są fałszywe","zdanie $p$ jest prawdziwe i zdanie $q$ jest fałszywe","obydwa zdania $p$ i $q$ są prawdziwe"], correctIndex: 2 },
  { topic: "logika", text: "Zdanie: istnieje liczba rzeczywista $x$ taka, że dla każdej liczby rzeczywistej $y$ zachodzi równość $xy = 0$.", answers: ["jest prawdziwe","jest fałszywe"], correctIndex: 0 },
  { topic: "logika", text: "Zaprzeczeniem zdania: istnieje liczba naturalna $n$ taka, że $n^2 \\ge 10$; jest zdanie:", answers: ["dla każdej liczby naturalnej $n$ zachodzi $n^2 \\ge 10$","istnieje liczba naturalna $n$ taka, że $n^2 \\ge 10$","istnieje liczba naturalna $n$ taka, że $n^2 < 10$","dla każdej liczby naturalnej $n$ zachodzi $n^2 < 10$"], correctIndex: 3 },
  { topic: "logika", text: "Wskaż zdanie, które nie jest zdaniem logicznym.", answers: ["Liczba 21 dzieli się przez 5","Czy liczba 6 jest dzielnikiem liczby 18?","Iloczyn liczb 4 i 8 wynosi 32","Suma liczb 7 i 13 wynosi 20"], correctIndex: 1 },
  { topic: "logika", text: "Wskaż tautologię.", answers: ["$p \\land \\sim p$","$p \\Rightarrow \\sim p$","$p \\Leftrightarrow \\sim p$","$p \\lor \\sim p$"], correctIndex: 3 },

  // 02 Zbiory
  { topic: "zbiory", text: "Która z poniższych relacji nie zachodzi?", answers: ["$\\mathbb{N} \\subset \\mathbb{Z}$","$\\mathbb{R} \\subset \\mathbb{N}$","$\\mathbb{Q} \\subset \\mathbb{R}$","$\\mathbb{N} \\subset \\mathbb{Q}$"], correctIndex: 1 },
  { topic: "zbiory", text: "Iloczyn kartezjański zbiorów jest działaniem przemiennym.", answers: ["Prawda","Fałsz"], correctIndex: 1 },
  { topic: "zbiory", text: "Niech $A = \\{2\\}$ i $B = \\{3\\}$. Wówczas zbiór $A \\times B$ to:", answers: ["$\\{(3, 2)\\}$","$\\{(2, 3)\\}$","$\\{6\\}$","$\\{5\\}$"], correctIndex: 1 },
  { topic: "zbiory", text: "Niech $A = (-4, 5)$ i $B = [0, 9]$. Wówczas zbiór $A \\setminus B$ to:", answers: ["$(-4, 9]$","$[0, 5)$","$[5, 9]$","$(-4, 0)$"], correctIndex: 3 },
  { topic: "zbiory", text: "$(A \\cup B)' = A' \\cap B'$ to:", answers: ["prawo de Morgana","prawo rozdzielności dopełnienia względem sumy zbiorów","prawo łączności sumy zbiorów","prawo łączności mnożenia zbiorów","prawo podwójnego dopełnienia"], correctIndex: 0 },
  { topic: "zbiory", text: "Sumę zbiorów $A$ i $B$ oznaczamy symbolem:", answers: ["$A \\oplus B$","$A \\cap B$","$A \\subset B$","$A \\cup B$"], correctIndex: 3 },
  { topic: "zbiory", text: "Jeżeli zbiór $A$ ma 4 elementy, a zbiór $B$ ma 8 elementów, to liczba elementów zbioru $A \\times B$ wynosi:", answers: ["4","15","32","12"], correctIndex: 2 },
  { topic: "zbiory", text: "Zbiór liczb naturalnych oznaczamy literą:", answers: ["$\\mathbb{R}$","$\\mathbb{Q}$","$\\mathbb{Z}$","$\\mathbb{N}$"], correctIndex: 3 },
  { topic: "zbiory", text: "Jeżeli $A = (-\\infty, 0]$ i $B = [8, \\infty)$, to $A \\cap B$ to:", answers: ["$(-\\infty, \\infty)$","$[0, 8]$","$\\varnothing$","$(0, 8)$"], correctIndex: 2 },
  { topic: "zbiory", text: "Interpretacją geometryczną zbioru $\\mathbb{R}^2$ jest:", answers: ["kwadrat jednostkowy","przestrzeń","płaszczyzna","prosta"], correctIndex: 2 },

  // 03 Kombinatoryka
  { topic: "kombinatoryka", text: "Załóżmy, że $k, n \\in \\mathbb{N}_0$ oraz $k \\leq n$. Symbol Newtona definiujemy wzorem:", answers: ["$\\displaystyle \\binom{n}{k} = \\frac{k!}{n!(k-n)!}$","$\\displaystyle \\binom{n}{k} = \\frac{k!}{n!}$","$\\displaystyle \\binom{n}{k} = \\frac{n!}{(n-k)!}$","$\\displaystyle \\binom{n}{k} = \\frac{k!}{(k-n)!}$","$\\displaystyle \\binom{n}{k} = \\frac{n!}{k!}$","$\\displaystyle \\binom{n}{k} = \\frac{n!}{k!(n-k)!}$"], correctIndex: 5 },
  { topic: "kombinatoryka", text: "Symbol $\\displaystyle \\binom{6}{0}$ to:", answers: ["5","6","0","15","1","20","12"], correctIndex: 4 },
  { topic: "kombinatoryka", text: "W trójkącie Pascala każdy wiersz zaczyna się i kończy liczbą:", answers: ["0","1","2","3"], correctIndex: 1 },
  { topic: "kombinatoryka", text: "Ilość wszystkich permutacji zbioru $n$-elementowego wynosi:", answers: ["$2^n$","$\\displaystyle \\binom{2n}{n}$","$n!$","n","$n^2$"], correctIndex: 2 },
  { topic: "kombinatoryka", text: "W trójkącie Pascala suma dwóch kolejnych liczb w wierszu jest równa:", answers: ["sumie trzech liczb znajdujących się wiersz wyżej nad nimi","liczbie stojącej wiersz niżej pomiędzy nimi","sumie trzech liczb znajdujących się wiersz niżej pod nimi","liczbie stojącej wiersz wyżej pomiędzy nimi"], correctIndex: 1 },
  { topic: "kombinatoryka", text: "Ilość wszystkich podzbiorów zbioru $B = \\{1, 2, 3, 4, 5\\}$ wynosi:", answers: ["25","36","64","32"], correctIndex: 3 },
  { topic: "kombinatoryka", text: "Symbol $\\displaystyle \\sum_{n=-1}^{3} n^3$ to:", answers: ["15","14","35","36"], correctIndex: 2 },
  { topic: "kombinatoryka", text: "Silnia liczby $4$ to:", answers: ["16","2","24","4"], correctIndex: 2 },
  { topic: "kombinatoryka", text: "$\\displaystyle (a+b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k$ to:", answers: ["dwumian de Morgana","dwumian Newtona","dwumian Pitagorasa","dwumian Gaussa","dwumian Pascala"], correctIndex: 1 },
  { topic: "kombinatoryka", text: "Symbol $\\displaystyle \\binom{8}{2}$ to:", answers: ["32","4","28","70"], correctIndex: 2 },

  // 04 Macierze
  { topic: "macierze", text: "Wskaż macierz jednostkową.", answers: ["$\\begin{bmatrix}1 & 0 \\ 0 & 0\\end{bmatrix}$","$\\begin{bmatrix}1 & 1 \\ 1 & 1\\end{bmatrix}$","$\\begin{bmatrix}1 & 0 \\ 0 & 1\\end{bmatrix}$","$\\begin{bmatrix}0 & 0 \\ 0 & 1\\end{bmatrix}$"], correctIndex: 2 },
  { topic: "macierze", text: "Macierz kwadratowa $A$ jest macierzą osobliwą wtedy i tylko wtedy, gdy:", answers: ["$\\det A = 0$","$A = A^{-1}$","$A = A^T$","$\\det A \\neq 0$"], correctIndex: 0 },
  { topic: "macierze", text: "Która z poniższych macierzy nie jest macierzą diagonalną?", answers: ["$\\begin{bmatrix}0 & 0 \\ 0 & 5\\end{bmatrix}$","$\\begin{bmatrix}4 & 0 \\ 0 & 5\\end{bmatrix}$","$\\begin{bmatrix}4 & 0 \\ 0 & 0\\end{bmatrix}$","$\\begin{bmatrix}0 & 4 \\ 5 & 0\\end{bmatrix}$"], correctIndex: 3 },
  { topic: "macierze", text: "Dane są macierze $A = \\begin{bmatrix}4 & 0 \\ 7 & -1\\end{bmatrix}$, $B = \\begin{bmatrix}6 & 1\\end{bmatrix}$. Którego z poniższych działań nie można wykonać?", answers: ["$A \\cdot B^T$","$B \\cdot A^T$","$A - B$","$B \\cdot A$"], correctIndex: 2 },
  { topic: "macierze", text: "Wyznacznik macierzy $A = \\begin{vmatrix}8 & 0 & 4 \\ 9 & 0 & 7 \\ 3 & 0 & 5\\end{vmatrix}$ wynosi:", answers: ["100","24","412","0"], correctIndex: 3 },
  { topic: "macierze", text: "Jeżeli $A = \\begin{bmatrix}2 & 5\\end{bmatrix}$ i $B = \\begin{bmatrix}5 & 2\\end{bmatrix}$, to $A \\cdot B^T$ wynosi:", answers: ["$\\begin{bmatrix}20\\end{bmatrix}$","$\\begin{bmatrix}2 & 5\\end{bmatrix}$","$\\begin{bmatrix}2 & 5 \\ 5 & 2\\end{bmatrix}$","$\\begin{bmatrix}5 & 2\\end{bmatrix}$"], correctIndex: 0 },
  { topic: "macierze", text: "Rząd macierzy $A = \\begin{bmatrix}8 & 4 \\ 2 & 1\\end{bmatrix}$ wynosi:", answers: ["1","2","0","3"], correctIndex: 0 },
  { topic: "macierze", text: "Która z poniższych własności nie przysługuje działaniom na macierzach?", answers: ["$A \\cdot (B + C) = A \\cdot B + A \\cdot C$","$A \\cdot B = B \\cdot A$","$A \\cdot I = A$","$A + B = B + A$"], correctIndex: 1 },
  { topic: "macierze", text: "Macierz odwrotna do macierzy $A = \\begin{bmatrix}10\\end{bmatrix}$ to:", answers: ["$A^{-1} = \\begin{bmatrix}10\\end{bmatrix}$","$A^{-1} = \\begin{bmatrix}0{,}1\\end{bmatrix}$","$A^{-1} = \\begin{bmatrix}-0{,}1\\end{bmatrix}$","$A^{-1} = \\begin{bmatrix}-10\\end{bmatrix}$"], correctIndex: 1 },
  { topic: "macierze", text: "Wyznacznik macierzy $A = \\begin{vmatrix}2 & -3 \\ 4 & 5\\end{vmatrix}$ wynosi:", answers: ["-2","2","-22","22"], correctIndex: 3 },

  // 05 Układy równań
  { topic: "uklady", text: "Układ równań liniowych jest układem Cramera wtedy i tylko wtedy, gdy:", answers: ["macierz uzupełniona układu jest kwadratowa osobliwa","macierz uzupełniona układu jest kwadratowa nieosobliwa","macierz główna układu jest kwadratowa osobliwa","macierz główna układu jest kwadratowa nieosobliwa"], correctIndex: 3 },
  { topic: "uklady", text: "Układ równań liniowych $\\begin{cases}2x - 6y = -4,\\\\ x + 3y = 5\\end{cases}$ jest układem Cramera.", answers: ["Prawda","Fałsz"], correctIndex: 0 },
  { topic: "uklady", text: "Ilość wszystkich rozwiązań układu równań Cramera wynosi:", answers: ["2","\\infty","co najmniej 3","3","1","0"], correctIndex: 4 },
  { topic: "uklady", text: "Ilość wszystkich rozwiązań układu równań liniowych nie może wynosić:", answers: ["1","2","\\infty","0"], correctIndex: 1 },
  { topic: "uklady", text: "Jeżeli $A$ jest macierzą główną, a $U$ macierzą uzupełnioną układu równań liniowych, to układ ten ma rozwiązania wtedy i tylko wtedy, gdy:", answers: ["rz(A) < rz(U)","rz(A) > rz(U)","rz(A) = rz(U)"], correctIndex: 2 },
  { topic: "uklady", text: "Dla układu $\\begin{cases}2x - 6y = -4,\\\\ -x + 8y = 5\\end{cases}$ macierz główna układu to:", answers: ["$\\begin{bmatrix}-1 & 8\\\\2 & -6\\end{bmatrix}$","$\\begin{bmatrix}2 & -6 & -4\\\\-1 & 8 & 5\\end{bmatrix}$","$\\begin{bmatrix}2 & -6\\\\-1 & 8\\end{bmatrix}$","$\\begin{bmatrix}2 & 6 & 4\\\\1 & 8 & 5\\end{bmatrix}$","$\\begin{bmatrix}2 & 6\\\\1 & 8\\end{bmatrix}$","$\\begin{bmatrix}-1 & 8 & 5\\\\2 & -6 & -4\\end{bmatrix}$"], correctIndex: 2 },
  { topic: "uklady", text: "Układ $\\begin{cases}2x - 6y = -4,\\\\ -x + 3y = 5\\end{cases}$ jest układem Cramera.", answers: ["Prawda","Fałsz"], correctIndex: 1 },
  { topic: "uklady", text: "Która z poniższych operacji na wierszach macierzy nie jest operacją elementarną?", answers: ["przestawienie dwóch wierszy","pomnożenie wiersza przez liczbę różną od zera","dodanie do wiersza liczby różnej od zera","dodanie do wiersza innego wiersza"], correctIndex: 2 },
  { topic: "uklady", text: "Dla układu $\\begin{cases}2x - 6y = -4,\\\\ -x + 8y = 5\\end{cases}$ macierz uzupełniona układu to:", answers: ["$\\begin{bmatrix}2 & 6 & 4\\\\1 & 8 & 5\\end{bmatrix}$","$\\begin{bmatrix}2 & 6\\\\1 & 8\\end{bmatrix}$","$\\begin{bmatrix}2 & -6 & -4\\\\-1 & 8 & 5\\end{bmatrix}$","$\\begin{bmatrix}2 & -6\\\\-1 & 8\\end{bmatrix}$","$\\begin{bmatrix}-1 & 8 & 5\\\\2 & -6 & -4\\end{bmatrix}$","$\\begin{bmatrix}-1 & 8\\\\2 & -6\\end{bmatrix}$"], correctIndex: 2 },
  { topic: "uklady", text: "Jeżeli $U = \\begin{bmatrix}2 & -6 & -4\\\\ -1 & 8 & 5\\\\ 0 & 0 & 9\\end{bmatrix}$ jest macierzą uzupełnioną układu równań liniowych, to układ ten jest:", answers: ["oznaczony","Gaussa","nieoznaczony","sprzeczny","Cramera"], correctIndex: 3 },

  // 06 Ciągi
  { topic: "ciagi", text: "Jeżeli $a_n=n^3$, $n\\in\\mathbb{N}$, to $\\lim_{n\\to\\infty} a_n$ wynosi:", answers: ["e","0","+\\infty","-\\infty","1","\\pi","e^{-\\pi}"], correctIndex: 2 },
  { topic: "ciagi", text: "Każdy ciąg stały posiada granicę.", answers: ["Prawda","Fałsz"], correctIndex: 0 },
  { topic: "ciagi", text: "Ciąg $(a_n)_{n\\in\\mathbb{N}}$ jest ograniczony z dołu, jeżeli:", answers: ["istnieje $M\\in\\mathbb{R}$ takie, że dla każdego $n\\in\\mathbb{N}$ zachodzi warunek $a_n\\ge M","istnieje $M\\in\\mathbb{R}$ takie, że dla każdego $n\\in\\mathbb{N}$ zachodzi warunek $a_n<M","dla każdego $M\\in\\mathbb{R}$ istnieje $n\\in\\mathbb{N}$ takie, że zachodzi warunek $a_n\\ge M","dla każdego $M\\in\\mathbb{R}$ istnieje $n\\in\\mathbb{N}$ takie, że zachodzi warunek $a_n\\le M"], correctIndex: 0 },
  { topic: "ciagi", text: "Ciąg $c_n=n^4$, $n\\in\\mathbb{N}$ jest:", answers: ["rosnący","malejący"], correctIndex: 0 },
  { topic: "ciagi", text: "Ciąg $(a_n)_{n\\in\\mathbb{N}}$ jest ograniczony, jeżeli jest:", answers: ["ograniczony z góry","ograniczony z góry lub ograniczony z dołu","ograniczony z góry i ograniczony z dołu","ograniczony z dołu"], correctIndex: 2 },
  { topic: "ciagi", text: "Granica ciągu $a_n=\\left(1+\\frac{1}{n}\\right)^n$, $n\\in\\mathbb{N}$ wynosi:", answers: ["e","\\infty","1","0"], correctIndex: 0 },
  { topic: "ciagi", text: "Jeżeli ciąg $(a_n)_{n\\in\\mathbb{N}}$ jest monotoniczny i ograniczony, to jest:", answers: ["zbieżny","rozbieżny"], correctIndex: 0 },
  { topic: "ciagi", text: "Ciąg $(a_n)_{n\\in\\mathbb{N}}$ jest rosnący, jeżeli dla każdego $n\\in\\mathbb{N}$ spełnia warunek:", answers: ["$a_{n+1}=a_n$","$a_{n+1}>a_n$","$a_{n+1}<a_n$"], correctIndex: 1 },
  { topic: "ciagi", text: "Ciąg $a_n=(-1)^n$, $n\\in\\mathbb{N}$ jest:", answers: ["ograniczony","nieograniczony"], correctIndex: 0 },
  { topic: "ciagi", text: "Dobrym przybliżeniem liczby $e$ jest:", answers: ["3{,}14","2{,}71","1{,}72","0{,}33"], correctIndex: 1 },

  // 07 Funkcje jednej zmiennej
  { topic: "funkcje", text: "Funkcja $f\\colon D \\to \\mathbb{R}$ jest malejąca, jeżeli spełnia warunek:", answers: ["dla każdego $x_1, x_2 \\in D$ takiego, że $x_1 < x_2$ zachodzi warunek $f(x_1) < f(x_2)$","dla każdego $x_1, x_2 \\in D$ takiego, że $x_1 < x_2$ zachodzi warunek $f(x_1) > f(x_2)$","istnieją $x_1, x_2 \\in D$ takie, że jeżeli $x_1 < x_2$, to zachodzi warunek $f(x_1) < f(x_2)$","istnieją $x_1, x_2 \\in D$ takie, że jeżeli $x_1 < x_2$, to zachodzi warunek $f(x_1) > f(x_2)$"], correctIndex: 1 },
  { topic: "funkcje", text: "Funkcją odwrotną do funkcji $f(x)=\\frac{1}{x}$, $x \\in \\mathbb{R}\\setminus\\{0\\}$, jest funkcja:", answers: ["$f^{-1}(x)=\\frac{1}{x}$","$f^{-1}(x)=x^0$","$f^{-1}(x)=x^1$","$f^{-1}(x)=x^2$","$f^{-1}(x)=\\frac{x}{1}$"], correctIndex: 0 },
  { topic: "funkcje", text: "Dziedziną naturalną funkcji $f(x)=\\sqrt{x+5}$ jest zbiór:", answers: ["$(-5,\\infty)$","$(-\\infty,5)$","$(5,\\infty)$","$(-\\infty,5]$","$[-5,\\infty)$","$[5,\\infty)$","$(-\\infty,-5)$","$(-\\infty,-5]$"], correctIndex: 4 },
  { topic: "funkcje", text: "Funkcją odwrotną do funkcji $f(x)=\\ln x$ jest funkcja:", answers: ["$f^{-1}(x)=\\frac{1}{x}$","$f^{-1}(x)=\\ln x","$f^{-1}(x)=e^x","$f^{-1}(x)=\\log x","$f^{-1}(x)=10^x"], correctIndex: 2 },
  { topic: "funkcje", text: "Podstawą logarytmu naturalnego jest liczba:", answers: ["0","10","e","1"], correctIndex: 2 },
  { topic: "funkcje", text: "Funkcjami elementarnymi nazywamy wszystkie funkcje, które można otrzymać z podstawowych funkcji elementarnych za pomocą skończonej liczby działań arytmetycznych oraz operacji składania i odwracania funkcji.", answers: ["Prawda","Fałsz"], correctIndex: 0 },
  { topic: "funkcje", text: "Do zbioru podstawowych funkcji elementarnych należy funkcja:", answers: ["$f(x)=10^x","$f(x)=x^2","$f(x)=\\log x","$f(x)=x","$f(x)=\\ln x"], correctIndex: 3 },
  { topic: "funkcje", text: "Funkcją odwrotną do funkcji $f(x)=10^x$ jest funkcja:", answers: ["$f^{-1}(x)=e^x","$f^{-1}(x)=10^x","$f^{-1}(x)=\\ln x","$f^{-1}(x)=\\log x","$f^{-1}(x)=e^{-x}$"], correctIndex: 3 },
  { topic: "funkcje", text: "Funkcja $f\\colon X \\to Y$ jest bijekcją, jeżeli jest:", answers: ["surjekcją i injekcją","surjekcją lub injekcją","różnowartościowa","na zbiór $Y$"], correctIndex: 0 },
  { topic: "funkcje", text: "Funkcja $f\\colon (a,b) \\to \\mathbb{R}$ jest ograniczona, jeżeli jest:", answers: ["ograniczona z góry","ograniczona z góry i ograniczona z dołu","ograniczona z dołu","ograniczona z góry lub ograniczona z dołu"], correctIndex: 1 },

  // 08 Ciągłość i granice
  { topic: "ciaglosc", text: "Wszystkie funkcje elementarne są ciągłe w swoich dziedzinach naturalnych.", answers: ["fałszywe","prawdziwe"], correctIndex: 1 },
  { topic: "ciaglosc", text: "Jeżeli funkcje $f$ i $g$ są ciągłe w punkcie $x_0$, to również funkcje $f+g$, $f-g$, $f\\cdot g$ oraz $\\frac{f}{g}$, o ile $g(x_0)\\neq 0$, są ciągłe w punkcie $x_0$.", answers: ["prawdziwe","fałszywe"], correctIndex: 0 },
  { topic: "ciaglosc", text: "$\\displaystyle \\lim_{x\\to 0} 2^{x+3}-4$ wynosi:", answers: ["4","0","8","2"], correctIndex: 0 },
  { topic: "ciaglosc", text: "Funkcja $f(x)=\\operatorname{sgn}x$ ma punkt nieciągłości typu:", answers: ["skok","usunięta","osiowy","brak"], correctIndex: 0 },
  { topic: "ciaglosc", text: "Funkcja $f\\colon D\\to\\mathbb{R}$ ma w punkcie $x_0\\in D$ granicę $g$, jeżeli:", answers: ["istnieje jeden ciąg ...","dla każdego ciągu $(x_n)$ różnych od $x_0$ ciąg $(f(x_n))$ jest zbieżny do liczby $g","dla każdego ciągu $(x_n)$ zachodzi $f(x_n)=g$","istnieje ciąg $(x_n)$ taki, że $f(x_n)=g$"], correctIndex: 1 },
  { topic: "ciaglosc", text: "Jeżeli funkcja $f$ jest ciągła w przedziale $[a,b]$ oraz $f(a)\\neq f(b)$ i $c$ leży pomiędzy $f(a)$ i $f(b)$, to istnieje taki punkt pośredni $\\xi\\in(a,b)$, że $f(\\xi)=c$. Jest to:", answers: ["własność Riemanna","własność Laplace’a","własność Darboux","własność Lebesgue’a","własność Weierstrassa"], correctIndex: 2 },
  { topic: "ciaglosc", text: "$\\displaystyle \\lim_{x\\to 3} 2x^3-4$ wynosi:", answers: ["50","22","0","2"], correctIndex: 0 },
  { topic: "ciaglosc", text: "Funkcja $f(x)=[x]$, $x\\in\\mathbb{R}$:", answers: ["jest ciągła","ma nieskończenie wiele punktów nieciągłości","ma dwa punkty nieciągłości","ma jeden punkt nieciągłości","nie ma punktów nieciągłości"], correctIndex: 1 },
  { topic: "ciaglosc", text: "Funkcja $f\\colon(a,b)\\to\\mathbb{R}$ jest ciągła, jeżeli jest ciągła w każdym punkcie przedziału $(a,b)$.", answers: ["Prawda","Fałsz"], correctIndex: 0 },
  { topic: "ciaglosc", text: "Załóżmy, że funkcja $f\\colon[a,b]\\to\\mathbb{R}$ jest ciągła. Który z poniższych warunków gwarantuje, że równanie $f(x)=0$ ma rozwiązanie w przedziale $[a,b]$?", answers: ["$f(a)+f(b)>0$","$f(a)+f(b)<0$","$f(a)f(b)<0$","$f(a)-f(b)>0$","$f(a)-f(b)<0$","$f(a)f(b)>0$"], correctIndex: 2 },

  // 09 Różniczkowalność
  { topic: "pochodne", text: "Funkcja $f$ jest różniczkowalna w punkcie $x_0$, jeżeli:", answers: ["wartość funkcji $f$ w punkcie $x_0$ jest różna od $x_0$","istnieje granica funkcji $f$ w punkcie $x_0$","istnieje pochodna funkcji $f$ w punkcie $x_0","funkcja $f$ ma różnicę w punkcie $x_0"], correctIndex: 2 },
  { topic: "pochodne", text: "Każda funkcja ciągła jest różniczkowalna.", answers: ["Prawda","Fałsz"], correctIndex: 1 },
  { topic: "pochodne", text: "Jeżeli funkcja $f$ jest różniczkowalna, to jest też:", answers: ["ciągła","nieciągła"], correctIndex: 0 },
  { topic: "pochodne", text: "Pochodna funkcji $f(x)=x^5$ w punkcie $x_0=2$ wynosi:", answers: ["80","10","5","32"], correctIndex: 0 },
  { topic: "pochodne", text: "Jeżeli funkcje $f,g:(a,b)\\to\\mathbb{R}$ są różniczkowalne oraz $h(x)=f(x)g(x)$, to:", answers: ["$h'(x)=f'(x)g(x)+f(x)g'(x)$","$h'(x)=f'(x)g(x)-f(x)g'(x)$","$h'(x)=\\dfrac{f(x)}{g(x)}","$h'(x)=f'(x)g'(x)$"], correctIndex: 0 },
  { topic: "pochodne", text: "Pochodna funkcji $f:(a,b)\\to\\mathbb{R}$ w punkcie $x_0$ to liczba $f'(x_0)$ określona wzorem:", answers: ["$f'(x_0)=\\displaystyle\\lim_{x\\to x_0}\\dfrac{f(x)+f(x_0)}{x+x_0}$","$f'(x_0)=\\displaystyle\\lim_{x\\to x_0}\\dfrac{f(x)-f(x_0)}{x-x_0}$","$f'(x_0)=\\displaystyle\\lim_{x\\to x_0}\\dfrac{f(x)}{x}$","$f'(x_0)=\\displaystyle\\lim_{x\\to x_0}(f(x)-f(x_0))$","$f'(x_0)=\\displaystyle\\lim_{x\\to x_0}f(x)$"], correctIndex: 1 },
  { topic: "pochodne", text: "Pochodna funkcji $f$ w punkcie $x_0$ jest równa:", answers: ["prędkości punktu $x_0$ na wykresie","współczynnikowi kierunkowemu stycznej","kątowi nachylenia stycznej do osi $OX$","długości stycznej"], correctIndex: 1 },
  { topic: "pochodne", text: "Jeżeli pochodna funkcji elementarnej istnieje, to jest ona funkcją elementarną.", answers: ["Prawda","Fałsz"], correctIndex: 0 },
  { topic: "pochodne", text: "Pochodna funkcji $f(x)=e^x$ to:", answers: ["$f'(x)=\\log x$","$f'(x)=\\ln x$","$f'(x)=e^x$","$f'(x)=xe^{x-1}$","$f'(x)=x^e$"], correctIndex: 2 },
  { topic: "pochodne", text: "Naukowcy, którzy stworzyli rachunek różniczkowy, to:", answers: ["Leibniz","Newton","Lagrange","Pascal","Weierstrass","Laplace","Darboux","Kołmogorow"], correctIndex: 0 },

  // 10 Monotoniczność i ekstrema
  { topic: "monotonicznosc", text: "Jeżeli $f'(x) < 0$ dla każdego $x \\in (a,b)$, to funkcja $f(x)$ w przedziale $(a,b)$ jest:", answers: ["wklęsła","wypukła","malejąca","rosnąca"], correctIndex: 2 },
  { topic: "monotonicznosc", text: "Funkcja $f(x) = 100 - 10x - x^5$, $x \\in \\mathbb{R}$, jest:", answers: ["wklęsła","rosnąca","malejąca","wypukła"], correctIndex: 2 },
  { topic: "monotonicznosc", text: "Jeżeli funkcja $f:[a,b] \\to \\mathbb{R}$ jest ciągła na $[a,b]$ i różniczkowalna na $(a,b)$ oraz $f(a)=f(b)$, to istnieje liczba $c \\in (a,b)$ taka, że $f'(c)=0$. Jest to:", answers: ["Twierdzenie Laplace'a","Twierdzenie Newtona-Leibniza","Twierdzenie Rolle'a","Twierdzenie Lagrange'a"], correctIndex: 2 },
  { topic: "monotonicznosc", text: "Funkcja $f(x)=x^3$ w punkcie $x_0=0$:", answers: ["nie ma ekstremum lokalnego","ma minimum lokalne","ma maksimum lokalne"], correctIndex: 0 },
  { topic: "monotonicznosc", text: "Jeżeli funkcja $f$ jest różniczkowalna w punkcie $x_0$ i ma w tym punkcie ekstremum lokalne, to:", answers: ["$f(x_0)=0$","$f'(x_0)>0$","$f'(x_0)=0$","$f'(x_0)<0$"], correctIndex: 2 },
  { topic: "monotonicznosc", text: "Druga pochodna funkcji $f(x)=4x^3$ wynosi:", answers: ["$24x$","$12x^2$","$84x^3$","$60x^4$"], correctIndex: 0 },
  { topic: "monotonicznosc", text: "Jeżeli $f'(x_0)=0$, to funkcja $f$ ma w punkcie $x_0$ ekstremum lokalne.", answers: ["fałszywe","prawdziwe"], correctIndex: 0 },
  { topic: "monotonicznosc", text: "Jeżeli funkcja $f:[a,b] \\to \\mathbb{R}$ jest ciągła na $[a,b]$ i różniczkowalna na $(a,b)$, to istnieje liczba $c \\in (a,b)$ taka, że $f'(c)=\\frac{f(b)-f(a)}{b-a}$.", answers: ["Twierdzenie Newtona-Leibniza","Twierdzenie Rolle'a","Twierdzenie Lagrange'a","Twierdzenie Laplace'a"], correctIndex: 2 },
  { topic: "monotonicznosc", text: "Jeżeli $f''(x) > 0$ dla każdego $x \\in (a,b)$, to funkcja $f(x)$ w przedziale $(a,b)$ jest:", answers: ["rosnąca","wklęsła","malejąca","wypukła"], correctIndex: 3 },
  { topic: "monotonicznosc", text: "Funkcja $f(x)=x^{10}+x^2-6x-12$, $x \\in \\mathbb{R}$, jest:", answers: ["malejąca","wklęsła","rosnąca","wypukła"], correctIndex: 3 },

  // 11 Całki
  { topic: "calki", text: "Funkcją pierwotną dla funkcji $f(x)=e^x$ jest:", answers: ["$\\ln x$","$\\frac{e^{x+1}}{x+1}$","$xe^{x^2-1}$","$e^x-1$"], correctIndex: 3 },
  { topic: "calki", text: "Całka nieoznaczona z funkcji $f:(a,b)\\to\\mathbb{R}$ to:", answers: ["ciąg normalny podziałów odcinka $(a,b)$","granica ciągu sum całkowych Riemanna","dowolna funkcja pierwotna dla $f$","zbiór wszystkich funkcji pierwotnych dla $f$"], correctIndex: 3 },
  { topic: "calki", text: "Interpretacją geometryczną całki oznaczonej z nieujemnej funkcji $f$ jest:", answers: ["długość wykresu funkcji $f$","pole powierzchni powstałej z obrotu wykresu funkcji $f$ względem osi $OX$","pole figury ograniczonej wykresem funkcji $f$ i osią $OX$","wartość średnia funkcji $f$ w przedziale"], correctIndex: 2 },
  { topic: "calki", text: "Całka oznaczona to inaczej:", answers: ["całka Riemanna","całka Newtona-Leibniza","całka Newtona","całka Leibniza"], correctIndex: 0 },
  { topic: "calki", text: "Niech $f:[a,b]\\to\\mathbb{R}$ będzie funkcją ciągłą na $[a,b]$ i niech $\\phi(x)$ będzie dowolnie ustaloną całką nieoznaczoną z funkcji $f$. Wówczas $\\int_a^b f(x)\\,dx=\\phi(b)-\\phi(a)$ to:", answers: ["twierdzenie o wartości średniej dla całek","wzór na całkowanie przez podstawienie","wzór na całkowanie przez części","twierdzenie Newtona-Leibniza"], correctIndex: 3 },
  { topic: "calki", text: "$\\int \\sin x\\,dx$ wynosi:", answers: ["$\\cos x+C$","$\\sin x+C$","$-\\sin x+C$","$-\\cos x+C$"], correctIndex: 3 },
  { topic: "calki", text: "Czy każda funkcja ciągła posiada całkę nieoznaczoną?", answers: ["tak","nie"], correctIndex: 0 },
  { topic: "calki", text: "Załóżmy, że funkcje $F,f:(a,b)\\to\\mathbb{R}$ spełniają warunek $F'(x)=f(x)$ dla wszystkich $x\\in(a,b)$. Wówczas:", answers: ["$F(x)$ jest funkcją pierwotną dla $f(x)$","$f(x)$ jest funkcją pierwotną dla $F(x)$","$F(x)$ jest funkcją pochodną dla $f(x)$","$F(x)$ jest funkcją odwrotną dla $f(x)$"], correctIndex: 0 },
  { topic: "calki", text: "Pojęcie całki oznaczonej zostało po raz pierwszy zdefiniowane pod koniec XVII wieku przez:", answers: ["Bernharda Riemanna","niezależnie przez Isaaka Newtona i Gottfrieda Wilhelma Leibniza","Gottfrieda Wilhelma Leibniza","Isaaka Newtona"], correctIndex: 1 },
  { topic: "calki", text: "$\\int_0^1 x^{99}\\,dx$ wynosi:", answers: ["1{,}00","0{,}01","0{,}00","0{,}99"], correctIndex: 1 },

  // 12 Pochodne cząstkowe
  { topic: "pochodne_czastkowe", text: "Jeżeli pochodne mieszane funkcji $f(x,y)$ są funkcjami ciągłymi, to są sobie równe, czyli $f''_{xy}=f''_{yx}$. Jest to:", answers: ["Twierdzenie Newtona-Leibniza","Twierdzenie Newtona","Twierdzenie Schwarza","Twierdzenie Sylvestera"], correctIndex: 2 },
  { topic: "pochodne_czastkowe", text: "Przy obliczaniu pochodnych cząstkowych funkcji $f(x,y)$ stosuje się takie same reguły jak przy obliczaniu pochodnej jednej zmiennej z tym, że jeśli obliczamy pochodną cząstkową funkcji $f$ względem zmiennej $y$, to:", answers: ["obie zmienne $x,y$ traktujemy jak stałe","zmienną $x$ traktujemy jak zmienną, a zmienną $y$ jak stałą","zmienną $y$ traktujemy jak zmienną, a zmienną $x$ jak stałą"], correctIndex: 2 },
  { topic: "pochodne_czastkowe", text: "Pochodna cząstkowa funkcji $f(x,y,z)=x^7y^3z^{-2}$ względem zmiennej $x$ wynosi:", answers: ["$-2x^7y^3z^{-1}$","$3x^7y^2z^{-2}$","$-2x^7y^3z^{-3}$","$7x^6y^3z^{-2}$"], correctIndex: 3 },
  { topic: "pochodne_czastkowe", text: "Funkcja $f(x,y)=x^4+y^2$ ma w punkcie $A(0,0)$:", answers: ["punkt przegięcia","minimum lokalne","maksimum globalne","maksimum lokalne"], correctIndex: 1 },
  { topic: "pochodne_czastkowe", text: "Warunek konieczny istnienia ekstremum lokalnego funkcji $f(x,y)$ to:", answers: ["$f'_x=0$ i $f'_y=0$","$f'_x=0$ lub $f'_y=0$","$f'_x=0$","$f'_x-f'_y=0$","$f'_y=0$"], correctIndex: 0 },
  { topic: "pochodne_czastkowe", text: "Warunek wystarczający istnienia ekstremum lokalnego funkcji $f(x,y)$ w punkcie $P$ to $f'_x(P)=0$, $f'_y(P)=0$ oraz:", answers: ["$f''_{xx}(P)f''_{yy}(P)<0$","$f''_{xx}(P)f''_{yy}(P)>0$","$f''_{xx}(P)f''_{yy}(P)-(f''_{xy}(P))^2>0$","$f''_{xx}(P)f''_{yy}(P)-(f''_{xy}(P))^2<0$"], correctIndex: 2 },
  { topic: "pochodne_czastkowe", text: "Punkt stacjonarny funkcji $f(x,y)$ to punkt $P$, który spełnia warunek:", answers: ["$f'_x(P)=0$ lub $f'_y(P)=0$","$f'_x(P)>0$ i $f'_y(P)>0$","$f'_x(P)<0$ i $f'_y(P)<0$","$f'_x(P)\\cdot f'_y(P)<0$","$f'_x(P)=0$ i $f'_y(P)=0$"], correctIndex: 4 },
  { topic: "pochodne_czastkowe", text: "Pochodna cząstkowa funkcji $f(x,y,z)=x^7y^3z^{-2}$ względem zmiennej $y$ wynosi:", answers: ["$3x^7y^2z^{-2}$","$-2x^7y^3z^{-1}$","$-2x^7y^3z^{-3}$","$7x^6y^3z^{-2}$"], correctIndex: 0 },
  { topic: "pochodne_czastkowe", text: "Pochodna cząstkowa funkcji $f(x,y,z)=x^7y^3z^{-2}$ względem zmiennej $z$ wynosi:", answers: ["$7x^6y^3z^{-2}$","$-2x^7y^3z^{-3}$","$3x^7y^2z^{-2}$","$-2x^7y^3z^{-1}$"], correctIndex: 1 },
  { topic: "pochodne_czastkowe", text: "Funkcja $f(P)$ ma w punkcie $P_0$ minimum lokalne, jeżeli istnieje takie sąsiedztwo $S$ punktu $P_0$, że dla każdego $P\\in S$ spełniona jest nierówność $f(P)>f(P_0)$.", answers: ["Prawda","Fałsz"], correctIndex: 1 }
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
