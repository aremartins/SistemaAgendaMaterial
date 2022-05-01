import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable, Subject } from 'rxjs';
import { Tarefa } from '../models/tarefa';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent implements OnInit {
  cadastros: Observable<Tarefa[]> ;
  displayedColumns: string[] = ['nome', 'email', 'categoria'];
  changes = new Subject<void>();
  length!: number;
  pageSize = 5;
  pageSizeOptions: number[] = [ 5, 10, 15, 20]
  registros : any[] = [
      {
        "id": 1,
        "nome": "Kotlin",
        "tarefa": null,
        "email": "aretha@gmail.com",
        "data": null,
        "categoria": "casa"
      },
      {
        "nome": "php",
        "tarefa": null,
        "email": "aretha@gmail.com",
        "data": null,
        "categoria": "trabalho",
        "id": 2
      },
      {
        "nome": "php",
        "tarefa": null,
        "email": "aretha@gmail.com",
        "data": null,
        "categoria": "trabalho",
        "id": 3
      },
      {
        "nome": "php",
        "tarefa": null,
        "email": "aretha@gmail.com",
        "data": null,
        "categoria": "trabalho",
        "id": 4
      },
      {
        "nome": "php",
        "tarefa": null,
        "email": "aretha@gmail.com",
        "data": null,
        "categoria": "trabalho",
        "id": 5
      },
      {
        "nome": "Kotlin",
        "tarefa": null,
        "email": "aretha@gmail.com",
        "data": null,
        "categoria": "trabalho",
        "id": 6
      },
      {
        "nome": "Kotlin",
        "tarefa": null,
        "email": "aretha@gmail.com",
        "data": null,
        "categoria": "trabalho",
        "id": 7
      },
      {
        "nome": "Kotlin",
        "tarefa": null,
        "email": "aretha@gmail.com",
        "data": null,
        "categoria": "trabalho",
        "id": 8
      },
      {
        "nome": "Kotlin",
        "tarefa": null,
        "email": "aretha@gmail.com",
        "data": null,
        "categoria": "trabalho",
        "id": 9
      },
      {
        "nome": "Kotlin",
        "tarefa": null,
        "email": "aretha@gmail.com",
        "data": null,
        "categoria": "trabalho",
        "id": 10
      },
      {
        "nome": "Kotlin",
        "tarefa": null,
        "email": "aretha@gmail.com",
        "data": null,
        "categoria": "trabalho",
        "id": 11
      },
      {
        "nome": "Kotlin",
        "tarefa": null,
        "email": "aretha@gmail.com",
        "data": null,
        "categoria": "trabalho",
        "id": 12
      },
      {
        "nome": "Kotlin",
        "tarefa": null,
        "email": "aretha@gmail.com",
        "data": null,
        "categoria": "trabalho",
        "id": 13
      },
      {
        "nome": "Kotlin",
        "tarefa": null,
        "email": "aretha@gmail.com",
        "data": null,
        "categoria": "trabalho",
        "id": 14
      },
      {
        "nome": "Kotlin",
        "tarefa": null,
        "email": "aretha@gmail.com",
        "data": null,
        "categoria": "trabalho",
        "id": 15
      },
      {
        "nome": "Kotlin",
        "tarefa": null,
        "email": "aretha@gmail.com",
        "data": null,
        "categoria": "trabalho",
        "id": 16
      },
      {
        "nome": "Kotlin",
        "tarefa": null,
        "email": "aretha@gmail.com",
        "data": null,
        "categoria": "trabalho",
        "id": 17
      },
      {
        "nome": "Kotlin",
        "tarefa": null,
        "email": "aretha@gmail.com",
        "data": null,
        "categoria": "trabalho",
        "id": 18
      },
      {
        "nome": "Kotlin",
        "tarefa": null,
        "email": "aretha@gmail.com",
        "data": null,
        "categoria": "trabalho",
        "id": 19
      },
      {
        "nome": "Kotlin",
        "tarefa": null,
        "email": "aretha@gmail.com",
        "data": null,
        "categoria": "trabalho",
        "id": 20
      },
      {
        "nome": "Kotlin",
        "tarefa": null,
        "email": "aretha@gmail.com",
        "data": null,
        "categoria": "trabalho",
        "id": 21
      },
      {
        "nome": "Kotlin",
        "tarefa": null,
        "email": "aretha@gmail.com",
        "data": null,
        "categoria": "trabalho",
        "id": 22
      }
    ]

  constructor(private service: FormService) {
    this.cadastros  = this.service.list();
  }

  ngOnInit() {
    this.length = this.registros.length;
  }

  lowValue : number = 0;
  highValue: number = 5;

  getPaginatorData(event:PageEvent): PageEvent{
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event
  }

  listar() {
     this.service.list().subscribe((success) => {
      console.log('sucesso');
    });
  }
}
