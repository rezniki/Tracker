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

    let newCard = {
        text: elementItText,
        balance: elementItBalance,
    };

    const funcMyCards = function(myCard) {
        let numberMyCard = parseInt(myCard.balance);
        if (numberMyCard > 0) {
            sumIncome += numberMyCard;
        }
    
        if (numberMyCard < 0) {
            sumExpense -= numberMyCard;
        }
    };

    myCards.forEach(funcMyCards);
    myCards.push(newCard);
    elementData.append(newElemItem);

    sumBalance = sumIncome - sumExpense;

    elementBalance.textContent = `$${sumBalance}.00`;
    elementExpBalance.textContent = `$${sumExpense}.00`;
    elementInBalance.textContent = `$${sumIncome}.00`;
};
