import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';

import { SzablonInlineComponent } from './szablon-inline/szablon-inline.component';
import { MojKomponentComponent } from './moj-komponent/moj-komponent.component';
import { DzieckoComponent } from './dziecko/dziecko.component';
import { MyPipePipe } from './my-pipe.pipe';
import { TabelkaComponent } from './tabelka/tabelka.component';
import { HttpClientModule } from '@angular/common/http';
import { PostDetailsComponent } from './post-details/post-details.component';
import { RestComponent } from './rest/rest.component';

import { FormsModule } from '@angular/forms';
import { FormatkaSposob1Component } from './formatka-sposob1/formatka-sposob1.component';
import { FormatkaSposob2Component } from './formatka-sposob2/formatka-sposob2.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    SzablonInlineComponent,
    MojKomponentComponent,
    DzieckoComponent,
    MyPipePipe,
    TabelkaComponent,
    PostDetailsComponent,
    RestComponent,
    FormatkaSposob1Component,
    FormatkaSposob2Component
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
