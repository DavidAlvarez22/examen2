import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // Declaramos las variables necesarias
  titulo : string ="Bienvenido a Trivia App"
  descripcion : string = "Explora preguntas divertidas"
  url : string = '/assets/icon/trivia.jpg';
  selectedSegment : string = "introduccion";
  categorias: string[] = ["introduccion", "preguntas", "estadistica"];

  constructor() {}

  //inicializamos el segmento con su valor inicial
  
  //Gestionamos el cambio de segmentos
  public cambiarCategoria(eventoRecibido: any) {
    
    this.selectedSegment = eventoRecibido.detail.value;
  }


}
