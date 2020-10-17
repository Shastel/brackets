module.exports = function check(str, bracketsConfig) {
  if (str.length<=1&&str.length%2!==0) return false;
  
  let oppositeBracket,ch;
  let stack=[];

  let openingBrackets=[];
  let closingBrackets=[];
  let sameBrackets=[];

  bracketsConfig.forEach(element => {
    if(element[0]===element[1]) {
      sameBrackets.push(element[0]);
      return;
    }
    openingBrackets.push(element[0]);
    closingBrackets.push(element[1]);
  });
  
  for (let i = 0; i < str.length; i++) {
    ch = str[i];

    if(sameBrackets.includes(ch)) {
      stack[stack.length -1] === ch ? stack.pop() : stack.push(ch);
      continue;
    };
   
    if (closingBrackets.includes(ch)) {
      oppositeBracket = openingBrackets[closingBrackets.indexOf(ch)];
      if (stack.length == 0 || ( stack.pop()!= oppositeBracket)) {
        
        return false;
      }
    } else {
      stack.push(ch);
    }
  }
  
  return (stack.length == 0);
}

