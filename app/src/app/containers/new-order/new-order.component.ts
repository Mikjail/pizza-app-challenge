import { Prices } from 'src/app/models/PizzaInfo';
import { PizzaInfo, BasePizzaInfo } from './../../models/PizzaInfo';
import { PizzaService } from './new-order.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { PizzaValidators } from '../../validators/pizza.validator';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {

  constructor(private fb: FormBuilder, private pizzaService: PizzaService) { }

  myForm = this.fb.group({
    details: this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
    }, { validator: PizzaValidators.checkEmailsMatch }),
    pizzas: this.fb.array([
      this.createPizza()
    ])
  });

  pizzaInfo: PizzaInfo;

  prices: Prices;

  ngOnInit() {
    this.getPizzaDetails();
    this.getPrices([{size: 'large', toppings: []}]);
  }

  getPizzaDetails() {
    this.pizzaService.getPizzaDetails().subscribe(
     (response: BasePizzaInfo) => {
        this.pizzaInfo = new PizzaInfo(response);
      },
      err => {
        console.log(err);
      }
    );
  }

  /**
   * This will get the prices to
   * to show it in pizza-summary
   * @param {*} items
   * @memberof NewOrderComponent
   */
  getPrices(items) {
    this.pizzaService.updateSummary(items).subscribe(
      (response: Prices) => {
        this.prices = response;
      },
      err => {
        console.log(err);
      });
  }


  /**
   * this will create a pizza form
   *
   * @returns
   * @memberof NewOrderComponent
   */
  createPizza() {
    return this.fb.group({
      size: ['large', Validators.required],
      toppings: []
    });
  }

  /**
   * This will be trigger to add a new
   * pizza form
   * @memberof NewOrderComponent
   */
  addPizza() {
    const control = this.myForm.get('pizzas') as FormArray;
    control.push(this.createPizza());
  }

  /**
   * This will remove the form created
   *
   * @param {number} index
   * @memberof NewOrderComponent
   */
  removePizza(index: number) {
    const control = this.myForm.get('pizzas') as FormArray;
    control.removeAt(index);
  }

  /**
   * This will update the prices shown in Summary
   *
   * @memberof NewOrderComponent
   */
  updateSummary() {
    const items = this.myForm.get('pizzas').value;
    this.getPrices(items);
  }

  /**
   * This will submit the order made.
   *
   * @param {FormGroup} order
   * @memberof NewOrderComponent
   */
  createOrder(order: FormGroup) {
    console.log(order.value);
    alert('Order placed');
  }
}
