import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencias: any[];

  constructor() {
    this.listaTransferencias = [];
  }

  get transferencias(){
    return this.listaTransferencias;
  }

  adiciona(transferencia: any){
    this.hidrata(transferencia);
    this.transferencias.push(transferencia);
  }

  hidrata(transferencia: any){
    transferencia.data = new Date();
  }
}
