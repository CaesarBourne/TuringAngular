import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

 @Input("appInputFormat") appInputFormat;
  constructor(private eleRef: ElementRef) {   }
   

   @HostListener("blur") onBlur(){
    let value: string = this.eleRef.nativeElement.value;

    if(this.appInputFormat === "uppercase"){
      this.eleRef.nativeElement.value = value.toUpperCase()
    }
    else{
      this.eleRef.nativeElement.value = value.toLowerCase()
    }
   
  }
}
