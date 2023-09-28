///// Классы

/// Создали класс Comment у него есть 2 метода это constructor и upvote. constructor вызывается только когда мы создаем новый экземпляр класса. Отсальные методы в данном случае у нас он upvote,будут наследоватся каждым экземпляром класса Comment
///Пример 1
// class Comment {
//   constructor(text) { /// методы классов // синтаксис такой же как и методы объектов
//     this.text = text /// перменная this указывает на экземпляр класса
//     this.votesQty = 0 // по умолчанию делаем значение 0
//   }

//   upvote() {
//     this.votesQty += 1
//   }
// }



// const firstComment = new Comment('First comment') // создаем экземпляр на основе нашего класса Comment
// console.log(firstComment);

// const res = firstComment instanceof Comment /// проверяем экземпляр относится ли он к типу класса Comment  // true
// const res2 = firstComment instanceof Object /// проверяем экземпляр относится ли он к глобальному типу Object // true
// const res3 = firstComment instanceof Array /// если мы проверим экземпляр относится ли он к массиву то будет false потому что он не наследует свойства массива

// firstComment.upvote() /// мы можем вызывать метод класса Comment для каждого экземпляра
// console.log(firstComment.votesQty);

// firstComment.hasOwnProperty('text') /// проверяем есть ли у экземпляра свойство text будет true
// firstComment.hasOwnProperty('upvote') // проверяем есть ли у экзмепляра свойство upvote,нет потому что это метод класса,этот метод не собственный он лишь наследуется от класса


// Пример 2
// class Person {
//   constructor(name, age) { /// в name и age мы передаем значения свойств объекта
//     this.name = name /// первое name это ключ свойства объекта второе это значение свойства объекта
//     this.age = age /// все эти свойства будут наследоваться каждым экземпляром который создан на основе класса
//   }
// }

// const newPerson = new Person('Bob',12) // создаем экземпляр на основе класса Person
// console.log(newPerson);

// class Person {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//     this.handler = 0
//   }

//   upHandler() {
//     this.handler += 2
//   }
// }


// const newPerson = new Person('bob', 22)
// console.log(newPerson);

// newPerson.upHandler()
// console.log(newPerson.handler);

// const res1 = newPerson instanceof Person
// console.log(res1);

// const res2 = newPerson instanceof Object
// console.log(res2);


///// Статитческие методы в классе

// class Comment {
//   constructor(text) {
//     this.text = text
//     this.votesQty = 0
//   }

//   upvote() {
//     this.votesQty += 1
//   }

//   static mergeComments(first, second) { // такой метод не наследуются экземплярами,но он доступен как свойство класса Comment
//     return `${first} ${second}`
//   }
// }

// Comment.mergeComments('first comment', 'second comment')

/// Расширение других классов

// class Person {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//     this.counter = 0
//   }

//   upCounter() {
//     this.counter += 1
//   }

//   static concatString(text, text2) {
//     return `Hi ${text} and ${text2}   `
//   }
// }

// const newPerson = new Person('bob', 22)
// newPerson.upCounter()
// newPerson.upCounter()
// newPerson.upCounter()
// newPerson.upCounter()
// console.log(newPerson);

// const newPerson2 = new Person('Alice', 42)

// newPerson2.upCounter()
// newPerson2.upCounter()
// console.log(newPerson2);


// const result = Person.concatString('buy', 'die')
// console.log(result);


///////////////////////


// class NumbersArr extends Array {
//   sum() {
//     return this.reduce((el, acc) => acc += el, 0)
//   }
// }

// const myArr = new NumbersArr(10, 11, 12)
// const myArrSum = myArr.map((e) => e += 1)
// console.log(myArrSum);



// const myArr2 = new NumbersArr(1, 3, 4)
// const res2 = myArr2.sum()
// console.log(res2);

