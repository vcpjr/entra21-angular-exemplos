import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'entra21-angular-exemplos';

  constructor(private router: Router) { }


  public irParaTelaListagemVacinas(){
    //TODO testar a rota
    this.router.navigate(['/vacinas']);
  }
}
