

// 누적 합계 구하기
const numbers = [1, 2, 3, 4, 5]

let sum = 0;
numbers.forEach(n => {
    sum += n;
})
console.log(sum)


/* reduce : 누적 합계 구하기  */
const sum = numbers.reduce((acc, current) => acc + current, 0)
console.log(sum)



const avg = numbers.reduce((acc, current, index, array) => {
    
    if( index === array.length -1) {
        return (acc + current) / array.length
    }
    return acc + current

}, 0)
console.log(sum)



/* reduce : 값 구하기  */
const alpabets = ['a', 'a', 'a', 'b', 'c', 'c', 'd', 'e']
const counts = alpabets.reduce((acc, current) => {
    if(acc[current]) { //acc.a
        acc[current] += 1

    } else {
        acc[current] = 1
    }
    return acc
}, {})

console.log(counts)