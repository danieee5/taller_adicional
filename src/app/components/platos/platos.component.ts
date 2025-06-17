// configurar el ts porque aqui voy a usar el servicio

import { Component, OnInit } from '@angular/core'; //TRaer ONIT y Component de angular core
import { RecetasService } from '../../servicio/recetas.service'; //traer el servicio de recetas
import { Fotos } from '../../interfaz/fotos'; //traer la interfaz de fotos
import { CommonModule } from '@angular/common'; //para usar ngIf y ngFor en el html


//no tocar
@Component({
  selector: 'app-platos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})


export class PlatosComponent implements OnInit {
 //on init, cuando se carga
  recetas: Fotos[] = []; // aquí se guardarán las recetas que vienen del servicio con ese formato

  constructor(private recetasService: RecetasService) { } //inyetar servcio, como api

cargando: boolean = true;

  ngOnInit(): void {
    this.recetasService.getRecetas().subscribe({
      next: (respuesta) => {
        this.recetas = respuesta.meals;
        this.cargando = false;  // <- marca que ya cargó
      },
      error: (error) => {
        console.error('Error al cargar recetas:', error);
        this.cargando = false;
      }
    });
  }
}