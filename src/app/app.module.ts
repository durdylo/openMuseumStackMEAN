import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import {AddMuseumComponent} from './add-museum/add-museum.component';
import { AppComponent } from './app.component';
import {MuseumService} from './services/openmuseum.service'
import { SingleMuseumComponent } from './single-museum/single-museum.component';
import { IndexComponent } from './index/index.component';
import { MuseumDetailComponent } from './museum-detail/museum-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';


const appRoutes:Routes = [
  { path: 'add', component: AddMuseumComponent },
  { path: 'singleMusuem', component: SingleMuseumComponent },
  { path: 'museumDatails', component: MuseumDetailComponent },
  { path: '', component: IndexComponent },
  {path: 'not-found', component:NotFoundComponent},
  {path: '**', redirectTo: 'not-found'},

]
@NgModule({
  declarations: [
    AppComponent,
    SingleMuseumComponent,
    IndexComponent,
    AddMuseumComponent,
    MuseumDetailComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MuseumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
