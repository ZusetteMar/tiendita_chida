import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Products } from './pages/products/products';

export const routes: Routes = [
{
    path:'home',
    component:Home
},
{
    path: 'products',
    component: Products
},
{
    path: '**',
    redirectTo: "home"
}
];
