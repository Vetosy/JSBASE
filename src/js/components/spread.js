//// Оператор ... spread

// Соединяем 2 объекта в один

// const btnInfo = {
//   text: 'Buy'
// }

// const btnStyle = {
//   color: 'black',
//   width: 200
// }

// const btn = {
//   ...btnInfo, ///
//   ...btnStyle ///
/// тем самым у нас получается в объекте btn 3 св-ва text: 'Buy' сolor: 'black'  width: 200
// }

// console.log(btn);

//// Оператор spread

// const user = {
//   name: 'bob',
//   age: 22,
//   hasCar: true
// }

// const admin = {
//   ...user, /// добавляем все ключи и значения из user
//   isAdmin: true
// }

// const user = {
//   name: 'bob',
//   age: 22,
//   hasCar: true
// }

// const admin = {
//   ...user,
//   age: 30 /// перезаписываем ключ и значение из user на свое Важно использовать правильную последовательность
// }


/// Всегда пишем ...spread самым первых в объекте

// const user = {
//   name: 'bob',
//   age: 22,
//   hasCar: true
// }

// const admin = {
//   age: 30,
//   ...user, /// теперь мы не перезапишем ключ и значение age потому что ...user находится ниже
// }

/// В объектах чем ниже значение тем они и приоритетные

// const person = {
//   name: 'bob',
//   age: 22,
//   age: 33 /// будет 33 потому что это свойство ниже
// }

// console.log(person);

// const user = {
//   name: 'bob',
//   age: 22,
//   hasCar: true
// }

// const user2 = {
//   lastname: 'ivanov'
// }

// const admin = {
//   ...user,
//   ...user2 /// можем использовать сколько угодно
// }

// console.log(admin);


// const user = {
//   name: 'bob',
//   age: 22,
//   car: {
//     model: 'mazda',
//     color: 'red'
//   }
// }

// const admin = { /// как сделать так чтобы мы перезаписали значение у admina на цвет машины зеленый
//   ...user,
//   car: {
//     ...user.car, /// берем значение car из объекта user
//     color: 'green' /// перезаписываем его
//   }
// }

// console.log(admin);


/// когда мы используем spread нужно помнить что мы просто копируем значения и НЕ мутируем оригинальный объект

// const user = {
//   name: 'bob',
//   age: 22,
//   car: {
//     model: 'mazda',
//     color: {
//       test: '1',
//       test: '2',
//       hello: 'world'
//     }
//   }
// }

// const admin = {
//   ...user,
//   car: {
//     ...user.car,
//     color: {
//       ...user.car.color, /// так мы работаем с вложенными объектами внутри объектов
//       test: 'check',
//       hello: 'hi'
//     }
//   }
// }

// console.log(admin);


/// Использование spread в массиве

// const cars = ['audi', 'nissan', 'bmw']
// const favorite = ['food', ...cars, 'code'] // если мы поместим в середину он там и будет
// console.log(favorite);
