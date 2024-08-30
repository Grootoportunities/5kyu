// function deepFreeze(obj) {
//   if (obj === null || typeof obj !== "object") {
//     return obj;
//   }
//
//   // Получаем имена свойств объекта
//   const propNames = Object.getOwnPropertyNames(obj);
//
//   // Замораживаем свойства перед заморозкой самого объекта
//   propNames.forEach((name) => {
//     const prop = obj[name];
//     if (typeof prop === "object" && prop !== null) {
//       deepFreeze(prop);
//     }
//   });
//
//   // Замораживаем сам объект
//   return Object.freeze(obj);
// }
//
// function SortedImmutableArray(arr) {
//   if (!Array.isArray(arr)) {
//     throw new Error("Input must be an array");
//   }
//
//   // Создаем копию массива и сортируем его
//   const sortedArray = [...arr].sort((a, b) => a.id - b.id);
//
//   // Глубоко замораживаем каждый объект в массиве
//   const frozenSortedArray = sortedArray.map((item) => deepFreeze(item));
//
//   // Создаем объект с методом, возвращающим отсортированный и защищенный массив
//   const immutableObject = {
//     getSortedArray: () => Object.freeze([...frozenSortedArray]),
//   };
//
//   // Замораживаем сам объект
//   return Object.freeze(immutableObject);
// }
//
// // Пример использования:
// const inputArray = [
//   { id: 3, name: "Charlie" },
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
// ];
//
// const sortedImmutable = new SortedImmutableArray(inputArray);
// const sortedArray = sortedImmutable.getSortedArray();
//
// console.log(sortedArray);
// // Вывод: [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }]
//
// // Попытка изменить массив приведет к ошибке
// // sortedArray[0].id = 4; // TypeError: Cannot assign to read only property 'id' of object
//
// // Попытка изменить метод объекта приведет к ошибке
// // sortedImmutable.getSortedArray = () => []; // TypeError: Cannot add property getSortedArray, object is not extensible

function ImmutableObject(arr) {
  return {
    getGuardedSortedArray: () =>
      Object.freeze(
        arr.sort((a, b) => a.id - b.id).map((el) => Object.freeze(el)),
      ),
  };
}

const immutableObject = new ImmutableObject([
  { id: 3, name: "Charlie" },
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
]);
const sortedArray = immutableObject.getGuardedSortedArray();

sortedArray[0].name = "William";
sortedArray[1].id = 4;

console.log(sortedArray);
