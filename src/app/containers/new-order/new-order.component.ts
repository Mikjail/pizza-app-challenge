import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { PizzaValidators } from '../../validators/pizza.validator';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {
  toppings = [
    {name:'Bacon', selected:'true'}, 
    {name:'Pepperoni', selected:'true'}, 
    {name:'Mushroom', selected:'true'}, 
    {name:'Olive', selected:'true'}, 
    {name:'Basil', selected:'true'}, 
    {name:'SweetCorn', selected:'true'}, 
    {name:'Onion', selected:'true'}, 
    {name:'SweetCorn', selected:'true'}];

  constructor(private fb: FormBuilder) { }
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
  ngOnInit() {
  }

  createPizza() {
    return this.fb.group({
      size: ['large', Validators.required],
      toppings: []
    });
  }

  addPizza() {
    const control = this.myForm.get('pizzas') as FormArray;
    control.push(this.createPizza());
  }

  removePizza(index: number) {
    const control = this.myForm.get('pizzas') as FormArray;
    control.removeAt(index);
  }

  createOrder(order: FormGroup) {
    console.log(order.value);
    alert('Order placed');
  }

}
