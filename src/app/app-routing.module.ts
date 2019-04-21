import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
