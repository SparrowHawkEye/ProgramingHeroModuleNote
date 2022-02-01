const phones = [
  {
    name: 'iPhone X',
    price: 799,
    camera: 12,
    storage: 64
  },
  {
    name: "samsung S10",
    price: 699,
    camera: 12,
    storage: 16
  },
  {
    name: 'xiaomi Redmi Note 8',
    price: 499,
    camera: 6,
    storage: 2
  },
  {
    name: 'huawei P30',
    price: 459,
    camera: 8,
    storage: 4 },
]
let cheapest = phones[0];
for (const phone of phones) {
  if (phone.price < cheapest.price) {
    cheapest = phone;
  }
}
console.log(cheapest);