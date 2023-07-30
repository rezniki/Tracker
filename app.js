let elementText = document.querySelector('.tracker__text');
let elementNumber = document.querySelector('.tracker__amount__number');
let elementButton = document.querySelector('.tracker__button');
let elementData = document.querySelector('.tracker__data');
let elementItText = document.querySelector('.tracker__item__text');
let elementItBalance = document.querySelector('.tracker__item__balance');
let elementBalance = document.querySelector('.tracker__balance__number');
let elementInBalance = document.querySelector('.tracker__income__balance');
let elementExpBalance = document.querySelector('.tracker__expense__balance'); 

let myCards = [];

let sumIncome = 0;
let sumExpense = 0;
let sumBalance = 0;

const funcMyCards = function(myCard) {
    if (myCard.number > 0) {
        sumIncome += myCard.number;
    }

    if (myCard.number < 0) {
        sumExpense += myCard.number;
    }

    sumBalance = sumIncome - sumExpense;
};

myCards.forEach(funcMyCards);

elementButton.onclick = function() {
    let newElemItem = document.createElement('div');
    newElemItem.className = 'tracker__item';
    let newElemText = document.createElement('p');
    newElemText.className = 'tracker__item__text';
    let newElemBalance = document.createElement('p');
    newElemBalance.className = 'tracker__item__balance';
    elementItText = elementText.value;
    elementItBalance = elementNumber.value;
    newElemText.textContent = elementItText;
    newElemBalance.textContent = elementItBalance;
    newElemItem.append(newElemText, newElemBalance);
    elementBalance.textContent = `$${elementItBalance}.00`; 

    let newCard = {
        text: elementItText,
        number: elementItBalance
    };

    if (elementItBalance < 0) {
        newElemItem.classList.add('negative');
        elementExpBalance.textContent = `$${elementItBalance}.00`;
    }

    if (elementItBalance > 0) {
        newElemItem.classList.add('positive');
        elementInBalance.textContent = `$${elementItBalance}.00`;
    }

    elementData.append(newElemItem);
    myCards.push(newCard);
}
