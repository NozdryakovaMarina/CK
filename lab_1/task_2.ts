/*
 * Вариант №2. Реализуйте стрелочную функцию, возвращающую
 * строку, составленную из 3х строк (см. конкатенация), передаваемых
 * в качестве параметров. Выполните её вызов для
 * подтверждения корректности логики её работы
 */
let sumFunc = (str1: string, str2: string, str3: string) => str1 + str2 + str3;

const resSumFunc = sumFunc("Something for ", "a function ", "test.")
console.log(resSumFunc)