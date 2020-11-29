 
// Задача 5-3
// использование методов класса
// Напиши класс Storage, который будет создавать объекты для управления складом товаров.
// При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получает товар и, если он есть, удаляет его из текущих

const Storage  = function (items) {
    
    this.items = items;

}
// console.log(typeof Storage);
// 'function'
Storage.prototype.getItems = function (items) {
    return this.items;

    
}
Storage.prototype.addItem = function (item) {
    let result = this.items.push(item);
    // console.log(result);
    return result;   
}
Storage.prototype.removeItem = function (item) {
      
    const remove = this.items.indexOf(item);
    return this.items.splice(remove, 1);
           
    
}
const goods = [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
];

 const storage = new Storage(goods);
  console.log(storage.getItems());
// // 


storage.addItem('Дроид');
  console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
//   'Дроид'
// ] */

storage.removeItem('Пролонгер');
 console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */
