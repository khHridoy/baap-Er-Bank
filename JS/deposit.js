/* ----FOR DEPOSIT---- 
in module 26

document.getElementById("deposit-btn").addEventListener("click", function () {
    //take deposit input field value
    const inputField = document.getElementById("deposit-field");
    const newDepositAmount = inputField.value;

    //get current deposit value
    const depositValue = document.getElementById("deposit-amount");
    const prevDepositAmount = depositValue.innerText;

    //adding new and prev deposit amount
    const totalDeposit = parseFloat(newDepositAmount) + parseFloat(prevDepositAmount);

    //set total deposit in deposit value
    depositValue.innerText = totalDeposit;

    //get total from balance
    const balanceValue = document.getElementById('total-amount');
    const prevTotalBalance = balanceValue.innerText;

    //add previous total balance+ new deposit balance
    const newTotalBalance = parseFloat(newDepositAmount) + parseFloat(prevTotalBalance);

    //set total blance
    balanceValue.innerText = newTotalBalance;

    //clear deposit input field
    inputField.value = "";
});*/

// for module 27. optimizing the code using function
//all function are utilities.js

document.getElementById('deposit-btn').addEventListener('click', function () {
    //get deposit value
    const newDepositAmount = getInputValueByID('deposit-field');

    //get previous deposit amount
    const prevDepositAmount = getElementValueByID('deposit-amount');

    //calculate new deposit total
    const newDepositTotal = newDepositAmount + prevDepositAmount;

    //set new total deposit
    setElementValueByID('deposit-amount', newDepositTotal);

    //get total balance
    const prevTotalBalance = getElementValueByID('total-amount');

    //calculate total balance after deposit
    const newTotalBalance = prevTotalBalance + newDepositAmount;

    //set total balance
    setElementValueByID('total-amount', newTotalBalance);
})