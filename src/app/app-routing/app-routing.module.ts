import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { PersonalInformationComponent } from '../personal-information/personal-information.component';

const routes:Routes = [{path:'about', component:AboutComponent,},
                      {path:'skills', component:SkillsComponent},
                      {path:'portfolio', component:PortfolioComponent,},
                      {path:'contacts', component:ContactsComponent},
                      {path:'personal-information',component:PersonalInformationComponent},
                      {path:'**', component:PageNotFoundComponent}

]

@NgModule({
  declarations: [],
  imports: [  
    RouterModule.forRoot(routes)],//call-back function to fetch all the routes inidicated in the routes constant; it will be exported
    exports:[RouterModule]
   // CommonModule

})
export class AppRoutingModule { }
