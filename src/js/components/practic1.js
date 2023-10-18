// const discounts = [
//   [5, {
//     value: 100,
//     cond: 150
//   }],
//   [10, 200],
//   [15, 300],
//   [20, 500],
// ];

// const games = [{
//     id: 1,
//     name: ' death stranging   ',
//     price: '1000rub',
//     description: 'Компьютерная игра в жанре action с открытым миром, разработанная...',
//     link: 'https://ru.wikipedia.org/wiki/Death_Stranding',
//     discountType: null,
//     hashTags: ['Шутер', '', ['Приключения,Доставка еды']],
//   },
//   {
//     id: 2,
//     name: 'the last of us   ',
//     price: 300,
//     description: 'Компьютерная игра в жанре action-adventure с элементами survival horror...',
//     link: 'https://ru.wikipedia.org/wiki/The_Last_of_Us',
//     discountType: 20,
//     hashTags: ['Стелс', 'Экшен', 'Приключения'],
//   },
//   {
//     id: 3,
//     name: 'death stranging',
//     price: null,
//     description: null,
//     discountType: null,
//     hashTags: [],
//   },
//   {
//     id: 4,
//     name: 'SHREK 2: THE GAME',
//     price: '321',
//     description: 'Игра про зеленого мужика, который всем нравится',
//     discountType: 5,
//     hashTags: [
//       ['Шутер,Приключения'], 'Хоррор', 'Криминал'
//     ],
//   },
//   {
//     id: 5,
//     name: 'GTA 3',
//     price: 20.512830102,
//     description: 'Игра про безумного мужика, который всем нравится',
//     discountType: 5,
//     hashTags: undefined,
//   },
// ];

// const formattedGames = []

// const problemGames = [] ///массив проблемных игр

// games.forEach((game) => {
//   const price = !game.price ? 0 : parseFloat(game.price) // если у нас нет game.price  или он null тогда выводим 0 иначе приводим к числу строку

//   const discountData = discounts.find((discount) => { /// метод find бегает по массиву и как только он найдет то значение единственное которое надо он вернет его и завершится

//     const discountIndexOne = discount[1]

//     if (typeof discountIndexOne !== 'number' && discountIndexOne.cond > price) { // если наш первый индекс  discount не равен числу и при этом у discount есть cond и он будет больше чем цена нашей игры то игра не заслуживает скидки в 100 рублей которая указана как value в объекте
//       return false
//     }

//     if (discount[0] === game.discountType) { // здесь указываем индекс 0 и делаем проверку если у элемента массива индекс 0 равен discountType тогда верни true
//       return true
//     }
//   })

//   const discountValue = Array.isArray(discountData) ? discountData[1] : 0 /// делаем проверку если наш discountData является массивом делаем это через Array.isArray,тогда верни в случае true первый индекс у discountData иначе верни 0

//   const numericDiscount = typeof discountValue === 'number' ? discountValue : discountValue.value

//   const newGame = {
//     id: game.id,
//     description: game.description,
//     name: game.name.trim(),
//     finalPrice: parseFloat(price.toFixed(2)) - numericDiscount, //особенность toFixed она преобразовывает число в строчку и поэтому мы назад через parseFloat переводим в число и теперь от финальной цены отнимаем нашу скидку
//   }

//   if ('link' in game) { // делаем проверку если нет поля link есть ли у нашего объекта поле link
//     newGame.link = game.link // если есть то мы нашему объекту добавляем поле ссылку
//   }

//   if (Array.isArray(game.hashTags)) { /// если у нас есть массив из хештегов
//     newGame.hashTags = game.hashTags.flat(Infinity).reduce((acc, tags) => {
//       if (tags.length === 0) {
//         return acc
//       }

//       const split = tags.split(',') // нашу строчку разделяем по символу ,

//       split.forEach((value) => { // иначе проходимся по ней
//         acc.push(value)
//       })

//       return acc
//     }, [])
//   } else { /// иначе добавляем пустой массив
//     newGame.hashTags = []
//   }

//   if (newGame.finalPrice < 0) { /// если у наших новых игры финальная цена меньше 0 тогда мы эти игры запушим в проблемные игры иначе запушиваем их в наш массив нормальных игр
//     const reasons = ['Цена уходит в минус']
//     const gameWithReasons = {
//       ...game,
//       reasons
//     }
//     problemGames.push(gameWithReasons)
//     return /// если играть нам не подходит мы пишем return и завершаем,дальше не проверяем есть ли у нее дубликат
//   }

//   const isDuplicate = formattedGames.some((formattedGame) => { // в нашем отформатированном массиве есть уже игра с таким именем
//     if (newGame.name.toLowerCase() === formattedGame.name.toLowerCase()) { // проверяем а имя игры уже есть в отформатированном массиве // доб проверка на toLowerCase нужна для того чтобы Игра и игра считались одним и тем же именем
//       return true
//     }
//   })

//   if (isDuplicate) { /// если это дубликат то мы его тоже переносим в массив к проблемным играм
//     const reasons = ['Дубликат']
//     const gameWithReasons = {
//       ...game,
//       reasons
//     }
//     problemGames.push(gameWithReasons)
//   } else {
//     formattedGames.push(newGame)
//   }
// })

// console.log('formattedGames', formattedGames);
// console.log('problemGames', problemGames);

// // problemGames.forEach((game) => {
// //   const name = `Игра ${game.name.trim()}`
// //   const problems = game.reasons.join(', ')
// //   console.error(`${name} имеет проблемы с данными: ${problems}`);
// // })


// const genres = formattedGames.reduce((acc, game) => {
//   game.hashTags.forEach((tag) => {
//     if (tag in acc) {
//       acc[tag].push(game.id)
//     } else {
//       acc[tag] = [game.id]
//     }
//   })

//   return acc
// }, {})

// console.log(genres);


// ----------------- ВИЗУАЛ

// const divContainer = document.createElement('div');
// divContainer.className = 'container';

// formattedGames.forEach((game) => {
//     const gameContainer = document.createElement('div');
//     gameContainer.className = 'game-container';

//     const name = createGameItem(game.name, 'game-name');
//     gameContainer.append(name);

//     const price = createGameItem(`${game.finalPrice} ₽`, 'game-price');
//     gameContainer.append(price);

//     const description = createGameItem(game.description, 'game-description');
//     gameContainer.append(description);

//     if (game.link) {
//         const link = createGameItem('Посмотреть полное описание', 'game-link', 'a');
//         link.href = game.link;
//         description.append(link);
//     }

//     if (Array.isArray(game.hashTags) && game.hashTags.length > 0) {
//         const hashTagsContainer = document.createElement('div');
//         hashTagsContainer.className = 'game-hashtags-container';

//         game.hashTags.forEach((tag) => {
//             const hashTag = createGameItem(`#${tag}`, 'game-hashtag', 'span');
//             hashTagsContainer.append(hashTag);
//         });

//         gameContainer.append(hashTagsContainer);
//     }


//     divContainer.append(gameContainer);
// });

// document.body.prepend(divContainer);

// function createGameItem(text, className, tagName = 'p') {
//     const element = document.createElement(tagName);
//     element.innerText = text;
//     element.className = className;

//     return element;
// }



// const discounts = [
//   [5, {
//     value: 100,
//     cond: 150
//   }],
//   [10, 200],
//   [15, 300],
//   [20, 500],
// ];

// const games = [{
//     id: 1,
//     name: ' death stranging   ',
//     price: '1000rub',
//     description: 'Компьютерная игра в жанре action с открытым миром, разработанная...',
//     link: 'https://ru.wikipedia.org/wiki/Death_Stranding',
//     discountType: null,
//     hashTags: ['Шутер', '', ['Приключения,Доставка еды']],
//   },
//   {
//     id: 2,
//     name: 'the last of us   ',
//     price: 300,
//     description: 'Компьютерная игра в жанре action-adventure с элементами survival horror...',
//     link: 'https://ru.wikipedia.org/wiki/The_Last_of_Us',
//     discountType: 20,
//     hashTags: ['Стелс', 'Экшен', 'Приключения'],
//   },
//   {
//     id: 3,
//     name: 'death stranging',
//     price: null,
//     description: null,
//     discountType: null,
//     hashTags: [],
//   },
//   {
//     id: 4,
//     name: 'SHREK 2: THE GAME',
//     price: '321',
//     description: 'Игра про зеленого мужика, который всем нравится',
//     discountType: 5,
//     hashTags: [
//       ['Шутер,Приключения'], 'Хоррор', 'Криминал'
//     ],
//   },
//   {
//     id: 5,
//     name: 'GTA 3',
//     price: 20.512830102,
//     description: 'Игра про безумного мужика, который всем нравится',
//     discountType: 5,
//     hashTags: undefined,
//   },
// ];

// const formattedGame = games.map((game) => {
//   const price = game.price ? parseFloat(game.price) : 0

//   const discountData = discounts.find(([discountsValue, discountsNum]) => {
//     if (typeof discountsNum !== 'number' && discountsNum.cond > price) {
//       return false
//     }

//     return discountsValue === game.discountType
//   })

//   const discountValue = Array.isArray(discountData) ? discountData[1] : 0
//   const discountFinal = typeof discountValue === 'number' ? discountValue : discountValue.value
//   const finalPrice = parseFloat(price.toFixed(2) - discountFinal)

//   const newGame = {
//     id: game.id,
//     name: game.name.trim(),
//     finalPrice,
//     description: game.description,
//   }

//   return newGame
// })

// console.log(formattedGame);




// Итог
// 1. Форматируем данные до нормального вида
// 1.1. Цена должна быть числом
// 1.2. Формируем финальную цену, учитывая скидку
// 1.3. hashTags должен быть всегда плоским массивом
// 1.4. Имя игры не должно содержать пробелов по бокам
// const formattedGames = [
//     {
//         id: 1,
//         name: 'death stranging',
//         finalPrice: 1000,
//         description: 'Компьютерная игра в жанре action с открытым миром, разработанная...',
//         link: 'https://ru.wikipedia.org/wiki/Death_Stranding',
//         hashTags: ['Шутер', 'Приключения', 'Доставка еды'],
//     },
//     {
//         id: 4,
//         name: 'SHREK 2: THE GAME',
//         finalPrice: 221, // Тут изменилась цена из-за скидки
//         description: 'Игра про зеленого мужика, который всем нравится',
//         hashTags: ['Шутер', 'Приключения', 'Хоррор', 'Криминал'],
//     },
//     {
//         id: 5,
//         name: 'GTA 3',
//         finalPrice: 20.51, // Цена не изменилась, так как условие скидки не проходит
//         description: 'Игра про безумного мужика, который всем нравится',
//         hashTags: [],
//     },
// ];

// 2. Формируем массив с проблемными играми
// const problemGames = [
//     {
//         id: 2,
//         reasons: ['Цена уходит в минус'],
//         name: 'the last of us   ',
//         price: 300,
//         description: 'Компьютерная игра в жанре action-adventure с элементами survival horror...',
//         link: 'https://ru.wikipedia.org/wiki/The_Last_of_Us',
//         discountType: 20,
//         hashTags: ['Стелс', 'Экшен', 'Приключения'],
//     },
//     {
//         id: 3,
//         reasons: ['Дубликат'],
//         name: 'death stranging',
//         price: null,
//         description: null,
//         discountType: null,
//         hashTags: [],
//     },
// ];
// 2.1. Выводим в консоль данные, про эти проблемные игры в виде:
// 'Игра "the last of us" имеет проблемы с данными: Цена уходит в минус.'
// 'Игра "death stranging" имеет проблемы с данными: Дубликат, Отсутствие данных.'

// 3. Формируем список жанров (Ключ - название жанра. Значение - id игры)
// 3.1. Название жанров мы должны вытащить из массива игр. А не формировать руками.
// const genres = {
//     'Шутер': [1, 4],
//     'Приключения': [1, 4],
//     'Доставка еды': [1],
//     'Хоррор': [4],
//     'Криминал': [4],
// };
