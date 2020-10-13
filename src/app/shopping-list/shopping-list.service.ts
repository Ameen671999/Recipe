import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model'

export class ShoppingListService {
  ingredientsChanged  = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Orange',7)
  ];

  getIngredients() {
    return this.ingredients.slice(); //using slice we get only copy
  }

  addIngredient(ingredient:Ingredient) {
     this.ingredients.push(ingredient);
     this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients:Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice())
  }


}
