///// Дестркутуризация
// const userProfile = {
//   name: 'Alice',
//   age: 23,
//   isMaried: false
// }

// const {
//   name,
//   age
// } = userProfile

// const {
//   isMaried
// } = userProfile


// console.log(name); // тем самым мы создали переменную name и можем ее использовать
// console.log(age);


// const person = { // создали объект
//   username: 'bob',
//   age: 23
// }


// const { // использовали дестркутуризацию и вытащили св-в из объекта и создали новую переменную username
//   username
// } = person


// const sayHi = ((username) => {
//   console.log(`Hi ${username}`);
// })

// sayHi(username) // создали функцию и как агрумент передали ей нашу переменную username

const person = {
  userName: 'bob',
  age: 22,
  settings: {
    admin: true
  }
}

const {
  userName = '123'
} = person
// const userName = person.userName
// const name = person.userName


const [one, ...rest] = [1]
console.log(JSON.stringify(person));

// Spread
const user = { name: 'user' }
const copy = user

copy.name = 'test'
