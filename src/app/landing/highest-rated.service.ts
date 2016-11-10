import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { HighestRated } from '../model/highest-rated';


@Injectable()
export class HighestRatedService {
  private highestRatedUrl = 'app/highest-rated.json';

  constructor(private http: Http) { }

  getTopFive(): Observable<HighestRated[]> {
    return this.http.get(this.highestRatedUrl)
                    .map(this.extractTopFive)
                    .catch(this.handleError);
  }
  private extractTopFive(res: Response) {
    let body = res.json();
    return body.data.topFive || { };
  }

  getBottomFive(): Observable<HighestRated[]> {
    return this.http.get(this.highestRatedUrl)
                    .map(this.extractBottomFive)
                    .catch(this.handleError);
  }
  private extractBottomFive(res: Response) {
    let body = res.json();
    return body.data.bottomFive || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
