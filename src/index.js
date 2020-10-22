module.exports = function check(str, bracketsConfig) {
  let string = '';
  let count = 0;

  while(str != '') {
      count = 0;
      for(let i of bracketsConfig) {
          string = i[0] + i[1];
          
          if(str.includes(string)) {
              str = str.replace(string, '');
              count = 1;
          }
      }
      if(count == 0) break;
  }

  if (str == '') {return true} 
  return false;
}
