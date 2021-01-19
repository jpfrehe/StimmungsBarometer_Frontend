import { NgModule } from '@angular/core';
import {AbstimmenComponent} from './abstimmen/abstimmen.component';
import {RouterModule, Routes} from '@angular/router';
import {ResultsComponent} from './results/results.component';

const routes: Routes = [
  { path: 'vote', component: AbstimmenComponent },
  { path: 'results', component: ResultsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
