import { FormArray } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pizza-summary',
  templateUrl: './pizza-summary.component.html',
  styleUrls: ['./pizza-summary.component.scss']
})
export class PizzaSummaryComponent implements OnInit {
  @Input()
  pizzasForm: FormArray;

  PizzaNames = {
    size: {
      large: 'Large Pizza',
      medium: 'Medium Pizza',
      small: 'Small Pizza'
    },
    prices: {
      size: {
        small: 5.99,
        medium: 7.99,
        large: 10.99,
      },
      toppings: {
        bacon: 0.99,
        pepperoni: 0.99,
        mushroom: 0.99,
        olive: 0.99,
        basil: 0.99,
        sweetcorn: 0.99,
        onion: 0.99,
        tomato: 0.99
      }
    }
  };

  constructor() { }

  ngOnInit() {
    console.log(this.pizzasForm.value);
  }

}
