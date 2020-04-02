import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntriesComponent } from './entries/entries.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RetisterComponent } from './retister/retister.component';

//services 
import { AuthService } from './auth.service';
import{EntryService} from './entry.service';
import { AppRouterModule } from './app-router.module';
import { HttpClientModule } from '@angular/common/http';

//material design 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatCardModule, MatSelectModule,MatTableModule,
        MatToolbarModule, MatDialogModule,MatListModule,MatSortModule} from '@angular/material';
import { NewEntryComponent } from './new-entry/new-entry.component';

//forms 
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UpdateEntryComponent } from './update-entry/update-entry.component';
import { DeleteEntryComponent } from './delete-entry/delete-entry.component';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    RetisterComponent,
    EntriesComponent,
    FooterComponent,
    HeaderComponent,
    NewEntryComponent,
    UpdateEntryComponent,
    DeleteEntryComponent,
    RetisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //material design 
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
     MatTableModule,
     MatSelectModule,
     MatToolbarModule,
     MatDialogModule,
     MatListModule,
     MatSortModule,
     //forms
     ReactiveFormsModule,
     FormsModule,
     AppRouterModule
  ],
  entryComponents:[UpdateEntryComponent],
  providers: [EntryService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
