import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component'
import { DashboardComponent } from './components/dashboard/dashboard.component';
import  { AuthGuard } from './guards/auth.guard'
import { ParentComponent } from './components/parent/parent.component';


const routes: Routes = [
  { path: 'home', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: "", component: ParentComponent}
    ]
  },
  { path: 'login', component: LoginComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', loadChildren: () => import('./components/page404/page404.module').then(m => m.Page404Module)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
