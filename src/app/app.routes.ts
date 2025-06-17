import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlatosComponent } from './components/platos/platos.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'platos', component: PlatosComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];