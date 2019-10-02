import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

import { FormsModule } from '@angular/forms';
import { CandidatesComponent } from './candidates/candidates.component';
import { CategoriesComponent } from './categories/categories.component';
import { CompareComponent } from './compare/compare.component';
import { CredentialsComponent } from './credentials/credentials.component';
import { DebateDetailsComponent } from './debate-details/debate-details.component';
import { FollowedThreadsComponent } from './followed-threads/followed-threads.component';
import { ForumComponent } from './forum/forum.component';
import { ManifestosComponent } from './manifestos/manifestos.component';
import { AboutComponent } from './about/about.component';
import { CandidateService } from './candidate.service';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidatesComponent,
    CategoriesComponent,
    CompareComponent,
    CredentialsComponent,
    DebateDetailsComponent,
    FollowedThreadsComponent,
    ForumComponent,
    ManifestosComponent,
    AboutComponent,
    CandidateDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatTabsModule,
    MatButtonModule,
    HttpClientModule,

  ],
  providers: [CandidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
