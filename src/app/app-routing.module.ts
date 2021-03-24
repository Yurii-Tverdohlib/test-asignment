import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { PostDetailComponent } from './main-content/post-detail/post-detail.component';
// import { PostResolverService } from './main-content/post-resolver.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { TrendsComponent } from './trends/trends.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {
    path: 'main', component: MainContentComponent,
    // resolve: [PostResolverService]
  },
  {
    path: 'main/:id', component: PostDetailComponent,
    // resolve: [PostResolverService]
  },
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'trends', component: TrendsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
