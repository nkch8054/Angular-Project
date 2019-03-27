import { Component, OnInit } from '@angular/core';
import { FormControlService } from '../services/form-control.service';

@Component({
    selector: 'app-form-control',
    templateUrl: './form-control.component.html',
    styleUrls: ['./form-control.component.css']
})
export class ControlComponent implements OnInit {
    public static data: any[];
    constructor(private controlService: FormControlService) {
        this.controlService.getControl()
            .subscribe(response => {
                ControlComponent.data = response.json();
            });
    }

    ngOnInit() {
    }

}