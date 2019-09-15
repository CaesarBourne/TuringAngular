import { AbstractControl, ValidationErrors } from "@angular/forms";

//returns true if there are errors
export class UsernameValidators{
    static cannotContainSpace(control:AbstractControl) : ValidationErrors | null{
        if((control.value as string).indexOf(" ") >= 0){
            return {cannotContainSpace: true}
        }
        return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null>{
        return new Promise( (resolve, reject)=>{
            setTimeout(() => {
                if(control.value === "Emmanuel"){
                    resolve({shouldBeUnique: true})}
                resolve(null)
            }, 2000);
        });
        return null;
    }
}