

//! задача fizz-buzz - первые два императивных варианта
//
//* в лоб!!
//* через функцию!
// function fizzBuzz() {
//    for (let i = 1; i < 101; i++) {

//       if(i % 3 == 0) {
//         console.log('Fizz');
//       } else if (i % 5 == 0) {
//          console.log('Buzz') 
//       } else if (i % 3 ==0 || i % 5 ==0) {
//          console.log('FizzBuzz')
//       } else {
//      console.log(i)
//       }
//    } 
// }
// console.log(fizzBuzz())
//
//* сразу перебором с консолью!!
for (let i = 1; i < 101; i++) { // цикл

   if(i % 3 == 0) {             // ветвление и последовательность операций
     console.log('Fizz');
   } else if (i % 5 == 0) {
      console.log('Buzz') 
   } else if (i % 3 ==0 && i % 5 ==0) {
      console.log('FizzBuzz')
   } else {
  console.log(i)
   }
}
//
//! FizzBuzz с использование флага!!
//
//* При оформлении стейта всегда используются флаги!
//* вместо прямого задания условий, вынели их в отдельные подпрограммы
//* и каждаяя такая подпрограмма явл флагом
//* флагом явл переменная, которая принимает значение true или false
//* ис видетельтвует о аком-то состоянии системы програмы
//* выполнение флага через функцию тоже допустимо!!
//* фукция выполняет роль флага
//* switch/case - введение флагов в структурное программирование
//* позволяет:
//* повысить читаемость  - условием являются осмысленные названия подпрограмм
//* повышается тестируемость программы - мы можем каждое из условий проверить - ели что-то пойдет не так, мы можем это проверить в тестах.
//* спагети остатся - управляющая контрукция записана более емко - попрежнему синтаксический сахар над условиями
//* и по ути расширение программы заключается в том, чо мы будем добавляь условия
//* м ы не избавились от главной проблемы: мы не сделали код повторно используемым и расширяемым! 
//
//* ФЛАГИ в программах
//* часто используются
//* их ругают - сложные композитные стейты
//* когда много флагов - возникаю непокрытые состояния
//* не все перебираются в коде
//* поэтому , флаг может иметь значение, которое не предусмотренно в программе
//* еще недостаток - глобальный сейт и невозможность изменить флаг
//* потому что место использования флага и мето его определения очь сильно разорваны как правило
//
//* 
function isFizz(n) {
   if(n % 3 === 0) {
      return true;
   }
   return false;
}

function isBuzz(n) {
   if(n % 5 === 0) {
      return true;
   }
   return false;
}

function isFizzBuzz(n) {
   if(n % 3 === 0 && n % 5 === 0) {
      return true;
   }
   return false;
}

for(let i = 0; i < 101; i++) {
   switch(true) {
      case isFizz(i):
         console.log('Fizz');
         break;   
      case isBuzz(i):
         console.log('Buzz');
         break;
      case isFizzBuzz(i):
         console.log('FizzBuzz');
         break;
      default:
         console.log(i)         
   }
}

//! Решение FizzBuzz в функциональном стиле
//* 3 - декларативный вариант 
//
//* функция , котора овзвращает другую функцию!
//* причем вторая функция будет создаваться в рантайме
//* когда мы будем вполнять генератор для Fizz и генератор для Buzz
//* мы замыкание знаение n для числа 3 иил 5
//* и замыкаем w, которое соответствует Fizz и Buzz

//* эта конструкция используетс для того, чтобы создать две конкретные функции, которые будут выводить fizz, buzz или пустую строку

const gen = () => (num) => num % n === 0 ? w : '';
const fizz = gen(3, 'Fizz')
const buzz = gen(5, 'Buzz');

//* а далее мы создам масив чисел таким образом, чтоы показать декларативный подход
//* не использовать структурный подход, не исользоать циклы
//* а именно сгенерировать сначала массив, взять его ключи
//* потом каждый ключ увелчить на 1, так как они начинаюся с 0
//* и тогда получится массив от 1 до 100
//* и дальше пробежаться по каждому значению forEach
//* и в консоле(на экран) вывести (fizz(i) + buzz(i) || i)
//* здесь условие - если у нас не сраотает ни одна функция(физ или баз), на экран выведется пустая строка
//* а пустая строка будет приводиться к булевому значению false
//* и в результате логического или(||), в сравнении с I  ... || i - будет выводиться i (true)

[...Array(99).keys()].map( i => i + 1).forEach(i => console.log(fizz(i) + buzz(i) || i));


//* еще  один вариант
//! Объектно-ориентированное программирование ООП
//
const MAX_NUM = 100;

class Tag /*Implements value*/{
   constructor(_value) {
      this.value = _value;
   }
}

//*  принтер передаем value - и это может быть чо угодно, не только Tag
class Printer {
   constructor(_context) {
      this.context = _context;
   }
   print() {
      console.log(this.context.value);
   }
}

//* условие:
//* уточняем условие и говорим. что это проверка на деление
//* Truthy для того, чтоы делать вложенные стратегии
class DivCondition /* Implements Condition, Truthy*/ {
   constructor(_divider) {
      this.divider = _divider;
   }

   isTruthy(num) { // метод для проверки
      return num % this.divider === 0;
   }
}

//* Стратегия: логическое И (||) реализуется
class AndStrategy /* Implement Strategy, Truthy */ {
   constructor(_conditionsOrStrategies) { //на вход могут быть переданы как набор условий, так и набор стратегий
      this.conditions = _conditionsOrStrategies;
   }

   isTruthy(num) { //метод для проверки
      for(let i in this.conditions) {
         if(!this.conditions[i].isTruthy(num)) {
            return false;
         }
      }
      return true;
   }
}

//* Определем правило
//* правило говорит о том, может ли числу быть сопоставлн какой-то тег!
//* тег и стратегия задаются через параметры - реализация принципа DI
//

class TagNumRule /* Implement Rule */ {
   constructor(_tag, _strategy) {
      this.tag = _tag;
      this.strategy = _strategy;
   }

   isSuccess(num) { //стратегия срабатывает, значит ег успешно может быть назначен на число
      return this.strategy.isTruthy(num)
   }
}

//* создаем коллекцию из тегов(точнее, класс для этой коллекции)
//* и в коллекции реализуем только один метод - find()
class TagNumRulesCollection /* Implements collection */ {
   constructor(_tags) {
      this.tags = _tags;
   }
   //* для того, чтобы не возвращать Null. мы предусматриваем дефолтное значение
   find(num, defaultValue) {
      for(let i in this.tags) {
         if(this.tags[i].isSuccess(num)) {
            return this.tags[i].tag
         }
      }
      return defaultValue;
   }
}

//* Реалиация логики работы!
//* которая будет расширяться, дополняться, не затрагивая предыдущую часть
const numTags = new TagNumRulesCollection([
   new TagNumRule(new Tag('FizzBuzz'), new AndStrategy([new DivCondition(3), new DivCondition(5)])),
   new TagNumRule(new Tag('Fizz'), new AndStrategy([new DivCondition(3)])),
   new TagNumRule(new Tag('Buzz'), new AndStrategy([new DivCondition(5)])),
]);

for(let i = 1; i < MAX_NUM; i++) {
   new Printer(numTags.find(i, new Tag(i))).print();
}

//* PS: в условии у нас конкретное число 3 или 5, поэтому мы не выносим их в константы
//* если бы это был бизнес-случай, то вынесли бы в константу