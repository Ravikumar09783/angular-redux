import { selectData } from './../@ngrx/data-table/data-table.selectors';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  selectRadio!:number;
  URL = 'http://localhost:3000/users'

  constructor(private http: HttpClient) { }

  getData():any {
    return this.http.get<any>(this.URL).pipe(
      map(data => {
        return data.map((item: any) => ({...item, city: item.address.city}))
      }),
    );
  }


  selectedUser(id:number){
    return this.http.get<any>(`${this.URL}/${id}`)
  }
}
