import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IData } from './data';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  private _url:string ='https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getDatas(): Observable<IData[]> {
      return this.http.get<IData[]>(this._url);
  }

}
