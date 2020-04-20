import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './modules/core/components/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/profile/profile.module').then(({ ProfilesModule }) => ProfilesModule)
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
