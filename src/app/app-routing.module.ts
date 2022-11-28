import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieInformationComponent } from './components/movie-information/movie-information.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MoviesListComponent },
  { path: 'movieInfo', component: MovieInformationComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
