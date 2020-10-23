module.exports = function check(str, bracketsConfig) {

  let closeBrackets = "]})>|24678";
  let openBrackets = "[{(<|13578";
  let stack = [];

  for(let bracket of str) {
    let bracketsIndexOpen = openBrackets.indexOf(bracket);
    let bracketsIndexClose = closeBrackets.indexOf(bracket);    
    if(bracketsIndexClose !== -1) {      
      if(stack.length === 0) {
        if (bracketsIndexOpen === bracketsIndexClose) {
          stack.push(bracketsIndexOpen);
        } else {          
          return false;
        }        
      } else {        
        if (stack[stack.length - 1] !== bracketsIndexClose) {
          stack.push(bracketsIndexOpen);
        } else {
          stack.pop();
        }
      }
    } else {
      if (bracketsIndexOpen !== -1) {        
        stack.push(bracketsIndexOpen);
      }
    }    
  }  
  return stack.length === 0
}
