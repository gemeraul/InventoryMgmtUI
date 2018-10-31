import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ItemCardParams {
  id: number;
  tipo: string;
  alquilado: boolean;
  cliente: string;
  inicioAlquiler: string;
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
  cliente: string;
  inicioAlquiler: string;

  alquiladoText: string;
  diasUso: any;

  constructor(
    @Optional() public matDialogRef: MatDialogRef<ItemCardComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) data: ItemCardParams,
  ) {
    Object.assign(this, data);
  }

  ngOnInit() {
    this.alquiladoText = this.alquilado ? 'Sí' : 'No';
    this.diasUso = new Date().getTime() - new Date(this.inicioAlquiler).getTime();
    this.diasUso = this.diasUso / 1000 / 60 / 60 / 24;
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
