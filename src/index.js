module.exports = function check(str, bracketsConfig) {
    while(str !== ''){
      let k = 0;
      for (let i of bracketsConfig) {
          let brackets = i[0] + i[1];
          if (str.includes(brackets)){
              str = str.replace(brackets, '');
              k += 1;
          }
      }
      if (k === 0) break;
    }
    if (str === '') return true;
    return false;
}
