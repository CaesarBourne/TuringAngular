import { Injectable } from '@angular/core';
import CardType from './card-type';
import {CardList} from './card-list';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  cards: CardType[] = CardList;
  constructor() { }

  getCards(){
    return CardList;
  }
}
