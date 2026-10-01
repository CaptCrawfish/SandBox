import { Component, input } from '@angular/core';

export interface Column {
  type: 'image' | 'text';
  id: number;
  name: string;
  content: string;
  class: string;
  weight: number;
}

@Component({
  imports: [],
  selector: 'scrollable-item',
  styleUrl: './scrollable-item.css',
  templateUrl: './scrollable-item.html',
})
export class ScrollableItem {
  columns = input.required<Column[]>();

  getTotalWeight(): number {
    return this.columns().reduce((sum, column) => sum + column.weight, 0);
  }

  getWidth(column: Column): string {
    const totalWeight = this.getTotalWeight();
    return totalWeight > 0 ? `${(column.weight / totalWeight) * 100}%` : '0%';
  }
}
