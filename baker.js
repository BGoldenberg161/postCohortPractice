function cakes(recipe, available) {
    const ingredients = Object.keys(recipe)
    let result = 0
    // console.log(ingredients)
    // console.log(Object.keys(available).includes(ingredients[0]))

    for (let i = 0; i < ingredients.length; i++){
        if (Object.keys(available).includes(ingredients[i])){
            let currentIng = ingredients[i]
            let amount = Math.floor(available[currentIng] / Object.values(recipe)[i])

            if (i > 0){
                if (amount < result) { 
                    result = amount
                }
            } else {
                result = amount
            }
            
        } else {
            return 0
        }
    }
    return result
  }

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))