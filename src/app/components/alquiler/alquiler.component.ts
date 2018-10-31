import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface DetalleAlquiler {
  id: number;
  year: number;
  marca: string;
  tipo: string;
  cliente: string;
  proxMant: string;
  inicioAlq: string;
}

@Component({
  selector: 'app-alquiler',
  templateUrl: './alquiler.component.html',
  styleUrls: ['./alquiler.component.css']
})
export class AlquilerComponent implements OnInit {

  formGroup: FormGroup;

  minDate = new Date();
  maxDate = new Date(2020, 0, 1);
  years = [1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,
    2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2015, 2016, 2017, 2018
  ];

  formItem: DetalleAlquiler;
  inicioAlq = new Date().toString();

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      id: [null, Validators.required],
      year: [null, Validators.required],
      tipo: [null, Validators.required],
      marca: [null, Validators.required],
      cliente: [null, Validators.required],
      proxMant: [null, Validators.required]
    });
  }

  submit() {
    this.formItem = {
      id: this.formGroup.get('id').value,
      year: this.formGroup.get('year').value,
      marca: this.formGroup.get('marca').value,
      tipo: this.formGroup.get('tipo').value,
      cliente: this.formGroup.get('cliente').value,
      proxMant: this.formGroup.get('proxMant').value.toString(),
      inicioAlq: this.inicioAlq
    };
    console.log('Submitted: ' + this.formItem);
    this.formGroup.reset();
  }

}
