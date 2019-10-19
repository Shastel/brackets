module.exports = function check(str, bracketsConfig) {
  let array = [];
	for(let i = 0; i<str.length; i++){
	  	for(let k = 0; k<bracketsConfig.length; k++){
	  		if (str[i] === bracketsConfig[k][0] && str[i] === bracketsConfig[k][1]) { // for duble brackets
	  			if (array[array.length-1] === str[i]){
	  					array.pop();
	  			} else {
	  				array.push(str[i]);
	  			} 
	  		}
	  		else if (str[i] === bracketsConfig[k][0]) {
	  			array.push(k+1);
	  		}
	  		else if (str[i] === bracketsConfig[k][1]){
	  			if ((array[array.length-1] - (k+1)) === 0){
	  				array.pop();
	  			} 
	  			else {
	  				return false;
	  			}
	  		}
	  	}
	}
	return array.length === 0 ? true : false;
}
