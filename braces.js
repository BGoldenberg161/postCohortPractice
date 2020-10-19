function validBraces(braces){
    const bracesArr = braces.split('')
    prevBraces = []
    bracesArr.forEach(b => {
      if (b === '[' || b === '(' || b === '{'){
        prevBraces.push(b)
        console.log(prevBraces)
      } else if (b === ']') {
          if (prevBraces[prevBraces.length - 1] === '['){
              prevBraces.pop()
              console.log(prevBraces)
          } else {
              return false
          }
      } else if (b === ')') {
        if (prevBraces[prevBraces.length - 1] === '('){
            prevBraces.pop()
            console.log(prevBraces)
        } else {
            return false
        }
      } else if ( b === '}') {
        if (prevBraces[prevBraces.length - 1] === '{'){
            prevBraces.pop()
            console.log(prevBraces)
        } else {
            return false
        }
      }
    })
    if (prevBraces.length > 0) return false
    else return true
}

  console.log(validBraces( "}}]]))}])" ))