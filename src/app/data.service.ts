import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public posts: Post[] = [
    {
      heading: 'Post about CSS',
      content: 'CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.',
      imageURL: '../../../assets/css.jpg'
    },
    {
      heading: 'Post about HTML',
      content: 'Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. ',
      imageURL: '../../../assets/html.jpg'
    }
  ]

  private dataSource = new BehaviorSubject<Post[]>(this.posts);
  public currentData = this.dataSource.asObservable();
  constructor(private http: HttpClient) { }

  public storePosts() {
    // I used here firebase service because i don't have an exrepience with typicode/json.server
    const posts = this.getPosts();
    this.http.put('https://test-project-f7ffd-default-rtdb.firebaseio.com/posts.json', posts).subscribe(responseData => {
      console.log(responseData)
    })
  }

  // public fetchPosts() {
  //   return this.http.get<Post[]>('https://test-project-f7ffd-default-rtdb.firebaseio.com/posts.json')
  //     .pipe(
  //       map(posts => {
  //         return posts.map(post => {
  //           return {
  //             ...post
  //           }
  //         })
  //       }),
  //       tap(posts => {
  //         this.setPosts(posts)
  //       })
  //     )
  // }
  //  idk why but it works wrong so i commented it 

  public changeData(data: Post[]) {
    this.dataSource.next(data)
  }

  public setPosts(posts: Post[]) {
    this.posts = posts;
    this.changeData(this.posts.slice())
  }

  public getID(index: number) {
    return this.posts[index];
  }

  public getPosts() {
    return this.posts.slice()
  }
}
