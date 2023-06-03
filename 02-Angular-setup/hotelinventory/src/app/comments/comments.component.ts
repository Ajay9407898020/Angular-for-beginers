import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs'

@Component({
  selector: 'hinv-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  // comments$ = this.commentService.getComments();
  comments$ = this.route.data.pipe(pluck('comments'));


  constructor(private commentService: CommentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.data.subscribe(data => console.log(data));
  }

}
