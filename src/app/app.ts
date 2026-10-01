import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AppMenu, MenuItem } from './appMenu/appMenu';
import { ScrollableCollection } from './scrollable-collection/scrollable-collection';

@Component({
  imports: [AppMenu, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  private readonly router: Router = inject(Router);
  protected readonly menuExpanded = signal(false);
  protected readonly entries: MenuItem[] = [
    {'name': 'Recipes', "action": () => this.router.navigateByUrl('/recipes')},
    {'name': 'Search', "action": () => this.router.navigateByUrl('/search')},
    {'name': 'Bartender', "action": () => this.router.navigateByUrl('/bartender')}
  ];

  protected setMenuExpanded(expanded: boolean) {
    this.menuExpanded.set(expanded);
  }
}
