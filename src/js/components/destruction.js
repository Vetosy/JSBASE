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

// const person = {
//   userName: 'bob',
//   age: 22,
//   settings: {
//     admin: true
//   }
// }

// const {
//   userName = '123'
// } = person
// // const userName = person.userName
// // const name = person.userName


// const [one, ...rest] = [1]
// console.log(JSON.stringify(person));


/////////////////////////
// const person = {
//   username: 'bob',
//   age: 22,
//   settings: {
//     admin: true
//   }
// }

// const {
//   username = 'alice'
// } = person //Если свойство username существует в объекте person, то значение будет присвоено переменной username. Если свойство отсутствует, переменной username будет присвоено значение 'alice' по умолчанию

// console.log(username);


//// Деструктуризация массивов

// const fruits = ['apple', 'banana']

// const [fruitsOne, fruitsTwo] = fruits /// важно учитывать порядок переменных при деструктуризации в массивах!!

// console.log(fruitsOne);
// console.log(fruitsTwo);


//// Деструктуризация функций
// const userProfile = {
//   name: 'bob',
//   value: 20,
//   isMarride: false
// }

// const userInfo = ({name,value}) => {
//   if (!value) { //если не value то ...
//     return `user ${name} has no comments`
//   }

//   return `user ${name} has ${value} comments`
// }

// const res = userInfo(userProfile)
// console.log(res);


// const userProfile = {
//   name: 'bob',
//   value: 20,
//   isMarride: false
// }

// const userInfo = (userProfile) => {
//   const {name, value} = userProfile /// можно использовать деструктуризацию внутри функции таким способом

//   if(!value) {
//     return `user ${name} has no commets`
//   }

//   return `user ${name} has ${value}`

// }

// const res = userInfo(userProfile)
// console.log(res);

///// Деструктуризация

// const test = [1, 2, 3, 4, 5]
// const obj = {
//   user_name: 1, /// иногда с серва могу прилетать вот такие вот значение в объектах
//   user_age: 2,
//   c: 3
// }

// const [one, two, three, four] = [1, 2, 3, 4] /// когда мы задаем значение переменным очень важно соблюдать порядок

// const {
//   user_name,
//   user_age
// } = {
//   user_name: 'bob',
//   user_age: 2
// }

// const [, , jack] = ['alex', 'bob', 'jack'] /// пропускаем бесполезные переменные которые нам не нужны
// const {
//   user_name
// } = {
//   user_name: 'bob',
//   user_age: 2
// } /// в объектах можно не ставить , тут сразу указываем какой объект нам нужно достать

// const SERVER_ARRAY = ['alex', 20] /// запрос с сервера,где последнее значение пропадает
// const [userName, userAge, hasCar = true] = SERVER_ARRAY /// задаем значение по умолчанию для hasCar

// const SERVER_OBJ = {
//   user_name: 'alex',
//   user_age: 20
// }

// const {
//   user_name = 'unknown', /// ставим значение по умолчанию
//     user_age = 0
// } = SERVER_OBJ

//  


// const [firstName] = SERVER_ARRAY /// в массиве переменовываем первый элемент т.к они идут по индексу с этим проблем нет

// const {
//   user_name: userName ///таким образом переменовали ключ по которому достаем значение, через :
// } = SERVER_OBJ
