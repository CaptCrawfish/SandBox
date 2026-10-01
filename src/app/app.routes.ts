import { Routes } from '@angular/router';
import { Recipes } from './recipes/recipes';
import { recipesResolver } from './recipes/recipes.router';

export const routes: Routes = [
  {
    path: 'recipes',
    component: Recipes,
    resolve: {
      recipes: recipesResolver
    }
  },
];