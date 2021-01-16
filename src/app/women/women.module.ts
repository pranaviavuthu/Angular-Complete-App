import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WomenRoutingModule } from './women-routing.module';
import { WomenHeaderComponent } from './women-header/women-header.component';
import { WomenAccessoriesComponent } from './women-accessories/women-accessories.component';
import { WomenBagsComponent } from './women-bags/women-bags.component';
import { WomenDressesComponent } from './women-dresses/women-dresses.component';
import { WOmenSHoesComponent } from './women-shoes/women-shoes.component';
import { WomenComponent } from './women.component';
import { BagsFilterComponent } from './women-bags/bags-filter/bags-filter.component';
import { BagsResultsComponent } from './women-bags/bags-results/bags-results.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoesDealsComponent } from './women-shoes/shoes-deals/shoes-deals.component';
import { ShoesOffersComponent } from './women-shoes/shoes-offers/shoes-offers.component';


@NgModule({
  declarations: [WomenComponent, WomenAccessoriesComponent,WomenBagsComponent,WomenHeaderComponent,WomenDressesComponent,WOmenSHoesComponent, BagsFilterComponent, BagsResultsComponent, ShoesDealsComponent, ShoesOffersComponent],
  imports: [
    CommonModule,
    WomenRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class WomenModule { }
