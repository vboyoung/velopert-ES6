

// include 함수 사용
function isAnimal(name) {
    const animals = ['고양이', '개', '거북이', '너구리']

    //비교해주고 싶은 것을 넣어서 return
    return animals.includes(name)
}
  
console.log(isAnimal('개')) // true
console.log(isAnimal('노트북')) // false




const isAnimal = name => ['고양이', '개', '거북이', '너구리'].includes(name);

console.log(isAnimal('개')); // true
console.log(isAnimal('노트북')); // false






// 객체 만들기
function getSound(animal) {

    const sounds =  {
        개: '멍멍!',
        고양이: '야옹~',
        참새: '짹짹'
    }

    return sounds[animal] || '...?'
}

console.log(getSound('개'))


// 객체에 함수 추가하기
function makeSound(animals) {
    
    const tasks = {
        개() {
            console.log('멍멍')
        },
        고양이() {
            console.log('고양이')
        },
        비둘기() {
            console.log('구구 구구 구')
        }
    }


    const task = tasks[animal]

    if(!task) {
      console.log('...?')
    }

    task()

}

makeSound('개')



