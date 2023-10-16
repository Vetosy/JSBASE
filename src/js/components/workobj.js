//// Работа с объектами
// const user = {
//   name: 'bob',
//   age: 20
// }

// / Через оператор in мы проверяем есть ли свойство в нашем объекте и на основе этого можем делать проверки
// if ('lastname' in user) {
//   console.log('Yes');
// } else {
//   user.state = null
// }

// console.log(user);

// const key = 'state'

// const user = {
//   name: 'bob',
//   age: 20
// }

// console.log(key in user); /// также можем проверить есть ли что то из переменной в нашем объекте




//////////////

/// чтобы какой то объект вписать в localStorage этот объект нужно вписать как строчку !!!!!!
// const str = JSON.stringify(user) /// переводит наш объект в строчку

// const obj = JSON.parse(str) /// переводим из строки обратно в объект
// console.log(obj);


//// пробегаем циклом по объекту
// const user = {
//   name: 'bob',
//   age: 20
// }

// for (key in user) {
//   console.log(key, user[key]); /// пробегаем по объекту и выводим ключ и значение
// }


//// Перевод объекта в массив
// const user = {
//   name: 'bob',
//   age: 20
// }

// console.log(Object.keys(user)); /// получаем массив с нашими ключами объекта,получаем только первого уровня вложенности
// console.log(Object.values(user)); /// получаем массив с нашими значениями в объекта
// console.log(Object.entries(user)); // получаем массив массивов с ключами и значениями нашего объекта
