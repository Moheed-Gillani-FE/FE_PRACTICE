import { Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { LayoutComponent } from './layout/layout.component';


export const routes: Routes = [
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: LoginComponent },
    {
        path: '',
        loadComponent: ()=> import('./layout/layout.component').then(c => c.LayoutComponent),
        children: [

        ]
    }
];
