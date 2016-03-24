import {Component} from 'angular2/core';
import PostsComponent from './components/posts/posts.component';

// Annotation section
@Component({
    selector: 'main-component',
    template: `
        <div>
            <h1>Hello {{ name }}</h1>
            <posts-component></posts-component>
        </div>`,
    directives: [PostsComponent]
})
// Component controller
export default class MainComponent {
    constructor() {
        this.name = 'Max';
    }
}