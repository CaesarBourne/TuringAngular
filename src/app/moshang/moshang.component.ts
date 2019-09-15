import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewEncapsulation } from '@angular/compiler/src/core';
import { HelperService } from '../helper.service';



@Component({
  selector: 'app-moshang',
  templateUrl: './moshang.component.html',
  styleUrls: ['./moshang.component.css'],
  
})
export class MoshangComponent implements OnInit {

  plan = "dddd";
  cards;
  @Input("dfma") ma: boolean;
  @Output() lamb = new EventEmitter();
  text ="I am hungry o food not satisfying Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, commodi, cumque nam adipisci molestiae nemo numquam sequi quaerat velit quibusdam tenetur officia voluptatibus distinctio rerum quas unde natus doloribus minima repellendus facilis sint. Accusantium ea totam odit amet! Nostrum, expedita?"
  list: Array<object>;
  lister: Array<object> = [
    {name: "Emmanuel",id: 1},
     {name: "Michael", id: 2},
    {name:  "Tobi", id: 3},
     {name:"Shola", id: 4}, 
     {name: "Ifeoluwa", id: 5}
    ];;
  constructor(private helperService: HelperService) { }

  onClick(){
    this.lamb.emit(this.ma);
  }

  fetchCards(){
    this.cards = this.helperService.getCards();
  }
  ngOnInit() {
    this.fetchCards()
    this.list  = [
      {name: "Emmanuel",id: 1},
       {name: "Michael", id: 2},
      {name:  "Tobi", id: 3},
       {name:"Shola", id: 4}, 
       {name: "Ifeoluwa", id: 5}
      ];
  }

  renderElements(){
   
  }

  //this is used to trackby id by changinging the default track mechanism which was track 
  // by object memory space thats always different when fetched from server 
  trackByCustom(index, objectval){
    return objectval? objectval.id: undefined;
  }

  log(tag){
    console.log(tag);
  }
  onSubmitForm(ngform){
    console.log(ngform)
  }
 
  
}
