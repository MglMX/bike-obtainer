import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chair } from './chair'
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions ={
  headers : new HttpHeaders ({ accept: 'application/json',
     'x-ibm-client-secret': 'T3uN0lM1jR3gD2vH0gQ7qX7qA8xD4tE5eO1dD2oR4cH4gG5aN5',
     'x-ibm-client-id': '31587ec5-008c-4463-9943-f981351e40ee' })
};

@Injectable()
export class ChairService {
  private apiUrl = 'https://api.us.apiconnect.ibmcloud.com/memiguelstudentvunl-devus/sb/api/Chairs'
  constructor(private http: HttpClient) { }

  getChairs():Observable<Chair[]>{
     return this.http.get<Chair[]>(this.apiUrl,httpOptions).pipe(
      tap (chairs => {
        console.log("get api/chairs");
        console.log(chairs);
      }),
      catchError(this.handleError('getchairs',[]))
    );
  }

  private handleError<T> (operation = 'operation', result?: T){
    return(error: any): Observable<T> => {
      console.error(error);
      //return the empty result so the application keeps running
      return of (result as T);
    }
}

}
