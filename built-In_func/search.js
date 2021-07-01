
/* indexOf : 배열에서 사용, 위치 찾기 */
const superheros = ['아이언맨', '캡틴아메리카', '토르', '닥터스트레인지' ]
const index = superheros.indexOf('토르')
console.log(index)


/* findIndex : 객체일때 사용, 위치 찾기 */
const todos = [
    {
      id: 1,
      text: '자바스크립트 입문',
      done: true
    },
    {
      id: 2,
      text: '함수 배우기',
      done: true
    },
    {
      id: 3,
      text: '객체와 배열 배우기',
      done: true
    },
    {
      id: 4,
      text: '배열 내장함수 배우기',
      done: false
    }
  ];

const index = todos.findIndex(todo => todo.id === 3)
console.log(index)



/* find : 객체 찾기 */
const todo = todos.find(todo => todo.id === 3)
console.log(todo);



/* fiter */
const tasksNotDone = todos.filter(todo => todo.done === false);
console.log(tasksNotDone)

