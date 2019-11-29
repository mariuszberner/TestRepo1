import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formatka-sposob1',
  templateUrl: './formatka-sposob1.component.html',
  styleUrls: ['./formatka-sposob1.component.css']
})
export class FormatkaSposob1Component implements OnInit {

  osoba: Osoba = { id: 1, imie: 'Zenek', nazwisko: 'Nowak' };

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.osoba);
    this.http.post('www.wp.pl', this.osoba).subscribe( res => console.log(res) );
  }
}

// sposob 1 - template-driven form

export interface Osoba {
  id: number;
  imie: string;
  nazwisko: string;
}
