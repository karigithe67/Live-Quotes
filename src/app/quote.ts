export class Quote {
    // title:string
    // description:string
    // author:string
    public UpVote: true;

    showAuthor: boolean;
  downVote: number;
  upvotes: number;
    constructor(public title: string,public myquote: string, public author : string, public completeDate: Date, public like: number, public dislike: number){
        this.showAuthor=false;
        
    }
}
