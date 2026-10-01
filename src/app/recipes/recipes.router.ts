import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { RecipeService } from './recipe.service';
import type { Recipe } from './recipes';

export const recipesResolver: ResolveFn<Recipe[]> = () =>
  inject(RecipeService).getRecipes();