import { Component, OnInit,Input,Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
   @Input() quote: Quote;
   @Output() isComplete = new EventEmitter<boolean>();
   @Output() upVote = new EventEmitter();
   numberOfLikes = 0;
   numberOfDislikes = 0;

   likeButtonClick() {
     this.upVote.emit(this.numberOfLikes);
     this.numberOfLikes++;
   }

   dislikeButton() {
     this.numberOfDislikes++;
   }

  // quoteComplete(complete:boolean){
  //   this.isComplete.emit(complete);
  // }
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
 
  
  constructor() { }

  ngOnInit() {
  }

}
