console.log('08');
const firstProductName = 'T-shirt';
const firstProductPrice = 40;
const firstProductQuantity = 2;

const secondProductName = 'Cap';
const secondProductPrice = 35;
const secondProductQuantity = 2;

const firstProduct = {}; // object
// properties propiedades
firstProduct.name = 'T-shirt';
firstProduct.price = 40;
firstProduct.quantity = 2;
firstProduct.available = false;
firstProduct.sizes = ['L', 'M'];

console.log(firstProduct);
console.log(typeof firstProduct);

const secondProduct = {
  name: 'Cap',
  price: secondProductPrice,
  quantity: secondProductQuantity,
  available: true,
  sizes: ['S', 'M', 'L'],
  'country-store': 'ES',
  attributes: {
    color: 'red',
    material: 'cotton'
  }
};

console.log(secondProduct.name);
console.log(secondProduct.sizes);
console.log(secondProduct['country-store']);
const key = 'quantity';
console.log(secondProduct[key]);

const getProductAttribute = (product, key) => {
  return product[key];
};

console.log(getProductAttribute(firstProduct, 'country-store')); // undefined
console.log(getProductAttribute(secondProduct, 'price')); // 35

secondProduct.attributes = {
  color: 'red',
  material: 'cotton'
};

console.log(Object.keys(secondProduct));

const products = [
  firstProduct,
  {
    name: 'shoes',
    price: 12,
  },
];

const shows = [
  {
    id: 1,
    name: 'Under the dome',
    genres: ['Drama', 'Science-Fiction', 'Thriller']
  }, /// 0
  {
    id: 2,
    name: 'Game of thrones',
    genres: ['Drama', 'Thriller'],
    season: {
      title: 'season 1'
    },
  } /// 1
];

delete secondProduct.attributes;
console.log(secondProduct);

const firstShow = shows[0];
const nameFirstShow = firstShow.name;
console.log(nameFirstShow);


