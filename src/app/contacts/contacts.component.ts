import { Component, OnInit } from '@angular/core';
import { animate,state,style,transition,trigger,keyframes,group } from '@angular/animations';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  animations: [
    trigger('fade',[
      transition('void => *', [
        style({marginLeft:"10%",marginRight:"10%", opacity:0,}),
        animate(2000, style({opacity:1 }))
      ])
    ]),

    trigger('fadeInOut',[
      state('void', style({opacity: 0})),
      transition(':enter, :leave', [
        animate(2000)
      ])
    ])
  ]
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
