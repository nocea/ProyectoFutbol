import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Partido } from 'projects/mis-equipos/src/lib/partidos-mock';

@Component({
  selector: 'app-contenedor-partidos',
  templateUrl: './contenedor-partidos.component.html',
  styleUrls: ['./contenedor-partidos.component.css']
})
export class ContenedorPartidosComponent {

  title='Gestión de Partidos y Jornadas';

  constructor(){}

  
    
  /* // Método para mostrar si el 
        servicio es capaz de guardar un partido
        Lo comentamos pues era para una demostració
  setPartido(){
    this.fbs.setPartido(this.partido)
      .then(() => console.log('Partido guardado'))
      .catch((error: any) => console.error(error));
  } */
}
