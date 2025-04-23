import { Component, signal, ViewEncapsulation, WritableSignal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MENU_ITEMS } from '../../../models/app.const';

@Component({
  selector: 'app-side-menu',
  standalone: false,
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SideMenuComponent {
  
  public items: WritableSignal<MenuItem[]> = signal<MenuItem[]>(MENU_ITEMS);
}
