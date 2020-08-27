import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { LoginComponent } from './login/login.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AppComponentSvc } from './AppComponentSvc';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    LoginComponent,
    MoviedetailsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [
    AppComponentSvc
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
