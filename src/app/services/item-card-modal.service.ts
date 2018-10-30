import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

// Component to use
import { ItemCardComponent, ItemCardParams } from '../components/item-card/item-card.component';

@Injectable({
  providedIn: 'root'
})

export class ItemCardModalService {

  constructor(private matDialog: MatDialog) { }

  openModal(params?: ItemCardParams): MatDialogRef<ItemCardComponent, string[]> {
    return this.matDialog.open<ItemCardComponent, any, string[]>(ItemCardComponent, {
      width: '70vw',
      height: '60vw',
      minHeight: '350px',
      minWidth: '400px',
      maxWidth: '900px',
      maxHeight: '450px',
      data: params,
      panelClass: 'field-selector-modal',
      autoFocus: false
    });
  }
}



