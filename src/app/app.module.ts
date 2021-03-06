import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryListComponent } from './components/inventory-list/inventory-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';

import {
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatStepperModule,
  MatInputModule,
  MatButtonModule,
  MatDividerModule,
  MatTableModule,
  MatDialogModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { AlquilerComponent } from './components/alquiler/alquiler.component';
import { HomeComponent } from './components/home/home.component';
import { ItemCardComponent } from './components/item-card/item-card.component';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    InventoryListComponent,
    HeaderComponent,
    AlquilerComponent,
    HomeComponent,
    ItemCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ItemCardComponent
    ], 
})
export class AppModule { }
