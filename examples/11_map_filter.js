console.log('11');

const numbers = [20, 50, 75];

let newList = [];

for (let number of numbers) { // for (let index = 0; index < numbers.length; i++)
  newList.push(number * 2);
}

console.log(newList);

function double (number, index, list) {
  conso.log(number, index, list);
  return number * 2;
}

//      0   1    2 
// map [20, 50, 75]
/*
const newListWithMap = numbers.map(function (number, index) {
  console.log(number, 'index: ', index);
  return number * 2;
});
*/
const doubleFn = number => number * 2;
const newListWithMap = numbers.map(number => number * 2);

console.log(newListWithMap);

const filterList = numbers.filter(function (number) {
  console.log('dentro del filter', number);
  return number < 50;
});

const filterListV2 = numbers.filter(number => number < 50);

console.log(filterListV2);

const books = [
  { title: '1984', author: 'George Orwell', year: 1949 },
  {
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel García Márquez',
    year: 1967,
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: 'J.K. Rowling',
    year: 1997,
  },
  { title: 'The Da Vinci Code', author: 'Dan Brown', year: 2003 },
  { title: 'Twilight', author: 'Stephenie Meyer', year: 2005 },
  { title: 'The Hunger Games', author: 'Suzanne Collins', year: 2008 },
];

/*
old version
let books2000 = books.filter(function (book) {
  return book.year > 2000;
});
console.log(books2000);
books2000 = books2000.map(function (book) {
  return book.title;
});
*/

const books2000 = books.filter(book => book.year > 2000).map(({ title }) => title).join(', ');
console.log(`El listado es ${books2000}`);


