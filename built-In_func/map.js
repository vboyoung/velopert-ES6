
/* map */
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const square = n => n*n
const squared = array.map(square)

console.log('map01', squared)


//객체에서 원하는 값만 가져오기 
const items = [
    {
        id : 1,
        text: 'hello'
    },
    {
        id : 2,
        text: 'bye'
    }
]

const texts = items.map(item => item.text) 
console.log('map02', texts)




