
/* 매개변수 지정 방법 */

//매개변수가 없을 경우
const none = () => {  }
const sayHello = () => console.log('Hello')


//매개변수가 한개인 경우, 소괄호 생략
const one = x => {  }


//매개변수가 여러개인 경우, 소괄호를 생략할 수 없다.
const multi = (x, y) => {  }





/* 함수 몸체 지정방법 */

//singleline block
const single = x => { return x * x}


//함수 몸체가 한줄 구문이라면 중괄호 생략. 암묵적으로 return (위 표현과 동일)
const single = x =>  x * x


//객체 반환 시 소괄호를 사용한다.
const getPersonData = ( ) => ({
	name: 'John Doe',
	age: 34,
	job: 'programmer',
})


//multi line block
const myArrowFunction = (arg1, arg2) => {
    console.log('hello');
    return arg1 + arg2;
}