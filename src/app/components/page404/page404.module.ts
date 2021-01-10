import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page404Component } from './page404.component'
import { Page4040RoutingModule } from './page404-routing.module'


@NgModule({
  declarations: [Page404Component],
  imports: [
    CommonModule,
    Page4040RoutingModule
  ]
})
export class Page404Module { }
