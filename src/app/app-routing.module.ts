import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Pages/home/home.component';
import { MagazinFructeComponent } from './Pages/magazin-fructe/magazin-fructe.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { TurismComponent } from './Pages/turism/turism.component';
import { NoutatiComponent } from './Pages/noutati/noutati.component';
import { JoburiComponent } from './Pages/joburi/joburi.component';
import { DonatieComponent } from './Pages/donatie/donatie.component';
import { BrainHubComponent } from './Pages/brain-hub/brain-hub.component';
import { TurismAnaComponent } from './Pages/turism-ana/turism-ana.component';
import { TurismHanComponent } from './Pages/turism-han/turism-han.component';
import { EchipaComponent } from './Pages/echipa/echipa.component';
import { SuperOfertaComponent } from './Pages/super-oferta/super-oferta.component';

import { HashLocationStrategy, PathLocationStrategy, LocationStrategy } from '@angular/common';
import { RestaurantComponent } from './Pages/restaurant/restaurant.component';
import { ActivitatiComponent } from './Pages/activitati/activitati.component';





const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'magazin-fructe', component: MagazinFructeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'turism', component: TurismComponent},
  {path: 'turism-ana', component: TurismAnaComponent},
  {path: 'turism-han', component: TurismHanComponent},
  {path: 'brain-hub', component: BrainHubComponent},
  {path: 'noutati', component: NoutatiComponent},
  {path: 'joburi', component: JoburiComponent},
  {path: 'donatie', component: DonatieComponent},
  {path: 'echipa', component: EchipaComponent},
  {path: 'super-oferta', component: SuperOfertaComponent},
  {path: 'restaurant', component: RestaurantComponent},
  {path: 'activitati', component: ActivitatiComponent},
  {path: '**', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy }]
  // providers: [{provide: LocationStrategy, useClass: PathLocationStrategy }]
})
export class AppRoutingModule { }
