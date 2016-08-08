"use strict";
var Job = (function () {
    function Job(title, type, city, salary, languages, content, isSSII) {
        if (title === void 0) { title = ''; }
        if (type === void 0) { type = ''; }
        if (city === void 0) { city = ''; }
        if (salary === void 0) { salary = 0; }
        if (languages === void 0) { languages = []; }
        if (content === void 0) { content = ''; }
        if (isSSII === void 0) { isSSII = false; }
        this.title = title;
        // this.date = date;
        this.type = type;
        this.city = city;
        this.salary = salary;
        this.languages = languages;
        this.content = content;
        this.isSSII = false;
    }
    return Job;
}());
exports.Job = Job;
//# sourceMappingURL=job.js.map