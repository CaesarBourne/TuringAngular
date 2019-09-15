import {Pipe, PipeTransform} from "@angular/core"

@Pipe({name : "summary"})

export default class SummaryPipe implements PipeTransform{

    transform(term: string, limit?: number){
        if(!term){
            return null;
        }
        let sumLength = limit? limit: 50;
        return term.substr(0, sumLength) + "...";
    }
}