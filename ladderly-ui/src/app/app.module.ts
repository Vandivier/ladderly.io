import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        NbEvaIconsModule,
        NbAuthModule,
        NbAuthModule.forRoot({
            strategies: [
                NbPasswordAuthStrategy.setup({
                    name: 'email',
                }),
            ],
            forms: {},
        }),
        NbLayoutModule,
        NbThemeModule.forRoot({ name: 'default' }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
