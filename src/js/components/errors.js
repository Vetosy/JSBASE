//// Обработка ошибок


// const fnWithError = () => {
//   throw new Error('Some error') // специально создали ошибку
// }

// fnWithError() // выполнение кода прекратится здесь потому что ошибка

// console.log('continue...'); /// в консоле уже не будет ничего написано


// try {
//   /// выполнение блока кода
// } catch (error) {
//   /// этот блок выполняется в случае возникновения ошибок в блоке try
// }


// const fnError = () => {
//   throw new Error('some error')
// }

// try {
//   fnError()
// } catch (error) {
//   // console.error(error) /// выводим в консоль целую ошибку
//   // console.log(error.message); /// выводим в консоль только текст ошибки
// }

// console.log('continue');
