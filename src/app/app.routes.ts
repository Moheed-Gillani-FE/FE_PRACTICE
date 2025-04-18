import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: ()=> import('./layout/layout.component').then(c => c.LayoutComponent),
        children: [

        ]
    }
];
