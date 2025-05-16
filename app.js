/* ---------------- DOM-элементы ---------------- */
let elementText = document.querySelector('.tracker__text');
let elementNumber = document.querySelector('.tracker__amount__number');
let elementButton = document.querySelector('.tracker__button');
let elementData = document.querySelector('.tracker__data');
let elementBalance = document.querySelector('.tracker__balance__number');
let elementInBalance = document.querySelector('.tracker__income__balance');
let elementExpBalance = document.querySelector('.tracker__expense__balance');

/* ---------------- Данные ---------------- */
// При первом запуске читаем localStorage, иначе пустой массив
let myCards = JSON.parse(localStorage.getItem('transactions')) || [];

/* ---------------- Сервисные функции ---------------- */
// Сохраняем массив в localStorage
function saveToLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(myCards));
};

// Очистка старого списка и пересчёт цифр
function renderData() {
    elementData.innerHTML = '';
    let sumIncome = 0;
    let sumExpense = 0;

    myCards.forEach(card => {
        /* --- создаём DOM-элементы --- */
        let item = document.createElement('div');
        let delBtn = document.createElement('button');
        let textP = document.createElement('p');
        let balP = document.createElement('p');

        item.className = 'tracker__item';
        delBtn.className = 'tracker__delete__button';
        textP.className = 'tracker__item__text';
        balP.className = 'tracker__item__balance';

        textP.textContent = card.text;
        balP.textContent  = card.balance;

        /* --- стили и суммы --- */
        if (card.balance > 0) {
            item.classList.add('positive');
            sumIncome += card.balance;
        } else {
            item.classList.add('negative');
            sumExpense += card.balance;
        }

        /* --- кнопка удаления --- */
        delBtn.dataset.id = card.id;
        delBtn.onclick = () => {
            myCards = myCards.filter(c => c.id !== card.id);
            saveToLocalStorage();
            renderData();
        };

        /* --- собираем и вставляем --- */
        item.append(delBtn, textP, balP);
        elementData.append(item);
    });

    /* --- вывод сумм --- */
    const total = sumIncome + sumExpense;
    elementBalance.textContent = `$${total}.00`;
    elementInBalance.textContent = `$${sumIncome}.00`;
    elementExpBalance.textContent = `$${sumExpense}.00`;
};

/* ---------------- первичный рендер ---------------- */
document.addEventListener('DOMContentLoaded', renderData);

/* ---------------- обработчик добавления ---------------- */
elementButton.onclick = () => {
    const text = elementText.value.trim();
    const value = Number(elementNumber.value);

    if (!text || isNaN(value) || value === 0) return; // простая валидация

    myCards.push({
        id: Date.now(),
        text,
        balance: value
    });

    elementText.value = '';
    elementNumber.value = '';

    saveToLocalStorage();
    renderData();
};

// Переключение темы
const themeToggle = document.getElementById('theme-toggle');
themeToggle.onclick = () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
};

    // Установка темы при загрузке
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || light;
    document.documentElement.setAttribute('data-theme', savedTheme);
});




