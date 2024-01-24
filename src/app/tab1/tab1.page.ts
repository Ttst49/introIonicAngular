import {Component} from '@angular/core';
import {Joke} from '../joke';
import {JokeService} from '../services/joke.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  joke:Joke
  actualJoke:string


  constructor(public jokeService:JokeService) {
    this.getRandomJoke()
  }

  getRandomJoke(){
    this.jokeService.getOneRandomJoke().subscribe({
      next:(jokeFromFetch:any)=>{
        this.joke = {
          value: jokeFromFetch.value
        }
        this.actualJoke = this.joke.value
      }
    })
  }

}
