let elementText = document.querySelector('.tracker__text');
let elementNumber = document.querySelector('.tracker__amount__number');
let elementButton = document.querySelector('.tracker__button');
let elementData = document.querySelector('.tracker__data');
let elementBalance = document.querySelector('.tracker__balance__number');
let elementInBalance = document.querySelector('.tracker__income__balance');
let elementExpBalance = document.querySelector('.tracker__expense__balance'); 

let myCards = [];

let renderData = function() {
    const funcData = function(myCard) {
        let newElemItem = document.createElement('div');
        let newElemText = document.createElement('p');
        let newElemBalance = document.createElement('p');

        newElemItem.className = 'tracker__item';
        newElemText.className = 'tracker__item__text';
        newElemBalance.className = 'tracker__item__balance';

        newElemText.textContent = myCard.text;
        newElemBalance.textContent = myCard.balance;
        
        newElemItem.append(newElemText, newElemBalance);
        elementData.append(newElemItem);
    }

    myCards.forEach(funcData);
};

renderData();

elementButton.onclick = function() {
    let elemItText = elementText.value;
    let elemItBalance = elementNumber.value;

    let newCard = {
        text: elemItText,
        balance: +elemItBalance,
    };

    myCards.push(newCard);
    elementData.innerHTML = "";
    renderData();
    console.log(myCards);
};



