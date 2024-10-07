function pluralizeRecords(n) {
    if (n % 1 != 0) return "Число должно быть целым!";
    if (n < 0) return "Число должно быть неотрицательным!";

    /*
     1 - запись
     2, 3, 4 - записи
     5, 6, 7, 8, 9, 0 - записей
    */

    let lastdigit = n%10;
    if (lastdigit === 1) return "В результате выполнения запроса была найдена " + n + " запись";
    if (lastdigit >= 2 && lastdigit <= 4) return "В результате выполнения запроса было найдено " + n + " записи";
    if ( (lastdigit >= 5 && lastdigit <= 9) || lastdigit === 0) return "В результате выполнения запроса было найдено " + n + " записей";
}

console.log(pluralizeRecords(0))
console.log(pluralizeRecords(1))
console.log(pluralizeRecords(2))
console.log(pluralizeRecords(3))
console.log(pluralizeRecords(4))
console.log(pluralizeRecords(5))
console.log(pluralizeRecords(6))
console.log(pluralizeRecords(7))
console.log(pluralizeRecords(8))
console.log(pluralizeRecords(9))

console.log(pluralizeRecords(121))
console.log(pluralizeRecords(252))
console.log(pluralizeRecords(200))