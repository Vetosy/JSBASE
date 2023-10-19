///// Работа с HTML элементами

// Создать элемент
// document.createElement('tag-name')

// Изменить HTML содержимое внутри элемента
// element.innerHtML = ''

// Изменить Текстовое содержимое внутри элемента
// node.innerText = ''

// Клонирование элемента
// node.cloneNode() // true с внутренним содержимым (текст и теги)
// false - без внутреннего содержимого

// вставить элемент внутрь другого элемента
// element.append(nodesOrDOMStrings)


// удалить элемент
// element.remove()


// Находим наш контейнер
// const container = document.querySelector('#elementsContainer')

// Создание заголовка
// const newHeader = document.createElement('h1')
// newHeader.innerText = 'New title'
// container.append(newHeader)

// Копирование шапки
// const mainHeader = document.querySelector('.header')
// const headerCopy = mainHeader.cloneNode(true)
// container.append(headerCopy)

/// Вставка разметки через строки
// const htmlExample = '<h2> New title </h2>'
// container.insertAdjacentHTML('beforeen', htmlExample)


/// Вставка разметки через шаблоные строки
// const title = 'Текст заголовка'
// const htmlExample = `<h2>${title}</h2>`
// container.insertAdjacentHTML('beforeend', htmlExample)
