function letterA(str) {
    let count = 0;
  
    for (let char of str) {
      if (char.toLowerCase() === 'a') {
        count++;
      }
    }
  
    return count;
  }
  
  const inputString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing"; 
  
  const count = letterA(inputString);
  
  if (count > 0) {
    console.log(`A letra 'a' aparece ${count} vezes na string.`);
  } else {
    console.log("A letra 'a' não aparece na string.");
  }
  