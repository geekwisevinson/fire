import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import {LandingRoutingModule} from "./landing-routing.module";
import { HtmlComponent } from './pages/html/html.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [LandingComponent, HtmlComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LandingModule { }
