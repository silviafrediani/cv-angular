import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { 
    path: 'curriculum', 
    loadChildren: () => import('./features/curriculum/curriculum.module').then(m => m.CurriculumModule), 
    canActivate: [AuthGuard] 
  },

  { 
    path: 'login', 
    component: LoginComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
