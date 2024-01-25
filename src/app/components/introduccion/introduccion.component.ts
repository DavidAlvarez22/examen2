import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-introduccion',
  templateUrl: './introduccion.component.html',
  styleUrls: ['./introduccion.component.scss'],
})
export class IntroduccionComponent  implements OnInit {

@Input() titulo : string ="";
@Input() descripcion : string = "";
@Input() url : string = "";

  constructor() { }


  ngOnInit() {}

}
