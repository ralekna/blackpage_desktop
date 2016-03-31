import {Component} from 'angular2/core';

@Component({
    selector: 'post',
    template:
        `<h2>{{ postData.title }}</h2>
         <div>{{ postData.body }}</div>`,
    inputs: ['postData']
})
export default class PostComponent {

}