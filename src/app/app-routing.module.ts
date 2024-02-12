import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'about',component:AboutComponent,title:"about"},
  {path:'portfolio',component:PortfolioComponent,title:"portfolio"},
  {path:'contact',component:ContactComponent,title:"contact"},
  {path:"**",redirectTo:'about',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
