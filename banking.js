
function getIntputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputAmount = input.value;
    const inputValue = parseFloat(inputAmount);
    // reset input field 
    input.value = '';
    return inputValue;
}

function updateTotalField(totalFieldId, givenInput) {
    const previousTotal = document.getElementById(totalFieldId);
    const currentTotal = previousTotal.innerText;
    const currentTotalValue = parseFloat(currentTotal);

    // add new deposit to previous deposit 
    const newAmount = givenInput + currentTotalValue;
    previousTotal.innerText = newAmount;
    return newAmount;
}
function updateBalance(amount, isAdd) {
    const previousBalance = document.getElementById('balance');
    const currentBalance = previousBalance.innerText;
    const totalBalance = parseFloat(currentBalance);

    if (isAdd == true) {
        const newBalance = totalBalance + amount;
        previousBalance.innerText = newBalance;
    }
    else {
        const newBalance = totalBalance - amount;
        previousBalance.innerText = newBalance;
    }
}

// deposit 
document.getElementById('deposit-btn').addEventListener('click', function () {
    
    // get input value 
    const newDepositInput = getIntputValue('deposit-amount');
   
    if (newDepositInput > 0) {
        // total deposit 
        const totalDeposit = updateTotalField('total-deposit', newDepositInput);
        // update balance 
        const myBalance = updateBalance(newDepositInput, true);
    }
})

// withdraw 
document.getElementById('withdraw-btn').addEventListener('click', function () {

    //withdraw input 
    const newWithdrawValue = getIntputValue('withdraw-amount');
    if (newWithdrawValue > 0) {
        // total withdraw 
        const totalWithdraw = updateTotalField('withdraw', newWithdrawValue);
        // reduce total balance
        const myBalance = updateBalance(newWithdrawValue, false);
    }
})