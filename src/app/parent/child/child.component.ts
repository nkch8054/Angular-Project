import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  private _name;

  @Input()
  set name(name: string) {
    this._name = (name && name.trim() || 'no name set');
  }


  get name(): string {
    return this._name;
  }

}
