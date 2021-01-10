import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-children',
  templateUrl: './example-children.component.html',
  styleUrls: ['./example-children.component.styl']
})
export class ExampleChildrenComponent implements OnInit {
  inputText: string

  constructor() { }

  ngOnInit() {
  }

}
