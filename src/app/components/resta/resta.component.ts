import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-resta',
  templateUrl: './resta.component.html',
  styleUrls: ['./resta.component.css']
})
export class RestaComponent implements OnInit {

  restaForm: FormGroup;

  result:string = "";

  constructor(formBuilder: FormBuilder) {
     this.restaForm = formBuilder.group({
        number1 :["", Validators.required],
        number2 :["", Validators.required],
        number3 :["", Validators.required]
     })
   }

  ngOnInit(): void {
  }

  respuesta(){
    let v1 = this.restaForm.value.number1;
    let v2 = this.restaForm.value.number2;
    let v3 = this.restaForm.value.number3;
    let result= this.resta(v1, v2, v3)

    this.result =  `El resultado de la resta es ${result}`;
  }
  resta(val1:number,val2:number, val3:number):number{
    return val1-val2-val3;
  }

}
