import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tarefa } from '../models/tarefa';

@Injectable({
  providedIn: 'root'
})
export class FormService {
readonly API = environment.API;

constructor(private http: HttpClient) { }

list(){
  return this.http.get<Tarefa[]>(`${this.API}/tarefas`)
  .pipe(first())
}

save(record:Tarefa){
  return this.http.post<Tarefa>(`${this.API}/tarefas`, record)
  .pipe(first());
}

}
