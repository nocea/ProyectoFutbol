import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaPartidosComponent } from './vistas/lista-partidos/lista-partidos.component';
import { DetallePartidoComponent } from './vistas/detalle-partido/detalle-partido.component';
import { FormsModule } from '@angular/forms';
import { TodosLosPartidosComponent } from './vistas/todos-los-partidos/todos-los-partidos.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment.development';
import { ContenedorPartidosComponent } from './vistas/contenedor-partidos/contenedor-partidos.component';
import { ListadoComponent } from './vistas/contenedor-partidos/listado/listado.component';
import { DetalleComponent } from './vistas/contenedor-partidos/detalle/detalle.component';
import { MenuComponent } from './vistas/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ListaPartidosComponent,
    DetallePartidoComponent,
    TodosLosPartidosComponent,
    ContenedorPartidosComponent,
    ListadoComponent,
    DetalleComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
