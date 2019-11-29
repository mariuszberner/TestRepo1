import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-rest',
  //templateUrl: './rest.component.html',
  template: '<p> {{dane | json}} </p>',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {

  constructor(private http: HttpClient) { }

  dane: any;

  ngOnInit() {
    const url = 'https://localhost:44314/api/values/post';

    this.http.get(url).subscribe( res => this.dane = res );

  }

}
