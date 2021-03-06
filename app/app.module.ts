import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { AppComponent }   from './app.component';
import { HttpService } from './http.service';

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule
  ],
  declarations: [ AppComponent ],
  providers: [ HttpService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
