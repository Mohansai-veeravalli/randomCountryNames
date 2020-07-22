import { Component } from '@angular/core';
import arrayWords from "../word/words";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';
  words='';
  randomone=0;
  randomtwo=0;
  limit=10;

  hanndleBarChange(newLimit: number){
    this.limit=newLimit;
  }
  generate(){
    console.log(this.words);
    //this.words=arrayWords.slice(0,this.limit).join(',');

  }
  randomNumberWords(){
    this.randomone=Math.floor(Math.random()*(8-1)+1);
    this.randomtwo=Math.floor(Math.random()*(16-9)+9);
    console.log("1="+this.randomone);
    console.log("2="+this.randomtwo);
    this.words=arrayWords.slice(this.randomone,this.randomtwo).join(',');


  
  }
}
