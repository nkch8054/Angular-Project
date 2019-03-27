import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

    routes = [
        { link: '/login', name: 'Login' },
        { link: '/profile', name: 'Profile' },
        { link: '/contact', name: 'Contact' },
        { link: '/form-control', name: 'Form-Control' },
        { link: '/pdf-viewer', name: 'Pdf Viewer' },
        { link: '/material', name: 'Material' },
        { link: '/drag-drop', name: 'Drag Drop' },
        { link: '/component-interaction', name: 'component-interaction' },
    ];

    constructor() { }

    ngOnInit() {

    }

}
