import { VacinasService } from './../../shared/service/vacinas.service';
import { PesquisadorService } from './../../shared/service/pesquisador.service';
import { Pesquisador } from './../../shared/model/pesquisador';
import { Vacina } from './../../shared/model/vacina';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vacina-detalhe',
  templateUrl: './vacina-detalhe.component.html',
  styleUrls: ['./vacina-detalhe.component.scss']
})
export class VacinaDetalheComponent implements OnInit {

  public idVacina: number;
  public vacina: Vacina = new Vacina();
  public pesquisadores: Pesquisador[] = new Array();

  constructor(private pesquisadorService: PesquisadorService, 
              private vacinasService: VacinasService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    //TODO verificar se a rota chamada tem id
    //caso sim -> buscar a vacina no backend
    this.buscarPesquisadores();

    this.route.params.subscribe(params => {
      //TODO testar
      this.idVacina = params['id'];

      if(this.idVacina){
        this.buscarVacina();
      }
    });
  }

  buscarVacina(){
    this.vacinasService.buscarPorId(this.idVacina).subscribe(
      resultado => {
        if(resultado){
          this.vacina = resultado;
        }else{
          //TODO evoluir essa mensagem
          alert('Vacina não encontrada');
        }
      },
      erro => {
        //TODO evoluir para mostrar mensagem na tela
        console.log("DEU ERRO. Causa: " + erro);
      }
    );
  }

  buscarPesquisadores(){
    this.pesquisadorService.listarTodos().subscribe(
      resultado => {
        this.pesquisadores = resultado;
      },
      erro => {
        //TODO evoluir para mostrar mensagem na tela
        console.log("DEU ERRO. Causa: " + erro);
      }
    );
  }

  salvar(){
    this.vacinasService.salvar(this.vacina).subscribe(
      resultado => {
        this.vacina = resultado;
        //TODO evoluir para mostrar mensagem na tela
        alert("Vacina salva com sucesso");
        this.limpar();
      },
      erro => {
        //TODO evoluir para mostrar mensagem na tela
        console.log("DEU ERRO. Causa: " + erro);
        alert("Erro: " + erro.error.message);
      }
    );
  }

  limpar(){
    this.vacina = new Vacina();
  }
}
