//// Работа с reduce forEach
//// reduce возвращает какой то результат значит пишем return
//// reduce преобразовывает наш массив в любой тип данных хоть строку хоть число


// const test = ['apple', 'banana', 'potato']

// const result = test.reduce((acc, item) => {
//   acc[`name-${item}`] = item
//   return acc
// }, {}) // {} это наш acc

// console.log(result);

// const result = test.reduce((acc, item) => {
//   acc += item
//   return acc
// }, 'Фрукты') // это начальное значение

// console.log(result);


// const num = [1, 2, 3]

// const newNum = num.reduce((acc, num) => {
//   acc += num
//   return acc
// }, 0)

// console.log(newNum);

// const arr = [1, 2, 3, 4, 5]

// const newArr = arr.reduce((acc, number) => {
//   acc.push(number.toString()) /// привели наши числа в массиве к строкам с помощью toString()
//   return acc
// }, [])

// console.log(newArr) ;









// const goodProducts = ['Салат', 'Вода', 'Шоколад', 'Булка']

// const test3 = [{
//   title: 'Сникерс',
//   composition: ['Шоколад', 'сахар', 'Нуга', 'Что то еще']
// }, {
//   title: 'Бургер',
//   composition: ['Булка', 'Котлета', 'Салат', 'Другие овощи']
// }, {
//   title: 'Липтон',
//   composition: ['Вода', 'Сахар', 'Сок лимона', 'Другое']
// }]


// const res = []

// test3.forEach((product) => {
//   const composition = []

//   product.composition.forEach((el) => {
//     composition.push({
//       name: el,
//       good: goodProducts.includes(el)
//     })
//   })

//   res.push({
//     title: product.title,
//     composition
//   })
// })

// console.log(res);


// const result = test3.reduce((acc, product) => {
//   const composition = product.composition.reduce((acc2, item) => {
//     acc2.push({
//       name: item,
//       good: goodProducts.includes(item)
//     })
//     return acc2
//   }, [])

//   acc.push({
//     title: product.title,
//     composition: composition
//   })

//   return acc
// }, [])

// console.log(result);
