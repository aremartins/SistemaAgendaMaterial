import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './cadastros/forms/forms.component';
import { ListagemComponent } from './cadastros/listagem/listagem.component';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent
  },
  {
    path: 'list',
    component: ListagemComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
