import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScrollableCollection, ScrollableCollectionEntry } from '../scrollable-collection/scrollable-collection';

export interface Recipe extends ScrollableCollectionEntry {}

@Component({
  imports: [ScrollableCollection],
  selector: 'app-recipes',
  styleUrl: './recipes.css',
  templateUrl: './recipes.html',
})
export class Recipes {
  private readonly route = inject(ActivatedRoute);
  recipes = signal<Recipe[]>(
    (this.route.snapshot.data['recipes'] as Recipe[] | undefined) ?? [],
  );
}
