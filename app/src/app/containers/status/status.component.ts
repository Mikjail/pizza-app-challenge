import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  orders= [{
    id: '1',
    address: 'street 123, UAE SHARJAH',
    name: 'nombre',
    phone: 123432,
    createdAt: '10/12/2019 10:30',
    status: 'pending'
  },
  {
    id: '1',
    address: 'street 123, UAE SHARJAH',
    name: 'nombre',
    phone: 123432,
    createdAt: '10/12/2019 10:30',
    status: 'accepted'
  },
  {
    id: '1',
    address: 'street 123, UAE SHARJAH',
    name: 'nombre',
    phone: 123432,
    createdAt: '10/12/2019 10:30',
    status: 'in-transit'
  },
  {
    id: '1',
    address: 'street 123, UAE SHARJAH',
    name: 'nombre',
    phone: 123432,
    createdAt: '10/12/2019 10:30',
    status: 'cancelled'
  },
  {
    id: '1',
    address: 'street 123, UAE SHARJAH',
    name: 'nombre',
    phone: 123432,
    createdAt: '10/12/2019 10:30',
    status: 'cancelled'
  },
  {
    id: '1',
    address: 'street 123, UAE SHARJAH',
    name: 'nombre',
    phone: 123432,
    createdAt: '10/12/2019 10:30',
    status: 'completed'
  }];

  constructor() { }

  ngOnInit() {
  }

}
