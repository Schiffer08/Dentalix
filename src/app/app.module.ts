import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ClientComponent } from './inventory/client/client.component';
import { CalendarComponent } from './inventory/calendar/calendar.component';
import { ReportsComponent } from './inventory/reports/reports.component';
import { CitasComponent } from './inventory/citas/citas.component';
import { LoginComponent } from './login/login.component';
import { ForgoutComponent } from './forgout/forgout.component';
import { RegisterComponent } from './register/register.component';

import { routing } from './app.routing';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatTooltipModule} from '@angular/material/tooltip'
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    HomeComponent,
    StatisticsComponent,
    InventoryComponent,
    ClientComponent,
    CalendarComponent,
    ReportsComponent,
    CitasComponent,
    LoginComponent,
    ForgoutComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
