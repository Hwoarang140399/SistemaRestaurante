export class Bebida {
  public id: string;
  public name: string;
  public price: string;
  public image: string;

  constructor(id, name, price, image) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
  }
}
