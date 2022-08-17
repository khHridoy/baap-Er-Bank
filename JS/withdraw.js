/* ----FOR WITHDRAW---
in module 26

document.getElementById('withdraw-btn').addEventListener('click', function () {
    //take withdraw input field value
    const inputField = document.getElementById("withdraw-field");
    const newWithdrawAmount = inputField.value;

    //get total from balance
    const balanceValue = document.getElementById('total-amount');
    const prevTotalBalance = balanceValue.innerText;

    //check available balance greater than withdraw amount
    if (parseFloat(prevTotalBalance) >= parseFloat(newWithdrawAmount)) {
        //get current withdraw value
        const withdrawValue = document.getElementById("withdraw-amount");
        const prevWithdrawAmount = withdrawValue.innerText;

        //adding new and prev withdraw amount
        const totalWithdraw = parseFloat(newWithdrawAmount) + parseFloat(prevWithdrawAmount);

        //set total withdraw in withdraw value
        withdrawValue.innerText = totalWithdraw;



        //add previous total balance+ new withdraw balance
        const newTotalBalance = parseFloat(prevTotalBalance) - parseFloat(newWithdrawAmount);

        //set total blance
        balanceValue.innerText = newTotalBalance;

        //clear deposit input field
        inputField.value = "";
    }
    else {
        alert('Bap er bank e ato taka nai')
    }


})*/

//for module 27 optimizing the code using function
//all function are utilities.js

document.getElementById('withdraw-btn').addEventListener('click', function () {
    //get withdraw value
    const newWithdrawAmount = getInputValueByID('withdraw-field');

    //get previous withdraw amount
    const prevWithdrawAmount = getElementValueByID('withdraw-amount');

    //calculate new withdraw total
    const newWithdrawTotal = newWithdrawAmount + prevWithdrawAmount;

    //set new total withdraw
    setElementValueByID('withdraw-amount', newWithdrawTotal);

    //get total balance
    const prevTotalBalance = getElementValueByID('total-amount');

    //calculate total balance after withdraw
    const newTotalBalance = prevTotalBalance - newWithdrawAmount;

    //set total balance
    setElementValueByID('total-amount', newTotalBalance);
})