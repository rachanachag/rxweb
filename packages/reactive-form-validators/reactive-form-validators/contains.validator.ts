import {
    ValidatorFn,
    AbstractControl
} from "@angular/forms";

import { ObjectMaker } from "../util/object-maker";
import { DefaultConfig } from "../models/config/default-config";
import { AnnotationTypes } from "../core/validator.static";
import { ValidatorValueChecker } from "../util/validator-value-checker";
export function containsValidator(config:DefaultConfig): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        if (ValidatorValueChecker.pass(control,config)) {
            if (control.value.indexOf(config.value) == -1)
                    return ObjectMaker.toJson(AnnotationTypes.contains, config, [control.value,config.value]);
            }
        return ObjectMaker.null();
    }
}
