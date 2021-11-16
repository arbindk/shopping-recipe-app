import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.modle';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe;
  id : number = -1;

  constructor(private recipeService:RecipeService, private route:ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params : Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }
  onAddToShoppingList()
  {
    this.recipeService.addIngridientsToShoppingList(this.recipe.ingridients);
  }

  onRecipeEdit()
  {
    //this.router.navigate(['edit'],{relativeTo:this.route});
    this.router.navigate(['../',this.id, 'edit'],{relativeTo:this.route});//complex method not needed here
  }
}
