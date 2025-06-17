import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //para leer url. CONFIGURAR EN CONFIG PAR QUE ESTE LITO O NO SIRVE
import { Observable } from 'rxjs'; //esperar a que venga informacion
import { Fotos } from '../interfaz/fotos'; //traaer la interfaz en el servicio

@Injectable({
  providedIn: 'root'
})

// 1. importar
// 2. definir private url
// 3. a partir de aqui, en el constructor: poner el http
// 4. crear un metodo que obtiene las receta
// 4.1. el metodo devuelve un observable del objeto del json y su interfaz con la forma del json, lista. luego retorna, del http la lista de objetos con la interfaz de esa forma


export class RecetasService {

  private apiURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

  // en el constructor entran los servicios que se van a usar y que las clases necesitan
  constructor(private http: HttpClient) { } // inyectar el servicio HttpClient

    getRecetas(): Observable<{ meals: Fotos[] }> { //se usa la interfaz
      return this.http.get<{ meals: Fotos[] }>(this.apiURL);
  }
}
