/**
 * Created by christian on 01/08/16.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var job_service_1 = require("../../service/job.service");
var ListJobComponent = (function () {
    function ListJobComponent(jobService) {
        this.jobService = jobService;
    }
    ListJobComponent.prototype.getJobs = function () {
        var _this = this;
        this.jobService.getJobs().then(function (jobs) { return _this.jobs = jobs; });
    };
    ListJobComponent.prototype.ngOnInit = function () {
        this.getJobs();
    };
    ListJobComponent = __decorate([
        core_1.Component({
            selector: 'list-job',
            templateUrl: './app/component/list-job/list-job.component.html',
            providers: [job_service_1.JobService]
        }), 
        __metadata('design:paramtypes', [job_service_1.JobService])
    ], ListJobComponent);
    return ListJobComponent;
}());
exports.ListJobComponent = ListJobComponent;
//# sourceMappingURL=list-job.component.js.map