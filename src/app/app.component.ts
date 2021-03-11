import { Component } from '@angular/core';

//@component vai trazer um tipo de import fixo pra pagina se guiar. onde segura os compnents
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist-elogica-challenge';

}
