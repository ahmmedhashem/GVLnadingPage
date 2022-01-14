import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Landing/navbar/navbar.component';
import { SliderComponent } from './Landing/slider/slider.component';
import { PartnersComponent } from './Landing/partners/partners.component';
import { CategoriesComponent } from './Landing/categories/categories.component';
import { EducationComponent } from './Landing/education/education.component';
import { BussinessComponent } from './Landing/bussiness/bussiness.component';
import { LearningComponent } from './Landing/learning/learning.component';
import { FooterComponent } from './Landing/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    PartnersComponent,
    CategoriesComponent,
    EducationComponent,
    BussinessComponent,
    LearningComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
