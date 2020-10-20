module.exports = function check(str, bracketsConfig) {
    if (str.length%2 !== 0){
        return false;
     }
     while(str !== '') {
       let n=0;
    for(let i of bracketsConfig){
     let items = i[0]+i[1];
     if (str.includes(items)){
     str = str.replace(items, '')
     n += 1;
     }
     } 
     if(n===0) break;
    } 
     if (str === ''){
       return true;
     } else {
       return false;
     }
    }
      




