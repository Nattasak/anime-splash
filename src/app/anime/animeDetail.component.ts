import { Component, OnInit, OnDestroy  } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './animeDetail.component.html',
  styleUrls: ['./animeDetail.component.css']
})

export class AnimeDetailComponent implements OnInit, OnDestroy {
  results: any;
  paramsSub: any;
  id: any;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.paramsSub = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });

    this.http.get(`https://ghibliapi.herokuapp.com/films/${this.id}`).subscribe(data => {
      this.results = [data];
      console.log(data);
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('Client-side error occured.');
      } else {
        console.log('Server-side error occured.');
      }
    });
  }

  ngOnDestroy(): void {
    console.log('unsubscribe...');
    this.paramsSub.unsubscribe();
  }
}
