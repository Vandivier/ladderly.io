import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './users.service';
import { UserActivityService } from './user-activity.service';

const SERVICES = [UserService, UserActivityService];

@NgModule({
    imports: [CommonModule],
    providers: [...SERVICES],
})
export class MockDataModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MockDataModule,
            providers: [...SERVICES],
        } as ModuleWithProviders;
    }
}
