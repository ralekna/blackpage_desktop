import {Injectable} from 'angular2/core';

Injectable()
export default class PostsService {
    getPosts() {
        return [
            {title: 'Test 1', body: 'lorem ipsum 1'},
            {title: 'Test 2', body: 'lorem ipsum 2'},
            {title: 'Test 3', body: 'lorem ipsum 3'}
        ];
    }
}

