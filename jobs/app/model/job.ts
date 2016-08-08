export class Job {
    id:number;
    title: string;
    // date: Date();
    type: string;
    city: string;
    salary: number;
    languages: string[];
    content: string;
    isSSII: boolean;
    
    constructor(title:string = '', type:string = '',city:string = '',salary:number = 0,languages:string[] = [],content:string = '',isSSII:boolean = false) {
        this.title = title;
        // this.date = date;
        this.type = type;
        this.city = city;
        this.salary = salary;
        this.languages = languages;
        this.content = content;
        this.isSSII = false;

    }
    
}