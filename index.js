const array = [[12,3,4],[0,0,0],[23,5,6],[123,'6',-5],[0,'0','O',1],['test']]

// Напишите функцию, которая считает сумму чисел в каждом вложенном массиве
// и возвращает массив с суммами этих чисел в качестве значений
// если вы встречаете цифру в виде строки, ее нужно нормализовать и посчитать тоже
// выведите итоговый массив в консоль

let vvv = array.map(p =>
    p.reduce((iter, currentValue) => !isNaN(parseInt(currentValue)) ? parseInt(iter) + parseInt(currentValue) : iter + '')
).filter(p => !isNaN(p))

let aaa = vvv.map(l => [l])
console.log(aaa)