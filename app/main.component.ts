import {Component} from 'angular2/core';
import PostsListComponent from './components/posts/posts-list.component.ts';

// Annotation section
@Component({
    selector: 'main-component',
    template: `
        <div>
            <h1>Hello {{ name }}</h1>
            <posts-list></posts-list>
        </div>`,
    directives: [PostsListComponent]
})
// Component controller
export default class MainComponent {
    constructor() {
        this.name = 'Max';
    }
}