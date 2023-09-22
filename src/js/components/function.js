//// Функции

// function myFn(a, b) {
//   let resultFn
//   a = a + 1
//   resultFn = a + b
//   return resultFn
// }

// const result = myFn(2, 3)
// console.log(result);

////////////////////////////////////////////////
// Передача значения по ссылке

// const perstonOne = {
//   name: 'Mark',
//   age: 22
// }

// function personAge(person) {
//   person.age += 1
//   return person
// }

// personAge(perstonOne)
// console.log(perstonOne.age);

/// Внутри функции мы можем мутировать внешний объект,не рекомендуется это делать

/////////////////////////////////////////
// В данном примере мы в функции создаем новый объект на базе нашего и не меняем его

// const personOne = {
//   name: 'mark',
//   age: 22
// }

// function reasePerson(person) {
//   const updatePerson = Object.assign({}, person)
//   updatePerson.age += 2
//   return updatePerson
// }

// const resultPerson = reasePerson(personOne)

// console.log(personOne.age);
// console.log(resultPerson.age);

//////////////////////////////////////////

// const personMain = {
//   name: 'Mark',
//   age: 22
// }

// function personRemake(item) {
//   const personNew = Object.assign({}, item)
//   personNew.age += 1
//   return personNew
// }

// const resultPerson = personRemake(personMain)

// console.log(personMain);
// console.log(resultPerson);

//// Значения параментров функции по умолчанию
// const myFunction = (value, multiplier = 2) => { ///можно внутри парметров присваивать дефолтное значение параметра
//   return value + multiplier
// }

// const result = myFunction(1) /// вызываем функцию с 1 аргументом
// console.log(result);
