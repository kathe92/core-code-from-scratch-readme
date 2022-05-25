import { v4 as uuidv4 } from 'uuid'; //Library for the unique id

export class MenuElement {
  id: string;
  name: string;
  price: number;
  emoji: string;

  constructor(name: string, price: number, emoji: string) {
    this.id = uuidv4(); //To assign a unique id for that object
    this.name = name;
    this.price = price;
    this.emoji = emoji;
  }

  //The printOption method should return a string with the following format: <NAME_OF_THE_OPTION>....$<PRICE_OF_THE_OPTION>
  printOption() {
    return `${this.name}....$${this.price}`;
  }
}