import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { BasketPageComponent } from './pages/basket-page/basket-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { AboutmePageComponent } from './pages/aboutme-page/aboutme-page.component';
import {UsersOrdersComponent} from "./pages/users-orders/users-orders.component";



export const routes: Routes = [
    {
        path: '', component:HomeComponent
    },
    {path: 'login-page', component: LoginPageComponent},
    {
        path:'register-page', component:RegisterPageComponent
    },
    {
        path: 'basket-page', component:BasketPageComponent
    },
    {
        path:'products/:id', component: ProductPageComponent
    },
    {
        path: 'order-page', component: OrderPageComponent
    },
   {
    path:'aboutme-page', component: AboutmePageComponent
   },
  {
    path: 'users-orders',component:UsersOrdersComponent
  }
];
