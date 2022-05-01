import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms/forms.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListagemComponent } from './listagem/listagem.component'


@NgModule({
  declarations: [
    FormsComponent,
    ListagemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    ],
    exports:[
      FormsComponent,
      ListagemComponent
    ]
})
export class CadastrosModule { }
