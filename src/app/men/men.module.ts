import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenRoutingModule } from './men-routing.module';
import { MenComponent } from './men.component';
import { MenHeaderComponent } from './men-header/men-header.component';
import { ClothingComponent } from './clothing/clothing.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { ShoesComponent } from './shoes/shoes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MenComponent,MenHeaderComponent,ClothingComponent,AccessoriesComponent,ShoesComponent],
  imports: [
    CommonModule,
    MenRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MenModule { }
