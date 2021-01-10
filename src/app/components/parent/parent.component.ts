import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.styl']
})
export class ParentComponent implements OnInit {
  data = 0
  stringPadre: string = ''
  textoRecibidoHijo: string = ''
  constructor() { }

  ngOnInit() {
  }

  changeFromParent(){
    this.data += 1;
  }

  recibirMensaje (texto: string) {
  this.textoRecibidoHijo = texto
  }

}
