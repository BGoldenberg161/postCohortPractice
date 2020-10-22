function validBraces(braces){
  const bracesArr = braces.split('')
  let prevBraces = []
  
  for (let i=0; i <= bracesArr.length; i++) {
    if (bracesArr[i] === '[' || bracesArr[i] === '(' || bracesArr[i] === '{'){
      prevBraces.push(bracesArr[i])
    } else if ( bracesArr[i] === ']' && prevBraces[prevBraces.length -1] === '[') {
        prevBraces.pop()
    } else if ( bracesArr[i] === ')' && prevBraces[prevBraces.length - 1] === '(') {
        prevBraces.pop()
    } else if ( bracesArr[i] === '}' && prevBraces[prevBraces.length - 1] === '{') {
        prevBraces.pop()
    } else if (bracesArr[i] === '}' || bracesArr[i] === ')' || bracesArr[i] === ']'){
        return false
    }
  }
  if (prevBraces.length > 0) return false
  else return true
}