import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { CdkDragDrop, copyArrayItem } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-form-control',
    templateUrl: './form-control.component.html',
    styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

    todo = [
        { name: 'Get to work' },
        { name: 'Pick up groceries', disabled: true },
        { name: 'Go home' },
        { name: 'Fall asleep' }
    ];

    done = [
        { name: 'Get up' },
        { name: 'Brush teeth' },
        { name: 'Take a shower' },
        { name: 'Check e-mail' },
        { name: 'Walk dog' }
    ];

    abc = true;

    @ViewChild('clone') private template: ElementRef;

    constructor(private rendered: Renderer2) {

    }

    down(event: MouseEvent) {
        this.abc = false;
        const li = this.rendered.createElement('button');
        const text = this.rendered.createText('Drag me');
        this.rendered.addClass(li, 'btn btn-primary');
        this.rendered.appendChild(li, text);
        this.rendered.insertBefore(this.template.nativeElement.parentNode, li, this.template.nativeElement);
    }

    ngOnInit() {

    }

    drop(event: CdkDragDrop<String[]>) {
        if (event.previousContainer === event.container) {
            return;
        }
        copyArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }

    keycode($event) {

    }


}
