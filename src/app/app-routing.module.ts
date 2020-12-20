import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './components/page404/page404.component'
import { LoginComponent } from './components/login/login.component'
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  { path: 'home', component: DashboardComponent},
  { path: 'login', component: LoginComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
