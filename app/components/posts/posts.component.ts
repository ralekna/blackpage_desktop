import {Component} from 'angular2/core';
import PostsService from 'app/services/remote/posts.service';

@Component({
    selector: 'posts-component',
    template: `
        <ul *ngFor="#post of posts">
            <li>
                <h2>{{ post.title }}</h2>
                <div>{{ post.body }}</div>
            </li>
        </ul>`,
    providers: [PostsService]
})
export default class PostsComponent {
    constructor(private post)
}

