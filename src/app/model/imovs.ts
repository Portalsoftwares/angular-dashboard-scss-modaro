export class Imovs {
  id!: number;
  name: string;
  type: string;
  price: number;

  constructor(id: number, name: string, type: string, totalvalue: number) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.price = totalvalue;
  }
}
