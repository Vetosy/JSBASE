/// Работа с map filter

// const arr = [1, 2, 3]

// const newArr = arr.map((el) => { /// функция map бегает по массиву и создает новый массив куда через return мы указываем что должны возвращать
//   return 1 /// в отличии от forEach обязательно нужно указывать return иначе будет undefiend
// })
// console.log(newArr);


// const arr = [{ /// у меня есть массив из объектов где я хочу получить каждое имя в каждом объекте
//   username: 'bob',
//   age: 22
// }, {
//   username: 'alice',
//   age: 21
// }]

// const newArr = arr.map((el) => {  /// пробегаюсь по всем элементам массива где каждый элемент это каждый новый объект в массиве
//   return el.username /// достаю имя из каждого объекта в массиве и получаю новый массив с именами каждого ключа имени объекта
// })

// console.log(newArr);

/// возвращает всегда новый массив и всегда объектов будет столько сколько в оригинальном массиве
// может преобразовать оригинальный массив в любой массив но не может изменить кол-во элементов в новом массиве

//// filter - фильтрация массива
/// возвращает всегда новый массив
/// в отличии от map он не может изменить структуру данных но может изменить кол-во элементов в новом массиве

// const arr = [{
//   username: 'bob',
//   age: 22,
//   hasAccount: true
// }, {
//   username: 'alice',
//   age: 21,
//   hasAccount: false
// }]


// const newArr = arr.filter((el) => { /// в return всегда должно быть либо true либо false
//   // if (el.hasAccount) { /// если у нашего объекта есть аккаунт   hasAccount: true тогда возвращай true иначе false
//   //   return true
//   // }

//   return el.hasAccount ? true : false /// используя тернартный оператор
// })

// const newArr = arr.filter(el => el.hasAccount ? true : false) /// еще больше сократили код

// const newArr = arr.filter(el => el.hasAccount) /// еще больше сократили убрали тернарный оператор т.к наши  hasAccount и так имеют либо true либо false

// console.log(newArr);


/// find  отвечает за если ли объект в нашем массиве или нет

// const arr = [1, 2, '3', {
//   username: 'bob'
// }]

// const newArr = arr.find((el) => {
//   // console.log(el, typeof el === 'object'); /// проверяем все элементы являются ли они объектами

//   if (typeof el === 'object') { /// делаем проверку,если в наш элемент является объектом тогда верни тру
//     return true
//   }
// })

// console.log(newArr);

/// Задачка

// const data = [{
//   id: 1,
//   title: 'news day',
//   author: 'alex',
//   likes: 50
// }, {
//   id: 2,
//   title: 'news day 2',
//   author: 'anna',
//   likes: 150
// }, {
//   id: 3,
//   title: 'news day 3',
//   author: 'john',
//   likes: 110
// }]


// const data1 = data.filter(el => el.likes > 100 ? true : false) // отфильтровали наш массив по колличеству лайков больше 100
// const data2 = data1.map((el) => { // прошлись по объектам у которых лайков больше 100 и вырнули новый объект с id и title у кого лайков больше 100
//   return {
//     id: el.id,
//     title: el.title,
//   }
// })

// const data3 = data1.map((el) => { /// нашли наши имена кто получит премию за больше всего лайков
//   return el.author /// получаем массив строк из наших объектов
// })


// const bestAuthor = data.find((el) => { /// тут мы можем найти только что то в кол-ве одного экземпляра
//   if (el.likes > 120) {
//     return true
//   }
// })


// const num = [1, 2, 3, 4, 5]
// const sumNum = num.reduce((acc, value) => acc + value, 0)
// console.log(sumNum);


// const arr = ['my', 'name', 'is', 'Bob']
// const newArr = arr.join(' ')
// console.log(newArr);


// const someAge = [10, 15, 20, 40]
// const badAge = 20

// const newAge = someAge.find((el) => {
//   if (el > 18) {
//     return badAge
//   }
// })

// console.log(newAge);


// const person = [{
//   username: 'alex',
//   age: 20
// }, {
//   username: 'anna',
//   age: 30
// }, {
//   username: 'john',
//   age: 10
// }]


// const personAge = person.filter((el) => {
//   if (el.age > 18) {
//     return true
//   }
// })

// const arrPersonAge = personAge.map((el) => {
//   return el.username
// })

// console.log(arrPersonAge);
