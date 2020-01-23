import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
