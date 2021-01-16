import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KidsRoutingModule } from './kids-routing.module';
import { KidsHeaderComponent } from './kids-header/kids-header.component';
import { KidsComponent } from './kids.component';
import { KidsAccessoriesComponent } from './kids-accessories/kids-accessories.component';
import { KidsClothingComponent } from './kids-clothing/kids-clothing.component';
import { KidsToysComponent } from './kids-toys/kids-toys.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    KidsHeaderComponent,
    KidsComponent,
    KidsAccessoriesComponent,
    KidsClothingComponent,
    KidsToysComponent
  ],
  imports: [
    CommonModule,
    KidsRoutingModule,
    // HttpClientModule
  ]
})
export class KidsModule { }
