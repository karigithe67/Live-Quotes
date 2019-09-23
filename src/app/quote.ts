export class Quote {
    // title:string
    // description:string
    // author:string
    showAuthor: boolean;
    constructor(public title: string,public myquote: string,public completeDate: Date){
        this.showAuthor=false;
    }
}
