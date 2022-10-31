import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';


@NgModule({

  imports: [
    CommonModule,
    PostRoutingModule
  ],
  providers:[
    PostsComponent
  ],
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ]
})
export class PostModule { }
