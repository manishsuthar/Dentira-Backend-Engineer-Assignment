export default class Product {
  constructor(name, image, price) {
    this.name = name;
    this.image = image;
    this.price = price;
  }
  name: string;
  image: string;
  price: number;
}
