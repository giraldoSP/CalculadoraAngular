import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-multiplicacion',
  templateUrl: './multiplicacion.component.html',
  styleUrls: ['./multiplicacion.component.css']
})
export class MultiplicacionComponent implements OnInit {

  multiplicacionForm: FormGroup;

  result:string = "";

  constructor(formBuilder: FormBuilder) {
     this.multiplicacionForm = formBuilder.group({
        number1 :["", Validators.required],
        number2 :["", Validators.required],
        number3 :["", Validators.required]
     })
   }

  ngOnInit(): void {
  }

  respuesta(){
    let v1 = this.multiplicacionForm.value.number1;
    let v2 = this.multiplicacionForm.value.number2;
    let v3 = this.multiplicacionForm.value.number3;
    let result= this.multiplicacion(v1, v2, v3)

    this.result =  `El resultado de la multiplicacion es ${result}`;
  }
  multiplicacion(val1:number,val2:number, val3:number):number{
    return val1*val2*val3;
  }
}
