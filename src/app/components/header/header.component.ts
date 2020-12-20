import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {
  title = 'a8-project';
  @Output() sidenavToggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onToggleSidenav () {
    this.sidenavToggle.emit();
  }

}
