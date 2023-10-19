/////// Промисы

/// Промис имеет 3 состояние
/// при создании у него состояние ожидания
/// когда вызываем внутри колбек функцию resolve состояние промиса меняется на исполнен
/// когда вызываем внутри колбек функцию reject состояние промиса меняется на ошибку


/// Создание промиса
// const myPromise = new Promise((resolve, reject) => {
//   /// Выполнение асинхронных действий
//   /// Внутри этой функции нужно  в результате вызвать одну из
//   /// функций resolve или reject
// })


/// Получение результат промиса

// myPromise.then((value) => {
//   /// Действие в случае успешного исполнения Промиса
//   // Значение value - это значение прееденное в вызове функции resolve внутри Промиса
// }).catch((value) => {
//   /// Действие в случае отклонения Промиса
//   /// Значение error это значение переданное в вызове функции reject внутри ПромисаF
// })

// const myPromise = new Promise((resolve, reject) => {
//   const resServer = true

//   if (resServer) {
//     const messageTrue = 'Промис выполнен'
//     resolve(messageTrue)
//   } else {
//     const messageFalse = 'Ошибка'
//     reject(messageFalse)
//   }

// })

// myPromise.then((success) => {
//   console.log(success);
// }).catch((error) => {
//   console.log(error);
// })

// Пример 1
// Упрощаем пропис и делаем только 1 then вместо двух
// Здесь я использую явно возврат значений из стрелочных функций
// const getData = (url) => {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((response) => {
//         return response.json()
//       })
//       .then((json) => {
//         return resolve(json)
//       })
//       .catch((error) => {
//         return reject(error)
//       })
//   })
// }

// getData('https://jsonplaceholder.typicode.com/todos')
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((error) => {
//     console.log(error.message)
//   })

/// Пример 2
// сокращаем then и сокращаем стрелочные функции
// const getData = (url) =>
//   new Promise((resolve, reject) =>
//     fetch(url)
//     .then((response) => response.json())
//     .then((json) => resolve(json))
//     .catch((error) => reject(error))
//   )

// getData('https://jsonplaceholder.typicode.com/todos')
//   .then(data => console.log(data))
//   .catch((error) => console.log(error.message))

// const getData = (url) => {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((json) => resolve(json))
//       .catch((error) => reject(error))
//   })
// }

// getData('https://jsonplaceholder.typicode.com/todos') //// Таким образом мы можем вызывать функцию getData много раз
//   .then((success) => console.log(success))
//   .catch((error) => console.log(error.message))


// getData('https://jsonplaceholder.typicode.com/todos/10') // вызываем снова функцию getData и узнаем из всего массива объекта только 10 объект с этого массива
//   .then((success) => console.log(success))
//   .catch((error) => console.log(error.message))












//////////// Создание промиса

// const myPromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     // -- запрос на сервер
//     const response = true

//     if (response) {
//       let message = 'success'
//       resolve(message)
//     } else {
//       let message = 'failed'
//       reject(message)
//     }
//   }, 1000)

// })

// myPromise.then(function (data) {
//   console.log('then 1');
//   console.log(data);
//   return 'data from then 1'
// }).then(function (data) {
//   console.log('then 2');
//   console.log(data);
// }).catch(function (data) {
//   console.log('catch');
//   console.log(data);
// })




///// Цепочка промисов

// const checkRooms = new Promise(function (resolve, reject) {

//   setTimeout(() => {
//     console.log('Запрос на сервер');
//     const availableRooms = true

//     if (availableRooms) {
//       resolve('Номера есть')
//     } else {
//       reject('Номеров нет')
//     }
//   }, 1500)

// })

// checkRooms.then(function (data) {
//   return new Promise(function (resolve, reject) {

//     setTimeout(() => {
//       console.log('---then 1 --');
//       console.log('Ответ на пред шаге', data);
//       console.log('Отправляем запрос на авиабилеты');
//       const availableTikets = true

//       if (availableTikets) {
//         let message = 'Билеты есть'
//         resolve(message)
//       } else {
//         let message = 'Билетов нет'
//         reject(message)
//       }
//     }, 1000)

//   })
// }).then(function (data) {
//   console.log('----then 2 ');
//   console.log('Ответ на пред шаге', data);
//   console.log('едим в отпуск');
// }).catch(function (data) {
//   console.log('--- catch')
//   console.log('Ответ на предыдущем шаге', data)
//   console.log('Отпуск отменяется')
// })
