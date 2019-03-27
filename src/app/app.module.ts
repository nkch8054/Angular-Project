import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { fakeBackendProvider } from './helpers/fake-backend';
import { FormControlComponent } from './form-control/form-control.component';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { FormControlService } from './services/form-control.service';
import { MockBackend } from '@angular/http/testing';
import { ControlComponent } from './form-control/control.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { RainbowDirective } from './rainbow.directive';
import { ShortPipe } from './short.pipe';
import { ProfieElementComponent } from './profile/profile-element.component';
import { MaterialComponent } from './material/material.component';
import { MaterialHelperComponent } from './material/material-helper.component';
import {
    MatDialogModule, MatButtonModule, MatListModule, MatAutocompleteModule,
    MatFormFieldModule, MatChipsModule, MatIconModule, MatInputModule
} from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop'
import { NgDragDropModule } from 'ng-drag-drop'
import { HostHelperDirective } from './home/host-helper.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        NavMenuComponent,
        HomeComponent,
        ContactComponent,
        ProfileComponent,
        FormControlComponent,
        ControlComponent,
        PdfViewerComponent,
        RainbowDirective,
        ShortPipe,
        ProfieElementComponent,
        MaterialComponent,
        MaterialHelperComponent,
        HostHelperDirective,
        DragDropComponent,
        ParentComponent,
        ChildComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        PdfViewerModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatButtonModule,
        MatListModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatChipsModule,
        MatIconModule,
        MatInputModule,
        DragDropModule,
        NgDragDropModule.forRoot(),
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: 'login', component: LoginComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'form-control', component: FormControlComponent },
            { path: 'pdf-viewer', component: PdfViewerComponent },
            { path: 'material', component: MaterialComponent },
            { path: 'drag-drop', component: DragDropComponent },
            { path: 'component-interaction', component: ParentComponent },
        ])
    ],
    providers: [
        FormControlService,
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    entryComponents: [MaterialHelperComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}
