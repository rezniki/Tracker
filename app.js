let trackerText = document.querySelector('.tracker__text');
let trackerNumber = document.querySelector('.tracker__amount__number');
let trackerButton = document.querySelector('.tracker__button');
let trackerData = document.querySelector('.tracker__data');
let trackerItemText = document.querySelector('.tracker__item__text');
let trackerItemBalance = document.querySelector('.tracker__item__balance');
let trackerBalanceNumber = document.querySelector('.tracker__balance__number');
let trackerIncomeBalance = document.querySelector('.tracker__income__balance'); 

trackerButton.onclick = function() {
    let newTrackerItem = document.createElement('div');
    let newTrackerItemText = document.createElement('p');
    newTrackerItemText.className = 'tracker__item__text';
    let newTrackerItemBalance = document.createElement('p');
    newTrackerItemBalance.className = 'tracker__item__balance';
    trackerItemText = trackerText.value;
    trackerItemBalance = trackerNumber.value;
    newTrackerItemText.textContent = trackerItemText;
    newTrackerItemBalance.textContent = trackerItemBalance;
    newTrackerItem.append(newTrackerItemText, newTrackerItemBalance);
    trackerBalanceNumber.textContent = `$${trackerItemBalance}.00`;
    trackerIncomeBalance.textContent = `$${trackerItemBalance}.00`;

    if (trackerItemBalance < 0) {
        newTrackerItem.classList.add('negative');
    };

    if (trackerItemBalance > 0) {
        newTrackerItem.classList.add('positive');
    };

    trackerData.append(newTrackerItem);

}
