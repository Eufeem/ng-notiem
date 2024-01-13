import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from '../models/Role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  urlApi = environment.apiUrl;

  constructor(private http: HttpClient) { }

  get(): Observable<Role[]> {
    return this.http.get<Role[]>(this.urlApi + '/role');
  }
}
