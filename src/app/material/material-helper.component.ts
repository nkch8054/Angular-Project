import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-material',
    templateUrl: './material-helper.component.html',
})
export class MaterialHelperComponent implements OnInit {

    data = [
        { name: 'Navin' },
        { name: 'Mohit' },
        { name: 'Bateshwar' },
        { name: 'Anurag' },
        { name: 'Amit' },
        { name: 'Bishnu' }

    ];

    filteredValue = this.data;

    myControl = new FormControl();
    constructor(public matDialog: MatDialogRef<MaterialHelperComponent>) { }

    ngOnInit(): void {
        this.myControl.valueChanges.subscribe(
            input => {
                this.filterData(input);
            }
        );
    }

    onClick(event) {
        this.matDialog.close(event.source.value.name);
    }

    filterData(input) {
        let data = this.filterList(input);
        this.filteredValue = data;
    }

    filterList(val) {
        if (typeof val !== 'string') {
            return [];
        }
        if (val === '' || val === null) {
            return this.data;
        }
        return val ? this.data.filter(s => s.name.toLowerCase().indexOf(val.toLowerCase()) !== -1) : this.data;
    }
}

