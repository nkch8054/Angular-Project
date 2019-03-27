import { Directive, HostListener } from "@angular/core";

@Directive({ selector: 'button[counting]' })
export class HostHelperDirective {
    numberOfClicks = 0;

    @HostListener('click', ['$event.target'])
    onClick(btn) {
        console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
    }
}