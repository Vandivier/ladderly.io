import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbLayoutModule, NbMenuModule, NbThemeModule } from '@nebular/theme';

import { AuthRoutingModule } from './auth-routing.module';
import { ThemeModule } from '../theme/theme.module';

@NgModule({
    declarations: [],
    imports: [
        AuthRoutingModule,
        CommonModule,
        NbAuthModule,
        NbAuthModule.forRoot({
            strategies: [
                NbPasswordAuthStrategy.setup({
                    name: 'email',
                }),
            ],
            forms: {},
        }),
        NbEvaIconsModule,
        NbLayoutModule,
        NbMenuModule.forRoot(),
        NbThemeModule.forRoot({ name: 'default' }),
        ThemeModule.forRoot(),
    ],
})
export class AuthModule {}
