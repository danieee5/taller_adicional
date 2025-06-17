import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // ← IMPORTANTE para que funcione routerLink

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule], // ← AGREGA ESTO
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {}