import { Injectable } from '@angular/core';
import { DATOS } from './mock-datosclasificacion';
import { equipos } from './equipos-interface';

@Injectable({
  providedIn: 'root'
})
export class ClasificacionService {

  constructor() { }
  getEquipos():equipos[]{
    return DATOS;
  }
}
