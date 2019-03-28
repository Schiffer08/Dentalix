import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ClientComponent } from './inventory/client/client.component';
import { CalendarComponent } from './inventory/calendar/calendar.component';
import { ReportsComponent } from './inventory/reports/reports.component';
import { CitasComponent } from './inventory/citas/citas.component';
import { LoginComponent } from './login/login.component';
import { ForgoutComponent } from './forgout/forgout.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch:'full'
    },
    {
      path: 'home',
      component: HomeComponent
    },  
    {
      path: 'gallery',
      component: GalleryComponent
    },
    {
      path: 'calendar',
      component: CalendarComponent
    },
    {
      path: 'client',
      component: ClientComponent
    },
    {
      path: 'inventory',
      component: InventoryComponent
    },
    {
      path: 'citas',
      component: CitasComponent
    },
    {
      path: 'statistics',
      component: StatisticsComponent
    },
    {
      path: 'reports',
      component: ReportsComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'forgout',
      component: ForgoutComponent
    },
    {
      path: 'register',
      component: RegisterComponent
    },
    {
      path: '**',
      component: HomeComponent,
      pathMatch:'full'
    }
  ];

  export const routing = RouterModule.forRoot(appRoutes);