import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    NbAuthComponent,
    NbLoginComponent,
    NbLogoutComponent,
    NbRegisterComponent,
    NbRequestPasswordComponent,
    NbResetPasswordComponent,
} from '@nebular/auth';

const routes: Routes = [
    { component: NbAuthComponent, path: '', pathMatch: 'full' }, // home
    {
        path: 'auth',
        component: NbAuthComponent,
        children: [
            {
                path: '',
                component: NbLoginComponent,
            },
            {
                path: 'login',
                component: NbLoginComponent,
            },
            {
                path: 'register',
                component: NbRegisterComponent,
            },
            {
                path: 'logout',
                component: NbLogoutComponent,
            },
            {
                path: 'request-password',
                component: NbRequestPasswordComponent,
            },
            {
                path: 'reset-password',
                component: NbResetPasswordComponent,
            },
        ],
    },
    /* Have relevant content pages like nerdwallet, no generic blog
        {
            path: 'pages',
            loadChildren: () => import('app/pages/pages.module')
            .then(m => m.PagesModule),
        },
    */
    // { path: 'profile' },
    // { path: '**', redirectTo: 'pages' }, // 404
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
