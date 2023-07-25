let trackerText = document.querySelector('.tracker__text');
let trackerNumber = document.querySelector('.tracker__amount__number');
let trackerButton = document.querySelector('.tracker__button');

trackerButton.onclick = function() {
    let newTrackerCardIncome = document.createElement('div');
    newTrackerCardIncome.className = 'tracker__card__income';
    let newTrackerIncome = document.createElement('p');
    newTrackerIncome.className = 'tracker__income';
    let trackerButtonText = trackerText.value;
    let trackerButtonNumber = trackerNumber.value;
}
