import { Component }          from '@angular/core';
import {SearchComponent} from "../search/search.component";
import {ListJobComponent} from "../list-job/list-job.component";

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <search></search>
    <list-job></list-job>
  `,
    styleUrls: ['./app/component/job/app.component.css'],
    directives: [SearchComponent,ListJobComponent]
})
export class AppComponent {
    title = 'Looking for a job';
}