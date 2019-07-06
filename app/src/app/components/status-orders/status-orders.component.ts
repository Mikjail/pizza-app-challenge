import { Component, OnInit, Input } from '@angular/core';
import { Orders } from 'src/app/models/Orders';
import _ from 'lodash';

@Component({
  selector: 'app-status-orders',
  templateUrl: './status-orders.component.html',
  styleUrls: ['./status-orders.component.scss']
})
export class StatusOrdersComponent implements OnInit {
  @Input()
  orders: Orders[];

  totalItems: number;

  completedWidth: string;
  pendingWidth: string;
  cancelledWidth: string;
  countCompleted: number;
  countPending: number;
  countCancelled: number;

  constructor() { }

  ngOnInit() {
    this.totalItems = this.orders.length;
    this.statusBarCalculator();
  }

  statusBarCalculator() {
    this.countCompleted = this.howManyMatch('completed');
    this.countPending = this.howManyMatch('pending');
    this.countCancelled = this.howManyMatch('cancelled');

    this.completedWidth = this.calculateTotalPercent(this.countCompleted);
    this.pendingWidth = this.calculateTotalPercent(this.countPending);
    this.cancelledWidth = this.calculateTotalPercent(this.countCancelled);
  }

  calculateTotalPercent(value) {
    return ((value / this.totalItems) * 100).toFixed(2);
  }

  howManyMatch(status) {
    const count = _.groupBy(this.orders, (order) => {
      return order.status === status;
    });
    if (count.true) {
      return count.true.length;
    }
    return 0;
  }

}
