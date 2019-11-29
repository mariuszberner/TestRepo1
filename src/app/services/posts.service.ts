import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, interval } from 'rxjs';
import { tap, map, filter, first } from 'rxjs/operators';
import { Post } from '../tabelka/tabelka.component';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {  }

  public getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this.url);
  }

  public getPostsWithPromise(): Promise<Post[]> {
    return this.http.get<Array<Post>>(this.url).toPromise();
  }

  public async getPostsAsync(): Promise<Post[]> {
    return await this.http.get<Array<Post>>(this.url).toPromise();
  }

  // ToDo:
  // get posts
  // save post
  // update post

}
