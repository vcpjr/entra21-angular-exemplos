import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vacina } from 'src/app/shared/model/vacina';
import { VacinasService } from './../../shared/service/vacinas.service';

@Component({
  selector: 'app-vacina-listagem',
  templateUrl: './vacina-listagem.component.html',
  styleUrls: ['./vacina-listagem.component.scss']
})
export class VacinaListagemComponent implements OnInit {

  displayedColumns: string[] = ['id', 'paisOrigem', 'estagio', 'dataInicio', 'responsavel'];
  public dataSource: Array<Vacina> = new Array();
  constructor(private vacinaService: VacinasService, private router: Router) { }

  ngOnInit(): void {
    //Similar ao método main() em Java
    this.buscarVacinas();
  }

  public buscarVacinas(){
    this.vacinaService.listarTodas().subscribe(
      resultado => {
        this.dataSource = resultado;
      },
      erro => {
        //TODO evoluir para mostrar mensagem na tela
        console.log("DEU ERRO. Causa: " + erro);
      }
    );
  }

  public buscarPorId(){
    //TODO
  }

  public buscarPorPesquisador(){
    //TODO
  }

  public voltar(){
    //TODO testar a rota
    this.router.navigate(['/']);
  }
}
