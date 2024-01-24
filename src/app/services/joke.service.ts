import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http:HttpClient) { }

  getOneRandomJoke(){
    return this.http.get("https://api.chucknorris.io/jokes/random")
  }

}
