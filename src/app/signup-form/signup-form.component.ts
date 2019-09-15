import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
   form = new FormGroup({
     username: new FormControl("", [Validators.required,Validators.minLength(3),UsernameValidators.cannotContainSpace], UsernameValidators.shouldBeUnique),
     password: new FormControl("", [Validators.required,Validators.minLength(3), Validators.maxLength(13)])
   });

   formadd = new FormGroup({
     topics: new FormArray([])
   });
   addInput(topic: HTMLInputElement){
     (this.formadd.get("topics") as FormArray).push(new FormControl(topic.value));
     topic.value = "";
   }

   deleteVal(inpval: FormControl){
     let indexofInput = (this.formadd.get("topics") as FormArray).controls.indexOf(inpval);
     (this.formadd.get("topics") as FormArray).removeAt(indexofInput);
   }

   get username(){
     return this.form.get('username');
   }

   login(){
     this.form.setErrors({
       inValidLogin: true
     })
   }
  
   get password(){
    return this.form.get('password');
   }
}
