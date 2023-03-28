function makeChange() {
    const coins = {
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    };
  
    const changeInput = document.getElementById('changeAmount');
    const quartersOutput = document.getElementById('quarters');
    const dimesOutput = document.getElementById('dimes');
    const nickelsOutput = document.getElementById('nickels');
    const penniesOutput = document.getElementById('pennies');
  
    let change = parseInt(changeInput.value, 10);
    
    coins.quarters = Math.floor(change / 25);
    change %= 25;
    coins.dimes = Math.floor(change / 10);
    change %= 10;
    coins.nickels = Math.floor(change / 5);
    change %= 5;
    coins.pennies = Math.floor(change / 1);
  
    quartersOutput.value = coins.quarters;
    dimesOutput.value = coins.dimes;
    nickelsOutput.value = coins.nickels;
    penniesOutput.value = coins.pennies;
  }

  const calculateButton = document.getElementById('calculateChange');
calculateButton.addEventListener('click', makeChange);