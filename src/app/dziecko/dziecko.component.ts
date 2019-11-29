import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dziecko',
  templateUrl: './dziecko.component.html',
  styleUrls: ['./dziecko.component.css']
})
export class DzieckoComponent implements OnInit {

  // kazdy kompoent moze miec jasno okreslone parametry wyjsciowe i wejsciowe

  @Input() imie: string;
  @Input() nazwisko: string;


  constructor() { }

  ngOnInit() {
  }

}
