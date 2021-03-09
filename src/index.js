module.exports = function check(str, bracketsConfig) {
  var arr=[];
  arr.push(str[0]);
  var result;
  
  for (var i=1; i<str.length; i++){
    for (var j=0; j<bracketsConfig.length; j++){
        if (bracketsConfig[j].includes(arr[arr.length-1])){
            var num = j;
        }
    }
        
      if ((bracketsConfig[num].indexOf(str[i])==1) && 
      (bracketsConfig[num].indexOf(arr[arr.length-1])==0)){
         
         arr.pop();
       }else {
         arr.push(str[i]);
       }
       }
    
    if (arr.length===0){
        result=true;
    }else {
        result=false;
    }
    
    return result;
}
