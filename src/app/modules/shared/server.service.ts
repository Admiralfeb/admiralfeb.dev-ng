import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedModule } from './shared.module';

const apiUrl = 'https://admiralfeb.dev/api';
const clientOptions: {
  headers: HttpHeaders | { [header: string]: string | string[] };
  withCredentials: boolean;
} = { headers: { Accept: 'application/json', 'Content-Type': 'application/json' }, withCredentials: false };

@Injectable({
  providedIn: SharedModule,
})
export class ServerService {
  constructor(private http: HttpClient) {}

  getData = <T>(path: string) => {
    return this.http.get<T>(`${apiUrl}/${path}`, clientOptions);
  };
}
