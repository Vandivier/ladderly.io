import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
    { path: '', pathMatch: 'full' }, // home
    {
        path: 'auth',
        // component: NbAuthComponent,
        children: [
            {
                path: '',
                // component: NbLoginComponent
            },
            {
                path: 'login',
                // component: NbLoginComponent
            },
            {
                path: 'register',
                // component: NbRegisterComponent
            },
            {
                path: 'logout',
                // component: NbLogoutComponent
            },
            {
                path: 'request-password',
                // component: NbRequestPasswordComponent
            },
            {
                path: 'reset-password',
                // component: NbResetPasswordComponent
            },
        ],
    },
    // { path: "blog" },
    { path: 'profile' },
    { path: '**', redirectTo: 'pages' }, // 404
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
