import { Component } from '@angular/core';
import { Partido } from 'projects/mis-equipos/src/lib/partidos-mock';
import { PartidosService } from 'projects/mis-equipos/src/lib/partidos.service';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-lista-partidos',
  templateUrl: './lista-partidos.component.html',
  styleUrls: ['./lista-partidos.component.css']
})
export class ListaPartidosComponent {

  // Propiedad para guardar los partidos
  listaPartidos: Partido[] = [];

  constructor(private fbs: FirebaseService) {
  }

  ngOnInit() {
    this.pedirJornada(1);
  }

  // Pedir el número de Jornada para buscar esos partidos
  pedirJornada(i: number) {
    //this.fbs.getPartidos().subscribe( res => this.listaPartidos = res);
    this.fbs.getPartidoByOther('jornada', i)
      .subscribe( res => {
        this.listaPartidos = res;
        console.log(this.listaPartidos);
      })
  }

}
