import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

export interface Vehiculo {
  id: number;
  tipo: string;
  cliente: string;
  diasEnUso: number;
  alquilado: boolean;
  proxMant: string;
}

const ELEMENT_DATA: Vehiculo[] = [
  { id: 1, tipo: 'Camion', cliente: 'Coca-Cola', diasEnUso: 45, alquilado: true, proxMant: '11/29/2018' },
  { id: 2, tipo: 'Camion', cliente: 'Toyota', diasEnUso: 50, alquilado: true, proxMant: '11/29/2018' },
  { id: 3, tipo: 'Montacargas', cliente: 'Coca-Cola', diasEnUso: 45, alquilado: true, proxMant: '11/29/2018' },
  { id: 4, tipo: 'Camion', cliente: 'Coca-Cola', diasEnUso: 45, alquilado: true, proxMant: '11/29/2018' },
  { id: 5, tipo: 'Montacargas', cliente: 'INS', diasEnUso: 21, alquilado: true, proxMant: '11/29/2018' },
  { id: 6, tipo: 'Montacargas', cliente: 'INS', diasEnUso: 45, alquilado: true, proxMant: '11/29/2018' },
  { id: 7, tipo: 'Camion', cliente: '-', diasEnUso: 643, alquilado: false, proxMant: '11/29/2018' },
  { id: 8, tipo: 'Camion', cliente: '-', diasEnUso: 45, alquilado: false, proxMant: '11/29/2018' },
  { id: 9, tipo: 'Camion', cliente: 'Toyota', diasEnUso: 34, alquilado: true, proxMant: '11/29/2018' },
  { id: 10, tipo: 'Camion', cliente: 'Coca-Cola', diasEnUso: 745, alquilado: true, proxMant: '11/29/2018' },
  { id: 11, tipo: 'Camion', cliente: 'Coca-Cola', diasEnUso: 12, alquilado: true, proxMant: '11/29/2018' },
  { id: 12, tipo: 'Camion', cliente: 'Toyota', diasEnUso: 45, alquilado: true, proxMant: '11/29/2018' },
  { id: 13, tipo: 'Montacargas', cliente: 'Coca-Cola', diasEnUso: 45, alquilado: true, proxMant: '11/29/2018' },
  { id: 14, tipo: 'Camion', cliente: 'Coca-Cola', diasEnUso: 32, alquilado: true, proxMant: '11/29/2018' },
  { id: 15, tipo: 'Montacargas', cliente: 'INS', diasEnUso: 45, alquilado: true, proxMant: '11/29/2018' },
  { id: 16, tipo: 'Montacargas', cliente: 'INS', diasEnUso: 123, alquilado: true, proxMant: '11/29/2018' },
  { id: 17, tipo: 'Camion', cliente: '-', diasEnUso: 0, alquilado: false, proxMant: '11/29/2018' },
  { id: 18, tipo: 'Camion', cliente: '-', diasEnUso: 0, alquilado: false, proxMant: '11/29/2018' },
  { id: 19, tipo: 'Camion', cliente: 'Toyota', diasEnUso: 54, alquilado: true, proxMant: '11/29/2018' },
  { id: 20, tipo: 'Camion', cliente: 'Coca-Cola', diasEnUso: 23, alquilado: true, proxMant: '11/29/2018' },
];

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})

export class InventoryListComponent implements OnInit {

  totalVehiculos = 18;
  vehiculosAlquilados = 12;
  totalMant = 2;

  displayedColumns: string[] = ['id', 'tipo', 'cliente', 'diasEnUso', 'proxMant'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
