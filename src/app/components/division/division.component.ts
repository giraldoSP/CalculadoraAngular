import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {

  divisionForm: FormGroup;

  result:string = "";

  constructor(formBuilder: FormBuilder) {
     this.divisionForm = formBuilder.group({
        number1 :["", Validators.required],
        number2 :["", Validators.required]
     })
   }

  ngOnInit(): void {
  }

  respuesta(){
    let v1 = this.divisionForm.value.number1;
    let v2 = this.divisionForm.value.number2;

    let result= this.division(v1, v2)

    this.result =  `El resultado de la resta es ${result}`;
  }
  division(val1:number,val2:number):any{
    if(val1/val2 == 0){
      return "No se puede dividir por cero";
      
    }
    else{
      return val1/val2;
    }
  }

}
