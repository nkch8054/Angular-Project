import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfieElementComponent } from './profile-element.component';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

    selectedPane: string = '';
    shouldShow = true;
    set profileComponent(v: ProfieElementComponent) {
        setTimeout(() => { this.selectedPane = v.id; }, 0);
    }

    toggle() { this.shouldShow = !this.shouldShow; }
    /* post = {
        red: 'red',
    } */

    onChange(isRed) {
        console.log('color change', isRed);
    }
}
