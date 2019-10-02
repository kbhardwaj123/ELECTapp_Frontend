import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatesComponent } from './candidates/candidates.component';
import { CategoriesComponent } from './categories/categories.component';
import { CompareComponent } from './compare/compare.component';
import { FollowedThreadsComponent } from './followed-threads/followed-threads.component';
import { DebateDetailsComponent } from './debate-details/debate-details.component';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/candidates', pathMatch:'full' },
  { path: 'candidates', component: CandidatesComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'compare', component: CompareComponent },
  { path: 'followed-threads', component: FollowedThreadsComponent },
  { path: 'debate-details', component: DebateDetailsComponent },
  { path: 'candidates/:id', component: CandidateDetailComponent},
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ 
  CandidatesComponent, 
  CategoriesComponent, 
  CompareComponent, 
  FollowedThreadsComponent, 
  DebateDetailsComponent,
  CandidateDetailComponent,
  PageNotFoundComponent,
];

