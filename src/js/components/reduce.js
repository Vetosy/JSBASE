// // Метод массива reduce

// const num = [1, 2, 3, 4]

// const res = num.reduce((acc, el) => el + acc,0)
// console.log(res); /// складываем все числа в массиве, где 0 это начальное значение аккумулятора

// const max = num.reduce((acc, el) => Math.max(acc,el))
// console.log(max); /// вычесляем самое большое число в массиве


/// reduce

/// #1 Сумма елементов массива

// const arr = [2, -4, 5, 10] // 13

// const sumArr = arr.reduce((acc, number) => acc += number, 0)
// console.log(sumArr);


/// #2 Максимальное значение массива

// const arr = [3, -2, 5, 17, 11]

// let max = arr[0]

// for (let i = 0; i < arr.length; i++) {
//   let item = arr[i]
//   item > max ? max = item : item
// }

// console.log(max);


// const arr = [3, -2, 5, 17, 11]

// first = arr[0]

// const result = arr.reduce((acc, number) => {
//   number > acc ? acc = number : number
//   return acc
// }, 0)

// console.log(result);




// const num = [1, 2, 3, 4, 5]

// const sumNum = num.reduce((acc, number) => {
//   acc = acc + number
//   return acc
// }, 0)

// console.log(sumNum);

// const arr = ['one', 'two']

// const arr2 = [...arr, 'three']

// const res = arr2.reduce((acc, item) => {
//   acc += item
//   return acc
// }, '')

// console.log(res);


// const res2 = arr2.reduce((acc, item) => {
//   acc.push(item)
//   return acc
// }, [])
// console.log(res2); // ['one', 'two', 'three']
