/// Мутации в JS

// const person = {
//   name: 'bob',
//   age: 23
// }

// person.name = 'Mark' /// изменили наше значение ключа name
// person.isMarride = false // добавили новое свойство

// // тем самым мы мутировали объект в JS
// // это возможно потому что объект это имеет ссылочный тип


// console.log(person);


/// Мутирование копии

// const person = {
//   name: 'Mark',
//   age: 25
// }

// const person2 = person

// person2.age = 30
// person2.isMarride = true

// console.log(person.age);


/// Как избежать мутации объектов

// const person = {
//   name: 'Bob',
//   age: 30
// }

// const person2 = Object.assign({}, person)

// person2.age = 100

// console.log(person.age);
// console.log(person2.age);
