import { Injectable }    from '@angular/core';
import { Response, Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


import { Observable } from 'rxjs';
import './rxjs-extensions';

@Injectable()
export class HttpService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private testUrl = 'https://jsonplaceholder.typicode.com/comments';  // URL to web api

    results: Response;

    constructor(private http: Http) {}

    getJson(jsonUrl: string): void {
        console.log('URL: ' + jsonUrl);

        this.http.get(jsonUrl).subscribe(
          results => this.results = results,
          err => console.log(err),
          () => console.log(this.results)
          
        );

        console.log();
    }

}
