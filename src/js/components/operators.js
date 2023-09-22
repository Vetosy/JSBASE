////// Операторы

// ! логический оператор не он всегда возвращает значение тру или фолс
// && логический оператор и
// || логический оператор или


// '' - пустая строка это ложное выражение!!!!

// const result = Boolean('')
// console.log(result);

// const result = typeof 'abc' === 'string'
// console.log(result); //true

// const result = typeof 10 === 'string'
// console.log(result); //false

// const result = typeof 10 === 'number'
// console.log(result); //true

// const age = () => {
//   console.log('hi');
// }

// const result = typeof age
// console.log(result);/// узнаем какого типа наша функция через оператор typeof


// !10 //false
// !0 // true потому что 0 это ложное выражение
// !'abc' //false потому что строка не пустая,а пустая строка это ложное утверждение
// !'' //true потому как пустая строка это ложное выражение а значит не ложное выражение правдивое
// !true //false
// !undefined // true потому что undefined это ложное выражение


/// Оператор && (и) примеры
// Если выражение 1 ложно то выражение 2 игнорируется и возвращается выражение 1



// const result = false && 'default'
// console.log(result); //false

// const result = 'vit' && 'default'
// console.log(result);//default
// В консоле будет default,потому что оба выражения истины а когда оба выражения истины возвращается выражение второго выражения



// const a = 10
// const b = 2

// if (a > b && a !== b) {
//   console.log('true'); /// true потому что 10 больше 2 и 10 не равно 2,оба значения правдивые поэтому возвращает true
// } else {
//   console.log('false');
// }


// const a = 10
// const b = 2

// if (a > b && a < b) {
//   console.log('true');
// } else {
//   console.log('false'); //false потому что 10 больше 2,но 10 не меньше 2. Одно из выражений не верно поэтому возвращает false,условия if не соблюдены поэтому условие не верно если не верно условие if ввыведи в консоле else.
// }



// const a = 10

// const result = a < 5 && console.log('hi');
// console.log(result); /// В данном примере выражение 1 ложное и если оно ложное то JS дальше даже не идет проверять выражение 2



/// Оператор || (или) примеры
// Если выражение 1 истино то выражение 2 игнорируется и возвращается выражение 1


// const result = 'vitaliy' || 'default'
// console.log(result); // будет vitaliy так как первое значение истина


// const result = '' || 'default'
// console.log(result); // будет default потому что первое выражение ложное а второе истинное и тогда будет default


// const a = 10
// const b = 2

// if (a > b || a === b) {
//   console.log('true'); /// true потому что выражение 1 верно,значит верно все выражение,хоть выражение 2 и возвращает false
// } else {
//   console.log('false');
// }

// const a = 10
// const b = 2

// if (a < b || a !== b) {
//   console.log('true');// без разницы какое выражение верно или нет,если хотя бы одно выражение верно будет возвращено true
// } else {
//   console.log('false');
// }
