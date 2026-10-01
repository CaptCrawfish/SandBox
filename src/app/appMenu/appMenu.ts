import { Component, input, output } from '@angular/core';
import { MenuButton } from './menuButton/menuButton';

export interface MenuItem {
  name: string;
  action: () => void;
}

@Component({
  imports: [MenuButton],
  selector: 'app-menu',
  styleUrl: './appMenu.css',
  templateUrl: './appMenu.html',
})
export class AppMenu {
  entries = input<MenuItem[]>();
  expanded = input(false);
  expandedChange = output<boolean>();

  protected toggleMenu() {
    this.expandedChange.emit(!this.expanded());
  }
}
