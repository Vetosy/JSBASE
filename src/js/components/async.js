//// Ассхроность кода(последовательное выполнение кода)

// setTimeout(() => {
//   console.log('step 1');
//   setTimeout(() => {
//     console.log('step 2');
//     setTimeout(() => {
//       console.log('step 3');
//     }, 1000);
//   }, 1500);
// }, 2000);





///////// async и await
//// Специальный синтаксис для упрощения работы с промисами

/// Асинхронная функция

// async function asyncFn() {
//   /// Всегда возвращает Промис
// }

// const asyncFn = async () => {
//   /// Всегда возращает Промис
// }

// const myAsyncFn = async () => { /// всегда возвращает промис
//   return 'Hola'
// }

// const resultAsync = myAsyncFn()
// console.log(resultAsync); /// когда промис завершился пишется fulfilled

// const asyncFn = async () => 'success' /// возвращаем неявно строку 'success'
// asyncFn().then(value => console.log(value)) /// мы можем вызывать у асинхроной функции так же как у промиса then

// const asyncFn = async () => {
//   throw new Error('Error error') /// создаем ошибку
// }

// asyncFn()
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error.message)) // отлавливаем ее через catch


// await

// const asyncFn = async () => {
//   await <Promise > /// с помощью await мы ожидаем результат другого промиса
// }

// asyncFn()

/// пример

// const timerPromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const res = resolve()
//       return res
//     }, 2000)
//   })
// }

// const asyncFn = async () => {
//   console.log('Timer start');
//   await timerPromise() /// ожидает либо результата либо отклонения промиса
//   console.log('Timer end');
// }


// asyncFn()


/// Пример 2
// const timerPromise = () => { /// timerPromise функция которая возвращает промис и через 2 секунды промис будет исполнен
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const res = resolve()
//       return res
//     }, 2000)
//   })
// }

// const asyncFn = async () => {
//   console.log('Timer start');
//   const startTime = performance.now() /// c помощью  performance.now() можно засечь время
//   await timerPromise()
//   const endTime = performance.now()
//   console.log('Timer end', endTime - startTime); /// увидем разницу между стартом и концом
// }


// asyncFn()


/// Переписываем функцию с промиса на async

// const getData = async (url) => { // если хоть на каком то этапе возникнет ошибка то промис будет автоматически отклонен с этой ошибкой
//   const res = await fetch(url) /// сначала мы ожидаем исполнение или отклонение промиса который будет возвращен функцией fetch
//   const json = await res.json() /// дальше мы вызываем метод json у переменной res,а json также возвращает промис
//   return json // вся функция getData возвращает промис, а когда мы записали return json этот промис будет исполнен
// }

// getData('https://jsonplaceholder.typicode.com/todos')
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))





/// пример
// const url = 'https://jsonplaceholder.typicode.com/todos';

// const getData = async (url) => {
//   const res = await fetch(url)
//   const json = await res.json()
//   return json
// }

// const fetchData = async () => {
//   try {
//     const data = await getData(url);
//     console.log(data);
//   } catch (error) { // отлавливаем ошибку
//     console.log(error);
//   }
// };

// fetchData();
