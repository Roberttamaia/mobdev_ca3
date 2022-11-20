import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

export interface ApiResult {
  char_id: number;
  name: string;
  birthday: string;
  occupation: string[];
  img: string;
  status: string;
  nickname: string;
  appearance: number[];
  portrayed: string;
  category: string;
  better_call_saul_appearance: number[];
}


@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  limit = 62;
  offset = 0;

  constructor(private http: HttpClient) {
  }

  getCharacters(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/characters?limit=${this.limit}&offset=${this.offset}`)
  }
}
