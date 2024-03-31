import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from './register.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient:HttpClient) { }

  api="http://localhost:8080";

  public saveData(register: Register):Observable<Register>{
   return this.httpClient.post<Register>(`${this.api}/save/register`,register )
  }
  public getData():Observable<Register[]>{
    return this.httpClient.get<Register[]>(`${this.api}/get/register`, )
   }
}
