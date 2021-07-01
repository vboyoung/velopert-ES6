
true && true  // true
true && false // false

true  || false // true
false || true  // true



// null은 falsy한 값

console.log(null && '여기 안본다') // null 
console.log( 1 && '여기 본다')   // and 연산자에서는 앞의 값이 truthy하면 앞은 안나오고 뒤에 연산자가 나온다. 

console.log(null || '여기 본다')  // 여기 본다
console.log( 1 || '여기 안본다') // or 연산자에서는 앞에 값이 truthy하면 뒤에 연산자가 나오지 않는다. true 이고 끝


/**
 *  결론
 *  && : true 이면 다음 true,   false 이면 끝 
 *  || : true 이고 끝,  false 이고 다음 false  (예외처리일때 사용) : falsy(null) 일때 무조건 값이 나와야되는 경우
 */


/* 기존 코드 */
const dog = {
    name: '멍멍이'
}

function getName(animal) {

    if(animal) {
        return animal.name
    }

    return undefined
}

const name01 = getName()
console.log(name01);





/*  && 연산자로 코드를 단축시켜보자  */ 

const namelessDog = {name: ''}

function getNameani (animal) {

   const name = animal && animal.name
    
    if(!name) { //name이 falsy 한 값이면 truthy한 값으로 변경 후 예외처리
        return '이름이 없는 동물입니다'
    }
    return name //thruthy 한 값이면 return 
}

const name = getNameani(namelessDog)
console.log(name)




/*  || 연산자로 코드를 더해서 더 단축시켜보자  */ 

const namelessDogPlus = {name: ''}

function getNameaniPlus (animal) {

    const name = animal && animal.name
    return name || '이름이 없는 동물입니다.'

}

const namePlus = getNameaniPlus(namelessDogPlus)
console.log(namePlus)



