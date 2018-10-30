import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ItemCardParams {
  id: number;
  tipo: string;
  alquilado: boolean;
}

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  loading = true;
  message: string;

  id: number;
  tipo: string;
  alquilado: boolean;
  alquiladoText: string;

  constructor(
    @Optional() public matDialogRef: MatDialogRef<ItemCardComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) data: ItemCardParams,
  ) {
    Object.assign(this, data);
  }

  ngOnInit() {
    this.alquiladoText = this.alquilado ? 'Si' : 'No';
    this.loadImage();
  }

  loadImage() {
    setTimeout(x => {
      console.log('Doing stuff');
      this.loading = false;
      this.message = 'Image not available';
    }, 1000);
  }

}
