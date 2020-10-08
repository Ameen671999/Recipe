import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[]  = [
    new Recipe('A Test Recipe' , 'This is simply a recipe', 'https://static.toiimg.com/thumb/54308405.cms?imgsize=510571&width=509&height=340'),
    new Recipe('A Test Recipe' , 'This is simply a recipe', 'https://static.toiimg.com/thumb/54308405.cms?imgsize=510571&width=509&height=340')
  ];//from recipe.model

  onRecipeSelected(recipe: Recipe) {
  this.recipeWasSelected.emit(recipe);
}

  constructor() { }

  ngOnInit(): void {
  }

}
