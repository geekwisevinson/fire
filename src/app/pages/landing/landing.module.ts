import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import {LandingRoutingModule} from "./landing-routing.module";
import { HtmlComponent } from './pages/html/html.component';

@NgModule({
  declarations: [LandingComponent, HtmlComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
  ]
})
export class LandingModule { }
