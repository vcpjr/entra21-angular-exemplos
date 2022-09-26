import { Vacina } from './../../shared/model/vacina';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacina-detalhe',
  templateUrl: './vacina-detalhe.component.html',
  styleUrls: ['./vacina-detalhe.component.scss']
})
export class VacinaDetalheComponent implements OnInit {

  public vacina: Vacina = new Vacina();

  constructor() { }

  ngOnInit(): void {
    //TODO verificar se a rota chamada tem id
    //caso sim -> buscar a vacina no backend
  }

  salvar(){
    //TODO chamar o backend 
    //(POST enviando a nova vacina ou a vacina atualizada)
  }

  limpar(){
    this.vacina = new Vacina();
  }

}
