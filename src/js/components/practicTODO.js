// const todoList = document.querySelector('#todo-list')
// const todoForm = document.querySelector('#todo-form')
// const todoInput = document.querySelector('#todo-input')

// todoForm.addEventListener('submit', formHadler)

// function formHadler(e) {
//   e.preventDefault()

//   // Первый метод
//   // Получаем value из инпута
//   // const taskText = todoInput.value;

//   // Простой способ добавить разметку в наш список через тег li
//   // const li = `<li>${taskText}</li>`

//   // Добавляем эту разметку на станицу
//   // todoList.insertAdjacentHTML('beforeend', li)

//   // Чистим поле ввода
//   // todoInput.value = ''

//   // Фокус на поле ввода
//   // todoInput.focus()




//   // Второй метод

//   // Получаем value из инпута
//   const taskText = todoInput.value;

//   // Создаем тег li с помощью создания элемента
//   const newTask = document.createElement('li')

//   // Обращаемся к тегу li который создали и говорим что помещаем внутрь его тот текст который получаем из taskText
//   newTask.innerText = taskText

//   // теперь добавляем наш li c текстом внутрь нашего todoList
//   todoList.append(newTask)


//   // Данный подход удобен тем что мы может вешать события на элемент li

//   // Создаем кнопку удалить
//   const deleteBtn = document.createElement('button')
//   deleteBtn.setAttribute('role', 'button')
//   deleteBtn.innerText = 'Удалить'
//   deleteBtn.style['margin-left'] = '15px'
//   newTask.append(deleteBtn)

//   // Добавляем слушатель событий удалить
//   deleteBtn.addEventListener('click', function () {
//     this.closest('li').remove()
//   })


//   // Используем стрелочную функцию
//   // deleteBtn.addEventListener('click', (e) => e.target.closest('li').remove())

//   // Чистим поле ввода
//   todoInput.value = ''

//   // Фокус на поле ввода
//   todoInput.focus()

// }




// const todoForm = document.querySelector('.todo__form')
// const todoInput = document.querySelector('.todo__input')
// const todoList = document.querySelector('.todo__list')

// const formHandler = (e) => {
//   e.preventDefault()

//   const taskText = todoInput.value

//   if (taskText.trim() !== '') {
//     const newtask = document.createElement('li')
//     newtask.innerText = taskText
//     todoList.append(newtask)

//     const deleteBtn = document.createElement('button')
//     deleteBtn.setAttribute('aria-label', 'Удалить')
//     deleteBtn.classList.add('todo__delete')
//     deleteBtn.innerText = 'Удалить'
//     deleteBtn.style['margin-left'] = '30px'
//     deleteBtn.style['margin-bottom'] = '20px'
//     newtask.append(deleteBtn)
//     deleteBtn.addEventListener('click', (e) => e.target.closest('li').remove())

//     todoInput.value = ''
//     todoInput.focus()
//   }
// }

// todoForm.addEventListener('submit', formHandler)
