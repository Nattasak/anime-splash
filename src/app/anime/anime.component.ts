import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})

export class AnimeComponent implements OnInit {
  results: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('https://ghibliapi.herokuapp.com/films').subscribe(data => {
      this.results = data;
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Client-side error occured.");
      } else {
        console.log("Server-side error occured.");
      }
    });
  }
}
