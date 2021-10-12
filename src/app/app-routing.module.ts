import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DonateNowComponent } from './donate-now/donate-now.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { TempleComponent } from './temple/temple.component';
import { UpcomingEventComponent } from './upcoming-event/upcoming-event.component';

const routes: Routes = [
  {path : '',
   component:HomeComponent },
   {path: 'home', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'temple', component:TempleComponent},
  {path: 'event', component:UpcomingEventComponent},
  {path: 'gallery', component:GalleryComponent},
  {path: 'donateNow', component:DonateNowComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
