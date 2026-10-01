import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'menu-button',
  styleUrl: './menuButton.css',
  templateUrl: './menuButton.html',
})
export class MenuButton {
  name = input.required<string>();
  action = input.required<() => void>();

  onClicked() {
    const action: () => void = this.action();
    action();
  }
}
