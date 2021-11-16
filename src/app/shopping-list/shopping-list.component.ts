import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingridients : Ingridient[]= [];

  constructor(private slService : ShoppingListService) { }

  ngOnInit(): void {
    this.ingridients = this.slService.getIngridient();
    this.slService.ingridientsChange.subscribe
    (
      (ingridient:Ingridient)=>{
        this.ingridients.push(ingridient);
      }
    )
  }

  
}
