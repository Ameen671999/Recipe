import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService  {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[]  = [
    new Recipe('Briyani' ,
     'This is simply a recipe',
     'https://static.toiimg.com/thumb/54308405.cms?imgsize=510571&width=509&height=340',
      [
        new Ingredient('Meat',2),
        new Ingredient('rice',2)
      ]),
    new Recipe('BBQ' ,
    'This is simply a recipe',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTY0wUDll1CGVmykQVvHQQLR92LN8eAo0rWdQ&usqp=CAU',
     [
      new Ingredient('chikken',2),
      new Ingredient('oil',2)
     ])
  ];//from recipe.model

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];//for routing id
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice())
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice())
  }

  deleteRecipes(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice())
  }


constructor(private slService:ShoppingListService) {}
}

