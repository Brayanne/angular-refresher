import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe [] = [
        new Recipe(
            'Chile en Nogada', 
            'National dish of Mexico', 
            'https://www.comedera.com/wp-content/uploads/2018/12/chiles-en-nogada.jpg',
            [
                new Ingredient('Pepper', 1),
                new Ingredient('Pomogranate', 1)
            ]),
        new Recipe(
            'Enchiladas', 
            'Tortilla wrapped deliciousness', 
            'https://keviniscooking.com/wp-content/uploads/2021/12/Enchiladas-Rojas-Smoked-Pork-square.jpg',
            [ 
                new Ingredient('Tortillas', 3),
                new Ingredient('Chicken', 1)
            ])
      ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() { 
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}