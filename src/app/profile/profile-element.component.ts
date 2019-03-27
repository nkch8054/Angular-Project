import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-profie-element',
    templateUrl: './profile-element.component.html',
})
export class ProfieElementComponent implements OnInit {

    RED = 'red';

    @Input() id !: string;
    @Input() isRed = true;
    @Output() changeColor = new EventEmitter();
    constructor() { }

    ngOnInit() {
    }

    change() {
        this.isRed = !this.isRed;
        this.changeColor.emit(this.isRed);

    }

}
