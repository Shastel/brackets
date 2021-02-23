module.exports = function check(str, bracketsConfig) {	


	function f(closeBr) {
		let arr = str.split('')
		let countSimilar = 0
		for (let i = 0; i < arr.length; i++) {
			

			if (arr[i] == closeBr) {
				countSimilar += 1
				if ( countSimilar % 2 == 0) {
				
					arr[i] = '-'
					
		
				}
			}
			
						
		}

		return arr.join('')
		
	}


	 
	function closeOpen(open) {
		
		let bracketsArray = []

		if (open == 1) {
			
			for (let i = 0; i < bracketsConfig.length; i++) {
				bracketsArray.push(bracketsConfig[i][0])
			}
			
		} else {
			
			for (let i = 0; i < bracketsConfig.length; i++) {
				if (bracketsConfig[i][1] == bracketsConfig[i][0]) {
					
					bracketsConfig[i][1] = '-'	
					 
				}
				
				bracketsArray.push(bracketsConfig[i][1])
			}

		}
		
		return bracketsArray

	}


	for (let i = 0; i < bracketsConfig.length; i++) {
		if (bracketsConfig[i][0] == bracketsConfig[i][1]) {
			
			str = f(bracketsConfig[i][1])

			bracketsConfig[i][1] = '-'	
			 
		}
		
	}

	let stack = []
	let chars = str.split('')
	
	let open = closeOpen(1)
	
	let close = closeOpen(0)
	
	let openIndex, closeIndex 

	
	
	
	for (let i = 0; i < chars.length; i++) {
	

		openIndex = open.indexOf(chars[i]) 
		
		
		if (openIndex !== -1) {
			stack.push(openIndex)
			continue
		}
		
		closeIndex = close.indexOf(chars[i]) 
		
		if (closeIndex !== -1) {
 
			openIndex = stack.pop()
			
			if (closeIndex !== openIndex) {
				return false
			} 
		}
		
	}
	
	if (stack.length !== 0) {
		
		return false
	}

	return true
}