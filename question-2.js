function findProductPrice(products, name) {
  // Your code here
  let low = 0;
  let high = products.length - 1;
  let mid;

  while (high >= low) {
    mid = low + Math.floor((high - low) / 2);
    if (products[mid].name === name) {
      return products[mid].price;
    }
    if (products[mid].name > name) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
];

console.log(findProductPrice(products, "Banana")); // Output: 0.8
console.log(findProductPrice(products, "Durian")); // Output: -1
