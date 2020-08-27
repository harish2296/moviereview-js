import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent,  },
  { path: 'movies', component: MovieComponent },
  { path: 'movies-details', component: MoviedetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
