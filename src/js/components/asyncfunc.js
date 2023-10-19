///// Ассихронные функции

// function promiseFunction() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       //запрос на сервер
//       const result = false
//       if (result) {
//         resolve('DONE')
//       } else {
//         reject('FAIL')
//       }
//     }, 500)
//   })
// }


// async function startPromise() {
//   try {
//     const result = await promiseFunction()
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// }

// startPromise()


//// Несколько асинхронных операций


// function checkRooms() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log('Выполняем запрос с сервера по номерам');

//       let availabelRooms = true

//       if (availabelRooms) {
//         resolve('Номера есть ')
//       } else {
//         reject('Номеров нет')
//       }

//     }, 1500)
//   })
// }

// function checkTickets(data) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log('Выполняем запрос с сервера по авиабилетам');
//       console.log('Данные с пред функции', data);

//       const availabelTickets = true

//       if (availabelTickets) {
//         let message = 'Билеты есть'
//         resolve(message)
//       } else {
//         let message = 'Билетов нет'
//         reject(message)
//       }
//     }, 1000)
//   })
// }

// function submitVacation(data) {
//   console.log('Данные с пред функции', data);
//   console.log('Едем в отпуск');
// }

// function cancelVacation(data) {
//   console.log('Данные с пред функции', data);
//   console.log('Отпуск отменяется');
// }


// async function checkVacation() {
//   try {
//     const roomsResult = await checkRooms()
//     const ticketsResult = await checkTickets(roomsResult)
//     submitVacation(ticketsResult)
//   } catch (err) {
//     cancelVacation(err)
//   }
// }

// checkVacation()
