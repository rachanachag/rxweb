import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"

import { RxFormBuilder,RxwebValidators 
} from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-minNumber-value-validator',
    templateUrl: './min-number-value.component.html'
})
export class MinNumberValueValidatorComponent implements OnInit {
    resultInfoFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder
    ) { }

    ngOnInit() {
        this.resultInfoFormGroup = this.formBuilder.formGroup({
										maths:['',RxwebValidators.minNumber({value:35 })], 
													statstics:['',RxwebValidators.minNumber({value:35  ,conditionalExpression:x => x.maths == 50 })], 
													english:['',RxwebValidators.minNumber({value:35  ,conditionalExpression:(x,y) =>{ return  x.maths == 50 } })], 
								});
    }
}