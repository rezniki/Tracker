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

elementButton.onclick = function() {
    let newCard = {
        text: elementItText,
        balance: +elementItBalance,
    };

    myCards.push(newCard);
    console.log(myCards);
};

let renderData = function() {
    const funcData = function(myCard) {
        let newElemItem = document.createElement('div');
        newElemItem.className = 'tracker__item';
        let newElemText = document.createElement('p');
        newElemText.className = 'tracker__item__text';
        let newElemBalance = document.createElement('p');
        newElemBalance.className = 'tracker__item__balance';
        newElemText.textContent = myCard.value;
        newElemBalance.textContent = myCard.value;
        newElemItem.append(newElemText, newElemBalance);
        elementData.append(newElemItem);
    }

    myCards.forEach(funcData);
};

renderData();

