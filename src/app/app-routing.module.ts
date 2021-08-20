import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './components/launches/detail/detail.component';
import { LaunchesComponent } from './components/launches/launches.component';

const routes: Routes = [
  { path: '', component: LaunchesComponent },
  { path: 'detail/:id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
