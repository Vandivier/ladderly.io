import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            /* Should be like a user profile
            {
              path: 'dashboard',
              component: DashboardComponent,
            },
            */
            {
                path: 'miscellaneous',
                loadChildren: () =>
                    import('./miscellaneous/miscellaneous.module').then(
                        m => m.MiscellaneousModule
                    ),
            },
            {
                component: HomeComponent,
                path: '',
                pathMatch: 'full',
            },
            {
                path: '**',
                component: NotFoundComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {}
