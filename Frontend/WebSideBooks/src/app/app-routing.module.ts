import { RouterModule, Routes } from '@angular/router';

import { ListaLibrosComponent } from './modules/lista-libros/lista-libros.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '\**',
    component: ListaLibrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
