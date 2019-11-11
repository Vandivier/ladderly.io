import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
    NbLayoutModule,
    NbMenuModule,
    NbSidebarService,
    NbThemeModule,
} from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ThemeModule } from './theme/theme.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        CoreModule.forRoot(),
        HttpClientModule,
    ],
    providers: [NbSidebarService],
    bootstrap: [AppComponent],
})
export class AppModule {}
