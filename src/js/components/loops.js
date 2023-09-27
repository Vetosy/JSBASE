/////// Циклы

//Пример без циклов
// let i = 0 // Мы постоянно повторяем действие
// console.log(i);
// i++
// console.log(i);
// i++
// console.log(i);
// i++

// Обращаемся к индексу массива
// const myArr = [true, 'abc', 10] // не удобная запись
// console.log(myArr[0]);
// console.log(myArr[1]);
// console.log(myArr[2]);


/// Для перебора циклов и массивов используется циклы

/// Типы циклов
// for, for in , while, do while, for of

// for
// for(Начальная инструкция,Условие,Действие) {
//   // Блок кода выполняемый на каждой итерации
// }
// Пример
// for (i = 0; i < 5; i++) {
//   console.log(i);
// }
// Не рекомендуется использовать for для перебора  массива

/// Для перебора массива исполуется метод forEach

// const someString = ['adb', 'asd', 'asda']

// someString.forEach((e) => {
//   console.log(e);
// })


/// Цикл while // если будет ложь то никогда не выполнится
// while (Условие) {
//   // Блок кода выполняемый на каждой итерации пока условие правдиво
// }
// Если условие будет всегда правдиво то мы не сможем выйти из цикла
// let i = 0
// while (i < 5) {
//   console.log(i);
//   i++ /// внутри цикла должны контролировать изменения условий
// }

/// Цикл do white
// если будет ложь выполнится как минимум 1 раз
// делай что то пока условие правдиво
// do {
//   //Блок кода выполняемый на каждой итерации
// }while(Условие)

//Пример
// let i = 10

// do {
//   console.log(i);
//   i++
// } while (i < 5)


/// Цикл for in

// for (key in Object) { // key - название каждого свойства объекта, Object - название переменной нашего объекта
//   // Действие с каждым свойством объекта
//   // Значения свойства - Object[key] // получаем доступ к свойству объекта
// }

// const person = {
//   name: 'bob',
//   age: 22,
//   isMarried: false
// }

// for (const key in person) {
//   console.log(key, person[key]);
// }

// Пример
// const person = {
//   name: 'bob',
//   age: 22,
//   isMarried: false
// }

// const result = Object.keys(person) // при такой записи мы превращаем наш объект в массив и в массиве будут только ключи св-в объекта потому как мы указали keys
// console.log(result);

// const result = Object.values(person) // превращаем в массив и получаем значение массива
// console.log(result);

// const result = Object.values(person).forEach((value) => { //так как мы превратили в массив теперь можно пройтись по нему циклом forEach
//   console.log(value);
// })

/// For in для массивов

// const myArr = [true, 'abc', 10]

// for (const key in myArr) {
//   console.log(myArr[key]);
// }
/// Так делать не ремоендуется


/// Цикл for of появился с ES6
// for(Element of ..Iterable) { Iterable - любое значение или переменная по которой можно итерироватся
//   // Действия с определенным элементом
// }
// Цикл for of не для объектов !!!!!!!!!

// Строка это итерируем обьект поэтому его можно разбить на символы
// const myString = 'hey'

// for (letter of myString) {
//   console.log(letter);
// }

// интерация переменной myArr со значениями массива
// const myArr = [10, 'abc', false]

// for (item of myArr) {
//   console.log(item);
// }
// для массивов только через цикл forEach !!!!!!
