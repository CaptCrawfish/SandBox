import { inject, Injectable } from '@angular/core';
import type { Recipe } from './recipes';

@Injectable({ providedIn: 'root' })
export class RecipeService {

	recipe : Recipe = {id: '1', columns: [
                {type: 'text', id: 1, name: 'Title', content: 'Spaghetti Bolognese', class: 'title', weight: 2},
                {type: 'text', id: 2, name: 'Description', content: 'A classic Italian pasta dish with rich meat sauce.', class: 'description', weight: 3},
			]}
	getRecipes(): Recipe[] {
		// some dummy recipe data
		//create a huge list of these recipes to test the scrollable collection
		let output = [];
		for(let i = 0; i < 100; i++) {
			output.push({...this.recipe, id: `${i + 1}`});
		}
		return output;
	}
}
