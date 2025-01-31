/*
 * Скопируйте и выполните преобразование объекта data к формату JSON в
 * виде строки. Результат преобразования следует вывести в консоль.
 */
interface Entity {
    id: number;
}

interface ToJsonStringify extends
    Entity {
    e1: string;
    e2: string;
}

const data: ToJsonStringify = {
    id: 2,
    e1: "Поле 1",
    e2: "Поле 2",
  };

const jsonData = JSON.stringify(data);
 
console.log(jsonData);
console.log(typeof jsonData); 