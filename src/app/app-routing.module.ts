import { TabelkaComponent } from './tabelka/tabelka.component';
import { FormatkaSposob1Component } from './formatka-sposob1/formatka-sposob1.component';
import { HelloComponent } from './hello/hello.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MojKomponentComponent } from './moj-komponent/moj-komponent.component';
import { RestComponent } from './rest/rest.component';
import { FormatkaSposob2Component } from './formatka-sposob2/formatka-sposob2.component';


const routes: Routes = [
  { path: '', component: HelloComponent },
  { path: 'moj', component: MojKomponentComponent },
  { path: 'form1', component: FormatkaSposob1Component },
  { path: 'form2', component: FormatkaSposob2Component },
  { path: 'rest', component: RestComponent },
  { path: 'tabelka', component: TabelkaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
