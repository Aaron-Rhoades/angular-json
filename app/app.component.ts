import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>My First Angular App</h1>
    <input #inputJson id="inputJson"><button class="btn" (click)="jsonCall(inputJson.value)">GET</button>
  `
})
export class AppComponent implements OnInit{
  constructor (private httpService: HttpService){}
  private testUrl: string = 'https://jsonplaceholder.typicode.com/comments';  // URL to web api

  jsonCall (jsonUrl: string){
    this.httpService.getJson(jsonUrl);
  }

  ngOnInit(){
    console.log('started');
    this.httpService.getJson(this.testUrl);
  }
}
