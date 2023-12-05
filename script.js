


var userName = prompt('Введите свое имя')
console.log('Меня зовут ' + userName)

var howManyYears = +prompt('Введите свой возраст')
console.log('Вам ' + howManyYears + ' лет')

var one = +prompt('Решите пример 6 + 3 = ?')
console.log('Пример(1) ' + '6 + 3 = 9  ' + 'Ваш ответ = ' + one )

var two = +prompt('Решите пример 20 - 5 = ?')
console.log('Пример(2) ' + '20 - 5 = 15  ' + 'Ваш ответ = ' + two)

var three = +prompt('Решите пример 15 * 2 = ?')
console.log('Пример(3) ' + '15 * 2 = 30 ' + 'Ваш ответ = ' + three)

var four = +prompt('Решите пример 8 / 4 = ?')
console.log('Пример(4) ' + '8 / 4 = 2 ' + 'Ваш ответ = ' + four)

var five = +prompt('Решите пример 10 % 3 = ?')
console.log('Пример(5) ' + '10 % 3 = 1 ' + 'Ваш ответ = ' + five)

 
var pX = +prompt('Введите первую переменную')
var pY = +prompt('Ведите вторую переменную')
var pZ = +prompt('Введите третью переменную')
var pXYZ = +prompt('Введите среднее число')

var answer = (pX + pY + pZ) / 3

console.log ('Ваши переменные ' + pX + ' / ' + pY + ' / ' + pZ + '  Среднее число ' + pXYZ + '  Правильный ответ = ' + answer)

alert('Откройте консоль для просмотра ответов')
