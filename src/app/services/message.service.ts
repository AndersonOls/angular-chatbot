import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageResponse } from '../types/message-response.types';
import { env } from '../../enviroments/enviroment';



@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  send(message: string): Observable<MessageResponse>{
    const data = { message };

    return this.http.post<MessageResponse>(env.apiUrl, data);
  }
}