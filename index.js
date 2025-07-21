function calculateTip(event) {
  event.preventDefault;
  const billAmount=parseFloat(document.getElementById("billAmount").value);
  const tipPercentage=parseFloat(document.getElementById("tipPercentage").value);
  const tipAmount=(document.getElementById("tipAmount"));
  const totalAmount=(document.getElementById("totalAmount"));
  const error=(document.getElementById("errorMessage"));
  console.log(billAmount);

  if(isNaN(billAmount) || isNaN(tipPercentage) || billAmount<0 ||  tipPercentage<0) {

    error.textContent="Plesae enter valid number for bill amount and tip Percentage.";
    tipAmount.value="";
    totalAmount.value="";
    return;
}



  const tip=(billAmount*tipPercentage)/100;
  const total=(billAmount+tip);
  tipAmount.value=tip.toFixed(2);
  totalAmount.value=total.toFixed(2);
  errorMessage.textContent="";
}