import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  constructor() { }
  phoneng = "";

  h1color = 'red';

  phoneLengthMinimum(){
   
    if(typeof(this.phoneng.length) !== "undefined" && this.phoneng.length > 10 && this.phoneng.length <13){

      return true
    }
    return false
  }

  changeColor(){
     this.h1color = "yellow" ;
  }
  ngOnInit() {
  }

}
