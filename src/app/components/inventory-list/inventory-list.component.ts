import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {

  step = -1;
  items = [
    {name: 'Camion 01', status: 'Libre'},
    {name: 'Camion 02', status: 'Rentado'},
    {name: 'Camion 03', status: 'Libre'},
    {name: 'Camion 04', status: 'Rentado'},
    {name: 'Camion 05', status: 'Libre'},
    {name: 'Camion 06', status: 'Libre'},
    {name: 'Camion 07', status: 'Rentado'},
    {name: 'Camion 08', status: 'Libre'},
    {name: 'Camion 09', status: 'Libre'},
    {name: 'Camion 10', status: 'Rentado'},
    {name: 'Camion 11', status: 'Rentado'},
    {name: 'Camion 12', status: 'Libre'},
    {name: 'Camion 13', status: 'Libre'},
    {name: 'Camion 14', status: 'Rentado'},
    {name: 'Camion 15', status: 'Libre'},
    {name: 'Camion 16', status: 'Libre'},
    {name: 'Camion 17', status: 'Rentado'},
    {name: 'Camion 18', status: 'Libre'},
  ]

  constructor() { }

  ngOnInit() {
  }
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
