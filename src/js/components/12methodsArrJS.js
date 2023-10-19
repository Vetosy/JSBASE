//// 20 методов массивов которые ты должен знать идеально

// 1) forEach - перебор всех элементов массива и манипуляциях с ними
/// он ничего не возвращает ЗАПОМНИТЬ
// const arr = [1, 2, 3, 4, 5]

// arr.forEach((number, index, arr) => { //number принимает сами элементы,index это индекс этих элементов,arr это сам массив этих элементов(редко)
//   console.log(number, index, arr); /// не мутирует массив или объект
// })

/// 2) map - это перебор элементов массива и возврат нового массива на основе текущего (без мутации основного массива)
/// по длине он будет точно такой же как и основной массив

// const arr = [1, 2, 3, 4, 5]

// const newArr = arr.map((number, index, arr) => {
//   return number += 1
// })
// console.log(newArr);

/// 3) reduce - перебор элементов массива и возврат новой структуры данных



// acc = {} number = 1 index = 0 на первой итерации
// acc = {'1': 0} на второй итерации

// const arr = [1, 2, 3, 4, 5]

// const something = arr.reduce((acc, number, index, arr) => {
//   acc[number] = index
//   return acc
// }, {})

// console.log(something);


// const arr = [1, 2, 3, 4, 5]

// const something = arr.reduce((acc, number) => {
//   acc.push(number * 2)
//   return acc
// }, [])

// console.log(something);


// 4) find - позволяет найти элемент по условию и возвращает сразу же его
// const arr = [1, 2, 3, 4, 5]

// const isFour = arr.find((number) => {
//   return number === 4 /// возвращается именно только 1 элемент

//   // return true /// как только здесь будет тру вернется элемент
// })
// console.log(isFour);


// 5) findIndex - как и find но возвращает индекс а не сам элемент

// const arr = [1, 2, 3, 4, 5]

// const findIndex = arr.findIndex((number) => {
//   return number === 2
// })

// console.log(findIndex); //в этом случае мы получим 1 так как нашли индекс первого числа


// 6) filter - возвращает новый массив по условию

// const arr = [1, 2, 3, 4, 5]

// const filteredArr = arr.filter((number) => {
//   return number > 3 // фильтруем все что больше 3
// })

// console.log(filteredArr);


// 7) push - добавляет элемент в конец массива и дополнительн возвращает новую длинну массива

// const arr = [1, 2, 3, 4, 5]

// arr.push(10) /// метод push мутирует массив

// console.log(arr);


// 8) concat - соединяет значения и массив и создает новый массив на основе этого

// const arr = [1, 2, 3, 4, 5]

// const newArr = arr.concat('one', 'two')

// console.log(newArr);


// 9) join - позволяет превратить из массива строку

// const str = 'Privet'
// const strArr = str.split('') /// разбивает строчку на символы и приводит каждый символ к новому массиву
// const newStrArr = strArr.join('-') // соединяем наши символы массивов и указывает через что они должны соединятся через - и возвращает это все строкой

// console.log(newStrArr);


// 10) isArray - позволяет проверить массив ли это,нужен в большинстве случаев для проверок

// const arr = [1, 2, 3, 4, 5]
// console.log(Array.isArray(arr)); // выводится булево значение


// 11) splice - позволяет удалять и вставлять элементы и мутирует массив

// const arr = [1, 2, 3, 4, 5]

// // arr.splice(index, deleteElement) /// первым идет индекс а вторым сколько нужно удалить элементов
// arr.splice(1, 1) ///[1, 3, 4, 5]
// arr.splice(1, 2) ///[1, 4, 5]

// 12) slice - позволяет вернуть новый подмассив из переданного

// const arr = [1, 10, 3, 17, 5]
// // arr.slice(startIndex, endIndex) позволяет выводить новый массив с и до какого то значения из старого массива

// console.log(arr.slice(0, 3)); // указываем выводи значение из массива с 0 индекса и по 3 /// [1, 10, 3]
