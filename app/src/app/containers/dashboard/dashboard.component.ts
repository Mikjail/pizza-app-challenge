import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('lineChart', { static: false }) private chartRef;
  chart: any;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    // this.getOrders();
  }
  ngAfterViewInit() { 

    const ctx = this.chartRef.nativeElement.getContext('2d');
    setTimeout(() => {
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['8am', '11am', '1pm', '4pm', '7pm', '10pm'],
          datasets: [{
            data: [10, 20, 3, 40, 4, 10],
            label: 'Orders',
            borderColor: '#f88930',
            backgroundColor: 'rgba(254, 252, 247, 0.3)',
            fill: true
          }],
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
    });
    });
  }

  getOrders() {
    this.dashboardService.getReport().subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
  }
}
