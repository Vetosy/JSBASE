///// Массивы

// const myArray = [1, 2, 3] /// первый пример создания массива

// const myArray2 = new Array(1, 2, 3) /// второй пример создания массива

// const autoBrands = ['audi', 'bmw', 'mazda'] /// создается объект в области памяти
// const autoBrandsLength = autoBrands.length // проверили длину массива
// const result = autoBrandsLength
// console.log(autoBrandsLength);

// const autoBrands2 = ['audi', 'bmw', 'mazda'] // создается еще один объект в области памяти
// const result2 = autoBrands === autoBrands2 /// мы сравниваем 2 разных объекта и получаем false
// console.log(result2);

// const autoBrands3 = autoBrands /// здесь я создал переменную и ссылаюсь на объект который был уже создан
// const result3 = autoBrands3 === autoBrands /// будет true потому что обе переменные ссылаются на один и тот же объект
// console.log(result3);


// Основные методы массивов

/// 1) Push - добавляет новый элемент в конец массива(самый популярный метод)
// const myArr = [1, 2, 3]
// myArr.push(4) /// добавили новый элемент в конец массива
// console.log(myArr);

// 2) Pop - удаляет самый последний элемент из массива
// const myArr = [1, 2, 3]
// myArr.pop() // удалили последний элемент из массива
// console.log(myArr);

// 3) Unshift - добавляет элемент в начала массива(очень редко используется обычно добавляют в конец массива через push)
// const myArr = [1, 2, 3]
// myArr.unshift(0) // добавляем элемент в начала массива
// console.log(myArr);

// 4) Shift - удаляет первый элемент массива
// const myArr = [1, 2, 3]
// myArr.shift() // удаляем первый элемент массива
// console.log(myArr);

// 5) forEach - перебирает все элементы массива и для каждого элемента массива будет вызвать функцию колбека столько раз сколько элементов в массиве
// const myArr = [1, 2, 3]
// myArr.forEach((e) => {
//   console.log(e * 2);
// })
// console.log(myArr); // при этом метод forEach не изменяет(мутирует) оригинальный массив


// 6) map - делает то же самое что и forEach но только возвращает уже новый массив
// const myArr = [1, 2, 3]

// const newArr = myArr.map((e) => {
//   const newArrPlus = e + 3
//   return newArrPlus
// })

// console.log(myArr);
// console.log(newArr);


// const myArr = [1, 2, 3]

// const myArrNew = myArr.map((e) => {
//   return e *= 3
// })

// console.log(myArrNew);
 