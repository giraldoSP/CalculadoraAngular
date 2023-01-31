import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {

  sumaForm: FormGroup;

  result:string = "";

  constructor(formBuilder: FormBuilder) {
     this.sumaForm = formBuilder.group({
        number1 :["", Validators.required],
        number2 :["", Validators.required],
        number3 :["", Validators.required]
     })
   }

  ngOnInit(): void {
  }

  respuesta(){
    let v1 = this.sumaForm.value.number1;
    let v2 = this.sumaForm.value.number2;
    let v3 = this.sumaForm.value.number3;
    let result= this.suma(v1, v2, v3)

    this.result =  `El resultado de la resta es ${result}`;
  }
  suma(val1:number,val2:number, val3:number):number{
    return val1+val2+val3;
  }


}
