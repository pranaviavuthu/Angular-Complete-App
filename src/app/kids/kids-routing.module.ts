import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KidsClothingComponent } from './kids-clothing/kids-clothing.component';
import { KidsToysComponent } from './kids-toys/kids-toys.component';
import { KidsComponent } from './kids.component';

const routes: Routes = [
  {path:"",component:KidsComponent},
  {path:"kids-accessories",component:KidsToysComponent},
  {path:"kids-toys",component:KidsToysComponent},
  {path:"kids-clothing",component:KidsClothingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KidsRoutingModule { }
