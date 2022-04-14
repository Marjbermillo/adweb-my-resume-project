import { Component, OnInit } from '@angular/core';
import { animate,state,style,transition,trigger,keyframes,group } from '@angular/animations';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('fade',[
      transition('void => *', [
        style({backgroundColor: 'black', opacity:0}),
        animate(2000, style({backgroundColor: 'white', opacity:1 }))
      ])
    ]),

    trigger('fadeInOut',[
      state('void', style({opacity: 0})),
      transition(':enter, :leave', [
        animate(2000)
      ])
    ]),

    trigger('fadeList',[
      transition('void => *', [
        style({backgroundColor: 'black', opacity:0}),
        animate(2000, style({backgroundColor: 'white', opacity:1 }))
      ])
    ]),

  ]
})

export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
