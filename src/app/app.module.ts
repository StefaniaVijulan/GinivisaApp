import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgImageSliderModule } from 'ng-image-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";



import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { TurismComponent } from './Pages/turism/turism.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { NoutatiComponent } from './Pages/noutati/noutati.component';
import { MagazinFructeComponent } from './Pages/magazin-fructe/magazin-fructe.component';
import { FructeArahideComponent } from './Components/fructe-arahide/fructe-arahide.component';
import { FructeCapsuniComponent } from './Components/fructe-capsuni/fructe-capsuni.component';
import { FructeZmeuraComponent } from './Components/fructe-zmeura/fructe-zmeura.component';
import { FructeHomeComponent } from './Components/fructe-home/fructe-home.component';
import { TurismDescriereAnaComponent } from './Components/turism-descriere-ana/turism-descriere-ana.component';
import { TurismDescriereVanatorComponent } from './Components/turism-descriere-vanator/turism-descriere-vanator.component';
import { DonatieComponent } from './Pages/donatie/donatie.component';
import { JoburiComponent } from './Pages/joburi/joburi.component';
import { FructeComponent } from './Components/fructe/fructe.component';
import { TurismAtractiiComponent } from './Components/turism-atractii/turism-atractii.component';
import { TurismCazareComponent } from './Components/turism-cazare/turism-cazare.component';
import { JobCOOComponent } from './Components/job-coo/job-coo.component';
import { JobSMMComponent } from './Components/job-smm/job-smm.component';
import { ModalClickDirective } from './Components/turism-atractii/modal-click.directive';
import { FormContactComponent } from './Components/form-contact/form-contact.component';
import { ContactFormComponent } from './Components/contact-form/contact-form.component';
import { BrainHubComponent } from './Pages/brain-hub/brain-hub.component';
import { SwiperModule } from 'swiper/angular';
import { SwiperGalleryComponent } from './Components/swiper-gallery/swiper-gallery.component';
import { SwiperGalleryFructeComponent } from './Components/swiper-gallery-fructe/swiper-gallery-fructe.component';
import { TurismHanComponent } from './Pages/turism-han/turism-han.component';
import { TurismAnaComponent } from './Pages/turism-ana/turism-ana.component';
import { JobContabilComponent } from './Components/job-contabil/job-contabil.component';
import { PachetTuristicComponent } from './Components/pachet-turistic/pachet-turistic.component';
import { PachetZiuaComponent } from './Components/pachet-ziua/pachet-ziua.component';
import { EchipaComponent } from './Pages/echipa/echipa.component';
import { CalendarComponent } from './Components/calendar/calendar.component';
import { SuperOfertaComponent } from './Pages/super-oferta/super-oferta.component';
import { RestaurantComponent } from './Pages/restaurant/restaurant.component';
import { SwiperGalleryRestaurantComponent } from './Components/swiper-gallery-restaurant/swiper-gallery-restaurant.component';
import { ActivitatiComponent } from './Pages/activitati/activitati.component';
import { RoomDetailsComponent } from './Components/room-details/room-details.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TurismComponent,
    ContactComponent,
    NoutatiComponent,
    MagazinFructeComponent,
    FructeArahideComponent,
    FructeCapsuniComponent,
    FructeZmeuraComponent,
    FructeHomeComponent,
    TurismDescriereAnaComponent,
    TurismDescriereVanatorComponent,
    DonatieComponent,
    JoburiComponent,
    FructeComponent,
    TurismAtractiiComponent,
    TurismCazareComponent,
    JobCOOComponent,
    JobSMMComponent,
    ModalClickDirective,
    FormContactComponent,
    ContactFormComponent,
    BrainHubComponent,
    SwiperGalleryComponent,
    SwiperGalleryFructeComponent,
    TurismHanComponent,
    TurismAnaComponent,
    JobContabilComponent,
    PachetTuristicComponent,
    PachetZiuaComponent,
    EchipaComponent,
    CalendarComponent,
    SuperOfertaComponent,
    RestaurantComponent,
    SwiperGalleryRestaurantComponent,
    ActivitatiComponent,
    RoomDetailsComponent,



  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    AppRoutingModule,
    NgImageSliderModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SwiperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
