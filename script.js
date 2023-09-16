function validateCard() {
    let cardNumber = document.getElementById("credit-card-input").value;
  
    // Remove all non-digit characters
    let cleanedCardNumber = cardNumber.replace(/\D/g, "");
  
    // Luhn algorithm
    let sum = 0;
    let doubleUp = false;
    for (let i = cleanedCardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cleanedCardNumber.charAt(i), 10);
  
      if (doubleUp) {
        if ((digit *= 2) > 9) digit -= 9;
      }
  
      sum += digit;
      doubleUp = !doubleUp;
    }
  
    let isValid = (sum % 10) == 0;
  
    let validationResult = document.getElementById("validation-result");
    if (isValid) {
      validationResult.style.color = "green";
      validationResult.textContent = "Valid credit card number";
    } else {
      validationResult.style.color = "red";
      validationResult.textContent = "Invalid credit card number";
    }
  }
