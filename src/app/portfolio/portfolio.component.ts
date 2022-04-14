import { Component, OnInit } from '@angular/core';
import { animate,state,style,transition,trigger,keyframes,group } from '@angular/animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [
    trigger('fade',[
      transition('void => *', [
        style({marginLeft:"10%",marginRight:"10%", opacity:0}),
        animate(2000, style({backgroundColor: 'white', opacity:1 }))
      ])
    ]),

    trigger('fadeInOut',[
      state('void', style({backgroundColor:'black', opacity: 0,  padding: '5%'})),
      transition(':enter, :leave', [
        animate(3000)
      ])
    ]),

    trigger('fade1',[
      transition('void => *', [
        style({marginLeft:"10%",marginRight:"10%", opacity:0}),
        animate(2000, style({opacity:1 }))
      ])
    ]),
  

  ]
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
