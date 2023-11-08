import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, query, setDoc, updateDoc, where } from '@angular/fire/firestore';
import { Partido } from 'projects/mis-equipos/src/lib/partidos-mock';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private fb: Firestore
  ) { }

  // Todos los partidos
  getPartidos(): Observable <Partido[]> {
    const partidosRef = collection(this.fb,'partido');
    return collectionData(partidosRef, { idField: 'id'}) as Observable<Partido[]>
  }

  // Crea un partido
  setPartido(partido: Partido) {
    const partidoRef = collection(this.fb,`partido`);
    return addDoc(partidoRef, partido);
  }

  // Para completar el CRUD faltan: deletePartido, updatePartido y get 1 partido
  deletePartido(partido: Partido){
    const partidoDocRef = doc(this.fb, `partido/${partido.id}`);
    return deleteDoc(partidoDocRef);
  }

  getPartidoByID(id: string) {
    const partidoRef = doc(this.fb, `partido/${id}`);
    return docData(partidoRef, {idField: 'id'}) as Observable<Partido>;
  }

  // Forma de hacer las consultas a la base de datos con angular/fire 7
  getPartidoByOther(campo: string, valor: any){
    const collectionRef = collection(this.fb, 'partido');
    const queryRef = query(collectionRef, where(campo, '==', valor));
    return collectionData(queryRef) as Observable<Partido[]>;
  }

  updatePartido(partido: Partido) {
    const partidoDOcRef = doc(this.fb, `partido/${partido.id}`);
    return setDoc(partidoDOcRef, partido);
  }

  modifyResultadoPartido(partido: Partido, golesLocal: number, golesVisitante: number) {
    const partidoDocRef = doc(this.fb, `partido/${partido.id}`);
    return updateDoc(partidoDocRef, { golesLocal: golesLocal, golesVisitante: golesVisitante });
  }
}
