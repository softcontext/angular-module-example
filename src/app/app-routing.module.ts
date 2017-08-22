import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreTestComponent, HelloComponent, IntroComponent } from './component/index';

const routes: Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full' },
  { path: 'intro', component: IntroComponent },
  { path: 'hello', component: HelloComponent },
  { path: 'core-test', component: CoreTestComponent },
  { path: 'lazy', loadChildren: 'app/player/player.module#PlayerModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
