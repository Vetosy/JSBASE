//// Манипуляция DOM элементов
/// создание элементов / удаление элементов / динамическое создание разметки
// document  для работы с DOM элементами,зона ответственности это с тега html


// const div = document.createElement('div')
// const h1 = document.createElement('h1')
// h1.innerText = 'Hello'
// div.append(h1)
// document.body.append(div)


// console.log(div);


// const section = document.createElement('section')
// const container = document.createElement('div')
// const aboutUs = document.createElement('div')
// const aboutInfo = document.createElement('p')
// const aboutLink = document.createElement('a')

// aboutLink.classList.add('about__link')
// aboutLink.innerText = 'Перейти'
// aboutLink.href = 'https://www.google.ru/'
// aboutLink.setAttribute('target', '_blank')

// aboutInfo.classList.add('about__text')
// aboutInfo.innerText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, soluta.'
// aboutInfo.style['margin'] = '0'

// aboutUs.classList.add('about__info')
// aboutUs.append(aboutInfo, aboutLink)

// container.classList.add('container')
// container.append(aboutUs)

// section.classList.add('about')
// section.append(container)

// document.body.append(section)


// console.log(section);


/// Событие event
// const aEvent = document.querySelector('.about__link')

// aEvent.addEventListener('click', (e) => {
//   e.preventDefault()
// })

// const div = document.createElement('div')
// const h1 = document.createElement('h1')
// const body = document.body.append(div)
// const ul = `
//   <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
//   </ul>`
// const img = document.createElement('img')



// h1.innerText = 'DOM (Document Object Model)'
// div.classList.add('wrapper')
// div.insertAdjacentElement('beforebegin', h1)
// div.innerHTML = ul
// div.append(img)
// img.classList.add('random__pic')
// img.src = 'https://picsum.photos/240'
// img.width = 240
// img.alt = 'random picture'


// const generateAutoCard = (brand, color, year) => {
//   const currentYear = new Date().getFullYear()
//   return `
//     <div class="autobrands">
//       <h2>${brand.toUpperCase()} ${year}</h2>
//       <p>Автомобиль ${brand.toUpperCase()} - ${year} года.Возраст авто - ${currentYear-year} лет</p>
//       <p>Цвет автомобиля ${color}</p>
//       <button class="autobrands__btn">Удалить</button>
//     </div>
//   `
// }

// const carsDiv = document.createElement('div')
// carsDiv.classList.add('autos')

// const carsList = [{
//   brand: 'tesla',
//   year: 2015,
//   color: 'красный'
// }, {
//   brand: 'Lenus',
//   year: 2016,
//   color: 'Серебристый'
// }, {
//   brand: 'Nissan',
//   year: 2012,
//   color: 'Черный'
// }, ]

// const carsHTML = carsList.map((car) => {
//   return generateAutoCard(car.brand, car.color, car.year)
// }).join(' ')

// carsDiv.innerHTML = carsHTML

// const body = document.body.insertAdjacentElement('beforebegin', carsDiv)
// const deleteBtns = document.querySelectorAll('.autobrands__btn')

// const btnHandler = (e) => {
//   const currentBtn = e.currentTarget
//   currentBtn.closest('.autobrands').remove()
// }

// deleteBtns.forEach((btn) => {
//   btn.addEventListener('click', btnHandler)
// })

// const cardsWrapper = document.createElement('div')
// cardsWrapper.classList.add('wrapper')



// const cardsFilm = (name, year, gente) => {
//   const currentDate = new Date().getFullYear()

//   return `
//     <div class="filmcard">
//       <h2>${name}</h2>
//       <p>Дата выпуска: ${year}</p>
//       <p>Жанр кино: ${gente}</p>
//       <p>Фильму уже ${currentDate - year} лет</p>
//       <button class="filmcard__btn">Удалить карточку с фильмом</button>
//     </div>
//   `
// }

// const filmList = [{
//     name: 'avatar',
//     year: 2012,
//     gente: 'фантастика'
//   },
//   {
//     name: 'titanic',
//     year: 2007,
//     gente: 'романтика'
//   }, {
//     name: 'saw',
//     year: 2015,
//     gente: 'ужасы'
//   }
// ]

// const filmHtml = filmList.map((film) => {
//   return cardsFilm(film.name, film.year, film.gente)
// }).join(' ')

// cardsWrapper.innerHTML = filmHtml

// const body = document.body.append(cardsWrapper)
// const deleteBtns = document.querySelectorAll('.filmcard__btn')

// const btnHandler = (e) => {
//   e.currentTarget.closest('.filmcard').remove()
// }

// deleteBtns.forEach((btn) => {
//   btn.addEventListener('click', btnHandler)
// })
