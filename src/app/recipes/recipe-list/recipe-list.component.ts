import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]  = [
    new Recipe('A Test Recipe' , 'This is simply a recipe', 'https://www.mapsofindia.com/ci-moi-images/my-india/2019/08/chicken-biryani.jpg'),
    new Recipe('A Test Recipe' , 'This is simply a recipe', 'https://www.mapsofindia.com/ci-moi-images/my-india/2019/08/chicken-biryani.jpg')
  ];//from recipe.model

  constructor() { }

  ngOnInit(): void {
  }

}
