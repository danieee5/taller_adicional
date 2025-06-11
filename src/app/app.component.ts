import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { PlatosComponent } from './components/platos/platos.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    PlatosComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taller_adicional';
}
