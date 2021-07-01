

// TypeError: Cannot read property 'name' of null 

function print(person) {
    if (person === undefined) {
      console.log('person이 없네요');
      return;
    }
    console.log(person.name);
  }
  
const person = null;
print(person);




/**
 *  javascript에서 undefined, null은 Falsy 한 값이다.
 *  Falsy 한 값 앞에 느낌표를 붙여주면 Truthy로 전환된다.
 *  이는 즉 undifined, null일 경우 동작하게 조건문을 동작시킨다.
 *  
 *  앞으로 null , undifined  check는 아래와 같이 하기
 */


console.log(!undefined)  // undefined true
console.log(!null)  //null true
console.log(!0)
console.log(!'')
console.log(!NaN)


function print(person) {

    //null, undifined 예외처리 
    if (!person) {
      console.log('person이 없네요');
      return;
    }
    console.log(person.name);
    
  }
  
  const person = null;
  print(person);






/**
 * 삼항 연산자를 이용
 * 
 */

const value = { a: 1 };
const truthy = !!value

if (value) {
  console.log('value 가 Truthy 하네요.');
}



const value = { a: 1 };
const truthy = value ? true : false

if (value) {
  console.log('value 가 Truthy 하네요.');
}

