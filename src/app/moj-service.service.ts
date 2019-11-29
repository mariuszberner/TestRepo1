import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MojServiceService {

  constructor() { }

  numberOfCalls = 0;

  zrobCos(): void {
    this.numberOfCalls++;
    console.log(`wywolanie numer: ${this.numberOfCalls}`);
  }

}
// tradycja


