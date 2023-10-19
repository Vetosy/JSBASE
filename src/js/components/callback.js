//////// callback функции

// function anotherFunction() {
//   //// Действия
// }

// function fnWithCallback(callbackFunction) {
//   callbackFunction()
// }

// fnWithCallback(anotherFunction)

// function printMyName() {
//   console.log('Vit');
// }

// setTimeout(printMyName, 1000)


// function checkRooms(success, failed) {
//   setTimeout(function () {
//     console.log('Проверяем номера в отеле ...');
//     let availableRooms = true

//     if (availableRooms) {
//       let message = 'Номера есть'
//       success(message)
//     } else {
//       let message = 'Номеров нет'
//       failed(message)
//     }
//   }, 1000)
// }


// function checkTickets(message, success, failed) {
//   setTimeout(function () {
//     console.log('---- function checkTickets ----');
//     console.log('Ответ а предыдущем шаге', message);

//     console.log('Проверяем авиабилеты');
//     const availableTickets = true

//     if (availableTickets) {
//       let message = 'Билеты есть'
//       success(message)
//     } else {
//       let message = 'Билетов нет'
//       failed(message)
//     }

//   }, 500)
// }

// function cancelVacation(message) {
//   console.log('---- cancelVacation ----');
//   console.log('Ответ на предыдущем шаге', message);
//   console.log('Отпуск отменяется');
// }

// function submitVacation(message) {
//   console.log('---- submitVacation ----');
//   console.log('Ответ на предыдущем шаге', message);
//   console.log('Едим в отпуск');
// }


// checkRooms(
//   function (messageFromCheckRooms) {
//     checkTickets(
//       messageFromCheckRooms,
//       function (messageFromCheckTickets) {
//         submitVacation(messageFromCheckTickets)
//       },
//       function (messageFromCheckTickets) {
//         cancelVacation(messageFromCheckTickets)
//       })
//   },
//   function (messageFromCheckRooms) {
//     cancelVacation(messageFromCheckRooms)
//   })

// checkRooms(
//   function (messageFromCheckRooms) {
//     checkTickets(
//       messageFromCheckRooms,
//       submitVacation,
//       cancelVacation)
//   },
//   cancelVacation
// )
