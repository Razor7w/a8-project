import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.styl']
})
export class ChildrenComponent implements OnInit {
  @Input() inputText: string
  @Input() parentData: any;
  clickChangesParent: number = -1
  private _stringHijo: string

  @Output()
  enviar: EventEmitter<string> = new EventEmitter<string>()
  textoParaEnviar: string
  // @Input()
  // stringHijo: string

  @Input()
  set stringHijo(value: string) {
    value = value || ''
    this._stringHijo = value.toUpperCase()
  }

  get stringHijo() { return this._stringHijo }

  @Output()
  textoCambiado: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
    console.log('Componente creado --> app-children')
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('Componente destruido --> app-children')
    alert('Componente destruido --> app-children')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes)
    this.clickChangesParent += 1
  }

  changeFromChild(){
    this.parentData -= 1;
  }

  cambioText (texto: string) {
    console.log(texto)
    this.textoCambiado.emit(texto)
  }

  botonClick () {
    this.enviar.emit(this.textoParaEnviar)
  }

}
