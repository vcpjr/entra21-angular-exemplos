import { Component, OnInit } from '@angular/core';

//Futuramente vamos criar um arquivo separado para as entidades
export interface Vacina {
  id: number;
  paisOrigem: string;
}

//Futuramente vamos obter esses dados diretamente do backend
const VACINAS_MOCK: Vacina[] = [
  { id: 1, paisOrigem: 'Brasil'},
  { id: 2, paisOrigem: 'Argentina'},
  { id: 3, paisOrigem: 'Chile'},
  { id: 4, paisOrigem: 'Paraguai'},
];

@Component({
  selector: 'app-vacina-listagem',
  templateUrl: './vacina-listagem.component.html',
  styleUrls: ['./vacina-listagem.component.scss']
})
export class VacinaListagemComponent implements OnInit {

  displayedColumns: string[] = ['id', 'paisOrigem'];
  dataSource = VACINAS_MOCK;

  constructor() { }

  ngOnInit(): void {
    //TODO consultar no backend
  }
}
