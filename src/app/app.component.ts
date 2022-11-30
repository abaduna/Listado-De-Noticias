import { Component } from '@angular/core';
import { NoticiaService } from './servicios/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noticias';
  lisNoticias :any[] = []
  constructor(private noticiasServici: NoticiaService) { }
  buscarNoticias(parametros: any) {
    console.log("soy el padre");
    console.log(parametros);

    this.noticiasServici.getNoticias(parametros).subscribe(data => {
      console.log(data);
      this.lisNoticias = data.articles

    })
  }
}
