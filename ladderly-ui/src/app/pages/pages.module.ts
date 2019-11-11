import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [PagesRoutingModule, DashboardModule, MiscellaneousModule],
    declarations: [PagesComponent, HomeComponent],
})
export class PagesModule {}
