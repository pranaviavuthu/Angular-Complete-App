import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessoriesComponent } from './accessories/accessories.component';
import { ClothingComponent } from './clothing/clothing.component';
import { MenComponent } from './men.component';
import { ShoesComponent } from './shoes/shoes.component';

const routes: Routes = [
  {path:"",component:MenComponent,children:[
    {path: "clothing",component:ClothingComponent},
    {path: "accessories",component:AccessoriesComponent},
    {path:"shoes",component:ShoesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenRoutingModule { }
