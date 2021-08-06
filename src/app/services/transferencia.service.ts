import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from '../models/transferencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencias: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencias = [];
  }

  get transferencias(){
    return this.listaTransferencias;
  }

  todasTransferencias(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adiciona(transferencia: Transferencia): Observable<Transferencia>{
    this.hidrata(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia)
  }

  hidrata(transferencia: any){
    transferencia.data = new Date();
  }
}
