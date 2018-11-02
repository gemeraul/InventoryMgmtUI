import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// Services
import { ItemCardModalService } from '../../services/item-card-modal.service';

// Models
import { Vehiculo } from '../alquiler/alquiler.component';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})

export class InventoryListComponent implements OnInit {

  // Table settings and variables
  displayedColumns: string[] = ['id', 'tipo', 'cliente', 'alquilado', 'diasEnUso', 'proxMant'];
  dataSource: MatTableDataSource<Vehiculo>;
  tableData: Array<Vehiculo>;

  totalVehiculos = 0;
  vehiculosAlquilados = 0;
  totalMant = 0;
  loading: boolean;
  today = new Date();

  // Firestore variables
  private itemsCollection: AngularFirestoreCollection<Vehiculo>;
  items: Observable<any[]>;

  constructor(private itemCardModalService: ItemCardModalService, private db: AngularFirestore) {
    this.loading = true;
    this.itemsCollection = db.collection<Vehiculo>('vehiculos');
    this.items = this.itemsCollection.valueChanges();
    // Raul: We have to subscribe instead of using async pipe because we need to unwrap the observable and convert it to an array to be 
    // able to use it as a valid datasource for the mat-table. We also need to iterate through it to get the values for summary variables.
    this.items.subscribe(data => {
      this.tableData = data;
      this.dataSource = new MatTableDataSource(this.tableData);
      this.getSummaryValues();
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

  getSummaryValues() {
    this.totalVehiculos = this.tableData.length;
    this.tableData.forEach(item => {
      if (item.alquilado && (new Date(item.finalAlquiler) >= this.today)) {
        let diff = this.today.getTime() - new Date(item.inicioAlquiler).getTime();
        item.diasEnUso = diff / (1000 * 3600 * 24);
      }
      if (item.alquilado) {
        this.vehiculosAlquilados += 1;
      }
      if ( (new Date(item.proxMant).getTime() - this.today.getTime() <= 7*1000*3600*24) || new Date(item.proxMant) <= this.today) {
        this.totalMant += 1;
      }
    })
  }

}
