import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: FormService) {
    this.form = this.formBuilder.group({
      nome:[null, [Validators.required]],
      tarefa:[null],
      email:[null, [Validators.required, Validators.email]],
      data:[null],
      categoria:[null]
    })
    console.log(this.form)
  }

  ngOnInit(): void {

  }

  onSubmit(){
    this.service.save(this.form.value).subscribe(

        success => console.log(success)

    )
  }

  onCancel(){

  }


}
