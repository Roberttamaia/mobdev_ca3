import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";


  export interface ApiResult {
    death_id: number;
    death: string;
    cause: string;
    responsible: string;
    last_words: string;
    season: number;
    episode: number;
    occupation: string[];
    img: string;
    nickname: string;
    appearance: number[];
  }


@Injectable({
  providedIn: 'root'
})
export class DeathsService {

  constructor(private http: HttpClient) { }

  getDeaths(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/death/`)
  }

  getRandomDeath(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/random-death/`)
  }
}
