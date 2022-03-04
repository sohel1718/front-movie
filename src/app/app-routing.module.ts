import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CreateComponent } from './create/create.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      component: HomepageComponent
    },
    {
      path: 'movies',
      component: MovieListComponent
    },
    {
      path: 'about',
      component: AboutComponent
    }, 
    {
      path: 'create',
      component: CreateComponent
    },
    {
      path: 'movies/:id',
      component: MovieDetailsComponent
    }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
