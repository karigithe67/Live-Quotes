import { Component, OnInit} from '@angular/core';
import { Quote } from '../quote';



@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [

      
    new Quote('Love', 'But I say to you, Love your enemies and pray for those who persecute you so that you may be sons of your Father who is in heaven; for he makes his sun rise on the evil and on the good and sends rain on the just and on the unjust.', 'Jesus Christ',new Date(2019,6-1,13)),
    new Quote('Hate', 'We must not hate those who have done wrong to us for as soon as we hate we become just like them.', 'Tupac Shakur',new Date(2019,6-1,9)),
    new Quote('Inspiration', 'Libraries store the energy that fuels the imagination. They open up windows to the world and inspire us to explore and achieve, and contribute to improving our quality of life. Libraries change lives for the better.', 'Sidney sheldon',new Date(2019,7-1,21)),
    new Quote('Patience', 'God has perfect timing; never early, never late. It takes a little patience and it takes a lot of faith but it’s worth the wait.',  'Sidney Sheldon',new Date(2019,8-1,19)),
    new Quote('Guidance','You can kill the dream but you cant kill the dreamer', 'Martin Luther King',new Date(2019,3-1,9)),
    new Quote('Family' , 'Being a family means you are a part of something very wonderful. It means you will love and be loved for the rest of your life.', 'Liam Greeves DeVante',new Date(2019,9-1,4)),
  ];

  toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
  // completeQuote(isComplete, index){
  //   if (isComplete) {
  //     this.quotes.splice(index,1);
  //   }
  // }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].title}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  addNewQuote(quotes){
    let quoteLength = this.quotes.length;
    quotes.id = quoteLength+1;
    quotes.completeDate = new Date(quotes.completeDate)
    this.quotes.push(quotes)
  }
  constructor() { }

  ngOnInit() {
  }

}

