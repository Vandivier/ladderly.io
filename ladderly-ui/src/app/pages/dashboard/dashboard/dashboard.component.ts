import { Component } from '@angular/core';

import { MENU_ITEMS } from '../../pages-menu';

@Component({
    selector: 'app-dashboard',
    template: `
        <ngx-one-column-layout>
            <nb-menu [items]="menu"></nb-menu>
            <router-outlet></router-outlet>
        </ngx-one-column-layout>
    `,
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
    menu = MENU_ITEMS;
}
