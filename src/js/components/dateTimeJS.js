//// Дата и время в JS


/// месяца в JS начинаются с 0!!!!!!!!!!!!!!!!!!!!!!!


// console.log(new Date()) /// если нужно работать с даной все используем new Date
// console.log(new Date(2017, 0, 1)) // получаем 1 января 2017 года
// console.log(new Date(2017, 0, 1, 15, 30)) // если нужно указать время пишем 15:30
// console.log(new Date('2017-01-01T15:30:10')); //исо формат
const date = new Date()
// console.log(date.getSeconds());
// console.log(date.getMinutes());
// console.log(date.getHours());
// console.log(date.getFullYear());
// console.log(date.getDay()); /// получаем день недели и отсчет начинается с 0(вс)-6(сб)
// console.log(date.getDate()); /// получаем день

// console.log(date.setHours(20)); /// через set Задаем дату

// console.log(date.toISOString()); /// переводит в исо формат нашу дату
// console.log(date.toLocaleTimeString('ru')); /// получаем время в локальном формате,также можем передать язык  //17:21:48
