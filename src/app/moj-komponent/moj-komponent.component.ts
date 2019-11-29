import { Component, OnInit } from '@angular/core';
import { MojServiceService } from '../moj-service.service';


@Component({
  selector: 'app-moj-komponent',
  templateUrl: './moj-komponent.component.html',
  styleUrls: ['./moj-komponent.component.css']
})
export class MojKomponentComponent implements OnInit {

  // stan komponentu to właściwości
  title = 'Moj super komponent';
  ileWarzyw: number;
  zenek: Osoba = {
    id: 1,
    imie: 'Zenek',
    tagi: ['ab', 'cd']
  };

  czyPokazac = true;
  warzywa = ['marchewka', 'cebula', 'seler', 'brukselka'];


  public printZenek(): string {
    return `Oto zenek o id ${this.zenek.id}`;
  }

  private dodaj(a: number, b: number): number {
    return a + b;
  }

  private odejmij = (a, b) => a - b;
  private odejmij2 = (a: number, b: number) => a - b;

  public onClick() {
    console.log('jest super');
    this.myService.zrobCos();
  }

  // wstrzykiwania zalezności (serwisów) przez DI
  constructor(private myService: MojServiceService) { }

  // metoda z cyklu zycia komp. - autostart
  ngOnInit() {
    // pobrac dane do wyswietlenia w komponencie
    this.myService.zrobCos();
    this.myService.zrobCos();
  }
}

// własny typ danych typu DTO
interface Osoba {
  id: number;
  imie: string;
  dataUr?: Date;
  tagi: Array<string>;
}
