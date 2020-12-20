import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.styl']
})
export class SidenavComponent implements OnInit {
  @Output() sideNavClosed = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAbout() {
    this.sideNavClosed.emit(); // Emit event to parent component so it can tell sidenav to close
  }

}
