// configurar el ts porque aqui voy a usar el servicio

import { Component, OnInit } from '@angular/core'; //TRaer ONIT y Component de angular core
import { RecetasService } from '../../servicio/recetas.service'; //traer el servicio de recetas
import { Fotos } from '../../interfaz/fotos'; //traer la interfaz de fotos

//no tocar
@Component({
  selector: 'app-platos',
  imports: [],
  templateUrl: './platos.component.html',
  styleUrl: './platos.component.css'
})


export class PlatosComponent implements OnInit {
 //on init, cuando se carga
  recetas: Fotos[] = []; // aquí se guardarán las recetas que vienen del servicio con ese formato

  constructor(private recetasService: RecetasService) { } //inyetar servcio, como api

  ngOnInit(): void {
    this.recetasService.getRecetas().subscribe({// subscribe espera, obserbvale
      next: (respuesta) => {
        this.recetas = respuesta.meals;
      },
      error: (error) => {
        console.error('Error al cargar recetas:', error);
      }
    });
  }
}
