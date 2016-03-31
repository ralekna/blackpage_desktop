import {Component} from 'angular2/core';
import PostsService from 'app/services/remote/posts.service';
import PostComponent from './post.component';

@Component({
    selector: 'posts-list',
    template: `<post  *ngFor="#post of posts" [postData]='post'></post>`,
    providers: [PostsService],
    directives: [PostComponent]
})
export default class PostsListComponent {
    constructor(private postsService: PostsService) {
        this.posts = postsService.getPosts();
    }
}

