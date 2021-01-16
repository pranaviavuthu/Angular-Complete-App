import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WomenAccessoriesComponent } from './women-accessories/women-accessories.component';
import { WomenBagsComponent } from './women-bags/women-bags.component';
import { WomenClothingComponent } from './women-clothing/women-clothing.component';
import { WomenDressesComponent } from './women-dresses/women-dresses.component';
import { WOmenSHoesComponent } from './women-shoes/women-shoes.component';
import { WomenComponent } from './women.component';

const routes: Routes = [
  {path:"",component:WomenComponent, children:[
    {path: "women-accessories",component:WomenAccessoriesComponent},
    {path:"women-clothing",component:WomenClothingComponent},
    {path:"women-dresses",component:WomenDressesComponent},
    {path:"women-shoes",component:WOmenSHoesComponent},
    {path:"women-bags",component:WomenBagsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WomenRoutingModule { }
