import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  isAdmin: boolean;
  constructor() {
    const type = localStorage.getItem('userType');
    this.isAdmin = type.toLowerCase() === 'admin' ? true : false;
  }

  ngOnInit() {
  }

}
