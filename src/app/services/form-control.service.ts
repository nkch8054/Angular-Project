import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
    providedIn: 'root'
})
export class FormControlService {

    constructor(private http: Http) { }

    getControl() {
        return this.http.get('/api/control');
    }
}
