import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Vianda } from './viandas-list/Vianda';
import { of } from 'rxjs';

const URL = 'https://687d6c75918b64224331c88c.mockapi.io/api/v1/Viandas';

@Injectable({
  providedIn: 'root'
})
export class ViandaData {

  private cachedViandas: Vianda[] | null = null;

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Vianda[]> {
  if (this.cachedViandas) {
    // Use 'of' to return an observable from cached data
    return of(this.cachedViandas);
  }
  return this.http.get<Vianda[]>(URL).pipe(
    tap((viandas: Vianda[]) => {
      viandas.forEach(vianda => vianda.quantity = 0);
      this.cachedViandas = viandas;
    }));
  }

}
