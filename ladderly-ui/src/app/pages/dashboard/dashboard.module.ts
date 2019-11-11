import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
    NbLayoutModule,
    NbMenuModule,
    NbSidebarService,
    NbThemeModule,
} from '@nebular/theme';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ThemeModule } from '../../theme/theme.module';

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        NbEvaIconsModule,
        NbLayoutModule,
        NbMenuModule.forRoot(),
        NbThemeModule.forRoot({ name: 'default' }),
        ThemeModule,
    ],
    providers: [NbSidebarService],
})
export class DashboardModule {}
