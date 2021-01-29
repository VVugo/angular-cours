import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  get(): Observable<any> {
    return this.httpClient.get(
      `${environment.api}/api/admin/tags`
    ).pipe(
      tap((tags) => {
        console.log({tags});
      })
    );
  }
}
