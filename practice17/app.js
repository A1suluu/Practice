console.log("hello") 

// console  - объект
// . - точечная запись
// log - метод
// () - вызов метода
// "hello" - значение типа String , аргумент со значением типа String

console.dir()    // отображает все свойста объекта
console.table()  // отображает все свойти объекта в табличном виде

// выражение всегда возвращает значение
// "abc"
// 10
// 5 + 2
// "Good" + "evening"
// myFunction(c,d)



// переменные  дают возможность повторного доступа к значениям

// PascalCase    // типы и классы PascalCase 
// DB_PASSWORD  // значения известны до запуска прилоэения и не меняются 
// camelCase   // все остальные переменные

let a            // объевление перменной
const c = 10    // объевление и присваивание значения
a = true       // присваивание значения



// примитивные типы переменных. их 6

// string , Boolean , Number, null, undefined , Symbol

// ссыловный тип 

// object 


// динамизация . типизация

// статическая и  динамическая типизация

// string a = "abc"       a = "abc"   // String   
// int b = 10             a = 10     // Number
// b = "xyz"   // error

// JavaSCript = динамически типизируемый язык

/*
Объект - это набор свойвст "имя : значение"
Объект - тип значение
Объект - тип переменной 
*/









//================== Классы и прототипы ==================

/*
Классы позволяют создавать прототипы для объектов 

На  основании прототипов создаются экземпляры

экземпляры могут иметь собственные свойства и методы 
экземпляры наследуют свойства и методы прототипов
*/

// класс

 class Comment {
     constructor(text) {                          // метод constructor, к конкретному экземплыму добавляем параметр или свойство text
         this.text = text                        // свойство класса 
         this.votexQty = 0
     }
     upvote () {    votexQty                    // метод, функция
         this.votexQty += 1                    // увеличиваем класс 
     }
 }

 const firstComment = new Comment("First Comment")   // дали значение для свойства text

 console.log(firstComment)



 // Ассинхронность, промиссы