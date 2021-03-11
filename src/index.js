module.exports = function check(str, bracketsConfig) {
  // your solution
  if(typeof str !== 'string')
  return false;

  let   length = bracketsConfig.length,
        brackets = "",
        compare = "",
        count;
  
  while (count !== length) {
    count = 0;
    
    for (i = 0; i < length; i++) {
      brackets = bracketsConfig[i][0] + bracketsConfig[i][1];
      compare = str.replace(brackets, "");
      if (str === compare) {
        count++;
      }
      str = compare;
    }
  }
   
  if (str.length === 0) {
      return true; 
    } else {
        return false;
     }
}
