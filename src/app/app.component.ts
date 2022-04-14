import { Component } from '@angular/core';
import { animate,state,style,transition,trigger,keyframes,group } from '@angular/animations';
import { Route, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[]
})
export class AppComponent {
  prepareRoute(outlet:RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  };
  title = 'my-resume-project';
}
