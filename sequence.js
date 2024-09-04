var sequenceA = [1, 3, 5, 7];
sequenceA.push(sequenceA[sequenceA.length - 1] + 2); 
console.log(sequenceA);

var sequenceB = [2, 4, 8, 16, 32, 64];
sequenceB.push(sequenceB[sequenceB.length - 1] * 2);
console.log(sequenceB);

var sequenceC = [0, 1, 4, 9, 16, 25, 36];
sequenceC.push(Math.pow(sequenceC.length, 2)); 
console.log(sequenceC);

var sequenceD = [4, 16, 36, 64];
sequenceD.push(Math.pow(sequenceD.length + 2, 2)); 
console.log(sequenceD);

var sequenceE = [1, 1, 2, 3, 5, 8];
sequenceE.push(sequenceE[sequenceE.length - 1] + sequenceE[sequenceE.length - 2]); 
console.log(sequenceE);

var sequenceF = [2, 10, 12, 16, 17, 18, 19];
sequenceF.push(200); 
console.log(sequenceF);
