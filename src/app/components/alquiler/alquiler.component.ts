import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alquiler',
  templateUrl: './alquiler.component.html',
  styleUrls: ['./alquiler.component.css']
})
export class AlquilerComponent implements OnInit {

  formGroup: FormGroup;

  minDate = new Date();
  oldestCar = new Date(1995, 0, 1);
  maxDate = new Date(2020, 0, 1);
  years = [1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,
    2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2015, 2016, 2017, 2018
  ];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      id: [null, Validators.required],
      year: [null, Validators.required],
      tipo: [null, Validators.required],
      marca: [null, [Validators.maxLength(20), Validators.required]],
      cliente: [null, [Validators.maxLength(20), Validators.required]],
      fechaInicio: [null, Validators.required]
    });
  }

  submit() {
    console.log('Submitted stuff...');
  }

}
