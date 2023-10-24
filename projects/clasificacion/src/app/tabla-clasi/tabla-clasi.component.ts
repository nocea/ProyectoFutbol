import { Component } from '@angular/core';
import { equipos } from '../equipos-interface';
import { DATOS } from '../mock-datosclasificacion';
@Component({
  selector: 'app-tabla-clasi',
  templateUrl: './tabla-clasi.component.html',
  styleUrls: ['./tabla-clasi.component.css']
})
export class TablaClasiComponent {
  datos=DATOS;
}
