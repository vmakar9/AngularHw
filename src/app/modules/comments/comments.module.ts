import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comment/comment.component';
import { CommentsDetailsComponent } from './comments-details/comments-details.component';


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentsDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule
  ],
  providers:[
    CommentsComponent
  ]
})
export class CommentsModule { }
