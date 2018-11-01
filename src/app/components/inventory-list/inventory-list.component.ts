import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// Services
import { ItemCardModalService } from '../../services/item-card-modal.service';

// Models
import { DetalleAlquiler } from '../alquiler/alquiler.component';

export interface Vehiculo {
  id: number;
  tipo: string;
  cliente: string;
  diasEnUso: number;
  alquilado: boolean;
  proxMant: string;
  inicioAlquiler: string;
}

const ELEMENT_DATA: Vehiculo[] = [
  { id: 1, tipo: 'Camion', cliente: 'Coca-Cola', diasEnUso: 45, alquilado: true, proxMant: '11/29/2018', inicioAlquiler: '10/02/2018' },
  { id: 2, tipo: 'Camion', cliente: 'Toyota', diasEnUso: 50, alquilado: true, proxMant: '11/29/2018', inicioAlquiler: '10/08/2018' },
  {
    id: 3, tipo: 'Montacargas', cliente: 'Coca-Cola', diasEnUso: 45, alquilado: true,
    proxMant: '11/29/2018', inicioAlquiler: '10/22/2018'
  },
  { id: 4, tipo: 'Camion', cliente: 'Coca-Cola', diasEnUso: 45, alquilado: true, proxMant: '11/29/2018', inicioAlquiler: '10/23/2018' },
  { id: 5, tipo: 'Montacargas', cliente: 'INS', diasEnUso: 21, alquilado: true, proxMant: '11/29/2018', inicioAlquiler: '10/12/2018' },
  { id: 6, tipo: 'Montacargas', cliente: 'INS', diasEnUso: 45, alquilado: true, proxMant: '11/29/2018', inicioAlquiler: '10/11/2018' },
  { id: 7, tipo: 'Camion', cliente: '-', diasEnUso: 643, alquilado: false, proxMant: '11/29/2018', inicioAlquiler: '10/17/2018' },
  { id: 8, tipo: 'Camion', cliente: '-', diasEnUso: 45, alquilado: false, proxMant: '11/29/2018', inicioAlquiler: '10/20/2018' },
  { id: 9, tipo: 'Camion', cliente: 'Toyota', diasEnUso: 34, alquilado: true, proxMant: '11/29/2018', inicioAlquiler: '10/03/2018' },
  { id: 10, tipo: 'Camion', cliente: 'Coca-Cola', diasEnUso: 745, alquilado: true, proxMant: '11/29/2018', inicioAlquiler: '10/29/2018' },
  { id: 11, tipo: 'Camion', cliente: 'Coca-Cola', diasEnUso: 12, alquilado: true, proxMant: '11/29/2018', inicioAlquiler: '10/29/2018' },
  { id: 12, tipo: 'Camion', cliente: 'Toyota', diasEnUso: 45, alquilado: true, proxMant: '11/29/2018', inicioAlquiler: '10/29/2018' },
  {
    id: 13, tipo: 'Montacargas', cliente: 'Coca-Cola', diasEnUso: 45, alquilado: true,
    proxMant: '11/29/2018', inicioAlquiler: '10/21/2018'
  },
  { id: 14, tipo: 'Camion', cliente: 'Coca-Cola', diasEnUso: 32, alquilado: true, proxMant: '11/29/2018', inicioAlquiler: '10/21/2018' },
  { id: 15, tipo: 'Montacargas', cliente: 'INS', diasEnUso: 45, alquilado: true, proxMant: '11/29/2018', inicioAlquiler: '10/23/2018' },
  {
    id: 16, tipo: 'Montacargas', cliente: 'INS', diasEnUso: 123, alquilado: true,
    proxMant: '11/29/2018', inicioAlquiler: '10/25/2018'
  },
  { id: 17, tipo: 'Camion', cliente: '-', diasEnUso: 0, alquilado: false, proxMant: '11/29/2018', inicioAlquiler: '10/27/2018' },
  { id: 18, tipo: 'Camion', cliente: '-', diasEnUso: 0, alquilado: false, proxMant: '11/29/2018', inicioAlquiler: '10/11/2018' },
  { id: 19, tipo: 'Camion', cliente: 'Toyota', diasEnUso: 54, alquilado: true, proxMant: '11/29/2018', inicioAlquiler: '10/14/2018' },
  { id: 20, tipo: 'Camion', cliente: 'Coca-Cola', diasEnUso: 23, alquilado: true, proxMant: '11/29/2018', inicioAlquiler: '10/24/2018' },
];

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})

export class InventoryListComponent implements OnInit {

  // Table settings and variables
  displayedColumns: string[] = ['id', 'tipo', 'cliente', 'diasEnUso', 'proxMant'];
  dataSource: MatTableDataSource<DetalleAlquiler>;
  tableData: Array<DetalleAlquiler>;

  totalVehiculos: any = '-';
  vehiculosAlquilados = 12;
  totalMant = 2;
  loading: boolean;

  // Firestore variables
  private itemsCollection: AngularFirestoreCollection<DetalleAlquiler>;
  items: Observable<any[]>;

  constructor(private itemCardModalService: ItemCardModalService, private db: AngularFirestore) {
    this.loading = true;
    this.itemsCollection = db.collection<DetalleAlquiler>('alquiler');
    this.items = this.itemsCollection.valueChanges();
    this.items.subscribe(data => {
      this.tableData = data;
      this.dataSource = new MatTableDataSource(this.tableData);
      this.totalVehiculos = this.dataSource.data.length;
      this.loading = false;
    })

  }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  openItemCardDialog(item) {
    this.itemCardModalService.openModal({
      id: item.id,
      tipo: item.tipo,
      alquilado: item.alquilado,
      cliente: item.cliente,
      inicioAlquiler: item.inicioAlquiler
    }).afterClosed().subscribe(result => {
      console.log('Item card dialog closed');
    });
  }



}
