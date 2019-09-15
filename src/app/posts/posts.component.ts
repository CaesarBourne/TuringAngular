import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts;
  constructor( private httpClient: HttpClient) { 
    httpClient.get("http://jsonplaceholder.typicode.com/posts")
    .subscribe(res  => this.posts =  res);
  }

  ngOnInit() {
  }

  
  

}
