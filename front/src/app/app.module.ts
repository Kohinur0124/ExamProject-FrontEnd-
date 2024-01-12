import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header1Component } from './Components/header-1/header-1.component';
import { Header2Component } from './Components/header-2/header-2.component';
import { FormsModule } from '@angular/forms';

import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InputTextModule } from 'primeng/inputtext';
import { SliderModule } from 'primeng/slider';
import { CaruselforHeader3Component } from './Components/caruselfor-header3/caruselfor-header3.component';

import { CarouselModule } from 'primeng/carousel';
import { Header3Component } from './Components/header-3/header-3.component';
import { Section2Component } from './sections/section2/section2.component';
import { Section1Component } from './sections/section1/section1.component';

import { CardModule } from 'primeng/card';
import { Section3Component } from './sections/section3/section3.component';
import { CardSection3Component } from './Components/card-section3/card-section3.component';
import { Section4Component } from './sections/section4/section4.component';
import { Section5Component } from './sections/section5/section5.component';
import { PanelModule } from 'primeng/panel';
import { Compforsection6Component } from './Components/compforsection6/compforsection6.component';
import { CompforfooterComponent } from './Components/compforfooter/compforfooter.component';


@NgModule({
  declarations: [
    AppComponent,
    Header1Component,
    Header2Component,
    CaruselforHeader3Component,
    Header3Component,
    Section2Component,
    Section1Component,
    Section3Component,
    CardSection3Component,
    Section4Component,
    Section5Component,
    Compforsection6Component,
    CompforfooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    FormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    SliderModule,
    CarouselModule,
    CardModule,
    PanelModule

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
