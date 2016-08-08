/**
 * Created by christian on 01/08/16.
 */

import {Component, OnInit} from '@angular/core';
import {JobService} from "../../service/job.service";
import {Job} from "../../model/job";

@Component({
    selector: 'list-job',
    templateUrl: './app/component/list-job/list-job.component.html',
    providers: [JobService]
})
export class ListJobComponent implements OnInit {
    jobs:Job[];
    
    constructor(private jobService:JobService) {
    }

    getJobs() {
        this.jobService.getJobs().then(jobs => this.jobs = jobs);
        
    }
    ngOnInit() {
        this.getJobs();
    }

    
}