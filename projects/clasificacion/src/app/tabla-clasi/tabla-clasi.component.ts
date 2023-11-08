import { Component } from '@angular/core';
import { equipos } from '../equipos-interface';
import { ClasificacionService } from '../clasificacion.service';
@Component({
  selector: 'app-tabla-clasi',
  templateUrl: './tabla-clasi.component.html',
  styleUrls: ['./tabla-clasi.component.css']
})
export class TablaClasiComponent {
  constructor(private clasificacionService: ClasificacionService) {}
  datos:equipos[]=[];
  getEquipos(): void {
    this.datos = this.clasificacionService.getEquipos();
  }
  ngOnInit(): void {
    this.getEquipos();
  }
}
