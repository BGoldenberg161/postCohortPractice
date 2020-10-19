// const array1 = ['hello', 'hi']
// const array2 = ['world', 'bye']

const array1 = ['ab', 'cd', 'ef']
const array2 = ['af', 'ee', 'ef']


function commonSubstring(a, b) {
    // Write your code here
    for (let i = 0; i < a.length; i ++) {
        for (let j = 0; j < a[i].length; j ++) { 
            if (b[i].includes(a[i][j])){
                console.log('YES')
                break
            } else if (i == a[i].length - 1){
                console.log('NO')
                break
            }
        } 
    }
}
commonSubstring(array1, array2)