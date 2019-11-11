import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        loadChildren: () =>
            import('./pages/pages.module').then(m => m.PagesModule),
        path: '',
        pathMatch: 'full',
    },
    {
        loadChildren: () =>
            import('./auth/auth.module').then(m => m.AuthModule),
        path: 'auth',
        pathMatch: 'full',
    },
    // { path: '**', redirectTo: 'pages' }, // 404
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
