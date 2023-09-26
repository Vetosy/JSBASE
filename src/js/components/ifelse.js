//// Условные иструкции

//// IF /////

// if(Условие) {
//   // Блок кода выполняемый однократно если Условие верно
// }

// let value = 10

// if (value > 5) {
//   value += 20
// }
// console.log(value);


// const person = {
//   age: 20
// }

// if (!person.name) {
//   console.log('Имя не указано');
// }


//// IF ELSE ////

// if(Условие) {
//   // Блок кода выполняемый однократно если Условие правдиво
// }else {
//   // Блок кода выполняемый однократно если Условие ложно
// }


/// Пример

// const a = 10
// const b = 20

// if (a < b) {
//   console.log('true');
// } else {
//   console.log('false');
// }


// let val = 10

// if (val < 5) {
//   val += 20
// } else {
//   val -= 20
// }

// console.log(val);


////// IF ELSE IF ////
// if(Условие) {
//   // Блок кода выполняемый однократно если Условие 1 правдиво
// } else if {
//   // Блок кода выполняемый однократно если Условия 2 правдиво
// }else{
//   // Блок кода выполняемый однократно если предыдущие условия ложны
// }

// const age = 22

// if (age > 18) {
//   console.log('is adult');
// } else if (age >= 12) {
//   console.log('teenager');
// } else {
//   console.log('is child');
// }


//// Предпочтительно использовать синтаксис if(Условие) его легче читать

// if (Условие1) {
//   // Блок кода выполняемый однократно если Условие 1 правдиво
// }

// if (Условие2) {
//   // Блок кода выполняемый однократно если Условие 2 правдиво
// }

// if (Условие3) {
//   // Блок кода выполняемый однократно если Условие 3 правдиво
// }

// const age = 22

// if (age >= 18) {
//   console.log('is adult');
// }

// if (age >= 12 && age < 18) {
//   console.log('teenager');
// }

// if (age < 12) {
//   console.log('is child');
// }


//// Использование if в функциях

// const sumPositiveNumbers = (a, b) => {
//   if (typeof a !== 'number' || typeof b !== 'number') { //первая проверка мы проверяем тип параметров а и b
//     return 'One of te arguments is not a number'
//   }

//   if (a <= 0 || b <= 0) { // если то что мы передали в параметры числа тогда мы проверяем а позитивные это числа или нет?
//     return 'Numbers are not positive'
//   }

//   return a + b // если в параметры мы передали числа и эти числа позитивные верни сумму этих цифр
// }

// const res = sumPositiveNumbers(1, 2) /// будет 3 потому что это цифры и они положительные(позитивные)
// const res = sumPositiveNumbers('hi', 2) /// будет 'One of te arguments is not a number' потому что одно из аргументов строка
// const res = sumPositiveNumbers(-1, 2) /// будет 'Numbers are not positive' потому что один из аргументов это не позитивное число
// console.log(res);


//// Инструкция Switch

// switch (Выражение) {
//   case A:
//     // Действие если Выражение === А
//     break
//   case B:
//     // Действие если Выражение === В
//     break
//   default:
//     // Действие по умолчанию
// }

/// Пример

// const month = 2

// switch (month) {
//   case 12:
//     console.log('Декабрь');
//     break;
//   case 1:
//     console.log('Январь');
//     break;
//   case 2:
//     console.log('Февраль');
//     break;
//   default:
//     console.log('Это не зимний месяц');
// }
// console.log(month);
 