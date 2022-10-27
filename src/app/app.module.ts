import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/AllUsers/users/users.component';
import { UserComponent } from './components/AllUsers/user/user.component';
import {HttpClientModule} from "@angular/common/http";
import { PostsComponent } from './components/Postss/posts/posts.component';
import { PostComponent } from './components/Postss/post/post.component';
import { CommentsComponent } from './components/Commen/comments/comments.component';
import { CommentComponent } from './components/Commen/comment/comment.component';
import {RouterModule, Routes} from "@angular/router";
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { UserDetailsComponent } from './components/AllUsers/user-details/user-details.component';
import { PostDetailsComponent } from './components/Postss/post-details/post-details.component';
import { CommentDetailsComponent } from './components/Commen/comment-details/comment-details.component';


const routes:Routes=[
  {path:'',component:LayoutComponent,children:[
      {path:'', redirectTo:'users',pathMatch:'full'},
      {path:'users', component:UsersComponent,children:[
          {path:':id',component:UserDetailsComponent}
        ]},
      {path:'posts', component:PostsComponent,children:[
          {path:':id',component: PostDetailsComponent}
        ]},
      {path:'comments', component:CommentsComponent,children:[
          {path:':id',component: CommentDetailsComponent}
        ]}
    ]},

];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent,
    HeaderComponent,
    LayoutComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    CommentDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
