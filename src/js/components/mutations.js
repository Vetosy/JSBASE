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
// 1 Вариант

// const person = {
//   name: 'Bob',
//   age: 30
// }

// const person2 = Object.assign({}, person)

// person2.age = 100

// console.log(person.age);
// console.log(person2.age);

// 2 Вариант

// const person = {
//   name: 'Mark',
//   age: 25,
// }

// const person2 = {
//   ...person
// }

// person2.name = 'Alice'

// console.log(person);
// console.log(person2);

// ... - оператор разделения объекта на св-ва, в данном случае на name и age


// 3 Вариант который предпологает полностью избегать мутации

// const person = {
//   name: 'Bob',
//   age: 25
// }

// const person2 = JSON.parse(JSON.stringify(person))
// person2.isMarried = true
// person2.name = 'Mark'

// console.log(person);
// console.log(person2);


// const name = 'bob'
// const lastName = 'Olegovich'
// const age = 25

// const userProfile = {
//   name,
//   lastName,
//   age,
//   isMarried: false,
//   power: 30,
//   shoto: {
//     names: 'vlad',
//     eblois: 20
//   }
// }

// const userProfileNew = JSON.parse(JSON.stringify(userProfile))

// userProfileNew.name = 'Alice'
// userProfileNew.profession = 'dev'
// delete userProfileNew.power
// userProfileNew.shoto.names = 'Serega'

// console.log(userProfile);
// console.log(userProfileNew);
