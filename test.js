const fetch = require("node-fetch")

// const test = () => {
//     let array = []
//     for (let i=0; i=200; i++){
//         let number = Math.random() * 100
//         array[i] = number
//     }
//     console.log(array)
// }

// test()

// const comments =  
//     {one: { text: 'Love this!', id: 523423 }, 
//     two: { text: 'Super good', id: 823423 }, 
//     three: { text: 'You are the best', id: 2039842 }, 
//     four: { text: 'Ramen is my fav food ever', id: 123523 }, 
//     five: { text: 'Nice Nice Nice!', id: 5423328 },
//     six: { text: 'Love this!', id: 5234223 }, 
//     seven: { text: 'Super good', id: 8234223 }, 
//     eight: { text: 'You are the best', id: 20398242 }, 
//     nine: { text: 'Ramen is my fav food ever', id: 1232523 }, 
//     ten:{ text: 'Nice Nice Nice!', id: 5423228 }}

console.log(comments)
fetch('https://api.github.com/users/BGoldenberg161')
.then(data => data.json())
.then(data => {
    console.table(data)
})
