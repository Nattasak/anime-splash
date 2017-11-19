import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-anime-detail',
  templateUrl: './animeDetail.component.html',
  styleUrls: ['./animeDetail.component.css']
})

// Class
export class AnimeDetailComponent implements OnInit {
  results: any;
  paramsSub: any;
  id: any;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.paramsSub = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });

    this.http.get(`https://ghibliapi.herokuapp.com/films/${this.id}`).subscribe(data => {
      this.results = [data];
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Client-side error occured.");
      } else {
        console.log("Server-side error occured.");
      }
    });
  }

  ngOnDestroy(): void {
    this.paramsSub.unsubscribe();
  }
}
