import { NgModule } from '@angular/core';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { DrawerModule } from 'primeng/drawer';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { Toolbar } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    SideMenuComponent, 
    ToolbarComponent
  ],
  imports: [
    DrawerModule, 
    Toolbar, 
    AvatarModule, 
    ButtonModule,
    MenuModule,
    RouterModule
  ],
  exports: [
    SideMenuComponent, 
    ToolbarComponent
  ]
})
export class SharedModule { }