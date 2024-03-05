import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/Accueil/Accueil.component';
import { PanierComponent } from './pages/panier/panier.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';


export const routes: Routes = [
    { path: '', redirectTo: 'accueil', pathMatch: 'full' },
    {path : 'accueil', component : AccueilComponent},
    {path : 'panier', component : PanierComponent},
    {path : 'checkout', component : CheckoutComponent}
];
