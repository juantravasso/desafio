function isFibonacci(num) {
    let a = 0, b = 1, temp;
  
    if (num === 0 || num === 1) return true;
  
    while (b <= num) {
      if (b === num) {
        return true; 
      }
      
      temp = a + b;
      a = b;
      b = temp;
    }
    
    return false; 
  }
  
  const number = 21; 
  
  if (isFibonacci(number)) {
    console.log(`O número ${number} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`O número ${number} NÃO pertence à sequência de Fibonacci.`);
  }