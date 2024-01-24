function squareArrayAndCopy(array, callback) {
   
    const copiedArray = array.slice();
  
    
    const squaredArray = copiedArray.map(callback);
  
    return squaredArray;
  }
  
 
  let mass = [2, 3, 4];
  
 
  function squareNumber(num) {
    return num * num;
  }
  
 
  let mass2 = squareArrayAndCopy(mass, squareNumber);
  
  console.log(mass);   
  console.log(mass2);  