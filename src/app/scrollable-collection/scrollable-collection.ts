import { Component, input } from '@angular/core';
import { ScrollableItem, Column } from './scrollable-item/scrollable-item';

export interface ScrollableCollectionEntry {
  id: string;
  columns: Column[];
}

@Component({
  imports: [ScrollableItem],
  selector: 'scrollable-collection',
  styleUrl: './scrollable-collection.css',
  templateUrl: './scrollable-collection.html',
})
export class ScrollableCollection {
  entries = input<ScrollableCollectionEntry[]>([]);

  protected hasImage(entry: ScrollableCollectionEntry): boolean {
    return entry.columns.some((column) => column.type === 'image');
  }
}
