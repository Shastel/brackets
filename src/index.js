module.exports = function check(str, bracketsConfig) {

  let pattern = [];

  for(let i = 0; i < bracketsConfig.length; i++ ){
    pattern.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
  }
  
  for (let i = 0; i < pattern.length; i++) {
    if (str.includes(pattern[i])) {
      str = str.replace(pattern[i], "");
      i = -1;
    }
  }
  return !str.length;
}
