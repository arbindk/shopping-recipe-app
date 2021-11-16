import { EventEmitter } from "@angular/core";
import { Ingridient } from "../shared/ingridient.model";

export class ShoppingListService {
  ingridientsChange = new EventEmitter<Ingridient[]>();

  ingridients: Ingridient[] = [
    new Ingridient('Apples', 5),
    new Ingridient('Tomatoes', 10),
  ];

  getIngridient() {
    return this.ingridients.slice();
  }
  addIngridient(ingridient: Ingridient) {
    this.ingridients.push(ingridient);
    this.ingridientsChange.emit(this.ingridients.slice());
  }

  addIngridients(ingridients: Ingridient[]) {
    // for (let ingridient of ingridients) {
    // this.addIngridient(ingridient);
    // }
    this.ingridients.push(...ingridients);
    this.ingridientsChange.emit(this.ingridients.slice());
  }
}