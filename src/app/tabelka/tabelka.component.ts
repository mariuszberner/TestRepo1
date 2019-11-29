import { Component, OnInit } from '@angular/core';
import { from, Observable, interval, of } from 'rxjs';
import { tap, map, filter, first, catchError, retry } from 'rxjs/operators';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-tabelka',
  templateUrl: './tabelka.component.html',
  styleUrls: ['./tabelka.component.css']
})
export class TabelkaComponent implements OnInit {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  posts: Array<Post>;
  selectedPost: Post;

  onSelect(post: Post) {
    this.selectedPost = post;
  }

  constructor(private postsService: PostsService) { }

  async ngOnInit() {

    // 1 - Observable
    this.postsService.getPosts()
        .pipe(
          tap( () => console.log('pobrałem dane') ),
          retry(3), // powtorz pobieranie 3 razy jak cos sie nie uda
          catchError( this.handleError<Post[]>() )
        )
        .subscribe( dane => this.posts = dane );

    // 2 - Promise
    this.postsService.getPostsWithPromise()
        .then( dane => this.posts = dane )
        .catch( err => console.log(`Error!!! ${err}`) );

    // 3 sposob - async/await
    // this.posts = await this.postsService.getPostsAsync();

    // this.http.get<Array<Post>>(this.url).subscribe( dane => {
    //   console.log(dane);
    //   this.posts = dane;
    // });

    // const strumienLiczb: Observable<number> = from([10, 11, 12, 13]);
    // strumienLiczb.pipe(
    //   filter( x => x > 11 ),
    //   tap( l => console.log(l) ),
    //   map( l => l * 2 )
    // ).subscribe( l => console.log(l) );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
