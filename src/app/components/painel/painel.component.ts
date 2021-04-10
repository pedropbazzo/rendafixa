import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'di-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  aporteInicial : number = 100;
  aporteMensal: number = 100;
  duracaoEmAnos: number = 2;

  anoPrevisto: Date;

  taxaCDB: number = 0.95;
  taxaCDI: number = 0.14;

  constructor() { }

  private atualizarAnoPrevisto() {
    this.anoPrevisto.setFullYear(
      new Date().getFullYear()+this.duracaoEmAnos
    );
  }

  ngOnInit(): void {
    this.anoPrevisto = new Date();
    this.atualizarAnoPrevisto();
  }


  get saldoPrevisto() {
    let saldoAux = this.aporteInicial + (this.aporteMensal * (this.duracaoEmAnos*12));
    saldoAux = saldoAux + (saldoAux* this.taxaAnual);
    return saldoAux;
  }

  get taxaAnual() {
    return this.taxaCDI * this.taxaCDB;
  }

  get totalInvestido() {
    return this.aporteInicial + (this.aporteMensal * (this.duracaoEmAnos*12));
  }

  atualizarAporteInicial(valor: number) {
    this.aporteInicial = valor;
  }

  atualizarAporteMensal(valor: number) {
    this.aporteMensal = valor;
  }

  somarDuracao() {
    this.duracaoEmAnos++;
    this.atualizarAnoPrevisto();
  }

  subtrairDuracao() {
    if(this.duracaoEmAnos > 1) {
      this.duracaoEmAnos--;
    }
    this.atualizarAnoPrevisto();
  }

}
