import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavBarComponent,
    FooterComponent
  ],
  exports: [
    NavBarComponent,
    FooterComponent
  ]
})
export class SharedModule { }