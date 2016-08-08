import {Injectable} from '@angular/core';
import { JOBS } from "../mock/mock-job"

@Injectable()
export class JobService {
    getJobs() {
        return Promise.resolve(JOBS);
    }
}