import { Component, OnInit } from '@angular/core';
import { PDFDocumentProxy } from 'pdfjs-dist';

@Component({
    selector: 'app-pdf-viewer',
    templateUrl: './pdf-viewer.component.html',
    styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {
    pdfSrc = {
        url: 'assets/common/sample.pdf',
        withCredentials: true
    };
    constructor() { }

    ngOnInit() {
    }

    callBackFn($event) {
        
    }

    pageRendered(e: CustomEvent) {
        console.log('(page-rendered)', e);
    }

}
