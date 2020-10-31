//declares function to calculate salary
function calculateWage(hours, extraPay) {

    const rate = 1000;
    var hours = parseInt(document.getElementById("hoursWorked").value); 

  //if hours worked for is greater or equals to 4 hours
    if (hours > 4){
        extraPay = (hours - 4) * 200;
        workpay = (hours * rate) + extraPay;

        document.getElementById("wage_result").innerHTML = "You earned overtime today! Your total pay is " + workpay + " Naira.";
    }

    else {
        workpay = (rate * hours);
        document.getElementById("wage_result").innerHTML = "Your total pay is " + workpay + " Naira.";
    }
}

calculateSalary();