import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getComments() {
    return this.http.get<Comments[]>('https://jsonplaceholder.typicode.com/comment')
  }
}

export interface Comments {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}
