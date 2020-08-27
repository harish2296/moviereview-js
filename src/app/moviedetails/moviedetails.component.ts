import { Component, OnInit } from '@angular/core';
import { AppComponentSvc } from '../AppComponentSvc';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
  movieDetails: any = [];
  constructor(private http: AppComponentSvc) { }

  ngOnInit() {
    const payload = { "userName": localStorage.getItem('userName') };
    const url = `http://localhost:8085/movie/getMovies`;
    this.http.postHttp(url, payload, resp => {
      const { data } = resp;
      this.movieDetails = JSON.parse(JSON.stringify(data));
    }, err => {

    });
  }

}
