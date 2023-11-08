import { Component, OnInit } from '@angular/core';
import { Partido } from 'projects/mis-equipos/src/lib/partidos-mock';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  partidos: Partido[] = [];
  
  constructor(
    private fbs: FirebaseService
  ){}

  ngOnInit(){
    this.fbs.getPartidos().subscribe( res => {
      this.partidos = res;
      console.log(this.partidos);
    });
  }
  
}
