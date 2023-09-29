//// Fetch API
// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(error => console.error(error))

// fetch возвращает промис
// then тоже возвращает промис

// fetch('https://jsonplaceholder.typicode.com/todos/55') // 55 это id,когда мы ставить так мы получаем не массив объектов,а именно 55 объект в этом массиве
//   .then((response) => {
//     console.log(response); /// ответ от сервера
//     return response.json()
//   })
//   .then(json => console.log(json))
//   .catch(error => console.error(error))

// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then((response) => response.json())
//   .then(json => console.log(json))
//   .catch(error => console.error(error))
