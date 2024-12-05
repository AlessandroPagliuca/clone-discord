import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: ()=> import('./core/views/home-page/home-page.component').then( c => c.HomePageComponent),
    }
];
