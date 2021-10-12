import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { UpcomingEventComponent } from './upcoming-event/upcoming-event.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { InterestComponent } from './interest/interest.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TempleComponent } from './temple/temple.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule,HttpClientJsonpModule } from '@angular/common/http';
import { DonateNowComponent } from './donate-now/donate-now.component';

const routes: Routes = [
  // {path: '',redirectTo:'home',pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'temple', component:TempleComponent},
  {path: 'event', component:UpcomingEventComponent},
  {path: 'gallery', component:GalleryComponent},
  {path: 'donateNow', component:DonateNowComponent},


  

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    UpcomingEventComponent,
    OurServicesComponent,
    LatestNewsComponent,
    InterestComponent,
    AboutComponent,
    ContactComponent,
    TempleComponent,
    GalleryComponent,
    HomeComponent,
    DonateNowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientJsonpModule,
    RouterModule.forRoot(routes),
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
