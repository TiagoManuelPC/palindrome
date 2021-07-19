// import { Http2SecureServer } from 'http2';
import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})


export class HomeComponent {
  public bolean: Boolean
  private word: string;
  private http: HttpClient; 
  private baseUrl: string;
  private result: string;
  private emptyMessage: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string){
    this.http = http;
    this.baseUrl = baseUrl;
    this.word = ""
    console.log(baseUrl)
    this.emptyMessage = "Please enter something"
  };
  public checkWord() {
    if(this.word === "") {
      this.result = this.emptyMessage
    } else if(this.word){
      this.http.post<Boolean>(this.baseUrl+ 'word', {word: this.word}).subscribe(result => {
        console.log(result)
        this.result = result? 'Great! ' +  this.word  +' is a Palindrome' : "Hum... it seems like " + this.word + " is not a Palindrome";
      }, error => console.error(error));
    }
  }
  
  public updateWord(word: string) {
    
   this.word = word 
   console.log(word)
  }      
}



  







