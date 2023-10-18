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


const generateAutoCard = (brand, color, year) => {

}
