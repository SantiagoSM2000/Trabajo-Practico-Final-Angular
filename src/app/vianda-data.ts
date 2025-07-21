import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Vianda } from './viandas-list/Vianda';

const URL = 'https://687d6c75918b64224331c88c.mockapi.io/api/v1/Viandas';

@Injectable({
  providedIn: 'root'
})
export class ViandaData {

  private cachedViandas: Vianda[] | null = null;

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Vianda[]> {
    if (this.cachedViandas) {
      return new Observable<Vianda[]>(observer => {
        observer.next(this.cachedViandas!);
        observer.complete();
      });
    }
    return this.http.get<Vianda[]>(URL).pipe(
      tap((viandas: Vianda[]) => {
        viandas.forEach(vianda => vianda.quantity = 0);
        this.cachedViandas = viandas;
      })
    );
  }

}
