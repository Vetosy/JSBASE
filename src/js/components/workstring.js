///// Работа со строчками

// /// Экранирование
// const str = 'as\'da' // с помощью \ мы говорим что нужно показать ' и чтобы не было ошибок
// console.log(str);

/// Функции которые помогают работать со строчками
// const someNum = 11
// console.log(someNum.toString()); /// toString() приводит почти все к строке

// const someNum = 'some text random'
// console.log(someNum.length); /// получаем длину строчки


// const text = '*'.repeat(5) // повторяем строку 5 раз
// console.log(text);


/// обрезают пробелы
// const login = '    aadasdas            '
// console.log(login.trim()); /// обрезает пробелы вначале и в конце

// const phone = '8(999)999-99-99'
// console.log(phone.replaceAll('-', '').replaceAll('(', '').replaceAll(')', '')); /// заменяем ненужные символы на пустые строки,первое значение у replaceAll это что мы меняем а второе на что
